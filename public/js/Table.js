var rootRef = firebase.database().ref().child("/Logs");
rootRef.on("child_added", snap => {
    var date = snap.child("Date").val();
    var time = snap.child("Time").val();
    var status = snap.child("Status").val();

    $('#tablebody').append("<tr><td>" + date + "</td><td>" + time + "</td><td>" + status + "</td></tr>");

})