class Ajax {

  constructor() {
    this.root = 'https://lewd-gum.glitch.me';
    this.postHeaders = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
  }

  postData(endpoint, dataToSend) {
    return new Promise((resolve, reject) => {
      fetch(this.root + endpoint, {
        method: 'POST',
        headers: this.postHeaders,
        body: JSON.stringify(dataToSend)
      }).then( res => {
        res.json().then( data => {
          resolve(data)
        })
      })
    })
  }
}

export default Ajax