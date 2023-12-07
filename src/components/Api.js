import axios from "axios";

const BASE_URL = `https://656859159927836bd9749a77.mockapi.io/api/adverts`;


export const fetchCars = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/adverts`, );
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};


