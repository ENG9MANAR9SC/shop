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
        let incomingID = product.id;
        console.log(incomingID);
        const found = this.products.some(el => el.id === incomingID);
        console.log(found);
        if(found) {
            const foundObject = this.products.find(item => item.id === incomingID);
            foundObject.quantity ++ ;
        } else {
            this.products.push(product);
        }        
      },

      updateProductQuntity(product, q) {
        // TODO: 
        // retrieve product based on slug
        // 
        // update  quantity product
        product.quantity = q;
      },

      destroyCart() {
        // TODO: 
        delete this.products;
        delete this.cQuantity;
  
      },

      removeProductFromCart(id) {
        // TODO: 
        // HINT: use array.filter
        //array.filter(function(currentValue, index, arr), thisValue)
      //  this.products.filter(function(this.products[slug]), this.products[0]);
       this.products = this.products.filter(el => el.id !== id)
       //console.log(arr);
        

      }


    },
    getters: {
      getProducts: (state) => state.products, 
      cQuantity: (state) => state.products.reduce((acc, p) => acc + (p.quantity), 0)
    }, 
    persist: true,
});
