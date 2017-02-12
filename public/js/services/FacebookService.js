app.factory("FacebookService",function($q, Facebook) {
	var service = {};

	service.getUserData = function() {
		var deferred = $q.defer();
		Facebook.api('/me', {
			fields: 'first_name,last_name,email,gender,birthday'
		}, function(response) {
			if (!response || response.error) {
				deferred.reject('Error occured');
			} else {
				deferred.resolve(response);
			}
		});
		return deferred.promise;
	};

	return service;
});