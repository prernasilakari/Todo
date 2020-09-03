
//import axios from 'axios'

class AuthenticationService{

// createBasicAurhToken(username, password){
//     return 'Basic '+ window.btoa(username + ":" + password)
// }


// executeBasicAuthService(username, password){
//     return axios.get('http://localhost:8080/Authenticate', {
//         headers : {authorization: this.createBasicAurhToken(username, password)}
//     })
// }

    registerSuccessfulLogin(username, password){
       
      
            sessionStorage.setItem('authenticatedUser', username)
         //   this.setupAxiosInterceptors(this.createBasicAurhToken(username, password))
            
    }

    logout(){ 
        sessionStorage.removeItem('authenticatedUser')
        window.location.href='/'
    }

    
    isLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')

        if (user === null) {
            
            return false}
        return true
    }


    getLoginUser() {
        let user = sessionStorage.getItem('authenticatedUser')
        console.log(user)
        if (user === null) {
            return ''}
        return user
    }

    // setupAxiosInterceptors(basicAuthHeader){
    //     // let username = 'admin'
    //     // let password = 'pass'
    //     // let basicAuthHeader = 'Basic '+ window.btoa(username + ":" + password)

    //     axios.interceptors.request.use(
    //         (config) => {
    //             if(this.isLoggedIn()){
    //                 config.headers.authorization = basicAuthHeader
    //             }
    //             return config
    //         }
    //     )
        

    // }

}
export default new AuthenticationService()