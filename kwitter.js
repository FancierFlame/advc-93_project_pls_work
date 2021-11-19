function log_in() {
    var username = document.getElementById("Username_input").value;

    localStorage.setItem("user_name",username);

    window.location = "kwitter_room.html";
}