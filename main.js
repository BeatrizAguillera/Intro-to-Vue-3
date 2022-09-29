const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
            link: 'https://www.vuemastery.com',
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['P', 'M', 'G'],
        }
    },
    methods: {
        addToCart(id) {
            this.cart.push(id)
        },
        removeOfCart() {
            this.cart.pop()
        },
    },
})



