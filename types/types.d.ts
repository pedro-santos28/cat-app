namespace models {
    export interface ICat {
    id: string;
    breeds?: Breed[];
    url: string;
    width: string;
    height: string;
}

export interface IBreed {
    weight: {
        imperial: string
        metric: string
    }
    id: string
    name: string
    vcahospitals_url: string
    vetstreet_url: string
    temperament: string
    origin: string
    description: string
    life_span: string
    indoor: boolean
    alt_names: string
    adaptability: number
    affection_level: number
    child_friendly: number
    cat_friendly: number
    dog_friendly: number
    energy_level: number
    grooming: number
    health_issues: number
    intelligence: number
    shedding_level: number
    social_needs: number
    stranger_friendly: number
    vocalisation: number
    bidability: number
    experimental: number
    hairless: number
    natural: number
    rare: number
    rex: number
    suppressed_tail: number
    short_legs: number
    wikipedia_url: string
    hypoallergenic: number
}
     
}