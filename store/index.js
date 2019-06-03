export const state = () => ({
    windowWidth: 0
});

export const mutations = {
    SET_WINDOW_WIDTH(state, width) {
        state.windowWidth = width;
    }
};

export const getters = {
    getWindowWidth: state => {
        return state.windowWidth;
    }
}

export const actions = {
    setWindowWidth({commit}, width) {
        commit("SET_WINDOW_WIDTH", width);
    }
}
