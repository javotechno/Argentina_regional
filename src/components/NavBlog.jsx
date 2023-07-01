<<<<<<< HEAD
import { useState } from "react";
=======
>>>>>>> 8404bd1b81d8beb4384a45161743970b6f330bd1
import styled from "styled-components";

const NavStyle = styled.nav`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
<<<<<<< HEAD
  input {
    padding: 5px;
    border-radius: 10px;
  }
  div {
    display: flex;
    align-items: center;
  }
  .date {
    p {
      margin-right: 5px;
    }
  }
  img {
    width: 25px;
    margin-left: 5px;
    filter: invert(100%);
    transition: ease-in-out 0.2s;
    :hover {
      filter: invert(0);
      cursor: pointer;
    }
  }
  @media (width < 990px) {
    div {
      margin: 10px 0;
    }
  }
`;

const NavBlog = () => {

  const [order, setOrder] = useState(false)

  return (
    <NavStyle>
      <div className="sort">
        <p>Ordenar por:</p>
        <img onClick={() => setOrder(!order)} style={order ? {'display': 'none'} : {}} src="/Iconos/desc.svg" />
        <img onClick={() => setOrder(!order)} style={order ? {} : {'display': 'none'}} src="/Iconos/asc.svg" />
      </div>
      <div className="date">
      <p>Desde:</p>
      <input type="date" />
      </div>
      <div className="date">
      <p>Hasta:</p>
      <input type="date" />
      </div>
      <div className="search">
        <input type="text" />
        <img src="/Iconos/search.svg" />
      </div>
=======
`;

const NavBlog = () => {
  return (
    <NavStyle>
      <p>Ordenar por:</p>
      <input type="date" />
      <input type="date" />
      <input />
>>>>>>> 8404bd1b81d8beb4384a45161743970b6f330bd1
    </NavStyle>
  );
};

export default NavBlog;
