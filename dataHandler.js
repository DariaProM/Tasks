class DataHandler {
  constructor() {
    this.posts = new Map();
    this.isLoaded = false;
  }
  async fetchPosts() {
    const fetchData = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await fetchData.json();
    this.posts = new Map(data.map((post) => [post.id, post]));
  }

  listPosts() {
    return Array.from(this.posts.values()).sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }
  getPost(id) {
    return this.posts.get(id);
  }
  clearPosts() {
    this.posts.clear();
  }
}
