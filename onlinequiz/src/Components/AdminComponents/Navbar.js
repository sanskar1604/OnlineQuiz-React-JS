
import React from "react";

function Navbar(){
    return(
        <>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand"><i class="fa fa-graduation-cap fa-2x text-success"></i><b>DECP</b> Quiz</a>
                    <ul>
                        <li class="nav-item dropdown">
                            <div class="btn-group" role="group">
                                <button type="button" class="btn btn-default dropdown-toggle text-light ml-5" data-bs-toggle="dropdown" aria-expanded="false">Admin<span class="caret"></span></button>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a class="dropdown-item" href="/logout">Logout</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;