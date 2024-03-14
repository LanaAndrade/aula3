import {} from 'react'
import {Link} from 'react-router-dom'
import '../css/style.css'

function Nav(){

    return(
        <section className="nav">
        <Link to="home" className="nav-item">Home</Link>
        <Link to="produto" className="nav-item">Produto</Link>
        </section>
    )

}
export default Nav