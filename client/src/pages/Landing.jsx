import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper className="">
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby sus +1 VHS cloud bread air plant DIY neutral milk hotel
            actually letterpress fashion axe subway tile neutra raw denim
            tousled skateboard. Iceland umami put a bird on it pork belly
            schlitz pug drinking vinegar kombucha raw denim DSA mustache
            cold-pressed blackbird spyplane photo booth Brooklyn.
          </p>
          <Link to="/register" className="btn register-link" >Register</Link>
          <Link to="/login" className="btn " >Login / Demo User</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
