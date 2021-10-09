module.exports = async function (context) {
    const msg = context.event.payload;

    switch (msg) {
        case 'pc_pay_registration':
            context.sendText(
                "Org Registration Fee is paid through the Registration Form of the Organization. You can find the Registration Form in the ARW Website: arw.dlsucso.com under the Organization's Page."
            );
            break;
        case 'pc_send_pop':
            contextn.sendText(
                "Proof of payment is uploaded on the Registration Form which can be seen on the ARW Website: arw.dlsucso.com under the Organization's Page."
            );
            break;
    }
};
