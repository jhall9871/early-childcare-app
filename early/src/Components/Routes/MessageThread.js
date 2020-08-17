import React from 'react';

const MessageThread = ({caregiver}) => {
    return (
        <div className="thread-header">
            
            <p>{caregiver.first_name} {caregiver.last_name}</p>
            
        </div>
    );
};

export default MessageThread;