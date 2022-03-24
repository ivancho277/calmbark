import axios from "axios";
const randomImgUrl = "https://dog.ceo/api/breeds/image/random";


async function fetchdogpic() {
    return await axios.get(randomImgUrl).then((response) => {
        console.log('----------------------------------------------------');
        console.log(response.data.message);
        console.log('----------------------------------------------------');
       // console.log(response);
        return response.data.message;
    })
}

export default fetchdogpic;