import Link from "next/link";
import Layout from "../components/layout";

export default function index() {
  return (
    <Layout title="Home page">
      <p>Welcome to javascrit world</p>
      <img src="/images/javascript-logo.png" height="200" alt="javascript" />
      <br />
      <Link href="/about">
        <a>about</a>
      </Link>
    </Layout>
  );
}
