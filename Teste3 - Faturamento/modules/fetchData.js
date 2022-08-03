class FetchData {
  constructor(url) {
    this.url = url;
  }

  async fetchData() {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  }
}

export default FetchData;
