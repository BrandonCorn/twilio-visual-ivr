import axios from 'axios'; 

const apiRequests = () => {
    const baseURL = process.env.REACT_APP_API_BASE_URL || '';
    const twilioApi = axios.create({
        baseURL,
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    }); 

    return twilioApi; 
}

export default apiRequests();