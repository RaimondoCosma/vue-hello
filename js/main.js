'use strict';

const { createApp } = Vue;
createApp({
data() {
    return {
    message: 'Sto utilizzando Vue!',
    image: {
        source: "https://cdn-media-1.freecodecamp.org/ghost/2019/03/vueart.png",
        alt: "photo-vue"
        }
    }
}
}).mount('#app')