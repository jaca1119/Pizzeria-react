import React from "react";
import AuthenticationService from "../service/AuthenticationService";
import { Route, Redirect } from "react-router-dom";

function AuthenticatedRoute(props) {
    if (AuthenticationService.isLoggedIn()) {
        return <Route {...props} />
    } 
    else {
        return <Redirect to="/login" />
    }
}

export default AuthenticatedRoute;