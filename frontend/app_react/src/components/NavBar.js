import './Home.css';
import { Link } from "react-router-dom";

function NavBar() {


    return (
        <>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                             <Link to="/items">items</Link> 
                            </li>
                            <li class="nav-item">
                            <Link to="/cadastra">Cadastra equipamento</Link> 
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
}


export default NavBar