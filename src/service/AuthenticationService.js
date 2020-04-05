
class AuthenticationService {

    API_URL = 'https://pizzeria-spring.herokuapp.com';

    async basicSignIn (username, password) {
        const response = await fetch(this.API_URL + "/authenticate", {
            method: "POST",
            headers: {
                'Authorization': 'Basic ' + window.btoa(username + ":" + password)
            }
        });

        if (response.ok) {
            sessionStorage.setItem("credentials", window.btoa(username + ":" + password));
        }
        
        return response;    
    }

    isLoggedIn () {
        const credentials = sessionStorage.getItem("credentials");        

        return credentials ? true : false;
    }
}

export default new AuthenticationService();