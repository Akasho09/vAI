import { useEffect, useState } from 'react';
import getPosts from '../../libs/posts';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface Post {
  id: string;
  title: string;
  description: string;
  likes: number;
  comments: number;
  platform: string;
  createdAt?: string;
}

const Feed = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const p = await getPosts();
      setPosts(p);
      setLoading(false);
    };
    loadPosts();
  }, []);

  const handleAction = async (action: 'like' | 'save' | 'report', postId: string) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        `${backendUrl}/api/posts/action`,
        { postId, action },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      setPosts(prev =>
        prev.map(post =>
          post.id === postId && action === 'like'
            ? { ...post, likes: post.likes + 1 }
            : post
        )
      );

      alert(`${action.charAt(0).toUpperCase() + action.slice(1)} successful!`);
    } catch (err: any) {
      const message =
        err.response?.data?.error ||
        `Error performing ${action} on post ${postId}`;
      alert(message);
    }
  };

  const handleShare = (postId: string) => {
    const shareUrl = `${window.location.origin}/posts/${postId}`;
    navigator.clipboard.writeText(shareUrl);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold mb-4">Your Personalized Feed</h1>

      {loading
        ? Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow p-5 mb-8 space-y-4"
            >
              <Skeleton height={30} width="60%" />
              <Skeleton count={2} />
              <div className="flex gap-4 mt-4">
                <Skeleton width={60} height={24} />
                <Skeleton width={80} height={24} />
                <Skeleton width={50} height={24} />
              </div>
            </div>
          ))
        : posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow p-5 transition hover:shadow-md mb-8"
            >
              <h2 className="text-xl font-bold">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.description}</p>

              <div className="mt-4 flex gap-8 ">
                <button
                  onClick={() => handleAction('like', post.id)}
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  👍 {post.likes} Like
                </button>
                <button
                  onClick={() => alert('Comments feature coming soon!')}
                  className="text-green-600 hover:underline cursor-pointer"
                >
                  💬 Comment
                </button>
                <button
                  onClick={() => handleAction('save', post.id)}
                  className="text-purple-600 hover:underline cursor-pointer"
                >
                  📥 Save
                </button>
                <button
                  onClick={() => handleShare(post.id)}
                  className="text-gray-700 hover:underline cursor-pointer"
                >
                  🔗 Share
                </button>
                <button
                  onClick={() => handleAction('report', post.id)}
                  className="text-red-600 hover:underline cursor-pointer"
                >
                  🚫 Report
                </button>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Feed;
