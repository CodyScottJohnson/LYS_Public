"use strict";

 angular.module('config', [])

.constant('ENV', {API:'https://loseyourselfinguatemala.com/API/Open/',Runkeeper:{redirect_uri:'http://localhost:9000/#!/Oauth/runkeeper'},Strava:{redirect_uri:'http://localhost:9000/#!/Oauth/strava'}})

;