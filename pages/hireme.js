import fetch from "isomorphic-fetch";
import Layout from "../components/layout";
import Error from "./_error";

export default function Hireme({ todo, error }) {
  if (error) {
    return <Error error={true} />;
  }
  return (
    <Layout title="hire me">
      <p>{JSON.stringify(todo)}</p>
      <p>
        You cn hire me at {"  "}
        <a href="mailto:email@email.com">email@email.com</a>
      </p>
    </Layout>
  );
}

Hireme.getInitialProps = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const todo = await res.json();
    return { todo, error: false };
  } catch (error) {
    return { todo: {}, error: error.message };
  }
};
