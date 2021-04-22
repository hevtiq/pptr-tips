//==========================================
// Performance rules
//
// 1. When the page is downloaded for the first time, the size of all
//    uncompressed JavaScript scripts: <= 200kb;
// 2. When the page is downloaded for the first time, the size of all
//    non-compressed CSS resources: <= 100kb;
// 3. According to the HTTP protocol, the number of resources required: <= 6;
// 4. According to HTTP / 2 protocol, the number of resources required: <= 20;
// 5. 90% of the code must be used (ie only allow 10% unused code or excess);
//==========================================

let flag = false;
try {
    $('body') || $$('body');
}
catch (err) {
    flag = true;
}

// Customize for dom
// const __$ = document.querySelector.bind(document);
// const __$$ = document.querySelectorAll.bind(document);
// const __id = document.getElementById.bind(document);
// const __class = document.getElementsByClassName.bind(document);
// const __tag = document.getElementsByTagName.bind(document);

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Change the background color of a class.
$('.class').style.background = "#BADA55";

// Change the inner HTML of an ID.
$('#id').innerHTML = "<span>Cool beans!</span>";

// Select all images on the webpage.
$$('img')

// Print the image addresses for all the images on a webpage.
$$('img').forEach(img => console.log(img.src))


//============================================================
/**
 * uuid() method to generate UUID
 * @returns uuid (Universally Unique IDentifier)
 */
const uuid = () => {
    var temp_url = URL.createObjectURL(new Blob());
    var uuid = temp_url.toString();
    URL.revokeObjectURL(temp_url);
    return uuid.substr(uuid.lastIndexOf('/') + 1); // remove prefix (e.g. blob:null/, blob:www.test.com/, ...)
};

// @use:
// uuid();



//===========================================================
/**
 * toCsv() method to create a csv from a table
 * @param {*} table - table dom
 * @returns csv data
 */
const toCsv = (table) => {
    // Query all rows
    const rows = table.querySelectorAll('tr');

    return [].slice.call(rows)
        .map(function (row) {
            // Query all cells
            const cells = row.querySelectorAll('th,td');
            return [].slice.call(cells)
                .map(function (cell) {
                    return cell.textContent;
                })
                .join(',');
        })
        .join('\n');
};

/**
 * createFakerLink() method to create a faker link
 * @param {*} text - data taken from toCSV()
 * @param {*} fileName - filename will be created
 */
const createFakerLink = (text, fileName) => {
    // create a faker link invisibility can download by attribute download
    const link = document.createElement('a');
    link.setAttribute('href', `data:text/csv;charset=utf-8,${encodeURIComponent(text)}`);
    link.setAttribute('download', fileName);

    link.style.display = 'none';
    document.body.appendChild(link);

    // click link to download data with filename and text data
    link.click();

    // remove faker link from body
    document.body.removeChild(link);
};

const table = document.getElementById('exportMe');
const exportBtn = document.getElementById('exportBtn');
const csvFileName = {
    exportOne: 'レポート',
    exportAll: 'すべてのレポート'
};

/**
 * downloadCSV() method to download CSV from table
 */
const downloadCSV = () => {
    // Export to csv
    const csv = toCsv(table);

    // Download it
    createFakerLink(csv, `${csvFileName.exportOne}.csv`);
};

// add event to download
exportBtn.addEventListener('click', downloadCSV);



//===========================================================
/**
 * hide(...el) method to hide all elements specified
 * @param  {...any} el - element
 * @returns element be hidden
 */
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

// @use:
// hide(document.querySelectorAll('img'));



//===========================================================
/**
 * hasClass() method to check if the element has the specified class
 * @param {*} el - element
 * @param {*} className - class name will be checked
 * @returns true/false
 */
const hasClass = (el, className) => el.classList.contains(className);

// @use:
// hasClass(document.querySelector('p.special'), 'special');



//===========================================================
/**
 * toggleClass() method to toggle a class for an element
 * @param {*} el - element
 * @param {*} className - class name will be checked
 * @returns class will be toggled
 */
const toggleClass = (el, className) => el.classList.toggle(className);

// @use:
// toggleClass(document.querySelector('p.special'), 'special');



//===========================================================
/**
 * getScrollPosition() method to get the scroll position of the current page
 * @param {*} el - element
 * @returns scroll position
 */
