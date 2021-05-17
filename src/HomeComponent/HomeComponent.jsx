import React from "react";
import { Link } from "react-router-dom";

import {ReactComponent as UserSvg} from "../svgs/userSvg.svg"
import "./style.css"

export default function HomeComponent() {
    return(
        <div className="home-component">
            <header className="header-home">
                <input type="text" placeholder="search here..." className="header-search"/>
                <h1 className="header-text">OrgList</h1>
                <Link to="/" className="user-svg"><UserSvg/></Link>
            </header>
        </div>
    );
}