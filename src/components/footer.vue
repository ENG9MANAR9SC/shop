<template>
    <footer class="bg-bglight">
        <div class="c-container text-primary mt-8">
            <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-items-start gap-2">
                <div class="flex flex-col justify-center">      
                    <img src="/icons/logo.png " alt="" class="w-32 h-auto">
                    <div class="text-large font-tenor mt-2">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
                </div>
                <div>
                    <h3 class="font-philosopher text-xl font-bold text-secondery"> {{ $t('Contact us') }} </h3>
                    <div class="flex my-3">
                        <img src="/icons/socialmedia/location.png" alt="" class="w-6 h-6">
                        <a href="" class="px-3 font-tenor">Erbil,Ankawa Street</a>
                    </div>
                    <div class="flex my-3">
                        <img src="/icons/socialmedia/email.png" alt="" class="w-6 h-6">
                        <a href="" class="px-3 font-tenor">Email@email.com</a> 
                    </div>
                    <div class="flex my-3">
                        <img src="/icons/socialmedia/call.png" alt="" class="w-6 h-6">
                        <a href="" class="px-3">+964 654 765</a> 
                    </div>
                    <div class="flex my-3">
                        <img src="/icons/socialmedia/call.png" alt="" class="w-6 h-6">
                        <a href="" class="px-3">+964 654 765</a> 
                    </div>
                </div>
                <div>
                    <h3 class="text-xl font-philosopher font-bold text-secondery">{{ $t('Social Media') }} </h3>
                    <div class="flex my-3">
                        <img src="/icons/socialmedia/youtube.png" alt="" class="w-6 h-6">
                        <a href="" class="px-3 font-tenor" >Youtube.com</a>
                    </div>
                    <div class="flex my-3">
                        <img src="/icons/socialmedia/facebook.png" alt="" class="w-6 h-6">
                        <a href="" class="px-3 font-tenor">Facebook.com</a>
                    </div>
                    <div class="flex my-3">
                        <img src="/icons/socialmedia/instgram.png" alt="" class="w-6 h-6">
                        <a href="" class="px-3 font-tenor">Instgram</a>
                    </div>
                    <div class="flex my-3">
                        <img src="/icons/socialmedia/whatsup.png" alt="" class="w-6 h-6">
                        <a href="" class="px-3 font-tenor">Whats up</a>
                    </div>
                </div>
                <div class="">
                    <h3 class="text-xl font-philosopher font-bold text-secondery ">{{ $t('Support') }}  </h3>
                    <div class="my-4 font-tenor"><a href="" class="px-3">{{ $t('FAQs') }}  </a></div>
                    <div class="my-4 font-tenor"><a href="" class="px-3">{{ $t('Terms of Use') }}  </a></div>
                    <div class="my-4 font-tenor"><a href="" class="px-3">{{ $t('Privacy Policy') }}  </a></div>
                </div>
            </div>
            <!-- list -->
            <div class="flex flex-wrap justify-center text-large font-philosopher font-bold text-secondery mt-4">
                <a href="" class="mx-2">{{ $t('Home') }}  </a>
                <a href="" class="mx-2">{{ $t('Shop') }}  </a>
                <a href="" class="mx-2">{{ $t('Categories') }}  </a>
                <a href="" class="mx-2">{{ $t('Blog') }}  </a>
                <a href="" class="mx-2">{{ $t('Contact us') }}  </a>
                <a href="" class="mx-2">{{ $t('About us') }}  </a>
            </div>
            <!-- Line -->
            <div class="width-full h-0.5 bg-secondery"></div>
            <!-- 2023 -->
            <div class="flex justify-between text-base font-tenor text-primary p-2">
                <div>{{ $t('All Reserved by Company 2023') }}  </div>
                <div>{{ $t('Gold Light') }}  </div>
            </div>
        </div>
    </footer>
</template>