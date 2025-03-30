import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
    state: () => ({ 
        products: [
            {
                id: 1,
                name: 'Iphone 14',
                price: 800,
                image: 'https://cdn.pixabay.com/photo/2013/09/11/00/27/netherlands-181076_960_720.jpg'
            },
            {
                id: 2,
                name: 'Tv',
                price: 600,
                image: 'https://media.istockphoto.com/id/2152164861/photo/tv-with-different-video-streaming-services.webp?s=2048x2048&w=is&k=20&c=Myld5kyiqzADabEo3OmKcpKJ6ICNKmiRjwWKjy3IGig='
            },
            {
                id: 3,
                name: 'Radio',
                price: 1500,
                image: 'https://cdn.pixabay.com/photo/2016/09/20/13/46/radio-1682531_640.jpg'
            },
            {
                id: 4,
                name: 'playstation',
                price: 600,
                image: 'https://cdn.pixabay.com/photo/2017/05/19/14/09/ps4-2326616_640.jpg'
            },
        ]
    }),
    getters: { //get

    },
    actions: {// modify 
      
    },
  })