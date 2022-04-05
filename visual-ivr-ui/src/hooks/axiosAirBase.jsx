import axios from 'axios'; 

const apiRequests = () => {
    const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIR_TABLE_BASE_ID}` || '';
    const airBaseApi = axios.create({
        baseURL,
        headers: {
            "Authorization": `Bearer ${process.env.REACT_APP_AIR_TABLE_API_KEY}`
        }
    }); 

    return airBaseApi; 
}

export default apiRequests();