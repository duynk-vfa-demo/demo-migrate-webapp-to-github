import axios from 'axios';
import Env from '../constants/Env.jsx';

class API {
    get(path) {
        return axios.get(Env.apiUrl + path);
    }
}

export default API;
