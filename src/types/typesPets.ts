export type typePet = "dog" | "cat" | "fish";

export type typeSex = "Masculino" | "Feminino";

export type pet = {
    type: typePet,
    image: string,
    name: string,
    color: string,
    sex: typeSex
}