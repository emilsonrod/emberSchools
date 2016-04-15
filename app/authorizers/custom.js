import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';
export default Base.extend({
	authorize(sessionData, block) {
    if (!Ember.isEmpty(sessionData.token)) {
      block('Authorization',  'Bearer '+sessionData.token);
      block('Content-Type',  'application/json');
    }
  }
//    authorize: function(jqXHR, requestOptions) {

//    var accessToken = this.get('session.session.content.authenticator.token');
//        if (this.get('session.isAuthenticated') && !Ember.isEmpty(accessToken)) {
//            jqXHR.setRequestHeader('Authorization', 'Bearer ' + accessToken);
//        }
//    }
});