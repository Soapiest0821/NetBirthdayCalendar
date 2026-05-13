import { getAuth } from "../api/auth";

function AuthButton() {
  const handleClick = async () => {
    try {
      const data = await getAuth();
      alert(JSON.stringify(data, null, 2));
    } catch (e) {
      alert(String(e));
    }
  };

  return <button onClick={handleClick}>테스트</button>;
}

export default AuthButton;
