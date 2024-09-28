class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, func) {
    if (!time || !func) {
      throw new Error("Отсутствуют обязательные аргументы");
    }

    if (this.alarmCollection.includes(time)) {
      console.warn("Уже присутствует звонок на это же время");
    }

    const alarm = {
      time: time,
      callback: func,
      canCall: true,
    };

    this.alarmCollection.push(alarm);
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(
      (alarm) => alarm.time !== time
    );
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  start() {
    if (this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => {
      const currentTime = this.getCurrentFormattedTime();
      this.alarmCollection.forEach((alarm) => {
        if (alarm.time === currentTime && alarm.canCall) {
          alarm.canCall = false;
          alarm.callback();
        }
      });
    }, 1000);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  resetAllCalls() {
    this.alarmCollection.forEach((alarm) => {
      alarm.canCall = true;
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
