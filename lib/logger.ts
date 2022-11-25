const textGreen = "color: green; font-size: 15px";
const textRed = "color: red; font-size: 15px";
const Logger = {
  log: (...args: any) => {
    console.log(...args);
  },

  warn: (...args: any) => {
    console.warn(...args);
  },

  error: (...args: any) => {
    console.error(...args);
  },
  check: (...args: any) => {
    console.log("%c" + [...args["0"]], textGreen);
  },
};

export default Logger;
