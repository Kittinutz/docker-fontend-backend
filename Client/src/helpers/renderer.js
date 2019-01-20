import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/pages/HomePage';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript'; //run
import Routes from '../client/routes';
import { Helmet } from 'react-helmet';
import Loadable from 'react-loadable'
import { getBundles } from 'react-loadable/webpack';
import stats from '../../dist/react-loadable.json';

export default (req, store, context) => {

  let modules = []
  const content = renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <Provider store={store}>
        <StaticRouter location={req.path} context={context}>
          <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
      </Provider>
    </Loadable.Capture>
  );
  const helmet = Helmet.renderStatic()
  let bundles = getBundles(stats, modules);
  let scripts = bundles.filter(bundle => bundle.file.endsWith('.js'));
  const test =
    `
  <!DOCTYPE html>
  <html>
   <meta charset="utf-8" >
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Rabbitmansion</title>
       <head>
       ${helmet.title.toString()}
       ${helmet.meta.toString()}
       <link rel='stylesheet' href='http://cdn.bootcss.com/antd/2.9.3/antd.css' />
       </head>
        <body>
           <div id="root">${content}</div>
           <script>
              window.INITIAL_STATE = ${serialize(store.getState())};
           </script>
           ${scripts.map(script => {
      console.log('script', script.file)
      return `<script src="${script.file}"></script>`
    }).join('\n')}
    <script src="build.js"></script>
      </body>
  </html>
  `;
  return test
};
//serialize tostring no tag script it String like "unicode token"