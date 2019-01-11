import { galaxy } from '../src/galaxy.js';



describe('galaxy', function () {
    let userTest;
    let userTest2;

    beforeEach(function () {
        userTest = new galaxy(22);
        userTest2 = new galaxy(60);
    });

    it('should test that the age are valid', function () {
        expect(userTest.age).toEqual(23);
        expect(userTest2.age).toEqual(60);
    });

    it('should correctly calculate your age in Mercury years', function () {
        var userTest = new galaxy(22)
        expect(userTest.ConvertMercuryAge()).toEqual(95);
    });
});