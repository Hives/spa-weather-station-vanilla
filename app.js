'use strict';

import { Home, ShowChart, Error404 } from './views/pages/pages.mjs';
import Utils from './services/helper-methods.js';

const routes = {
  '/': Home,
  '/charts': ShowChart
};

const router = function() {
  const content = null || document.getElementById('page_container');

  //Get the request object : {resource, id} elements
  let request = Utils.parseRequestURL();

  //Parse url - if it has id route to resource/id
  let parsedURL =
    (request.resource ? '/' + request.resource : '/') +
    (request.id ? '/:id' : '');

  //Get the page from the routes - If parsed page is not in the routes - select 404 page

  let page = routes[parsedURL] ? routes[parsedURL] : Error404;

  content.innerHTML = page.render();

  return parsedURL;
};

window.addEventListener('load', router);

window.addEventListener('hashchange', router);
