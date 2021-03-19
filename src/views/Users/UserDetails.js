import React, {Component} from "react";
import UserService from "../../services/user.service";

export default class UserDetails extends Component {

    constructor(props) {
        super(props);
        this.state= {
            user: null
        }
    }

    async componentDidMount() {
        let {id} = this.props.match.params;
        let response = await UserService.details(id);
        this.setState({user: response.data});
    }

    render() {
        let {user} = this.state;
        return <div className="container">
            <h2 className="text-center mt-4">Détail Utilisateur : {user && user.name}</h2>
            <hr/>
            <div className="row">
                <div className="offset-md-4 col-md-4">
                    <div className="row">
                        <div className="col-md-6">Username :</div>
                        <div className="col-md-6">{user && user.username}</div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-6">E-mail :</div>
                        <div className="col-md-6">{user && user.email}</div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-6">Phone :</div>
                        <div className="col-md-6">{user && user.phone}</div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-6">City :</div>
                        <div className="col-md-6">{user && user.address.city}</div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-6">Zip-code :</div>
                        <div className="col-md-6">{user && user.address.zipcode}</div>
                    </div>
                </div>
            </div>


        </div>

        //{post && post.title} on vérifie que post existe et si oui alors on écrit post.title
    }
}