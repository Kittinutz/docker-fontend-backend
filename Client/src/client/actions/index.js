//import axios from 'axios' for another api;
export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () =>async (dispatch,getState,api) =>{
    const res = await  api.get('/users');
    dispatch({
        type:FETCH_USERS,
        payload:res
    })
};

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = ()=> async (dispatch,getState,api) =>{
    const res = await api.get('/current_user');
    dispatch({
      type: FETCH_CURRENT_USER,
      payload:res
    })
};
// async await open up babel-polyfill;

export const FETCH_ADMINS = 'fetch_admins';
export const fetchAdmins = () => async (dispatchh,getState,api)=>{
  const res = await api.get('/admins');
  dispatchh({
    type:FETCH_ADMINS,
    payload:res
  });
};
