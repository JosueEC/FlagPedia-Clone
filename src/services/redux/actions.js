import { API } from '../../utils/constants'

export const GET_COUNTRIES = 'GET_COUNTRIES'
export const GET_COUNTRIES_BY_NAME = 'GET_COUNTRIES_BY_NAME'
export const FILTER_COUNTRIES_BY_CONTINENT = 'FILTER_COUNTRIES_BY_CONTINENT'

const getCountries = () => {
  const URL = `${API.DOMAIN}/countries`

  return function (dispatch) {
    fetch(URL)
      .then((response) => {
        if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`)
        return response.json()
      })
      .then((results) => {
        console.info('fetch-all-countries')
        dispatch({ type: GET_COUNTRIES, payload: results.data })
      })
      .catch((error) => console.error(error.message))
  }
}

const getCountriesByName = (countryName) => {
  const URL = `${API.DOMAIN}/countries?name=${countryName.toLowerCase()}`

  return function (dispatch) {
    fetch(URL)
      .then((response) => {
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`)
        return response.json()
      })
      .then((results) => {
        console.info('fetch-countries-by-name')
        dispatch({ type: GET_COUNTRIES_BY_NAME, payload: results.data })
      })
      .catch((error) => {
        console.error(error.message)
      })
  }
}

const filterCountriesByContinent = (continent) => {
  return function (dispatch) {
    console.info(`filter-countries-${continent}`)
    dispatch({ type: FILTER_COUNTRIES_BY_CONTINENT, payload: continent })
  }
}

export {
  getCountries,
  getCountriesByName,
  filterCountriesByContinent
}
