import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";


function Topics() {

    useEffect(() => {
        document.title = "Topics";
    }, []);

    // Start Display all topics
    const [topics, setTopics] = useState([]);

    const getAllTopicFromServer = () => {
        axios.get("topics")
        .then(
            (response) => {
                setTopics(response.data);
            },
            (error) => {
                console.log(error);
            }
        );
    };
    useEffect(() => {
        getAllTopicFromServer();
    }, []);

    // End Display all topics

    // Start Add topic

    const [topic, setTopic] = useState({});
    //Form handler function
    const handleForm = (e) => {
        console.log(topic);
        postDataToServer(topic);
        e.preventDefault();
        e.target.reset();
    };


    //Creating function to post data on server
    const postDataToServer = (data) => {
        axios.post("/topics", data).then(
            (response) => {
                setTopic(response.data);
                toast.success('Topic add successfully');
                getAllTopicFromServer();
            }, (error) => {
                console.log(error);
            }
        );
    };

    // End Add topic

    // Start Delete Topic

    const deleteTopic = (id) => {
        axios.delete(`topics/${id}`).then(
            (response) => {
                console.log(response);
                getAllTopicFromServer();
            }, (error) => {
                console.log(error);
            }
        )
    }

    // End Delete Topic


    
    return (
        <>
            <div class = "content-container">
                <div class = "container-fluid">
                    <div class = "jumbotron">
                        <i class = "fa fa-book fa-3x d-inline text-success" style={{marginRight: '25px;'}}></i><h1 class="d-inline">Topic</h1>
                        <div class="card shadow-sm mt-5 mb-5">
                            <div class="card-body">
                                <nav>
                                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                        <button class="nav-link active" id="topics-tab" data-bs-toggle="tab" data-bs-target="#topics" type="button" role="tab" aria-controls="topics" aria-selected="true">Manage Topics</button>
                                        <button class="nav-link" id="add-topic-tab" data-bs-toggle="tab" data-bs-target="#add-topic" type="button" role="tab" aria-controls="add-topic" aria-selected="true">Add Topic</button>
                                    </div>
                                </nav>
                                <div class="tab-content" id="nav-tabContent">
                                    <div class="tab-pane fade show active" id="topics" role="tabpanel" aria-labelledby="topics-tab">
                                    <table id="example" class = "display mt-5" style={{width:'100%'}}>
                                            <thead>
                                                <tr>
                                                    <th>Topic ID</th>
                                                    <th>Topic</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    topics.length > 0 ?
                                                    topics.map((topic) => {
                                                        return (
                                                            <tr>
                                                                <td># {topic.id}</td>
                                                                <td>{topic.topic}</td>
                                                                <td>
                                                                    <div class="btn-group" role="group">
                                                                        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Select Action<span class="caret"></span></button>
                                                                        <ul class="dropdown-menu" role="menu">
                                                                            <li><a class="dropdown-item" href="edit_teacher.html">Edit Topic</a></li>
                                                                            <div class="dropdown-divider"></div>
                                                                            <li><button onClick={() => deleteTopic(topic.id)} class = "dropdown-item">Delete Topic</button></li>
                                                                        </ul>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        )
                                                    }) : ""
                                                }
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Topic ID</th>
                                                    <th>Topic</th>
                                                    <th>Action</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    <div class="tab-pane fade" id="add-topic" role="tabpanel" aria-labelledby="add-topic-tab">
                                        <form action="" method="POST" class="mt-4" onSubmit = { handleForm }>
                                            <div class="form-group">
                                                <label>Topic</label>
                                                <input type="text" class="form-control shadow-sm" placeholder="Topic" name="topic" required  onChange = {(e) => {
                        setTopic({...topic, topic:e.target.value})
                    }}></input>
                                            </div>
                                            <button type="submit" class="btn btn-dark text-light mt-3">Add Topic</button>
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

export default Topics;