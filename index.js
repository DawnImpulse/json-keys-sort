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

// ------ PUBLIC FUNCTIONS-----

/**
 * json sorting based on keys
 * > considering data is a json object only (not array or anything else)
 * @param data - json to be sorted
 * @param sort - asc (true) / desc (false)
 * @return {{}} - a sorted json object
 */
function jsonSort(data, sort) {

    if (typeOf(data) === "ARRAY") {
        let newData = [];
        for (let w = 0; w < data.length; w++) {
            let d = data[w];
            if (typeOf(d) === "OBJECT" || typeOf(d) === "ARRAY") newData.push(jsonSort(d, sort));
            else newData.push(d)
        }
        return newData
    } else if (typeOf(data) === "OBJECT") {
        let keys = Object.keys(data).sort(), newData = {};

        if (sort === undefined) sort = true;
        if (!sort) keys = keys.reverse();

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
    } else
        throw new Error("must be an object/array")
}

/**
 * Truly async version that yields to event loop during iterations
 * @param data - json to be sorted
 * @param sort - asc (true) / desc (false)
 * @return Promise - promise of sorted json object
 */
async function jsonSortAsync(data, sort) {
    if (typeOf(data) === "ARRAY") {
        let newData = [];
        for (let w = 0; w < data.length; w++) {
            await new Promise(resolve => process.nextTick(resolve));
            let d = data[w];
            if (typeOf(d) === "OBJECT" || typeOf(d) === "ARRAY")
                newData.push(await jsonSortAsync(d, sort));
            else
                newData.push(d);
        }
        return newData;
    } else if (typeOf(data) === "OBJECT") {
        let keys = Object.keys(data).sort(), newData = {};

        if (sort === undefined) sort = true;
        if (!sort) keys = keys.reverse();

        for (let j = 0; j < keys.length; j++) {
            await new Promise(resolve => process.nextTick(resolve));
            let key = keys[j];
            if (typeOf(data[key]) === "OBJECT")
                newData[key] = await jsonSortAsync(data[key], sort);
            else if (typeOf(data[key]) === "ARRAY") {
                newData[key] = [];
                for (let k = 0; k < data[key].length; k++) {
                    await new Promise(resolve => process.nextTick(resolve));
                    let d = data[key][k];
                    if (typeOf(d) === "OBJECT" || typeOf(d) === "ARRAY")
                        newData[key].push(await jsonSortAsync(data[key][k], sort));
                    else
                        newData[key].push(data[key][k]);
                }
            } else
                newData[key] = data[key];
        }
        return newData;
    } else
        throw new Error("must be an object/array");
}

// exporting with name as sort
exports.sort = jsonSort;

// exporting with name as sortAsync
exports.sortAsync = jsonSortAsync;