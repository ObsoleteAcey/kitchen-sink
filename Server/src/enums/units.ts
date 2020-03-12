export enum Units {
    Kilogram,
    Gram,
    Pound,
    Ounce,
    Litres,
    Millilitres,
    Gallon,
    FluidOunces
}

export const UnitsName = new Map<Units, string>([
    [Units.Kilogram, 'kilogram'],
    [Units.Gram, 'gram'],
    [Units.Pound, 'pound'],
    [Units.Ounce, 'ounce']
]);

export const UnitsShortName = new Map<Units, string>([
    [Units.Kilogram, 'kg'],
    [Units.Gram, 'g'],
    [Units.Pound, 'lb'],
    [Units.Ounce, 'oz']
]);