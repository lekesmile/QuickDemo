import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";
import Card from "./Card";

export default function App() {
  const [post, Repost] = useState([]);

  const getPost = async () => {
    const gettingPost = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    console.log(gettingPost);
    Repost(gettingPost.data);
  };

  useEffect(() => {
    getPost();
  });

  return (
    <div className="App">
      <h3> This is for Yí </h3>
      <div>
        {post.map((post) => {
          return (
            <div>
              <Card id={post.id} title={post.title} body={post.body} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
