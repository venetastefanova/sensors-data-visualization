import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setData = (entries)=>{
    return{
        type:actionTypes.SET_DATA,
        entries:entries
    }
}

export const fetchDataFail = ()=>{
    return{
        type:actionTypes.FETCH_DATA_FAIL
    }
}
export const initData = () => {
    return dispatch =>{ // coming from redux thunk
         axios.get('http://68.183.46.64:3000/sensors-data')
            .then(response=>{        
                dispatch(setData(response.data.pop()));//get the latest entry
                // console.log(response.data.pop())
            })
            .catch(error=>{
                dispatch(fetchDataFail());
            });
    }
}