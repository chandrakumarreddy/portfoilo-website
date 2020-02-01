import Link from "next/link";
import Layout from "../components/layout";

export default function about() {
  return (
    <Layout title="About page">
      <p>About us</p>
      <Link href="/">
        <a>home</a>
      </Link>
    </Layout>
  );
}
