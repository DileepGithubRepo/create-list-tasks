import React, {useState, useContext, createContext} from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import {TaskContext} from "../taskContext/TaskContext";


const TaskListing = ()=> {
  const [task, setTask] = useContext(TaskContext);
  
  return(
    <Col xs={10}>
      <h1>Tasks</h1>
      {task.length > 0 && 
        <Table striped bordered hover variant="dark">
             <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Assignee name</th>
                  <th>Assignee Email</th>
                  <th>Story Points</th>
                  <th>Documentation link</th>
                </tr>
              </thead>
              <tbody>
                {task.map((task, key)=> {
                    return(
                      <tr key={key}>
                        <td>{key + 1}</td>
                        <td>{task.title}</td>
                        <td>{task.taskdescription}</td>
                        <td>{task.username}</td>
                        <td>{task.email}</td>
                        <td>{task.storypoints}</td>
                        <td>{task.documentationlink}</td>
                      </tr>
                    )
                  })}
              </tbody>
            </Table>
      }
      {task.length === 0 && 
        <Table striped bordered hover variant="dark">
          <thead>
            <th>Tasks</th>
          </thead>
          <tbody>
              <td>No records found!</td>
          </tbody>
        </Table>
      }
    </Col>
  )
}

export default TaskListing;