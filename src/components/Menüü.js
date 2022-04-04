import { Link } from "react-router-dom";

function Menüü() {

  function muudaKeelt(lang) {
    const vanaKeel = localStorage.getItem("language");

    console.log("enne oli: " + vanaKeel + ", uus keel on: " + lang);
    localStorage.setItem("language", lang);
  }
    return (
    <div>
        {/* Kõik üleminekud URL-dele toimuvad <Link to> sees. Link peab olema imporditud */}
          <Link to={'/'}>
            <button className='nupp'>Avalehele</button>
          </Link>
          <Link to={'/ostukorv'}>
            <button className='nupp'>Ostukorvi</button>
          </Link>
          <Link to={'/admin'}>
            <button className='nupp'>Admin vaatesse</button>
          </Link>
          <button onClick={() => muudaKeelt('et')}>EE</button>
          <button onClick={() => muudaKeelt('ru')}>RU</button>
        </div>)
}

export default Menüü;