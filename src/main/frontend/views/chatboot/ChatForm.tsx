import React, {useState} from 'react';

function ChatForm() {
    const [message, setMessage] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                required
            />
            <button type="submit">Send</button>
        </form>
    );
}

export default ChatForm;
