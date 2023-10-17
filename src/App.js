import "./styles.css";
import { httpClient } from "./httpClient";

export default function App() {
  const request = () => {
    fetch("https://jsonplaceholder.typicode.com/todos", {
      // Authorization, 인증, 횡단 관심사를 처리
      // 이걸 어떻게 잘 처리할 수 있을까?
      headers: {
        Authorization: "ACCESS_TOKEN"
      }
    });
  };

  return (
    <>
      <h1>Cross Cutting Concerns</h1>
      <button onClick={request}>request</button>
    </>
  );
}
