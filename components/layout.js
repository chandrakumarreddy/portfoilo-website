import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

export default function layout({ children, title, footer = true }) {
  return (
    <div className="root">
      <Head>
        <title>NextPortfolio</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="http://ricostacruz.com/nprogress/nprogress.css"
        />
      </Head>
      <header>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/hireme">
          <a>Hire me</a>
        </Link>
      </header>
      <h1>{title}</h1>
      {children}
      {footer && <footer>&copy; {new Date().getFullYear()}</footer>}
      <style jsx>
        {`
          .root {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          header {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            background: indigo;
            padding: 1rem;
            font-size: 1.2rem;
            box-sizing: border-box;
          }
          header a {
            color: gray;
            text-decoration: none;
          }
          header a:hover {
            color: lightgray;
            font-weight: bold;
          }
          footer {
            padding: 1rem;
          }
        `}
      </style>
      <style global jsx>
        {`
          body {
            margin: 0;
            font-size: 110%;
            background: #f0f0f0;
          }
        `}
      </style>
    </div>
  );
}
