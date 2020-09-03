import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import CustomisedMessage from '../../api/CustomisedMessage'
class WelcomeComponent extends Component{

    constructor(props){
        super(props)
        this.CustomizedClick= this.CustomizedClick.bind(this)
        this.state={
            welcome:''

        }
        this.handleWelcome = this.handleWelcome.bind(this)
    }
    render(){

        return(<div><h1>Welcome {this.props.match.params.name}</h1>
        <div className="container">You can manage your todos <Link to ="/todos">here</Link> </div>
        
        <div className="container">You can get your customized message . 
        <button className="btn btn-success" onClick={this.CustomizedClick}>Click</button> 
        <div>{this.state.welcome}</div>
         </div>
       
       </div> )
    }
    
    CustomizedClick(){
        
        CustomisedMessage.executeCustomisedPathMessage(this.props.match.params.name)
        .then(response=> this.handleWelcome(response))
       
    }
    
    handleWelcome(response){
        this.setState({welcome : response.data.message})
    }
    
    }
    export default WelcomeComponent