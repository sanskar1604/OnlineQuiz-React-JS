import React from "react";

function Sidebar(){
    return(
        <>
        <div class="sidebar-container">
            <ul class="sidebar-navigation">
                <li>
                    <a href="/">
                      <i class="fa fa-tachometer" aria-hidden="true"></i> Dashboard
                    </a>
                  </li>
              <li>
                <a href="/users">
                  <i class="fa fa-users" aria-hidden="true"></i> Users
                </a>
              </li>
              <li>
                <a href="/teachers">
                  <i class="fa fa-chalkboard-teacher" aria-hidden="true"></i> Teachers
                </a>
              </li>
              <li>
                <a href="/topics">
                  <i class="fa fa-book" aria-hidden="true"></i> Topics
                </a>
              </li>
              <li>
                <a href="/quizzes">
                  <i class="fa fa-pen" aria-hidden="true"></i> Quiz
                </a>
              </li>
              <li>
                <a href="/questions">
                  <i class="fa-solid fa-circle-question" aria-hidden="true"></i> Question
                </a>
              </li>
            </ul>
          </div>
        </>
    );
}

export default Sidebar;