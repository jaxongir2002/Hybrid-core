'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog.blog', ({ strapi }) => ({
  async find(ctx) {
    // Check if an ID is provided in the query parameters
    const { id } = ctx.params;

    // If there is an ID, fetch the specific blog entry
    if (id) {
      const blog = await strapi.service('api::blog.blog').findOne(id);

      if (!blog) {
        return ctx.notFound('Blog not found');
      }

      const sanitizedBlog = await this.sanitizeOutput(blog, ctx);
      return this.transformResponse(sanitizedBlog);
    }
    await this.validateQuery(ctx);
    const sanitizedQueryParams = await this.sanitizeQuery(ctx);

    const { results, pagination } = await strapi
      .service('api::blog.blog')
      .find(sanitizedQueryParams);

    const sanitizedResults = await this.sanitizeOutput(results, ctx);

    return this.transformResponse(sanitizedResults, { pagination });
  },
}));