const getScrollPosition = (el = window) => ({
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

// @use
// getScrollPosition(); // {x: 0, y: 200}



//===========================================================
/**
 * scrollToTop() method to smooth-scroll to the top of the page
 */
const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
};

// Example
// scrollToTop();



//===========================================================
/**
 * elementContains() method check if the parent element contains the child element
 * @param {*} parent - parent element
 * @param {*} child - child element
 * @returns true/false
 */
const elementContains = (parent, child) => parent !== child && parent.contains(child);

// @use:
// elementContains(document.querySelector('head'), document.querySelector('title'));
// elementContains(document.querySelector('body'), document.querySelector('body'));



//===========================================================
/**
 * elementIsVisibleInViewPort() method to check if the element specified is visible in the viewport
 * @param { Object } el - element need to check
 * @param { Boolean} partiallyVisible - visible or not
 * @returns true/false
 */
const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return partiallyVisible
        ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
        : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

// @use:
// elementIsVisibleInViewport(el); // (not fully visible)
// elementIsVisibleInViewport(el, true); // (partially visible)



//===========================================================
/**
 * getImages() method to fetch all images within an element
 * @param { Object } el - target element
 * @param { Boolean } includeDuplicates - remove duplicated image or not
 * @returns images array
 */
const getImages = (el, includeDuplicates = false) => {
    const images = [...el.getElementsByTagName('img')].map(img => img.getAttribute('src'));
    return includeDuplicates ? images : [...new Set(images)];
};

// @use:
// getImages(document, true); // ['image1.jpg', 'image2.png', 'image1.png', '...']
// getImages(document, false); // ['image1.jpg', 'image2.png', '...']



//===========================================================
/**
 * detectDeviceType() method to figure out if the device is a mobile device or a desktop/laptop
 * @returns Mobile or Desktop
 */
const detectDeviceType = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        ? 'Mobile'
        : 'Desktop';

// @use:
// detectDeviceType(); // "Mobile" or "Desktop"



//===========================================================
/**
 * currentURL() method to get the current URL
 * @returns current url
 */
const currentURL = () => window.location.href;

// @use:
currentURL(); // 'https://google.com'



//===========================================================
/**
 * getURLParameters() method to grab parameters from the URL
 * @param { String } url - url with params need to check
 * @returns object with params
 */
const getURLParameters = url =>
    (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
        (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
        {}
    );

// @use:
// getURLParameters('http://url.com/page?n=Adam&s=Smith'); // {n: 'Adam', s: 'Smith'}
// getURLParameters('google.com'); // {}



//===========================================================
/**
 * formToObject() method to encode a set of form elements as an object
 * @param {*} form - target form
 * @returns object with inputted information in form
 */
const formToObject = form =>
    Array.from(new FormData(form)).reduce(
        (acc, [key, value]) => ({
            ...acc,
            [key]: value
        }),
        {}
    );

// @use:
// formToObject(document.querySelector('#form')); // { email: 'test@email.com', name: 'Test Name' }



//===========================================================
/**
 * get() method to retrieve a set of properties indicated by the given selectors from an object
 * @param {*} from - target object
 * @param  {...any} selectors - condition
 * @returns array with taken info
 */
const get = (from, ...selectors) =>
    [...selectors].map(s =>
        s
            .replace(/\[([^\[\]]*)\]/g, '.$1.')
            .split('.')
            .filter(t => t !== '')
            .reduce((prev, cur) => prev && prev[cur], from)
    );
const obj = { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test' }] };

// @use:
// get(obj, 'selector.to.val', 'target[0]', 'target[2].a'); // ['val to select', 1, 'test']



//===========================================================
/**
 * delay() method to invoke the provided function after wait (in milliseconds)
 * @param { Object } fn - target function
 * @param { number } wait - ms delayed
 * @param  {...any} args - info will be pass
 * @returns any info depend on args
 */
const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);
delay(
    function (text) {
        console.log(text);
    },
    1000,
    'later'
);

// Logs 'later' after one second.



//===========================================================
/**
 * triggerEvent() method to trigger a specific event on a given element, optionally passing custom data
 * @param { Object } el - target element will be put a trigger
 * @param { String } eventType - trigger
 * @param { Object } detail - data will be pass
 * @returns el with trigger and new data
 */
const triggerEvent = (el, eventType, detail) =>
    el.dispatchEvent(new CustomEvent(eventType, { detail }));

// @use:
// triggerEvent(document.getElementById('myId'), 'click');
// triggerEvent(document.getElementById('myId'), 'click', { username: 'bob' });



//===========================================================
/**
 * off() method to remove an event listener from an element
 * @param {*} el - target element
 * @param {*} evt - event will be removed
 * @param {*} fn - callback
 * @param {*} opts - true/false
 * @returns element with event removed
 */
const off = (el, evt, fn, opts = false) => el.removeEventListener(evt, fn, opts);

// @use:
// const fn = () => console.log('!');
// document.body.addEventListener('click', fn);
// off(document.body, 'click', fn);



//===========================================================
/**
 * formatDuration() method to get readable format of the given number of milliseconds
 * @param { Number } ms - ms will be formatted
 * @returns string readable
 */
const formatDuration = ms => {
    if (ms < 0) ms = -ms;
    const time = {
        day: Math.floor(ms / 86400000),
        hour: Math.floor(ms / 3600000) % 24,
        minute: Math.floor(ms / 60000) % 60,
        second: Math.floor(ms / 1000) % 60,
        millisecond: Math.floor(ms) % 1000
    };
    return Object.entries(time)
        .filter(val => val[1] !== 0)
        .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
        .join(', ');
};

// @use:
// formatDuration(1001); // '1 second, 1 millisecond'
// formatDuration(34325055574); // '397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds'



//===========================================================
/**
 * getDaysDiffBetweenDates() method to get the difference (in days) between two dates
 * @param {*} dateInitial - from date
 * @param {*} dateFinal - to date
 * @returns days
 */
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
    (dateFinal - dateInitial) / (1000 * 3600 * 24);

// @use:
// getDaysDiffBetweenDates(new Date('2017-12-13'), new Date('2017-12-22')); // 9



//===========================================================
/**
 * httpGet() method to make a GET request to the passed URL
 * @param { String } url - request url
 * @param { Function } callback - callback
 * @param { String } err - error if occurs
 */
const httpGet = (url, callback, err = console.error) => {
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = () => callback(request.responseText);
    request.onerror = () => err(request);
    request.send();
};

// @use:
// httpGet(
//     'https://jsonplaceholder.typicode.com/posts/1',
//     console.log
// );

// Logs: {"userId": 1, "id": 1, "title": "sample title", "body": "my text"}



//===========================================================
/**
 * httpPost() method to make a POST request to the passed URL
 * @param { String } url - request url
 * @param { String } data - JSON string
 * @param { Function } callback - callback function
 * @param { String } err - error if occurs
 */
const httpPost = (url, data, callback, err = console.error) => {
    const request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.onload = () => callback(request.responseText);
    request.onerror = () => err(request);
    request.send(data);
};

// @use:
const newPost = {
    userId: 1,
    id: 1337,
    title: 'Foo',
    body: 'bar bar bar'
};

const data = JSON.stringify(newPost);
// '{"userId":1,"id":1337,"title":"Foo","body":"bar bar bar"}'

httpPost(
    'https://jsonplaceholder.typicode.com/posts',
    data,
    console.log
);

// Logs: {"userId": 1, "id": 1337, "title": "Foo", "body": "bar bar bar"}



//===========================================================
/**
 * counter() method to create a counter with the specified range, step and duration for the specified selector
 * @param {*} selector - target element
 * @param {*} start - start time (ms)
 * @param {*} end - end time (ms)
 * @param {*} step - step every time change
 * @param {*} duration run duration time
 * @returns timer
 */
const counter = (selector, start, end, step = 1, duration = 2000) => {
    let current = start,
        _step = (end - start) * step < 0 ? -step : step,
        timer = setInterval(() => {
            current += _step;
            document.querySelector(selector).innerHTML = current;
            if (current >= end) document.querySelector(selector).innerHTML = end;
            if (current >= end) clearInterval(timer);
        }, Math.abs(Math.floor(duration / (end - start))));
    return timer;
};

// @use:
// counter('#my-id', 1, 1000, 5, 2000); // Creates a 2-second timer for the element with id="my-id"



//===========================================================
/**
 * copyToClipboard() method to add a string to clipboard
 * @param { String } str - string will be copied
 */
const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected =
        document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
    }
};

