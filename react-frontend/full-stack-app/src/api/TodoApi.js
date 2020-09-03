import axios from 'axios';
import { API_URL_JPA } from './Constants'


class TodoApi{

    executeTodo(name){
       return axios.get(`${API_URL_JPA}/${name}`)
    }



    deleteTodo(name, id){
        
        return axios.delete(`${API_URL_JPA}/${name}/${id}`)
     }

     getTodoById(name, id){
         return axios.get(`${API_URL_JPA}/${name}/${id}`)
     }

     updateTodo(name, id, todo){
        return axios.put(`${API_URL_JPA}/${name}/${id}`, todo)
    }

    addTodo(name, todo){
        
        return axios.post(`${API_URL_JPA}/${name}/`, todo)
    }

    
}
export default new TodoApi();