<template>
    <div>
        <h1>Your funds!</h1>
        <h6>See your portfolio!</h6>
        <h6>Start new day by clicking on it!</h6>
        <hr>
        <p>Your funds: {{ funds | currency }}</p>

    </div>
</template>

<script>
    export default {
        computed: {
            funds() {
                return this.$store.getters.funds
            }
        }
    }
</script>