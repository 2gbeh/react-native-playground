export interface PokemonListEntity {
  count: number;
  next: null | string;
  previous: null | string;
  results: Array<{
    name: string;
    url: string;
  }>;
}

export interface PokemonDetailsEntity {
  id: number;
  name: string;
}
