import React, { Component } from 'react'
import React from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';

export default class App extends Component {
  render() {
    return (
      <div>
        const Example = (props) return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
      </FormGroup>
    </Form>
        )
      </div>
    )
  }
}

export default Example;