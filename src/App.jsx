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
    width: 80%;
    height: auto;
    /* padding-top: 33px; */
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
      <div
        style={{
          display: "flex",
          width: "100vw",
          height: "auto",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingBottom: "200px",
          paddingTop: "25px",
          backgroundImage: "linear-gradient(to bottom, #404040, gray)",
        }}
      >
        <h1 style={{ color: "lightgray" }}>BLOG SOBRE BATERIA</h1>
        <div
          style={{
            display: "flex",
            width: "85%",
            alignItems: "center",
            justifyContent: "center",
            // background: "green",
            marginLeft: "110px",
          }}
        >
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
        </div>
      </div>
    </>
  );
}

export default App;
