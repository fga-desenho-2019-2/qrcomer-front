import axios from "axios";

export default class HttpClientBuilder {
    static buildClient(options) {
        let client = axios.create(options);

        //default interceptor for request
        //TODO : refresh token
        client.interceptors.request.use(config => {
            config.headers.authorization = localStorage.getItem("user-token");
            return config;
        });

        //default interceptor for response
        client.interceptors.response.use(
            res => {
                return res;
            },
            error => {
                
                if (error.response) {
                    
                    if (error.response.status === 404 && error.config.method === "get") {
                        error.response.data = undefined;
                        return error.response;
                    }
                    return error.response;
                } else {
                    throw error;
                }
            }
        );

        return client;
    }
}