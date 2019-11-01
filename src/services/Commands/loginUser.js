export function loginUser() {
    const {
        email,
        password
    } = this;
    this.$store
        .dispatch("auth/AUTH_REQUEST", {
            email,
            password
        })
        .then(() => {
            this.$router.push("/auth_test"); //Todo: redirecionar para outra página
        });
}