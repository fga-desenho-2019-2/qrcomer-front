import HttpClientBuilder from "../infra/HttpClientBuilder.js";

export default class AuthService {
    constructor() {
        this.client = HttpClientBuilder.buildClient({
            // TO-DO: remove hard coded
            baseURL: 'http://0.0.0.0:8000/'
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
        
        let response = await this.client.post(`api/user/`, body);
        return response;
    }
}
