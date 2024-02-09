import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 className="head"> Namaste React using JSX 🚀</h1>;

const Heading = () => (
  <div>
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading" tabIndex={5}>
      Namaste React Functional Component
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
