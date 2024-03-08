import { configureStore } from "@reduxjs/toolkit";

// State de Base
let initialState = {
    employees: null,
};

// Gestion des changements d'état
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                employees: state.employees ? [...state.employees, ...action.payload] : action.payload,
            };
        default:
            return state;
    }
}


// Regroupe nos reducers (dans se cas nous avons qu'un reducer)
const rootReducer = {
    auth: authReducer,
}

// Configuration du store pour etre utilisé dans l'app
export const store = configureStore({
    reducer: rootReducer,
})