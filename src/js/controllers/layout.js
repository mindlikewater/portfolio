function LayoutController ($location, $anchorScroll, PROJECTS) {
  let vm = this;
  vm.home = home;
  vm.list = PROJECTS;
  vm.images = [];

  vm.scrollTo = scrollTo;
  console.log(vm.scrollTo);

  function scrollTo(loc) {
    console.log("calling scrollTo function");
    $location.has(loc);
      $anchorScroll.yOffset = 90;
      $anchorScroll();
  }

  vm.images = vm.list.map( function(proj) {
    return proj.images;
  });
  console.log(vm.images);

};

LayoutController.$inject = ['$location', '$anchorScroll', 'PROJECTS'];
export { LayoutController };
