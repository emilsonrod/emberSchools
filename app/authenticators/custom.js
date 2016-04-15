import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
export default Base.extend({
    tokenEndpoint: 'http://192.168.1.172/KidsChooseApi/v1.0/mobile/users/login',
    restore: function(data) {
        return new Ember.RSVP.Promise(function(resolve, reject) {
            if (!Ember.isEmpty(data.token)) {
                resolve(data);
            } else {
                reject();
            }
        });
    },
    authenticate: function(options) {
        return new Ember.RSVP.Promise((resolve, reject) => {
            Ember.$.ajax({
                url: this.tokenEndpoint,
                type: 'POST',
                data: JSON.stringify({
                    username: options.identification,
                    password: options.password,
                    os: "1",
                    idDevice: "web"
                }),
                contentType: 'application/json',
            }).then(function(response) {
                Ember.run(function() {
                    resolve({
                        token: response.access_token
                    });
                });
            }, function(xhr, status, error) {
                var response = xhr.responseText;
                
                Ember.run(function() {
                    reject(response);
                });
            });
        });
    },
    invalidate: function() {
        console.log('invalidate...');
        return Ember.RSVP.resolve();
    }
});