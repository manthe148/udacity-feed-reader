/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         ******************************
         *  jasmine hits on an error!!*
         ******************************
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('url is defined', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
                expect(feed.url).toMatch(/(http|https):\/\//)
            })
         })

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name is defined', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(typeof feed.name).toBe('string');
                expect(feed.name.length).not.toBe(0);
            })
         })
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('the menu', function(){
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        var body = document.body;
        var menuIcon = document.querySelector('.menu-icon-link');

        it('body has a hidden menu', function(){
            expect(body.className).toContain("menu-hidden");
        })
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

            //this checks to see if the menu icon was clicked
        it('toggles the menu button to to check if hidden', function(){
            
             menuIcon.click();
            expect(menuIcon.classList.toggle('menu-hidden')).toBe(true);

            menuIcon.click();
            expect(menuIcon.classList.toggle('menu-hidden')).toBe(false)
        })
            
        })


//         it('should check if menu can show', function() {
//  expect(document.querySelector('.menu-icon-link').classList.toggle('menu-hidden')).toBe(true);
// });
// it('should check if menu can hide', function() {
// expect(document.querySelector('.menu-icon-link').classList.toggle('menu-hidden')).toBe(false);
// });
// });
//     })

         

         



    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done){
            loadFeed(0, function(){
                done();
            })
        })
            it('has at least one entry after loadFeed has ran', function(done){
                var numEntry = document.querySelector(".feed").getElementsByClassName("entry").length;
                
                expect(numEntry).toBeGreaterThan(0);
                done();
            })

           
    })

    /* TODO: Write a new test suite named "New Feed Selection" */
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    describe('New Feed Selection', function(){
        var initialSetup;
        
        beforeEach(function(done){
            loadFeed(0, function(){
                initialSetup = document.querySelector('.feed').innerHTML;

                loadFeed(1, function(){
                    done();
                })
            })
        })
        
        it('renders the loaded content', function(done){
            var newFeed = document.querySelector('.feed').innerHTML;
            expect(initialSetup).not.toBe(newFeed);
            done();
        })
    })


    
}());
