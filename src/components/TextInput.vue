
<template>

</template>

<script>
export default {
    props: ['placeholder', 'value'],
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 50) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      emailRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 8) || 'Password must be bigger than 8 characters',
      ],
      telephone: '',
      telefoneRules: [
        v => !!v || 'Telephone is required',
        v => /.+@.+\..+/.test(v) || 'Telephone must be valid',
      ],
      cpf: '',
      cpfRules: [
        v => !!v || 'CPF is required',
        v => /.+@.+\..+/.test(v) || 'CPF must be valid',
      ],
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>

<style lang="scss" scoped>
    $primary: #353535;
    $accent: #eb4476;

    .input-field {
        position: relative;
        padding: 15px 15px;
        width: 500px;

        &::before,
        &::after {
            content: ' ';
            position: absolute;
            bottom: 0;
            border-bottom: 2px $primary solid;
            transition: 0.3s;
        }

        &::after {
            left: 50%;
            right: 50%;
            border-bottom: 2px $accent solid;
        }

        &::before,
        &.focus::after {
            left: 0;
            right: 0;
        }

        input[type='text'] {
            border: 0;
            outline: 0;
            background-color: transparent;
            font-family: 'Segoe UI', 'San Francisco', 'Roboto', sans-serif;
            font-size: 1em;
            width: 100%;
            color: $primary;
        }
    }

    ::placeholder {
        color: #353535;
    }

</style>