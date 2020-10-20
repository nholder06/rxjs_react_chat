import React, { useLayoutEffect, useState } from 'react';
import chatStore from '../store/chat';

const FirstPerson = () => {
    const [chatState, setChatState] = useState(chatStore.initialState);

    useLayoutEffect(() => {
        chatStore.subscribe(setChatState);
        chatStore.init();
    }, []);
}