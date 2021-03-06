(function(window, undefined) {'use strict';


angular.module('adf.widget.US-Map', ['adf.provider'])
.config(["dashboardProvider", function(dashboardProvider){
  dashboardProvider
  .widget('US-Map', {
    title: 'US Map',
    description: 'display geo info',
    templateUrl: 'Widgets/adf-widget-usmap/src/view.html',
    controller: 'US-MapCtrl',
    edit: {
      templateUrl: 'Widgets/adf-widget-usmap/src/edit.html'
    }
  });
}])
.controller('US-MapCtrl', ["$scope", function($scope) {
  var map = new Datamap({
    element: document.getElementById('usmap'),
    scope: 'usa',
    fills: {
      'MN': '#7a0019',
      '1k': '#F44336',
      '2k': '#2196F3',
      defaultFill: '#ffcc33'
    },
    data: {
      'MN': {fillKey: 'MN'}
    }
  });

  var bombs = [
    {
      name: 'Joe 4',
      radius: 25,
      fillKey: '1k',
      latitude: 37,
      longitude: -120
    },
    {
      name: 'RDS-37',
      radius: 40,
      fillKey: '2k',
      latitude: 46,
      longitude: -94
    }
  ];
  //draw bubbles for bombs
  map.bubbles(bombs);
}]);

angular.module("adf.widget.US-Map").run(["$templateCache", function($templateCache) {$templateCache.put("{widgetsPath}/US-Map/src/edit.html","<form role=form><div class=form-group><label for=sample>Sample</label> <input type=text class=form-control id=sample ng-model=config.sample placeholder=\"Enter sample\"></div></form>");
$templateCache.put("{widgetsPath}/US-Map/src/view.html","<div><style>\n\n  #usmap {\n    position: relative;\n    width: 100%;\n    height: 180px;\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 1200px;\n    float: none;\n  }\n\n  @media only screen and (min-width : 320px) {\n    #usmap {\n      height: 240px;\n    }\n  }\n\n  /* Extra Small Devices, Phones */\n  @media only screen and (min-width : 480px) {\n    #usmap {\n      height: 330px;\n    }\n  }\n\n  /* Small Devices, Tablets */\n  @media only screen and (min-width : 768px) {\n    #usmap {\n      height: 450px;\n    }\n  }\n\n  /* Medium Devices, Desktops */\n  @media only screen and (min-width : 992px) {\n    #usmap {\n      height: 540px;\n    }\n  }\n  </style><div class=usmapdata id=usmap></div></div>");}]);})(window);
