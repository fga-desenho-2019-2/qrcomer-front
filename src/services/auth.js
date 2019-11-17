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
            email: params.email,
        };
        
        let response = await this.client.post(`api/user/`, body);
        return response;
    }
}
