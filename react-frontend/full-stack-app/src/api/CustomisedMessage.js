import axios from 'axios'

class CustomisedMessage {
    

    executeCustomisedMessage(){
        //console.log("execute")
       return axios.get('http://localhost:8080/hello')
    }

    executeCustomisedBeanMessage(){
        //console.log("execute")
       return axios.get('http://localhost:8080/bean')
    }

    executeCustomisedPathMessage(){
        
        // let username = 'admin'
        // let password = 'pass'
        // let basicAuthHeader = 'Basic '+ window.btoa(username + ":" + password)


       return axios.get(`http://localhost:8080/bean`)
    //     {
    //        headers:{
    //            authorization : basicAuthHeader
    //        }
    //    })
    }

}
export default new CustomisedMessage();