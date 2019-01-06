// server and client route basic
import React from 'react';
import App from './App';
import Loadable from 'react-loadable';
import {fetchAdmins} from './actions';

const Dynamicimport = pageName => Loadable({
  loader: () => import(`./pages/${pageName}`),
  loading() {
    return <div>Loading...</div>
  },
});

import HomePage from './pages/HomePage';
import UsersListPage, {loadData} from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage'
import AdminsListPage,{ loadDatafetchAdmins }  from  './pages/AdminsListPage'

const loadDataFetchAdmins = ({dispatch})=>dispatch(fetchAdmins())

export default [
  {
    ...App,
    routes: [
      {
        component: Dynamicimport('HomePage'),
        path: '/',
        exact: true
      },
      {
        component:Dynamicimport('AdminsListPage'),
        loadData:loadDatafetchAdmins,
        path:'/admins'
        
      },
      {
        ...UsersListPage,
        path: '/users',
        
      },
      {
        component: Dynamicimport('NotFoundPage')
      }
    ]
  },
  {
  
  }
];

