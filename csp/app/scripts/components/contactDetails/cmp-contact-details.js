/**
 * Created by Abdessamad on 7/5/2016.
 */

(function () {
    'use strict';

    angular
        .module('contactModule', [
            'dataLists',
            'hpfbConstants'
        ])
})();

(function () {
    'use strict';

    angular
        .module('contactModule')
        .component('cmpContactDetails',{
            templateUrl: 'app/scripts/components/contactDetails/tpl-contact-details.html',
            controller: contactCtrl,
            controllerAs: 'contCtrl',
            bindings: {
                contactRecord: '<',
                onUpdate: '&', //should be removed not used, deprecated
                isAmend: '<',
                showErrors: '&',
                faxMandatory:'@',
                updateErrorSummary:'&',
                fieldSuffix:'<'
            }
    });

    contactCtrl.$inject = ['getContactLists','ENGLISH','FRENCH','$scope'];
    function contactCtrl( getContactLists,ENGLISH,FRENCH,$scope) {
        var vm = this;
        vm.isEditable = true;
        vm.ngModelOptSetting = {updateOn: 'blur'};
        vm.salutationList = getContactLists.getSalutationList();
        vm.langCorresppond=[ENGLISH,FRENCH];
        vm.faxRequired=false; //default to false for backwards compatibility
        vm.phoneReg=/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
        vm.contactModel = {
            salutation: "",
            givenName: "",
            surname: "",
            initials: "",
            title: "",
            phone: "",
            phoneExt: "",
            fax: ""
        };
        vm.inputModelOptions={updateOn: 'blur'};
        vm.fldId=""; //used to dynamically distinguish fields default to empty for backwards compat
        vm.$onInit = function () {
           vm.langList=[ENGLISH,FRENCH];

        };

        vm.$onChanges=function(changes){
            if(changes.contactRecord){
                vm.contactModel = changes.contactRecord.currentValue;

            }
            if (changes.isAmend) {
                vm.isEditable = changes.isAmend.currentValue;
            }
            if(changes.faxMandatory){
               vm.faxRequired=changes.faxMandatory.currentValue;
            }
            if(changes.fieldSuffix){

                vm.fldId=changes.fieldSuffix.currentValue;
            }

        };
        vm.showError=function(ctrl){
            if(!ctrl){
                return false;
            }
            if((ctrl.$invalid && ctrl.$touched) || (vm.showErrors()&&ctrl.$invalid )){
                return true
            }
            return false
        }

    }

})();

