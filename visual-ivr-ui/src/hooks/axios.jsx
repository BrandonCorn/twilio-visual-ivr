import axios from 'axios'; 

const apiRequests = () => {
    const baseURL = process.env.REACT_APP_API_BASE_URL || '';
    const api = axios.create({
        baseURL,
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    }); 

    return api; 
}

export default apiRequests();