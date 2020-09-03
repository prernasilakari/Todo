import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import AuthenticationRoute from './AuthenticationRoute.jsx';
import LoginComponent from './LoginComponent'
import TodoComponent from './TodoComponent'
import Header from './Header'
import Footer from './Footer'
import LogoutComponent from './LogoutComponent'
import WelcomeComponent from './WelcomComponent'
import ErrorComponent from './ErrorComponent'
import UpdateTodo from './UpdateTodo.js';

class TodoApp extends Component{

render(){

    return(
            <div className="Todo">
                
                <Router>
                    
                    <>
                    <Header/>
                    <Switch>
                    <Route path ="/" exact component={LoginComponent}/>
                    <Route path ="/login" component={LoginComponent}/>
                    <AuthenticationRoute path ="/welcome/:name" component={WelcomeComponent}/>
                    <AuthenticationRoute path ="/uTodo/:id" component={UpdateTodo}/>
                    <AuthenticationRoute path ="/todos" component={TodoComponent}/>
                    <AuthenticationRoute path ="/logout" component={LogoutComponent}/>
                    <Route component={ErrorComponent}/>
                    </Switch>
                    <Footer/>
                    </>

                </Router>
              
            </div>


    )
}


}



export default TodoApp;