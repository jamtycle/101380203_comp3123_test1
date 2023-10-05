const fs = require("fs");
const path = require("path");

const removeLogFiles = (_path) => {
    fs.readdirSync(_path).forEach((x) => {
        console.log(`deleting file... ${x}`);
        fs.unlinkSync(path.join(log_file, x));
    });
    fs.rmSync(_path, { recursive: true, force: true });
}

if (fs.existsSync(log_file)) removeLogFiles(log_file);