<template>
  <div class="home">

    <!-- P-countdown -->
    <div class="h-24 max-w-sm mx-auto rounded-xl text-white my-2 sticky inset-y-2 left-0" id="countdown">
      <div class="grid grid-flow-col gap-5 text-center mx-auto font-bold tracking-wider">
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content bg-gradient-to-r from-teal-800 to-sky-800 rounded-lg">
          <span class="countdown font-mono text-5xl h-12 w-16">
            <span style="--value:15;" class="align-middle">{{ days }}</span>
          </span>
          Hari
        </div> 
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content bg-gradient-to-r from-sky-800 to-indigo-800 rounded-lg">
          <span class="countdown font-mono text-5xl h-12 w-16">
            <span style="--value:10;" class="align-middle">{{ hours }}</span>
          </span>
          Jam
        </div> 
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content bg-gradient-to-r from-indigo-800 to-purple-800 rounded-lg">
          <span class="countdown font-mono text-5xl h-12 w-16">
            <span style="--value:24;" class="align-middle">{{ minutes }}</span>
          </span>
          Menit
        </div> 
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content bg-gradient-to-r from-purple-800 to-pink-900 rounded-lg">
          <span class="countdown font-mono text-5xl h-12 w-16">
            <span style="--value:51;" class="align-middle">{{ seconds }}</span>
          </span>
          Detik
        </div>
      </div>
    </div>

    <!-- P-nama-calon -->
    <div :class="class_div_main + ' div_landscape'" id="nama_calon">
      <div class="font-greatvibes text-4xl font-bold tracking-wider">Fulan</div>
      <small class="font-sniglet tracking-wider">anak ke-x dari Fulan dan Fulan</small>
      <div class="font-greatvibes text-4xl font-bold">&</div>
      <h2 class="font-greatvibes text-4xl font-bold tracking-wider">Fulan</h2>
      <small class="font-sniglet tracking-wider">anak ke-x dari Fulan dan Fulan</small>
    </div>

    <!-- P-ayat -->
    <div class="h-45 bg-gradient-to-r from-lime-100 via-teal-600 to-lime-100 px-2 py-6 my-6 mx-auto">
      <div class="text-justify mt-2 pl-2 pr-2">
        <div class="text-center text-white">
          فَجَعَلَ مِنْهُ الزَّوْجَيْنِ الذَّكَرَ وَالْأُنْثَىٰ
        </div>
        <small class="font-sniglet tracking-wider text-center">
          <div class="text-white">
            Artinya: “Lalu Allah menjadikan daripadanya sepasang: laki-laki dan perempuan,” (QS Al-Qiyamah: 39).
          </div>
        </small>
      </div>
    </div>

    <!-- P-pembuka -->
    <div  :class="class_div_main + ' div_landscape'" id="pembuka">
      <div class="font-greatvibes text-4xl font-bold tracking-wider">Assalamu'alaikum Warahmatullahi Wabarakatuh</div>
      <div class="text-center mt-2 pl-2 pr-2">
        <small class="font-sniglet tracking-wider">
          Maha suci Allah yang telah menciptakan manusia dengan berpasang-pasangan. 
          Sungguh besar rahmat dan karunia yang diberikan-Nya kepada kita.
          <br>
          Maka izinkan Kami mengundang sekaligus mengharapkan doa restu dari bapak/ibu dalam acara pernikahan putra & putri Kami.
        </small>
      </div>
    </div>

    <!-- P-akad-walimah -->
    <div :class="class_div_main + ' div_portrait'" id="jadwal">
      <div class="font-greatvibes text-4xl font-bold tracking-wider">Akad & Walimah/Resepsi</div>
      
      <div>
        <div class="grid grid-cols font-sniglet pt-4">
          <div class="grid grid-cols-2 gap-4">
            <div class="col-span-2 flex justify-center items-center">
              <img  :src="require('../assets/image/rings.jpg')" 
                    class="w-28 h-28 rounded-full transition-shadow ease-in-out duration-300 shadow-lg hover:shadow-2xl" 
                    alt="">
            </div>
            <div class="col-span-2 flex flex-col justify-start items-center">
              <div class="text-2xl font-bold">Akad</div>
              <div>Minggu, XX Juli 20XX</div>
              <div>08.00 - Selesai</div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols font-sniglet pt-4">
          <div class="grid grid-cols-2 gap-4">
            <div class="col-span-2 flex justify-center items-center">
              <img  :src="require('../assets/image/settable-2.jpg')" 
                    class="w-28 h-28 rounded-full transition-shadow ease-in-out duration-300 shadow-lg hover:shadow-2xl" 
                    alt="">
            </div>
            <div class="col-span-2 flex flex-col justify-start items-center">
              <div class="text-2xl font-bold">Walimah/Resepsi</div>
              <div>Minggu, XX Juli 20XX</div>
              <div>11.00 - Selesai</div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- P-adab-walimah -->
    <div :class="class_div_main + ' div_landscape'" id="adab_walimah">
      <div class="font-greatvibes text-4xl font-bold tracking-wider">Adab Walimah</div>
      <div class="text-justify mt-2">
        <ul>
          <li class="pt-2 pb-2 pl-2 pr-2">
            <div class="flex flex-row">
              <div class="basis-1/6 text-center">
                <font-awesome-icon :icon="['fas', 'hand-holding']" />
              </div>
              <div class="basis-5/6">
                <small class="font-sniglet tracking-wider">
                  Meniatkan untuk ibadah
                </small>
              </div>
            </div>
          </li>

          <li class="pt-2 pb-2 pl-2 pr-2">
            <div class="flex flex-row">
              <div class="basis-1/6 text-center">
                <font-awesome-icon :icon="['fas', 'tshirt']" />
              </div>
              <div class="basis-5/6">
                <small class="font-sniglet tracking-wider">
                  Memperhatikan adab berbusana (menutup aurat)
                </small>
              </div>
            </div>
          </li>

          <li class="pt-2 pb-2 pl-2 pr-2">
            <div class="flex flex-row">
              <div class="basis-1/6 text-center">
                <font-awesome-icon :icon="['fas', 'people-arrows']" />
              </div>
              <div class="basis-5/6">
                <small class="font-sniglet tracking-wider">
                  Tidak campur baur antara laki-laki dan perempuan yang bukan mahramnya
                </small>
              </div>
            </div>
          </li>

          <li class="pt-2 pb-2 pl-2 pr-2">
            <div class="flex flex-row">
              <div class="basis-1/6 text-center">
                <font-awesome-icon :icon="['fas', 'chair']" />
              </div>
              <div class="basis-5/6">
                <small class="font-sniglet tracking-wider">
                  Adab duduk ketika makan dan minum
                </small>
              </div>
            </div>
          </li>

          <li class="pt-2 pb-2 pl-2 pr-2">
            <div class="flex flex-row">
              <div class="basis-1/6 text-center">
                <font-awesome-icon :icon="['fas', 'handshake-alt']" />
              </div>
              <div class="basis-5/6">
                <small class="font-sniglet tracking-wider">
                  Mendoakan pengantin
                </small>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </div>

    <!-- P-tamu-dipisah -->
    <!-- <div :class="class_div_main + ' div_landscape'" id="tamu_dipisah"> -->
      <!-- <div class="font-greatvibes text-4xl font-bold tracking-wider">Tamu Dipisah</div> -->
      <!-- <div class="text-center mt-2 pl-2 pr-2">
        <small class="font-sniglet tracking-wider text-lg font-bold">
          Tanpa mengurangi rasa hormat <br> untuk menjalankan syariat islam <br> tempat duduk tamu undangan laki-laki & perempuan terpisah.
        </small>
      </div>
    </div> -->

    <!-- P-ayat -->
    <div class="h-45 bg-gradient-to-r from-lime-100 via-teal-600 to-lime-100 px-2 py-6 my-6 mx-auto">
      <div class="text-justify mt-2 pl-2 pr-2">
        <div class="text-center text-white">
          وَمِنْ كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ لَعَلَّكُمْ تَذَكَّرُونَ
        </div>
        <small class="font-sniglet tracking-wider text-center">
          <div class="text-white">
            Artinya: “Dan segala sesuatu Kami Ciptakan Berpasang-pasangan supaya kamu mengingat kebesaran Allah,” (QS Az-Zariyat: 49).
          </div>
        </small>
      </div>
    </div>

    <!-- P-location -->
    <div :class="class_div_main + ' div_portrait'" id="lokasi">
      <div class="font-greatvibes text-4xl font-bold tracking-wider">Lokasi Acara</div>

      <!-- google maps -->
      <div class="flex justify-center items-center m-2 rounded-xl border-double border-2">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.4274250533304!2d107.63463541535755!3d-6.958801370066308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e84f70931815%3A0x92c893e277feb89f!2sKantor%20Urusan%20Agama%20Bandung%20Kidul!5e0!3m2!1sen!2sid!4v1656460155682!5m2!1sen!2sid" 
                width="600" 
                height="250"
                class="rounded-xl"
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
        </iframe>

      </div>

      <div class="flex justify-center items-center m-2">
        <a href="https://www.google.com/maps/place/Kantor+Urusan+Agama+Bandung+Kidul/@-6.9588014,107.6346354,17z/data=!3m1!4b1!4m5!3m4!1s0x2e68e84f70931815:0x92c893e277feb89f!8m2!3d-6.9588067!4d107.6368241" class="bg-purple-800 text-white p-2 rounded-xl" target="_blank">
          <font-awesome-icon :icon="['fas', 'map-marked-alt']" /> klik untuk masuk google maps
        </a>
      </div>
        
      <!-- QR Code -->
      <div class="flex justify-center items-center mb-6">
        <img  :src="require('../assets/image/lokasi.png')" 
              class="h-60"
              alt="">
      </div>
      
    </div>

    <div class="min-w-md mx-auto text-center border-grey p-4 pt-0 sticky inset-y-0 left-0">
      <div class="">
  
        <!-- <router-link to="/#countdown" :class="class_scroll_behaviour1">
          <font-awesome-icon :icon="['fas', 'hourglass-half']" />
        </router-link> -->
        <router-link to="/#nama_calon" :class="class_scroll_behaviour2">
          <font-awesome-icon :icon="['fas', 'user-friends']" />
        </router-link>
        <router-link to="/#jadwal" :class="class_scroll_behaviour3">
          <font-awesome-icon :icon="['fas', 'calendar-alt']" />
        </router-link>
        <router-link to="/#adab_walimah" :class="class_scroll_behaviour4">
          <font-awesome-icon :icon="['fas', 'book']" />
        </router-link>
        <router-link to="/#lokasi" :class="class_scroll_behaviour5">
          <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
        </router-link>

        <button :class="class_audio"
                title="Klik untuk mainkan"
                @click.prevent="audio.isPlaying ? pause(audio) : play(audio)"
                v-for="audio in audios" :key="audio.id">
          <font-awesome-icon :icon="['fas', icon_audio]" />
        </button>

      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src'
