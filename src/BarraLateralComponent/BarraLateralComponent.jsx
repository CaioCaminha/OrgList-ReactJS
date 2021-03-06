import React from 'react';
import "./style.css"
import {ReactComponent as HomeSvg} from "../svgs/homeSvg.svg"
import {ReactComponent as BookSvg} from "../svgs/bookSvg.svg"
import {ReactComponent as LogoSvg} from "../svgs/LogoSvg.svg"
import {ReactComponent as HelpSvg} from "../svgs/helpSvg.svg"
import {ReactComponent as SettingsSvg} from "../svgs/settingsSvg.svg"

export default function BarraLateralComponent(){
    return(
        <div id="barra-lateral">
            <LogoSvg className="logo-svg"/>
            <HomeSvg className="home-svg" />
            <SettingsSvg className="settings-svg"/>
            <BookSvg className="book-svg"/>
            <HelpSvg className="help-svg" />
        </div>
   );
}