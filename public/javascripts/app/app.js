(function () {

    var app = angular.module('pagey', ["firebase"]);


    app.controller('PortfolioController', function($scope,$firebaseArray) {
        this.works = portfolio;

        // window.location.

        var ref = firebase.database().ref().child("posts/");
        $scope.pics = $firebaseArray(ref)

    });

    
	

    app.controller('ProfileController', function () {
        this.prof = profile;
    });

    app.controller('PanelController', function () {
        this.tab = 0;
        this.selectTab = function (setTab) {
            this.tab = setTab;
        };
        this.isSelected = function (checkTab) {
            return this.tab == checkTab;
        };
    });
    
	// Contains The Navigation tabs
    app.directive('navTabs', function () {
	    return{
		    restrict: 'E',
		    templateUrl: '/templates/navs.html',
		    controller:function () {
			    this.navs = navigationTabs;
		    },
		    controllerAs: 'navctrl'
	    };
    });

	app.directive('services', function () {
		return{
			restrict: 'E',
			templateUrl: '/templates/services.html',
			controller:function () {
				this.service = services;
			},
			controllerAs: 'servi'
		}
	});
	
	app.directive('testimonials', function () {
		return{
			restrict: 'E',
			templateUrl: '/templates/testimonials.html',
			controller:function () {
				this.test = testimonials;
			},
			controllerAs: 'tescon'
		};
	});

    var portfolio =
        [
            {
                name: 'Screensavers',
                description: 'For Mobile Screens',
                link: 'ssaver',
                image: '/images/ousumbre2.jpg',
                id: 'ssaverId',
                id2: '#ssaverId',
                ext: '/templates/ssaver.ejs',
                show: true
            },
            {
                name: 'People of Ghana',
                description: 'Story Album of Random People and Events',
                link: 'peepo',
                image: '/images/osu_castle.jpg',
                id: 'peepoId',
                id2: '#peepoId',
                ext: 'https://spark.adobe.com/page/W6ynB/',
                show: false
            }
        ];

    var services =
        [
            {
                icon: 'pe-7s-phone pe-dj pe-va',
                head: 'Screen Savers',
                content: 'Give your phone\'s homescreen a cool feel! Use pictures from my weekly series as Wallpapers.',
                link: '#ssaver',


            },
            {
                icon: 'pe-7s-camera pe-dj pe-va',
                head: 'Photography',
                content: 'Observe nature\'s diverse intricacies and beauty through my lens, and of course, your screens.',
                link: '#peepo',

            },
            {
                icon: 'pe-7s-note2 pe-dj pe-va',
                head: 'Events & Coverage',
                content: 'Be it weddings or graduations, or leisurely picnics, I\'m the go to guy, if you want to get going.',
                link: '#contact',

            },
            {
                icon: 'pe-7s-config pe-dj pe-va',
                head: 'Support',
                content: 'Are you an upcoming photographer? Do you need mentoring or tips to get started? Drop me a line!',
                link: '#contact',

            },


        ];

    var testimonials =
        [
            {
                pic: '/images/barnabas.jpg',
                name: 'Barnabas Nomo',
                title: 'C.E.O',
                content: 'Careful Joshua, they\'ll think you\'re a hard worker',
            },
            {
                pic: '/images/testimonial2.jpg',
                name: 'Barnabas Nomo',
                title: 'C.E.O',
                content: 'Careful Joshua, they\'ll think you\'re a hard worker',
            },
            {
                pic: '/images/testimonial2.jpg',
                name: 'Barnabas Nomo',
                title: 'C.E.O',
                content: 'Careful Joshua, they\'ll think you\'re a hard worker',
            },
            {
                pic: '/images/testimonial2.jpg',
                name: 'Barnabas Nomo',
                title: 'C.E.O',
                content: 'Careful Joshua, they\'ll think you\'re a hard worker',
            },
        ];

    var navigationTabs =
        [
            {
                name: 'Home',
                class: 'pe-7s-home',
                href: '#body',
            },
            {
                name: 'Service',
                class: 'pe-7s-config',
                href: '#services',
            },
            {
                name: 'Portfolio',
                class: 'pe-7s-glasses',
                href: '#portfolio',
            },
            {
                name: 'Testimonials',
                class: 'pe-7s-comment',
                href: '#testimonials',
            },
            {
                name: 'Contact',
                class: 'pe-7s-help1',
                href: '#contact'
            }
        ];

    var profile =
    {

        background: [
            {
                head: 'KNUST 2006-2010',
                cont: 'B.A. Communication Design'
            },
            {
                head: 'GTUC 2016',
                cont: 'Google Adwords'
            }
        ]

    }
})();
