import { useEffect, useRef, useState } from 'react';

const useWebSocket = (url: string) => {
  const [message, setMessage] = useState<string | null>(null);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    socketRef.current = new WebSocket(url);
    socketRef.current.onmessage = (event) => {
      setMessage(event.data);
    };
    socketRef.current.onclose = () => {
      console.log('WebSocket closed');
    };

    return () => {
      socketRef.current?.close();
    };
  }, [url]);

  return { message };
};

export default useWebSocket;
