import axios from "axios";

type Post = {
  id: string;
  title: string;
  content: string;
};

export default async function getPosts(): Promise<Post[]> {
  try {
    const token = localStorage.getItem("token");
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    if (!backendUrl) {
      console.error("VITE_BACKEND_URL is not defined in environment variables.");
      return [];
    }

    const res = await axios.get<{ posts: Post[] }>(`${backendUrl}/api/posts/getposts`, {
      headers: {
        Authorization: `Bearer ${token || ""}`,
      },
    });

    return res.data.posts;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return [];
  }
}
