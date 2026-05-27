export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  color?: string;
  gauge?: string;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

let cartItems: CartItem[] = [];

export const cart = {
  getItems: () => cartItems,
  addItem: (item: CartItem) => {
    const existingItem = cartItems.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      cartItems.push(item);
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  },
  removeItem: (id: number) => {
    cartItems = cartItems.filter((item) => item.id !== id);
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  },
  updateQuantity: (id: number, quantity: number) => {
    const item = cartItems.find((i) => i.id === id);
    if (item) {
      item.quantity = quantity;
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(cartItems));
      }
    }
  },
  clearCart: () => {
    cartItems = [];
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  },
  getTotalPrice: () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  },
  getTotalItems: () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  },
  loadFromStorage: () => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('cart');
      if (stored) {
        cartItems = JSON.parse(stored);
      }
    }
  },
};

// Load cart from storage on module load
if (typeof window !== 'undefined') {
  cart.loadFromStorage();
}
