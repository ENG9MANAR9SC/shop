    <template class="">
        <div class="">
            <div class="c-container min-h-screen">
                <div>
                    <div class="mt-16 mb-8 p-0.5 w-full custom-round custom-bgcolor">
                        <div class="bg-white custom-round p-8">
                            <h2 class="h-header text-2xl mb-4"> Contact Us</h2>
                            <form class="w-full" @submit.prevent="submitForm">
                                <div class="flex gap-4">
                                    <div class="flex my-4 w-1/2">
                                        <label class="text-primary font-tenor text-xl mx-4" for="full-name"> FullName</label>
                                        <input
                                            class="appearance-none border rounded-xl border-secondery w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
                                            id="full-name"
                                            type="text"
                                            placeholder="Manar kheir"
                                            v-model="fullName"
                                            required
                                        />
                                    </div>

                                    <div class="flex my-4 w-1/2">
                                        <label class="text-primary font-tenor text-xl mx-4" for="email">
                                            Email
                                        </label>
                                        <input
                                            class="appearance-none border rounded-xl border-secondery w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="email"
                                            placeholder="johndoe@example.com"
                                            v-model="email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="flex my-4">
                                    <label class="text-primary font-tenor text-xl mx-4" for="message">Message </label>
                                    <textarea
                                        class="appearance-none border rounded-xl border-secondery w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="message"
                                        rows="5"
                                        placeholder="Enter your message here"
                                        v-model="message"
                                        required
                                    ></textarea>
                                </div>

                                <div class="flex w-1/3 justify-end">
                                    <button
                                        class="btn hover:bg-blue-700 text-white focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <!-- social Media and Location -->
                <div class="flex mb-8 gap-4">
                    <div>
                        <div class="mt-4 p-0.5 w-full custom-round custom-bgcolor">
                            <div class="bg-white custom-round p-4">
                                <div>
                                    <h3 class="font-philosopher text-2xl font-bold text-secondery my-4">Contact us</h3>
                                    <div class="flex my-3">
                                        <img src="/icons/socialmedia/location.png" alt="" class="w-6 h-6">
                                        <a href="" class="px-3 text-primary text-xl font-tenor">Erbil,Ankawa Street</a>
                                    </div>
                                    <div class="flex my-3">
                                        <img src="/icons/socialmedia/email.png" alt="" class="w-6 h-6">
                                        <a href="" class="px-3 text-primary text-xl font-tenor">Email@email.com</a> 
                                    </div>
                                    <div class="flex my-3">
                                        <img src="/icons/socialmedia/call.png" alt="" class="w-6 h-6">
                                        <a href="" class="px-3 text-primary text-xl font-tenor">+964 654 765</a> 
                                    </div>
                                    <div class="flex my-3">
                                        <img src="/icons/socialmedia/call.png" alt="" class="w-6 h-6">
                                        <a href="" class="px-3 text-primary text-xl font-tenor">+964 654 765</a> 
                                    </div>
                                </div>
                                <div class="flex">
                                    <img src="/icons/socialmedia/youtube.png" alt="" class="w-6 h-6 m-2">
                                    <img src="/icons/socialmedia/facebook.png" alt="" class="w-6 h-6 m-2">
                                    <img src="/icons/socialmedia/instgram.png" alt="" class="w-6 h-6 m-2">
                                    <img src="/icons/socialmedia/whatsup.png" alt="" class="w-6 h-6 m-2">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="mt-4 p-0.5 w-full custom-round custom-bgcolor">
                            
                            <div class="bg-white custom-round p-8">
                              <h3 class="font-philosopher text-2xl font-bold text-secondery my-3">Location</h3>  
                                <MapboxMap
                                    style="height: 400px"
                                    access-token="..."
                                    map-style="mapbox://styles/mapbox/streets-v11"
                                    :center="[0, 0]"
                                    :zoom="1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>

<script>
  import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl';
  import 'mapbox-gl/dist/mapbox-gl.css';

export default {
  data() {
    return {
      fullName: '',
      email: '',
      message: '',
      showMap: true,
        c_zoom: 16,
        map: null,
    }
  },
  methods: {
    submitForm() {
      // Handle form submission here
      console.log(`Full Name: ${this.fullName}`)
      console.log(`Email: ${this.email}`)
      console.log(`Message: ${this.message}`)
    },
  },
}
</script>



