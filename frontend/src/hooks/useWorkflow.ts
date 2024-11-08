import { useState, useEffect, useRef } from 'react';

const useWebSocket = (url: string) => {
  const [message, setMessage] = useState<string | null>(null);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    socketRef.current = new WebSocket(url);

    const handleMessage = (event: MessageEvent) => {
      setMessage(event.data);
    };

    if (socketRef.current) {
      socketRef.current.onmessage = handleMessage;
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, [url]);

  const sendMessage = (msg: string) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(msg);
    } else {
      console.error('WebSocket is not open. Message not sent:', msg);
    }
  };

  return { message, sendMessage };
};

export default useWebSocket;
