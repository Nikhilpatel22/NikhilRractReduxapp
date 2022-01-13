
import React,{usetate} from 'react';
import { Button } from 'reactstrap';

import { Modal,ModalBody,ModalHeader,UncontrolledAlert,Badge,Breadcrumb,BreadcrumbItem,Progress,Spinner,
  Navbar,NavbarBrand,NavbarToggler,Collapse,NavLink,NavItem,Nav,Card,CardBody} from 'reactstrap';

const Test = () =>{
    const [open,setopen] = usetate
}
const noRefCheck = () =>{
  
}

export default (props) => {
  return (
    <div>
      <div>
  <Navbar
    color="faded"
    light
  >
    <NavbarBrand
      className="me-auto"
      href="/"
    >
      reactstrap
    </NavbarBrand>
    <NavbarToggler
      className="me-2"
      onClick={function noRefCheck(){}}
    />
    <Collapse navbar>
      <Nav navbar>
        <NavItem>
          <NavLink href="/components/">
            Components
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            GitHub
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
</div>
    <Button color="danger">Danger!</Button>
    <UncontrolledAlert color="info">
  I am an alert and I can be dismissed!
</UncontrolledAlert>
<div>
  <Badge color="primary">
    New
  </Badge>
  <div>
  <Breadcrumb>
    <BreadcrumbItem active>
      Home
    </BreadcrumbItem>
  </Breadcrumb>
  <Breadcrumb>
    <BreadcrumbItem>
      <a href="#">
        Home
      </a>
    </BreadcrumbItem>
    <BreadcrumbItem active>
      Library
    </BreadcrumbItem>
  </Breadcrumb>
  <Breadcrumb>
    <BreadcrumbItem>
      <a href="#">
        Home
      </a>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <a href="#">
        Library
      </a>
    </BreadcrumbItem>
    <BreadcrumbItem active>
      Data
    </BreadcrumbItem>
  </Breadcrumb>
  <div>
  <Progress value={10} />
  <Progress
    color="success"
    value="30"
  />
  <Progress
    color="info"
    value={50}
  />
  <Progress
    color="warning"
    value={75}
  />
  <Progress
    color="danger"
    value="100"
  />
  <div>
  <Button
    color="primary"
    onClick={function noRefCheck(){}}
    style={{
      marginBottom: '1rem'
    }}
  >
    Toggle
  </Button>
  <Collapse>
    <Card>
      <CardBody>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </CardBody>
    </Card>
  </Collapse>
</div>
  <div>
  <Spinner
    color="primary"
    type="grow"
  >
    Loading...
  </Spinner>
  <Spinner
    color="secondary"
    type="grow"
  >
    Loading...
  </Spinner>
  <Spinner
    color="success"
    type="grow"
  >
    Loading...
  </Spinner>
  <Spinner
    color="danger"
    type="grow"
  >
    Loading...
  </Spinner>
  <Spinner
    color="warning"
    type="grow"
  >
    Loading...
  </Spinner>
  <Spinner
    color="info"
    type="grow"
  >
    Loading...
  </Spinner>
  <Spinner
    color="light"
    type="grow"
  >
    Loading...
  </Spinner>
  <Spinner
    color="dark"
    type="grow"
  >
    Loading...
  </Spinner>
</div>
</div>
</div>
</div>
</div>
  );
};

