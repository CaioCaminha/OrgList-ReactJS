import React from "react"
import { Link } from "react-router-dom";
import {ReactComponent as UserSvg} from "../svgs/userSvg.svg"
import "./style.css"

export default function LoginComponent(){
    return(
        <>  
        <header className="login-header">
            <h1 className="login-header-text" >OrgList</h1>
            <div className="login-header-box">
                <Link className="login-header-link">
                    <p>Create your Account!!!</p>
                    <UserSvg className="user-svg"/>
                </Link>
            </div>
        </header>
        <div id="login-component">
            <div className="login-form-box">
                <form className="login-form">
                    <h2 className="login-text"> Login </h2>
                    <input placeholder="insert your email..." type="email"/>
                    <input placeholder="insert your password..." type="password"/>
                    <button className="login-button" type="submit"><p>LOGIN</p></button>
                </form>
            </div>
        </div>
        </>
    );
}