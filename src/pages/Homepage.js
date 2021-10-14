import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import styles from "../styles/Home.module.css";
import { GET_ALL_POKEMONS } from "../graphql/Queries";
import Pokemon from "../components/Pokemon";
import spinner from "../images/spinner.png";
import Spinner from "../components/LoadingSpinner";

function Homepage() {
  const { loading, error, data = false } = useQuery(GET_ALL_POKEMONS);

  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <div className={styles.container}>
        {loading && <Spinner src={spinner} height="160px" speed="1s" />}
        {data &&
          data.Pokemons.map((pokemon) => {
            return (
              <Link to={`/about/${pokemon.id}`} key={pokemon.id}>
                <Pokemon name={pokemon.name} src={pokemon.sprite} />
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Homepage;
