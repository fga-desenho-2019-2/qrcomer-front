export async function login() {
    if (this.$refs.form.validate()) {
        if (this.loginType) {
            this.loginUser();
        } else {
            try {
                await this.registerUser();
            } catch (err) {
                throw err;
            }
        }
    }
}