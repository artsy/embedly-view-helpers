var helpers = require('./')('foo-bar');

describe('embedly view helpers', function () {

  describe('resize', function() {

    it('returns a resize url for embedly', function() {
      helpers.resize('http://foobar.com/kitten/1/2')
        .should.equal('https://i.embed.ly/1/display/resize?quality=95&grow=false&key=foo-bar&url=http%3A%2F%2Ffoobar.com%2Fkitten%2F1%2F2');
    });
  });

  describe('crop', function() {

    it('returns a resize url for embedly', function() {
      helpers.crop('http://foobar.com/kitten/1/2')
        .should.equal('https://i.embed.ly/1/display/crop?quality=95&key=foo-bar&url=http%3A%2F%2Ffoobar.com%2Fkitten%2F1%2F2');
    });
  });

  describe('fill', function() {

    it('returns a resize url for embedly', function() {
      helpers.fill('http://foobar.com/kitten/1/2')
        .should.equal('https://i.embed.ly/1/display/fill?quality=95&color=fff&key=foo-bar&url=http%3A%2F%2Ffoobar.com%2Fkitten%2F1%2F2');
    });
  });
});