'use strict';

var helpers = require('./helpers');

describe('operations', function() {

  helpers.goHome();

  afterEach(helpers.checkLogs);

  describe('navigation', function() {
    describe('when clicking on "All Paths"', function(){

      it('navigates using click on all paths', function(){
        $('.side-bar a.all-paths').click();
        expect(browser.getCurrentUrl()).toContain('/paths/');
      });

      it('should remove info section', function(){
        expect($('.info').isPresent()).toBe(false);
      });

      it('renders all paths', function() {
        expect($$('.operation').count()).toBe(18);
        expect($$('.path').count()).toBe(12);
      });
    });

    describe('when clicking on a path name on sidebar', function(){
      it('navigates by clicking on /pets path', function(){

        $('.side-bar .path-name-link:not(.all-paths) h5').click(); // click the first one which is /pets
        expect(browser.getCurrentUrl()).toContain('pets');
      });

      it('renders only /pets operations', function() {
        expect($$('.operation').count()).toBe(2);
        expect($$('.path').count()).toBe(1);
      });
    });
  });
});
