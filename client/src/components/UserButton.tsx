import { getUser } from "../api/user";

function UserButton() {
  const handleClick = async () => {
    try {
      const data = await getUser();

      alert(JSON.stringify(data, null, 2));
    } catch (e) {
      alert(String(e));
    }
  };

  return <button onClick={handleClick}>테스트</button>;
}

export default UserButton;
