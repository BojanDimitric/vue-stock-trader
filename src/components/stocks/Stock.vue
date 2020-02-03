<template>
    <div class="col-md-6 col-lg-4 col-xl-3 p-0">
        <div class="card m-3">
            <div class="card-header bg-info">
                <h3 class="card-title text-light">
                    {{ stock.name }} <br>
                    <small>(Price: {{ stock.price }})</small>
                </h3>
            </div>
            <div class="card-body">
                <form>
                    <div class="form-row">
                        <div class="col">
                            <input v-model.number="quantity" :class="{danger: insufficientFunds}" type="number" class="form-control" placeholder="Quantity">
                        </div>
                        <div class="col">
                            <button @click.prevent="buyStock" :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)" class="btn btn-success float-right">{{ insufficientFunds ? "Insufficient" : "Buy" }}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                quantity: 0
            }
        },
        props: [ "stock" ],
        computed: {
            funds() {
                return this.$store.getters.funds
            },
            insufficientFunds() {
                return this.quantity * this.stock.price > this.funds
            }
        },
        methods: {
            buyStock() {
                const order = {
                    id: this.stock.id,
                    price: this.stock.price,
                    quantity: this.quantity
                }
                this.$store.dispatch("buyStock", order)
                this.quantity = 0;
            }
        }
    }
</script>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>