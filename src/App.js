import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
import { LoginForm } from "./components/LoginForm";

function App() {

  if(!localStorage.getItem('username')) return <LoginForm/>

  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="57bc04d2-c45f-4a53-aa76-d9c7111adf45"
        userName="nico"
        userSecret="123456789"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}
        onNewMessage = {() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()} />}
      />
    </div>
  );
}

export default App;
