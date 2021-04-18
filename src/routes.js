import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import CreateTask  from './components/CreateTask';
import TaskListing from './components/TasksListing';
import NavBar from './components/NavBar/NavBar';
import HomeScreen from "./components/HomeScreen";
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
                  <Route exact path="/CreateTask">
                    <CreateTask/>
                  </Route>
                  <Route exact path="/">
                      <HomeScreen/>
                  </Route>
                  <Route exact path="/TaskListing">
                      <TaskListing/>
                  </Route>
              </Switch>
        </Row>
      </Container>
    </TaskProviders>
  );
};