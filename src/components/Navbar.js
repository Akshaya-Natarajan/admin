import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    let navigate = useNavigate()
    const handleLogout = ()=>{
        localStorage.removeItem('myapptoken')
        navigate('/')
    }
    return (
        <div>


            <div>
                {/* offcanvas*/}
                <div class="offcanvas offcanvas-start text-bg-dark" id="menu">
                    <div class="offcanvas-header ">
                        <h3 class="offcanvas-title">QUICK VIEW</h3>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
                    </div>
                    {/* offcanvas body */}
                    <div class="offcanvas-body m-auto">
                            {/* switch user button */}
                            <div>
                            <button class="btn btn-secondary " type="button">
                                Dashboard
                            </button>
                            </div>
                            <div>
                            <Link to ={'/shopkeeper'}><button class="btn btn-secondary " type="button">
                                Shopkeeper
                            </button></Link>
                            </div>
                            <div>
                            <button class="btn btn-secondary " type="button">
                                Order details
                            </button>
                            </div>                           
                            
                      </div>
                </div>
            </div>

            {/* navbar */}
            <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <a class="navbar-brand ps-3" href="index.html"> User
                </a>

                <button
                    class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#menu"
                    id="sidebarToggle"
                    href="#!"
                >
                    <i class="fas fa-bars"></i>
                </button>

                <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                    <div class="input-group">
                        <input
                            class="form-control"
                            type="text"
                            placeholder="Search for..."
                            aria-label="Search for..."
                            aria-describedby="btnNavbarS earch"
                        />
                        <button class="btn btn-primary" id="btnNavbarSearch" type="button">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </form>

                <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            id="navbarDropdown"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i class="fas fa-user fa-fw"></i>
                        </a>
                        <ul
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdown"
                        >
                            <li>
                                <a class="dropdown-item" href="#!">
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#!">
                                    Activity Log
                                </a>
                            </li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>
                            <li onClick={handleLogout}>
                                <a class="dropdown-item" href="#!">
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
