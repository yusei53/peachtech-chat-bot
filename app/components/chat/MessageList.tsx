import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

type Message = {
  user: string;
  text: string;
};

type MessageListProps = {
  messages: Message[];
  loading: boolean;
};

const MessageList: React.FC<MessageListProps> = ({ messages, loading }) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [currentIcon, setCurrentIcon] = useState<string>("/yuse.jpg");
  const [iconIntervalId, setIconIntervalId] = useState<NodeJS.Timeout | null>(
    null
  );

  useEffect(() => {
    if (loading) {
      const icons = ["/yuse.jpg", "/yuse2.jpg"];
      let iconIndex = 0;

      const intervalId = setInterval(() => {
        iconIndex = (iconIndex + 1) % icons.length;
        setCurrentIcon(icons[iconIndex]);
      }, 500);

      setIconIntervalId(intervalId);
    } else if (iconIntervalId) {
      clearInterval(iconIntervalId);
      setIconIntervalId(null);
    }

    return () => {
      if (iconIntervalId) clearInterval(iconIntervalId);
    };
  }, [loading]);

  useEffect(() => {
    if (!messages.length) {
      setDisplayedText("");
      return;
    }

    const latestMessage = messages[messages.length - 1];

    if (latestMessage.user === "You") {
      setDisplayedText(latestMessage.text);
    } else {
      let textIndex = -1;
      setDisplayedText("");

      const textInterval = setInterval(() => {
        setDisplayedText((prev) => prev + latestMessage.text[textIndex]);
        textIndex++;

        if (textIndex + 1 >= latestMessage.text.length) {
          clearInterval(textInterval);
        }
      }, 40);

      return () => clearInterval(textInterval);
    }
  }, [messages]);

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
      {messages.length === 0 && (
        <Typography
          fontWeight={"bold"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          mt={15}
          fontSize={20}
        >
          Welcome to PeachTech Chatbot!
        </Typography>
      )}
      {/* メッセージリスト */}
      {messages.map((message, index) => (
        <Box
          key={index}
          display={"flex"}
          justifyContent={message.user === "You" ? "flex-end" : "flex-start"}
          padding={1}
        >
          {message.user !== "You" && index === messages.length - 1 && (
            <Image
              src={currentIcon}
              alt="AI Icon"
              width="55"
              height="55"
              style={{ borderRadius: "50%" }}
            />
          )}
          <Typography
            bgcolor={message.user === "You" ? "#F4F4F4" : undefined}
            py={1}
            px={2}
            borderRadius={20}
            display={"inline-block"}
          >
            {index === messages.length - 1 && message.user !== "You"
              ? displayedText
              : message.text}
          </Typography>
        </Box>
      ))}

      {/* ローディング中 */}
      {loading && (
        <Box display="flex" alignItems={"center"} padding={1}>
          <Image
            src={currentIcon}
            alt="Loading Icon"
            width="55"
            height="55"
            style={{ borderRadius: "50%" }}
          />
          <Typography variant="body1" py={1} px={2}>
            ゆせくん考え中...
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default MessageList;
