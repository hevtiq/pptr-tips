// #chakra-ui #components #config
// button.js
const Button = {
    baseStyle: {
        default: {
            border: "none",
            variant: "solid",
            colorScheme: "blue",
            color: "white",
            textAlign: "left",
            pl: 2, // 0.5rem
            _hover: {
                textDecoration: "none",
                border: "1px solid currentColor",
            },
        },
        moreLink: {
            mt: 4, // 1rem
            ml: "20%",
            p: 2, // 0.5rem
            variant: "solid",
            colorScheme: "teal",
            rightIcon: "arrow-forward",
            size: ["xs", null, "md"],
        },
        contactMobile: {
            color: "inherit",
            bg: "transparent",
            border: "1px",
            borderColor: "currentColor",
            ml: "auto",
            mt: 8,
            size: ["2xs", null, null],
        },
        contactDesktop: {
            color: "inherit",
            bg: "transparent",
            border: "1px",
            borderColor: "currentColor",
            textTransform: "capitalize",
            mt: -1,
        },

        navLink: {
            w: ["full", null, null, "auto"],
            p: 3,
            mt: [10, null, null, 0], //  [2.5rem, null, null, 0]
            mr: [null, null, null, 6], // [null, null, null, 1.5rem]
            mb: 2,
            color: "inherit",
            rounded: "5px",
            textTransform: "capitalize",
            textAlign: ["right", null, null, "initial"],
            borderBottom: ["1px solid rgba(255,255,255,0.1)", null, null, "0px"],
            whiteSpace: "nowrap",
        },
    },
}

export default Button;


// footer.js
const footer = {
    baseStyle: {
        color: "inherit",
        maxW: "7xl", //WRAPPER_MAX_WIDTH
        h: ["auto", null, null, 10],
        mx: "auto",
        py: [5, null, null, 10],
        px: 5,
        display: "flex",
        flexDirection: ["column", null, null, "initial"],
        justifyContent: ["space-between", null, null, "space-between"],
        alignItems: "center",
        textAlign: ["center", null, null, "left"],
    },
}

export default footer;


// header.js
const base = {
    py: [6, null, null, 4],
    px: [6, null, null, 1],
    mx: "auto",
    maxW: "7xl", // WRAPPER_MAX_WIDTH
    justify: ["space-between"],
    // align: ["stretch", null, null, "center"],
    wrap: ["wrap", null, null, "nowrap"],
}

const header = {
    baseStyle: {},
    sizes: {},
    variants: {
        base: {
            py: [3, null, null, 3],
            px: [6, null, null, 3],
            maxW: ["3xl", null, null, "7xl"], // WRAPPER_MAX_WIDTH
            mx: "auto",
            justifyContent: ["space-between"],
        },
        mobile: {
            display: ["flex", null, null, "none"],
            flexDirection: "column",
            align: ["stretch"],
            wrap: ["wrap"],
            py: 10,
            flex: 1,
            fontSize: "lg",
            overflow: "hidden",
        },
        desktop: {
            display: ["none", null, null, "flex"],
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: [null, null, null, "center"],
            wrap: ["wrap", null, null, "nowrap"],
            px: 6,
            flex: 1,
            fontSize: [null, null, null, "md"],
            overflow: "hidden",
        },
    },
    defaultProps: {},
}

export default header;


// hero.js

import { linearGradient } from "../../components/chakra-ui"

const hero = {
    parts: ["base", "content", "block"],
    baseStyle: {
        base: {
            h: ["30vh", null, null, "50vh"],
            background: linearGradient(14),
        },
        content: {
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            mx: "auto",
            mt: [12 * 4, "20%", null, 12 * 4],
            maxW: ["5xl", null, null, null, "60%"],
        },
        block: {
            position: "relative",
            mx: 0,
        },
    },
    sizes: {},
    variants: {},
    defaultProps: {},
}

export default hero;


// index.js
import Button from "./buttons"
import header from "./header"
import footer from "./footer"
import hero from "./hero"

export default {
    header,
    footer,
    Button,
    hero,
};


// seo.js
/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import useSiteMetadata from "../hooks/use-site-metadata"

const defaultProps = {
    title: ``,
    tagline: ``,
    description: ``,
    meta: [],
    pathname: ``,
    image: ``,
    children: null,
}

const SEO = ({
    siteTitle,
    siteTagline,
    siteDescription,
    meta,
    pathname,
    siteImage,
    children,
}) => {
    const site = useSiteMetadata()

    const { title, tagline, description, language, siteUrl, author, image } = site

    const seo = {
        title: siteTitle || title,
        tagline: siteTagline || tagline,
        description: siteDescription || description,
        url: `${siteUrl}${pathname || ``}`,
        image: siteImage || `${siteUrl}${image}`,
    }
    return (
        <Helmet
            title={seo.title}
            defaultTitle={siteTitle}
            htmlAttribute={{
                lang: language,
            }}
            titleTemplate={`%s | ${seo.tagline}`}
            meta={[
                {
                    name: `description`,
                    content: seo.description,
                },
                {
                    name: `image`,
                    content: seo.image,
                },
                {
                    name: `og:title`,
                    content: seo.title,
                },
                {
                    name: `og:url`,
                    content: seo.url,
                },
                {
                    name: `og:description`,
                    content: seo.description,
                },
                {
                    name: `og:image`,
                    content: seo.image,
                },
                {
                    name: `og:type`,
                    content: "website",
                },
                {
                    name: `og:image:alt`,
                    content: seo.description,
                },
                {
                    name: `twitter:card`,
                    content: "summary_large_image",
                },
                {
                    name: `twitter:title`,
                    content: seo.title,
                },
                {
                    name: `twitter:url`,
                    content: seo.url,
                },
                {
                    name: `twitter:description`,
                    content: seo.description,
                },
                {
                    name: `twitter:image`,
                    content: seo.image,
                },
                {
                    name: `twitter:image:alt`,
                    content: seo.description,
                },
                {
                    name: `twitter:creator`,
                    content: author,
                },
            ].concat(meta)}
            link={[
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "16x16",
                    href: "/favicon-32x32.png",
                },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "32x32",
                    href: "/favicon-16x16.png",
                },
                {
                    rel: "shortcut icon",
                    type: "image/png",
                    href: "/apple-touch-icon.png",
                },
            ]}
        >
            {children}
            <script
                async
                // src="https://kit.fontawesome.com/900da20747.js"
                src="https://kit.fontawesome.com/888120ac6d.js"
                crossOrigin="anonymous"
                SameSite="None"
                Secure
            />
            <script src="https://unpkg.com/@ungap/custom-elements-builtin" />
            <script type="module" src="https://unpkg.com/x-frame-bypass" />
        </Helmet>
    )
}

export default SEO

SEO.defaultProps = defaultProps;


