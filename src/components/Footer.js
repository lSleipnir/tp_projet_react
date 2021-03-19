import React, {Component} from "react";

export default class Footer extends Component {
    render() {
        return <footer className="mt-4 py-4">
            <div className="text-center">
                <p>M. Dupont Laurent</p>
                <div className="row">
                    <div className="col-md-4">
                        <a href="https://linkedin.com" target="_blank" className="text-dark">Linkedin</a>
                    </div>
                    <div className="col-md-4">
                        <a href="https://facebook.com" target="_blank" className="text-dark">Facebook</a>
                    </div>
                    <div className="col-md-4">
                        <a href="https://instagram.com" target="_blank" className="text-dark">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    }
}