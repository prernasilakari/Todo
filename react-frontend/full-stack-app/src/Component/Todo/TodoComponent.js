
import React, { Component } from 'react';
import TodoApi from '../../api/TodoApi';
import AuthenticationService from './AuthenticationService'


class TodoComponent extends Component{




    constructor(props){
        super(props)
        this.state={
        todos : [],
        message : null
        }
        this.updateClicked =this.updateClicked.bind(this)
        this.deleteClicked =this.deleteClicked.bind(this)
        this.refreshPage= this.refreshPage.bind(this)
        this.addClick = this.addClick.bind(this)
    }

    
    componentDidMount(){
        this.refreshPage()
        
    }
    refreshPage(){
        
        let name =AuthenticationService.getLoginUser()
    
    
        TodoApi.executeTodo(name).then(
           response =>{
               this.setState({todos : response.data})
                    console.log(response.data)


           }
        
        )
        
    }
    
    render(){
return(
<div>
    <h1>Todos</h1>
<div className="container-fluid">

{this.state.message &&<div className="alert alert-success"> {this.state.message} </div>}

    <table className="table">
        
            <thead>
            <tr>
                <td>Description</td>
                <td>Completed</td>
                <td>Target</td>
                <td>Update</td>
                <td>Delete</td>
            </tr></thead>
            <tbody>      
        {       this.state.todos.map(todo=>
                <tr key={todo.id}>
            <td>{todo.description}</td>
            <td>{todo.completed.toString()}</td>
            <td>{todo.target.toString()}</td>
            <td><button className="btn btn-warning" onClick={()=>this.updateClicked(todo.id)}>Update</button></td>
            <td><button className="btn btn-danger" onClick={()=>this.deleteClicked(todo.id)}>Delete</button></td>
            

            </tr>)}
        </tbody>

    </table> 
    <div className="container-fluid">
    <button className="btn btn-success" onClick={this.addClick}>Add</button>
       </div>     
</div>

</div>
)
        
    }

deleteClicked(id){
let user=AuthenticationService.getLoginUser()
TodoApi.deleteTodo(user, id).then
(
    response =>
    {
        this.setState({message : `Delete of todo ${id} successful`})
        this.refreshPage()
    }
)


}


updateClicked(id){
    
     this.props.history.push(`/uTodo/${id}`)
    }

    addClick(){
    
        this.props.history.push(`/uTodo/-1`)
       }

}

export default TodoComponent