// use-body-scroll-lock.js
import { useLayoutEffect } from "react"

export const useBodyScrollLock = toggle => {
    useLayoutEffect(() => {
        let originalStyle
        let lockScroll = !toggle ? false : true
        if (lockScroll) {
            originalStyle = window.getComputedStyle(document.body).overflow
            document.body.style.overflow = "hidden"
        }
        return () => (document.body.style.overflow = originalStyle)
    })
};


// use-sitemetadata.js [#gatsby #hooks]
// https://www.typescriptlang.org/play
import { graphql, useStaticQuery } from "gatsby";
const useSiteMetadata = () => {
    var _a, _b;
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          tagline
          description
          language
          siteUrl
          author
          pages {
            label
            path
          }
          socialLinks {
            label
            path
          }
          brandColors {
            primary
            secondary
          }
        }
      }
      file(name: { eq: "fingers-star" }) {
        publicURL
      }
    }
  `);
    return Object.assign(Object.assign({}, (_a = data === null || data === void 0 ? void 0 : data.site) === null || _a === void 0 ? void 0 : _a.siteMetadata), { image: (_b = data === null || data === void 0 ? void 0 : data.file) === null || _b === void 0 ? void 0 : _b.publicURL });
};
export default useSiteMetadata;


// useKeyPress.js
import { useState, useEffect } from "react";

export default function (targetKey, element = window, cb) {
    const [keyPressed, setKeyPressed] = useState(false);

    function downHandler(e) {
        const { key } = e;
        if (key === targetKey) {
            setKeyPressed(true);
            cb && cb()
        }
    }

    const upHandler = e => {
        const { key } = e;
        if (key === targetKey) {
            setKeyPressed(false);
        }
    };

    useEffect(() => {
        let newElement = element.current ? element.current : element;
        // console.log('newElement', newElement)

        newElement.addEventListener("keydown", downHandler);
        newElement.addEventListener("keyup", upHandler);

        return () => {
            newElement.removeEventListener("keydown", downHandler);
            newElement.removeEventListener("keyup", upHandler);
        };
    });

    return keyPressed;
}

/* usage: const upPressed = useKeyPress("ArrowDown", ref, cb) */


// useEventListener.js
import { useEffect } from "react";

export default (target = window, type, listener, ...options) => {
    // console.table({ target, type, ...options });
    // console.log("useListener Ran", type, target);
    useEffect(() => {
        const targetIsRef = target.hasOwnProperty("current");
        const currentTarget = targetIsRef ? target.current : target;
        // console.debug("useListener Effect", currentTarget, targetIsRef);
        if (currentTarget)
            currentTarget.addEventListener(type, listener, ...options);
        console.debug(`🌽useListener added`, currentTarget, type);
        return () => {
            if (currentTarget)
                currentTarget.removeEventListener(type, listener, ...options);
            console.debug("🌽useListener removed", currentTarget, type);
        };
    }, [target, type, listener, options]);
};


// useFocusListener.js
import React, { useState, createContext } from "react";
import useEventListener from "./useEventListener";

export default function useFocusListener(ref, watchers) {
    const [watched, setWatched] = useState(watchers ? watchers : "app");
    const [isFocused, setIsFocused] = useState("");
    const handleListener = e => {
        // listener used to debug focus
        e.preventDefault() && e.persist();
        if (!e.target.id) return console.debug("notarget in listener");
        console.log(`==== mainListener ${e.target.id}===${e.type} === `);
        console.debug("element", document.getElementById(e.target.id));
        console.warn(watched.some(item => item === e.target.id));
        // create useEffect that updates any matches from watched.some to isFocused
    };

    useEventListener(ref, "focusin", handleListener);
    useEventListener(ref, "focusout", handleListener);

    return;
};

// useDebounce.js
import { useEffect, useRef, useState } from "react";

const useDebounce = (value, fn, duration) => {
    const timeoutRef = useRef(setTimeout(() => undefined));
    const [settled, setSettled] = useState(true);
    const [numDebounces, setNumDebounces] = useState(-1);

    useEffect(() => {
        setNumDebounces((num) => num + 1);
        if (numDebounces <= 0) return; // prevents initially unsettled output on component mount...

        clearTimeout(timeoutRef.current);
        setSettled(false);
        timeoutRef.current = setTimeout(() => {
            setSettled(true);
            fn();
        }, duration);

        return () => clearTimeout(timeoutRef.current);
    }, [value, duration]);

    return settled;
};

export default useDebounce;


// useThrottle.js
import { useRef, useState, useEffect, useCallback } from "react";

let useThrottle = (func, limit) => {
    let [args, setArgs] = useState();
    let timer = useRef();
    let throttledFunction = (...args) => {
        setArgs(args || []);
    };

    let newRunTime = useRef(Date.now());
    useEffect(() => {
        if (args === undefined) return;
        let time = newRunTime.current - Date.now();
        if (!timer.current) {
            timer.current = setTimeout(() => {
                newRunTime.current = Date.now() + limit;
                func(...args);
            }, time);
            return () => {
                clearTimeout(timer.current);
                timer.current = undefined;
            };
        }
    }, [func, args, limit]);
    return useCallback(throttledFunction, []);
};

export { useThrottle };

/*
https://github.com/slynch13/useThrottle/blob/master/example/src/App.js
usage:
const throttleDrag = useThrottle((event, item) => {
    event.persist();
    console.log("onDrag", event, item);
    setDragged(item);
    // remove dragged from canvasState ???
}, 200);
*/


// https://gist.github.com/gaurangrshah/bb7635607327511440dc2ca5e2f04851


/**
 * https://gist.github.com/tborychowski/3799025
 */
var UTILS = {
    /*jshint maxlen: 500, onevar: false */

    isTouch: (/iPhone|iPod|iPad/ig).test(navigator.userAgent),

    /**
     * Modified & lintified version of https://gist.github.com/527683
     * @return {mixed}       if IE version number or false
     */
    isIE: (function (i, p, undef) {
        var br = p.getElementsByTagName('br');
        do { p.innerHTML = '<!--[if gt IE ' + (++i) + ']><br><![endif]-->'; } while (br[0]);
        return i > 4 ? i : undef;
    }(3, document.createElement('p'), false)),


    /* better typeof */
    getType: function (obj) { return obj ? Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() : 'undefined'; },


    /**
     *  Converts flat objects, e.g.: { a: 1, b:2, c:[1,2,3] }  to  "a=1&b=2&c=1,2,3"
     */
    objToUrl: function (obj) {
        if (this.getType(obj) !== 'object') return '';
        var a = null, str = [];
        for (a in obj) { if (obj.hasOwnProperty(a)) str.push(window.escape(a) + '=' + window.escape(obj[a])); }
        return str.join('&');
    },

    /**
     * Converts: "?a=1&b=2&c=3"  to  { a:'1', b:'2', c:'3' }
     * @param url {string}			url string to convert
     * @param convert {boolean}		true to convert vars to real types (e.g. '1' to 1, 'true' to true)
     */
    urlToObj: function (url, convert) {
        if (!url || !url.length) return {};
        var params = {}, vars = url.ltrim('\\?').split('&'), pair = null, i = 0, vr = null, n = null, v = null;
        for (; vr = vars[i++];) {
            pair = vr.split('=');
            n = window.unescape(pair[0]);
            v = window.unescape(pair[1]);
            if (v.indexOf(',') > -1) v = v.split(',');																			// if commas in value - split to array
            if (convert) v = this.varToRealType(v);
            if (params[n] === undefined) params[n] = v;																			// if first entry with this name
            else if (typeof params[n] === 'string' || typeof params[n] === 'number') params[n] = [params[n], v];				// if second entry with this name
            else params[n].push(v);																								// if third or more with this name
        }
        return params;
    },

    /**
     * Returns the parameter value from address bar
     * @param param		parameter name
     * @param url		url string can be given
     * @param convert	true to convert vars to real types (e.g. '1' to 1)
     * @returns			parameter value
     */
    getParam: function (param, url, convert) {
        var obj = this.urlToObj(url || location.search, convert);
        if (obj[param] !== undefined) return obj[param];
        return false;
    },


    /**
     * Check whether a string might be a number
     * @param v {string}	a stringified number
     * @returns	{boolean}	true or false
     */
    isNumber: function (v) {
        if (typeof v === 'number') return true;
        if (typeof v !== 'string') return false;
        return (/^[\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?$/).test(v);
    },

    /**
     * Convert string variable to its real type, e.g. '1' to 1
     * @param v		string var
     * @return		typed var
     */
    varToRealType: function (v) {
        var originalv, i = 0, il;
        if (this.isNumber(v)) {
            originalv = v;
            v = parseFloat('' + v);
            if (('' + v) !== originalv) v = originalv;
        }
        else if (v === 'true') v = true;
        else if (v === 'false') v = false;
        if (v === '') v = undefined;
        if (this.getType(v) === 'array') {
            il = v.length;
            for (; i < il; i++) v[i] = this.varToRealType(v[i]);
        }
        return v;
    },


    /**
     * Compares 2 objects
     * @param x	object 1
     * @param y	object 2
     * @returns	true if they are identical, false if they are different
     */
    areObjectsEqual: function (x, y) {
        if (x === y) return true;																								// if both x and y are null or undefined and exactly the same
        if (!(x instanceof Object) || !(y instanceof Object)) return false;														// if they are not strictly equal, they both need to be Objects
        if (x.constructor !== y.constructor) return false;																		// they must have the exact same prototype chain, the closest we can do is test there constructor.
        for (var p in x) {
            if (!x.hasOwnProperty(p)) continue;																					// other properties were tested using x.constructor === y.constructor
            if (!y.hasOwnProperty(p)) return false;																				// allows to compare x[ p ] and y[ p ] when set to undefined
            if (x[p] === y[p]) continue;																						// if they have the same strict value or identity then they are equal
            if (typeof (x[p]) !== 'object') return false;																		// Numbers, Strings, Functions, Booleans must be strictly equal
            if (!this.areObjectsEqual(x[p], y[p])) return false;																// Objects and Arrays must be tested recursively
        }
        for (p in y) if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;												// allows x[ p ] to be set to undefined
        return true;
    },

    /**
     * Checks if object is empty (has no own properties)
     * @param x	object
     * @returns	true if object is empty, false if it has any own properties
     */
    isObjectEmpty: function (x) {
        if (!x || typeof x !== 'object') return true;
        for (var a in x) if (x.hasOwnProperty(a)) return false;
        return true;
    },


    /**
     * Clean empty or null properties from an object
     * @param [required] 1			first parameter is an object to clean
     * @param [optional] 2,3,...	names of additional properties to remove from the object
     * @returns						clean object
     */
    clearProperties: function () {
        if (arguments.length < 1) return {};
        var obj = arguments[0], newO = {}, name = '', val, props = [];
        if (arguments.length > 1) props = Array.prototype.slice.call(arguments, 1);
        for (name in obj) {
            if (!obj.hasOwnProperty(name)) continue;
            val = obj[name];
            if (val === undefined || val === null) continue;																	// if null or undefined
            if (this.getType(val) === 'array' && !val.length) continue;															// if empty array
            if (this.getType(val) === 'object' && this.isObjectEmpty(val)) continue;											// if empty object
            if (typeof val === 'string' && !val.length) continue;																// if empty string
            if (this.inArray(props, name) > -1) continue;																		// if name is in disabled properties list
            newO[name] = val;
        }
        return newO;
    },


    /**
     * Formats numbers (or string numbers)
     * @param number	int or int-parsable string
     * @param prec		decimal precision
     * @returns			formatted number as string
     */
    numberFormat: function (number, prec) {
        var ext, name, numS, rgx = /(\d+)(\d{3})/;
        number = number || '0';
        prec = prec || 0;
        numS = ('' + number).split('.');
        name = numS[0];
        ext = numS[1];
        if (prec > 0) ext = ((ext || '') + new Array(prec + 1).join('0')).substr(0, prec);
        else ext = '';
        while (rgx.test(name)) name = name.replace(rgx, '$1' + ',' + '$2');
        return name + (ext ? '.' + ext : '');
    },


    /**
     * Normalised rand function
     */
    rand: function (max, min) { min = min || 0; return Math.floor(Math.random() * (max - min + 1) + min); },



    inArray: function (a, v) {
        if (this.getType(a) !== 'array') return false;
        var i = 0, e;
        if (typeof v === 'object') { for (i = 0; e = a[i++];) if (this.areObjectsEqual(e, v)) return i - 1; }
        else { for (i = 0; e = a[i++];) if (e === v) return i - 1; }
        return -1;
    },

    removeFromArray: function (a, v) {
        var nA = [], i = 0, el;
        if (typeof v === 'object') { for (; el = a[i++];) if (!this.areObjectsEqual(el, v)) nA.push(el); }
        else { for (; el = a[i++];) if (el !== v) nA.push(el); }
        return nA;
    },

    uniqueArray: function (a) {
        var b = [], l = a.length, i = 0, j;
        for (; i < l; i++) {
            for (j = i + 1; j < l; j++) {
                if (typeof a[i] === 'object' && this.areObjectsEqual(a[i], a[j])) j = ++i;
                else if (a[i] === a[j]) j = ++i;
            }
            b.push(a[i]);
        }
        return b;
    },

    stripTags = function () {
        var tmp = document.createElement('DIV');
        tmp.innerHTML = '' + this;
        return tmp.textContent || tmp.innerText || '';
    },


    decodeEntities: function (str) {
        if (!str) return '';
        if (('' + str).indexOf('&') === -1) return str;
        var d = document.createElement('div');
        if (this.isIE) str = str.replace(/&apos;/g, '&#39');																	// IE does not recognise &apos;
        d.innerHTML = str;
        return d.innerText || d.textContent;
    }
};


/**
 * Manage storage (session or local)
 */
UTILS.Storage = {
    /**
     * Retrieve value from the browser storage
     * @param name		- name of the parameter to get
     * @param val		- value (objects will be serialized) assigned to the name
     * @param storage	- type of the storage: [ session | local ], default: 'session'
     */
    get: function (name, storage) {
        storage = (storage || 'session') + 'Storage';
        if (!window[storage]) return window.log('Browser does not support ' + storage + '!');
        var json = window[storage][name];
        if (json) return JSON.parse(json);
    },

    /**
     * Save value to the browser storage
     * @param name		- name of the parameter to save
     * @param val		- value (objects will be serialized) to assign to the name
     * @param storage	- type of the storage: [ session | local ], default: 'session'
     */
    set: function (name, val, storage) {
        storage = (storage || 'session') + 'Storage';
        if (!window[storage]) return window.log('Browser does not support ' + storage + '!');
        window[storage][name] = JSON.stringify(val);
    },

    del: function (name, storage) {
        storage = (storage || 'session') + 'Storage';
        if (!window[storage]) return window.log('Browser does not support ' + storage + '!');
        if (window[storage][name]) delete window[storage][name];
    }
};





/*** JS OVERRIDES ***************************************************************************************************************/
String.prototype.trim = function (str) { return this.ltrim(str).rtrim(str); };
String.prototype.ltrim = function (str) { if (str) return this.replace(new RegExp('^' + str + '+'), ''); return this.replace(/^\s+/, ''); };
String.prototype.rtrim = function (str) { if (str) return this.replace(new RegExp(str + '+$'), ''); return this.replace(/\s+$/, ''); };
String.prototype.ucfirst = function () { return this.toLowerCase().replace(/\b([a-z])/gi, function (c) { return c.toUpperCase(); }); };

// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
    Object.keys = (function () {
        var hasOwnProp = Object.prototype.hasOwnProperty, hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
            dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'],
            dontEnumsLength = dontEnums.length;
        return function (obj) {
            if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) throw new TypeError('Object.keys called on non-object');
            var result = [], i = 0;
            for (var prop in obj) if (hasOwnProp.call(obj, prop)) result.push(prop);
            if (hasDontEnumBug) for (; i < dontEnumsLength; i++) if (hasOwnProp.call(obj, dontEnums[i])) result.push(dontEnums[i]);
            return result;
        };
    })();
}

// firebug short-cuts
window.log = (window.console && window.console.log && window.console.log.bind) ? window.console.log.bind(window.console) :
    function (e) { window.alert(JSON.stringify(e)); };
window.dir = (window.console && window.console.dir && window.console.dir.bind) ? window.console.dir.bind(window.console) :
    function (e) { window.alert(JSON.stringify(e)); };
/*** JS OVERRIDES ***************************************************************************************************************/


/**
 * Util Create DOM using literal templates
 */
const createElement = tmpl => new DOMParser().parseFromString(tmpl, 'text/html').body.firstChild;

/**
 * Util Object Builder
 */
const builder = (newList = []) => {
    let list = newList;

    return {
        create(item) {
            list = list.push({ ...item, id: new Date().getTime() });

            return list;
        },

        read() {
            return list;
        },

        update(newItem, id) {
            list = list.map(item => {
                if (item.id === id) {
                    return { ...newItem, id: item.id };
                }

                return item;
            });

            return list;
        },

        delete(id) {
            list = list.map(item => {
                if (item.id !== id) {
                    return item;
                }
            }).filter(Boolean);

            return list;
        }
    }
};

/**
 * Get Random Integer passing min and max including the both
 */
const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Shuffle Array
 */
const shuffle = array => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

var isArray = function (obj) {
    return (Object.prototype.toString.call(obj) === '[object Array]');
};

var inArray = function (elem, array) { // TODO add cache to this function
    if (array) {
        for (var i = 0, length = array.length; i < length; i++) {
            if (i in array && array[i] === elem) {
                return i;
            }
        }
    }

    return -1;
};

var isFunc = function (func) {
    return (Object.prototype.toString.call(func) === '[object Function]');
};

var trim = String.prototype.trim ?
    function (text) {
        return text == null ?
            '' :
            String.prototype.trim.call(text);
    } :

    // Otherwise use our own trimming functionality
    function (text) {
        return text == null ?
            '' :
            text.toString().replace(/^\s+/, '').replace(/\s+$/, '');
    };


function clearInput(form) {
    for (elem of form.getElementsByTagName("input")) {
        switch (elem.type.toLowerCase()) {
            case "text":
                elem.value = null;
                break;
            case "checkbox":
                elem.checked = false;
                elem.removeAttribute("checked");
                break;
            default:
                continue;
        }
    }
}

// Common JS Util Functions
var Utils = {
    namespace: function (ns) {
        var nsParts = ns.split(".");
        var root = window;

        for (var i = 0; i < nsParts.length; i++) {
            if (Utils.isUndefined(root[nsParts[i]])) {
                root[nsParts[i]] = {};
            }
            root = root[nsParts[i]];
        }

    },

    isUndefined: function (ob) {
        return typeof ob === "undefined";
    },

    isDefined: function (ob) {
        return !Utils.isUndefined(ob);
    },

    inArray: function (value, arr) {
        return arr.indexOf(value) === -1 ? false : true;
    },

    pluralize: function (length, title) {
        if (length > 1 || length === 0) {
            return length + " " + title + "s";
        }
        return length + " " + title;

    },

    objectIterator: function (obj, func) {
        var rtn = [];

        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                rtn.push(func(key, obj[key]));
            }
        }

        return rtn;
    },

    serializeUrl: function (ob) {
        var paramString = "";
        for (var param in ob) {
            if (Utils.isArray(ob[param])) {
                Utils.forEach(ob[param], function (arrayParam) {
                    paramString += "&" + param + "=" + arrayParam;
                });
            }
            else {
                paramString += "&" + param + "=" + ob[param];
            }
        }
        return paramString;
    },

    deserializeUrl: function (url) {
        var urlParameterStrings = url.substr(url.indexOf("?") + 1);
        return urlParameterStrings.split("&").filter(function (ob) {
            return ob != null && ob != "";
        });
    },

    size: function (obj) {
        var size = 0;
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                size++;
            }
        }
        return size;
    },

    ellipsis: function (value, len, word) {
        if (value && value.length > len) {
            if (word) {
                var vs = value.substr(0, len - 2),
                    index = Math.max(vs.lastIndexOf(' '), vs.lastIndexOf('.'), vs.lastIndexOf('!'), vs.lastIndexOf('?'));
                if (index === -1 || index < (len - 15)) {
                    return value.substr(0, len - 3) + "...";
                } else {
                    return vs.substr(0, index) + "...";
                }
            } else {
                return value.substr(0, len - 3) + "...";
            }
        }
        return value;
    },

    padNumber: function (num, len) {
        var num = new String(num);
        while (num.length < len) {
            num = "0" + num;
        }
        return num;
    },

    fileSize: function (size) {
        if (size < 1024) {
            return size + " bytes";
        } else if (size < 1048576) {
            return (Math.round(((size * 10) / 1024)) / 10) + " KB";
        } else {
            return (Math.round(((size * 10) / 1048576)) / 10) + " MB";
        }
    }

};

// cookie_util.js
var CookieUtil = {

    get: function (name) {
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null,
            cookieEnd;

        if (cookieStart > -1) {
            cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        }

        return cookieValue;
    },

    set: function (name, value, expires, path, domain, secure) {
        var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        if (expires instanceof Date) {
            cookieText += "; expires=" + expires.toGMTString();
        }

        if (path) {
            cookieText += "; path=" + path;
        }

        if (domain) {
            cookieText += "; domain=" + domain;
        }

        if (secure) {
            cookieText += "; secure";
        }

        document.cookie = cookieText;
    },

    unset: function (name, path, domain, secure) {
        this.set(name, "", new Date(0), path, domain, secure);
    }

};


/**
 * Useful common operations wrttien in vanilla JS. Found, borrowed, created and modified from various sources on the internet.
 */

/**
 * Helper to test if an element has a given class
 * @param {*} el Element to test
 * @param {*} className Class to test
 */
function hasClass(el, className) {
    if (el.classList)
        return el.classList.contains(className);
    else
        return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

/**
 * Helper to add a class to an element
 * @param {*} el Element to add class to
 * @param {*} className Class to be added
 */
function addClass(el, className) {
    if (el.classList)
        el.classList.add(className);
    else if (!hasClass(el, className)) el.className += " " + className;
}

/**
 * Helper to remove a class from an element
 * @param {*} el Element to remove class from
 * @param {*} className Class to be removed
 */
function removeClass(el, className) {
    if (el.classList)
        el.classList.remove(className);
    else if (hasClass(el, className)) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}

/**
 * Helper to add an event listener to an element
 * @param {*} el Element to add a listener to
 * @param {*} eventList Space separated event list
 * @param {*} callback Function to be executed when event is triggered
 */
function addListenerToEvents(el, eventList, callback) {
    eventList.split(' ').forEach(function (event) {
        el.addEventListener(event, callback);
    });
}

/**
 * Helper to add an event listener to an element
 * @param {*} el Element to remove listeners from
 * @param {*} eventList Space separated event list
 * @param {*} callback Function to be executed when event is triggered
 */
function removeListenerFromEvents(el, eventList, callback) {
    eventList.split(' ').forEach(function (event) {
        el.removeEventListener(event, callback);
    });
}

/**
 * Helper to add multiple on load events to the page
 * @param {*} func to be added to load time execution 
 */
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}

/**
 * Helper to get the pixels value of 1rem
 * @param {DOM element} parentElement 
 */
function getDefaultFontSize(parentElement) {
    parentElement = parentElement || document.body;
    var div = document.createElement('div');
    div.style.width = "1000rem";
    parentElement.appendChild(div);
    var pixels = div.offsetWidth / 1000;
    parentElement.removeChild(div);
    return pixels;
}

/**
 * Helper to truncate text to fit into a given width over a specified number of lines
 * @param {string} text Text to truncate
 * @param {string} oneChar Average width of one character in px
 * @param {number} pxWidth Width of the container (adjusted for padding)
 * @param {number} lineCount Number of lines to span over
 */
function truncateTextForDisplay(text, oneChar, pxWidth, lineCount, pad) {
    var ellipsisPadding = isNaN(pad) ? 0 : pad;
    var charsPerLine = Math.floor(pxWidth / oneChar);
    var allowedCount = (charsPerLine * (lineCount)) - ellipsisPadding;
    return text.substr(0, allowedCount) + "...";
}


/**
 * Helper to get the average width of a character in px
 * NOTE: Ensure this is used only AFTER font files are loaded (after page load)
 * @param {DOM element} parentElement 
 * @param {string} fontSize 
 */
function getAverageCharacterWidth(parentElement, fontSize) {
    var textSample = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()";
    parentElement = parentElement || document.body;
    fontSize = fontSize || "1rem";
    var div = document.createElement('div');
    div.style.width = "auto";
    div.style.height = "auto";
    div.style.fontSize = fontSize;
    div.style.whiteSpace = "nowrap";
    div.style.position = "absolute";
    div.innerHTML = textSample;
    parentElement.appendChild(div);

    var pixels = Math.ceil((div.clientWidth + 1) / textSample.length);
    parentElement.removeChild(div);
    return pixels;
}


/**
 * 1. bytesToSize
 * 2. getAllFiles
 * 3. createWorker
 */

function bytesToSize(bytes, prec = 2) {
    if (Number.isNaN(parseInt(bytes, 10))) return bytes;

    if (bytes < 1024) return `${parseInt(bytes, 10)} B`;

    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${(bytes / k ** i).toFixed(prec)} ${sizes[i]}`;
}

