export interface Message {
    text: string;
    isUser: boolean;
    timestamp?: Date;
  }
  
  export interface ChatBotProps {
    messages: Message[];
    inputValue: string;
    onChangeInput: (text: string) => void;
    onSend: () => void;
    loading?: boolean;
  }