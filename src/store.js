import { configureStore, createSlice } from '@reduxjs/toolkit';

// 🔹 Load persisted state from localStorage
const loadState = (key, fallback) => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch (err) {
    console.error("Error loading state", err);
    return fallback;
  }
};

// 🔹 Save state to localStorage
const saveState = (key, state) => {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch (err) {
    console.error("Error saving state", err);
  }
};

// ✅ Product slice (static data)
const productSlice = createSlice({
  name: 'products',
  initialState: {
    veg: [
      { id: 101, name: 'Paneer ButterMasala', price: 60, image: '/paneer.jpg' },
      { id: 102, name: 'Aloo Matar', price: 40, image: '/aalu matar jpg.webp' },
      { id: 103, name: 'Veg Biryani', price: 80, image: '/vegbiryani.jpg' },
      { id: 104, name: 'Rajma', price: 40, image: '/rajma.jpg' },
    ],
    nonvegItems: [
      { id: 201, name: "Chicken", price: 250, image: "/chicken.jpg" },
      { id: 202, name: "Mutton", price: 600, image: "/mutton.jpg" },
      { id: 203, name: "Fish", price: 300, image: "/fish.jpg" },
      { id: 204, name: "Chicken 65", price: 450, image: "/chicken65.jpg" },
    ],
    chocolateItems: [
      { id: 301, name: "Dark Chocolate", price: 120, image: "/dark-chocolate.jpg" },
      { id: 302, name: "Milk Chocolate", price: 100, image: "/milk-chocolate.jpg" },
      { id: 303, name: "White Chocolate", price: 150, image: "/white-chocolate.jpg" },
    ],
    drinkItems: [
      { id: 401, name: "Apple", price: 120, image: "/apple.jpg" },
      { id: 402, name: "Mango", price: 100, image: "/mango.jsx" },
      { id: 403, name: "Orange", price: 150, image: "/orange.jpg" },
    ],
    snackItems:[
      { id: 501, name: "french fries", price: 120, image: "/frenc.jpg" },
      { id: 502, name: "spring rolls", price: 100, image: "/spring.jpg" },
      { id: 503, name: "pav bhaji", price: 150, image: "/pav.jpg" },

    ]
  },
  reducers: {},
});

// ✅ Cart slice (with persistence)
const cartSlice = createSlice({
  name: 'cart',
  initialState: loadState("cart", []),
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      saveState("cart", state);
    },
    removeFromCart: (state, action) => {
      const newState = state.filter((item) => item.id !== action.payload.id);
      saveState("cart", newState);
      return newState;
    },
    incrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
      saveState("cart", state);
    },
    decrementQuantity: (state, action) => {
      const itemIndex = state.findIndex((item) => item.id === action.payload.id);
      if (itemIndex !== -1) {
        if (state[itemIndex].quantity > 1) {
          state[itemIndex].quantity -= 1;
        } else {
          state.splice(itemIndex, 1);
        }
      }
      saveState("cart", state);
    },
    clearCart: () => {
      saveState("cart", []);
      return [];
    },
  },
});

// ✅ Orders slice (NO persistence now)
const ordersSlice = createSlice({
  name: 'orders',
  initialState: [],  // No loading from localStorage
  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Export actions
export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;
export const { addOrder } = ordersSlice.actions;

// Configure and export store
const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
    orders: ordersSlice.reducer,
  },
});

export default store;




