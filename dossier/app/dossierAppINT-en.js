(function () {
'use strict';


    //TODO: Lazy load modules
angular.module('dossierApp', ['pascalprecht.translate','ngSanitize', 'dossierModule'])
    .controller('MainController', MainController);

    angular.element(document).ready(function() {
        angular.bootstrap(document, ['dossierApp']);
    })

    function MainController() {
            var vm = this;
            vm.formType = 'INT';
        }


})();

(function () {
    'use strict';
    angular
        .module('dossierApp')
        .config(['$translateProvider', function ($translateProvider) {
            $translateProvider.useStaticFilesLoader({
                files: [
                    {
                        prefix: 'app/resources/dossier-dosageform-',
                        suffix: '.json'
                    },
                    {
                        prefix: 'app/resources/fileIO-',
                        suffix: '.json'
                    },
                    {
                        prefix: 'app/resources/dossier-',
                        suffix: '.json'
                    },
                    {
                        prefix: 'app/resources/dossier-general-',
                        suffix: '.json'
                    },



                ]
            });
            $translateProvider.preferredLanguage('en');
            //this prevents conflicts with ngMessage
            $translateProvider.directivePriority(1);
            $translateProvider.useSanitizeValueStrategy('sanitize');
        }]);
})();