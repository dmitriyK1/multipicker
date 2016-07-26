(function () {
	'use strict';

	angular.module('app').controller('MultiPickerController', MultiPickerController);

	MultiPickerController.$inject = ['$q'];

	function MultiPickerController($q) {
		var vm = this;

		vm.pickerData = [{
			id: 1,
			title: 'SLA00001-Changes Service Level Agreement'
		}, {
			id: 2,
			title: 'SLA00002-Incidents Service Level Agreement'
		}, {
			id: 3,
			title: 'SLA00003-Problems Service Level Agreement'
		}, {
			id: 4,
			title: 'SLA04-Support Center Germany (Standard: 8/5)'
		}, {
			id: 5,
			title: 'SLA05-Support Center Americas (Standard: 8/5)'
		},
		{
			id: 6,
			title: 'SLA06-SMA Solar Technology AG'
		},
		{
			id: 7,
			title: 'SLA07-R+V Versicherungen AG'
		},
		{
			id: 8,
			title: 'abc-Ausschluß SetupErrorLog Tests'
		},
		{
			id: 9,
			title: '42-Premium Support'
		},
		{
			id: 10,
			title: 'AUS-SB-PremiumPlus-Support Transition Premium Plus'
		},
		{
			id: 11,
			title: 'AUS-SB-Platinum24x7-Support Transition Platinum 24x7'
		},
		{
			id: 12,
			title: 'AUS-SB-Premium-Support Transition Premium'
		},
		{
			id: 13,
			title: 'Support Transition Standard-AUS-SB-Extended-Support Transition Extended'
		}];



		vm.pickerArray = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6'];
		vm.pickerArrayValue = 'Item5';
		vm.pickerValue = [1, 2];

		var items = [
			{
				Value: 1,
				DisplayString: 'ABA'
			},
			{
				Value: 2,
				DisplayString: 'ABC'
			},
			{
				Value: 3,
				DisplayString: 'BBC'
			},
			{
				Value: 4,
				DisplayString: 'BAC'
			},
			{
				Value: 5,
				DisplayString: 'BCS'
			},
			{
				Value: 6,
				DisplayString: 'AAA'
			}
		];
		vm.pickerLoadOnTypingValue = [items[0].Value];
		vm.pickerSimpleValue = ['Apple'];
		vm.pickerCommaValue = '1, 3';

		vm.loadItems = function (searchText) {

			console.log(searchText);
			var res = [];

			items.forEach(function (item) {
				if (item.DisplayString.toLowerCase().startsWith(searchText)) {
					res.push(item);
				}
			});

			return $q.when({items: res, searchText: searchText});
		};

		vm.navigateSelectedItem = function (item) {
			alert(JSON.stringify(item));
		};

		vm.browseLookup = function () {
			if (confirm('Add items?')) {
				return $q.when([vm.pickerData[2], vm.pickerData[4]]);
			} else {
				return $q.when();
			}
		};
	}

})();
