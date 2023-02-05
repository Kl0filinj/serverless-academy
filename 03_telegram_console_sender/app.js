import { Command } from "commander";
import { sendMessage, sendPhoto } from "./botOperations.js";

const program = new Command();

program
  .option("-a, --action <type>", "choose action")
  .option("-p, --path <type>", "path to photo")
  .option("-t, --text <type>", "text of a message");

program.parse(process.argv);
const argv = program.opts();

function invokeAction({ action, path, text }) {
  switch (action) {
    case "message":
      sendMessage(text);
      break;

    case "photo":
      sendPhoto(path);
      break;

    case "help":
      console.log(
        "help - help info\nmessage - send message to chat, u have to provide message text\nphoto - send photo to chat, u have to provide path"
      );
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}
invokeAction(argv);
