const templateTitle = 'What are your concerns?';

const ButtonTemplates = {
    async arwEvents(context) {
        await context.sendButtonTemplate(templateTitle, [
            {
                type: 'postback',
                title: 'Events of ARW 2021',
                payload: 'ae_arw_events_2',
            },
            {
                type: 'postback',
                title: "It's Museum Day Everday",
                payload: 'ae_arw_museum',
            },
            {
                type: 'postback',
                title: 'The ARW Elite',
                payload: 'ae_arw_elite',
            },
        ]);
    },
    async arwConcerns(context) {
        await context.sendButtonTemplate(templateTitle, [
            {
                type: 'postback',
                title: 'What is ARW?',
                payload: 'ac_about_arw',
            },
            {
                type: 'postback',
                title: 'Register for an Org',
                payload: 'ac_register_organization',
            },
            {
                type: 'postback',
                title: 'Registration Deadline',
                payload: 'ac_join_organization',
            },
        ]);
    },
    async paymentConcerns(context) {
        await context.sendButtonTemplate(templateTitle, [
            {
                type: 'postback',
                title: 'Registration Payment',
                payload: 'pc_pay_registration',
            },
            {
                type: 'postback',
                title: 'Proof of Payment',
                payload: 'pc_send_pop',
            },
        ]);
    },
    async websiteConcerns(context) {
        await context.sendButtonTemplate(templateTitle, [
            {
                type: 'postback',
                title: 'When will the Website Open?',
                payload: 'wc_website_open',
            },
            {
                type: 'postback',
                title: 'Is the website functional 24/7?',
                payload: 'wc_website_24/7',
            },
        ]);
    },
    async others(context) {
        await context.sendButtonTemplate(templateTitle, [
            {
                type: 'postback',
                title: 'Is Joining an Organization required?',
                payload: 'ot_join_org',
            },
            {
                type: 'postback',
                title: 'Are there requirements in joining an organization?',
                payload: 'ot_join_requirements',
            },
        ]);
    },
    async museum(context) {
        await context.sendButtonTemplate(templateTitle, [
            {
                type: 'postback',
                title: 'What is "Museum Day, Everyday"?',
                payload: 'mu_museum_what',
            },
            {
                type: 'postback',
                title: 'What is the schedule for "Museum Day Everyday?"',
                payload: 'mu_museum_sched',
            },
            {
                type: 'postback',
                title: 'How can we participate in the Museum Day Everyday"',
                payload: 'mu_museum_part',
            },
        ]);
    },
    async elite(context) {
        await context.sendButtonTemplate(templateTitle, [
            {
                type: 'postback',
                title: 'What is the ARW Elite?',
                payload: 'et_elite_what',
            },
            {
                type: 'postback',
                title: 'When is the ARW Elite?',
                payload: 'et_elite_when',
            },
            {
                type: 'postback',
                title: 'Where and how can we watch the event?',
                payload: 'et_elite_watch',
            },
        ]);
    },
};

module.exports = ButtonTemplates;
