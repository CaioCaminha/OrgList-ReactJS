import React from "react";
import { Link } from "react-router-dom";

import {ReactComponent as UserSvg} from "../svgs/userSvg.svg"
import "./style.css"

export default function HomeComponent() {
    return(
        <div className="home-component">
            <header className="header-home">
                <input type="text" placeholder="search here..." className="header-search-home"/>
                <Link to="/home"><h1 className="header-text-home">OrgList</h1></Link>
                <Link to="/" className="user-svg-home"><UserSvg/></Link>
            </header>
            <main className="main-home">

            </main>
        </div>
    );
}