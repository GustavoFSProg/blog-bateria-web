import { Link } from "react-router-dom";
import styled from "styled-components";

const ContainerAll = styled.div`
  display: flex;
  width: 100%;
  height: 65px;
  /* background: darkblue; */
  background: #000080;

  color: lightgray;
  align-items: center;
  justify-content: space-between;
`;

const ContainerLinks = styled.div`
  display: flex;
  width: 40%;
  height: 59px;
  /* background: darkblue; */
  /* background: #000099; */

  color: lightgray;
  align-items: center;
  margin-left: 110px;
  justify-content: space-between;
  font-weight: bold;
  font-size: 18px;
`;

function Header() {
  return (
    <>
      <ContainerAll>
        <ContainerLinks>
          <Link
            style={{
              textDecoration: "none",
              color: "lightgray",
              cursor: "pointer",
            }}
          >
            HOME
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "lightgray",
              cursor: "pointer",
            }}
          >
            POSTS
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "lightgray",
              cursor: "pointer",
            }}
          >
            ADMIN
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "lightgray",
              cursor: "pointer",
            }}
          >
            LOGIN
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "lightgray",

              cursor: "pointer",
            }}
          >
            CADASTRO
          </Link>
        </ContainerLinks>
      </ContainerAll>
    </>
  );
}

export default Header;
