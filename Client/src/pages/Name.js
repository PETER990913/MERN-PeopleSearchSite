import React from "react";
import "./pages.css";
import { useState } from 'react';
import SearchBarNameDefault from "./SearchName/SearchBar_Name_default";
import SearchBarName1 from "./SearchName/SearchBar_Name1";
import SearchBarName2 from "./SearchName/SearchBar_Name2";
import SearchBarName3 from "./SearchName/SearchBar_Name3";
import SearchBarName4 from "./SearchName/SearchBar_Name4";
import SearchBarName5 from "./SearchName/SearchBar_Name5";
import SearchBarName6 from "./SearchName/SearchBar_Name6";
import SearchBarName12 from "./SearchName/SearchBar_Name12";
import SearchBarName13 from "./SearchName/SearchBar_Name13";
import SearchBarName14 from "./SearchName/SearchBar_Name14";
import SearchBarName15 from "./SearchName/SearchBar_Name15";
import SearchBarName16 from "./SearchName/SearchBar_Name16";
import SearchBarName23 from "./SearchName/SearchBar_Name23";
import SearchBarName24 from "./SearchName/SearchBar_Name24";
import SearchBarName25 from "./SearchName/SearchBar_Name25";
import SearchBarName26 from "./SearchName/SearchBar_Name26";
import SearchBarName34 from "./SearchName/SearchBar_Name34";
import SearchBarName35 from "./SearchName/SearchBar_Name35";
import SearchBarName36 from "./SearchName/SearchBar_Name36";
import SearchBarName45 from "./SearchName/SearchBar_Name45";
import SearchBarName46 from "./SearchName/SearchBar_Name46";
import SearchBarName56 from "./SearchName/SearchBar_Name56";
import SearchBarName123 from "./SearchName/SearchBar_Name123";
import SearchBarName124 from "./SearchName/SearchBar_Name124";
import SearchBarName125 from "./SearchName/SearchBar_Name125";
import SearchBarName126 from "./SearchName/SearchBar_Name126";
import SearchBarName134 from "./SearchName/SearchBar_Name134";
import SearchBarName135 from "./SearchName/SearchBar_Name135";
import SearchBarName136 from "./SearchName/SearchBar_Name136";
import SearchBarName145 from "./SearchName/SearchBar_Name145";
import SearchBarName146 from "./SearchName/SearchBar_Name146";
import SearchBarName156 from "./SearchName/SearchBar_Name156";
import SearchBarName234 from "./SearchName/SearchBar_Name234";
import SearchBarName235 from "./SearchName/SearchBar_Name235";
import SearchBarName236 from "./SearchName/SearchBar_Name236";
import SearchBarName245 from "./SearchName/SearchBar_Name245";
import SearchBarName246 from "./SearchName/SearchBar_Name246";
import SearchBarName256 from "./SearchName/SearchBar_Name256";
import SearchBarName345 from "./SearchName/SearchBar_Name345";
import SearchBarName346 from "./SearchName/SearchBar_Name346";
import SearchBarName356 from "./SearchName/SearchBar_Name356";
import SearchBarName456 from "./SearchName/SearchBar_Name456";
import SearchBarName1234 from "./SearchName/SearchBar_Name1234";
import SearchBarName1235 from "./SearchName/SearchBar_Name1235";
import SearchBarName1236 from "./SearchName/SearchBar_Name1236";
import SearchBarName1345 from "./SearchName/SearchBar_Name1345";
import SearchBarName1346 from "./SearchName/SearchBar_Name1346";
import SearchBarName1456 from "./SearchName/SearchBar_Name1456";
import SearchBarName2345 from "./SearchName/SearchBar_Name2345";
import SearchBarName2346 from "./SearchName/SearchBar_Name2346";
import SearchBarName2456 from "./SearchName/SearchBar_Name2456";
import SearchBarName3456 from "./SearchName/SearchBar_Name3456";
import SearchBarName12345 from "./SearchName/SearchBar_Name12345";
import SearchBarName12346 from "./SearchName/SearchBar_Name12346";
import SearchBarName12356 from "./SearchName/SearchBar_Name12356";
import SearchBarName12456 from "./SearchName/SearchBar_Name12456";
import SearchBarName13456 from "./SearchName/SearchBar_Name13456";
import SearchBarName123456 from "./SearchName/SearchBar_Name123456";
import SearchBarName23456 from "./SearchName/SearchBar_Name23456";
import SearchBarName1356 from "./SearchName/SearchBar_Name1356";
import SearchBarName1245 from "./SearchName/SearchBar_Name1245";

