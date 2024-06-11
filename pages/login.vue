<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>
            <span class="headline">Login</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="email"
                label="Email"
                :rules="[v => !!v || 'Email é obrigatório', v => /.+@.+\..+/.test(v) || 'Email deve ser válido']"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Senha"
                type="password"
                :rules="[v => !!v || 'Senha é obrigatória']"
                required
              ></v-text-field>
              <v-btn :disabled="!valid" @click="login">Login</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  data() {
    return {
      valid: false,
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      if (this.$refs.form.validate()) {
        try {
          const response = await this.$nuxt.$axios.post('/users/login', {
            email: this.email,
            password: this.password,
          });
          const token = response.data.token;
          Cookies.set('auth_token', token, { expires: 7, secure: true, sameSite: 'Strict' });
          alert('Login realizado com sucesso!');
          this.$router.push('/');
        } catch (error) {
          console.error('Erro ao fazer login:', error);
          alert('Erro ao fazer login.');
        }
      }
    },
  },
};
</script>
