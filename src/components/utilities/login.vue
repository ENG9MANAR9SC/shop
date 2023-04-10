<template>
    <div class="c-container">
        <div class="mt-16 mb-8 p-0.5 w-3/4  custom-round custom-bgcolor">
            <div class="bg-white custom-round p-8">
                <h2 class="h-header text-2xl mb-4">{{ $t('Log in') }} </h2>
                <form class="w-full">
                    <div class=" gap-4 ">
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
                            <label class="text-primary font-tenor text-xl" for="password">{{ $t('Password') }}  </label>
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
                            @click.prevent="user.signIn(email,password)"
                            >
                        {{ $t('Log in') }} 
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script setup>
import {ref} from 'vue'
import { UserStore } from '../../stores/user'

const user = UserStore()

const email = ref('')
const password = ref('')
</script>
  
  