import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      userName="Kiko"
      userSecret="123123"
      projectID="164cb99a-65b0-4dd0-9a00-2f5cf0f7a0e9"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
