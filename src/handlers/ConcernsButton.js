const dedent = require('dedent');

const Handler = require('../CommandHandler.js');

const ConcernsButtonHandler = new Handler();

let templateTitle = 'What do you wanna know more about?';

ConcernsButtonHandler.addEvents([
    {
        name: 'arw_events',
        type: 'payload',
        blockConclusion: true,
        action: async (context) => {
            const title = dedent`${templateTitle}
                                    1. What are the events of ARW 2021
                                    2. About It's Museum Day Everyday
                                    3. About The ARW Elite`;
            await context.sendButtonTemplate(title, [
                {
                    type: 'postback',
                    title: 'Option 1',
                    payload: 'arw_events2021',
                },
                {
                    type: 'postback',
                    title: 'Option 2',
                    payload: 'arw_museum',
                },
                {
                    type: 'postback',
                    title: 'Option 3',
                    payload: 'arw_elite',
                },
            ]);
        },
    },
    {
        name: 'arw_concerns',
        type: 'payload',
        blockConclusion: true,
        action: async (context) => {
            const title = dedent`${templateTitle}
                                    1. What is Annual Recruitment Week
                                    2. Where do I register to apply for an organization
                                    3. Until when can I join an organization`;
            await context.sendButtonTemplate(title, [
                {
                    type: 'postback',
                    title: 'Option 1',
                    payload: 'about_arw',
                },
                {
                    type: 'postback',
                    title: 'Option 2',
                    payload: 'register_organization',
                },
                {
                    type: 'postback',
                    title: 'Option 3',
                    payload: 'join_organization',
                },
            ]);
        },
    },
    {
        name: 'payment_concerns',
        type: 'payload',
        blockConclusion: true,
        action: async (context) => {
            const title = dedent`${templateTitle}
                                    1. How do I pay for the registration
                                    2. Where do I send my proof of payment`;
            await context.sendButtonTemplate(title, [
                {
                    type: 'postback',
                    title: 'Option 1',
                    payload: 'pay_registration',
                },
                {
                    type: 'postback',
                    title: 'Option 2',
                    payload: 'send_pop',
                },
            ]);
        },
    },
    {
        name: 'website_concerns',
        type: 'payload',
        blockConclusion: true,
        action: async (context) => {
            const title = dedent`${templateTitle}
                                    1. When will the Website open
                                    2. Is the Website functional 24/7`;
            await context.sendButtonTemplate(title, [
                {
                    type: 'postback',
                    title: 'Option 1',
                    payload: 'website_open',
                },
                {
                    type: 'postback',
                    title: 'Option 2',
                    payload: 'website_24/7',
                },
            ]);
        },
    },
    {
        name: 'others',
        type: 'payload',
        blockConclusion: true,
        action: async (context) => {
            const title = dedent`${templateTitle}
                                    1. Is joining an organization required
                                    2. Are there requirements in joining an organization`;
            await context.sendButtonTemplate(title, [
                {
                    type: 'postback',
                    title: 'Option 1',
                    payload: 'join_org',
                },
                {
                    type: 'postback',
                    title: 'Option 2',
                    payload: 'join_requirements',
                },
            ]);
        },
    },
]);

module.exports = ConcernsButtonHandler;
