import type { LoaderFunctionArgs } from "react-router";
import { useLoaderData } from "react-router";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { format } from "date-fns";

export async function loader({ params }: LoaderFunctionArgs) {
  const blogpost = `${params.year}-${params.month}-${params.day}-${params.slug}.md`;
  const postDate = format(
    new Date(`${params.year}-${params.month}-${params.day}`),
    "dd MMMM y",
  );

  const markdownPath = path.join(process.cwd(), "public", "posts", blogpost);

  // throw 404 if file not found
  if (!fs.existsSync(markdownPath)) {
    throw new Response("Not Found", { status: 404 });
  }

  const markdownContent = fs.readFileSync(markdownPath, "utf-8");

  const {
    content,
    data: { title, image },
  } = matter(markdownContent);

  return { content, title, image, postDate };
}

export default function BlogPost() {
  const { content, title, image, postDate } = useLoaderData<typeof loader>();

  return (
    <>
      <title>{title}</title>
      <article>
        <h1 className="text-3xl my-10 leading-normal">{title}</h1>
        <time dateTime={postDate} className="text-sm text-slate-500 mb-5 block">
          {postDate}
        </time>
        <img src={image} alt={title} className="rounded-md mb-10" />
        <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </article>
    </>
  );
}
