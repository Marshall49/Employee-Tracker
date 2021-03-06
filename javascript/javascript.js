$(document).ready(function(){
	 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDci40EVflvarNKCegEzyMWH-Cbx43MXsc",
    authDomain: "employee-tracker-17fbd.firebaseapp.com",
    databaseURL: "https://employee-tracker-17fbd.firebaseio.com",
    projectId: "employee-tracker-17fbd",
    storageBucket: "employee-tracker-17fbd.appspot.com",
    messagingSenderId: "515593099294"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  
   // Initial Values
    var name = "";
    var role = "";
    var startDate = "";
    var wage = "";
    var numMonths = 0;
    var totalBilled = 0;

   // Capture Button Click
    $("#add-btn").on("click", function() {
      // Don't refresh the page!
      event.preventDefault();

     // YOUR TASK!!!
      // Code in the logic for storing and retrieving the most recent user.
      // Don't forget to provide initial data to your Firebase database.
      name = $("#name").val().trim();
      role = $("#role").val().trim();
      startDate = $("#startDate").val().trim();
      wage = $("#wage").val().trim();

     database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        numMonths: numMonths
      });

   });

   // Firebase watcher + initial loader HINT: .on("value")
    database.ref().on("value", function(snapshot) {


     // Log everything that's coming out of snapshot
      console.log(snapshot.val());
      console.log(snapshot.val().name);
      console.log(snapshot.val().role);
      console.log(snapshot.val().startDate);
      console.log(snapshot.val().wage);

     // Change the HTML to reflect
      $("#name").html(snapshot.val().name);
      $("#role").html(snapshot.val().email);
      $("#startDate").html(snapshot.val().age);
      $("#wage").html(snapshot.val().comment);

     // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });
});