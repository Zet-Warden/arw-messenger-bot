const msg = context.event.payload;

switch (msg) {
  case "HOW DO I PAY FOR THE REGISTRATION?":
    context.sendText("Org Registration Fee is paid through the Registration Form of the Organization. You can find the Registration Form in the ARW Website: arw.dlsucso.com under the Organization's Page.");
    break;
  case "WHERE DO I SEND MY PROOF OF PAYMENT?":
    contextn.sendText("Proof of payment is uploaded on the Registration Form which can be seen on the ARW Website: arw.dlsucso.com under the Organization's Page.");
    break;
}