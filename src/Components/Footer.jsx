function Footer() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "80px",
          background: "#0000cc",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          color: "white",
        }}
      >
        <span style={{ marginBottom: "10px" }}>Site feito por: </span>
        <span> Gustavo Sohne</span>
      </div>
    </>
  );
}

export default Footer;
