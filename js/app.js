var app = angular.module('insided', ['ui.router', 'directives', 'controllers', 'ngQuickDate'])

.run(function($rootScope) {
	$rootScope.sidebarItems = [
		{
			icon: 'ion-stats-bars',
			title: 'Analytics'
		},
		{
			icon: 'ion-settings',
			title: 'Moderation'
		},
		{
			icon: 'ion-person',
			title: 'Users'
		},
		{
			icon: 'ion-gear-a',
			title: 'Settings'
		}
	]
})

.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/users');

	$stateProvider
		.state('users', {
			url: '/users',
			templateUrl: 'templates/users.html',
			controller: 'UserCtrl'
		})

})