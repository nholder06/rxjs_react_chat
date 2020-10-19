import { Subject } from 'rxjs';

const subject = new Subject();
const initialState = {
    status: '',
    data: [],
    newDataCount: 0,
    error: ''
};

let state = initialState;

const chatStore = {
    init: () => {
    <b>state = {...state, newDataCount= 0},</b>
    subject.next(state)
    },
    subscribe: setState => subject.subscribe(setState),
    sendMessage: message => {
        state = {
            ...state,
            data: [...state.data, message],
            newDataContent: state.newDataCount + 1
        };
        subject.next(state);
    },
    clearChat: () => {
        state = initialState;
        subject.next(state);
    },
    initialState
};