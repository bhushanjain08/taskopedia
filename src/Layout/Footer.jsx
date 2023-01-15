function PreFooter() {
  return <h1 style={{ color: "pink" }}>PRE Footer</h1>;
}

function Footer() {
  return (
    <div>
      <PreFooter />
      <h1 className="text-secondary">React Footer</h1>
      <p style={{
        color:"gray",
        backgroundColor:"black",
        marginTop:"10px",
        textAlign:"center"
      }}>
        Happy Coding</p>
    </div>
  );
}

export default Footer;
