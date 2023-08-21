import { useState, useEffect } from "react";
import { getCharacters } from "../../helpers/getCharacters";

const UseFetchCharacters = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getCharacters(category).then((characters) => {
      setState({
        data: characters,
        loading: false,
      });
    });
  }, [category]);

  return state;
};

export default UseFetchCharacters;
