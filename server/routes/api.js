// api.js
class TimestampAPI {
  /**
   * Converts a date input to Unix timestamp and UTC string
   * @param {string|number|undefined} dateInput 
   * @returns {Object} Timestamp object or error
   */
  static parseDate(dateInput) {
    let date;

    // Handle empty input (current time)
    if (!dateInput) {
      date = new Date();
      return {
        unix: date.getTime(),
        utc: date.toUTCString()
      };
    }

    // Handle Unix timestamp (numeric string or number)
    if (/^\d+$/.test(dateInput)) {
      date = new Date(Number(dateInput));
    } else {
      // Try parsing as date string
      date = new Date(dateInput);
    }

    // Validate date
    if (date.toString() === 'Invalid Date') {
      return { error: "Invalid Date" };
    }

    // Return formatted timestamp object
    return {
      unix: date.getTime(),
      utc: date.toUTCString()
    };
  }

  /**
   * Validates if input can be parsed as a date
   * @param {string|number} input 
   * @returns {boolean}
   */
  static isValidDate(input) {
    return !isNaN(Date.parse(input));
  }

  /**
   * Generates current timestamp
   * @returns {Object}
   */
  static getCurrentTimestamp() {
    const now = new Date();
    return {
      unix: now.getTime(),
      utc: now.toUTCString()
    };
  }

  /**
   * Converts various date formats
   * @param {string|number} input 
   * @returns {Object}
   */
  static convertDate(input) {
    try {
      // Handle different input types
      switch (true) {
        case input === undefined:
          return this.getCurrentTimestamp();
        case typeof input === 'number':
          return this.parseDate(input);
        case typeof input === 'string':
          return this.parseDate(input);
        default:
          return { error: "Invalid Input" };
      }
    } catch (error) {
      return { error: "Processing Error" };
    }
  }

  /**
   * Formats timestamp for consistent output
   * @param {Object} timestampObj 
   * @returns {Object}
   */
  static formatTimestamp(timestampObj) {
    if (timestampObj.error) return timestampObj;
    
    return {
      unix: Number(timestampObj.unix),
      utc: timestampObj.utc
    };
  }
}

// Export for use in different environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TimestampAPI;
}

// Optional: Add browser support
if (typeof window !== 'undefined') {
  window.TimestampAPI = TimestampAPI;
}