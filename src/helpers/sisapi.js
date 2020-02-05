import "whatwg-fetch";

const serverURL = "http://localhost:8088";

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