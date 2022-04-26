import React from "react";
export default function Users(){
    return (
        <>
            <div class = "content-container">
                <div class = "container-fluid">
                    <div class = "jumbotron">
                        <i class = "fa fa-users fa-3x d-inline text-success" style={{marginRight: '25px;'}}></i><h1 class="d-inline">Users</h1>
                        <div class="card shadow-sm mt-5 mb-5">
                            <div class="card-body">
                                <nav>
                                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                        <button class="nav-link active" id="users-tab" data-bs-toggle="tab" data-bs-target="#users" type="button" role="tab" aria-controls="users" aria-selected="true">Manage Users</button>
                                        <button class="nav-link" id="add-user-tab" data-bs-toggle="tab" data-bs-target="#add-user" type="button" role="tab" aria-controls="add-user" aria-selected="true">Add User</button>
                                    </div>
                                </nav>
                                <div class="tab-content" id="nav-tabContent">
                                    <div class="tab-pane fade show active" id="users" role="tabpanel" aria-labelledby="users-tab">
                                        <table id="example" class = "display mt-5" style={{width:'100%'}}>
                                            <thead>
                                                <tr>
                                                    <th>User Name</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Mobile</th>
                                                    <th>DOB</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Tiger Nixon</td>
                                                    <td>System Architect</td>
                                                    <td>Edinburgh</td>
                                                    <td>61</td>
                                                    <td>2011/04/25</td>
                                                    <td>
                                                        <div class="btn-group" role="group">
                                                            <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Select Action<span class="caret"></span></button>
                                                            <ul class="dropdown-menu" role="menu">
                                                                <li><a class="dropdown-item" href="edit_teacher.html">Edit Teacher</a></li>
                                                                <div class="dropdown-divider"></div>
                                                                <li><a class="dropdown-item" href="#">Delete Teacher</a></li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>User Name</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Mobile</th>
                                                    <th>DOB</th>
                                                    <th>Action</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    <div class="tab-pane fade" id="add-user" role="tabpanel" aria-labelledby="add-user-tab">
                                        <form action="" method="POST" class="mt-4">
                                        <div class="form-group">
                                            <label>User Name</label>
                                            <input type="text" class="form-control shadow-sm" placeholder="User Name" name="user_name" required></input>
                                        </div>
                                        <div class="form-group mt-2">
                                            <label>First Name</label>
                                            <input type="text" class="form-control shadow-sm" placeholder="First Name" name="first_name" required></input>
                                        </div>
                                        <div class="form-group mt-2">
                                            <label>Last Name</label>
                                            <input type="text" class="form-control shadow-sm" placeholder="Last Name" name="last_name" required></input>
                                        </div>
                                        <div class="form-group mt-2">
                                            <label>Email</label>
                                            <input type="email" class="form-control shadow-sm" placeholder="Email" name="email" required></input>
                                        </div>
                                        <div class="form-group mt-2">
                                            <label>Enter Mobile</label>
                                            <input type="text" class="form-control shadow-sm" placeholder="Mobile" name="mobile" required></input>
                                        </div>
                                        <div class="form-group mt-2">
                                            <label>DOB</label>
                                            <input type="date" class="form-control shadow-sm" placeholder="DOB" name="dob" required></input>
                                        </div>
                                        <div class="form-group mt-2">
                                            <label>Gender</label>&nbsp;&nbsp;&nbsp;<input type="radio"  name="gender" required></input>&nbsp;&nbsp;<label>Male</label>&nbsp;&nbsp;&nbsp;<input type="radio"  name="gender" required></input>&nbsp;&nbsp;<label>Female</label>
                                        </div>
                                        <div class="form-group mt-2">
                                            <label>Password</label>
                                            <input type="password" class="form-control shadow-sm" placeholder="Password" name="password" required></input>
                                        </div>
                                        <div class="form-group mt-2">
                                            <label>Confirm Password</label>
                                            <input type="password" class="form-control shadow-sm" placeholder="Confirm Password" name="cnf_password" required></input>
                                        </div>
                                        <div class="form-group mt-2">
                                            <label>Image</label>
                                            <input type="file" class="form-control shadow-sm"  name="user_img" required></input>
                                        </div>
                                        <button class="btn btn-dark text-light mt-3">Add User</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}