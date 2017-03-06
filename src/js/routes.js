function routerConfig ($stateProvider, $urlRouterProvider, $qProvider) {
  $stateProvider
  .state("root", {
    abstract: true,
    templateUrl: "templates/layout.tpl.html",
    controller: "LayoutController as layout"
  })
  .state("root.home", {
    url: "/",
    templateUrl: "templates/home.tpl.html"
  })
  .state("root.about", {
    url: "/about",
    templateUrl: "templates/about.tpl.html"
  })
  // .state("root.portfolio", {
  //   url: "/porfolio",
  //   templateUrl: "templates/portfolio.tpl.html"
  // })
  // .state("root.resume", {
  //   url: "/resume",
  //   templateUrl: "templates/resume.tpl.html"
  // });

  $urlRouterProvider.otherwise('/');
  $qProvider.errorOnUnhandledRejections(false);
};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$qProvider'];
export { routerConfig };
