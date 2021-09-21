/*
ISC License

Copyright 2021, Saksham Khurana (DawnImpulse)

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
    const arrayConstructor = [].constructor;
    const stringConstructor = 'test'.constructor;
    if (data && data !== null && data.constructor === objectConstructor) {
        return "OBJECT";
    } else if (data && data !== null && data.constructor === arrayConstructor) {
        return "ARRAY";
    } else if (data && data !== null && data.constructor === stringConstructor) {
        return "STRING";
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

    if (typeOf(data) === "ARRAY") {
        let newData = [];
        for (let w = 0; w < data.length; w++) {
            let d = data[w];
            if (typeOf(d) === "OBJECT" || typeOf(d) === "ARRAY")
                newData.push(jsonSort(d, sort));
            else {
                newData.push(d)
            }
        }
        return newData
    } else if (typeOf(data)=== "OBJECT") {
        let newKeys = [],
            keys,
            newData = {};

        if (sort === undefined)
            sort = true;

        keys = Object.keys(data).sort();

        if (!sort) {
            for (let i = keys.length - 1; i >= 0; i--)
                newKeys.push(keys[i])
            keys = newKeys
        }

        for (let j = 0; j < keys.length; j++) {
            let key = keys[j];
            if (typeOf(data[key]) === "OBJECT")
                newData[key] = jsonSort(data[key], sort);
            else if (typeOf(data[key]) === "ARRAY") {
                newData[key] = [];
                for (let k = 0; k < data[key].length; k++) {
                    let d = data[key][k];
                    if (typeOf(d) === "OBJECT" || typeOf(d) === "ARRAY")
                        newData[key].push(jsonSort(data[key][k], sort));
                    else
                        newData[key].push(data[key][k])
                }
            } else
                newData[key] = data[key]
        }

        return newData
    }
    else
        throw new Error("must be an object/array")
}

/**
 * just like normal sort but returns promise
 * @param data - json to be sorted
 * @param sort - asc (true) / desc (false)
 * @return Promise - promise of sorted json object
 */
async function jsonSortAsync(data, sort){
    return new Promise((resolve, reject) => {
        try{
            const response = jsonSort(data,sort)
            resolve(response)
        }catch (e) {
            reject(e)
        }
    })
}

// exporting with name as sort
exports.sort = jsonSort;

// exporting with name as sortAsync
exports.sortAsync = jsonSortAsync;