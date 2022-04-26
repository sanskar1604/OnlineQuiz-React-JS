import React from "react";
document.title = "Dashboard";
function Dashboard() {
    return (
        <>
            <div class = "content-container">
                <div class = "container-fluid">
                    <div class = "jumbotron">
                        <i class = "fa fa-tachometer fa-3x d-inline text-success" style={{marginRight: '25px;'}}></i><h1 class="d-inline">Dashboard</h1>
                        <div class="card shadow-sm mt-5 mb-5">
                            <div className="card-body">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-3 col-sm-6">
                                            <div class="card-box bg-blue shadow-sm">
                                                <div class="inner">
                                                    <h3> 60 </h3>
                                                    <p> Users </p>
                                                </div>
                                                <div class="icon">
                                                    <i class="fa fa-users" aria-hidden="true"></i>
                                                </div>
                                                <a href="/users" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-sm-6">
                                            <div class="card-box bg-green shadow-sm">
                                                <div class="inner">
                                                    <h3> 10 </h3>
                                                    <p> Teachers </p>
                                                </div>
                                                <div class="icon">
                                                    <i class="fa fa-chalkboard-teacher" aria-hidden="true"></i>
                                                </div>
                                                <a href="/teachers" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-sm-6">
                                            <div class="card-box bg-orange shadow-sm">
                                                <div class="inner">
                                                    <h3> 5 </h3>
                                                    <p> Topics </p>
                                                </div>
                                                <div class="icon">
                                                    <i class="fa fa-book" aria-hidden="true"></i>
                                                </div>
                                                <a href="/topics" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-sm-6">
                                            <div class="card-box bg-red shadow-sm">
                                                <div class="inner">
                                                    <h3> 5 </h3>
                                                    <p> Quizzes </p>
                                                </div>
                                                <div class="icon">
                                                    <i class="fa fa-pen" aria-hidden="true"></i>
                                                </div>
                                                <a href="/quizzes" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
                                            </div>
                                        </div>
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

export default Dashboard;