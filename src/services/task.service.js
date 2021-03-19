import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com";

export default class TaskService{

    static async list(limit = null){
        let call = await axios.get(`${baseUrl}/todos`);
        let tasks = call.data;
        let users = await axios.get(`${baseUrl}/users`);
        for (let task of tasks) {
            for (const user of users.data) {
                if (user.id === task.userId) task.user = user;
            }
        }
        return tasks;
    }

    static async create(data) {
        return await axios.post(`${baseUrl}/todos`, data);
    }

    static async details(id) {
        let call = await axios.get(`${baseUrl}/todos/${id}`);
        let task = call.data;
        let users = await axios.get(`${baseUrl}/users`);
        for (const user of users.data) {
            if (user.id === task.userId) task.user = user;
        }
        return task;
    }

    static async delete(id) {
        return await axios.delete(`${baseUrl}/todos/${id}`);
    }

    static async modify(id, data) {
        return await axios.put(`${baseUrl}/todos/${id}`, data);
    }

}