async function getAllFiles(dir) {
    const subdirs = await readdir(dir);
    const files = await Promise.all(
        subdirs.map(async subdir => {
            const res = resolve(dir, subdir);
            const fileStat = await stat(res);

            return fileStat.isDirectory() ? getAllFiles(res) : res;
        })
    );

    return files.reduce((a, f) => a.concat(f), []);
}

function createWorker(func) {
    const blob = new Blob([`(${func.toString()})()`]);
    const url = window.URL.createObjectURL(blob);
    const worker = new Worker(url);

    return worker;
}

// Auth Utils code snippet for client/src/utils/auth.js
// auth.js
import axios from 'axios';

export const setAuthHeaders = (headers) => {
    if (headers['access-token']) {
        axios.defaults.headers.common['access-token'] = headers['access-token']
        axios.defaults.headers.common['token-type'] = headers['token-type']
        axios.defaults.headers.common['client'] = headers['client']
        axios.defaults.headers.common['expiry'] = headers['expiry']
        axios.defaults.headers.common['uid'] = headers['uid']
    }
}

export const validateToken = () => {
    axios.get('/api/auth/validate_token', {
        'uid': axios.defaults.headers.common['uid'],
        'client': axios.defaults.headers.common['client'],
        'access-token': axios.defaults.headers.common['access-token']
    }).then(res => {
        return res.data.data;
    }).catch(res => {
        return false;
    });
}

