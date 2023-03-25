<template>
  <div class="relative">
    <button class="flex items-center space-x-2 px-2 py-[2px] rounded-md text-secondery hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      @click="isOpen = !isOpen">
      <img :src="languageIcons[activeLanguage].icon" :alt="languageIcons[activeLanguage].name" class="h-5 w-5" />
      <span>{{ languageIcons[activeLanguage].name }}</span>
      <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" :class="[isOpen ? '-rotate-180' : '']">
        <path  fill-rule="evenodd"  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"  clip-rule="evenodd"/>
      </svg>
    </button>

    <div class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100" :class="[isOpen ? 'block' : 'hidden']">
		<template v-for="language in languages" :key="language">
			<button
			class="flex items-center justify-between w-full px-4 py-2 text-sm text-secondery hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" :class="{ 'font-medium': activeLanguage === language }"	@click="selectLanguage(language)">
			<img :src="languageIcons[language].icon" :alt="languageIcons[language].name" class="h-5 w-5" />
			<span class="mx-2">{{ languageIcons[language].name }}</span>
			<!-- <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
				<path fill-rule="evenodd" d="M6.293 6.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 11-1.414 1.414L11 4.414V16a1 1 0 11-2 0V4.414L7.707 6.121a1 1 0 01-1.414 0z" clip-rule="evenodd" />
			</svg> -->
			</button>
		</template>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        isOpen: false,
        activeLanguage: 'en',
        languages: ['en', 'ar', 'ku'],
        languageIcons: {
          en: {
            name: 'English',
            icon: '../ '
          },
          ar: {
        name: 'Arabic',
        icon: ".../icons/united-arab-emirates.png"
      },
      ku: {
        name: 'Kurdish',
        icon: '../icons/united-arab-emirates.png'
      }
    }
  };
  },
  methods: {
      selectLanguage(language) {
      this.activeLanguage = language;
      this.isOpen = false;
      // Add logic here to change the language of your app
      }
    }
  };
</script>