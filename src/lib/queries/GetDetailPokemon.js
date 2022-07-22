import { gql } from "@apollo/client"

export const GET_DETAIL_POKEMON = gql `
query pokemon($pokemonName: String!) {
    pokemon(name: $pokemonName){
        id
        name
        types{
            type{
                name
            }
        }
        stats{
            base_stat 
            stat{
                name
            }
        }
      }
  }
`