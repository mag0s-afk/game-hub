import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '238c79267f2c47dba20dafa38fd095af'
    }
})