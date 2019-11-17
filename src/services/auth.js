import HttpClientBuilder from "../infra/HttpClientBuilder.js";
import API_URL from "./mainService" 

export default class AuthService {
    constructor() {
        this.client = HttpClientBuilder.buildClient({
            baseURL: API_URL
        });
    }

    async signUser(params) {
        let body = {
            cpf: params.cpf,
            password: params.password,
            email: params.email,
        };
        
        let response = await this.client.post(`/user`, body);
        return response;
    }
}
