import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
export const CartStore = defineStore('cart', {
    state: () => ({
      products: [] 
    }),

    actions: {
      addProductToCart(product) {
        // check if product exsist in cart

        // if it exsist ---> add one to quantity
        //      else push product to cart


        this.products.push(product);
      },

      updateProductQuntity(slug, q) {
        // TODO: 
        // retrieve product based on slug
        // 
        // update  quantity product
      },

      destroyCart() {
        // TODO: 
        delete this.products;
        delete this.cQuantity;
  
      },

      removeProductFromCart(slug) {
        // TODO: 
        // HINT: use array.filter
        //array.filter(function(currentValue, index, arr), thisValue)
        //this.products.filter(function(slug));
        delete this.products[slug];
        this.products.quantity[slug] == 0;
        

      }


    },
    getters: {
      getProducts: (state) => state.products, 
      cQuantity: (state) => state.products.reduce((acc, p) => acc + (p.quantity), 0)
    }, 
    persist: true,
});
