import React from "react";
import Label from "../atoms/Label";
import {ReactComponent as ThemeIconMoon} from '../../icons/icon-moon.svg';
import {ReactComponent as ThemeIconSun} from '../../icons/icon-sun.svg';
import './LogoTheme.css';
import { observer } from "mobx-react-lite";
import { useStore } from "../../store/StoreContect";

const LogoTheme=observer(()=>{

    const {toDoStore}=useStore();

    return(
        <div className="logo__theme">
            <Label value={"T O D O"} variant="logo" />

            {/* switch  between theme icon moon - sun and vice versa */}

            {toDoStore.theme==="light"?<ThemeIconMoon className="theme__icon" onClick={()=>toDoStore.setTheme()}/> :
               <ThemeIconSun className="theme__icon" onClick={()=>toDoStore.setTheme()}/>} 
        </div>
    )
})

export default LogoTheme;