// @use:
// copyToClipboard('Lorem ipsum'); // 'Lorem ipsum' copied to clipboard.



//===========================================================
/**
 * isBrowserTabFocused() method to check browser tab focused or not
 * @returns browser tab focused or not
 */
const isBrowserTabFocused = () => !document.hidden;

// @use:
// isBrowserTabFocused(); // true



//===========================================================
const fs = require('fs');

/**
 * createDirIfNotExists() method to create a new directory
 * @param {*} dir - directory need to create
 * @returns directory created
 */
const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);

// @use:
// createDirIfNotExists('test');



//===========================================================
/**
 * areEqual() method to check if all items in an array are equal
 * @param { Array } arr - target array
 * @returns true/false
 */
const areEqual = arr => arr.length > 0 && arr.every(item => item === arr[0]);
// areEqual([1, 2, 3, 4]) === false
// areEqual(['hello', 'hello', 'hello']) === true



//===========================================================
/**
 * isArray() method to check if an object is an array
 * @param {*} obj - target object
 * @returns true/false
 */
const isArray = obj => Array.isArray(obj);



//===========================================================
/**
 * toNumbers() method to convert array string to array numbers
 * @param {*} arr - target array
 * @returns array with number
 */
const toNumbers = arr => arr.map(x => +x);

