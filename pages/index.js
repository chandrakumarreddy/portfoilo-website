import Link from "next/link";
import Layout from "../components/layout";

export default function Index() {
  return (
    <Layout title="Home page">
      <p>Welcome to javascrit world</p>
      <img src="/images/javascript-logo.png" height="200" alt="javascript" />
    </Layout>
  );
}
