// Set Cookie passing Name, value, days in expire
function cookie_set(name, value, expire_days) {
    var cookie_name = name;
    var expire_date = new Date();
    expire_date.setDate(expire_date.getDate() + expire_days);
    var cookie_value = escape(value) + ((expire_days === null) ? "" : "; expires=" + exdate.toUTCString() + "; path=/");
    document.cookie = cookie_name + "=" + cookie_value;
};

await cookieStore.set({ name: 'anonystick', value: 'https://anonystick.com', domain: 'anonystick.com' });
await cookieStore.get('anonystick');

await cookieStore.set('anonystick', 'https://anonystick.com');
await cookieStore.get('anonystick');

// deleteCookie (only delete after time expires, not delete name directively)
function clearCookie(name, domain, path) {
    var domain = domain || document.domain;
    var path = path || "/";
    document.cookie = name + "=; expires=" + +new Date + "; domain=" + domain + "; path=" + path;
};


await cookieStore.set('anonystick_1', 'Dont reup');
await cookieStore.get('anonystick_1');
await cookieStore.delete({ name: 'anonystick_1' });
await cookieStore.get('anonystick_1');  // null


// addeventlistener cookie with cookieStore
// OLD
var checkCookie = function () {
    var lastCookie = document.cookie; // 'static' memory between function calls
    return function () {
        var currentCookie = document.cookie;
        if (currentCookie != lastCookie) {
            // something useful like parse cookie, run a callback fn, etc.
            lastCookie = currentCookie; // store latest cookie
        }
    };
}();

window.setInterval(checkCookie, 100); // run every 100 ms

// NEW
cookieStore.addEventListener('change', event => {
    console.log(`Tracking events:::::`, event.changed, event.deleted);
});
await cookieStore.set('blog_name', 'anonystick.com');
await cookieStore.delete('blog_name');


// Upload single image Cloudinary With Multer
// Cloud name: xxx
// API Key:xxx
//  API Secret: xxx
// $npm i cloudinary --save
// ModelCloudinary.js
var cloudinary = require('cloudinary').v2;
//lấy trong https://cloudinary.com/console/welcome
cloudinary.config({
    cloud_name: 'xxxx',
    api_key: 'xxxx',
    api_secret: 'xxx'
});

var self = module.exports = {
    uploadSingle: (file) => {
        return new Promise(resolve => {
            cloudinary.uploader.upload(file, {
                folder: 'single'
            })
                .then(result => {
                    if (result) {
                        const fs = require('fs')
                        fs.unlinkSync(file)
                        resolve({
                            url: result.secure_url
                        })
                    }
                })
        })
    },
    uploadMultiple: (file) => {
        return new Promise(resolve => {
            cloudinary.uploader.upload(file, {
                folder: 'home'
            })
                .then(result => {
                    if (result) {
                        const fs = require('fs')
                        fs.unlinkSync(file)
                        resolve({
                            url: result.secure_url,
                            id: result.public_id,
                            thumb1: self.reSizeImage(result.public_id, 200, 200),
                            main: self.reSizeImage(result.public_id, 500, 500),
                            thumb2: self.reSizeImage(result.public_id, 300, 300)
                        })
                    }
                })
        })
    },
    reSizeImage: (id, h, w) => {
        return cloudinary.url(id, {
            height: h,
            width: w,
            crop: 'scale',
            format: 'jpg'
        })
    },
}


// Upload multiple images Cloudinary with Multer
// controllerUpload.js 
'use strict';
const cloudinary = require('./models/ModelCloudinary')
var self = module.exports = {
    uploadSingleFile: async (req, res) => {
        //req.file.path chính là đường dẫn của file khi upload bằng multer
        cloudinary.uploadSingle(req.file.path).then((result) => {
            let imageDetails = {
                imageName: req.body.imageName || '',
                cloudImage: result.url,
                imageId: result.id
            }
        })

        res.json(req.file)
    },
    //up multiple files
    uploadMultipleFiles: async (req, res) => {
        //req.files chính là khi upload multiple images
        let res_promises = req.files.map(file => new Promise((resolve, reject) => {
            cloudinary.uploadMultiple(file.path).then((result) => {
                resolve(result);
            })
        }))

        // Promise.all get imgas
        Promise.all(res_promises)
            .then(async (arrImg) => {
                //arrImg chính là array mà chúng ta đã upload 
                // các bạn có thể sử dụng arrImg để save vào database, hay hơn thì sử dụng mongodb
                res.json(req.files)
            })
            .catch((error) => {
                console.error('> Error>', error);
            })
    },
}


// middleware morgan
const morgan = require('morgan');
app.use(morgan('tiny'));



// middleware camelcase-keys
// FE: input name="first-name"
const camelcaseKeys = require('camelcase-keys')

const camelcase = () => {
    return function (req, res, next) {
        req.body = camelcaseKeys(req.body, { deep: true })
        req.params = camelcaseKeys(req.params)
        req.query = camelcaseKeys(req.query)
        next()
    }
}
app.use(camelcase())

// BE
app.post('/example-camelcase', (req, res) => {
    console.log(req.body)
    res.status(200).json({ elements: req.body.firstName })
})


// middleware omit-empty
const object = {
    null: null,
    undefined: undefined,
    emptyString: '',
    emptyArray: [],
    emptyObject: {},
    filled: 'yay'
}

console.log(omitEmpty(object))
// {
//   filled: 'yay' // nó chỉ lấy thằng này thôi
// }


fetch('/endpoint', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        name: 'Zell',
        skills: ['coding', 'designing', 'writing']
    })
});

if (skills.length) {
    //add database
};

// Cover: "Cannot read property 'length' of undefined "
fetch('/endpoint', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        name: 'Zell'
    })
})


// middlewware omit-empty
const omitEmpty = require('omit-empty')

const removeEmptyProperties = () => {
    return function (req, res, next) {
        req.body = omitEmpty(req.body)
        req.params = omitEmpty(req.params)
        req.query = omitEmpty(req.query)
        next()
    }
}
app.use(removeEmptyProperties())

app.post('/example-omitempty', (req, res) => {
    const { skills } = req.body

    if (skills) {
        // Add skills to database

        return res.json('add database')
    }
    return res.json('skills not avaibale')
})