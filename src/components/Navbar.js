import React, { useState } from 'react';
import styled from 'styled-components';

function Navbar() {
  const [isOpen, setIsOpen] = useState (false)


  return (
    <div className="nav">
     <div className="nav-link-left">
       <i className="fas fa-keyboard logo"></i>
       <i className="fas fa-mouse-pointer"></i>
       <a href="/home" className="home-logo">Home</a>
     </div>
     <form className="d-flex">
       <input className="form-control me-2 search-bar" type="search" placeholder="Search" aria-label="Search"></input>
       <button class="btn btn-outline-success" type="submit">Search</button>
     </form>
     
     <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
       <span />
       <span />
       <span />
     </div>
     <Menu isOpen={isOpen }>
     
       <a href="/signup" className="menu-link">Register</a>
       <a href="/login" className="menu-link">Login</a>
       <a href="/profilepage" className="menu-link">Profile</a>
     </Menu>
    </div>
    
);
};

const Menu = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: relative;

@media (max-width: 1410px) {
overflow: hidden;
flex-direction: column;
width: 100%;
max-height: ${({isOpen}) => (isOpen ? "300px" : "0px")};
transition: max-height: 0.3 ease-in;
background-color: #393E46;
}
`

export default Navbar;