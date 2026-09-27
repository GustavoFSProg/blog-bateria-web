import { useEffect, useState } from "react";
import styled from "styled-components";
import api from "./api";

const Card = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  background: lightblue;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  border-radius: 15px;
  padding-top: 10px;
`;

const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  /* width: 100%; */
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
          backgroundImage: "linear-gradient(to bottom, #404040, gray)",
        }}
      >
        <h1 style={{ color: "lightgray" }}>MEU BLOG SOBRE BATERIA</h1>
        <ContainerCards>
          {posts.map((items) => {
            return (
              <Card>
                <img src={items.image} width="250" height="200" />
                <h1>{items.title}</h1>
                <p style={{ width: "350px" }}> {items.description}</p>
              </Card>
            );
          })}
        </ContainerCards>
      </div>
    </>
  );
}

export default App;
