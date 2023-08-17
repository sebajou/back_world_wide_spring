export class SpringComposition {
    elementName: string;
    formula: string;
    quantity: number;
    unity: string;
}

export class SpringPrice {
    price: number;
    money: string;
    by: string
    country: string
}

export class SpringLocalisation {
    longitude: number;
    lattitude: number;
}

export class SpringEntity {
    name: string;
    composition: SpringComposition[];
    description: string;
    brand: string;
    price: SpringPrice[];
    localisation: SpringLocalisation;
    startExploitationDate: Date;
}
