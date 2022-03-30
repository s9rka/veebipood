import { useState } from "react";

function Avaleht() {
    const [tooted, uuendaTooted] = useState(
        [
            {nimi: "Coca", hind: 1, aktiivne: true},
            {nimi: "Fanta", hind: 3, aktiivne: false},
            {nimi: "Sprite", hind: 2, aktiivne: true}
        ]
    );

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
                    <div>{element.nimi}</div>
                    <div>{element.hind}</div>
    
                    <button onClick={() => lisaOstukorvi(element)}>Lisa</button>
                    </div>)}
        </div>)
    
}

export default Avaleht;