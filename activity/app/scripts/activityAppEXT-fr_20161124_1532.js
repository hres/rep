/**
 * Created by dkilty on 8/26/2016.
 */
(function () {
    'use strict';
    angular
        .module('activityApp', [
            'pascalprecht.translate',
            'activityMain',
            'translations'
        ])
})();

(function () {
    'use strict';
    angular
        .module('activityApp')
        .controller('MainController', MainController);

    function MainController() {
        var vm = this;
        vm.formType = 'EXT';
    }
})();
//test
(function () {
    'use strict';
    angular
        .module('activityApp')
        .config(['$translateProvider', function ($translateProvider) {
            $translateProvider.preferredLanguage('fr');
            //this prevents conflicts with ngMessage
            $translateProvider.directivePriority(1);
            $translateProvider.useSanitizeValueStrategy('sanitize');
        }]);
})();