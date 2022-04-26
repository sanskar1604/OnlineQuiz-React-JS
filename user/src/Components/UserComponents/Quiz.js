import React from "react";

export default function Quiz(){
    return(
        <div class = "container-fluid">
            <hr />
		    <div class="row text-center">
			    <div class="col-md-6">
				    <b>Topic: </b>Java Fundamentals
			    </div>
		        <div class="col-md-6">
			        <b>Time Left:</b> 20:00	
		        </div>
	        </div>
	        <hr />
            <div class = "container mt-5">
                <div class = "card shadow">
                    <div class = "card-body">
                        <form>
                            <p><span style={{fontWeight:"bold", fontSize: "20px"}}>Question 1: </span>Which of the following option leads to the portability and security of Java?</p>
                            <div class = "form-group">
                                <input type = "radio" name = ""></input>&nbsp;&nbsp;<label>Bytecode is executed by JVM</label>
                            </div>
                            <div class = "form-group">
                                <input type = "radio" name = ""></input>&nbsp;&nbsp;<label>The applet makes the Java code secure and portable</label>
                            </div>
                            <div class = "form-group">
                                <input type = "radio" name = ""></input>&nbsp;&nbsp;<label>Use of exception handling</label>
                            </div>
                            <div class = "form-group">
                                <input type = "radio" name = ""></input>&nbsp;&nbsp;<label>Dynamic binding between objects</label>
                            </div>
                            <a href = "" class = "btn btn-sm btn-success mt-5">Next&nbsp;<i class = "fa fa-arrow-right"></i></a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}