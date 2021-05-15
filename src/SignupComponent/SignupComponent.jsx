import React from "react"
import { Link } from "react-router-dom";
import "./style.css"
import {ReactComponent as UserSvg} from "../svgs/userSvg.svg"
export default function SignupComponent(){
    return(
        <>  
            <header className="signup-header">
                <Link to="/home" className="signup-header-text-link">
                    <h1 className="signup-header-text" >OrgList</h1>
                </Link>
                <div className="signup-header-box">
                    <Link to="/" className="signup-header-link">
                        <p>Login</p>
                        <UserSvg className="user-svg"/>
                    </Link>
                </div>
            </header>
            <div id="signup-component">
                <div className="signup-form-box">
                    <form className="signup-form">
                        <h2 className="signup-text"> Create Account </h2>
                        <input placeholder="insert your name..." type="text"/>
                        <input placeholder="insert your email..." type="email"/>
                        <input placeholder="insert your password..." type="password"/>
                        <section className="section-signup-button"><button className="signup-button" type="submit"><p>CREATE</p></button></section>
                    </form>
                </div>
            </div>
        </>
    );
}