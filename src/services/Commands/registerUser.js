import {
    validationUtil
} from "../../utils/ValidationUtils";
import AuthService from "../../services/auth";

let auth = new AuthService();

export async function registerUser() {
    let body = {
        cpf: validationUtil.cleanMaskCpf(this.cpf),
        password: this.password,
        birth_date: this.birth_date,
        sex: this.selectedSexo,
        email: this.email,
        first_name: this.first_name,
        last_name: this.last_name
    };
    let response = await auth.signUser(body);

    if (response.status >= 400) {
        this.errors = response.data.Error;
        return;
    } else {
        this.loginUser();
    }
}