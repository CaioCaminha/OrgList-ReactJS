import React from "react"
import {ReactComponent as LinkedinSvg} from "../svgs/linkedinSvg.svg"
import {ReactComponent as GithubSvg} from "../svgs/githubSvg.svg"
import {ReactComponent as CopyrightSvg} from "../svgs/copyrightSvg.svg"
import "./style.css"

export default function FooterComponent(){
    return(
        <footer >
            <CopyrightSvg className="footer-copyright"/>
            <a href="https://github.com/CaioCaminha"><GithubSvg className="footer-github"/></a>
            <a href="https://www.linkedin.com/in/caio-caminha-53b2a6205/"><LinkedinSvg className="footer-linkedin"/></a>
            <p>By Caio Freitas Caminha</p>
        </footer>
    );
}