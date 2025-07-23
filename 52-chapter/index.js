//การใช้ Error หรือ custom error class แทนการใช้ throw error ทั่วไป

class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NotFoundError';
        this.stack = 'not found 404';
    }
}


function showMsg(fullname) {
    if (fullname === '') {
        //custom error class
        const error = new NotFoundError('404 Not Found');
        error.stack = '404 fullname not found';
        throw error;
    }
    if (fullname === 'mary') {
        // throw 'something went wrong'; //bad
        // throw new Error('something went wrong'); //good
        const error = new Error('Invalid input');
        error.name = 'InvalidInputError';
        error.stack = 'invalid mary input ';
        throw error;
    }
    return fullname;
}

try {
    console.log(showMsg(''));
} catch (error) {
    if (error instanceof NotFoundError) {
        console.error(error.message);
    } else {
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);

    }

}finally{
    console.log('cleanup resources');
}
