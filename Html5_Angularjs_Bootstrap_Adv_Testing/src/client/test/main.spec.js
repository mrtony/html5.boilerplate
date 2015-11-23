//demo
// describe("The Address Book App", function() {
// 	describe("the contact service", function() {
// 		it("should have a property contacts, an array", function() {
// 			chai.expect([]).to.be.an('array');	
// 		});
// 		
// 	})
// });


// describe("The Demo App", function() {
// 	describe("the contact service", function() {
//             it("should have a property contacts, an array", function() {
//                 module('app.core.dataservices');
//                 inject(function($injector) {
//                     dataservices = $injector.get('dataservices');
//                 });
//             
//                 dataservices.getData()
//                 .then(function(result) {
//                         chai.expect(dataservices.getData()).to.be.an('array');
//                 });
//             //chai.expect(dataservices.getData()).to.be.an('array');
//             });
// 		
// 	})
// });

// describe("The Demo App", function() {
// 	describe("the contact service", function() {
//             it("should have a property contacts, an array", function() {
//                 module('app.core.dataservices');
//                 inject(function($injector) {
//                     dataservices = $injector.get('dataservices');
//                 });
// 
//                 dataservices.getRemoteData()
//                 .then(function(result) {
//                     chai.expect(result).to.be.an('array');
//                 });
// 
//             });
// 		
// 	})
// });

// Sample model test.
describe("Ember.RSVP", function () {
    var promise;
        
    beforeEach(function() {
        module('app.core.dataservices');
        inject(function($injector) {
            dataservices = $injector.get('dataservices');
        });        
        
    });
    
	
    it("should resolve normally", function(done) {

        // dataservices.getData().then(function (data) {
        //     chai.expect(data).to.be.an('array');
        //     done();
        // });


        dataservices.getRemoteData().then(function() {
            chai.expect(data).to.be.an('array');
                done();
            
        });
    });
    
});