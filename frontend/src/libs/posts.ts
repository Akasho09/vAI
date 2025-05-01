import axios from "axios";

export default async function getPosts() {
  try {
    const token = localStorage.getItem("token")
    const res = await axios.get<any>("http://localhost:3000/api/posts/getposts", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data.posts;
  } catch (err) {
    console.error("Error fetching posts from API", err);
    return [];
  }
}