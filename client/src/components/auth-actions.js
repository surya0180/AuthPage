import axios from 'axios'

export const user = async () => {
    let token = localStorage.getItem('token')
    if(token) {
        axios.defaults.headers.common['x-auth-token'] = token
    } else {
        delete axios.defaults.headers.common['x-auth-token']
    }

    try {
        const result = await axios.get('/api/auth')
        return {status: 'success', payload: result.data}
    } catch (error) {
        return {status: 'failure'}
    }
}

export const register = async ({ firstname, lastname, email, phone, address, password }) => {
    const config = {
        headers: {
            'Content-type': 'application/json',
        }
    }
    const body = JSON.stringify({ firstname, lastname, email, phone, address, password })
    try {
        const result = await axios.post('/api/users', body, config)
        return { status: 'success', payload: result.data }
    } catch (error) {
        return { status: 'failure', payload: error.response.data.errors }
    }
}

export const login = async ( email, password ) => {
    const config = {
        headers: {
            'Content-type': 'application/json',
        }
    }
    const body = JSON.stringify({ email, password })
    try {
        const result = await axios.post('/api/auth', body, config)
        return { status: 'success', payload: result.data }
    } catch (error) {
        return { status: 'failure', payload: error.response.data.errors }
    }
}