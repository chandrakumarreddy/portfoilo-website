import Link from "next/link";

export default function layout({ children, title }) {
  return (
    <div className="root">
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
      <footer>&copy; {new Date().getFullYear()}</footer>
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
        `}
      </style>
      <style global jsx>
        {`
        body{
          margin:0;
          font-size:110%;
          background;#f0f0f0;
        }
        `}
      </style>
    </div>
  );
}
