function routerConfig ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state("root", {
    abstract: true,
    templateUrl: "templates/layout.tpl.html",
    controller: "LayoutController as vm"
  })
  .state("root.home", {
    url: "/",
    templateUrl: "templates/home.tpl.html"
  })
  .state("root.about", {
    url: "/about",
    templateUrl: "templates/about.tpl.html"
  })
  .state("layout.portfolio", {
    url: "/porfolio",
    templateUrl: "templates/portfolio.tpl.html"
  })
  .state("layout.resume", {
    url: "/resume",
    templateUrl: "templates/resume.tpl.html"
  });

  $urlRouterProvider.otherwise('/');
};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };
