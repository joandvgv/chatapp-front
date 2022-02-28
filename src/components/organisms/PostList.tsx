import { FunctionComponent } from "react";
import { Post } from "../../types/posts";
import { PostDisplay } from "../molecules/PostDisplay";

type Props = {
  posts: Post[];
};

export const PostList: FunctionComponent<Props> = ({ posts }) => {
  return (
    <>
      {posts.map((post, idx) => (
        <PostDisplay key={`post-${idx}`} post={post} />
      ))}
    </>
  );
};
