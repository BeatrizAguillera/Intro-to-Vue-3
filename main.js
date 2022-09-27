const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            link: 'https://www.vuemastery.com',
            onSale: true,
            inventory: 15,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['P', 'M', 'G'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ],
        }
    }
})
