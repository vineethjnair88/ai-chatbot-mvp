import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://botstacks.sfo3.cdn.digitaloceanspaces.com/webassistant.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.initBotStackAssistant({
        apiKey: "bte7s4dw4s1rn00q72miyz28",
        botId: "2bb532c8-84e0-48a2-923c-5ec81b7c5ea9",
      });
    };

    return () => {
      document.body.removeChild(script); // Cleanup script when component unmounts
    };
  }, []);

  return null; 
};

export default Chatbot;
