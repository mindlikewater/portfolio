function PortfolioController(PROJECTS) {
  let vm = this;
  vm.projects = PROJECTS;
  vm.images = [];

  function init () {
    console.log("vm.projects= ", vm.projects);
    vm.images = vm.projects.map( function (x) {
      return x.images;
    });
  }
  console.log ("vm.images= ", vm.images);
  init();
}

PortfolioController.$inject = ["PROJECTS"];
export { PortfolioController }
