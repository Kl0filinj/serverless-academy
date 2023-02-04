import path from "node:path";
import { readFile, writeFile } from "node:fs/promises";

export const dbPath = path.resolve("02_primitive_db/db.txt");

export async function listContacts() {
  try {
    const users = await readFile(dbPath, "utf8");
    return JSON.parse(users);
  } catch (error) {
    console.log(error);
  }
}

export async function addContact(user, gender, age) {
  try {
    const users = await readFile(dbPath, "utf8");
    const parsedUsers = JSON.parse(users);
    const newContent = [...parsedUsers, { user, gender, age }];
    await writeFile(dbPath, JSON.stringify(newContent), "utf8");
  } catch (error) {
    console.log(error);
  }
}
