import React from "react";

function Questions() {
    return (
        <>
            <>
            <div class = "content-container">
                <div class = "container-fluid">
                    <div class = "jumbotron">
                        <i class = "fa-solid fa-circle-question fa-3x d-inline text-success" style={{marginRight: '25px;'}}></i><h1 class="d-inline">Question</h1>
                        <div class="card shadow-sm mt-5 mb-5">
                            <div class="card-body">
                            <form action="" method="POST" class="mt-4">
                            <div class="form-group">
                                <label>Quiz</label>
                                <select class="form-control shadow-sm" name="quiz">
                                    <option selected disabled>- Select Quiz-</option>
                                </select>
                            </div>
                            <div class="form-group mt-2">
                                <label>Question</label>
                                <textarea rows="4" class="form-control shadow-sm" placeholder="Question" name="question" required></textarea>
                            </div>
                            <table class="table table-bordered mt-3">
                                <thead>
                                    <tr>
                                        <th width = "100">Option No.</th>
                                        <th>Option</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>
                                            <div class="form-group">
                                                <label>Option 1</label>
                                                <textarea class="form-control shadow-sm" placeholder="Option 1" name="opt1" required autocomplete="off"></textarea>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>
                                            <div class="form-group">
                                                <label>Option 2</label>
                                                <textarea class="form-control shadow-sm" placeholder="Option 2" name="opt2" required autocomplete="off"></textarea>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>
                                            <div class="form-group">
                                                <label>Option 3</label>
                                                <textarea class="form-control shadow-sm" placeholder="Option 3" name="opt3" required autocomplete="off"></textarea>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>
                                            <div class="form-group">
                                                <label>Option 4</label>
                                                <textarea class="form-control shadow-sm" placeholder="Option 4" name="opt4" required autocomplete="off"></textarea>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="4">
                                            <div class="form-group">
                                                <label>Answer</label>
                                                <select class="form-control" name="answer">
                                                    <option value="opt1">Option 1</option>
                                                    <option value="opt2">Option 2</option>
                                                    <option value="opt3">Option 3</option>
                                                    <option value="opt4">Option 4</option>
                                                </select>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <button class="btn btn-dark text-light mt-3">Add Question</button>
                        </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        </>
    );
}

export default Questions;