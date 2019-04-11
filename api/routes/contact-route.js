/**
 * Contact endpoint route definitions.
 */

'use strict';

module.exports = function (app) {
    const contactController = require('../controllers/contact-controller');
    // Contact Routes for search and create.
    app.route('/Contacts')
        .get(contactController.list)
        .post(contactController.post);

    // Contact Routes for get, update and delete.
    app.route('/Contacts/:contactId')
        .get(contactController.get)
        .put(contactController.put)
        .delete(contactController.delete);
};