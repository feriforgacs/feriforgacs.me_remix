import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Post } from "~/types";

export function getPosts(directory: string): Post[] {
  const postFiles = fs
    .readdirSync(directory, {
      withFileTypes: true,
    })
    .reverse();

  // get slug and frontmatter from post
  const posts = postFiles
    .filter((dirent) => dirent.isFile())
    .map((dirent) => {
      const filename = dirent.name;
      // create slug
      const postDate = filename.substring(0, 10).split("-");
      const dateSlug = postDate.join("/");
      const postSlug = filename
        .substring(11, filename.length)
        .replace(".md", "");

      const slug = `/${dateSlug}/${postSlug}`;

      // get frontmatter
      const postWithMeta = fs.readFileSync(
        path.join(directory, filename),
        "utf-8",
      );
      const {
        data: { title, image },
        content,
      } = matter(postWithMeta);

      // get post lead
      const lead = getPostLead(content);

      return { slug, title, lead, image, postDate };
    });

  return posts;
}

export function getPostLead(content: string) {
  return content.split("<!-- more -->")[0];
}
