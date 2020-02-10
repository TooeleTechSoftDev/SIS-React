import "whatwg-fetch";

const serverURL = "http://chloehome2.ddns.net:45507";

class SISApi {

  fetchEvents(userId, cb) {
    fetch(serverURL + '/events/list/' + userId)
      .then(response => response.json())
      .then(json => cb(json))
      .catch(error => {
        console.log("Error: ", error)
      });
  }

}

export let sisServer = new SISApi();