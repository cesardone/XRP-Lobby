import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  Button,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from 'reactstrap';

export default () => {
  const [name, setName] = useState('');

  const handleSubmit = (evt) => {
    if (!name) {
      evt.preventDefault();
    } else {
      setName('');
    }
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
                onKeyUp={(evt) => {
                  evt.preventDefault();
                }}
                value={name}
              />
              <InputGroupAddon addonType='append'>
                <InputGroupText>$xspring.money</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
          <Link
            to={{
              pathname: '/lobby',
              name: {
                name,
              },
            }}
          >
            <Button
              className='btn-lg btn-dark btn-block'
              type='submit'
              onClick={(evt) => {
                handleSubmit(evt);
              }}
            >
              Log In
            </Button>
          </Link>
        </Form>
      </Card>
    </div>
  );
};
