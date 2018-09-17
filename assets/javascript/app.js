console.log("works");

$(document).ready(function () {

    var config = {
        apiKey: "AIzaSyCju_h7JQYuDoZ8cK2lkFJvrJxuRi8n-Ds",
        authDomain: "train-activity-basic-e40ab.firebaseapp.com",
        databaseURL: "https://train-activity-basic-e40ab.firebaseio.com",
        projectId: "train-activity-basic-e40ab",
        storageBucket: "",
        messagingSenderId: "873092454034"
    };
    firebase.initializeApp(config);


    //Reference from the database

    //Create variable to reference the database
    var database = firebase.database();


    //Initial Values
    var trainName = "";
    var destination = "";
    var frequency = 0;
    var nextArrival = 0;
    var minuesAway = 0;

    //Grab the values that have changed and print it to the database


    //When the user presses the Submit button - the variables add themselves to the chart
    $("#submit-btn").on("click", function (event) {
        //Doesn't refresh the console to nothingness
        event.preventDefault();


        //Attach the initial values to the html dom nodes
        trainName = $("#Train-display").val().trim();
        destination = $("#Destination-display").val().trim();
        frequency = $("#Frequency-display").val().trim();
        nextArrival = $("#next-arrival-display").val().trim();
        minutesAway = $("#minutes-away-display").val().trim();
       

       

        //Key Value Pairs
        //Prints in firebase web
        database.ref().set({
            trainName: trainName,
            destination: destination,
            frequency: frequency,
            nextArrival: nextArrival,
            minutesAway: minuesAway
         

        });

        //

        database.ref().on("value", function (snapshot) {

            //console log everthing 
            console.log(snapshot.val());
            console.log(snapshot.val().trainName);
            console.log(snapshot.val().destination);
            console.log(snapshot.val().frequency);
            console.log(snapshot.val().nextArrival);
            console.log(snapshot.val().minutesAway);


            //Change in the HTML
            $("#train-name").text(snapshot.val().trainName);
            $("#destination").text(snapshot.val().destination);
            $("#frequency").text(snapshot.val().frequency);
            $("#next arrival").text(snapshot.val().nextArrival);
            $("#minutes away").text(snapshot.val().minutesAway);


        });

    });





});

