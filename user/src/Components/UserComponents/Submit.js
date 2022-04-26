import React from "react";

export default function Submit(){
    return(
        <>
            <div class = "container text-center">
                <h6 class="text-center mt-5">You have completed</h6>
                <h4 class="text-center mt-2">Java_Fundamental</h4>
                <div class="row mt-5">
			        <div class="col-md-4">
				        <p class="text-center"><b>ABC</b><br /><small class="text-center">First Name</small></p>
			        </div>
			        <div class="col-md-4">
				        <p class="text-center"><b>XYZ</b><br /><small class="text-center">Last Name</small></p>
			        </div>
			        <div class="col-md-4">
				        <p class="text-center"><b>ABC@gmail.com</b><br /><small class="text-center">Email</small></p>
			        </div>
		        </div>
                <div class="row mt-5">
                    <div class="col-md-3">
				        <p class="text-center"><b>10</b><br/><small class="text-center">Total Questions</small></p>
			        </div>
			        <div class="col-md-3">
				        <p class="text-center"><b>10</b><br/><small class="text-center">Question Attempted</small></p>
			        </div>
			        <div class="col-md-3">
				        <p class="text-center"><b>0</b><br/><small class="text-center">Question Skipped</small></p>
			        </div>
                    <div class="col-md-3">
				        <p class="text-center"><b>10</b><br/><small class="text-center">Total Marks</small></p>
			        </div>
		        </div>
            </div>
        </>
    );
}