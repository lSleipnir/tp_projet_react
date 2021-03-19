import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"; // pour création system de routing
import Home from "./views/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TasksList from "./views/Tasks/TasksList";
import TaskAdd from "./views/Tasks/TaskAdd";
import TaskDetail from "./views/Tasks/TaskDetail";
import TaskModify from "./views/Tasks/TaskModify";
import UserDetails from "./views/Users/UserDetails";
import UsersList from "./views/Users/UsersList";

export default class App extends Component {
  render() {
    return <BrowserRouter>
      <Header/>
      <Switch>

        <Route exact path="/" component={Home}/>
        <Route exact path="/tasks" component={TasksList}/>
        <Route exact path="/tasks/add" component={TaskAdd}/>
        <Route exact path="/tasks/:id" component={TaskDetail}/>
        <Route exact path="/tasks/:id/modify" component={TaskModify}/>

        <Route exact path="/users" component={UsersList}/>
        <Route exact path="/users/:id" component={UserDetails}/>

      </Switch>
      <Footer/>
    </BrowserRouter>

  }

}