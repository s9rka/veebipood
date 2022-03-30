import { Link } from "react-router-dom"

function AdminHome() {
    return (
    <div>
        <Link to="/admin/addproduct">
            <button>Lisa Toode</button>
        </Link>
        <Link to="/admin/halda-tooteid">
            <button>Halda Tooteid</button>
        </Link>
    </div>)
}

export default AdminHome;