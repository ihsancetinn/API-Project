const profile = new Profile();
const ui = new UI();
const searchProfile = document.querySelector("#searchProfile");


searchProfile.addEventListener("keyup", (event) => {
    let query = event.target.value;
    let text = query[0].toUpperCase() + query.toLowerCase().substring(1);
    console.log(text);
    ui.clear();

    if (text !== "") {
        profile.getProfile(text)
            .then(res => {
                if (res.profile.length === 0) {
                    ui.showAlert(text);
                } else {

                    ui.showProfile(res.profile[0]);
                    ui.showTodo(res.todo);
                }
            })
            .catch(err => { ui.showAlert(text) })
    }

})


