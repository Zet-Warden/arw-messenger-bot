const templateTitle = 'What are your concerns?';

const ButtonTemplates = {
    async arwEvents(context) {
        await context.sendButtonTemplate(templateTitle, [
            {
                type: 'postback',
                title: 'Events of ARW 2021',
                payload: 'arw_events',
            },
            {
                type: 'postback',
                title: "It's Museum Day Everday",
                payload: 'arw_museum',
            },
            {
                type: 'postback',
                title: 'The ARW Elite',
                payload: 'arw_elite',
            },
        ]);
    },
    async arwConcerns(context) {
        await context.sendButtonTemplate(templateTitle, [
            {
                type: 'postback',
                title: 'What is ARW?',
                payload: 'about_arw',
            },
            {
                type: 'postback',
                title: 'Register for an Org',
                payload: 'register_organization',
            },
            {
                type: 'postback',
                title: 'Registration Deadline',
                payload: 'join_organization',
            },
        ]);
    },
    async paymentConcerns(context) {
        await context.sendButtonTemplate(templateTitle, [
            {
                type: 'postback',
                title: 'Registration Payment',
                payload: 'pay_registration',
            },
            {
                type: 'postback',
                title: 'Proof of Payment',
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
    async museum(context) {
        await context.sendButtonTemplate(templateTitle, [
          {
              type: 'postback',
              title: 'What is "Museum Day, Everyday"?',
              payload: 'museum_what',
          },
          {
              type: 'postback',
              title: 'What is the schedule for "Museum Day Everyday?"',
              payload: 'museum_sched',
          },
          {
              type: 'postback',
              title: 'How can we participate in the Museum Day Everyday"',
              payload: 'museum_part',
          }
        ]);
    },
    async elite(context) {
      await context.sendButtonTemplate(templateTitle, [
        {
            type: 'postback',
            title: 'What is the ARW Elite?',
            payload: 'elite_what',
        },
        {
            type: 'postback',
            title: 'When is the ARW Elite?',
            payload: 'elite_when',
        },
        {
            type: 'postback',
            title: 'Where and how can we watch the event?',
            payload: 'elite_watch',
        }
      ]);
  },
};

module.exports = ButtonTemplates;
