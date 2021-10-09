function PayloadHandler(prefix) {
    this.prefix = prefix;
    this.events = [];
}

PayloadHandler.prototype.addEvent = function addEvent(event) {
    this.events.push(event);
};

PayloadHandler.prototype.addEvents = function addEvents(events) {
    events.forEach((event) => {
        this.addEvent(event);
    });
};

PayloadHandler.prototype.Action = function executeAction(context, props) {
    const [prefix, trigger] = context.event.payload.split('_', 1);

    const found = this.events.some((event) => {
        if (event.name === trigger && this.prefix === prefix) {
            event.action(context);
            return true;
        }
    });

    if (!found) {
        props.next;
    }
};

module.exports = PayloadHandler;
