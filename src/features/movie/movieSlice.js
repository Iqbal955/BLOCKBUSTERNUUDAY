import  { createSlice } from '@reduxjs/toolkit';

{/*
We use the createSlice function to create a slice of the state. We pass in the name of the slice and the initial state. 
The initial state is an empty array. The createSlice function returns an object with a reducer and an actions object. 
The reducer is a function that takes the current state and an action and returns the new state. The actions object contains the action creators. 
The action creators are functions that return an action. The action creators are used to dispatch actions to the store.

*/}
const initialState = {
    recommend: null,
    newOnBlockBuster: null,
    original: null,
    trending: null,
    action: null,
    comedy: null,
    drama: null,
    horror: null,
    thriller: null,
    crime: null,
    documentary: null,
    romance: null,
    war: null,
};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.recommend = action.payload.recommend;
            state.newOnBlockBuster = action.payload.newOnBlockBuster;
            state.original = action.payload.original;
            state.trending = action.payload.trending;
            state.action = action.payload.action;
            state.comedy = action.payload.comedy;
            state.drama = action.payload.drama;
            state.horror = action.payload.horror;
            state.thriller = action.payload.thriller;
            state.crime = action.payload.crime;
            state.documentary = action.payload.documentary;
            state.romance = action.payload.romance;
            state.war = action.payload.war;
        },
        }
    });

export const { setMovies } = movieSlice.actions;

export const selectRecommend = state => state.movie.recommend;
export const selectnewBlockBuster = state => state.movie.newOnBlockBuster;
export const selectOriginal = state => state.movie.original;
export const selectTrending = state => state.movie.trending;
export const selectAction = state => state.movie.action;
export const selectComedy = state => state.movie.comedy;
export const selectDrama = state => state.movie.drama;
export const selectHorror = state => state.movie.horror;
export const selectThriller = state => state.movie.thriller;
export const selectCrime = state => state.movie.crime;
export const selectDocumentary = state => state.movie.documentary;
export const selectRomance = state => state.movie.romance;
export const selectWar = state => state.movie.war;


export default movieSlice.reducer;