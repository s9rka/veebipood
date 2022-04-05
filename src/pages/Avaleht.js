import { useState } from "react";
import { Link } from "react-router-dom";

function Avaleht() {
    const [tooted, uuendaTooted] = useState(saaTooted());

    function saaTooted() {
        let tootedLS = localStorage.getItem("tooted");

        if (tootedLS !== null) {  // saab ka nii: if (tootedLS) {}
            return JSON.parse(tootedLS);
        } else {
            return [
                {nimi: "Coca", hind: 1, aktiivne: true},
                {nimi: "Fanta", hind: 3, aktiivne: false},
                {nimi: "Sprite", hind: 2, aktiivne: true}
            ]; 
        }  
    }
    
    function lisaOstukorvi(toode) {
        console.log(toode);

    // lehed saavad omavahel suhelda:
    // 1. andmebaasi kaudu
    // 2. browseri kaudu
    // 3. fail txt.json

    //    tooted.push(toode);
    //    uuendaTooted(tooted.slice());

        // localstorage <---
        // {"Coca", 1} ---- liidaKokku kõik element.hind
        
        let ostukorviTooted = localStorage.getItem("ostukorviTooted");
        if (ostukorviTooted !== null) {
            ostukorviTooted = JSON.parse(ostukorviTooted);
        } else {
            ostukorviTooted = [];
        }
        ostukorviTooted.push(toode);
                    // key="ostukorviTooted"    value=[nimi:"", hind etc]
        localStorage.setItem("ostukorviTooted", JSON.stringify(ostukorviTooted));
    }



    return(
        <div>
            {tooted.map(element =>
                <div>
                    <Link to={"/toode/" + element.nimi.replaceAll(" ", "-").toLowerCase()}>
                        <div>{element.nimi}</div>
                        <div>{element.hind}</div>
                    </Link>
                    <button onClick={() => lisaOstukorvi(element)}>Lisa</button>
                    </div>)}
        </div>)
    
}

export default Avaleht;