app.controller('MainController', ['$scope', function($scope) {
	$scope.heading = 'Spring Watch',
	$scope.promo = 'Here are some great places to visit this Spring.',
	$scope.locations = [
	{
		location: 'Leybourne Lakes',
		hyperlink: 'http://www.justaddapicnic.com/outdoors/kent/park/2018/02/10/leybourne-lakes.html',
		title: 'Beautiful Snowdrops',
		image: [
			alt: 'Snowdrops found at Leybourne Lakes',
			image: '/images/kent/outdoors/leybourne_lakes/leybourne5.jpg'
		],
		description: 'Leybourne Lakes Country Park is a wonderful place for a long walk around some fresh water lakes filled with life.  There is play equipment, toilets and a seasonal cafe. Can you find these beautiful Snowdrops? Its pretty cold out there, so we won't tell if you eat your picnic in the car like we did.',
		website: 'https://www.tmbc.gov.uk/services/leisure-and-culture/parks-and-open-spaces/parks-and-open-spaces-outdoor-facilities/leybourne-lakes-country-park' 
	},

	{
		location: "Hilly Fields",
		hyperlink: "http://www.justaddapicnic.com/outdoors/kent/park/2018/02/21/hilly-fields.html",
		title: "Quick Trip Out",
		image: [
			alt: "Hilly Fields Community park play equipment",
			image: "/images/kent/outdoors/hilly_fields/hillyfields4.jpg",
		],
		description: "You need a great local park to help burn off some energy, that isn't going to keep them out all day in the cold.  Try Hilly Fields Community Park, it has some novel climbing equipment and plenty to encourage the little ones to tire themselves out quickly."
		website:
	},	

	{
		locatoin: "MoD Docklands"
		hyperlink: "www.justaddapicnic.com/indoors/london/museum/2018/02/20/museum-london-docklands.html",
		title: "Somewhere Indoors",
		image: [
			alt: "The enterance to the Museum of London Docklands",
			image: "/images/london/indoors/museum_docklands/docklands1.jpg",
		],
		description: "The Museum of London, Docklands offers a wonderful glimpse into the world of the East and West India Docks when they were at their busiest bringing a fascinating array of produce from around the world. Always something going on at the weekends and school holidays.",
		website: "https://www.museumoflondon.org.uk//museum-london-docklands"
	}
	]

}]);

/*

            <div class="col-lg-4 col-md-6">
              <a href="http://www.justaddapicnic.com/indoors/london/museum/2018/02/20/museum-london-docklands.html" target="_blank"><h4 class="card-title">Somewhere Indoors</h4></a>
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" data-src="" alt="The enterance to the Museum of London Docklands" style="height: 225px; width: 100%; display: block;" src="/images/london/indoors/museum_docklands/docklands1.jpg" data-holder-rendered="true">
                <div class="card-body">
                  <p class="card-text">The Museum of London, Docklands offers a wonderful glimpse into the world of the East and West India Docks when they were at their busiest bringing a fascinating array of produce from around the world. Always something going on at the weekends and school holidays.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">
                        <a href="http://www.justaddapicnic.com/indoors/london/museum/2018/02/20/museum-london-docklands.htm"l target="_blank">Our Website</a>
                      </button>
              
                    </div>
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">
                        <a href="https://www.museumoflondon.org.uk//museum-london-docklands" target="_blank">MoL Docklands</a>
                      </button>*/
