"use strict";

const { removeAttrsAndId, removeTime } = require("../../../utils");

/**
 * home controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::home.home", function ({ strapi }) {
  return {
    async find(ctx) {
      ctx.query = {
        ...ctx.query,
        populate: "deep",
      };
      const { data } = await super.find(ctx);
      return removeAttrsAndId(removeTime(data[0]));
    },
  };
});
