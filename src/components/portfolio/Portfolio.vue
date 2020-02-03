<template>
    <div>
        <app-portfolio v-for="stock in stocks" :key="stock.id" :stock="stock"></app-portfolio>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"

    import Portfolio from "./Stock"

    export default {
        components: {
            appPortfolio: Portfolio
        },
        computed: {
            ...mapGetters({
                stocks: "portfolio"
            })
        }
    }
</script>