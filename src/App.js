import React from 'react';
import './App.css';
import logo from './logo.svg';
import NestedEditableTree from 'react-editable-nested-menu';
import { Row, Col, Container, Input, Navbar, NavbarBrand } from 'reactstrap';

function App() {
  const [twoLevel, setTwoLevel] = React.useState('');
  const [threeLevel, setThreeLevel] = React.useState('');
  return (
    <div>
      <Navbar color="light" light expand="md">
        {' '}
        <NavbarBrand href="/">React Editable Nested Menu</NavbarBrand>
      </Navbar>
      <Container className="App">
        <Row className="row__style mt-5">
          <Col md="12">
            <h1>Two Level</h1>
            <hr />
            <NestedEditableTree
              getValueOnSave={list => {
                setTwoLevel(JSON.stringify(list));
              }}
              secondLevelShouldHaveDetails={true}
              levels={2}
              logo={logo}
            />
            <h2 className="text-center my-3">Result</h2>
            <Input type="textarea" disabled={true} value={twoLevel} />
          </Col>
        </Row>
        <Row className="row__style my-5">
          <Col md="12">
            <h1>Three Level</h1>
            <hr />
            <NestedEditableTree
              getValueOnSave={list => {
                setThreeLevel(JSON.stringify(list));
              }}
              logo={logo}
            />
            <h2 className="text-center my-3">Result</h2>
            <Input type="textarea" disabled={true} value={threeLevel} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
