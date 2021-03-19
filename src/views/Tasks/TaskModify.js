import React, {Component} from "react";
import TaskService from "../../services/task.service";
import {Link} from "react-router-dom";

export default class TaskModify extends Component {

    constructor(props) {
        super(props);
        this.state= {
            title: "",
            completed: false,
            task: {}
        }
    }

    async componentDidMount() {
        let {id} = this.props.match.params;
        let response = await TaskService.details(id);
        this.setState({task: response.data, title: response.title, completed: response.completed});
    }

   handleChange(e) {
       this.setState({
           [e.target.id] : e.target.value
       });
   }

    async handleSubmit(e) {
        e.preventDefault();

        let {title, completed} = this.state;
//
        let data = {
            title: title,
            completed: completed,
            userId: 1
        }

        let {id} = this.props.match.params;
        let call = await TaskService.modify(id, data);
        console.log(call);
        this.props.history.push('/tasks');
    }

    render() {
        let {task, title, completed} = this.state;
        return <div className="container">
            <h2 className="text-center mt-4">Modifier une tâche</h2>
            <hr/>

            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                    <label>Titre</label>
                    <input type="text" id="title" className="form-control" value={title} required
                           onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className="form-group row mt-4">
                    <div className="col-md-4">
                        Status :
                    </div>
                    <div className="col-md-6">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="completed" id="false"
                                   checked = {completed ? false : true}
                                   onChange={(event) => this.handleChange(event)}/>
                            <label className="form-check-label" htmlFor="false">
                                En cours
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="completed" id="true"
                                   checked = {completed ? true : false}
                                   onChange={(event) => this.handleChange(event)}/>
                            <label className="form-check-label" htmlFor="true">
                                Terminé
                            </label>
                        </div>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Enregistrer</button>
            </form>
        </div>
    }
}