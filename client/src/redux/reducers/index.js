// Importa las action types acá
import {
  GET_ALL_COUNTRIES,
  GET_COUNTRY_DETAIL,
  GET_COUNTRY_BY_SEARCH,
  GET_COUNTRIES_BY_FILTER,
  CREATE_ACTIVITY,
  GET_ALL_ACTIVITIES,
  EMPTY_STATE,
  UPDATE_COUNTRIES,
  // DELETE_ACTIVITY, // NO PEDIDA
} from "../actions";

const initialState = {
  countries: [],
  countryDetail: {},
  activityDetail: {},
  activities: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload, //solo actualizo esta prop
      };
    case GET_COUNTRY_DETAIL:
      return {
        ...state,
        countryDetail: action.payload, //solo actualizo esta prop
      };
    case GET_COUNTRY_BY_SEARCH:
      return {
        ...state,
        countries: action.payload, // todos los paises que salgan por busqueda
      };
    case GET_COUNTRIES_BY_FILTER:
      return {
        ...state,
        countries: action.payload, // todos los paises que salgan por busqueda
      };
    case CREATE_ACTIVITY:
      return {
        ...state,
        activityDetail: action.payload, //solo actualizo esta prop
      };
    case GET_ALL_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };

    case EMPTY_STATE:
      return {
        ...state,
        countryDetail: {},
      };
    case UPDATE_COUNTRIES:
      return {
        ...state,
        countries: action.payload, // todos los paises ordenados
      };
    // ↓↓↓↓↓↓↓↓NO PEDIDA↓↓↓↓↓↓↓↓
    // case DELETE_ACTIVITY:
    //   return {
    //     // ...state,
    //     // activities: state.activities.filter(({ id }) => id !== action.payload),
    //   };
    default:
      return state;
  }
};

export default rootReducer;