const asyncUpdate = (selector, val) =>
    new Promise((resolve, _) => {
        $(selector).val(val);
        resolve();
    });

const getText = (selector) => $(selector).text().trim();

const getValue = (selector) => $(selector).val().trim();

const isMatchRegex = (re, val) => {
    if ($.type(val) !== 'string') throw new Error('Value should be a string');
    return re.test(val);
};

const range = (length, callback = Number) =>
    Array.apply(null, { length }).map(Number.call, callback);

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};


// JS Utils, ie7+ and good browsers
(function (window) {
    window.jsUtil = {
        normalizeEvent: function (e) {
            e = e || window.event; // ie7&8
            if (!e.preventDefault) {
                e.preventDefault = function () {
                    e.returnValue = false; // ie7&8
                };
            }
            if (!e.stopPropagation) {
                e.stopPropagation = function () {
                    e.cancelBubble = true; // ie7&8
                };
            }
            if (!e.target) {
                e.target = e.srcElement; // ie7&8
            }
            return e;
        },

        addHandler: function (el, type, handler) {
            if (el.addEventListener) {
                el.addEventListener(type, handler, false);
            } else if (el.attachEvent) {
                el.attachEvent("on" + type, handler);
            } else {
                throw new Error('u need new browser');
            }
        },

        removeHandler: function (el, type, handler) {
            if (el.removeEventListener) {
                el.removeEventListener(type, handler, false);
            } else if (el.detachEvent) {
                el.detachEvent("on" + type, handler);
            } else {
                throw new Error('u need new browser');
            }
        },

        hasClass: function (el, className) { },
        addClass: function (el, className) { },
        removeClass: function (el, className) { }
    }
})(window);


