function* chatBot() {
    const name = yield "Hi! What is your name?"
    const state = yield `Nice to meet you, ${name}! How are you?`;
    const bye = yield "Goodbye!";
}

const chat = chatBot();

const name = prompt(chat.next().value);
const state = prompt(chat.next(name).value);
const bye = prompt(chat.next(state).value);
chat.next(bye);