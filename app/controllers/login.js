import Ember from 'ember';
export default Ember.Controller.extend({
	session: Ember.inject.service(),
	authenticator: 'authenticator:custom',
    actions: {
        authenticate: function() {
            var credentials = this.getProperties('identification', 'password');
            this.get('session').authenticate('authenticator:custom', credentials).catch((message) => {
                this.set('errorMessage', message);
            });
        }
    }
});