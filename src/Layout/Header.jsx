import logo from "../images/react.png";

const header = {
  color: "blueviolet",
  backgroundColor: "lightgray",
};

function SubHeader() {
  return <h1 className="heading">React Sub header</h1>;
}

export default function Header() {
  return (
    <div>
      <div className="pt-3 pl-2 py-1" style={{ background: "black" }}>
        <img src={logo} style={{ height: "35px", verticalAlign: "top" }}></img> 
        <span className="h2 pt-4 text-white-50">
          React Project - TaskOpedia
        </span>
      </div>
      <h1 style={header}>React App Header</h1>
      <SubHeader />
    </div>
  );
}
