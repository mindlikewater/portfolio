import angular from 'angular';
import 'angular-ui-router';

import { routerConfig } from "./routes";
import { LayoutController } from './controllers/layout';
import { AboutController } from './controllers/about';
import { PortfolioController } from "./controllers/portfolio";
import { ResumeController } from './controllers/resume';

angular
  .module('app', ['ui.router'])
  .config(routerConfig)
  .controller('LayoutController', LayoutController)
  .controller("PortfolioController", PortfolioController)
