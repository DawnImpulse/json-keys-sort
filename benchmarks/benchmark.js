
const testData = require('./testData');
const index = require('../index');
const Benchmark = require('benchmark');

function runBenchmark(data, name) {
    return new Promise((resolve) => {
        console.log(`\n=== Benchmarking ${name} ===`);

        const suite = new Benchmark.Suite(name);

        suite.add(name, () => {
            index.sort(data);
        })
            .on('cycle', (event) => {
                console.log(String(event.target));
            })
            .on('complete', function () {
                resolve();
            })
            .run({'async': true});
    });
}

function runSyncBenchmark(data, name) {
    console.log(`\n=== Benchmarking Sync ${name} ===`);

    const suite = new Benchmark.Suite(name);

    suite.add(name, () => {
        index.sort(data);
    })
        .on('cycle', (event) => {
            console.log(String(event.target));
        })
        .run();
}

// Benchmark all test cases
console.log('\n=== Shallow Objects ===');
Object.entries(testData.shallow).forEach(([key, data]) => {
    runSyncBenchmark(data, `Shallow ${key}`);
});

console.log('\n=== Nested Objects ===');
Object.entries(testData.nested).forEach(([key, data]) => {
    runSyncBenchmark(data, `Nested ${key}`);
});

console.log('\n=== Mixed Objects ===');
runSyncBenchmark(testData.mixed, 'Mixed data');

// Async benchmarks
function runAsyncBenchmark(data, name) {
    return new Promise((resolve) => {
        console.log(`\n=== Benchmarking Async ${name} ===`);

        const suite = new Benchmark.Suite(name);

        suite.add(name, {
            defer: true,
            fn: async (deferred) => {
                await index.sortAsync(data);
                deferred.resolve();
            }
        })
            .on('cycle', (event) => {
                console.log(String(event.target));
            })
            .on('complete', function () {
                resolve();
            })
            .run({'async': true});
    });
}

// Run async benchmarks
(async () => {
    console.log('\n=== Async Benchmarks ===');
    await runAsyncBenchmark(testData.shallow.large, 'Large Shallow');
    await runAsyncBenchmark(testData.nested.large, 'Large Nested');
    await runAsyncBenchmark(testData.mixed, 'Mixed Data');
})();