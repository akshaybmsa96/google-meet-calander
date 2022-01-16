const meetings = [
  {
    id: 1,
    title: "Meeting 1",
    startTimehour: 14,
    startTimeMinute: 0,
    endTimehour: 13,
    endTimeMinute: 30,
  },
  {
    id: 2,
    title: "Meeting 2",
    startTimehour: 11,
    startTimeMinute: 0,
    endTimehour: 12,
    endTimeMinute: 0,
  },
  {
    id: 3,
    title: "Meeting 3",
    startTimehour: 9,
    startTimeMinute: 0,
    endTimehour: 10,
    endTimeMinute: 30,
  },
];

class GoogleCalander {
  constructor(meetings) {
    this.meetings = meetings;
  }

  //

  renderMeetings() {}

  calculateTop(startTimeHour, startTimeMinute) {
    const adjustmentHeight = 7;

    const top = startTimeHour * 40 + startTimeMinute * 0.667 + adjustmentHeight;

    return top;
  }

  calculateHeight(startTimeHour, startTimeMinute, endTimeHour, endTimeMinute) {
    const minHeight = 20;

    return minHeight;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const meetCalander = new GoogleCalander(meetings);
  meetCalander.renderMeetings();
});
