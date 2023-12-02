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


// {
//             headers: {
//                 // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN', 
//                 'Content-Type': 'application/json',
//             },
//         }

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmZkYjkxMjcyMjg3MGUyMzg4ZGQ0MzU3ODJjYTU2ZiIsInN1YiI6IjY0Y2NmNzU0NzY0Yjk5MDBlM2JhNWFkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.In4jq0rW_1654XErrGjwD7GHNgYJB4wzMI8zmAAIdDg'
//   }
// };