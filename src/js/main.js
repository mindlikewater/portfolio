import angular from 'angular';
import 'angular-ui-router';

import { routerConfig } from './routes';
import { LayoutController } from './controllers/layout';
import { PortfolioController } from './controllers/portfolio';
import { myProjects } from './allproj';

angular
  .module('app', ['ui.router'])
  .config(routerConfig)
  .controller('LayoutController', LayoutController)
  .controller("PortfolioController", PortfolioController)
  .constant('myProjects', myProjects)
