export interface PokemonListModel {
    id : number,
    name : string,
    artwork : string
}

export interface PokemonDetailModel{
    id : number
    name : string
    types : Array<pokemonTypeModel>
    stats : Array<pokemonStatsModel>
}

interface pokemonTypeModel{
    type : pokemonTypeData
}

interface pokemonTypeData{
    name  : string
}

interface pokemonStatsModel{
    base_stat : number
    stat : pokemonStatsData
}

interface pokemonStatsData{
    name : string
}