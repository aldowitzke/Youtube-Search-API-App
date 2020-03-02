import axios from "axios";

const KEY = "AIzaSyB5fyHj1vSi9zPfbjwWpfv5yiyAsJ9Z7vc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
