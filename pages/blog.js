import Link from "next/link";
import Layout from "../components/layout";

const PostLink = ({ title }) => {
  return (
    <Link href={`/posts?title=${title}`}>
      <a>{title}</a>
    </Link>
  );
};

export default function Blog() {
  return (
    <Layout title="My Blog">
      <PostLink title="angular" />
      <PostLink title="react" />
      <PostLink title="vue" />
    </Layout>
  );
}
