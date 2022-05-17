class UI {
  constructor() {
    this.profile = document.querySelector("#profile")
  }
  showProfile(user, repos) {
    // Progfile UI
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
  <div class="row">
    <div class="col-md-3">
      <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
      <a href="${user.html_url}" class="btn btn-block btn-primary mb-4">View Profile</a>
    </div>
    <div class="col-md-9">
      <span class="badge badge-primary mb-2">Public Repos: ${user.public_repos}</span>
      <span class="badge badge-secondary mb-2">Public Gists: ${user.public_gists}</span>
      <span class="badge badge-success mb-2">Followers: ${user.followers}</span>
      <span class="badge badge-info mb-2">Following : ${user.following}</span>
      <br><br>
      <ul class="list-group">
        <li class="list-group-item">Company: ${user.company !== null ? user.company : "Not Found"}</li>
        <li class="list-group-item">Blog: ${user.blog !== "" ? user.blog : "Not Found"}</li>
        <li class="list-group-item">Location :${user.location !== null ? user.location : "Not Found"}</li>
        <li class="list-group-item">Member since: ${user.created_at !== null ? user.created_at : "Not Found"}</li>
      </ul>
    </div>
  </div>
</div>
<h3 class="page-heading-mb-3">Latest Repos</h3>
<div id="repos"></div>
    `
    // Repo UI
    let output = "";
    let repodiv = document.querySelector("#repos");
    repos.forEach(repo => {

      output += `
            <div class="card card-body mb-2">
              <div class="row">
                <div class="col-md-6">
                  <a href="${repo.html_url} target="_blank">${repo.name}</a>
                </div>
                <div class="col-md-6">
                  <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                  <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                  <span class="badge badge-success">Forks: ${repo.forms_count}</span>
                </div>
              </div>
            </div>
      `
    });
    repodiv.innerHTML = output
  }
  showRepos(user) { }
  clear() {
    this.profile.innerHTML = ""
  }
  alert(msg, divClass) {
    // this.profile.innerHTML = `
    // <div class="${divClass}">${msg}</div>`
    this.clearalert()
    const searchContainer = document.querySelector(".searchContainer .card-body")
    const searchBtn = document.querySelector("#searchUser")
    const div = document.createElement("div")
    const textmsg = document.createTextNode(msg)
    div.className = divClass
    div.appendChild(textmsg)
    searchContainer.insertBefore(div, searchBtn)
    setTimeout(this.clearalert, 3000)
  }

  clearalert() {
    const alert = document.querySelector(".alert")
    if (alert) {
      alert.remove()
    }
  }

}

