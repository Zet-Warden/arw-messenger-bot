const msg = context.event.payload

switch (msg) {
  case "WHAT ARE THE EVENTS OF ARW 2021?":
    await context.sendText("This year's ARW will have 2 main events: It's Museum Day, Everyday and the ARW Elite.")
    break;

  // ------------------- About It's Museum Day Everyday ----------------------
  case "ABOUT IT'S MUSEUM DAY EVERYDAY":
    await context.sendText() // send button template
    break;

  case "WHAT IS 'IT'S MUSEUM DAY EVERYDAY'?":
    await context.sendText("SImilar to the typical booth set-up per org during face to face classes, this time we will be doing it through zoom. It’s Museum Day, Everyday will be an avenue for CSO organizations to recruit and promote their hearts outs by virtually connecting to the Lasallian community.")
    break;

  case "WHAT IS THE SCHEDULE FOR 'MUSEUM DAY EVERYDAY?'":
    await context.sendText(
      `ASPIRE: November 22, Monday
      PROBE: November 23, Tuesday
      ENGAGE: November 24, Wednesday
      CAP13: November 25, Thursday
      ASO: November 26, Friday`
    )
    break;
  
  case "HOW CAN WE PARTICIPATE IN THE MUSEUM DAY EVERYDAY?":
    await context.sendText(`Zoom links per organization will be provided through the It's Museum Day, Everyday google form. You can register through this link:
    
    <<link>>
    
    Each day, this google form will be changed based on the cluster scheduled per day.`)
    break;

  // ------------------- About ARW Elite ----------------------
  case "ABOUT THE ARW ELITE":
    await context.sendText() // button template
    break;

  case "WHAT IS THE ARW ELITE?":
    await context.sendText("The first ever ARW Elite is a month-long competition that aims to highlight the different goals, culture, and values of the organizations under the Council of Student Organizations. The selected elites of the organization should embody the values and culture of their respective organizations and showcase the specific platforms and projects their organization offers so as to attract the student body to join their organization.")
    break;
  
  case "WHEN IS THE ARW ELITE?":
    await context.sendText("The launch date for the ARW Elite will be on October 26, 2021. Elites who will advance to the final round will be announced live on November 15, 2021. The coronation night will be on November 27, 2021.")
    break;

  case "WHERE AND HOW CAN WE WATCH THE EVENT?":
    await context.sendText("You can watch the Live Announcement of Top 10 and Coronation Night in the official facebook page of ARW 2021: <<link>>>")
}