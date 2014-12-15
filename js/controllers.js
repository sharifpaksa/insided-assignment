var controllers = angular.module('controllers', [])

.controller('UserCtrl', function($scope, $rootScope, $compile) {

	$scope.selectedResults = [];
	$rootScope.selectedFilters = [];

	$scope.addFilterRow = function()
	{
		var element = angular.element(document.querySelector('.filter-rows'));
		var dir = $compile('<sp-search-filter></sp-search-filter>')($scope);
		element.append(dir);
	}

	$scope.resultChecked = function(idx)
	{
		var row = angular.element(document.querySelector('#result-' + idx));
		var arr = $scope.selectedResults;
		row.toggleClass('result-selected');
		if (arr.indexOf(idx) > -1)
		{
			arr.splice(arr.indexOf(idx), 1);
		}
		else
		{
			arr.push(idx);
		}
	}

	$scope.clearSelection = function()
	{
		$rootScope.selectedFilters = [];
		var rows = document.querySelectorAll('div.row.filter-row');

		console.log(rows)
		angular.forEach(rows, function(row){
			row.remove();
		});
	}

	$scope.removeRowAndTag = function(tag)
	{
		var spans = angular.element(document.getElementsByTagName('span'));
		var gaDoor = true;

		angular.forEach(spans, function(span) {
			if (gaDoor)
			{
				if (span.innerHTML == tag)
				{
					var row = span.parentNode.parentNode.parentNode.parentNode;
					row.remove();
					gaDoor = false;
				}
			}
		});

		$rootScope.selectedFilters.splice(tag, 1);
	}

	$scope.results = [
		{
			name: "Walter White",
			picture: 'img/walt.jpg',
			comments: 364,
			topics: 1,
			usergroup: 'Moderator',
			regdate: '14-02-2011 08:34',
			lastlogin: '24-09-2012 14:42',
			lastcomment: '31-12-2013 12:59'
		},
		{
			name: "Jesse Pinkman",
			picture: 'img/jesse.jpg',
			comments: 321,
			topics: 5,
			usergroup: 'Super-user',
			regdate: '14-02-2011 08:34',
			lastlogin: '24-09-2012 14:42',
			lastcomment: '31-12-2013 12:59'
		},
		{
			name: "Hank Schrader",
			picture: 'img/hank.jpg',
			comments: 353,
			topics: 12,
			usergroup: 'Moderator',
			regdate: '14-02-2011 08:34',
			lastlogin: '24-09-2012 14:42',
			lastcomment: '31-12-2013 12:59'
		},
		{
			name: "Badger",
			picture: 'img/badger.jpg',
			comments: 246,
			topics: 7,
			usergroup: 'Super-user',
			regdate: '14-02-2011 08:34',
			lastlogin: '24-09-2012 14:42',
			lastcomment: '31-12-2013 12:59'
		},
		{
			name: "Tuco Salamanca",
			picture: 'img/tuco.jpg',
			comments: 136,
			topics: 4,
			usergroup: 'Super-user',
			regdate: '14-02-2011 08:34',
			lastlogin: '24-09-2012 14:42',
			lastcomment: '31-12-2013 12:59'
		},
		{
			name: "Walt Junior",
			picture: 'img/waltjr.jpg',
			comments: 185,
			topics: 2,
			usergroup: 'Registered user',
			regdate: '14-02-2011 08:34',
			lastlogin: '24-09-2012 14:42',
			lastcomment: '31-12-2013 12:59'
		},
		{
			name: "Saul Goodman",
			picture: 'img/saul.jpg',
			comments: 123,
			topics: 9,
			usergroup: 'Moderator',
			regdate: '14-02-2011 08:34',
			lastlogin: '24-09-2012 14:42',
			lastcomment: '31-12-2013 12:59'
		},
		{
			name: "Gustavo Fring",
			picture: 'img/gus.jpg',
			comments: 107,
			topics: 3,
			usergroup: 'Moderator',
			regdate: '14-02-2011 08:34',
			lastlogin: '24-09-2012 14:42',
			lastcomment: '31-12-2013 12:59'
		},
		{
			name: "Skinny Pete",
			picture: 'img/pete.jpg',
			comments: 86,
			topics: '-',
			usergroup: 'Registered user',
			regdate: '14-02-2011 08:34',
			lastlogin: '24-09-2012 14:42',
			lastcomment: '31-12-2013 12:59'
		},
		{
			name: "Gale Boetticher",
			picture: 'img/gale.jpg',
			comments: 48,
			topics: 1,
			usergroup: 'Super-user',
			regdate: '14-02-2011 08:34',
			lastlogin: '24-09-2012 14:42',
			lastcomment: '31-12-2013 12:59'
		},
	]

})