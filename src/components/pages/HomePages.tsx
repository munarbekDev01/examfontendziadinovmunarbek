import React from "react";
import ToDoCreator from "./HomePages/ToDoCreator";
import ToDoList from "./HomePages/ToDoList";

const HomePages = () => {
  return (
    <div>
      <ToDoCreator />
      <ToDoList />
    </div>
  );
};

export default HomePages;
