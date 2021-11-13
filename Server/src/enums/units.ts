export enum Units {
    kilogram,
    gram,
    pound,
    ounce,
    litre,
    millilitre,
    gallon,
    fluidOunce
}

export const unitsName = new Map<Units, string>([
    [Units.kilogram, 'kilogram'],
    [Units.gram, 'gram'],
    [Units.pound, 'pound'],
    [Units.ounce, 'ounce'],
    [Units.litre, 'litre'],
    [Units.millilitre, 'millilitre'],
    [Units.gallon, 'gallon'],
    [Units.fluidOunce, 'fluid ounce']
]);

export const unitsShortName = new Map<Units, string>([
    [Units.kilogram, 'kg'],
    [Units.gram, 'g'],
    [Units.pound, 'lb'],
    [Units.ounce, 'oz'],
    [Units.litre, 'l'],
    [Units.litre, 'ml'],
    [Units.litre, 'gal'],
    [Units.litre, 'fl. oz.']
]);