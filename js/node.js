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

// =====================================================================

// =====================================================================

// =====================================================================
// =====================================================================
// =====================================================================
// =====================================================================
// =====================================================================
// =====================================================================
// =====================================================================
// =====================================================================
// =====================================================================


