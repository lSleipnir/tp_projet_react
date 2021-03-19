import React, {Component} from "react";
import TaskService from "../../services/task.service";

export default class TaskAdd extends Component{

    constructor(props) {
        super(props);
        this.state = {
            title: null,
            status: false,
            userName: null,
        };
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    async handleSubmit(e) {
        e.preventDefault();
        let {title} = this.state;
        let data = {
            title: title,
            status: false,
            userId: 1
        }
        await TaskService.create(data);         //ajout de l'article
        this.props.history.push('/tasks');      //dès qu'on ajoute on est redirigé sur la route
        console.log(data);
    }

    render() {
        return <div className="container">
            <h2 className="text-center mt-4">Ajouter une tâche</h2>
            <hr/>

            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                    <label>Titre de la tâche</label>
                    <input type="text" id="title" className="form-control" required
                           onChange={(event) => this.handleChange(event)}/>
                </div>
                <button type="submit" className="btn btn-primary mt-4">Ajouter</button>
            </form>
        </div>
    }
}