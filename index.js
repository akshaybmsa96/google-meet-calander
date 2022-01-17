const meetings = [
  {
    id: 1,
    title: "Meeting with Client",
    startTimeHour: 13,
    startTimeMinute: 0,
    endTimeHour: 14,
    endTimeMinute: 30,
    color: "rgb(213, 0, 0)",
  },
  {
    id: 2,
    title: "Lunch Time",
    startTimeHour: 11,
    startTimeMinute: 0,
    endTimeHour: 12,
    endTimeMinute: 0,
    color: "rgb(3, 155, 229)",
  },
  {
    id: 3,
    title: "Coffee Timing",
    startTimeHour: 9,
    startTimeMinute: 0,
    endTimeHour: 10,
    endTimeMinute: 30,
    color: "rgb(51, 182, 121)",
  },

  {
    id: 4,
    title: "Dev Syncup",
    startTimeHour: 17,
    startTimeMinute: 30,
    endTimeHour: 18,
    endTimeMinute: 0,
    color: "rgb(142, 36, 170)",
  },
];

class GoogleCalander {
  constructor(meetings) {
    this.meetings = meetings;
  }

  calculateTop({ startTimeHour, startTimeMinute }) {
    const adjustmentHeight = 7;

    const top = startTimeHour * 40 + startTimeMinute * 0.667 + adjustmentHeight;

    return top;
  }

  calculateHeight({
    startTimeHour,
    startTimeMinute,
    endTimeHour,
    endTimeMinute,
  }) {
    const minHeight = 20;

    const startInMin = startTimeHour * 60 + startTimeMinute;
    const endInMin = endTimeHour * 60 + endTimeMinute;

    const totalDiffInHour = (endInMin - startInMin) / 60;

    const height = totalDiffInHour * 40;

    return Math.max(height, minHeight);
  }

  getMeetingTimimgLabel({
    startTimeHour,
    startTimeMinute,
    endTimeHour,
    endTimeMinute,
  }) {
    let startTime = "",
      endTime = "",
      suffix = "";

    if (startTimeHour > 12) {
      startTime = startTimeHour - 12;
    } else {
      startTime = startTimeHour;
    }
    if (startTimeMinute) {
      startTime += ":" + startTimeMinute;
    }

    if (endTimeHour > 12) {
      endTime = endTimeHour - 12;
      suffix = "PM";
    } else {
      endTime = endTimeHour;
      suffix = endTimeHour < 12 ? "AM" : "PM";
    }
    if (endTimeMinute) {
      endTime += ":" + endTimeMinute;
    }

    return `${startTime} - ${endTime} ${suffix}`;
  }

  getMeetingElement(meetingObj) {
    const meetingBlock = document.createElement("div");
    meetingBlock.classList.add("meeting");
    meetingBlock.style.backgroundColor = meetingObj.color;

    const top = this.calculateTop(meetingObj);
    const height = this.calculateHeight(meetingObj);

    meetingBlock.style.height = height + "px";
    meetingBlock.style.top = top + "px";

    const meetLabel = document.createElement("span");
    meetLabel.classList.add("meeting-title");
    meetLabel.innerHTML = meetingObj.title;

    meetingBlock.appendChild(meetLabel);

    if (height >= 35) {
      const meetTimimg = document.createElement("span");
      meetTimimg.classList.add("meeting-timimgs");
      meetTimimg.innerHTML = this.getMeetingTimimgLabel(meetingObj);
      meetingBlock.appendChild(meetTimimg);
    }

    return meetingBlock;
  }

  renderMeetings() {
    const scheduleContainer = document.getElementById("scheduleContainer");

    this.meetings.forEach((meeting) => {
      const meetBlock = this.getMeetingElement(meeting);
      scheduleContainer.appendChild(meetBlock);
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const meetCalander = new GoogleCalander(meetings);
  meetCalander.renderMeetings();
});
