// I guess this is the same but different
const delayedSuccess = async () => {
    return new Promise(async (res, rej) => {
        await new Promise((res) => setTimeout(res, 500));
        let success = { "message": "delayed success!" };
        res(success);
    });
};

const delayedException = async () => {
    return new Promise(async (res, rej) => {
        await new Promise((res) => setTimeout(res, 500));
        rej({ "error": "delayed exception!" });
    })
};

// console.log(delayedSuccess().then((x) => console.log(x)));
delayedSuccess().then((x) => console.log(x))
delayedException().catch((err) => console.error(err));

// console.log(delayedException());