/// ----------------------------------------------------------------------------------------------- ///
/// ----------------------------------- JS útil ----------------------------------------- ///
///------------------------------------------------------------------------------------------------ ///
var pararEvento = true;
///------------------------------------------------------------------------------------------------ ///

function imprimirDiv(printThis) {

    var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

    if (is_chrome == true) {
        printThis = document.getElementById(printThis).innerHTML;
        var win = null;
        win = window.open();
        self.focus();
        win.document.open();
        win.document.write('<' + 'html' + '><' + 'head' + '><' + 'style' + '>');
        win.document.write('body, td { font-family: Arial; font-size: 10pt;}');
        win.document.write('<' + '/' + 'style' + '><' + '/' + 'head' + '><' + 'body' + '>');
        win.document.write(printThis);
        win.document.write('<' + '/' + 'body' + '><' + '/' + 'html' + '>');
        win.document.close();
        win.print();
        win.close();
    }
    else {

        var prtContent = document.getElementById(printThis);
        var WinPrint = window.open('', '', 'letf=0,top=0,width=600,height=700,toolbar=0,scrollbars=0,status=0');
        WinPrint.document.write(prtContent.innerHTML);
        WinPrint.document.close();
        WinPrint.focus();
        WinPrint.print();
        WinPrint.close();
        prtContent.innerHTML = strOldOne;
    }
}


