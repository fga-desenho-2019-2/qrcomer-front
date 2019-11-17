import { validationUtil } from "../../utils/ValidationUtils";
import AuthService from "../../services/auth";

let auth = new AuthService();

export async function registerUser() {
    let body = {
        cpf: validationUtil.cleanMaskCpf(this.cpf),
        password: this.password,
        email: this.email,
    };
    let response = await auth.signUser(body);
    if (response.status >= 400) {
        this.errors = response.data;
        return;
    } else {
        this.loginUser();
    }
}