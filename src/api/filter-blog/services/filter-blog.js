'use strict';

/**
 * filter-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::filter-blog.filter-blog');
