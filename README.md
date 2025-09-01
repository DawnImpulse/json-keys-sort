

# json-keys-sort
![ts](https://badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555) ![NPM](https://img.shields.io/npm/l/json-keys-sort) ![npm](https://img.shields.io/npm/v/json-keys-sort) [![Build Status](https://app.travis-ci.com/DawnImpulse/json-keys-sort.svg?branch=master)](https://app.travis-ci.com/DawnImpulse/json-keys-sort) [![Coverage Status](https://coveralls.io/repos/github/DawnImpulse/json-keys-sort/badge.svg?branch=master)](https://coveralls.io/github/DawnImpulse/json-keys-sort?branch=master) ![downloads](https://img.shields.io/npm/dt/json-keys-sort.svg) ![install size](https://packagephobia.com/badge?p=json-keys-sort) [![Buy us a tree](https://img.shields.io/badge/Treeware-%F0%9F%8C%B3-lightgreen)](https://plant.treeware.earth/dawnimpulse/json-keys-sort)
> Sorting a json object based on keys either ascending or descending & even recursively

### Latest Changes	(v2.2.0)

- **sortAsync** : Implemented event loop yielding mechanism
- Adding benchmarks
- MIT License

### Installation
`npm install json-keys-sort`
or
`yarn add json-keys-sort`
or
`bun add json-keys-sort`

### Example -
> Note : focus on **keys** not values
~~~~    
const json = require('json-keys-sort');    
var data = {    
               "zoho": 4,    
               "drake": 2,    
               "yogo": {    
                   "jout": "3.2",    
                   "aou": {    
                       "yoyo": "3.1.3",    
                       "aalo": "3.1.1",    
                       "go": "3.1.2"    
                   }    
               },    
               "abc": 1    
           }    

// sync (return sorted data)
json.sort(data, true)    

// async (return promise of sorted data)
json.sortAsync(data, true)
~~~~    

Output will be -
~~~~    
{    
	"abc": 1,    
	"drake": 2,    
	"yogo": {                       
		"aou": {    
			"aalo": "3.1.1",    
			"go": "3.1.2",    
			"yoyo": "3.1.3"                                                 
		},    
		"jout": "3.2"    
	},    
	"zoho": 4    
}  
~~~~    

+ function parameters  (for both **sort** & **sortAsync**)
	- **data:** the json object to sort
	- **sort:**
		- true (default) : ascending sort , since it is default you can only call `json.sort(data)` or `json.sortAsync(data)`
		- false : descending sort

+ The function work recursively and sort all the inner json objects too.

### Versions
+ `v2.2.0`
  + **sortAsync** : Implemented event loop yielding mechanism
  + Adding benchmarks
  + MIT License

+ `v2.1.0`
	+ **sortAsync** : this is a new function which returns a promise

+ `v2.0.0`
	+ New : **100%** code coverage
	+ Improvement : **sort** now throws an error if not provided with an object

+ `v1.3.1`
	+ Bug Fix : Fixed type of parameter in sort function from JSON to object

+ `v1.3.0`
	+ Included support for typescript (added declaration file)

+  `v1.2.0`
	+ Improvement : json array support

+  `v1.1.0`
	+ Bug Fixed : descending sort fix
	+ Improvement: auto build testing via travis-ci

+  `v1.0.1`
	+ Bug Fixed : data null checks & default true fix

+ `v1.0.0`
	+ Initial release - containing basic `sort` function only.


> Pull requests are always welcomed (kindly sign commits with GPG keys. **THANKS**)


### Contact
Twitter - [@dawnimpulse](https://twitter.com/dawnimpulse)  
Email - [dawnimpulse@gmail.com](mailto://dawnimpulse@gmail.com)

### Treeware
This package is [Treeware](https://treeware.earth). If you use it in production, then we ask that you [**buy the world a tree**](https://plant.treeware.earth/dawnimpulse/json-keys-sort) to thank us for our work. By contributing to the Treeware forest you’ll be creating employment for local families and restoring wildlife habitats.


### License (ISC)
~~~~  
MIT License

Copyright (c) 2025 Codevry Labs (Saksham Khurana)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
~~~~