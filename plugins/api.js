export default function ({ $axios, app }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
        headers: {
            common: {
              Accept: 'application/json'
            }
        },
        credentials: true,
    })

    // Set baseURL to something different
    api.setBaseURL('http://localhost:8080/')
    // api.setBaseURL('https://ace-nuxt-backend.herokuapp.com/')

    api.interceptors.request.use(
        config => {
            if(!config.headers.authorization){
                if (app.$auth.loggedIn) {
                    config.headers.authorization = `${app.$auth.strategy.token.get()}`;
                }
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    api.interceptors.response.use(
        response => response,
        async (error) => {
            const prevRequest = error?.config;
            if((error?.response?.status === 403 || error?.response?.status === 401) && !prevRequest?.sent){
                prevRequest.sent = true;
                await app.$auth.refreshTokens('refresh')
                prevRequest.headers.authorization = `${app.$auth.strategy.token.get()}`;
                return api(prevRequest);
            }
            return Promise.reject(error);
        }
    );

    

    // Inject to context as $api
    inject('api', api)
}