import React from "react";
function Quiz() {
    return (
        <>
            <div class = "content-container">
                <div class = "container-fluid">
                    <div class = "jumbotron">
                        <i class = "fa fa-pen fa-3x d-inline text-success" style={{marginRight: '25px;'}}></i><h1 class="d-inline">Quiz</h1>
                        <div class="card shadow-sm mt-5 mb-5">
                            <div class="card-body">
                                <nav>
                                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                        <button class="nav-link active" id="quizzes-tab" data-bs-toggle="tab" data-bs-target="#quizzes" type="button" role="tab" aria-controls="quizzes" aria-selected="true">Manage Quizzes</button>
                                        <button class="nav-link" id="add-quiz-tab" data-bs-toggle="tab" data-bs-target="#add-quiz" type="button" role="tab" aria-controls="add-quiz" aria-selected="true">Add Quiz</button>
                                    </div>
                                </nav>
                                <div class="tab-content" id="nav-tabContent">
                                    <div class="tab-pane fade show active" id="quizzes" role="tabpanel" aria-labelledby="quizzes-tab">
                                        <table id="example" class = "display mt-5" style={{width:'100%'}}>
                                            <thead>
                                                <tr>
                                                    <th>Quiz</th>
                                                    <th>Quiz Date</th>
                                                    <th>Quiz Duration</th>
                                                    <th>Marks</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Tiger Nixon</td>
                                                    <td>System Architect</td>
                                                    <td>Edinburgh</td>
                                                    <td>2011/04/25</td>
                                                    <td>
                                                        <div class="btn-group" role="group">
                                                            <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Select Action<span class="caret"></span></button>
                                                            <ul class="dropdown-menu" role="menu">
                                                                <li><a class="dropdown-item" href="edit_teacher.html">Edit Quiz</a></li>
                                                                <div class="dropdown-divider"></div>
                                                                <li><a class="dropdown-item" href="#">Delete Quiz</a></li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Quiz</th>
                                                    <th>Quiz Date</th>
                                                    <th>Quiz Duration</th>
                                                    <th>Marks</th>
                                                    <th>Action</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    <div class="tab-pane fade" id="add-quiz" role="tabpanel" aria-labelledby="add-quiz-tab">
                                    <form action="" method="POST" class="mt-4">
                                    <div class="form-group">
                                        <label>Topic</label>
                                        <select class="form-control shadow-sm" name="topic">
                                            <option selected disabled>- Select Topic-</option>
                                        </select>
                                    </div>
                                    <div class="form-group mt-2">
                                        <label>Quiz Date</label>
                                        <input type="date" class="form-control shadow-sm" placeholder="Exam Date" name="date" required></input>
                                    </div>
                                    <div class="form-group mt-2">
                                        <label>Quiz Duration</label>
                                        <input type="time" class="form-control shadow-sm" placeholder="Duration" name="duration" required></input>
                                    </div>
                                    <div class="form-group mt-2">
                                        <label>Total Marks</label>
                                        <input type="text" class="form-control shadow-sm" placeholder="Total Marks" name="marks" required></input>
                                    </div>
                                    <div class="form-group mt-2">
                                        <label>Instruction</label>
                                        <textarea rows="4" class="form-control shadow-sm" placeholder="instruction" name="instruction" required></textarea>
                                    </div>
                                    <button class="btn btn-dark text-light mt-3">Add Quiz</button>
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

export default Quiz;