import React, {useContext} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import content from "../static";
import { Button, Col, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {TaskContext} from "../taskContext/TaskContext";

const schema = yup.object().shape({
    title: yup.string().required("Please enter task title"),
    username: yup.string().required("Please enter assignee's name"),
    email: yup.string().email().required("Please enter assignee email id"),
    taskdescription: yup.string().required("Please enter the description"),
    storypoints: yup.number().required("Please enter story points"),
    documentationlink: yup.string().required("Please enter documentation link")
});

const CreateTask = () => {
  const [task, setTask] = useContext(TaskContext);
  const { register, handleSubmit, formState:{ errors } , reset} = useForm({
    resolver: yupResolver(schema),
  });

  const notify = () => toast("Task has been completed successfully!");

  const onSubmit = (data)=> {
    setTask(previousTasks => [...previousTasks, data]);
    reset();
    notify();
  };

  return (
    <Col xs={4}>
        <h1>Create a Task</h1>
        <ToastContainer />
        <form onSubmit={handleSubmit(onSubmit)}>
            {content.inputs.map((input, key)=>{
                return(
                    <div key={key} className="form-each-wrap">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="text-capitalize">{input.label}</Form.Label>
                            <Form.Control type={input.type} name={input.name} {...register(input.name)} />
                        </Form.Group>
                        <p className="error">{errors[input.name]?.message}</p>
                    </div>
                    )
            })}
            <Button variant="primary" type="submit">Submit</Button>
        </form>
    </Col>
    
  );
};

export default CreateTask;