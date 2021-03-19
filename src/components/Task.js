import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Task extends Component {

    render() {
        let {task} = this.props;

        return (
            <div className="card">
                <div className="card-body" >
                    <h5 className="card-title">{task.title}</h5>
                    <p className="card-text">Status : {task.completed ? "Terminé" : "En cours"}</p>
                    <p className="card-text">Utilisateur associé : {task.user.name}</p>
                    <Link to={`/tasks/${task.id}`} className="btn btn-primary mr-4">Détails</Link>
                </div>
            </div>
        );
    }

}