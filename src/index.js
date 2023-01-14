import ReactDOM from "react-dom/client";
import "./CSS/style.css";

const header = {
  color:"blueviolet",
  backgroundColor:"lightgray"
}

function SubHeader() {
  return <h1 className="heading">React Sub header</h1>;
}

function Header() {
  return <div>
    <SubHeader/>
    <h1 style={header}>React App Header</h1>;
  </div>
  
}

function PreFooter() {
  return <h1 style={{color:"pink"}}>PRE Footer</h1>;
}

function Footer() {
  return <h1 className="text-secondary">React App Footer</h1>;
}

function MainBody() {
  return (
    <div>
      <Header />
      <h5>Body content</h5>
      <p style={{color:"red"}}> This is the main body</p>
      <PreFooter />
      <Footer />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <MainBody />
  </div>
);
