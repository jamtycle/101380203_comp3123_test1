const { randomBytes } = require("crypto");
const fs = require("fs");
const path = require("path");
const process = require("process");

const log_file = path.join(".", "logs");

if (!fs.existsSync(log_file)) fs.mkdirSync(log_file);
process.chdir(log_file.toString());

for (let i = 0; i < 10; i++) {
    const logname = `log${i}.txt`;
    console.log(logname);
    const content = randomBytes(500).toString("utf-8");
    fs.writeFileSync(logname, content, { flag: "wx", encoding: "utf-8" });
}

