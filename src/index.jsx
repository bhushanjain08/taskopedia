import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Footer from "./Layout/Footer";
import Student from "./Student";
import MainBody from "./MainBody";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div style={{backgroundColor: "black", color:"grey"}}>
    <MainBody />
    <div className="container row">Students Enrolled</div>
    <Student
      name="Bhushan jain"
      exp={3}
      headshot="https://api.lorem.space/image/face?w=150&h=151"
    />
    <Student
      name="David jain"
      exp={7}
      headshot="https://api.lorem.space/image/face?w=150&h=149"
    />
    <Student
      name="Mike jain"
      exp={5}
      headshot="https://api.lorem.space/image/face?w=150&h=150"
    />
     <Footer />
  </div>
);
