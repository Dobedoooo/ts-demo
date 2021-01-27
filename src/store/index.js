import { createStore } from "vuex";

export const store = createStore({
    state: {
        counter: 0
    },
    mutations: {
        add(state) {
            state.counter++;
        }
    }
});