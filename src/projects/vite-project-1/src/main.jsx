import React from "react";
import ReactDOM from "react-dom/client";
import { ButtonComponent } from "./buttonComponent.jsx";
import "./index.css";
import "./buttonComponent.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const users = [
  {
    userName: "Jhoan",
    description: "Frontend Developer",
    isFollowing: true,
  },
  {
    userName: "Maria",
    description: "Frontend Developer",
    isFollowing: false,
  },
  {
    userName: "Pedro",
    description: "Frontend Developer",
    isFollowing: true,
  },
];
root.render(
  <>
    <section className="people" style={{ color: "#3ee" }}>
      <h1>Full Stack very soon 😄</h1>
      {users.map(({ userName, description, isFollowing }) => (
        <ButtonComponent
          userName={userName}
          description={description}
          initialIsFollowing={isFollowing}
        ></ButtonComponent>
      ))}
    </section>
  </>
);
