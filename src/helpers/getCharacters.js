import axios from "axios"

export const getCharacters = async(character = "") => {
    const url = `https://rickandmortyapi.com/api/character/?name=${character}`

    const response = await axios.get(url)
        //va un await porque eso me va a devolver una promesa
    const { results } = response.data;
    // console.log(response.data);

    const characters = results.map((data) => {

        return {
            id: data.id,
            name: data.name,
            image: data.image,
            gender: data.gender,
            location: data.location.name,
            origin: data.origin.name,
            species: data.species,
            status: data.status,
        }

    })
    return characters;

}