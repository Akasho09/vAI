import { useEffect, useState } from "react";
import axios from "axios";

interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  author?: {
    firstname?: string;
    lastname?: string;
  };
}

type Tab = "saved" | "liked" | "reported";

export default function AllUserPosts() {
  const [tab, setTab] = useState<Tab>("saved");
  const [savedPosts, setSavedPosts] = useState<Post[]>([]);
  const [likedPosts, setLikedPosts] = useState<Post[]>([]);
  const [reportedPosts, setReportedPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const token = localStorage.getItem("token");

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const [savedRes, likedRes, reportedRes] = await Promise.all([
        axios.get<{ savedPosts: { post: Post }[] }>(`${backendUrl}/api/posts/saved`, {
          headers: { Authorization: token },
        }),
        axios.get<{ likedPosts: { post: Post }[] }>(`${backendUrl}/api/posts/liked`, {
          headers: { Authorization: token },
        }),
        axios.get<{ reportedPosts: { post: Post }[] }>(`${backendUrl}/api/posts/reported`, {
          headers: { Authorization: token },
        }),
      ]);

      setSavedPosts(savedRes.data.savedPosts.map(p => p.post));
      setLikedPosts(likedRes.data.likedPosts.map(p => p.post));
      setReportedPosts(reportedRes.data.reportedPosts.map(p => p.post));
    } catch (err) {
      console.error("Failed to fetch posts", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderPosts = (posts: Post[]) => {
    if (loading) return <p className="text-gray-500">Loading...</p>;
    if (posts.length === 0) return <p className="text-gray-400">No posts found.</p>;

    return (
      <div className="grid gap-4">
        {posts.map((post) => (
          <div key={post.id} className="p-4 border rounded-lg shadow-sm bg-white">
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-600 mb-2">
              By {post.author?.firstname} {post.author?.lastname}
            </p>
            <p className="text-gray-700">{post.content}</p>
            <p className="text-xs text-gray-400 mt-2">Posted on {new Date(post.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Posts Overview</h2>

      <div className="flex gap-4 mb-6">
        {(["saved", "liked", "reported"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-full font-medium ${
              tab === t ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)} Posts
          </button>
        ))}
      </div>

      {tab === "saved" && renderPosts(savedPosts)}
      {tab === "liked" && renderPosts(likedPosts)}
      {tab === "reported" && renderPosts(reportedPosts)}
    </div>
  );
}

