import React from "react";

export default function Footer(){
    return (
        <div style={{position:'fixed', width:'100%', bottom:'0'}}>
            <footer class="text-center text-lg-start bg-secondary text-muted">
            <div class="text-center p-2 text-light" style={{backgroundColor: "rgba(0, 0, 0, 0.05);"}}>
                    © 2022 Copyright:
                    <a class="text-reset fw-bold" href=""><img src="https://dxc.com/content/dam/dxc/projects/dxc-com/us/images/about-us/newsroom/logos-for-media/horizontal/DXC%20Logo%20Horiz_Purple+Black%20RGB.png" style={{height:'30px'}}></img></a>
            </div>
            </footer>
        </div>
    );
}