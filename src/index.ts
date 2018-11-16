
import { exec } from "child_process";
import debug from "debug";
import os from "os";

const d = debug("mojave-isDarkMode");

export default async function isDarkModeEnabled(): Promise<boolean> {
    if (process.platform === "darwin" && parseInt(os.release().split(".")[0], 10) >= 18) {
      d("Checking if macOS mojave dark mode is enabled");
      try {
        const configPromise = new Promise(((resolve, reject) => {
          exec('defaults read "Apple Global Domain" "AppleInterfaceStyle"', (error, stdout, stderr) => {
            if (error || stderr) {
              reject(error || stderr);
            }

            resolve(stdout.trim());
          });
        }));

        const config = await configPromise;
        d("macOS dark mode is enabled");

        return config === "Dark";
      } catch (err) {
        // `AppleInterfaceStyle` doesn't exist if dark mode isn't enabled
        d("macOS dark mode is disabled");
        return false;
      }

    } else {
      if (process.platform !== "darwin") {
        console.log("Platform is not macOS/darwin");
      } else {
        if (process.platform !== "darwin") {
          console.log("Dark mode is only available on macOS mojave or later");
        }
      }

      // Always return false on non-compatible OSes
      return false;
    }
}
