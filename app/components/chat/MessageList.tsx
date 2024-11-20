import { Box, Typography } from "@mui/material";

type Message = {
  user: string;
  text: string;
};

type MessageListProps = {
  messages: Message[];
  loading: boolean;
};

const MessageList: React.FC<MessageListProps> = ({ messages, loading }) => {
  return (
    <Box
      padding={2}
      width={"100%"}
      maxWidth={"600px"}
      borderRadius={4}
      flexDirection={"column"}
      overflow={"auto"}
      flexGrow={1}
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
            py={1}
            px={2}
            borderRadius={20}
            display={"inline-block"}
          >
            {message.text}
          </Typography>
        </Box>
      ))}

      {loading && (
        <Box textAlign={"center"} padding={1}>
          <Typography>Loading...</Typography>
        </Box>
      )}
    </Box>
  );
};

export default MessageList;
