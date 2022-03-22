export default function ({ $axios, app }, inject) {
    // Create a custom axios instance
    const publicApi = $axios.create({
        headers: {
            common: {
              Accept: 'application/json'
            }
        },
    })

    // Set baseURL to something different
    // publicApi.setBaseURL('http://localhost:8080/')
    publicApi.setBaseURL('https://ace-nuxt-backend.herokuapp.com/')

    

    // Inject to context as $api
    inject('publicApi', publicApi)
}