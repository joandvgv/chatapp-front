import { FunctionComponent } from "react";
import { User } from "../../types/user";
import { UserDisplay } from "./../molecules/UserDisplay";

type Props = {
  users: User[];
};

export const UserList: FunctionComponent<Props> = ({ users }) => {
  return (
    <>
      {users.map((user, idx) => (
        <UserDisplay key={`user-${idx}`} user={user} />
      ))}
    </>
  );
};
