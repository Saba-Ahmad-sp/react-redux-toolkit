import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <section>
        <nav>
          <ul className="menuItems">
            <li>
              <a href="/" data-item="Home">
                Adding and Removing Users using Redux ToolKit
              </a>
            </li>
            {/* <li>
              <a href="/" data-item="About">
                About
              </a>
            </li>
            <li>
              <a href="/" data-item="Projects">
                Projects
              </a>
            </li>
            <li>
              <a href="/" data-item="Code">
                Code
              </a>
            </li>
            <li>
              <a href="/" data-item="Contact">
                Contact
              </a>
            </li> */}
          </ul>
        </nav>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  nav {
    margin: 0;
    background: black;
    border-radius: 40px;
    padding: 1rem 1rem;
  }
  nav .menuItems {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  nav .menuItems li {
    margin: 1.6rem 5rem;
  }
  nav .menuItems li a {
    text-decoration: none;
    color: #8f8f8f;
    font-size: 24px;
    font-weight: 400;
    transition: all 0.5s ease-in-out;
    position: relative;
    text-transform: uppercase;
  }
  nav .menuItems li a::before {
    content: attr(data-item);
    transition: 0.5s;
    color: #8254ff;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0;
    overflow: hidden;
  }


  @media screen and (max-width: 998px) {
    nav .menuItems li {
      margin: 0.6rem 1rem;
      
    }
  }
`;

export default Navbar;