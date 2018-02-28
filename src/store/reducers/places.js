import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DELETE_PLACE,
  DESELECT_PLACE
} from "../actions/actionTypes";

const initialState = {
  places: [],
  selectedPlace: null
};
const reducer = (state = initialstate, action) => {
  switch (action.types) {
    case ADD_PLACE:
      const placeName = action.placeName;
      return {
        ...state,
        places: [
          ...state.places,
          {
            key: Math.random(),
            name: placeName,
            image: {
              uri:
                "https://vignette.wikia.nocookie.net/naruto/images/4/42/Naruto_Part_III.png/revision/latest/scale-to-width-down/300?cb=20180117103539"
            } //narutoImage }
          }
        ]
      };

    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== state.selectedPlace.key;
        })
      };

    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };

    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => {
          return place.key === action.placeKey;
        })
      };

    default:
      return state;
  }
};

export default reducer;
