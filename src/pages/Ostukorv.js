import { useState } from "react";

function Ostukorv() {

    //useState - vasakpoolset kasutan HTML-s (ostukorv)
    // parempoolse abil muudan vasakpoolset - kui toimub muutus, siis uueneb ka HTML
    // useState() - sulgude sees on vasakpoolse muutuja algväärtus ehk mida näidatakse sel hetkel kui lehele tullakse
    const [ostukorv, muudaOstukorvi] = useState(saaOstukorviTooted());

    function saaOstukorviTooted() {
        if (localStorage.getItem("ostukorviTooted") !== null) {
            return JSON.parse(localStorage.getItem("ostukorviTooted"));
        }   else {
            return [];
        }
    }
// kustuta kõik tooted ostukorvist
    function kustutaToode(toode) {
// js how to delete element from array
//stackoverflow
        console.log(toode);
        console.log(ostukorv);
        const index = ostukorv.indexOf(toode);
        console.log(index);
        ostukorv.splice(index,1);
        console.log(ostukorv);
        muudaOstukorvi(ostukorv.slice());
        localStorage.setItem("ostukorviTooted", JSON.stringify(ostukorv));

    }

    function lisaToode(toode) {
        ostukorv.push(toode);
        muudaOstukorvi(ostukorv.slice());
        console.log(ostukorv);
        localStorage.setItem("ostukorviTooted", JSON.stringify(ostukorv));
    }

    function tyhjenda() {
        muudaOstukorvi([]); // Html muutmine
        localStorage.setItem("ostukorviTooted", JSON.stringify([])); //Localstorage uuendamine

    }

    function arvutaOstukorviKogusumma() {
        let koguSumma = 0;
        ostukorv.forEach(element => koguSumma = koguSumma + element.hind);
    
        return koguSumma;
    }

    return(
    <div>
        {ostukorv.length > 0 && 
        <div>
            <div>Kokku on {ostukorv.length} toodet ostukorvis</div>
            <button onClick={() => tyhjenda()}>Tühjenda</button>
        </div>}
        
        <div>
        {ostukorv.length === 0 && <div>Ostukorv on tühi</div>}
        </div>
        
        { ostukorv.map(element => 
            <div>
                <div>Nimi: {element.nimi}</div>
                <div>Hind: {element.hind}</div>
                <div>Kategooria: karastusjoogid</div>
                <button onClick={() => kustutaToode(element)}>X</button>
                <button onClick={() => lisaToode(element)}>Lisa</button>
            </div>
        ) }
        <div>KOKKU: {arvutaOstukorviKogusumma()} €</div>
    </div>
    // see on kuidas teha dünaamilist listi javascriptiga
    )
}

export default Ostukorv;