'use strict';

/**
 * postcode service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::postcode.postcode');
