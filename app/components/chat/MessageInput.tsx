import { Box, TextField, InputAdornment, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

type MessageInputProps = {
  input: string;
  setInput: (value: string) => void;
  handleSendMessage: () => void;
  isComposing: boolean;
  setIsComposing: (value: boolean) => void;
};

const MessageInput: React.FC<MessageInputProps> = ({
  input,
  setInput,
  handleSendMessage,
  isComposing,
  setIsComposing,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isComposing) {
      handleSendMessage();
    }
  };

  return (
    <Box width={"100%"} maxWidth={"600px"}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="メッセージを送信"
        size="small"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
        onKeyDown={handleKeyDown}
        InputProps={{
          style: { borderRadius: "20px", paddingLeft: 8 },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSendMessage}>
                <SendIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default MessageInput;
