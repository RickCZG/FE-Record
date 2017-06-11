import * as types from "./mutation-types";

export default {
	// 增加总时间
	[types.ADD_TOTAL_TIME](state, time) {
		state.totalTime = state.totalTime + time;
	},
	// 减少总时间
	[types.DEC_TOTAL_TIME](state, time) {
		state.totalTime = state.totalTime - time;
	},
	// 新增计划
	[types.SAVE_PLAN](state, plan) {
		const avatar = "http://oq34u1kg1.bkt.clouddn.com/doge.jpg";

		state.list.push(Object.assign({name: "czg2", avatar: avatar}, plan));
	},
	[types.DELETE_PLAN](state, idx) {
		state.list.splice(idx, 1);
	}
}