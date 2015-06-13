/*Router.route('/', function () {
  this.render('main');
});

Router.route('/forum', function () {
  var req = this.request;
  var res = this.response;
  res.end('hello from the server\n');
}, {where: 'server'});

*/


if (Meteor.isClient) {

Router.route('/', function () {
  this.render('home');
});

Router.route('/forum');  
  
  Template._loginButtonsLoggedInDropdown.events({
    'click #login-buttons-edit-profile': function(event) {
        event.stopPropagation();
        Template._loginButtons.toggleDropdown();
        Router.go('profileEdit');
    }
});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
