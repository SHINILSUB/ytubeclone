class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOption = {
      method: "GET",
      redirect: "follow",
    };
  }
  
  async mostPopular() {
    const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
          this.getRequestOption
      );
      const result = await response.json();
      return result.items;
  }
  //videoid 값이 또 들어가게 되므로 map을 통해 새로운 배열을 만들어 준다.
  async search(query) {
    const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
          this.getRequestOption
      );
      const result = await response.json();
      return result.items.map(item => ({ ...item, id: item.id.videoId }));
  }
}
export default Youtube;
