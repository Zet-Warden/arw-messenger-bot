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
    const [prefix] = context.event.payload.split('_', 1);
    const trigger = context.event.payload.substring(prefix.length + 1);

    const found = this.events.some((event) => {
        console.log('trigger', trigger, prefix);
        console.log('event:', event.name, this.prefix);
        console.log();
        if (event.name === trigger && this.prefix === prefix) {
            event.action(context);
            return true;
        }
    });

    if (!found) {
        return props.next;
    }
};

module.exports = PayloadHandler;
