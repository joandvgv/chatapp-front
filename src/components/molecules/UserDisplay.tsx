import { FunctionComponent } from "react";
import { Row, Avatar } from "antd";
import { User } from "../../types/user";
import { FlexCol } from "../atoms/FlexCol";
import styled from "styled-components";
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
dayjs.extend(calendar);

type Props = {
  user: User;
};

const UserText = styled.div`
  font-weight: bold;
  margin: 0.5rem;
  text-align: left;
  line-height: 1rem;

  span {
    font-weight: normal;
    font-size: 0.7rem;
  }
`;

export const UserDisplay: FunctionComponent<Props> = ({ user }) => {
  return (
    <Row>
      <FlexCol align="center" padding=".4rem">
        <div>
          <Avatar src={`https://joeschmoe.io/api/v1/${user.username}`} />
        </div>
        <UserText>
          {user.fullName} <br />
          <span>Joined {dayjs(user.createdAt).calendar()}</span>
        </UserText>
      </FlexCol>
    </Row>
  );
};
