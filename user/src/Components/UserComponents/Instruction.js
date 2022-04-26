import React from "react";

export default function Instruction(){
    return(
        <>
            <div class="container mt-5">
		        <h2>Quiz Instructions</h2>
		        <hr />
		        <div class="row">
			        <div class="col-md-3">
				        <b>Date:</b> Aug 25, 2022	
			        </div>
			        <div class="col-md-3">
				        <b>Points:</b> 20
			        </div>
			        <div class="col-md-3">
				        <b>Questions:</b> 20	
			        </div>
			        <div class="col-md-3">
				        <b>Time Limit:</b> 20 Minutes	
			        </div>
		        </div>
		        <hr />
		        <h3>Instructions</h3>
		        <p>This exam will cover the content from Module 1 through 12. You will have 20 minutes to complete this assessment.<br />Keep the following in mind:-</p>
		        <ul>
			        <li><b>Timing - </b>You will need to complete each of your attempts in one sitting, as you are allotted 20 minutes to complete each attempt.</li>
		        </ul>
		        <p>To start, click the <b>"Take the Quiz"</b> button. When finished, click the <b>"Submit Quiz"</b> button.</p>
		        <p>Only registered, enrolled users can take graded quizzes</p>
		        <hr />
		        <a href="quiz.html" type="submit" class="btn btn-sm btn-success text-light justify-content-center">Take the Quiz</a>
	        </div>
        </>
        
    );
}