// toNumbers(['2', '3', '4']);  // [2, 3, 4]



//===========================================================
/**
 * method to create an array of cumulative sum
 * @param {*} arr - target array
 * @returns total
 */
const accumulate = arr => arr.reduce((a, b, i) => i === 0 ? [b] : [...a, b + a[i - 1]], 0);

/*
accumulate([1, 2, 3, 4]) === [1, 3, 6, 10]
1             = 1
1 + 2         = 3
1 + 2 + 3     = 6
1 + 2 + 3 + 4 = 10
*/



//===========================================================
/**
 * range() method to create an array of numbers in the given range
 * @param {*} min - min in range
 * @param {*} max - max in range
 * @returns array range
 */
const range = (min, max) => [...Array(max - min + 1).keys()].map(i => i + min);
// range(5, 10) === [5, 6, 7, 8, 9, 10]



//===========================================================
/**
 * empty() method to empty an array
 * @param {*} arr - target array
 * @returns empty array
 */
const empty = arr => arr.length = 0;

// Or
// arr = [];



//===========================================================
/**
 * findLongest() method to find the length of the longest string in an array
 * @param {*} words - words need to check
 * @returns longest length of word
 */
const findLongest = words => Math.max(...(words.map(el => el.length)));
// findLongest(['always','look','on','the','bright','side','of','life']) === 6;



//===========================================================
/**
 * max() method to find the maximum item of an array
 * @param { Array } arr - target array
 * @returns maximum item
 */
const max = arr => Math.max(...arr);



//===========================================================
/**
 * min() method to find the minimum item of an array
 * @param { Array } arr - target array
 * @returns minimum item
 */
const min = arr => Math.min(...arr);



//===========================================================
/**
 * flat() method to flatten an array
 * @param { Array } arr - target array
 * @returns flatten array
 */
const flat = arr => arr.reduce((a, b) => Array.isArray(b) ? [...a, ...flat(b)] : [...a, b], []);

// flat(['cat', ['lion', 'tiger']]);  // ['cat', 'lion', 'tiger']



//===========================================================
/**
 * randomItem() method to get a random item from an array
 * @param { Array } arr - target array
 * @returns random item
 */
const randomItem = arr => arr[(Math.random() * arr.length) | 0];



//===========================================================
/**
 * randomColor() method to get a random color from an array
 * @param { Array } arr - target array
 * @returns random color
 */
let randomColor = Math.floor(Math.random() * 16777215).toString(16);



//===========================================================
/**
 * average() method to get the average of an array
 * @param { Array } arr - target array
 * @returns average value
 */
const average = arr => arr.reduce((a, b) => a + b, 0) / arr.length;



//===========================================================
/**
 * sum() method to get the sum of array of numbers
 * @param { Array } arr - target array
 * @returns sum
 */
const sum = arr => arr.reduce((a, b) => a + b, 0);



//===========================================================
/**
 * unique() method to get the unique values of an array
 * @param { Array } arr - target array
 * @returns unique values
 */
const unique = arr => [...new Set(arr)];

