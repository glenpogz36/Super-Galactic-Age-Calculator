import { galaxy } from '../src/galaxy.js';


describe('galaxy', function () {
    let userTest;
    let userTest2;

    beforeEach(function () {
        userTest = new galaxy(22);
        userTest2 = new galaxy(60);
    });
    //Test
    it('should test that the age are valid', function () {
        expect(userTest.age).toEqual(22);
        expect(userTest2.age).toEqual(60);
    });


    //  Mercury
    it("should check Mercury life expectancy limit.", function () {
        var userTest = new galaxy(22)
        expect(userTest.MercuryAgeLimit()).toEqual(641);
    });
    it('should correctly calculate your age in Mercury years', function () {
        var userTest = new galaxy(22)
        expect(userTest.ConvertMercuryAge()).toEqual(91);
    });

    //  Venus
    it("should check Venus life expectancy limit.", function () {
        var userTest = new galaxy(22)
        expect(userTest.VenusAgeLimit()).toEqual(319);
    });
    it('should correctly calculate your age in Venus years', function () {
        var userTest = new galaxy(22)
        expect(userTest.ConvertVenusAge()).toEqual(35);
    });

    //  Mars
    it("should check Mars life expectancy limit.", function () {
        var userTest = new galaxy(22)
        expect(userTest.MarsAgeLimit()).toEqual(35);
    });
    it('should correctly calculate your age in Mars years', function () {
        var userTest = new galaxy(22)
        expect(userTest.ConvertMarsAge()).toEqual(11);
    });

    // Jupiter
    it("should check Jupiter life expectancy limit.", function () {
        var userTest = new galaxy(22)
        expect(userTest.JupiterAgeLimit()).toEqual(22);
    });
    it('should correctly calculate your age in Jupiter years', function () {
        var userTest = new galaxy(22)
        expect(userTest.ConvertJupiterAge()).toEqual(1);
    });

    //Saturn
    it("should check Saturn life expectancy limit.", function () {
        var userTest = new galaxy(22)
        expect(userTest.SaturnAgeLimit()).toEqual(22);
    });
    it('should correctly calculate your age in Saturn years', function () {
        var userTest = new galaxy(11)
        expect(userTest.ConvertSaturnAge()).toEqual(0);
    });

    //Uranus
    it("should check Uranus life expectancy limit.", function () {
        var userTest = new galaxy(22)
        expect(userTest.JupiterAgeLimit()).toEqual(4);
    });
    it('should correctly calculate your age in Uranus years', function () {
        var userTest = new galaxy(22)
        expect(userTest.ConvertJupiterAge()).toEqual(0);
    });

    //Neptune
    it("should check Neptune life expectancy limit.", function () {
        var userTest = new galaxy(22)
        expect(userTest.JupiterAgeLimit()).toEqual(2);
    });
    it('should correctly calculate your age in Neptune years', function () {
        var userTest = new galaxy(22)
        expect(userTest.ConvertJupiterAge()).toEqual(0);
    });

    //Pluto
    it("should check Pluto life expectancy limit.", function () {
        var userTest = new galaxy(22)
        expect(userTest.JupiterAgeLimit()).toEqual(2);
    });
    it('should correctly calculate your age in Pluto years', function () {
        var userTest = new galaxy(22)
        expect(userTest.ConvertJupiterAge()).toEqual(2);
    });

});