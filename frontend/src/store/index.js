import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// initial state
const state = {
	credit: ''
}

// getters
const getters = {
	getCredit: state => state.credit 
}

// actions
const actions = {
	setCredit({ commit }, credit){
		commit(types.SET_CREDIT, {
			credit
		})
	}
}

// mutations
const mutations = {

	[types.SET_CREDIT] (state, { credit }) {
		state.credit = credit;
	} 
}

// one store for entire application
export default new Vuex.Store({
	state,
	strict: debug,
	getters,
	actions,
	mutations
})
