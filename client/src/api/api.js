const api = {

    mainApi: async (url, method, data) => {
        try {
            let options = {
                method,
                headers: { 'Content-Type': 'application/json' },
            }
            if(data) options.body= JSON.stringify(data)
            const BaseUrl = "http://localhost:5042/ReportHours/"
            return fetch(BaseUrl + url,options)
                .then(res => res.json())
        }
        catch (err) {
            console.error("cennot post:", err)
            return err
        }
    },

    post: async (url, body) => api.mainApi(url, 'POST', body),
    get: async (url) => api.mainApi(url, 'GET'),
    put: async (url, body) => api.mainApi(url, 'PUT', body),
    delete: async (url) => api.mainApi(url, 'DELETE'),
}

export default api;