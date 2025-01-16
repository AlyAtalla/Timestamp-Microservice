class TimestampAPI {
  static convertDate(dateParam) {
    let date;
    if (!dateParam) {
      date = new Date();
    } else if (!isNaN(dateParam)) {
      date = new Date(parseInt(dateParam));
    } else {
      date = new Date(dateParam);
    }

    if (date.toString() === "Invalid Date") {
      throw new Error("Invalid Date");
    }

    return date;
  }

  static formatTimestamp(date) {
    return {
      unix: date.getTime(),
      utc: date.toUTCString()
    };
  }
}

module.exports = TimestampAPI;
