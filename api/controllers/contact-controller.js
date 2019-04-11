/**
 * Controller for contact endpoints.
 */

'use strict';

//import contact service

const contactService = require('../services/contact-service');


exports.list = function(request,response){
    let callback = function(contacts){
        response.status(200);
        response.json(contacts);
    };

    contactService.search({},callback);
};

/**
 * Creates a new contact with the request JSON and
 * returns contact JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */

exports.post = function (request, response){
    console.log("From POST");
    let newContact = Object.assign({},request.body),
        callback = function(contact){
            response.status(200);
            response.json(contact);
        }
    contactService.save(newContact,callback);
};


exports.get = function (request, response) {
    let callback = function (contact) {
        response.status(200);
        response.json(contact);
    };
    contactService.get(request.params.contactId, callback);
};



/**
 * Updates and returns a sticky object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */

exports.put = function (request, response) {
    let contact = Object.assign({}, request.body),
        callback = function (contact) {
            response.status(200);
            response.json(contact);
        };
    contact._id = request.params.contactId;
    contactService.update(contact, callback);
};


/**
 * Deletes a sticky object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.delete = function (request, response) {
    let callback = function () {
        response.status(200);
        response.json({
            message: 'Contact Successfully deleted'
        });
    };
    contactService.delete(request.params.contactId, callback);
};




