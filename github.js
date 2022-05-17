class Gethub {
  constructor() {
    this.clientID = "9001332f99096b6b5022";
    this.clientSecret = "91a12a911e2bc53a91bb1510da72798ce00fa7d1";
    this.count = 5;
    this.sort = "created: asc"
  }
  // get user 
  async getUser(user) {
    //fetch user profile
    const profileResponse = await fetch(`https://api.github.com/users/${user}?
    client_id=${this.clientID}&client_secret=${this.clientSecret}`);
    const profileData = await profileResponse.json();

    // fetch user repos
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.count}&client_id=${this.clientID}&client_secret=${this.clientSecret}`)

    const repoData = await repoResponse.json();


    return {
      profileData,
      repoData
    }
  }

}

