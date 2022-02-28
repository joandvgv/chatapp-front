import { Input } from "antd";
import { FunctionComponent, useState } from "react";
import styled from "styled-components";

type Props = {
  onEnter: (message: string) => void;
  ready: boolean;
};

const ChatContainer = styled.div`
  line-height: 2rem;
  margin: 5px;
  margin-bottom: 0;
`;

export const ChatInput: FunctionComponent<Props> = ({ onEnter, ready }) => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    setMessage("");
    onEnter(message);
  };

  return (
    <ChatContainer>
      <Input
        placeholder={ready ? "Send message" : "Connecting..."}
        showCount
        disabled={!ready}
        maxLength={255}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onPressEnter={() => sendMessage()}
      />
    </ChatContainer>
  );
};
