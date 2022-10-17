import "./Language.css";
import React, { useContext } from "react";
import ColorContext from "../../context/ColorContext";
import { useTranslation } from 'react-i18next';
import { changeLanguage } from "i18next";

const Language = () => {
    const color = useContext(ColorContext);    
    const [t, i18n] = useTranslation();

    const changeLang = (lang) => {
        i18n.changeLanguage(lang); 
    }  

    return(
        <div className="lang">
            <select
            value={color.color}
            style={{ backgroundColor: color.color }}
            >
                <option value="English" onClick={() => changeLang('en')}>English</option>
                <option value="Tiếng Việt" onClick={() => changeLang('vi')}>Tiếng Việt</option>
                <option value="Japanese" onClick={() => changeLang('jp')}>Japanese</option>
                <option value="France" onClick={() => changeLang('fr')}>France</option>
            </select>
        </div>
    );
};

export default Language;