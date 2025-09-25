import { Link } from "react-router";
import type { Post } from "../types";
import { marked } from "marked";
import { format } from "date-fns";

export default function PostListItem({ post }: { post: Post }) {
  return (
    <div className="flex mb-10">
      <span className="-ml-10 mr-5">🗒️</span>
      <div>
        <h4 className="text-xl mb-5">
          <Link
            to={post.slug}
            className="text-green-500 hover:underline visited:text-blue-400"
          >
            {post.title}
          </Link>
        </h4>
        <div
          className="mb-5"
          dangerouslySetInnerHTML={{ __html: marked(post.lead) }}
        />
        <p className="text-slate-500 text-sm">
          {format(new Date(post.postDate.join("-")), "dd MMMM y")}
        </p>
      </div>
    </div>
  );
}
