export class SpringComposition {
    elementName: string;
    formula: string;
    quantity: Float32Array;
    unity: string;
}

export class SpringPrice {
    price: Float32Array;
    money: string;
    by: string
}

export class SpringLocalisation {
    longiture: Float32Array;
    lattitude: Float32Array;
}

export class SpringEntity {
    name: string;
    composition: SpringComposition;
    description: string;
    brand: string;
    price: SpringPrice;
    localisation: SpringLocalisation;
    startExplotationDate: Date;
}
