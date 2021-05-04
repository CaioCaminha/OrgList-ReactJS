import React from "react"
import {ReactComponent as SearchSvg} from "../svgs/searchSvg.svg"
import {ReactComponent as AlertSvg} from "../svgs/alertSvg.svg"
import {ReactComponent as UserSvg} from "../svgs/userSvg.svg" 
import "./style.css";

export default function HeaderComponent(){
    return(
        
            <header id="header-component">
                <h1 className="header-text" >OrgList</h1>
                <input className="header-search" placeholder="Search..." type="te"/>
                <button className="button-search">
                    <SearchSvg className="search-svg" />
                </button>
                <AlertSvg className="alert-svg"/>
                <UserSvg className="user-svg"/>
            </header>
        
    );
}