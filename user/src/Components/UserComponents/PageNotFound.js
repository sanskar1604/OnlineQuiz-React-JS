import React from "react";

export default function PageNotFound(){
    return(
        <>
            <div class = "container">
                <p class = "text-center" style={{fontSize: '200px'}}>
                    404
                </p>
                <p class = "text-center" style={{fontSize: '40px'}}>SORRY, PAGE NOT FOUND</p>
                <p class = "text-center"><a href = "/login" class = "btn btn-dark text-light">Go to the main page</a></p>
            </div>
        </>
    );
}