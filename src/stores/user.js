import { defineStore } from 'pinia'
import axios from 'axios';
export const UserStore = defineStore('user', {
    state: () => ({
      email:'',
      password:'',
    }),

    actions: {
        signUp(email,password){
            axios.post('https://fakestoreapi.com/users', {
                email: email,
                password: password,
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        },
        signIn(email,password){
              console.log('do')
            axios.post('https://fakestoreapi.com/auth/login',{
                body:{
                 email:email,
                password:password,  
                }
               
              
            })
            .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
      

    },
    getters: {

    }, 

});
