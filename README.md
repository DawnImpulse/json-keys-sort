  
# json-keys-sort  
[![Build Status](https://travis-ci.org/DawnImpulse/json-keys-sort.svg?branch=master)](https://travis-ci.org/DawnImpulse/json-keys-sort)  
> Sorting a json object based on keys either ascending or descending & even recursively  
  
  
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
  
json.sort(data,true)  
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
  
+ function parameters  
	 - data : the json object to sort
	 - sort : 
		 - true (default) : ascending sort , since it is default you can only call `json.sort(data)`
		 - false : descending sort
> Note : the function assumes that you always provide a json object

+ The function work recursively and sort all the inner json objects too.

### Versions

+ `v1.2.0`
    + Improvement : json array support
+ `v1.1.0`
     + Bug Fixed : descending sort fix
     + Improvement: auto build testing via travis-ci
+ `v1.0.1`
     + Bug Fixed : data null checks & default true fix
+  `v1.0.0`
	 + Initial release - containing basic `sort` function only.

> Pull requests are always welcomed (kindly sign commits with GPG keys. **THANKS**)

  

### Contact

+ Twitter - [@dawnimpulse](https://twitter.com/dawnimpulse)

  

### License (ISC)
~~~~

ISC Licence

  

Copyright 2018 Saksham (DawnImpulse)

  

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted,

provided that the above copyright notice and this permission notice appear in all copies.

  

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL

IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,

INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS,

WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE

OR PERFORMANCE OF THIS SOFTWARE.

~~~~