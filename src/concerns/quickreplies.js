module.exports = async function QuickReplies(context) {
    await context.sendText('What are your concerns?', {
      quickReplies: [
        {
          contentType: 'text',
          title: 'ARW Events',
          payload: 'arw events',
        },
        {
          contentType: 'text',
          title: 'ARW Concerns',
          payload: 'arw concerns',
        },
        {
          contentType: 'text',
          title: 'Payment Concerns',
          payload: 'payment concerns',
        },
        {
          contentType: 'text',
          title: 'Website Concerns',
          payload: 'website concerns',
        },
        {
          contentType: 'text',
          title: 'Others',
          payload: 'others',
        },
      ],
    });
  };
  