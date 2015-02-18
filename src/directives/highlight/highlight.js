/*
 * This attribute directive will get an argument, when that argument is true
 * it will apply the "swagger-docs-highlighted" class to the element and bring it to the view
 * using Element#scrollIntoViewIfNeeded() method
 *
 * @param do {boolean} - determines if it should highlight or not
 *
 * @example
 * <div highlight="true">This div will be highlighted</div>
*/

'use strict';
/*jshint esnext: true */

function highlight($parse) {
  return {
    restrict: 'A',
    link: (scope, element, attributes)=> {

      scope.$watch(attributes.highlight, apply);

      apply(attributes.highlight);

      function apply(newValue) {

        if (newValue) {
          angular.element('*').removeClass('swagger-docs-highlighted');
          element.get(0).scrollIntoViewIfNeeded(true);
          element.addClass('swagger-docs-highlighted');
        }
      }
    }
  };
}

highlight.$inject = ['$parse'];

export default highlight;
