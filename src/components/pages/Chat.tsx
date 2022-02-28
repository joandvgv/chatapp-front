import { FunctionComponent, useEffect, useRef } from "react";
import { Card, Col } from "antd";
import { FullRow } from "./../atoms/FullRow";
import styled from "styled-components";
import { UserList } from "../organisms/UserList";
import { User } from "../../types/user";
import { useApi } from "./../../api/hooks/useApi";
import { Post } from "../../types/posts";
import { PostList } from "../organisms/PostList";
import { axios } from "../../api/axios";
import { FlexCol } from "./../atoms/FlexCol";
import { ChatInput } from "../molecules/ChatInput";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { useNavigate } from "react-router-dom";

const ChatCard = styled(Card)`
  margin: 5px;
  max-height: inherit;
  overflow: scroll;
  overflow-x: hidden;
`;

type Props = {};

export const Chat: FunctionComponent<Props> = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  if (!user) {
    navigate("/");
  }

  const [{ data: users, loading: loadingUsers }] = useApi<User[]>("users");
  const [{ data: posts, loading: loadingPosts, setData, page }] =
    useApi<Post[]>("posts");
  const divRef = useRef<null | HTMLDivElement>(null);

  const { lastMessage, readyState } = useWebSocket(
    "wss://2uaou8rqbi.execute-api.us-east-1.amazonaws.com/dev"
  );

  const createPost = async (message: string) => {
    await axios.post(`/posts`, {
      message,
    });
  };

  useEffect(() => {
    if (lastMessage !== null) {
      const obj = JSON.parse(lastMessage.data);
      setData((d) => ({
        ...d,
        [page]: {
          posts: [...(d?.[page]?.posts ?? []), obj],
        },
      }));
    }
  }, [lastMessage]);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [posts]);

  return (
    <FullRow
      align="middle"
      justify="center"
      style={{
        margin: "0 10rem",
      }}
    >
      <Col style={{ maxHeight: "80vh" }}>
        <ChatCard title="Users" loading={loadingUsers} bordered={false}>
          <UserList users={users} />
        </ChatCard>
      </Col>
      <FlexCol flex="auto" direction="column" style={{ maxHeight: "80vh" }}>
        <ChatCard loading={loadingPosts} bordered={false}>
          <PostList posts={posts} />
          <div ref={divRef}>{"    "}</div>
        </ChatCard>
        <ChatInput
          ready={readyState === ReadyState.OPEN}
          onEnter={createPost}
        />
      </FlexCol>
    </FullRow>
  );
};
