import * as fs from "fs";
import * as path from "path";
import { Device } from "./models/Device";

// Define the file path
// const filePath = path.join(__dirname, "log.txt");

type LogEvent = {
  event: string;
  message: string;
};

class Logger {
  static getCurrentTime(): string {
    const currentTime = new Date();

    // Get individual components
    const month = (currentTime.getMonth() + 1).toString().padStart(2, "0"); // Month is 0-indexed
    const day = currentTime.getDate().toString().padStart(2, "0");
    const year = currentTime.getFullYear().toString().slice(-2); // Last two digits of the year
    const hours = currentTime.getHours().toString().padStart(2, "0");
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    const seconds = currentTime.getSeconds().toString().padStart(2, "0");

    // Format as MM-DD-YY-HH-MM-SS
    return `${month}-${day}-${year}-${hours}-${minutes}-${seconds}`;
  }

  static getCurrentDay(): string {
    const currentTime = new Date();

    // Get individual components
    const month = (currentTime.getMonth() + 1).toString().padStart(2, "0"); // Month is 0-indexed
    const day = currentTime.getDate().toString().padStart(2, "0");
    const year = currentTime.getFullYear().toString().slice(-2); // Last two digits of the year
    const hours = currentTime.getHours().toString().padStart(2, "0");
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    const seconds = currentTime.getSeconds().toString().padStart(2, "0");

    // Format as MM-DD-YY-HH-MM-SS
    return `${month}-${day}-${year}`;
  }

  static async writeLog(data: LogEvent, device: Device) {
    console.log(
      JSON.stringify({
        ...data,
        time: this.getCurrentTime(),
        device: device.getLogData(),
      })
    );
    // const formattedTime = this.getCurrentDay();
    // const currentFilePath = path.join(__dirname, `log-${formattedTime}.txt`);
    // const log = JSON.stringify({
    //   ...data,
    //   time: this.getCurrentTime(),
    //   device: device.getLogData(),
    // });
    // try {
    //   // Append to the file, or create it if it doesn't exist
    //   await fs.promises.appendFile(currentFilePath, log, { encoding: "utf8" });
    //   console.log(`${log} appended successfully.`);
    // } catch (error) {
    //   console.error("Error appending to file:", error);
    // }
  }
}

export { Logger };
