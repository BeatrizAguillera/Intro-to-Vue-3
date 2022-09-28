const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            link: 'https://www.vuemastery.com',
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['P', 'M', 'G'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 0 },
                { id: 2235, color: 'darkblue', image: './assets/images/socks_blue.jpg', quantity: 5},
            ],
            inventory: 'this.variants[this.selectedVariant].quantity',
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeOfCart() {
            if (this.cart > 0) {
            this.cart--
            }
        },
        updateVariant(index) {
            this.selectedVariant = index
        },
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
            },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        onSale() {
            let inventory = this.variants[this.selectedVariant].quantity
                if (inventory > 10) {
                    return 'on sale!'
                } else if (inventory > 0 && inventory < 10) {
                    return 'almost sold out!'
                } else {
                    return 'out of sale.'
                }
            },
        productDisponibility() {
            return this.brand + ' ' + this.product + ' is ' + this.onSale
        },
    },
})
