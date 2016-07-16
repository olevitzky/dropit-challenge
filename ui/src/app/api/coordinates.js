import env from '../../environments/env';
import axios from 'axios';

module.exports = {
    latestCoordinates() {
        return axios({
            url: `${env.TRACKING_SERVER_URL}/latest`,
            method: 'get',
            responseType: 'json'
        });
    }
};
