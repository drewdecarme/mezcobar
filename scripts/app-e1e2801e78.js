!function(){"use strict";angular.module("app",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","restangular","ui.router","toastr","angularSoundManager"])}(),function(){"use strict";function n(n,i){n.state("main",{url:"/",templateUrl:"app/main/main.html",controller:"mainController",controllerAs:"vm"})}n.$inject=["$stateProvider","$urlRouterProvider"],angular.module("app").config(n)}(),function(){"use strict";function n(n){}angular.module("app").controller("mainController",["$log",n])}(),function(){"use strict";function n(n,i){n.state("player",{url:"/player",templateUrl:"app/player/player.html",controller:"playerController",controllerAs:"vm"})}n.$inject=["$stateProvider","$urlRouterProvider"],angular.module("app").config(n)}(),function(){"use strict";function n(n){function i(i,t,e){n(function(){t.triggerHandler("click")})}var t={restrict:"A",link:i};return t}angular.module("app").directive("playerInitPlaylist",["$timeout",n])}(),function(){"use strict";function n(n,i){var t=this;t.isPlaylistActive=!0,t.isArtActive=!1,t.isVisualActive=!1,t.isMenuActive=!1,t.toggleMenu=function(){t.isMenuActive=t.isMenuActive?!1:!0},t.toggleView=function(n){t.isPlaylistActive=!1,t.isArtActive=!1,t.isVisualActive=!1,t[n]=!0,t.isMenuActive=!1},t.songs=[{id:"1",title:"Sessions 1.0",artist:"Mezcobar",url:"/content/music/sessions_1.mp3",art:"/content/images/icon-headphones.svg"},{id:"2",title:"Sessions 2.0",artist:"Mezcobar",url:"/content/music/sessions_2.mp3",art:"/content/images/icon-play.svg"},{id:"3",title:"Sessions (February)",artist:"Mezcobar",url:"/content/music/sessions_february.mp3",art:"/content/images/icon-play-button.svg"},{id:"4",title:"Sessions (Deep Brunch)",artist:"Mezcobar",url:"/content/music/sessions_3.wav",art:"/content/images/icon-pause.svg"}]}angular.module("app").controller("playerController",["angularPlayer","$scope",n])}(),function(){"use strict";function n(n){n.debug("runBlock end")}function i(n){n.html5Mode(!0)}n.$inject=["$log"],angular.module("app").run(n).config(["$locationProvider",i])}(),angular.module("app").run(["$templateCache",function(n){n.put("app/player/player.html",'<section id=player class=blur><header class=song-information><div><h3 ng-bind="(currentPlaying.title) ? currentPlaying.title : \'No Song Playing\'"></h3><div ng-bind="(currentPlaying.artist) ? currentPlaying.artist : \'--\'"></div></div><div><button class="icon sm" ng-include="\'content/images/icon-menu.svg\'" ng-click=vm.toggleMenu() ng-class="{\'icon-white\': !vm.isMenuActive, \'icon-blue\': vm.isMenuActive}"></button><ul class=context-menu ng-class="{\'active\': vm.isMenuActive}"><li><a ng-class="{\'active\': vm.isPlaylistActive}" ng-click="vm.toggleView(\'isPlaylistActive\')">Playlist</a></li><li><a ng-class="{\'active\': vm.isArtActive}" ng-click="vm.toggleView(\'isArtActive\')">Album</a></li><li><a ng-class="{\'active\': vm.isVisualActive}" ng-click="vm.toggleView(\'isVisualActive\')">Visual</a></li></ul></div></header><section class=player><sound-manager></sound-manager><div class="player-content content-playlist" ng-show=vm.isPlaylistActive ng-class="{\'not-visible\': vm.isMenuActive}"><ol class=playlist><li ng-repeat="song in vm.songs" ng-class="{\'current-song\': currentPlaying.title == song.title }"><div class="icon sm icon-blue" ng-include="\'/content/images/icon-volume.svg\'" ng-if="currentPlaying.title == song.title"></div><a music-player=play add-song=song><div class=song-name>{{ song.title }}</div><div class=song-duration>1:00:04</div></a></li></ol></div><div class="player-content content-art" ng-show=vm.isArtActive ng-class="{\'not-visible\': vm.isMenuActive}"><div class=art><img ng-src="{{ currentPlaying.art }}"></div></div><div class="player-content content-visual" ng-show=vm.isVisualActive ng-class="{\'not-visible\': vm.isMenuActive}"><canvas id=visual></canvas></div><section><div class=primary-actions><button prev-track class="icon md icon-white" ng-include="\'content/images/icon-previous.svg\'"></button><div class=play><button play-music class="icon lg icon-white" ng-include="\'content/images/icon-play.svg\'" ng-if=!isPlaying></button> <button pause-music class="icon lg icon-white" ng-include="\'content/images/icon-pause.svg\'" ng-if=isPlaying></button></div><button next-track class="icon md icon-white" ng-include="\'content/images/icon-next.svg\'"></button></div><div class=seeker seek-track><div class=seek-base><div class=seek-load ng-style="{width : ( progress + \'%\' ) }"></div></div><div><div ng-bind="(currentPostion) ? currentPostion : \'0:00\'"></div><div ng-bind="(currentDuration) ? currentDuration : \'0:00\'"></div></div></div><div class=secondary-actions><button class="icon sm icon-white" ng-include="\'content/images/icon-favorite.svg\'"></button> <button class="icon sm icon-white" ng-include="\'content/images/icon-musical-note.svg\'"></button> <button repeat-music class="icon sm" ng-include="\'content/images/icon-repeat.svg\'" ng-class="{\'icon-white\' : !repeat, \'icon-blue\': repeat }"></button><!-- <button class="icon sm icon-white" ng-include="\'content/images/icon-shuffle.svg\'"></button> --> <button mute-music class="icon sm" ng-include="\'content/images/icon-mute.svg\'" ng-class="{\'icon-white\' : !mute, \'icon-blue\': mute }"></button></div></section></section><button style="display: none" play-all=vm.songs data-play=false player-init-playlist></button></section>'),n.put("app/player/player.songArt.html","<div class=art></div>"),n.put("app/main/main.html",'<div class=main-container><div ui-view><h1>MEZCOBAR</h1><div class="btn-group btn-group-center btn-group-bottom"><!-- <button class="btn-go" ui-sref="player">Events</button> --> <button class=btn-go ui-sref=player>Bookings</button> <button class=btn-go ui-sref=player>Sessions</button></div></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-e1e2801e78.js.map
