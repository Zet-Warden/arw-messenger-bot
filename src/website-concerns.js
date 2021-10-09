const msg = context.event.payload;

switch (msg) {
  case "website_open":
    context.sendText("The ARW Website is accessible on November 21, 2021 at _:00 AM.");
    break;
  case "website_24/7":
    context.sendText("Yes. The website can be accessed 24/7 but you can only join orgs from from 8:00 AM - 5:00 PM during the Annual Recruitment Week.");
    break;
}