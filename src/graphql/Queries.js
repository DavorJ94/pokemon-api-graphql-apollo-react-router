import { gql } from "@apollo/client";

export const GET_ALL_POKEMONS = gql`
  query Pokemons {
    Pokemons {
      id
      name
      sprite
    }
  }
`;

export const GET_POKEMON = gql`
  query Pokemons($id: Int!) {
    Pokemons(where: { id: { _eq: $id } }) {
      id
      name
      sprite
      species
      types
    }
  }
`;
