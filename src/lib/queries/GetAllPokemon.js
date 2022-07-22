import { gql } from "@apollo/client"

export const GET_ALL_POKEMON = gql `
query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      status
      message
      results {
        id
        name
        artwork
      }
    }
  }
`