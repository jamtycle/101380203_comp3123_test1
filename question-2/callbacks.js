const delayedSuccess = () => {
    setTimeout(() => {
        let success = { "message": "delayed success!" };
        console.log(success);
    }, 500);
};

const delayedException = () => {
    setTimeout(() => {
        try {
            throw new Error("error: delayed exception!");
        } catch (ex) {
            console.error(ex);
        }
    }, 500);
};

delayedSuccess();
delayedException();