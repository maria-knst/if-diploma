import { addToFavourites, removeFromFavourites } from "./favourites_actions";
import { handleActions } from "redux-actions";

export const initialState = {
  data: [
    {
      id: "8a4b2a76-03d2-480a-a931-3488c88de582",
      type: "Tees",
      name: "TEXT T-SHIRT",
      price: {
        currency: "USD",
        value: "990",
      },
      color: {
        name: "Orange",
        hex: "#ED7C00",
      },
      availableSizes: ["S, M, L"],
      description: "ROUND NECK TOP WITH SHORT SLEEVES. FRONT TEXT DETAIL.",
      images: [
        "https://res.cloudinary.com/intellectfox/image/upload/v1619554408/Diploma%20Front-end/Online%20shop_Modmikky/Tees/t-shirt_4_1.webp",
        "https://res.cloudinary.com/intellectfox/image/upload/v1619554440/Diploma%20Front-end/Online%20shop_Modmikky/Tees/t-shirt_4_2.webp",
      ],
    },
  ],
};

const handlers = {
  [addToFavourites]: (state, action) => {
    if (state.data.find((item) => item.id === action.payload.id)) {
      alert("This item in favourites");
      return { ...state };
    } else {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }
  },
  [removeFromFavourites]: (state, action) => ({
    ...state,
    data: state.data.filter((item) => item.id !== action.payload),
  }),
};

export default handleActions(handlers, initialState);
