<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>
            <span class="headline">Cadastro</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="name"
                label="Nome"
                :rules="[v => !!v || 'Nome é obrigatório']"
                required
              ></v-text-field>
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
              <v-btn :disabled="!valid" @click="register">Cadastrar</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async register() {
      if (this.$refs.form.validate()) {
        try {
          const response = await this.$nuxt.$axios.post('/api/users/register', {
            name: this.name,
            email: this.email,
            password: this.password,
          });
          alert('Usuário registrado com sucesso!');
          this.$router.push('/login');
        } catch (error) {
          console.error('Erro ao registrar usuário:', error);
          alert('Erro ao registrar usuário.');
        }
      }
    },
  },
};
</script>
