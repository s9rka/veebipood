import { useRef } from "react";
import { Link } from "react-router-dom";

function AddProduct() {
    const nimiRef = useRef();
    const hindRef = useRef();
    const aktiivneRef = useRef();

// localstorage <-- saadan tooted AddProducts vajutusel, võtan Avaleht minnes
// üksiku toote vaatamine <-- võtan localStorage-st, otsin õige toote üles
// maksmine <-- API päring

    function uusToode() {
        console.log(nimiRef.current.value);
        console.log(hindRef.current.value);
        console.log(aktiivneRef.current.checked);
        const toode = {
            nimi: nimiRef.current.value,
            hind: Number(hindRef.current.value),
            aktiivne: aktiivneRef.current.checked
        }
        console.log(toode);
        let tooted = localStorage.getItem("tooted");
        if (tooted !== null) {
            tooted = JSON.parse(tooted);
        } else {
            tooted = [];
        }
        tooted.push(toode);
        localStorage.setItem("tooted", JSON.stringify(tooted));
    }
    return (
    <div>
        <Link to="/admin">
            <button>Tagasi</button>
        </Link>
        <br />
        <label>Nimi</label> <br />
        <input ref={nimiRef} type="text" /> <br />
        <label>Hind</label> <br />
        <input ref={hindRef} type="number" /> <br />
        <label>aktiivne</label> <br />
        <input ref={aktiivneRef} type="checkbox" /> <br />
        <button onClick={() => uusToode()}>Sisesta</button>

    </div>)
}

export default AddProduct;