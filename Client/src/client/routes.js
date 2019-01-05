// server and client route basic
import React from 'react';
import App from './App';
import Loadable from 'react-loadable';
const Homeloadble = Loadable({
  loader: () => import('./pages/HomePage'),
  loading() {
    return <div>Loading...</div>
  },
  modules: ['./pages/HomePage'],
  webpack: () => [require.resolveWeak('./pages/HomePage')],
  render: (loaded,props) => {
    console.log('props',props)
    let Component = loaded.default
    return <Component/>;
  }
});
const Dynamicimport = pageName => Loadable({
  loader: () => import(`./pages/${pageName}`).then(Module=>Module.component),
  loading() {
    return <div>Loading...</div>
  },
  modules: [`./pages/${pageName}`],
  webpack: () => [require.resolveWeak(`./pages/${pageName}`)],
});
import HomePage from './pages/HomePage';
import UsersListPage, {loadData} from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage'
import AdminsListPage  from  './pages/AdminsListPage'
// export default () => {
//     return (
//         <div>
//             <Route exact path="/" component={Home}/>
//             <Route  path="/users" component={UsersList}/>
//         </div>
//     )
// }
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
        ...AdminsListPage,
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

