import path from "path";
import { useLoaderData } from "react-router";
import { getPosts } from "~/.server/utils/Post";
import PostListItem from "~/components/PostListItem";

export async function loader() {
  const postsDirectory = path.join(process.cwd(), "public", "posts");
  const posts = getPosts(postsDirectory);

  return { posts };
}

export default function Blog() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <>
      <title>Posts</title>
      <div>
        <h1 className="text-3xl mt-10 mb-10">Posts</h1>
        <div>
          {posts.map((post) => (
            <PostListItem key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
