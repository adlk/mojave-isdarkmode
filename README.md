# macOS-isDarkMode
Simple module to check if macOS Mojave dark mode is enabled

This module is ready to be used in electron.

## How to use
Install the module `npm install @adlk/mojave-isdarkmode`.

```js
import isDarkMode from "@adlk/mojave-isdarkmode";

async function config() {
  const isDarkModeEnabled = await isDarkModeEnabled();

  return {
    randomAppConfig: true,
    minimizeToSystemTray: false,
    isDarkModeEnabled,
  };
}
```