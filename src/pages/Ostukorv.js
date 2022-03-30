import { useState } from "react";

function Ostukorv() {
    const [ostukorv, muudaOstukorvi] = useState(["element nr1","element nr2", 4, 5, 6]);
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
    }

    function lisaToode(toode) {
        ostukorv.push(toode);
        muudaOstukorvi(ostukorv.slice());
    }

    return(
    <div>
        {ostukorv.length > 0 && 
        <div>
            <div>Kokku on {ostukorv.length} toodet ostukorvis</div>
            <button onClick={() => muudaOstukorvi([])}>Tühjenda</button>
        </div>}
        
        {ostukorv.length === 0 && <div>Ostukorv on tühi</div>}
        { ostukorv.map(element => 
            <div>
                <div>Nimi: {element}</div>
                <div>Hind: 3</div>
                <div>Kategooria: karastusjoogid</div>
                <button onClick={() => kustutaToode(element)}>X</button>
                <button onClick={() => lisaToode(element)}>Lisa</button>
            </div>
        ) }
    </div>
    // see on kuidas teha dünaamilist listi javascriptiga
    )
}

export default Ostukorv;