import React, {Component} from "react";
import Task from "../../components/Task";
import TaskService from "../../services/task.service";
import {Link} from "react-router-dom";

export default class TasksList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    async componentDidMount() {
        let tasks = await TaskService.list();
        this.setState({tasks: tasks});
        console.log(tasks);
    }

    render() {
        let {tasks} = this.state;
        return <div className="container">
            <h1 className="text-center mt-4">Liste des tâches</h1>
            <hr/>
            <Link to="/tasks/add" className="btn btn-success d-block m-auto w-25">Ajouter</Link>
            <div className="row mt-4">
            {
                tasks.map((task, index) => {
                    return <div className="col-md-4" key={index}>
                        <Task task={task} />
                    </div>
                })
            }
            </div>
        </div>
    }
}