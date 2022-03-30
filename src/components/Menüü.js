import { Link } from "react-router-dom";

function Menüü() {
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
        </div>)
}

export default Menüü;