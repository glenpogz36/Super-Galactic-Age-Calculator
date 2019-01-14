// Planet Age Formula 
const planetYears = {
    mercuryAge: 0.24,
    venusAge: 0.62,
    marsAge: 1.88,
    jupiterAge: 11.86,
    saturnAge: 29.45,
    uranusAge: 84.01,
    neptuneAge: 164.79,
    plutoAge: 247.92,
};

// Life Expectancy 
const lifeExpectancy = {
    marsLimit: 3,
    mercuryLimit: 7,
    venusLimit: 9,
    jupiterLimit: 12,
    saturnLimit: 15,
    uranusLimit: 18,
    neptuneLimit: 21,
    plutoLimit: 25,
};

// Main Something
export class galaxy {
    constructor(age) {
        this.age = age;
    }

    // Planets Back-End Logic


    // Mercury Planet
    ConvertMercuryAge() {
        return Math.round((this.age / planetYears.mercuryAge));
    }

    MercuryAgeLimit() {
        return Math.round((this.age * lifeExpectancy.mercuryLimit / planetYears.mercuryAge));
    }

    // Mars Planet
    ConvertMarsAge() {
        return Math.round((this.age / planetYears.marsAge));
    }

    MarsAgeLimit() {
        return Math.round((this.age * lifeExpectancy.marsLimit / planetYears.marsAge));
    }

    // Venus Limit
    ConvertVenusAge() {
        return Math.round((this.age / planetYears.venusAge));
    }

    VenusAgeLimit() {
        return Math.round((this.age * lifeExpectancy.venusLimit / planetYears.venusAge));
    }

    //   Jupiter Planet
    ConvertJupiterAge() {
        return Math.round((this.age / planetYears.jupiterAge));
    }

    JupiterAgeLimit() {
        return Math.round((this.age * lifeExpectancy.jupiterLimit / planetYears.jupiterAge));
    }
    //   Saturn Planet
    ConvertSaturnAge() {
        return Math.round((this.age / planetYears.saturnAge));
    }

    SaturnAgeLimit() {
        return Math.round((this.age * lifeExpectancy.saturnLimit / planetYears.saturnAge));
    }

    //   Uranus Planet
    ConvertUranusAge() {
        return Math.round((this.age / planetYears.uranusAge));
    }

    UranusAgeLimit() {
        return Math.round((this.age * lifeExpectancy.uranusLimit / planetYears.uranusAge));
    }

    //   Neptune Planet
    ConvertNeptuneAge() {
        return Math.round((this.age / planetYears.neptuneAge));
    }

    NeptuneAgeLimit() {
        return Math.round((this.age * lifeExpectancy.neptuneLimit / planetYears.neptuneAge));
    }

    //   Pluto Planet
    ConvertPlutoAge() {
        return Math.round((this.age / planetYears.plutoAge));
    }

    PlutoAgeLimit() {
        return Math.round((this.age * lifeExpectancy.plutoLimit / planetYears.plutoAge));
    }


    //  Years Left
    PlanetYearsLeft() {
        var earthAge = 75;
        if ((this.MercuryAgeLimit() || this.VenusAgeLimit() || this.MarsAgeLimit() || this.JupiterAgeLimit() || this.SaturnAgeLimit() || this.UranusAgeLimit() || this.NeptuneAgeLimit() || this.PlutoAgeLimit() <= earthAge))
            return true;
        else {
            return false;
        }

    }

}