# Dates

- new Date().getMonth is zero index

- Icons Not Loading and CORS errors
In the upcoming lecture, we will be adding some font icons from the Semantic UI library.

There is a CDN bug that some students are hitting where the icons will no longer load and throw a CORS error after changing the browser's location sensors. Another student finally discovered the reason here.

The CDN.js docs add the integrity and crossorigin parameters to your script by default, which is breaking when we change the location sensors.

Change the script to look like this:

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />

Stop the server and close your browser (if you miss fully closing the browser the error will persist). Then, restart your server.

If this does not resolve your issue, you can also choose to install the CSS library locally:

npm install semantic-ui-css

Then, import the library into your root index.js component:

import "semantic-ui-css/semantic.min.css";

## icons

- <https://semantic-ui.com/>
- 