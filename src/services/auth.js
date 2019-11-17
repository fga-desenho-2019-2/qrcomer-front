import HttpClientBuilder from "../infra/HttpClientBuilder.js";
import API_URL from './mainService'

export default class AuthService {
    constructor() {
        this.client = HttpClientBuilder.buildClient({
            // TO-DO: remove hard coded
            baseURL: API_URL
        });
    }

    async signUser(params) {
        let body = {
            cpf: params.cpf,
            password: params.password,
            birth_date: params.birth_date,
            sex: params.sex,
            email: params.email,
            first_name: params.first_name,
            last_name: params.last_name,
        };
        
        let response = await this.client.post(`/api/user/`, body);
        return response;
    }
}
