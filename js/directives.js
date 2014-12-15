var directives = angular.module('directives', [])

.directive('spSearchFilter', function($rootScope) {
	return {
		scope: {},
		restrict: 'E',
		templateUrl: 'templates/searchFilter.html',
		controller: function($scope)
		{
			$scope.firstFilter = 0;
			$scope.secondFilter = 0;
			$scope.thirdFilter = 0;
			this.firstFilter = $scope.firstFilter;
			this.secondFilter = $scope.secondFilter;
			this.thirdFilter = $scope.thirdFilter;

			$scope.setFirstFilter = function(dii)
			{
				$scope.secondFilter = 0;
				$scope.thirdFilter = 0;
				$scope.firstFilter = dii;
			}

			$scope.setSecondFilter = function(dii)
			{
				$scope.thirdFilter = 0;
				$scope.secondFilter = dii;
			}

			$scope.setThirdFilter = function(dii)
			{
				$scope.thirdFilter = dii;
			}
		},
		link: function(s,e,a)
		{
			s.deleteRow = function()
			{
				e.remove();
				var label = e[0].childNodes[0].childNodes[1].childNodes[1].childNodes[1].innerText;
				s.$root.selectedFilters.splice(label, 1);
			}
		}
	}
})

.directive('spDropdown', function() {
	return {
		scope: true,
		transclude: true,
		require: '^spSearchFilter',
		restrict: 'E',
		templateUrl: 'templates/dropdown.html',
		replace: true,
		link: function(s,e,a)
		{
			s.dateVal = new Date();
			s.label = a.label;

			if (a.disabled == 'true')
			{
				e.addClass('disabled');
			}
			else
			{
				s.opts = a.opts.split(',');
				if (a.checkboxes == 'false')
				{
					s.checkboxes = false;
				}
				else
				{
					s.checkboxes = true;
				}
				if (a.calendar == 'false')
				{
					s.calendar = false;
				}
				else
				{
					s.calendar = true;
					s.label = "";
				}
				if (a.filter == 'false')
				{
					s.filter = false;
				}
				else
				{
					s.filter = true;
				}

				s.openDropdown = function()
				{
					e.toggleClass('active');
				}

				s.checkAllBoxes = function()
				{
					angular.forEach(e.find('input'), function(node) {
						node.checked = true;
					});				
				}

				s.uncheckAllBoxes = function()
				{
					angular.forEach(e.find('input'), function(node) {
						node.checked = false;
					});		
				}
			}
		},
		controller: function($scope, $rootScope)
		{
			$scope.setValue = function(opt)
			{
				$scope.label = opt;
				if (opt == 'Comments')
				{
					$scope.setFirstFilter(1);
				}
				else if (opt == 'Registration date')
				{
					$scope.setFirstFilter(2);
				}
				else if (opt == 'Usergroup')
				{
					$scope.setFirstFilter(3);
					$rootScope.selectedFilters.push('Usergroup');
				}
				else if (opt == 'is greater than')
				{
					$scope.setSecondFilter(1);
				}
				else if (opt == 'is less than')
				{
					$scope.setSecondFilter(2);
				}
				else if (opt == 'before')
				{
					$scope.setSecondFilter(1);
					$rootScope.selectedFilters.push('Registration date');
				}
				else if (opt == 'after')
				{
					$scope.setSecondFilter(2);
					$rootScope.selectedFilters.push('Registration date');
				}
				else if (opt == 'on')
				{
					$scope.setSecondFilter(3);
					$rootScope.selectedFilters.push('Registration date');
				}
				else if (opt == '5')
				{
					$scope.setThirdFilter(1);
					$rootScope.selectedFilters.push('Comments');
				}
				else if (opt == '15')
				{
					$scope.setThirdFilter(2);
					$rootScope.selectedFilters.push('Comments');
				}
				else if (opt == '50')
				{
					$scope.setThirdFilter(3);
					$rootScope.selectedFilters.push('Comments');
				}
				else if (opt == '100')
				{
					$scope.setThirdFilter(4);
					$rootScope.selectedFilters.push('Comments');
				}
			}
		}
	}
})


.directive('spDropdownB', function() {
	return {
		scope: true,
		restrict: 'E',
		templateUrl: 'templates/dropdown.html',
		replace: true,
		link: function(s,e,a)
		{
			s.label = a.label;
			if (a.disabled == 'true')
			{
				e.addClass('disabled');
			}
			else
			{
				s.opts = a.opts.split(',');
				if (a.checkboxes == 'false')
				{
					s.checkboxes = false;
				}
				else
				{
					s.checkboxes = true;
				}
				if (a.calendar == 'false')
				{
					s.calendar = false;
				}
				else
				{
					s.calendar = true;
					s.label = "";
				}
				if (a.filter == 'false')
				{
					s.filter = false;
				}
				else
				{
					s.filter = true;
				}

				s.openDropdown = function()
				{
					e.toggleClass('active');
				}
			}

			s.setValue = function(opt)
			{
				s.label = opt;
			}

			s.checkAllBoxes = function()
			{
				angular.forEach(e.find('input'), function(node) {
					node.checked = true;
				});				
			}

			s.uncheckAllBoxes = function()
			{
				angular.forEach(e.find('input'), function(node) {
					node.checked = false;
				});		
			}
		}
	}
})

.directive('spPagination', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/pagination.html'
	}
})