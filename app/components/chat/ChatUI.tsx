import React from "react";
import {
  Box,
  InputAdornment,
  TextField,
  IconButton,
  Typography,
  CircularProgress,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

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
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isComposing) {
      handleSendMessage();
    }
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      position={"relative"}
      height={"100vh"}
    >
      <Box
        padding={2}
        height={"70vh"}
        width={"100%"}
        maxWidth={"600px"}
        borderRadius={4}
        display={"flex"}
        flexDirection={"column"}
        overflow={"hidden"}
      >
        <Box
          flexGrow={1}
          overflow={"auto"}
          sx={{
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              textAlign={message.user === "You" ? "right" : "left"}
              padding={1}
            >
              <Typography
                bgcolor={message.user === "You" ? "#F4F4F4" : undefined}
                padding={1}
                borderRadius={20}
                display={"inline-block"}
              >
                {message.text}
              </Typography>
            </Box>
          ))}
        </Box>

        {loading && (
          <Box textAlign={"center"} padding={1}>
            <CircularProgress size={20} />
          </Box>
        )}
      </Box>

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        my={5}
        width={"100%"}
        maxWidth={"600px"}
        position={"absolute"}
        bottom={0}
      >
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
    </Box>
  );
};

export default ChatUI;
