const chai = require('chai');
const chaiAsPromised = require("chai-as-promised")
const rewire = require("rewire");
const index = require('../index');
const main = rewire('../index');
const expect = chai.expect;
chai.should();
chai.use(chaiAsPromised);

describe('asc & desc tests', () => {
    let json0, json1, json2, json3;
    before(() => {
        json0 = {
            "go": 0,
            "zebra": 0,
            "apple": 0,
            "mango": 0
        };
        json1 = {
            "go": 0,
            "zebra": {
                "demons": 0,
                "kettles": 0,
                "blues": 0
            },
            "apple": 0,
            "mango": 0
        };
        json2 = {
            "go": 0,
            "zebra": {
                "demons": 0,
                "kettles": 0,
                "blues": {
                    "road": 0,
                    "monster": 0,
                    "useless": 0
                }
            },
            "apple": 0,
            "mango": 0
        };
        json3 = {
            "go": 0,
            "zebra": {
                "demons": 0,
                "kettles": 0,
                "blues": {
                    "road": 0,
                    "monster": {
                        "ghost": 0,
                        "scotland": 0,
                        "looming": 0
                    },
                    "useless": 0
                }
            },
            "apple": 0,
            "mango": 0
        }
    });

    describe('ascending tests', () => {
        before(() => {
        });

        describe('1. sorting json with no nesting', () => {
            let sorted;
            before(() => {
                sorted = index.sort(json0)
            });
            it('should have 4 keys', function () {
                Object.keys(sorted).should.have.lengthOf(4)
            });
            it('should have first key apple', function () {
                Object.keys(sorted)[0].should.equal("apple")
            });
            it('should have last key zebra', function () {
                Object.keys(sorted)[3].should.equal("zebra")
            });
        });

        describe('2. sorting json with single nested key', () => {
            let sorted;
            before(() => {
                sorted = index.sort(json1)
            });
            it('should have 4 keys', function () {
                Object.keys(sorted).should.have.lengthOf(4)
            });
            it('should have first key apple', function () {
                Object.keys(sorted)[0].should.equal("apple")
            });
            it('should have last key zebra', function () {
                Object.keys(sorted)[3].should.equal("zebra")
            });
            it('expect zebra to be an object', function () {
                expect(sorted.zebra).to.be.an('object')
            });
            it('expect zebra to have length 3', function () {
                expect(Object.keys(sorted.zebra)).to.have.lengthOf(3)
            });
            it('expect zebra to have first key blues', function () {
                Object.keys(sorted.zebra)[0].should.equal("blues")
            });
            it('expect zebra to have last key kettles', function () {
                Object.keys(sorted.zebra)[2].should.equal("kettles")
            });
        });

        describe('3. sorting json with 2 nesting in a key', () => {
            let sorted;
            before(() => {
                sorted = index.sort(json2)
            });
            it('should have 4 keys', function () {
                Object.keys(sorted).should.have.lengthOf(4)
            });
            it('should have first key apple', function () {
                Object.keys(sorted)[0].should.equal("apple")
            });
            it('should have last key zebra', function () {
                Object.keys(sorted)[3].should.equal("zebra")
            });
            it('expect zebra to be an object', function () {
                expect(sorted.zebra).to.be.an('object')
            });
            it('expect zebra to have length 3', function () {
                expect(Object.keys(sorted.zebra)).to.have.lengthOf(3)
            });
            it('expect zebra to have first key blues', function () {
                Object.keys(sorted.zebra)[0].should.equal("blues")
            });
            it('expect zebra to have last key kettles', function () {
                Object.keys(sorted.zebra)[2].should.equal("kettles")
            });
            it('expect blues to be an object', function () {
                expect(sorted.zebra.blues).to.be.an('object')
            });
            it('expect blues to have length 3', function () {
                expect(Object.keys(sorted.zebra.blues)).to.have.lengthOf(3)
            });
            it('expect blues to have first key monster', function () {
                Object.keys(sorted.zebra.blues)[0].should.equal("monster")
            });
            it('expect blues to have last key useless', function () {
                Object.keys(sorted.zebra.blues)[2].should.equal("useless")
            });
        });

        describe('4. sorting json with 3 nesting in a key', () => {
            let sorted;
            before(() => {
                sorted = index.sort(json3)
            });
            it('should have 4 keys', function () {
                Object.keys(sorted).should.have.lengthOf(4)
            });
            it('should have first key apple', function () {
                Object.keys(sorted)[0].should.equal("apple")
            });
            it('should have last key zebra', function () {
                Object.keys(sorted)[3].should.equal("zebra")
            });
            it('expect zebra to be an object', function () {
                expect(sorted.zebra).to.be.an('object')
            });
            it('expect zebra to have length 3', function () {
                expect(Object.keys(sorted.zebra)).to.have.lengthOf(3)
            });
            it('expect zebra to have first key blues', function () {
                Object.keys(sorted.zebra)[0].should.equal("blues")
            });
            it('expect zebra to have last key kettles', function () {
                Object.keys(sorted.zebra)[2].should.equal("kettles")
            });
            it('expect blues to be an object', function () {
                expect(sorted.zebra.blues).to.be.an('object')
            });
            it('expect blues to have length 3', function () {
                expect(Object.keys(sorted.zebra.blues)).to.have.lengthOf(3)
            });
            it('expect blues to have first key monster', function () {
                Object.keys(sorted.zebra.blues)[0].should.equal("monster")
            });
            it('expect blues to have last key useless', function () {
                Object.keys(sorted.zebra.blues)[2].should.equal("useless")
            });
            it('expect monster to be an object', function () {
                expect(sorted.zebra.blues.monster).to.be.an('object')
            });
            it('expect monster to have length 3', function () {
                expect(Object.keys(sorted.zebra.blues.monster)).to.have.lengthOf(3)
            });
            it('expect monster to have first key ghost', function () {
                Object.keys(sorted.zebra.blues.monster)[0].should.equal("ghost")
            });
            it('expect monster to have last key scotland', function () {
                Object.keys(sorted.zebra.blues.monster)[2].should.equal("scotland")
            });
        });
    });

    describe('descending tests', () => {
        before(() => {
        });

        describe('1. sorting json with no nesting', () => {
            let sorted;
            before(() => {
                sorted = index.sort(json0, false);
            });
            it('should have 4 keys', function () {
                Object.keys(sorted).should.have.lengthOf(4)
            });
            it('should have first key zebra', function () {
                Object.keys(sorted)[0].should.equal("zebra")
            });
            it('should have last key apple', function () {
                Object.keys(sorted)[3].should.equal("apple")
            });
        });

        describe('2. sorting json with single nested key', () => {
            let sorted;
            before(() => {
                sorted = index.sort(json1, false)
            });
            it('should have 4 keys', function () {
                Object.keys(sorted).should.have.lengthOf(4)
            });
            it('should have first key zebra', function () {
                Object.keys(sorted)[0].should.equal("zebra")
            });
            it('should have last key apple', function () {
                Object.keys(sorted)[3].should.equal("apple")
            });
            it('expect zebra to be an object', function () {
                expect(sorted.zebra).to.be.an('object')
            });
            it('expect zebra to have length 3', function () {
                expect(Object.keys(sorted.zebra)).to.have.lengthOf(3)
            });
            it('expect zebra to have first key kettles', function () {
                Object.keys(sorted.zebra)[0].should.equal("kettles")
            });
            it('expect zebra to have last key blues', function () {
                Object.keys(sorted.zebra)[2].should.equal("blues")
            });
        });

        describe('3. sorting json with 2 nesting in a key', () => {
            let sorted;
            before(() => {
                sorted = index.sort(json2, false)
            });
            it('should have 4 keys', function () {
                Object.keys(sorted).should.have.lengthOf(4)
            });
            it('should have first key zebra', function () {
                Object.keys(sorted)[0].should.equal("zebra")
            });
            it('should have last key apple', function () {
                Object.keys(sorted)[3].should.equal("apple")
            });
            it('expect zebra to be an object', function () {
                expect(sorted.zebra).to.be.an('object')
            });
            it('expect zebra to have length 3', function () {
                expect(Object.keys(sorted.zebra)).to.have.lengthOf(3)
            });
            it('expect zebra to have first key kettles', function () {
                Object.keys(sorted.zebra)[0].should.equal("kettles")
            });
            it('expect zebra to have last key blues', function () {
                Object.keys(sorted.zebra)[2].should.equal("blues")
            });
            it('expect blues to be an object', function () {
                expect(sorted.zebra.blues).to.be.an('object')
            });
            it('expect blues to have length 3', function () {
                expect(Object.keys(sorted.zebra.blues)).to.have.lengthOf(3)
            });
            it('expect blues to have first key useless', function () {
                Object.keys(sorted.zebra.blues)[0].should.equal("useless")
            });
            it('expect blues to have last key monster', function () {
                Object.keys(sorted.zebra.blues)[2].should.equal("monster")
            });
        });

        describe('4. sorting json with 3 nesting in a key', () => {
            let sorted;
            before(() => {
                sorted = index.sort(json3, false)
            });
            it('should have 4 keys', function () {
                Object.keys(sorted).should.have.lengthOf(4)
            });
            it('should have first key zebra', function () {
                Object.keys(sorted)[0].should.equal("zebra")
            });
            it('should have last key apple', function () {
                Object.keys(sorted)[3].should.equal("apple")
            });
            it('expect zebra to be an object', function () {
                expect(sorted.zebra).to.be.an('object')
            });
            it('expect zebra to have length 3', function () {
                expect(Object.keys(sorted.zebra)).to.have.lengthOf(3)
            });
            it('expect zebra to have first key kettles', function () {
                Object.keys(sorted.zebra)[0].should.equal("kettles")
            });
            it('expect zebra to have last key blues', function () {
                Object.keys(sorted.zebra)[2].should.equal("blues")
            });
            it('expect blues to be an object', function () {
                expect(sorted.zebra.blues).to.be.an('object')
            });
            it('expect blues to have length 3', function () {
                expect(Object.keys(sorted.zebra.blues)).to.have.lengthOf(3)
            });
            it('expect blues to have first key useless', function () {
                Object.keys(sorted.zebra.blues)[0].should.equal("useless")
            });
            it('expect blues to have last key monster', function () {
                Object.keys(sorted.zebra.blues)[2].should.equal("monster")
            });
            it('expect monster to be an object', function () {
                expect(sorted.zebra.blues.monster).to.be.an('object')
            });
            it('expect monster to have length 3', function () {
                expect(Object.keys(sorted.zebra.blues.monster)).to.have.lengthOf(3)
            });
            it('expect monster to have first key scotland', function () {
                Object.keys(sorted.zebra.blues.monster)[0].should.equal("scotland")
            });
            it('expect monster to have last key ghost', function () {
                Object.keys(sorted.zebra.blues.monster)[2].should.equal("ghost")
            });
        });
    });
});

