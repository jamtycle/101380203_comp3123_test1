const { randomBytes } = require("crypto");
const fs = require("fs");
const path = require("path");

const log_file = path.join(".", "logs");

// PART 1 - Remove log files
const removeLogFiles = (_path) => {
    fs.readdirSync(_path).forEach((x) => {
        console.log(`deleting file... ${x}`);
        fs.unlinkSync(path.join(log_file, x));
    });
    fs.rmSync(_path, { recursive: true, force: true });
}
if (fs.existsSync(log_file)) removeLogFiles(log_file);

// PART 2 - Create Log files
if (!fs.existsSync(log_file)) fs.mkdirSync(log_file);
process.chdir(log_file.toString());

for (let i = 0; i < 10; i++) {
    const logname = `log${i}.txt`;
    console.log(logname);
    const content = randomBytes(500).toString("utf-8");
    fs.writeFileSync(logname, content, { flag: "wx", encoding: "utf-8" });
}

