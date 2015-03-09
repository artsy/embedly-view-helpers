var qs = require('querystring');

module.exports = function(embedlyKey) {
  return {
    resize: function (url, options) {
      if (!options) options = {};
      if (!options.quality) options.quality = 95;
      if (!options.grow) options.grow = false;
      options.key = embedlyKey;
      options.url = url;
      return "https://i.embed.ly/1/display/resize?" + qs.stringify(options)
    },

    crop: function (url, options) {
      if (!options) options = {};
      if (!options.quality) options.quality = 95;
      options.key = embedlyKey;
      options.url = url;
      return "https://i.embed.ly/1/display/crop?" + qs.stringify(options)
    },

    fill: function (url, options) {
      if (!options) options = {};
      if (!options.quality) options.quality = 95;
      if (!options.color) options.color = 'fff';
      options.key = embedlyKey;
      options.url = url;
      return "https://i.embed.ly/1/display/fill?" + qs.stringify(options)
    }
  };
}