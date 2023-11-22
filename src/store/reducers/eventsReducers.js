import { createReducer } from '@reduxjs/toolkit'
import eventsActions from '../actions/eventsActions'


const stateInitial = []


const eventsReducer = createReducer(stateInitial, (builder)=>{
    return builder
    .addCase(eventsActions.get_events.fulfilled, (state, action) => {
    
        let newState = action.payload


        return newState;
    });
});              


export default eventsReducer;