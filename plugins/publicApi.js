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
    // publicApi.setBaseURL('http://localhost:8080/api/')
    publicApi.setBaseURL('https://acegiftingsolutions.com/api/')

    

    // Inject to context as $api
    inject('publicApi', publicApi)
}