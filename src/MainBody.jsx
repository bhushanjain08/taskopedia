import Header from "./Layout/Header";

export default function MainBody() {
    return (
      <div >
        <Header />
        <h5>Body content</h5>
        <p>
          In this project we will work on react JS by building taskOpedia project
        </p>
        <p style={{ color: "red" }}> This is the main body</p>
        <ul>
          <li>Basic foundation</li>
          <li>Functional and class components</li>
        </ul>
      </div>
    );
  }