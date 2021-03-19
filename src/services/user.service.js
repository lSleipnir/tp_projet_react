import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com";

export default class UserService{

    static async list(limit = null){
        let call = await axios.get(`${baseUrl}/users`);
        let users = limit !== null ? call.data.slice(0, limit) : call.data;
        let tasks = await axios.get(`${baseUrl}/todos`);
        for (let user of users) {
            let nb = 0;
            for (const task of tasks.data) {
                if(user.id === task.userId) {
                    nb++;
                }
            }
            user.task = nb;
        }
        return users;
    }

    static async details(id) {
        return await axios.get(`${baseUrl}/users/${id}`)
    }
}