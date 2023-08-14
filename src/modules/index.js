import axios from "axios"

export const test_api = async () => {
    try {
        return await axios.get(get_url('/api'), {headers: {
            'X-Token': localStorage.getItem('x-token')
        }})
    } catch (error) {
        return error.response;
    }
}

export const get_url = (route) => {
    return `http://188.213.197.57:5000${route}`
}

export const signin = async (username, password) => {
    try {
        return await axios.post(get_url('/login'), {username, password})
    } catch (error) {
        return error.response;
    }
}

export const get_students = async () => {
    try {
        return await axios.get(get_url('/students'), {headers: {
            'X-Token': localStorage.getItem('x-token')
        }})
    } catch (error) {
        return error.response;
    }
}

export const download_excel = async (nCode) => {
    try {
        return await axios.get(get_url('/student?nCode=' + nCode), {headers: {
            'X-Token': localStorage.getItem('x-token')
        }})
    } catch (error) {
        return error.response;
    }
}