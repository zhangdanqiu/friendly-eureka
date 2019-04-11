'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/**
 * Mongoose schema for contact pojo.
 */

let ContactSchema = new Schema({

    /**
     * attributes of contacts
     */
    LastName: {
        type: String,
        default: "lastname"
        //required: "LastName is required"
    },
    FirstName: {
        type: String,
        default:"firstname"
        //required: "FirstName is required"
    },
    Phone_Number: {
        type: String,
        default: "13633939225"
        //required: "Phone number is required"
    },
    Email_Addr: {
        type: String,
        default: "example@email.com"
    }
    },
    {
        versionKey: false
    });

    module.exports = mongoose.model('Contacts',ContactSchema);

