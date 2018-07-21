/*
ISC License

Copyright 2018, Saksham (DawnImpulse)

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted,
provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS,
WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE
OR PERFORMANCE OF THIS SOFTWARE.
*/

// ----- PRIVATE -----

/**
 * Used to check if data type is json or not
 * @param data
 * @return {string}
 */
const typeOf = function (data) {
    const objectConstructor = {}.constructor;
    if (data && data !== null && data.constructor === objectConstructor) {
        return "OBJECT";
    } else {
        return "";
    }
};

// ------ EXPORT -----

/**
 * json sorting based on keys
 * > considering data is a json object only (not array or any thing else)
 * @param data - json to be sorted
 * @param sort - asc (true) / desc (false)
 * @return {{}} - a sorted json object
 */
function jsonSort(data, sort) {
    var newKeys = [],
        keys,
        newData = {};

    if (!sort)
        sort = true;

    keys = Object.keys(data).sort();

    if (!sort) {
        for (var i = keys.length - 1; i >= 0; i--)
            newKeys.push(keys[i])
        keys = newKeys
    }

    for (var j = 0; j < keys.length; j++) {
        var key = keys[j];
        if (typeOf(data[key]) === "OBJECT")
            newData[key] = jsonSort(data[key], sort);
        else
            newData[key] = data[key]
    }

    return newData
}

// exporting with name as sort
exports.sort = jsonSort;