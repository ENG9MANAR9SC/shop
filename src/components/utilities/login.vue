<template>
    <form @submit.prevent="addUser">
        <div class="c-container">
                    <div class="mt-16 mb-8 p-0.5 w-3/4  custom-round custom-bgcolor">
                        <div class="bg-white custom-round p-8">
                            <h2 class="h-header text-2xl mb-4">{{ $t('Log in') }} </h2>
                            <form class="w-full" @submit="addUser">
                                <div class=" gap-4 ">
                                    <div class="my-4 ">
                                        <label class="text-primary font-tenor text-xl" for="full-name">{{ $t('Full Name') }} </label>
                                        <input
                                            class="appearance-none border rounded-xl border-secondery w-full py-3 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
                                            id="username"
                                            type="text"
                                            :placeholder="$t('your Name')"
                                            v-model="username"
                                            required
                                        />
                                    </div>

                                    <div class="my-4 ">
                                        <label class="text-primary font-tenor text-xl" for="email">
                                            {{ $t('Email') }} 
                                        </label>
                                        <input
                                            class="appearance-none border rounded-xl border-secondery w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="email"
                                            placeholder="johndoe@example.com"
                                            v-model="email"
                                            required
                                        />
                                    </div>
                               
                                <div class="my-4">
                                    <label class="text-primary font-tenor text-xl" for="message">{{ $t('Password') }}  </label>
                                    <input
                                            class="appearance-none border rounded-xl border-secondery w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="password"
                                            type="password"
                                            placeholder="***"
                                            v-model="password"
                                            required
                                        />
                                </div>
                            </div>
                                <div class="flex justify-end  my-4">
                                    <button
                                        class="btn hover:bg-blue-700 text-white focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                 {{ $t('Log in') }} 
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
    </form>
  </template>
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
        users:[],
      };
    },
    methods: {   
        async addUser() {
            try {
                const response = await axios.post('https://fakestoreapi.com/users', {
                username: this.username,
                email: this.email,
                password: this.password,
                });
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        },
       
    },
    mounted() {
         axios.get('https://fakestoreapi.com/users')
        .then(response => {
             this.users = response.data;
             console.log(response)
         })
         .catch(error => {
            console.log(error);
         })
    },
  };
  </script>