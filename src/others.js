const msg = context.event.payload;

switch (msg) {
  case "IS JOINING AN ORGANIZATION REQUIRED?":
    context.sendText("No, it is not required to join organizations. However, joining an organization allows you to meet various people and gain new experiences. It can also provide you with many opportunities that can help you grow and make your college life memorable.");
    break;
  case "ARE THERE REQUIREMENTS IN JOINING AN ORGANIZATION?":
    context.sendText("It may vary depending on the organization's decisions.")
    break;
}