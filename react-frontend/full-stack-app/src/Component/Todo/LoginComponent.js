import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService.js';


class LoginComponent extends Component{


    constructor(props){
        super(props)

        this.state={

            username:'admin',
            password:'',
            hasLoginFailed: false,
            ShowSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

handleChange(event){
    console.log(this.state);
    this.setState({
        [event.target.name]: event.target.value
    })



 
}
loginClicked(){
    console.log(this.state)
    if(this.state.username==='admin'&& this.state.password==='pass')
    { AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
       // this.props.history.push(`/welcome/${this.state.username}`)
        window.location.href=`/welcome/${this.state.username}`
    console.log('success')}
    else
    {this.setState({ShowSuccessMessage:false})
    this.setState({hasLoginFailed:true})
        console.log('failed')
}


// AuthenticationService
// .executeBasicAuthService(this.state.username, this.state.password)
// .then(()=>{
//     AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
//        // this.props.history.push(`/welcome/${this.state.username}`)
//         window.location.href=`/welcome/${this.state.username}`
// }).catch( ()=>{
//     this.setState({ShowSuccessMessage:false})
//     this.setState({hasLoginFailed:true})
//         console.log('failed')
// }
// )




}
















render(){

return(
<div>
    <h1>Login</h1>
<div className="container">
    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
    {this.state.ShowSuccessMessage && <div>Login Successful</div>}
    username: <input type = "text" name="username" value={this.state.username} onChange={this.handleChange}/>
    password: <input type = "password" name="password"value={this.state.password} onChange={this.handleChange}/>

    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
</div>
</div>
)

}

}

export default LoginComponent