const searchBtn = document.querySelector("#searchUser")
const user = new Gethub
const ui = new UI
// add listent
searchBtn.addEventListener("keyup", check)

// function check

function check(e) {
  userSearch = e.target.value
  if (userSearch !== "") {
    user.getUser(userSearch)
      .then(data => {
        if (data.profileData.message) {
          ui.alert(data.profileData.message, "alert alert-danger text-center")
        } else {
          ui.showProfile(data.profileData, data.repoData)
        }

      })
  }
  else {
    ui.clear()
  }
}