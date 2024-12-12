import { useEffect, useMemo, useState } from "react";
import { PokemonListEntity } from "./utils/interfaces";

export function usePokemon() {
  const [data, setData] = useState<PokemonListEntity["results"]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {}, []);

  return {
    data,
    error,
    isLoading,
  };
}
