var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
    	iBeaconGap.startScanning();
    	setInterval(function(){
    		iBeaconGap.getBeacons(app.gotBeacons, app.gotBeaconsFailed);
    	}, 3000);
    },
    gotBeacons: function(beacons) {
    	for (var i in beacons)
    	{
    		app.log(i + ': ' + beacons[i].major + ',' + beacons[i].minor + ':' + beacons[i].distance);
    	}
    },
    gotBeaconsFailed: function(err) {
    	app.log(err);
    },
    log: function(text) {
    	document.getElementById('app').innerHTML += text + "<br/>"
    }
};
