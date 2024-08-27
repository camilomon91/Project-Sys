import React from "react";
import { comments } from "./CommentData";
import Card from "./Card";

function App() {
  const commentsList = comments.map((comment) => (
    <Card commentObject={comment} />
  ));

  return <div>{commentsList}</div>;
}

export default App;
