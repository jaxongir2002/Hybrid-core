'use strict';

/**
 * blog controller
 */

const {createCoreController} = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog.blog', ({strapi}) => ({
  async find(ctx) {
    // Check if an ID is provided in the query parameters
    const {id} = ctx.params;

    // If there is an ID, fetch the specific blog entry
    if (id) {
      // Validate the ID format if necessary
      const blog = await strapi.service('api::blog.blog').findOne(id);

      // If no blog is found, return a 404 error
      if (!blog) {
        return ctx.notFound('Blog not found');
      }

      // Sanitize the output for the found blog
      const sanitizedBlog = await this.sanitizeOutput(blog, ctx);

      return this.transformResponse(sanitizedBlog);
    }

    // If no ID is provided, proceed with the default find query
    await this.validateQuery(ctx);
    const sanitizedQueryParams = await this.sanitizeQuery(ctx);

    const {results, pagination} = await strapi
      .service('api::blog.blog')
      .find(sanitizedQueryParams);

    const sanitizedResults = await this.sanitizeOutput(results, ctx);

    return this.transformResponse(sanitizedResults, {pagination});
  },
}));
