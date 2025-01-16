# Timestamp Microservice

![Screenshot](./Screenshot.png)

## Overview

The Timestamp Microservice is a simple API that converts dates and timestamps to Unix and UTC formats. It provides an easy way to convert human-readable dates to Unix timestamps and vice versa.

## Features

- Convert human-readable dates to Unix timestamps.
- Convert Unix timestamps to UTC dates.
- Simple and easy-to-use API.

## Usage

### Example Usage

- `/api/2015-12-25`
- `/api/1451001600000`

### Example Output

```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/alyatalla/Timestamp-Microservice.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Timestamp-Microservice
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

### Running the Application

1. Start the MongoDB server:
   ```sh
   mongod
   ```
2. Start the application:
   ```sh
   npm start
   ```
3. Open your browser and navigate to `http://localhost:3000`.

## API Endpoints

### Convert Date

- **Endpoint:** `/api/:date?`
- **Method:** `GET`
- **Description:** Converts a date or timestamp to Unix and UTC formats.
- **Parameters:**
  - `date` (optional): The date or timestamp to convert. If not provided, the current date and time will be used.

### Example Request

```sh
curl http://localhost:3000/api/2015-12-25
```

### Example Response

```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

## License

This project is licensed under the MIT License.