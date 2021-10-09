module.exports = async function (context) {
    const msg = context.event.payload;

    switch (msg) {
        case 'mu_museum_what':
            await context.sendText(
                'Similar to the typical booth set-up per org during face to face classes, this time we will be doing it through zoom. It’s Museum Day, Everyday will be an avenue for CSO organizations to recruit and promote their hearts outs by virtually connecting to the Lasallian community.'
            );
            break;

        case 'mu_museum_sched':
            await context.sendText(
                `ASPIRE: November 22, Monday
PROBE: November 23, Tuesday
ENGAGE: November 24, Wednesday
CAP13: November 25, Thursday
ASO: November 26, Friday`
            );
            break;

        case 'mu_museum_part':
            await context.sendText(`Zoom links per organization will be provided through the It's Museum Day, Everyday google form. You can register through this link:

<<link>>

Each day, this google form will be changed based on the cluster scheduled per day.`);
            break;
    }
};
