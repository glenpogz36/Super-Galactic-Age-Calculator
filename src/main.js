// Planet Age Formula 
const planetYears = {
    mercuryAge: 0.24,
    venusAge: 0.62,
    marsAge: 1.88,
    jupiterAge: 11.86
};

// Life Expectancy 
const lifeExpectancy = {
    marsLimit: 3,
    mercuryLimit: 7,
    venusLimit: 9,
    jupiterLimit: 12
};


export class galaxy {
    constructor(age) {
        this.age = age;
    }


    // Mercury Planet
    ConvertMercuryAge() {
        return Math.floor((this.age / planetYears.mercuryAge));
    }

    MercuryAgeLimit() {
        return Math.floor((this.age * lifeExpectancy.mercuryLimit / planetYears.mercuryAge));
    }


    //  Years Left
    PlanetYearsLeft() {
        var earthAge = 75;
        if ((this.MercuryAgeLimit() <= earthAge))
            return true;
        else {
            return false;
        }

    }

}