// FUNÇÃO: PopUp
// Descrição: Abre uma janela popup centralizada na tela com o tamanho especificado nos parametros
// Parametros:
// _arquivo: Arquivo que deve ser aberto no PopUp
// _nome: Nome da Janela
// _width: Largura da Janela
// _height: Altura da Janela
// _scr: 0 = Sem Scroll  |  1 = Com Scroll
function PopUp(_arquivo, _nome, _width, _height, _scr) {
    var arquivo = _arquivo;
    var nome = _nome;
    var width = _width;
    var height = _height;
    var scr = _scr;

    window.open(arquivo, nome, "width=" + width + ",height=" + height + ",top=" + ((screen.height / 2) - (height / 2) - 50) + ",left=" + ((screen.width / 2) - (width / 2)) + ",toolbar=0,location=0,directories=0,resizable=1,status=0,,scrollbars=" + scr + ",menubar=0");
}

function PopUpModal(_arquivo, _nome, _width, _height, _scr) {
    var arquivo = _arquivo;
    var nome = _nome;
    var width = _width;
    var height = _height;
    var scr = _scr;

    if (window.showModalDialog) {
        window.showModalDialog(arquivo, nome, "dialogWidth:" + width + "px;dialogHeight:" + height + "px");
    } else {
        window.open(arquivo, nome, "width=" + width + ",height=" + height + ",top=" + ((screen.height / 2) - (height / 2) - 50) + ",left=" + ((screen.width / 2) - (width / 2)) + ",toolbar=0,location=0,directories=0,resizable=1,status=0,,scrollbars=" + scr + ",menubar=0");
    }
}

// FUNÇÃO: showObj
// DESCRIÇÃO: Função utilizada para mostrar ou esconder um Objeto na tela.
// PARAMETROS:
// _obj: Nome do objeto que sofrerá interferencia da função.
// _acao: 0 = Esconder | 1 = Mostrar
function showObj(_obj, _acao) {
    var obj = document.getElementById(_obj);
    var acao = _acao;

    if (acao == 0) {
        obj.style.display = 'none';
    }
    else {
        obj.style.display = '';
    }
}


// FUNCÃO: verificaCliqueFora
// DESCRIÇÃO: Verifica os cliques dados fora do DIV
// PARAMETROS:
// ev: Evento
// _obj: Objeto que deve ser verificado se o clique foi fora dele.
function verificaCliqueFora(ev, _obj) {
    var obj = document.getElementById(_obj);
    if (obj) {
        var ox = parseInt(obj.style.left);
        var oy = parseInt(obj.style.top);
        var ow = parseInt(obj.style.width);
        var oh = parseInt(obj.style.height);

        var ex = ev.clientX;
        var ey = ev.clientY + document.body.scrollTop;

        if ((ex > (ox + ow)) || (ex < ox) || (ey > (oy + oh)) || (ey < oy)) {
            obj.style.display = 'none';
            return true;
        }
    }
    return false;
}


function cliqueGlobal(ev, _arrayObj) {
    if (!pararEvento) {
        var i;
        if (_arrayObj) {
            for (i = 0; i < _arrayObj.length; i++) {
                verificaCliqueFora(ev, _arrayObj[i]);
            }
        }
    }
    pararEvento = false;
}


// FUNCÃO: doSubmit
// DESCRIÇÃO: Executa um Submit na página no lugar de um Refrash.
function doSubmit() {
    if (document.Form1)
        document.Form1.submit();
    else
        document.forms[0].submit();
}

// FUNCÃO: OpenerDoSubmit
// DESCRIÇÃO: Executa um Submit na página que originou um POPUP.
function OpenerDoSubmit() {
    if (opener.document.Form1)
        opener.document.Form1.submit();
    else
        opener.document.forms[0].submit();
}

