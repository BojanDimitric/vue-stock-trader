const state = {
    funds: 10000,
    stocks: []
}

const mutations = {
    "BUY_STOCK"(state, { id, price, quantity }) {
        const record = state.stocks.find(e => e.id === id)
        if (record) {
            record.quantity += quantity
        } else {
            state.stocks.push({
                id,
                quantity
            })
        }
        state.funds -= price * quantity
    },
    "SELL_STOCK"(state, { id, price, quantity }) {
        const record = state.stocks.find(e => e.id === id)
        if (record.quantity > quantity) {
            record.quantity -= quantity
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1)
        }
        state.funds += price * quantity
    },
    "SET_PORTFOLIO"(state, portfolio) {
        state.funds = portfolio.funds
        state.portfolio = portfolio.portfolio ? portfolio.portfolio : []
    }
}

const actions = {
    sellStock({ commit }, order) {
        commit("SELL_STOCK", order)
    } 
}

const getters = {
    portfolio(state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(e => e.id === stock.id)
            return {
                id: stock.id,
                name: record.name,
                price: record.price,
                quantity: stock.quantity
            }
        })
    },
    funds(state) {
        return state.funds
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}