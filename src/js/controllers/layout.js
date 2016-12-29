function LayoutController($location, $anchorScroll) {
  let vm = this;

  vm.showMenu = function() {
    vm.menuStatus = true;
  }

  vm.hideMenu = function() {
    vm.menuStatus = false;
  }

  function init() {
    vm.menuStatus = false;
  }

  vm.scrollTo = function(id) {
       $location.hash(id);
       $anchorScroll();
    }

  init();
}

LayoutController.$inject = ["$location", "$anchorScroll"];
export { LayoutController }
