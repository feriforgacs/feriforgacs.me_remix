import { Link } from "react-router";
import path from "path";
import { useLoaderData } from "react-router";
import { getPosts } from "~/.server/utils/Post";
import PostListItem from "~/components/PostListItem";

export async function loader() {
  const subFolder = "100-days-of-making";
  const postsDirectory = path.join(process.cwd(), "public", "posts", subFolder);
  const posts = getPosts(postsDirectory, subFolder);

  return { posts };
}

export default function HundredDaysOfMaking() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1 className="text-3xl mt-10 mb-10">100 days of making</h1>
      <h3 className="text-xl mb-10">What is this all about?</h3>
      <div className="space-y-5 mb-10">
        <p>
          I built a few <Link to="/projects">projects</Link> in the past. Some
          of them were successful, some not. But in most cases I stopped working
          on them after a few months. That&apos;s probably because I have so
          many ideas I&apos;d like to work on, that after I finished one I felt
          the need to jump on the next one. Especially if the one I worked on
          failed. But it&apos;s hard to tell if something really failed if you
          spent only a month working on it, with almost zero effort on
          distribution. I did that in the past with almost all of my projects.
        </p>
        <p>
          This time, I&apos;d like to take a different approach. For 100 days,
          I&apos;ll work on only one product. In the beginning I&apos;ll spend 3
          days writing code and 2 days on marketing and distribution. Once the
          mvp is done, I&apos;ll switch that to 2 days on development, 3 on
          customer acquisition and marketing.
        </p>
        <p>
          I&apos;m not going to do this full time, but a few hours every
          business day. This was also a problem for me in the past. The pace at
          the beginning was quite fast but slowed down after a few weeks. Mainly
          because I ran out of energy for keeping too many things on my
          plate.{" "}
        </p>
        <p>
          Why 100 days? Well, they say that if you do something for 100 days,
          it&apos;ll become a habit. Also because a hundred days seems like a
          reasonable amount of time to see if something is going to work or not.
          And I need some kind of virtual deadline. So, here we go 🚀
        </p>
      </div>

      <div>
        {posts.map((post) => (
          <PostListItem key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
