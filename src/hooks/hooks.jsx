const BASE_URL = 'http://localhost:3000';
import axios from 'axios'; 

const getAllCategories = async() => {
    try {
        const response = await axios.get(BASE_URL + '/categories ');
        console.log("resp: ", response.data);
        return response.data;
    } catch (error) {
        return error;
    }
}

export { BASE_URL, getAllCategories};