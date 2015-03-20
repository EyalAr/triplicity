require.config({
    "waitSeconds": 0,
    "baseUrl": "bower_components",
    "packages": [{
        "name": "jquery",
        "location": "jquery/dist",
        "main": "jquery"
    }, {
        "name": "text",
        "location": "text",
        "main": "text"
    }, {
        "name": "root",
        "location": "../app/components/root"
    }, {
        "name": "spinner",
        "location": "../app/components/spinner"
    }]
});

require([ "picard" ], function(Picard){
    Picard().then(function(){
        console.log("done.");
    });
});
