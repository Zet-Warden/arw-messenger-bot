function CommandHandler() {
    this.events = [];
}

CommandHandler.prototype.addEvent = function addEvent(event) {
    this.events.push(event);
};

CommandHandler.prototype.addEvents = function addEvents(events) {
    events.forEach((event) => {
        this.addEvent(event);
    });
};

CommandHandler.prototype.Action = async function executeAction(context, props) {
    let found = false;
    for (let i = 0; i < this.events.length && found == false; i++) {
        const event = this.events[i];
        const trigger = context.event[event.type];
        if (event.name === trigger) {
            found = true;
            await event.action(context);
            if (!event.blockConclusion) {
                concludeChat(context);
            }
        }
    }

    if (!found) {
        return props.next;
    }
};

async function concludeChat(context) {
    await context.sendButtonTemplate(
        'Have we already provided the answers to all your concerns?',
        [
            {
                type: 'postback',
                title: 'Yes',
                payload: 'end_chat',
            },
            {
                type: 'postback',
                title: 'No',
                payload: 'continue_chat',
            },
        ]
    );
}

module.exports = CommandHandler;
