import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import SlidingHeader from '../components/Headers/SlidingHeader';
import Footer from '../components/Footers/Footer';
import DropdownFixedNavbar from "../components/Navbars/DropdownFixedNavbar.js";

import Teams from '../components/Sections/Teams';

function IndexPage() {
  React.useEffect(() => {
    document.body.classList.add("about-us");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("about-us");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <div className="wrapper">
        <SlidingHeader />
        <Teams />
        <Footer />
      </div>
    </>
  );
}

export default IndexPage;
