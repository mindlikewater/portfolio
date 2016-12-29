function LayoutController ($state) {
  let vm = this;
  vm.home = home;
  vm.about = about;
  vm.portfolio = portfolio;
  vm.resume = resume;

  function home () {
    $state.go('root.home')
  }
  function about () {
    $state.go('root.about')
  }
  function portfolio () {
    $state.go('root.portfolio')
  }
  function resume () {
    $state.go('root.resume')
  }
};

LayoutController.$inject = ["$state"];
export { LayoutController };
