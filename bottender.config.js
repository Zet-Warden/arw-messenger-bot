module.exports = {
    session: {
        driver: 'memory',
        stores: {
            memory: {
                maxSize: 500,
            },
            file: {
                dirname: '.sessions',
            },
            redis: {
                port: 6379,
                host: '127.0.0.1',
                password: 'auth',
                db: 0,
            },
            mongo: {
                url: 'mongodb://localhost:27017',
                collectionName: 'sessions',
            },
        },
    },
    initialState: {},
    channels: {
        messenger: {
            enabled: true,
            path: '/webhooks/messenger',
            pageId: '2375403326026628',
            accessToken:
                'EAAGsoBM5qMwBAAbRo6M8fXZAgciyB1zB5mgCRM5cYh2Po6YlqIcvCsuJe4KvIlHCEoLBF14OO1wHzsZCOhNi1hL4eOihqXbyaa49iZAH86bgyskefckGevmyeCauMwzVGYrx5QZAaVfuPfWkvfXr3TnF8IfwGJ72CYXPSz7MdhSfrI4fl595',
            appId: '471278494001356',
            appSecret: '254834517faa54ef7788fb55c2496200',
            verifyToken: 'WALAEWANKO69',
            profile: {
                getStarted: {
                    payload: 'GET_STARTED',
                },
            },
        },
        whatsapp: {
            enabled: false,
            path: '/webhooks/whatsapp',
            accountSid: process.env.WHATSAPP_ACCOUNT_SID,
            authToken: process.env.WHATSAPP_AUTH_TOKEN,
            phoneNumber: process.env.WHATSAPP_PHONE_NUMBER,
        },
        line: {
            enabled: false,
            path: '/webhooks/line',
            accessToken: process.env.LINE_ACCESS_TOKEN,
            channelSecret: process.env.LINE_CHANNEL_SECRET,
        },
        telegram: {
            enabled: false,
            path: '/webhooks/telegram',
            accessToken: process.env.TELEGRAM_ACCESS_TOKEN,
        },
        slack: {
            enabled: false,
            path: '/webhooks/slack',
            accessToken: process.env.SLACK_ACCESS_TOKEN,
            signingSecret: process.env.SLACK_SIGNING_SECRET,
        },
        viber: {
            enabled: false,
            path: '/webhooks/viber',
            accessToken: process.env.VIBER_ACCESS_TOKEN,
            sender: {
                name: 'xxxx',
            },
        },
    },
};
