import { FunctionComponent } from "react";
import { Row, Tooltip, Comment, Avatar } from "antd";
import { FlexCol } from "../atoms/FlexCol";
import { Post } from "../../types/posts";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

type Props = {
  post: Post;
};

export const PostDisplay: FunctionComponent<Props> = ({ post }) => {
  return (
    <Row>
      <FlexCol align="center">
        <Comment
          style={{ padding: 0 }}
          author={<a>{post.user.fullName}</a>}
          avatar={
            <Avatar src={`https://joeschmoe.io/api/v1/${post.user.username}`} />
          }
          content={<p style={{ textAlign: "left" }}>{post.message}</p>}
          datetime={
            <Tooltip
              title={dayjs(post.createdAt).format("YYYY-MM-DD HH:mm:ss")}
            >
              <span>{dayjs(post.createdAt).fromNow()}</span>
            </Tooltip>
          }
        />
      </FlexCol>
    </Row>
  );
};
