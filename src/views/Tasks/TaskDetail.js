import React, {Component} from "react";
import TaskService from "../../services/task.service";
import {Link} from "react-router-dom";

export default class TaskDetail extends Component {

    constructor(props) {
        super(props);
        this.state= {
            task: null
        }
    }

    async componentDidMount() {
        let {id} = this.props.match.params;
        let response = await TaskService.details(id);
        this.setState({task: response});
    }

    async handleDelete() {
        let {task} = this.state;
        await TaskService.delete(task.id);
        this.props.history.push('/tasks');
    }

    render() {
        let {task} = this.state;
        return <div className="container">
            <h2 className="text-center mt-4">Détail de la tâche</h2>
            <hr/>
            <div className="row">
                <div className="offset-md-4 col-md-4">
                    <div className="row">
                        <div className="col-md-6">Titre :</div>
                        <div className="col-md-6">{task && task.title}</div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-6">Status :</div>
                        <div className="col-md-6">{task && task.completed ? "Terminé" : "En cours"}</div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-6">Utilisateur associé :</div>
                        <div className="col-md-6"><Link to={`/users/${task && task.userId}`}>{task && task.user.name}</Link></div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-6">
                            <button className="btn btn-danger d-block w-50" onClick={() => this.handleDelete()}>Supprimer</button>
                        </div>
                        <div className="col-6">
                            <Link to={`/tasks/${task && task.id}/modify`} className="btn btn-warning ml-4 d-block w-50">Modifier</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}