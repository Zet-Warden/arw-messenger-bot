module.exports = async function QuickReplies(context) {
    await context.sendText('What are your concerns?', {
        quickReplies: [
            {
                contentType: 'text',
                title: 'ARW Events',
                payload: 'arw_events',
            },
            {
                contentType: 'text',
                title: 'ARW Concerns',
                payload: 'arw_concerns',
            },
            {
                contentType: 'text',
                title: 'Payment Concerns',
                payload: 'payment_concerns',
            },
            {
                contentType: 'text',
                title: 'Website Concerns',
                payload: 'website_concerns',
            },
            {
                contentType: 'text',
                title: 'Others',
                payload: 'others',
            },
        ],
    });
};
