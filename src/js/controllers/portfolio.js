function PortfolioController(PROJECTS, $stateParams) {
  let vm = this;
  vm.list = PROJECTS;
  vm.name = $stateParams.name;
  vm.single = [];

  function init () {
    console.log("vm.list= ", vm.list);
    vm.images = vm.projects.map( function (x) {
      return x.images;
    });
  }
  console.log ("vm.images= ", vm.images);
  init();

  // for (var i = 0; i < vm.list.length; i++) {
  //   if(vm.list[i] === vm.name) {
  //     vm.single.push(vm.list[i]);
  //   }
  // };
  //
  // vm.images = vm.single[0].images;

};

export { PortfolioController }
