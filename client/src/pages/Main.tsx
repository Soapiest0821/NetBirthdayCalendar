import AuthButton from "../components/AuthButton";
import Calendar from "../components/Calendar";
import UserButton from "../components/UserButton";

import type { Props } from "../types/Props.ts";

export default function Main({ user }: Props) {
  return (
    <div>
      <div className="header">
        <h1> {user.id}</h1>
        <div>
          <AuthButton />
        </div>
      </div>
      <div className="wrapper">
        <Calendar />
        <div className="datelist" id="upcoming"></div>
        <div className="datelist" id="gone"></div>
        <div>
          <UserButton />
        </div>
      </div>
    </div>
  );
}
