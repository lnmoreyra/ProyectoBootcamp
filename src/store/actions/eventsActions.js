import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const get_events = createAsyncThunk('get_events', async ()=>{
try {
        let eventos = await axios.get("https://mindhub-xj03.onrender.com/api/amazing")
        .then((response) => {
        return response.data.events; 
        

}); 

return eventos

}catch (e){
    console.log('Error: ' + e);
}

})

const eventsActions = { get_events }

export default eventsActions