const Name = () => {
    const [show1, SetShow1] = useState(false);
    const handleShow1 = () => {
        SetShow1(!show1);
    };
    const [show2, SetShow2] = useState(false);
    const handleShow2 = () => {
        SetShow2(!show2);
    };
    const [show3, SetShow3] = useState(false);
    const handleShow3 = () => {
        SetShow3(!show3);
    };
    const [show4, SetShow4] = useState(false);
    const handleShow4 = () => {
        SetShow4(!show4);
    };
    const [show5, SetShow5] = useState(false);
    const handleShow5 = () => {
        SetShow5(!show5);
    };
    const [show6, SetShow6] = useState(false);
    const handleShow6 = () => {
        SetShow6(!show6);
    };
    const displaySearchName = () => {
        if (show1 === true & show2 === false & show3 === false & show4 === false & show5 === false & show6 === false) return <SearchBarName1 />        
        if (show2 === true & show1 === false & show3 === false & show4 === false & show5 === false & show6 === false) return <SearchBarName2 />        
        if (show3 === true & show1 === false & show2 === false & show4 === false & show5 === false & show6 === false) return <SearchBarName3 />        
        if (show4 === true & show1 === false & show2 === false & show3 === false & show5 === false & show6 === false) return <SearchBarName4 />        
        if (show5 === true & show1 === false & show2 === false & show3 === false & show3 === false & show6 === false) return <SearchBarName5 />        
        if (show6 === true & show1 === false & show2 === false & show3 === false & show4 === false & show5 === false) return <SearchBarName6 />        
        if (show1 === true & show2 === true & show3 === false & show4 === false & show5 === false & show6 === false) return <SearchBarName12 />        
        if (show1 === true & show2 === false & show3 === true & show4 === false & show5 === false & show6 === false) return <SearchBarName13 />        
        if (show1 === true & show2 === false & show3 === false & show4 === true & show5 === false & show6 === false) return <SearchBarName14 />        
        if (show1 === true & show2 === false & show3 === false & show4 === false & show5 === true & show6 === false) return <SearchBarName15 />        
        if (show1 === true & show2 === false & show3 === false & show4 === false & show5 === false & show6 === true) return <SearchBarName16 />        
        if (show1 === false & show2 === true & show3 === true & show4 === false & show5 === false & show6 === false) return <SearchBarName23 />        
        if (show1 === false & show2 === true & show3 === false & show4 === true & show5 === false & show6 === false) return <SearchBarName24 />        
        if (show1 === false & show2 === true & show3 === false & show4 === false & show5 === true & show6 === false) return <SearchBarName25 />        
        if (show1 === false & show2 === true & show3 === false & show4 === false & show5 === false & show6 === true) return <SearchBarName26 />        
        if (show1 === false & show2 === false & show3 === true & show4 === true & show5 === false & show6 === false) return <SearchBarName34 />        
        if (show1 === false & show2 === false & show3 === true & show4 === false & show5 === true & show6 === false) return <SearchBarName35 />        
        if (show1 === false & show2 === false & show3 === true & show4 === false & show5 === false & show6 === true) return <SearchBarName36 />        
        if (show1 === false & show2 === false & show3 === false & show4 === true & show5 === true & show6 === false) return <SearchBarName45 />        
        if (show1 === false & show2 === false & show3 === false & show4 === true & show5 === false & show6 === true) return <SearchBarName46 />        
        if (show1 === false & show2 === false & show3 === false & show4 === false & show5 === true & show6 === true) return <SearchBarName56 />        
        if (show1 === true & show2 === true & show3 === true & show4 === false & show5 === false & show6 === false) return <SearchBarName123 />        
        if (show1 === true & show2 === true & show3 === false & show4 === true & show5 === false & show6 === false) return <SearchBarName124 />        
        if (show1 === true & show2 === true & show3 === false & show4 === false & show5 === true & show6 === false) return <SearchBarName125 />        
        if (show1 === true & show2 === true & show3 === false & show4 === false & show5 === false & show6 === true) return <SearchBarName126 />        
        if (show1 === true & show2 === false & show3 === true & show4 === true & show5 === false & show6 === false) return <SearchBarName134 />        
        if (show1 === true & show2 === false & show3 === true & show4 === false & show5 === true & show6 === false) return <SearchBarName135 />        
        if (show1 === true & show2 === false & show3 === true & show4 === false & show5 === false & show6 === true) return <SearchBarName136 />        
        if (show1 === true & show2 === false & show3 === false & show4 === true & show5 === true & show6 === false) return <SearchBarName145 />        
        if (show1 === true & show2 === false & show3 === false & show4 === true & show5 === false & show6 === true) return <SearchBarName146 />        
        if (show1 === true & show2 === false & show3 === false & show4 === false & show5 === true & show6 === true) return <SearchBarName156 />  
        if (show1 === false & show2 === true & show3 === true & show4 === true & show5 === false & show6 === false) return <SearchBarName234 />  
        if (show1 === false & show2 === true & show3 === true & show4 === false & show5 === true & show6 === false) return <SearchBarName235 />  
        if (show1 === false & show2 === true & show3 === true & show4 === false & show5 === false & show6 === true) return <SearchBarName236 />  
        if (show1 === false & show2 === true & show3 === false & show4 === true & show5 === true & show6 === false) return <SearchBarName245 />  
        if (show1 === false & show2 === true & show3 === false & show4 === true & show5 === false & show6 === true) return <SearchBarName246 />  
        if (show1 === false & show2 === true & show3 === false & show4 === false & show5 === true & show6 === true) return <SearchBarName256 />  
        if (show1 === false & show2 === false & show3 === true & show4 === true & show5 === true & show6 === false) return <SearchBarName345 />  
        if (show1 === false & show2 === false & show3 === true & show4 === true & show5 === false & show6 === true) return <SearchBarName346 />  
        if (show1 === false & show2 === false & show3 === true & show4 === false & show5 === true & show6 === true) return <SearchBarName356 />  
        if (show1 === false & show2 === false & show3 === false & show4 === true & show5 === true & show6 === true) return <SearchBarName456 />  
        if (show1 === true & show2 === true & show3 === true & show4 === true & show5 === false & show6 === false) return <SearchBarName1234 />  
        if (show1 === true & show2 === true & show3 === true & show4 === false & show5 === true & show6 === false) return <SearchBarName1235 />  
        if (show1 === true & show2 === true & show3 === true & show4 === false & show5 === false & show6 === true) return <SearchBarName1236 />  
        if (show1 === true & show2 === true & show3 === false & show4 === true & show5 === true & show6 === false) return <SearchBarName1245 />  
        if (show1 === true & show2 === false & show3 === true & show4 === true & show5 === true & show6 === false) return <SearchBarName1345 />  
        if (show1 === true & show2 === false & show3 === true & show4 === true & show5 === false & show6 === true) return <SearchBarName1346 />  
        if (show1 === true & show2 === false & show3 === true & show4 === false & show5 === true & show6 === true) return <SearchBarName1356 />  
        if (show1 === true & show2 === false & show3 === false & show4 === true & show5 === true & show6 === true) return <SearchBarName1456 />  
        if (show1 === false & show2 === true & show3 === true & show4 === true & show5 === true & show6 === false) return <SearchBarName2345 />  
        if (show1 === false & show2 === true & show3 === true & show4 === true & show5 === false & show6 === true) return <SearchBarName2346 />  
        if (show1 === false & show2 === true & show3 === false & show4 === true & show5 === true & show6 === true) return <SearchBarName2456 />  
        if (show1 === false & show2 === false & show3 === true & show4 === true & show5 === true & show6 === true) return <SearchBarName3456 />  
        if (show1 === true & show2 === true & show3 === true & show4 === true & show5 === true & show6 === false) return <SearchBarName12345 />  
        if (show1 === true & show2 === true & show3 === true & show4 === true & show5 === false & show6 === true) return <SearchBarName12346 />  
        if (show1 === true & show2 === true & show3 === true & show4 === false & show5 === true & show6 === true) return <SearchBarName12356 />  
        if (show1 === true & show2 === true & show3 === false & show4 === true & show5 === true & show6 === true) return <SearchBarName12456 />  
        if (show1 === true & show2 === false & show3 === true & show4 === true & show5 === true & show6 === true) return <SearchBarName13456 />  
        if (show1 === false & show2 === true & show3 === true & show4 === true & show5 === true & show6 === true) return <SearchBarName23456 />  
        if (show1 === true & show2 === true & show3 === true & show4 === true & show5 === true & show6 === true) return <SearchBarName123456 />  
        else return <SearchBarNameDefault />
      }
    return (
        <div className="container-fluid">
            <div className="name_title">
                Encuentra Emails y números <br />de teléfono de millones de personas
            </div>
            <div className="name_subtitle">
                Busque información de decontactos actualizada por nombre, rut,
            </div>
            {displaySearchName()}
            <div className="Add_Job">
                <button className="SortSearchButton1" onClick={handleShow1}>{show1 === false ? "+Cargo" : "-Cargo"}</button>
                <button className="SortSearchButton1" onClick={handleShow2}>{show2 === false ? "+Comuna" : "-Comuna"}</button>
                <button className="SortSearchButton1" onClick={handleShow3}>{show3 === false ? "+Región" : "-Región"}</button>
                <button className="SortSearchButton1" onClick={handleShow4}>{show4 === false ? "+Renta" : "-Renta"}</button>
                <button className="SortSearchButton1" onClick={handleShow5}>{show5 === false ? "+Isapre" : "-Isapre"}</button>
                <button className="SortSearchButton1" onClick={handleShow6}>{show6 === false ? "+Edad" : "-Edad"}</button>
            </div>
        </div>
    );
};
export default Name;
