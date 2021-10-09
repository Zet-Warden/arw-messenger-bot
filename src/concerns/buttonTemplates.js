const templateTitle = 'What are your concerns?';

const ButtonTemplates = {
    async arwEvents(context) {
        await context.sendButtonTemplate(templateTitle, [
            {
                type: 'postback',
                title: 'What are the events of ARW 2021?',
                payload: 'arw_events',
            },
            {
                type: 'postback',
                title: "About It's Museum Day Everday",
                payload: 'arw_museum',
            },
            {
                type: 'postback',
                title: 'About The ARW Elite',
                payload: 'arw_elite',
            },
        ]);
    },
    async arwConcerns(context) {
        await context.sendButtonTemplate(templateTitle, [
            {
                type: 'postback',
                title: 'What is Annual Rectuitment Week?',
                payload: 'about_arw',
            },
            {
                type: 'postback',
                title: 'Where do  I  register to apply for an organization?',
                payload: 'register_organization',
            },
            {
                type: 'postback',
                title: 'Until when can I join an organization?',
                payload: 'join_organization',
            },
        ]);
    },
    async paymentConcerns(context) {
        await context.sendButtonTemplate(templateTitle, [
            {
                type: 'postback',
                title: 'How do I pay for the registration?',
                payload: 'pay_registration',
            },
            {
                type: 'postback',
                title: 'Where do I send my proof of payment?',
                payload: 'send_pop',
            },
        ]);
    },
    async websiteConcerns(context) {
        await context.sendButtonTemplate(templateTitle, [
            {
                type: 'postback',
                title: 'When will the Website Open?',
                payload: 'website_open',
            },
            {
                type: 'postback',
                title: 'Is the website functional 24/7?',
                payload: 'website_24/7',
            },
        ]);
    },
    async others(context) {
        await context.sendButtonTemplate(templateTitle, [
            {
                type: 'postback',
                title: 'Is Joining an Organization required?',
                payload: 'join_org',
            },
            {
                type: 'postback',
                title: 'Are there requirements in joining an organization?',
                payload: 'join_requirements',
            },
        ]);
    },
};

module.exports = ButtonTemplates;
