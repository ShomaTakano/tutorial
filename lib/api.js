import { createClient } from 'microcms-js-sdk'

export const client = createClient({
    serviceDomain: process.env.REACT_APP_SERVICE_DOMAIN,
    apikey: process.env.REACT_APP_API_KEY,
})
