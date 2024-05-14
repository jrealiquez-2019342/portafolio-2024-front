import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:2657',
    timeout: 5000
})

export const getTask = async()=>{
    try {
        return await apiClient.get('/task');
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}