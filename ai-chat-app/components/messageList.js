import styles from "./messageList.module.css";

const MessageList = () => {

  const chatHistory = [
    {
        sender: "user",
        message: "Describe the Lacy dog breed"
    },
    {
        sender: "bot",
        message: "The Lacy Dog or Blue Lacy Dog is a breed of working dog that originated in the U.S. state of Texas in the mid-19th century."
    },
    {
        sender: "user",
        message: "Describe the Beagle dog breed"
    },
    {
        sender: "bot",
        message: "The beagle is a breed of small scent hound, similar in appearance to the much larger foxhound. The beagle was developed primarily for hunting rabbit or hare, known as beagling."
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Chat with GPT</h1>
      <div className={styles.chatBox}>
        {chatHistory.map((chat, index) => (
            <div 
                key={index}
                className={`${styles.message} ${chat.sender == "user" ? styles.userMessage : styles.botMessage}`}
            >
                {chat.message}
            </div>
        ))}
      </div>
      <div className={styles.inputContainer}>
        <input 
            type="text"
            placeholder="Type a message..."
            className={styles.input}
        />
        <button className={styles.button}>
            Send
        </button>
      </div>
    </div>
  );
};

export default MessageList;
