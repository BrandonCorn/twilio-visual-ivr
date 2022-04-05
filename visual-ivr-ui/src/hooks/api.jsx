import twilioApi from './axiosTwilio';
import airBaseApi from './axiosAirBase';

export const updateIvr = (state, params) => {
    return new Promise((resolve, reject) => {
        twilioApi.get('/update-ivr', {
            params: {
                state,
                ...params
            }
        })
            .then(response => {
                if (response.ok) {
                    console.log('ivr update called successfully');
                    return resolve(response);
                }
                return resolve(response);
            })
            .catch(err => {
                console.log('An error occured with the request');
                console.log(err);
                return reject(err);
            });
    });
}

export const updateAirTable = (userState) => {
    return new Promise((resolve, reject) => {
        airBaseApi.post('/Appointments', {
            "records": [
                {
                    "fields": {
                        "Name": "Kent",
                        "Email": userState.email
                    }
                }
            ]
        })
            .then(response => {
                if (response.ok) {
                    console.log('Air Table update called successfully');
                    return resolve(response);
                }
                return resolve(response);
            })
            .catch(err => {
                console.log('An error occured with the Air Table request');
                console.log(err);
                return reject(err);
            });
    });
}

export const joinConference = (body) => {

}