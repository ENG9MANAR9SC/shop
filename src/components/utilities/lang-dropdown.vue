<template>
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton class="inline-flex w-full justify-center rounded-md px-1 py-1 text-tiny font-medium text-muted-text hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          <div class="flex gap-1">
            <span class="">
              lang
            </span>
           
          </div>
  
          <ChevronDownIcon class="h-4 w-4" aria-hidden="true" />
        </MenuButton>
      </div>
  
      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <MenuItems class="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-light shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div class="py-1">
            <MenuItem role="button" v-for="lang in langs" :key="lang.code">
              <a @click.prevent="changeLang(lang.code)" class=" bg-secondery text-primary font-bold text-dark block px-4 py-2 text-tiny">
                {{lang.title}}
              </a>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </template>
  
  <script setup>
  import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
 
  
  </script>
  <script>
  export default {
    data() {
      return {
        langs:{
          en: {
            code: 'en',
            title: 'English',
        /*     flag: '/imgs/icons/american-flag.svg', */
          },
          ar: {
            code: 'ar',
            title: 'العربية',
          /*   flag: '/imgs/icons/iraq-flag.svg', */
          },

        }
      }
    },
  
/*     beforeMount() {
      let lang = localStorage.getItem("lang");
      if(lang) {
        this.$i18n.locale = lang;
      }
    },
  
    methods: {
      changeLang(lang) {
        localStorage.setItem("lang", lang);
        this.$i18n.locale = lang;
        this.$router.go();
      },
    } */
  }
  </script>