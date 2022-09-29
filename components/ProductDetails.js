app.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true,
        },
        sizes: {
            type: Array,
        },
    },
    template:
    /*html*/
    `
    <div class="product-details">
        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>
            <div v-for="size in sizes">{{ size }}</div>
    </div>`,

    data() {
        return {
        }
    },
})