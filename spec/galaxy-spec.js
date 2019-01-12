import { galaxy } from '../src/galaxy.js';


describe('galaxy', function () {
    let userTest;
    let userTest2;

    beforeEach(function () {
        userTest = new galaxy(22);
        userTest2 = new galaxy(60);
    });

    it('should test that the age are valid', function () {
        expect(userTest.age).toEqual(22);
        expect(userTest2.age).toEqual(60);
    });

    it('should correctly calculate your age in Mercury years', function () {
        var userTest = new galaxy(22)
        expect(userTest.ConvertMercuryAge()).toEqual(91);
    });

    it('should correctly calculate your age in Venus years', function () {
        var userTest = new galaxy(22)
        expect(userTest.ConvertVenusAge()).toEqual(35);
    });

    it('should correctly calculate your age in Mars years', function () {
        var userTest = new galaxy(22)
        expect(userTest.ConvertMarsAge()).toEqual(11);
    });

    it('should correctly calculate your age in Jupiter years', function () {
        var userTest = new galaxy(22)
        expect(userTest.ConvertJupiterAge()).toEqual(1);
    });

    it("should check their life expectancy limit per each Planet .", function () {
        //  Mercury
        var userTest = new galaxy(22)
        expect(userTest.MercuryAgeLimit()).toEqual(641);
    });
    it("should check their life expectancy limit per each Planet .", function () {
        //  Mars
        var userTest = new galaxy(22)
        expect(userTest.MarsAgeLimit()).toEqual(35);
    });
    it("should check their life expectancy limit per each Planet .", function () {
        // Jupiter
        var userTest = new galaxy(22)
        expect(userTest.JupiterAgeLimit()).toEqual(22);
    });

    it("should check their life expectancy limit per each Planet .", function () {
        //  Venus
        var userTest = new galaxy(22)
        expect(userTest.VenusAgeLimit()).toEqual(319);
    });

});