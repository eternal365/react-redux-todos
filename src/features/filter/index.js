const TOGGLE_VISIBILITY = 'filter/toggleVisibility';

export const toggleVisibility = () => ({
    type: TOGGLE_VISIBILITY,
});

const initialState = 'all';

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {

        case TOGGLE_VISIBILITY: {
            return (state === 'all') ? 'completed' : 'all';
        }

        default: {
            return state;
        }

    }
};

export const selectFilter = (state) => {
    return state.filter;
};
