const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            link: 'https://www.vuemastery.com',
            onSale: true,
            inventory: 15,
            details: ['50% cotton', '30% wool', '20% polyester']
        }
    }
})
