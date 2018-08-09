const chai = require('chai');
const index = require('./index');
const expect = chai.expect;
chai.should();

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
                sorted = index.sort(json0,false);
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
                sorted = index.sort(json1,false)
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
                sorted = index.sort(json2,false)
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
                sorted = index.sort(json3,false)
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