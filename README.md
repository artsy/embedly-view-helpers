# Embedly View Helpers

A library of view helper functions to leverage Embedly for on-the-fly image processing.

## Example

On the server with Express and Jade

````javascript
var app = express();

app.locals.crop = require('embedly-view-helpers')(EMBEDLY_KEY).crop;
````

````jade
body
  h1
    img( src=crop(img.url, { width: 400, height: 400, quality: 90 }) )
````

Or on the client with Browserify

````javascript
var crop = require('embedly-view-helpers')(EMBEDLY_KEY).crop;

$('img').attr('src', crop(//...))
````

## Contributing

Please fork the project and submit a pull request with tests. Install node modules `npm install` and run tests with `npm test`. You can look at the example by passing your Embedly key as an env variable `EMBEDLY_KEY=X npm run example`.

## License

MIT
