export enum Units {
    Kilogram,
    Gram,
    Pound,
    Ounce,
    Litre,
    Millilitre,
    Gallon,
    FluidOunce
}

export const UnitsName = new Map<Units, string>([
    [Units.Kilogram, 'kilogram'],
    [Units.Gram, 'gram'],
    [Units.Pound, 'pound'],
    [Units.Ounce, 'ounce'],
    [Units.Litre, 'litre'],
    [Units.Millilitre, 'millilitre'],
    [Units.Gallon, 'gallon'],
    [Units.FluidOunce, 'fluid ounce']
]);

export const UnitsShortName = new Map<Units, string>([
    [Units.Kilogram, 'kg'],
    [Units.Gram, 'g'],
    [Units.Pound, 'lb'],
    [Units.Ounce, 'oz'],
    [Units.Litre, 'l'],
    [Units.Litre, 'ml'],
    [Units.Litre, 'gal'],
    [Units.Litre, 'fl. oz.']
]);