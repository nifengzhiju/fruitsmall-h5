import Vue from "vue"
import Vuex from "vuex"

import getters from "./getters.js"
import mutations from "./mutations.js"
import actions from "./actions.js"

Vue.use(Vuex)

const state = {
	cart: [],
	order: [],
	isLogin: false,
	username: '',
	avatar: '',
	site: []
}

const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions
});


export default store;