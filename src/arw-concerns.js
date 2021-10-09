module.exports = async function (context) {
    const msg = context.event.payload;
    switch (msg) {
        case 'ac_about_arw':
            context.sendText(
                'The Annual Recruitment Week is a week-long event wherein all 50 CSO accredited organizations are given the opportunity to attract and recruit students from the Lasallian community. The Annual Recruitment Week serves as the platform for these organizations to showcase who they are and what they can provide to their members through their scheduled activities for the academic year.'
            );
            break;

        case 'ac_register_organization':
            context.sendText(
                'For registration, you can check out the ARW Website: arw.dlsucso.com'
            );
            break;

        case 'ac_join_organization':
            context.sendText(
                'The Annual Recruitment Week 2021 will happen on November 22-27, 2021.  The last day of recruitment will be on November 27, 2021 at 9:00 PM.'
            );
            break;
    }
};
