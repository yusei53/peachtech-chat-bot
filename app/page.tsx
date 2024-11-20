"use client";
import React, { useState } from "react";
import ChatUI from "./components/chat/ChatUI";

type Message = {
  user: string;
  text: string;
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isComposing, setIsComposing] = useState<boolean>(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const newMessage: Message = { user: "You", text: input };
    setMessages((prev) => [...prev, newMessage]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.dify.ai/v1/chat-messages", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: {},
          query: input,
          response_mode: "blocking",
          conversation_id: "",
          user: "abc-123",
          files: [
            {
              type: "image",
              transfer_method: "remote_url",
              url: "https://cloud.dify.ai/logo/logo-site.png",
            },
          ],
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        { user: "Bot", text: data.answer || "No response received." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { user: "Bot", text: "Error: Could not fetch the response." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ChatUI
      messages={messages}
      input={input}
      loading={loading}
      setInput={setInput}
      handleSendMessage={handleSendMessage}
      isComposing={isComposing}
      setIsComposing={setIsComposing}
    />
  );
};

export default Chat;
