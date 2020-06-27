import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Card,
  Button,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from 'reactstrap';

export default () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const handleClick = (evt) => {
    // !name ? evt.preventDefault() : evt.preventDefault();
    evt.preventDefault();
    setName('');
    console.log(name);
  };
  return (
    <div>
      <h2 className='text-center'> Login </h2>
      <Card className='loginForm'>
        <Form>
          <FormGroup>
            <Label>Name</Label>
            <InputGroup>
              <Input
                placeholder='enter name'
                type='text'
                onChange={(evt) => {
                  setName(evt.target.value);
                }}
                value={name}
              />
              <InputGroupAddon addonType='append'>
                <InputGroupText>$xspring.money</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
          <Button
            className='btn-lg btn-dark btn-block'
            type='submit'
            onClick={(evt) => {
              handleClick(evt);
            }}
          >
            Log In
          </Button>
        </Form>
      </Card>
    </div>
  );
};
