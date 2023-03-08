var electronics= {
    laptop: {
        color:"Black",
        size:"medium",
        company:"HP",
        use: function(){
            console.log(`using, ${this.color}`);
        },
    },
     Mobile : {
        model: "Samsung A13",
        camera: "32px",
        using: function () {
         
            console.log("using"+ this.camera);
        },
     },
    
};