// Or
const unique = arr => arr.filter((el, i, array) => array.indexOf(el) === i);



//===========================================================
// Merge but don't remove the duplications
/**
 * merge() method to merge objects
 * @param {*} a - object a
 * @param {*} b - object b
 * @returns merge of objects
 */
const merge = (a, b) => a.concat(b);
// Or
const merge = (a, b) => [...a, ...b];

// Merge and remove the duplications
/**
 * merge() method to merge objects
 * @param {*} a - object a
 * @param {*} b - object b
 * @returns merge of objects
 */
const merge = [...new Set(a.concat(b))];
// Or
const merge = [...new Set([...a, ...b])];



//===========================================================
/**
 * parseUrl() method to parse url
 * @param {*} str - string in url need to parse
 * @returns object with url parsed
 */
const parseUrl = (str) => {
    return str.split('&').reduce((obj, pair) => {
        const [key, value] = pair.split('=');
        // cover: &token
        if (!value) {
            return obj;
        };
        deepObj(obj, key.split(/[\[\]]/g).filter(v => v), value);
        return obj;
    }, {});
}

/**
 * deepObj() method to create new object
 * @param {*} obj - object populate url parsed
 * @param {*} keys - key in url
 * @param {*} value - value in url
 */
const deepObj = (obj, keys, value) => {

    let i = 0;
    for (; i < keys.length - 1; i++) {
        let key = keys[i];

        if (!obj[key]) {
            // cover: token[0]=pro&token[1]=basic
            if (keys[i + 1].match(/^\d+$/)) {
                obj[key] = [];
            } else {
                obj[key] = {};
            }
        }

        obj = obj[key];
    }

    obj[keys[i]] = value;
}


console.log(parseUrl("key=yyyy&uid=xxxx&token[0]=pro&token[1]=basic"));
// {
//     key:"yyyy",
//     uid:"xxxx",
//     token:["pro", "basic"]
// }

console.log(parseUrl("key=something&uid=xxxx&sign_version=v.1&sign=yyyyyyyy&token"));
// {
//     key:"something",
//     uid:"xxxx",
//     sign_version:"v.1",
//     sign:"yyyyyyyy"
// }


//===========================================================
/**
 * arrToStr() method to convert array to json string
 * @param {*} arr - target array
 * @returns json string
 */
const arrToJsonStr = (arr) => {
    return JSON.stringify(Object.assign({}, arr));
};

const jsonStrToJsonObj = (jsonStr) => {
    return JSON.parse(jsonStr);
};

const arr = [5, 6, 7, 8];
let jsonStr = arrToJsonStr(arr);  // '{"0":5,"1":6,"2":7,"3":8}'
let jsonObj = jsonStrToJsonObj(jsonStr);

/**
 * slog() method to get supper console log
 * @param {*} obj - object will be passed
 */
function slog(obj) {
    Object.entries(obj).forEach(([key, value]) => console.log(key + ":", value))
}

slog({ jsonObj, jsonStr });
/*
    jsonObj: {0: 5, 1: 6, 2: 7, 3: 8}
    jsonStr: {"0":5,"1":6,"2":7,"3":8}
*/

// OR
console.log({ jsonObj, jsonStr });


// Color Console
const colorize = (...args) => ({
    black: `\x1b[30m${args.join(' ')}`,
    red: `\x1b[31m${args.join(' ')}`,
    green: `\x1b[32m${args.join(' ')}`,
    yellow: `\x1b[33m${args.join(' ')}`,
    blue: `\x1b[34m${args.join(' ')}`,
    magenta: `\x1b[35m${args.join(' ')}`,
    cyan: `\x1b[36m${args.join(' ')}`,
    white: `\x1b[37m${args.join(' ')}`,
    bgBlack: `\x1b[40m${args.join(' ')}\x1b[0m`,
    bgRed: `\x1b[41m${args.join(' ')}\x1b[0m`,
    bgGreen: `\x1b[42m${args.join(' ')}\x1b[0m`,
    bgYellow: `\x1b[43m${args.join(' ')}\x1b[0m`,
    bgBlue: `\x1b[44m${args.join(' ')}\x1b[0m`,
    bgMagenta: `\x1b[45m${args.join(' ')}\x1b[0m`,
    bgCyan: `\x1b[46m${args.join(' ')}\x1b[0m`,
    bgWhite: `\x1b[47m${args.join(' ')}\x1b[0m`
});

