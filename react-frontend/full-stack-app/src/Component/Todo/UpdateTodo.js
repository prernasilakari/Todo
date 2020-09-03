import React, { Component } from 'react';
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import AuthenticationService from './AuthenticationService';
import TodoApi from '../../api/TodoApi';



class UpdateTodo extends Component{
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            description: '',
            target: moment(new Date()).format('YYYY-MM-DD')
    
        }
        this.onSubmit=this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
        }
        onSubmit(values){
            let user=AuthenticationService.getLoginUser()
            let todo =  {
                username: user,
                id: this.state.id,
                description: values.description,
                target:values.target
                }
            if(this.state.id===-1){
               
            TodoApi.addTodo(user,todo).then(this.props.history.push(`/todos`))
            }


           
           else{
            TodoApi.updateTodo(user, this.state.id, todo).then(this.props.history.push(`/todos`))


           }
            
        }
        validate(values){
            let errors ={}
            if(!values.description){
                errors.description='Enter a Description'
            }
            else if(values.description.length<5)
            errors.description='Enter at least 5 character Description'

            if(!moment(values.target).isValid())
            errors.target = 'enter a valid date'

            return errors
          
        }
        componentDidMount(){
           let user= AuthenticationService.getLoginUser()
            TodoApi.getTodoById(user, this.state.id).then(
                response => 
                    this.setState({
                        description: response.data.description,
                        target: moment(response.data.target).format('YYYY-MM-DD')
                    })
                
            )
    
        }


    render(){
        let {description, target} = this.state
        return(
            <div>
              <Formik
              initialValues={{
                  description, target
              }}
              onSubmit={this.onSubmit}
              validateOnChange={false}
              validateOnBlur={false}
              validate={this.validate}
              enableReinitialize={true}
              >
                    {
                        (props) => <div className="container">
                            <Form>
                                <ErrorMessage name="description" component="div" className="alert alert-warning"/> 
                                <ErrorMessage name="target" component="div" className="alert alert-warning"/> 

                              <fieldset className="form-group">
                                <label>
                                    Description
                                </label>
                                <Field className="form-control" type="text" name="description"></Field>
                               </fieldset>
                               <fieldset className="form-group">
                                <label>
                                    Target Date
                                </label>
                                <Field className="form-control" type="date" name="target"></Field>
                                </fieldset>
                                <button type="submit" className="btn btn-success">Save</button>
                            </Form>
                        </div>
                    }
              </Formik>
            </div>
        )
    }
}
export default UpdateTodo