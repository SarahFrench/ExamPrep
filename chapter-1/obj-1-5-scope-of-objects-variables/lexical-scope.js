var locales = {
  europe: function() {          // The Europe continent's local scope
    var myFriend = "Monique";   //not seen when line 6 uncommented

    var france = function() {   // The France country's local scope
      var myFriend = "Erica";

      var paris = function() {  // The Paris city's local scope
        console.log(myFriend);
      };

      paris();
    };

    france();
  }
};

locales.europe();
