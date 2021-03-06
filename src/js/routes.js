function routerConfig ($stateProvider, $urlRouterProvider) {
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
    templateUrl: "templates/about.tpl.html",
    controller: "AboutController as about"
  })
  .state("root.portfolio", {
    url: "/porfolio",
    templateUrl: "templates/portfolio.tpl.html",
    controller: "PortfolioController as portfolio"
  })
  .state("root.resume", {
    url: "/resume",
    templateUrl: "templates/resume.tpl.html",
    controller: "ResumeController as resume"
  });

  $urlRouterProvider.otherwise('/');
};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };
