// Have we already provided the answers to all your concerns
// send button template: Yes No

switch (msg) {
  case "YES":
    context.sendText("We hope that we were able to help you regarding your concerns. Please do not hesitate to message us again. Thank you for visiting our Facebook Page Message! We hope that you are safe and well.");
    break;
  case "NO":
    // "We apologize that we failed to address your concern. Would you like to talk to one of our representatives or to the chatbot once again?"
    // send button template

  case "TALK WITH A PERSON":
    context.send("This is noted. We will respond to you as soon as possible. Also stay updated with ARW by following our Facebook page. Thank you!")
    break;
  
  case "PROCEED WITH THE CHATBOT":
    break;
}