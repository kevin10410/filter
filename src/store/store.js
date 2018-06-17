import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        display: "sites",
        allSites: [],
        currentPage: 1,
        currentDetail: {},
        currentSelector: 5,
        rules: [],
        currentSites: [],
    },
    getters: {
        currentDisplay: state => {
            return state.display
        },
        currentSites: state => {
            if (state.currentSites.length === 0) {
                return state.allSites.slice(3 * state.currentPage - 3, 3 * state.currentPage)
            } else {
                return state.currentSites.slice(3 * state.currentPage - 3, 3 * state.currentPage)
            }
        },
        getDetailItem: state => {
            return state.currentDetail
        },
        getCurrentPage: state => {
            return state.currentPage
        },
        getFilterSites: state => {
            if (state.rules.length !== 0) {
                let filterSites = state.allSites.filter(function (site) {
                    let check = false;
                    state.rules.forEach(function (rule) {
                        if (site.Description.includes(rule)) {
                            check = true;
                        }
                    })
                    return check
                })
                state.currentSites = filterSites;
                return filterSites
            } else {
                state.currentSites = [];
                return state.allSites;
            }
        },
        currentRules: state => {
            return state.rules
        }
    },
    mutations: {
        fetchTourSite: (state, dataArray) => {
            state.allSites = state.allSites.concat(dataArray);
            console.log(state.allSites)
        },
        changeDisplay: (state, showing) => {
            state.display = showing;
            console.log(state.display)
        },
        selectDetailItem: (state, item) => {
            state.currentDetail = item;
        },
        changePage: (state, num) => {
            state.currentPage = num;
        },
        changeSelector: (state, num) => {
            state.currentSelector += num;
        },
        addRules: (state, rule) => {
            state.rules.push(rule)
            console.log(state.rules)
        },
        removeRules: (state, index) => {
            state.rules.splice(index, 1);
            console.log(state.rules)
        }
    },
    actions: {
        async fetchAPI({ commit }, url) {
            let response1 = await axios({
                method: "get",
                url: url[0]
            });
            commit('fetchTourSite', response1.data.result.records)
            let response2 = await axios({
                method: "get",
                url: url[1]
            });
            commit('fetchTourSite', response2.data.result.records)
            let response3 = await axios({
                method: "get",
                url: url[2]
            });
            commit('fetchTourSite', response3.data.result.records)
        }
    }
})