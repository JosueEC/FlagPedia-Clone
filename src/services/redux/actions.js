import { API } from '../../utils/constants'

export const GET_COUNTRIES = 'GET_COUNTRIES'
export const GET_COUNTRIES_BY_NAME = 'GET_COUNTRIES_BY_NAME'
export const FILTER_COUNTRIES_BY_CONTINENT = 'FILTER_COUNTRIES_BY_CONTINENT'
export const ORDER_COUNTRIES_HIGHER_POPULATION = 'ORDER_COUNTRIES_HIGHER_POPULATION'
export const ORDER_COUNTRIES_LOWER_POPULATION = 'ORDER_COUNTRIES_LOWER_POPULATION'
export const ORDER_COUNTRIES_A_TO_Z = 'ORDER_COUNTRIES_A_TO_Z'
export const ORDER_COUNTRIES_Z_TO_A = 'ORDER_COUNTRIES_Z_TO_A'

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

const orderCountriesHigherPopulation = () => {
  return function (dispatch) {
    console.info('order-countries-high-population')
    dispatch({ type: ORDER_COUNTRIES_HIGHER_POPULATION })
  }
}

const orderCountriesLowerPopulation = () => {
  return function (dispatch) {
    console.info('order_countries-low-population')
    dispatch({ type: ORDER_COUNTRIES_LOWER_POPULATION })
  }
}

const orderCountriesAtoZ = () => {
  return function (dispatch) {
    console.info('order-countries-A-Z')
    dispatch({ type: ORDER_COUNTRIES_A_TO_Z })
  }
}

const orderCountriesZtoA = () => {
  return function (dispatch) {
    console.info('order-countries-Z-A')
    dispatch({ type: ORDER_COUNTRIES_Z_TO_A })
  }
}

export {
  getCountries,
  getCountriesByName,
  filterCountriesByContinent,
  orderCountriesHigherPopulation,
  orderCountriesLowerPopulation,
  orderCountriesAtoZ,
  orderCountriesZtoA
}
