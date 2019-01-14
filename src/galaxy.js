// Planet Age Formula 
const planetYears = {
    mercuryAge: 0.24,
    venusAge: 0.62,
    marsAge: 1.88,
    jupiterAge: 11.86,
    saturnAge: 29.45,
    urnanusAge: 84.01,
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
    urnanusLimit: 18,
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
        return Math.floor((this.age / planetYears.mercuryAge));
    }

    MercuryAgeLimit() {
        return Math.floor((this.age * lifeExpectancy.mercuryLimit / planetYears.mercuryAge));
    }

    // Mars Planet
    ConvertMarsAge() {
        return Math.floor((this.age / planetYears.marsAge));
    }

    MarsAgeLimit() {
        return Math.floor((this.age * lifeExpectancy.marsLimit / planetYears.marsAge));
    }

    // Venus Limit
    ConvertVenusAge() {
        return Math.floor((this.age / planetYears.venusAge));
    }

    VenusAgeLimit() {
        return Math.floor((this.age * lifeExpectancy.venusLimit / planetYears.venusAge));
    }

    //   Jupiter Planet
    ConvertJupiterAge() {
        return Math.floor((this.age / planetYears.jupiterAge));
    }

    JupiterAgeLimit() {
        return Math.floor((this.age * lifeExpectancy.jupiterLimit / planetYears.jupiterAge));
    }
    //   Saturn Planet
    ConvertSaturnAge() {
        return Math.floor((this.age / planetYears.saturnAge));
    }

    SaturnAgeLimit() {
        return Math.floor((this.age * lifeExpectancy.saturnLimit / planetYears.saturnAge));
    }

    //   Uranus Planet
    ConvertUranusAge() {
        return Math.floor((this.age / planetYears.uranusAge));
    }

    UranusAgeLimit() {
        return Math.floor((this.age * lifeExpectancy.uranusLimit / planetYears.uranusAge));
    }

    //   Neptune Planet
    ConvertNeptuneAge() {
        return Math.floor((this.age / planetYears.neptuneAge));
    }

    NeptuneAgeLimit() {
        return Math.floor((this.age * lifeExpectancy.neptunerLimit / planetYears.neptuneAge));
    }

    //   Pluto Planet
    ConvertPlutoAge() {
        return Math.floor((this.age / planetYears.plutoAge));
    }

    PlutoAgeLimit() {
        return Math.floor((this.age * lifeExpectancy.plutoLimit / planetYears.plutoAge));
    }


    //  Years Left
    PlanetYearsLeft() {
        var earthAge = 75;
        if ((this.MercuryAgeLimit() || this.MarsAgeLimit() || this.JupiterAgeLimit() || this.VenusAgeLimit() || this.SaturnAgeLimit() || this.UranusAgeLimit() || this.NeptuneAgeLimit() || this.PlutoAgeLimit() <= earthAge))
            return true;
        else {
            return false;
        }

    }

}