describe('json array tests', () => {

    describe('sorting json array with json object', () => {

        let array = [
            {
                zebra: 1,
                apple: 2
            },
            {
                yellow: {
                    goat: 6,
                    boy: 8
                },
                goat: [
                    {
                        dear: 3,
                        abe: 4
                    },
                    "some string"
                ]
            },
            "some data"
        ];
        let result;

        before(() => {
            result = index.sort(array)
        });

        it('expect object 0 key 0 to be apple', function () {
            expect(Object.keys(result[0])[0]).to.be.equal("apple")
        });

        it('expect object 1.1 key 0 to be boy', function () {
            let key = Object.keys(result[1])[1];
            let obj = result[1][key];
            expect(Object.keys(obj)[0]).to.be.equal("boy")
        });

        it('expect object 1.1 key 1 to be string', function () {
            const key = Object.keys(result[1])[0];
            const actual = result[1][key][1];
            expect(actual).to.equal("some string")
        });

        it('expect object 1.0 [0] key 0 to be abe', function () {
            let key = Object.keys(result[1])[0];
            let obj = result[1][key];
            expect(Object.keys(obj[0])[0]).to.be.equal("abe")
        });

        it('expect key 2 to be a string', function () {
            expect(result[2]).to.equal("some data")
        });
    })
});

describe('sort()', () => {
    it('given invalid object : should throw error', function () {
        const given = "string";
        try {
            const should = index.sort(given);
            expect.fail(should);
        } catch (e) {
            expect(e.toString()).to.equal("Error: must be an object/array")
        }
    });
});

describe('typeOf()', () => {

    it('given any string : should return STRING', function () {
        const given = "any thing";
        const should = main.__get__("typeOf")(given);
        expect(should).to.equal("STRING");
    });
});

describe('sortAsync', () => {

    it('given invalid object : should be rejected', function () {
        const given = "string";
        return index.sortAsync(given).should.be.rejected;
    });

    describe('given valid object : should sort successfully',  function () {
        const given = {d: 1, a: 0};
        let result;

        before(async () => {
            result = await index.sortAsync(given)
        })

        it('expect key 1 to be a', function () {
            expect(Object.keys(result)[0]).to.equal("a")
        });

        it('expect key 2 to be d', function () {
            expect(Object.keys(result)[1]).to.equal("d")
        });

    });
});