<template>
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <router-link to="/" class="navbar-brand">Stocks</router-link>
        <button class="navbar-toggler">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <router-link to="/stocks" class="nav-item" activeClass="active" tag='li'>
                    <a class="nav-link">Stocks</a>
                </router-link>
                <router-link to="/portfolio" class="nav-item" activeClass="active" tag='li'>
                    <a class="nav-link">Portfolio</a>
                </router-link>
            </ul>
            <ul class="navbar-nav navbar-right">
                <li class="nav-item" activeClass="active">
                    <a class="nav-link" @click="endDay" href="#">End Day</a>
                </li>
                <li @click="drop = !drop" :class="{show: drop}" class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#">
                        Save & Load
                    </a>
                    <div :class="{show: drop}" class="dropdown-menu">
                        <a @click="saveData" class="dropdown-item" href="#">Save</a>
                        <a @click="loadData" class="dropdown-item" href="#">Load</a>
                    </div>
                </li>
            </ul>
            <strong class="navgar-right navbar-text ml-2">Funds: {{ funds | currency }}</strong>
        </div>
    </nav>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        data() {
            return {
                drop: false
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds
            }
        },
        methods: {
            ...mapActions({
                randomStocks: "randomStocks",
                fetchData: "loadData"
            }),
            endDay() {
                this.randomStocks()
            },
            saveData() {
                const data = {
                    funds: this.$store.getters.funds,
                    stocks: this.$store.getters.stocks,
                    portfolio: this.$store.getters.portfolio
                }
                this.$http.put("data.json", data)
            },
            loadData() {
                this.fetchData()
            }
        }
    }
</script>