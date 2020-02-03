<template>
    <div class="col-md-6 col-lg-4 col-xl-3 p-0">
        <div class="card m-3">
            <div class="card-header bg-warning">
                <h3 class="card-title text-light">
                    {{ stock.name }} <br>
                    <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
                </h3>
            </div>
            <div class="card-body">
                <form>
                    <div class="form-row">
                        <div class="col">
                            <input v-model.number="quantity" :class="{danger: insufficientQuantity}" type="number" class="form-control" placeholder="Quantity">
                        </div>
                        <div class="col">
                            <button @click="sellStock" :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)" class="btn btn-danger float-right">{{ insufficientQuantity ? "Insufficient" : "Sell" }}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        data() {
            return {
                quantity: 0
            }
        },
        props: [ "stock" ],
        computed: {
            insufficientQuantity() {
                return this.quantity > this.stock.quantity
            }
        },
        methods: {
            ...mapActions({
                sell: "sellStock"
            }),
            sellStock() {
                const order = {
                    id: stock.id,
                    price: stock.price,
                    quantity: this.quantity
                }
                this.sell(order)
                this.quantity = 0
            }
        }
    }
</script>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>