// FUNCÃO: mostraDiv
// DESCRIÇÃO: Torna um DIV visível.
// PARAMETROS:
// ev: Evento
// _obj: id do DIV
function mostraDiv(ev, _obj) {
    pararEvento = true;
    var obj = document.getElementById(_obj);
    var wObj = parseInt(obj.style.width);
    var pX = (ev.clientX - wObj);

    if (pX < 0)
        pX = ev.clientX;
    obj.style.left = pX + 'px';

    //obj.style.left = '500px';
    obj.style.top = (ev.clientY + document.body.scrollTop + 10) + 'px';
    obj.style.display = '';
    pararEvento = true;
}

function mostraEscondeDiv(ev, _obj) {
    pararEvento = true;
    var obj = document.getElementById(_obj);
    var wObj = parseInt(obj.style.width);

    var pX = (ev.clientX - wObj);

    if (pX < 0)
        pX = ev.clientX;

    obj.style.left = pX + 'px';
    obj.style.top = (ev.clientY + document.body.scrollTop + 10) + 'px';

    if (obj.style.display == 'none')
        obj.style.display = 'block';
    else
        obj.style.display = 'none';
    pararEvento = true;
}

// FUNCÃO: mostraDivAbaixo
// DESCRIÇÃO: Torna um DIV visível abaixo do clique.
// PARAMETROS:
// ev: Evento
// _obj: id do DIV
function mostraDivAbaixo(ev, _obj) {
    pararEvento = true;

    var obj = document.getElementById(_obj);

    var w = parseInt(obj.style.width);

    var evx = parseInt(ev.clientX);
    var evy = parseInt(ev.clientY);

    var scl = document.body.scrollLeft;

    var sw = document.body.offsetWidth;

    //alert(w + ',' + evx + ',' + evy + ' <-> ' + scl + ',' + sw);

    if ((w + evx) > (sw + scl))
        //obj.style.left = (evx - w) + 'px';
        obj.style.left = (sw + scl - w - 50) + 'px';
    else
        obj.style.left = (evx - (w / 2) + scl) + 'px';

    obj.style.top = (ev.clientY + parseInt(document.body.scrollTop) + 10) + 'px';
    obj.style.display = '';

    pararEvento = true;
}

// FUNÇÃO: mostraEsconde
// DESCRIÇÃO: Função utilizada para mostrar ou esconder um TD em listagens.
// PARAMETROS:
// _obj: Nome do objeto que sofrerá interferencia da função.
function mostraEsconde(_obj) {
    var obj = document.getElementById(_obj);
    if (obj.style.display == 'none')
        obj.style.display = 'block';
    else
        obj.style.display = 'none';
}

function mostra(_obj) {
    var obj = document.getElementById(_obj);
    obj.style.display = '';
}
function esconde(_obj) {
    var obj = document.getElementById(_obj);
    obj.style.display = 'none';
}


//Função para pegar a posição de um objeto na tela.
//ex: getPosicaoElemento('id_objeto').left;  Pega o left
//ex: getPosicaoElemento('id_objeto').top;   Pega o top
function getPosicaoElemento(elemID) {
    var offsetTrail = document.getElementById(elemID);
    var offsetLeft = 0;
    var offsetTop = 0;
    while (offsetTrail) {
        offsetLeft += offsetTrail.offsetLeft;
        offsetTop += offsetTrail.offsetTop;
        offsetTrail = offsetTrail.offsetParent;
    }
    if (navigator.userAgent.indexOf("Mac") != -1 && typeof document.body.leftMargin != "undefined") {
        offsetLeft += document.body.leftMargin;
        offsetTop += document.body.topMargin;
    }
    return { left: offsetLeft, top: offsetTop };
}


function setValue(_obj, _valor) {
    var obj = document.getElementById(_obj);
    obj.value = _valor;
}

function getValue(_obj) {
    var obj = document.getElementById(_obj);
    return obj.value;
}

function trataTextoGrande(IDObj, maxLength, texto) {
    var obj = document.getElementById(IDObj);
    if (obj != null) {
        var reduzido = texto;
        if (texto.length > maxLength) {
            reduzido = texto.substr(0, maxLength);
            obj.innerHTML = reduzido + '...';
        }
        else {
            obj.innerHTML = texto;
        }
    }
}

function tooltip(ev, IDTooltip, texto) {
    obj = document.getElementById(IDTooltip);
    if (obj != null) {
        if (texto != null) {
            obj.innerHTML = '&nbsp;' + texto + '&nbsp;';
            //obj.style.display = 'block';
            mostraDivAbaixo(ev, IDTooltip);
        }
        else {
            obj.innerHTML = '';
            obj.style.display = 'none';
        }
    }
}

// FUNÇÃO: UnLoad
// DESCRIÇÃO: Função utilizada no UnLoad de um POPUP para dar Submit na página que o originou.
function UnLoad() {
    if (opener.document.location.indexOf("index.aspx") == -1) {
        opener.document.forms[0].submit();
    }
}

// FUNÇÃO: wFocus
// DESCRIÇÃO: Função utilizada no Load de de um POPUP para dar FOCO na janela do Popup.
function wFocus() {
    window.focus();
}

/* Janela Modal */
/* ------------ 
i = ID da janela modal
colocar o iframe <iframe src="modal_grade.htm" frameborder="0" id="modal_grade"></iframe>
------------ */
function abreModal(i) {
    document.getElementById("modalGrade").style.display = "block";
    document.getElementById(i).style.display = "block";
    var altTela = Math.floor(document.body.offsetHeight);
    var largTela = Math.floor(document.body.offsetWidth);
    var largDiv = Math.floor(document.getElementById(i).offsetWidth);
    var altDiv = Math.floor(document.getElementById(i).offsetHeight);
    document.getElementById("modalGrade").style.height = altTela + "px";
    document.getElementById("modalGrade").style.width = largTela + "px";
    document.getElementById(i).style.left = ((largTela / 2) - (largDiv / 2)) + "px";

    var vScrollY = 0;

    if (document.all) {
        if (!document.documentElement.scrollTop) {
            vScrollY = document.body.scrollTop;
        }
        else {
            vScrollY = document.documentElement.scrollTop;
        }
    }
    else {
        vScrollY = window.pageYOffset;
    }

    document.getElementById(i).style.top = ((screen.availHeight / 2) + vScrollY - (altDiv / 2)) + "px";

    for (j = 0; j < document.getElementById(i).getElementsByTagName('input').length; j++) {
        if (document.getElementById(i).getElementsByTagName('input')[j].type == 'text') {
            document.getElementById(i).getElementsByTagName('input')[j].focus();
            break;
        }
    }
}

function fechaModal(i) {
    document.getElementById("modalGrade").style.display = "none";
    document.getElementById(i).style.display = "none";
    //document.getElementById("ad_Full").style.display = "block";
    //document.getElementById("BarraHiRes").style.display = "block";
}

