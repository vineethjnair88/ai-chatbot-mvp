import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://botstacks.sfo3.cdn.digitaloceanspaces.com/webassistant.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.initBotStackAssistant({
        apiKey: "ablha65e1rofjcsxnhzmpgto",
        botId: "26acd24b-d257-4231-8a6b-79298c3782c8",
      });
    };

    return () => {
      document.body.removeChild(script); // Cleanup script when component unmounts
    };
  }, []);

  return null; 
};

export default Chatbot;
