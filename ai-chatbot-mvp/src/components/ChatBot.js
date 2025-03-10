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
        botId: "aa2654ad-43b5-4e2b-911f-db9b52ecf773",
      });
    };

    return () => {
      document.body.removeChild(script); // Cleanup script when component unmounts
    };
  }, []);

  return null; 
};

export default Chatbot;
