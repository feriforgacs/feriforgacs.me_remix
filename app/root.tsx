import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import Footer from "./components/Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <title>
        Ferenc Forgacs | Feri Forgacs - Full-Stack Engineer | Indie Maker
      </title>
      <meta
        name="description"
        content="I’m a software engineer, indie developer, and lecturer with 15+ years of experience building digital products, leading development teams, and mentoring the next generation of web professionals."
      />
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-slate-950 text-slate-200">
        <header className="bg-slate-900">
          <nav className="max-w-xl mx-auto flex items-center gap-10 py-5 mb-5">
            <Link to={"/"} className="hover:text-blue-400 text-slate-400">
              Home
            </Link>
            <Link to={"/projects"} className="hover:text-blue-400">
              Projects
            </Link>
            <Link to={"/blog"} className="hover:text-blue-400">
              Blog
            </Link>
          </nav>
        </header>
        <main className="max-w-xl mx-auto">{children}</main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
