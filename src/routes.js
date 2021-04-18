import React from 'react';
import CreateTask  from './components/CreateTask';
import TaskListing from './components/TasksListing';
import NavBar from './components/NavBar/NavBar';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { TaskProviders } from "./taskContext/TaskContext";

export const Routes = () => {
  return (
    <TaskProviders>
      <Container fluid>
        <Row>
            <Col xs={2} style={{"minHeight": "100vh", backgroundColor: "#41E0FC"}}>
                <NavBar />
            </Col>
            <Switch>
                  <Route exact path="/CreateTask" component={CreateTask} />
                  <Route exact path="/">
                      <Redirect to="/" />
                  </Route>
                  <Route exact path="/TaskListing" component={TaskListing} />
              </Switch>
        </Row>
      </Container>
    </TaskProviders>
  );
};