//End Janela Modal

function refresh(janela) {
    //alert(janela.location.href);
    var url = janela.location.href;
    var i = url.indexOf('&rand=');
    if (i != -1)
        url = url.substring(0, i);
    janela.location.href = url + '&rand=' + Math.random();
}

function isNum(caractere) {
    var strValidos = "0123456789";

    if (strValidos.indexOf(caractere) == -1)
        return false;

    return true;
}

//contador de caracters
function Max(txarea, total, spanResto) {

    tam = txarea.value.length;

    str = "";

    str = str + tam;

    //Digitado.innerHTML = str; 

    spanResto.innerHTML = total - str;



    if (tam > total) {

        aux = txarea.value;

        txarea.value = aux.substring(0, total);

        //Digitado.innerHTML = total; 

        spanResto.innerHTML = 0;

    }

}
function formatar_mascara(src, mascara) {
    var campo = src.value.length;
    var saida = mascara.substring(0, 1);
    var texto = mascara.substring(campo);

    if (texto.substring(0, 1) != saida) {
        src.value += texto.substring(0, 1);
    }
}


function validaCampoNumerico(campo, event) {
    var BACKSPACE = 8;
    var key;
    var tecla;
    CheckTAB = true;

    if (navigator.appName.indexOf("Netscape") != -1)
        tecla = event.which;
    else
        tecla = event.keyCode;

    key = String.fromCharCode(tecla);

    //alert( 'key: ' + tecla + ' -> campo: ' + campo.value); 
    if (tecla == 13)
        return false;

    if (tecla == BACKSPACE)
        return true;

    return (isNum(key));
}

/* Função para animação da Janela(hide/show) */
//
// --------------------  xhtml --------------------------------
//Manter esta lógica no xhtml
// Ex.:    <div class="grid_5">
//                    <div class="box VARIAVEL">
//                    <h2>
//                        <a href="#" id="toggle-VARIAVEL"></a>
//                     </h2>
//                    
//                    <div class="block" id="VARIAVEL">
/**********************************************************************/

var funcoesespeciais = {
    Toggle: function () {
        var default_hide = { "grid": true };
        $.each(
            //nomes dos ids para aplicar o efeito toggle
            ["wgetChamados", "wgetServicos", "wgetComunicados", "wgetReclamacao", "wgetAlerta", "dadosChamados", "novaInteracao", "anexos", "interacoeschamados", "procedimento", "tableChamadoInicio", "contatosAceiteRisco", "wgetAlarmes", "wgetTarefas"],

            function () {
                var selecao = $("#" + this);
                if (default_hide[this]) {
                    selecao.hide();
                    $("[id='toggle-" + this + "']").addClass("hidden")
                }
                $("[id='toggle-" + this + "']")
                    .bind("click", function (e) {
                        if ($(this).hasClass('hidden')) {
                            $(this).removeClass('hidden').addClass('visible');
                            selecao.slideDown();
                        } else {
                            $(this).removeClass('visible').addClass('hidden');
                            selecao.slideUp();
                        }
                        //para afirmar que n é uma âncora
                        e.preventDefault();
                    });
            }
        );
    }
}



//procura a id com togle e dispara a função lá de cima.
jQuery(function ($) {
    if ($("[id^='toggle']").length) { funcoesespeciais.Toggle(); }
});





//Função para Adicionar e Remover linhas
//ex: ChamadoApInteracao.aspx

$(document).ready(function () {
    $('#btnAdd').click(function () {
        var num = $('.clonedInput').length;
        var newNum = new Number(num + 1);

        var newElem = $('#input' + num).clone().attr('id', 'input' + newNum).attr('value', '');

        newElem.children(':first').attr('id', 'name' + newNum).attr('name', 'name' + newNum);
        $('#input' + num).after(newElem);
        $('#btnDel').attr('disabled', '');

        if (newNum == 5)
            $('#btnAdd').attr('disabled', 'disabled');
    });

    $('#btnDel').click(function () {
        var num = $('.clonedInput').length;

        $('#input' + num).remove();
        $('#btnAdd').attr('disabled', '');

        if (num - 1 == 1)
            $('#btnDel').attr('disabled', 'disabled');
    });

    $('#btnDel').attr('disabled', 'disabled');
});


// FUNÇÃO: ImprimeEsteDocumento
// DESCRIÇÃO: Função para Impressão de documento.

function ImprimeEsteDocumento() {
    if (!window.print) {
        alert("Netscape, Internet Explorer 4.0 ou superior!")
        return
    }
    window.print();
}


//FUNÇÃO: Adicionar e Remover linhas
//DESCRIÇÃO: Adiciona e remove a linha em si independente da ordem.

$(function () {
    function removeCampo() {
        $(".removerCampo").unbind("click");
        $(".removerCampo").bind("click", function () {
            if ($("tr.linhas").length > 1) {
                $(this).parent().parent().remove();
            }
        });
    }

    $(".adicionarCampo").click(function () {
        novoCampo = $("tr.linhas:first").clone();
        novoCampo.find("input").val("").fadeIn("slow");
        novoCampo.insertAfter("tr.linhas:last");
        removeCampo();
    });
});


//FUNÇÃO: Estilizar Campos de formulário, para tirar o formato padrão.
//DESCRIÇÃO: Adiciona e remove a linha em si independente da ordem.

//$(function() {
//      $("select, input:checkbox, input:radio, input:file").uniform();              
// });

function FormataCnpj(campo, teclapres) {
    var tecla = teclapres.keyCode;
    var vr = new String(campo.value);
    vr = vr.replace(".", "");
    vr = vr.replace("/", "");
    vr = vr.replace("-", "");
    tam = vr.length + 1;
    if (tecla != 14) {
        if (tam == 3)
            campo.value = vr.substr(0, 2) + '.';
        if (tam == 6)
            campo.value = vr.substr(0, 2) + '.' + vr.substr(2, 5) + '.';
        if (tam == 10)
            campo.value = vr.substr(0, 2) + '.' + vr.substr(2, 3) + '.' + vr.substr(6, 3) + '/';
        if (tam == 15)
            campo.value = vr.substr(0, 2) + '.' + vr.substr(2, 3) + '.' + vr.substr(6, 3) + '/' + vr.substr(9, 4) + '-' + vr.substr(13, 2);
    }
}



//FUNÇÃO: Apresentar outra fonte não padrão no site.
//DESCRIÇÃO: [ google.com/webfonts ]

WebFontConfig = {
    google: { families: ['Arimo::latin'] }
};
(function () {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();



function chkOcultaPassagem() {
    var els = document.getElementsByClassName('tableInteracaoPassagemdeTurno');
    for (var i = 0; i < els.length; ++i) {
        var s = els[i].style;
        s.display = s.display === 'none' ? 'block' : 'none';
    };
}
