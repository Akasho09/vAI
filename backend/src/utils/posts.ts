// import axios from 'axios';
import prisma from '../db/index';

// // Define types for posts
// interface Post {
//   title: string;
//   description: string;
//   likes: number;
//   comments: string[];
//   reports: number;
//   platform: string;
// }

// // Fetch Reddit Posts
// const fetchRedditPosts = async (): Promise<Post[]> => {
//   try {
//     const res = await axios.get('https://www.reddit.com/r/technology/top.json?limit=10');
//     return res.data.data.children.map((child: any) => ({
//       title: child.data.title,
//       description: child.data.selftext || 'No description provided.',
//       likes: child.data.ups,
//       comments: [], // You could add sample comments or skip
//       reports: 0,
//       platform: 'Reddit',
//     }));
//   } catch (err: any) {
//     console.error('Reddit fetch error:', err.message);
//     return [];
//   }
// };

// // Fetch Twitter Posts
// const fetchTwitterPosts = async (): Promise<Post[]> => {
//   try {
//     const response = await axios.get(
//       'https://api.twitter.com/2/tweets/search/recent/?query=technology',
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN2}`,
//         },
//       }
//     );

//     return response.data.data.map((tweet: any) => ({
//       title: tweet.text.slice(0, 60),
//       description: tweet.text,
//       likes: tweet.public_metrics.like_count || 0,
//       comments: [], // Twitter API v2 does not provide direct replies
//       reports: 0,
//       platform: 'Twitter',
//     }));
//   } catch (err: any) {
//     console.error('Twitter fetch error:', err.response?.data || err.message);
//     return [];
//   }
// };

    // const [twitterPosts, redditPosts] = await Promise.all([fetchTwitterPosts(), fetchRedditPosts()]);
    // const allPosts = [...twitterPosts, ...redditPosts];
    // console.log(allPosts)
    // for (const post of allPosts) {
    //   await prisma.post.create({
    //     data: post,
    //   });
    // }

    // console.log(`${allPosts.length} posts inserted into DB.`);
    // return allPosts

export async function fetchPosts() {
  try {
    const data = await prisma.post.findMany();
    return data;
  } catch (err: any) {
    console.error('Error storing posts:', err.message);
  } finally {
    await prisma.$disconnect();
  }
}