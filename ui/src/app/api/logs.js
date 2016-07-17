import env from '../../environments/env';
import axios from 'axios';

module.exports = {
    latestLogMessage() {
        return axios({
            url: `${env.LOGS_SERVER_URL}/latest`,
            method: 'get',
            responseType: 'json'
        });
    },
    getAllLogs() {
        return axios({
            url: `${env.LOGS_SERVER_URL}/logs`,
            method: 'get',
            responseType: 'json' 
        });
    }
};