// console.log(colorize('Blog anonystick.com', JSON.stringify({data: 1})).red);
// console.log(colorize('Blog anonystick.com', 'Developer js' ).bgCyan);
// console.log(colorize(colorize('Blog anonystick.com').green, colorize('Developer js').magenta).bgWhite);



const players = [
    { name: "huynh duc", job: "programmer", age: "18", hobby: "study" },
    { name: "van quyen", job: "student", age: "8", hobby: "study" },
    { name: "cong vinh", job: "teacher", age: "28", hobby: "play" },
    { name: "anh duc", job: "programmer", age: "19", hobby: "sleep" },
    { name: "cong phuong", job: "cook", age: "38", hobby: "paintting" }
];
//===========================================================
/**
 * searchKeyValue() method to search with key and value
 * @param {*} lists - search target
 * @param {*} key - key for search
 * @param {*} value - value for search
 * @returns search results
 */
function searchKeyValue(lists, key, value) {
    let res = lists.filter(item => item[key] == value);
    return res;
};

// console.log(searchKeyValue(players, "job", "programmer"))



//===========================================================
/**
 * searchKeyValues() method to search with key and multiple value
 * @param {*} lists - search target
 * @param {*} key - key for search
 * @param {*} valueArr - array with more values
 * @returns search results
 */
function searchKeyValues(lists, key, valueArr) {
    let res = lists.filter(item => valueArr.find(i => i === item[key]))
    return res;
};

// console.log(searchKeyValues(players, "job", ['programmer','student']))



//===========================================================
/**
 * searchKeysValue() method to search with more keys value
 * @param {*} lists - search target
 * @param {*} filters - filters to search
 * @returns search result
 */
function searchKeysValue(lists, filters) {
    let key = Object.keys(filters);
    return resArr = lists.filter(item => key.find(k => item[k] == filters[k]))
};

let filters = {
    name: "huynh duc",
    hobby: "paintting"
};

// console.log(searchKeysValue(players, filters))



//===========================================================
/**
 * searchKeysValues() method to search with keys or values
 * @param {*} lists - search target
 * @param {*} filters - filters to search
 * @returns search result
 */
function searchKeysValues(lists, filters) {
    let resArr = [];
    lists.filter((item) => {
        for (let i in filters) {
            for (let j of filters[i]) {
                if (item[i] == j) {
                    resArr.push(item);
                };
            };
        };
    });
    return resArr;
};

let filters = {
    age: [8, 18],
    hobby: ["play", "sleep"],
};

// console.log(searchKeysValues(players, filters));



//===========================================================
/**
 * byteSize() method to count string length with byte
 * @param {*} str - target string
 * @returns size of string
 */
const byteSize = str => new Blob([str]).size;

// byteSize('😀'); // 4
// byteSize('Hello World'); // 11



//===========================================================
/**
 * capitalize() method to capitalize first char
 * @param {*} param0 - first char in string
 * @returns capitalized char
 */
const capitalize = ([first, ...rest]) =>
    first.toUpperCase() + rest.join('');

// capitalize('fooBar'); // 'FooBar'
// capitalize('fooBar', true); // 'Foobar'



//===========================================================
/**
 * capitalizeEveryWord() method to capitalize words
 * @param {*} str - first string in word
 * @returns - capitalized words
 */
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

// capitalizeEveryWord('hello world!'); // 'Hello World!'



//===========================================================
/**
 * deCapitalize() method to de-capitalize string
 * @param {*} param0 - first char in string
 * @returns de-capitalized string
 */
const deCapitalize = ([first, ...rest]) =>
    first.toLowerCase() + rest.join('')

// deCapitalize('FooBar'); // 'fooBar'
// deCapitalize('FooBar'); // 'fooBar'



//===========================================================
/**
 * splitLines() method to break line
 * @param {*} str - target string
 * @returns lines
 */
const splitLines = str => str.split(/\r?\n/);

splitLines('This\nis a\nmultiline\nstring.\n');
// ['This', 'is a', 'multiline', 'string.' , '']



//===========================================================
/**
 * stripHTMLTags() method to remove html tags
 * @param {*} str - html string
 * @returns text
 */
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

// stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>');
// 'lorem ipsum'



