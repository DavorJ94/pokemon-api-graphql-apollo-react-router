import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "../graphql/Queries";
import AboutPokemon from "../components/AboutPokemon";
import { useParams, useHistory } from "react-router-dom";
import spinner from "../images/spinner.png";
import Spinner from "../components/LoadingSpinner";

function AboutEachPokemon() {
  const { id } = useParams();
  let history = useHistory();
  const {
    loading,
    error,
    data = false,
  } = useQuery(GET_POKEMON, {
    variables: { id },
  });

  useEffect(() => {
    if (data)
      if (data.Pokemons.length === 0) {
        history.push("/404");
      }
  }, [data, history]);

  if (error) return `Error! ${error.message}`;

  return (
    <div style={{ margin: "0 auto", textAlign: "center" }}>
      {loading && <Spinner src={spinner} height="100px" speed="1s" />}
      {data &&
        data.Pokemons.map((pokemon) => {
          return <AboutPokemon pokemon={pokemon} key={pokemon.id} />;
        })}
    </div>
  );
}
export default AboutEachPokemon;
