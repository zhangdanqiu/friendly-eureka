/**
 * Service for sticky operations.
 */

'use strict';
const mongoose = require('mongoose'),
    Contact = mongoose.model('Contacts');

/**
 * Throws error if error object is present.
 *
 * @param {Object} error {Error object}
 */
let throwError = function (error) {
    if (error) {
        throw Error(error);
    }
};

/**
 * Returns an array of sticky object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 * @param {function} callback {Sucess callback function}
 */
exports.search = function (params, callback) {
    let resultCallback = function (err, contacts) {
        throwError(err);
        callback(contacts);
    };
    Contact.find(params, resultCallback);
};

/**
 * Saves and returns the new sticky object.
 *
 * @param {Object} contact {contact object}
 * @param {function} callback {Success callback function}
 */
exports.save = function (contact, callback) {
    //console.log("POST save");
    let newContact = new Contact(contact),
        resultCallback = function (err, contact) {
            throwError(err);
            callback(contact);
        };
    newContact.save(resultCallback);
};

/**
 * Returns the sticky object matching the id.
 *
 * @param {string} contactId {Id of the contact object}
 * @param {function} callback {Success callback function}
 */
exports.get = function (contactId, callback) {
    let resultCallback = function (err, contact) {
        throwError(err);
        callback(contact);
    };
    Contact.findById(contactId, resultCallback);
};

/**
 * Updates and returns the contact object.
 *
 * @param {Object} contact {Contact object}
 * @param {function} callback {Success callback function}
 */
exports.update = function (contact, callback) {
    let resultCallback = function (err, contact) {
        throwError(err);
        callback(contact);
    };
    contact.modified_date = new Date();
    Contact.findOneAndUpdate({
        _id: contact._id
    }, contact, {
        new: true
    }, resultCallback);
};

/**
 * Deletes the sticky object matching the id.
 *
 * @param {string} contactId {Id of the sticky object}
 * @param {function} callback {Sucess callback function}
 */
exports.delete = function (contactId, callback) {
    let resultCallback = function (err, contact) {
        throwError(err);
        callback();
    };
    Contact.remove({
        _id: contactId
    }, resultCallback);
};