//===========================================================
/**
 * sortCharactersInString() method to sort char in string
 * @param {*} str - target string
 * @returns sorted character
 */
const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');

// sortCharactersInString('cabbage'); // 'aabbceg



//===========================================================
/**
 * words() method to convert a string to an array
 * @param {*} str - target string
 * @param {*} pattern - regEx pattern
 * @returns string array
 */
const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);

// words('I love javaScript!!'); // ["I", "love", "javaScript"]
// words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]



// Get Query String Parameters
//===========================================================
const urlParams = new URLSearchParams(window.location.search);

// Assuming "?post=1234&amp;action=edit"
// console.log(urlParams.has('post')); // true
// console.log(urlParams.get('action')); // "edit"
// console.log(urlParams.getAll('action')); // ["edit"]
// console.log(urlParams.toString()); // "?post=1234&amp;action=edit"
// console.log(urlParams.append('active', '1')); // "?post=1234&amp;action=edit&amp;active=1"



//===========================================================
/**
 * readingTime() method to calculate reading time
 */
function readingTime() {
    const text = document.getElementById("article").innerText;
    const wpm = 200;  // words per minute
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    document.getElementById("time").innerText = time;
}
// readingTime();



//===========================================================
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";
/**
 * generatePassword() method to generate password
 * @param {*} length - length of password need to create
 * @param {*} characters - chars
 * @returns string
 */
const generatePassword = (length, characters) => {
    let password = "";
    for (let i = 0; i < length; i++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }
    return password;
};

generatePassword(20, [alpha, numbers, symbols].join(''));
// Output: "ImnWYLbAiGXe7&X55Umf"

//===========================================================
/**
 * isString() method to check if a variable is a string
 * @param {*} value - value need to check
 * @returns true/false
 */
const isString = (value) => {
    return typeof value === 'string' || value instanceof String;
};



//===========================================================
/**
 * isNumber() method to check if a variable is a number
 * @param {*} value - value need to check
 * @returns true/false
 */
const isNumber = (value) => {
    return typeof value === 'number' && isFinite(value);
};



//===========================================================
/**
 * isArray() method to check if a variable is a array
 * @param {*} value - value need to check
 * @returns true/false
 */
const isArray = (value) => {
    return value && typeof value === 'object' && value.constructor === Array;
}
// ES5 actually has a method for this (ie9+)
Array.isArray(value);



//===========================================================
/**
 * formatCash() method to format VND
 * @param {*} str - string number
 * @returns format VND
 */
function formatCash(str) {
    return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev;
    });
};
// console.log(formatCash('1234567890')); // 1,234,567,890



//===========================================================
/**
 * memoize() method to memcached module/app
 * @param {*} func - func
 * @returns - func cached
 */
const memoize = (func) => {
    const cache = new Map();

    return (...args) => {
        const key = args.join('-');

        if (!cache.has(key)) {
            cache.set(key, func(args));
        };

        return cache.get(key);
    };
};

// Example
const fibonacci = (n) => {
    if (n < 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
};
const fibonacciMemo = memoize(fibonacci);
console.time("First run");
fibonacciMemo(42);
console.timeEnd("First run");

console.time("Second run");
fibonacciMemo(42);
console.timeEnd("Second run");

console.time("Third run");
fibonacciMemo(42);
console.timeEnd("Third run");

// First run: 2858.337158203125ms
// Second run: 0.005859375ms
// Third run: 0.003173828125ms



//===========================================================
/**
 * convertArrayToObject() method to convert an array to an object
 * @param {*} array - target array
 * @param {*} key - key in new object
 * @returns object
 */
const convertArrayToObject = (array, key) => {
    const initialValue = {};
    return array.reduce((obj, item) => {
        return {
            ...obj,
            [item[key]]: item,
        };
    }, initialValue);
};

// const arrModified = convertArrayToObject(arr, key);


//===========================================================
/**
 * getMapFromArray() method to convert array to key value javascript
 * @param {*} data - target array
 * @param {*} obj - object will be returned
 * @param {*} item - every item in array
 * @returns - object
 */
const getMapFromArray = data => {
    return data.reduce((obj, item) => {
        obj[item.prop1] = { prop2: item.prop2 };
        return obj
    }, {})
};

// const arrModified = getMapFromArray(arr)
