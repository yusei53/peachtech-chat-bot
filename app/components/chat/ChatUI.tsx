import { Box } from "@mui/material";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

type Message = {
  user: string;
  text: string;
};

type ChatUIProps = {
  messages: Message[];
  input: string;
  loading: boolean;
  setInput: (value: string) => void;
  handleSendMessage: () => void;
  isComposing: boolean;
  setIsComposing: (value: boolean) => void;
};

const ChatUI: React.FC<ChatUIProps> = ({
  messages,
  input,
  loading,
  setInput,
  handleSendMessage,
  isComposing,
  setIsComposing,
}) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      height={"95vh"}
    >
      <MessageList messages={messages} loading={loading} />
      <MessageInput
        input={input}
        setInput={setInput}
        handleSendMessage={handleSendMessage}
        isComposing={isComposing}
        setIsComposing={setIsComposing}
      />
    </Box>
  );
};

export default ChatUI;
