app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        },
        cart: {
            type: Array,
            required: true,
        }
    },
    template:
    /*html*/
    `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
            <img
            :src="image"
            alt="socks image"
            :class="{ 'out-of-stock-img': !inStock }">
    </div>
        <div class="product-info">
            <h1>{{ title }}</h1>
            <p>{{ productDisponibility }}</p>
            <p>{{'Beautiful, soft and warm ' + product + ' for your delight!'}}</p>
            <p>Shipping: {{ shipping }}</p>
            <div
            v-for="(variant, index) in variants"
            :key="variant.id"
            class="color-circle"
            :style="{backgroundColor: variant.color}"
            @mouseover="updateVariant(index)"></div>
            <button
            class="button"
            :class="{ disabledButton: !inStock }"
            :disabled="!inStock"
            @click="callingAddToCart">Add to Cart</button>
            <button
            class="button"
            @click="callingRemoveOfCart"
            :class="{ disabledButton: !this.cart.length }">Remove of Cart</button>
        </div>
        </div>
    </div>`,

        data() {
            return {
                product: 'Socks',
                brand: 'Vue Mastery',
                selectedVariant: 0,
                variants: [
                    { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 0 },
                    { id: 2235, color: 'darkblue', image: './assets/images/socks_blue.jpg', quantity: 5 },
                ],
            }
            },
        methods: {
        callingAddToCart() {
                this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        callingRemoveOfCart() {
            this.$emit('remove-of-cart', this.variants[this.selectedVariant].id)
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
        shipping() {
            if (this.premium) {
                return 'Free'
                } else { return '$ 2.99' }
            }
        },  
    },)
