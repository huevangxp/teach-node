const mongoose = require('mongoose');
require('dotenv').config()

const ConnDB = () => {
    try {
        mongoose.connect(process.env.URL)
            .then(() => {
            console.log("connected db successfully!");
        })

    } catch (error) {
        console.log(error);
    }
}

module.exports = ConnDB
