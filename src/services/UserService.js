import axios from "axios/index";

export default class UserService {
    static users = [];

    static getUserInfo(userId) {

        const result = UserService.users.find(item => item.id == userId);

        if (result) {
            return new Promise(resolve => {
                resolve(result);
            });
        } else {
            return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then((response) => {
                UserService.users.push(response.data);
                return response.data;
            });
        }
    }

}