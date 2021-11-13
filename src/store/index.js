import { createStore } from 'vuex'

export default createStore({
	state: {
		dateVaccance: {
			day: 17,
			month: 4,
			year: 2001,
		},
		dateActuelle: {
			d: new Date(),
		},
		count: 0,
	},
	getters: {
		formatedDate: (state) => {
			return (
				state.dateVaccance.day +
				"/" +
				state.dateVaccance.month +
				"/" +
				state.dateVaccance.year
			);
		},
	},
	mutations: {
		INC_COUNT(state, amount = 1) {
			state.count += Number(amount);
		},
		DEC_COUNT(state, amount = 1) {
			state.count += Number(amount);
		},
	},
	actions: {
		updateCount({ commit }, amount) {
			if (amount > 0) {
				commit("INC_COUNT", amount);
			}else {
				commit("DEC_COUNT", amount);
			}
		},
	},
	modules: {},
});
