import Vue from "vue"

export const loadData = ({ commit }) => {
    Vue.http.get("data.json")
        .then(res => res.json())
        .then(data => {
            if (data) {
                const funds = data.funds
                const stocks = data.stocks
                const portfolio = data.portfolio

                const stocksPortfolio = {
                    funds,
                    portfolio
                }

                commit("SET_STOCKS", stocks)
                commit("SET_PORTFOLIO", stocksPortfolio)
            }
        })
}