import React from "react";

export default function Register(){
    return(
        <>
            <section class="vh-100">
                <div class="container-fluid h-custom">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-md-9 col-lg-6 col-xl-5">
                        <h3 class="text-center"><i class="fa fa-graduation-cap fa-2x" style = {{color:'orange'}}></i><b>DECP</b> Quiz</h3>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image"/>
                        </div>
                        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form class = "mt-5 mb-5">
                                <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <h1>Register</h1>
                                </div>

                                <div class="divider d-flex align-items-center my-4">
                                    <p class="text-center fw-bold mx-3 mb-0"><i class = "fa fa-graduation-cap fa-2x" style={{color:'orange'}}></i></p>
                                </div>
                                <div class="form-outline mb-4">
                                    <input type="text" id="username" class="form-control form-control-lg shadow-sm" placeholder="Enter Username" required/>
                                    <label class="form-label" for="username">Username</label>
                                </div>
                                <div class="form-outline mb-3">
                                    <input type="password" id="password" class="form-control form-control-lg shadow-sm" placeholder="Enter password" required/>
                                    <label class="form-label" for="password">Password</label>
                                </div>
                                <div class="form-outline mb-3">
                                    <input type="password" id="cnf_password" class="form-control form-control-lg shadow-sm" placeholder="Enter Confirm password" required/>
                                    <label class="form-label" for="cnf_password">Confirm Password</label>
                                </div>
                                <div class="form-outline mb-3">
                                    <input type="text" id="first_name" class="form-control form-control-lg shadow-sm" placeholder="Enter First Name" required/>
                                    <label class="form-label" for="first_name">First Name</label>
                                </div>
                                <div class="form-outline mb-3">
                                    <input type="text" id="last_name" class="form-control form-control-lg shadow-sm" placeholder="Enter Last Name" required/>
                                    <label class="form-label" for="last_name">Last Name</label>
                                </div>
                                <div class="form-outline mb-3">
                                    <input type="email" id="email" class="form-control form-control-lg shadow-sm" placeholder="Enter Email" required/>
                                    <label class="form-label" for="email">Email</label>
                                </div>
                                <div class="form-outline mb-3">
                                    <input type="text" id="phone" class="form-control form-control-lg shadow-sm" placeholder="Enter Phone" required/>
                                    <label class="form-label" for="phone">Phone</label>
                                </div>
                                <div class="text-center text-lg-start mt-2 pt-2">
                                    <button type="button" class="btn btn-primary btn-lg shadow-sm" style={{paddingLeft: '2.5rem;', paddingRight: '2.5rem;'}}>Register</button>
                                    <p class="fw-bold mt-2 pt-1 mb-0">Already Register? <a href="/login"class="link-danger">Login</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}