// import moment from 'moment';

export default {
  name: 'HomeView',
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      paused: 1,
      class_div_main: 'h-45 bg-gradient-to-r from-yellow-50 via-amber-100 to-yellow-50 py-6 my-6 max-w-xl mx-auto rounded-xl text-indigo-900',

      class_scroll_behaviour1: 'text-white opacity-60 bg-gradient-to-r from-teal-800 to-sky-800 hover:from-red-500 hover:to-yellow-500 focus:ring-4 font-medium rounded-l-full text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700',
      class_scroll_behaviour2: 'text-white opacity-60 bg-gradient-to-r from-sky-800 to-indigo-800 hover:from-red-500 hover:to-yellow-500 focus:ring-4 font-medium rounded-l-full text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700',
      class_scroll_behaviour3: 'text-white opacity-60 bg-gradient-to-r from-indigo-800 to-purple-800 hover:from-red-500 hover:to-yellow-500 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700',
      class_scroll_behaviour4: 'text-white opacity-60 bg-gradient-to-r from-purple-800 to-pink-900 hover:from-red-500 hover:to-yellow-500 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700',
      class_scroll_behaviour5: 'text-white opacity-60 bg-gradient-to-r from-pink-900 to-rose-700 hover:from-red-500 hover:to-yellow-500 focus:ring-4 font-medium rounded-r-full text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700',
      
      icon_audio: 'volume-mute',
      class_audio: 'h-8 w-8 opacity-60 font-medium text-white rounded-full text-sm focus:outline-none bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
      audios: [
        {
          file: new Audio(require('../assets/music/Ada Untukmu.mp3')),
          isPlaying: false
        }
      ],
    }
  },
  methods: {
    play (audio) {
      audio.isPlaying = true;
      audio.file.play();
      this.icon_audio = 'headphones';
      this.class_audio= 'h-8 w-8 opacity-60 font-medium text-white rounded-full text-sm focus:outline-none bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900';
    },
    
    pause (audio) {
      audio.isPlaying = false;
      audio.file.pause();
      this.icon_audio = 'volume-mute';
      this.class_audio= 'h-8 w-8 opacity-60 font-medium text-white rounded-full text-sm focus:outline-none bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900';
    },

    hari() {
      // const total = Date.parse('2022-07-24 08:00:00') - Date.parse(new Date())
      const fulldate = ((new Date()).toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })).split(',')
      const date = fulldate[0].split('/')
      const datetime = date[2].replace(',','') + '-' + ("00".substring(0, "00".length - date[0].length) + date[0]) + '-' + ("00".substring(0, "00".length - date[1].length) + date[1]) + ' ' +fulldate[1]
      const total = Date.parse('2022-07-24 08:00:00') - Date.parse(datetime)
      this.days = Math.floor( total/(1000*60*60*24) ) > 0 ? Math.floor( total/(1000*60*60*24) ) : 0
    },
    jam() {
      const fulldate = ((new Date()).toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })).split(',')
      const date = fulldate[0].split('/')
      const datetime = date[2].replace(',','') + '-' + ("00".substring(0, "00".length - date[0].length) + date[0]) + '-' + ("00".substring(0, "00".length - date[1].length) + date[1]) + ' ' +fulldate[1]
      const total = Date.parse('2022-07-24 08:00:00') - Date.parse(datetime)
      this.hours = Math.floor( (total/(1000*60*60)) % 24 ) > 0 ? Math.floor( (total/(1000*60*60)) % 24 ) : 0
    },
    menit() {
      const fulldate = ((new Date()).toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })).split(',')
      const date = fulldate[0].split('/')
      const datetime = date[2].replace(',','') + '-' + ("00".substring(0, "00".length - date[0].length) + date[0]) + '-' + ("00".substring(0, "00".length - date[1].length) + date[1]) + ' ' +fulldate[1]
      const total = Date.parse('2022-07-24 08:00:00') - Date.parse(datetime)
      this.minutes = Math.floor( (total/1000/60) % 60 ) > 0 ? Math.floor( (total/1000/60) % 60 ) : 0
    },
    detik() {
      const fulldate = ((new Date()).toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })).split(',')
      const date = fulldate[0].split('/')
      const datetime = date[2].replace(',','') + '-' + ("00".substring(0, "00".length - date[0].length) + date[0]) + '-' + ("00".substring(0, "00".length - date[1].length) + date[1]) + ' ' +fulldate[1]
      const total = Date.parse('2022-07-24 08:00:00') - Date.parse(datetime)
      this.seconds = Math.floor( (total/1000) % 60 ) > 0 ? Math.floor( (total/1000) % 60 ) : 0
    },
  },
  mounted(){
    setInterval(this.hari,1000);
    setInterval(this.jam,1000);
    setInterval(this.menit,1000);
    setInterval(this.detik,1000);
  }
   
}
</script>

<style scoped>

</style>
