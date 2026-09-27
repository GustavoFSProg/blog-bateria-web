import { useEffect, useState } from "react";
import styled from "styled-components";
import api from "./api";

const Card = styled.div`
  display: flex;
  width: 90%;
  height: 550px;
  background: lightblue;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  border-radius: 15px;
  padding-top: 10px;

  @media screen and (max-width: 750px) {
    display: flex;
    /* flex-direction: column; */
    width: 100%;
    height: auto;
    padding-top: 33px;
    padding-bottom: 33px;
  }
`;

const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;

  @media screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ContainerGeral = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 200px;
  padding-top: 25px;
  background-image: linear-gradient(to bottom, #404040, gray);

  @media screen and (max-width: 750px) {
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
  }
`;

const BodyContainer = styled.div`
  display: flex;
  width: 85%;
  align-items: center;
  justify-content: center;
  // background: "green",
  margin-left: 110px;

  @media screen and (max-width: 750px) {
    margin-left: 10px;
  }
`;

function App() {
  const [posts, setPosts] = useState([]);

  async function GetPosts() {
    try {
      const { data } = await api.get("/get-posts");

      if (!data) {
        return alert("Erro, posts não encontrados!!");
      }

      setPosts(data);

      return data;
    } catch (error) {
      return alert(error);
    }
  }

  useEffect(() => {
    GetPosts();
  }, []);

  return (
    <>
      <ContainerGeral>
        <h1 style={{ color: "lightgray" }}>BLOG SOBRE BATERIA</h1>
        <BodyContainer>
          <ContainerCards>
            {posts.map((items) => {
              return (
                <Card>
                  <img src={items.image} width="250" height="200" />
                  <h2 style={{ fontSize: "27px" }}>{items.title}</h2>
                  <p style={{ width: "80%" }}> {items.description}</p>
                </Card>
              );
            })}
          </ContainerCards>
        </BodyContainer>
      </ContainerGeral>
    </>
  );
}

export default App;
