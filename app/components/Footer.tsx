export default function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="max-w-xl mx-auto space-y-5 py-5 text-sm">
        <p>
          Built with{" "}
          <a
            href="https://reactrouter.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            React Router
          </a>
        </p>
        <p>
          Hosted on{" "}
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Vercel
          </a>
        </p>
        <p>
          View the source on{" "}
          <a
            href="https://github.com/feriforgacs/feriforgacs.me_remix"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
