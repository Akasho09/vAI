import { Response } from "express";
import { AuthRequest } from "../../middlewares/auth";
import { fetchPosts} from "../../utils/posts";

export async function posts(req: AuthRequest, res: Response) {
  try {
    const a = await fetchPosts(); // 🔧 Await the async function
    res.json({
      posts: a
    });
  } catch (error: any) {
    res.status(500).json({
      error: "An error occurred while fetching posts."
    });
  }
}






// // fetch x , reddit posts once and set in db 
// // utils/fetchRedditPosts.ts
// import prisma from "../../db/index";
// import { fetchTweets } from '../../utils/x';

// // const fetchRedditPosts = async () => {
// //   try {
// //     const res = await axios.get('https://www.reddit.com/r/technology/top.json?limit=10');
// //     return res.data.data.children.map((child: any) => ({
// //       title: child.data.title,
// //       description: child.data.selftext || 'No description provided.',
// //       likes: child.data.ups,
// //       comments: [], // You could add sample comments or skip
// //       reports: 0,
// //       platform: 'Reddit'
// //     }));
// //   } catch (err) {
// //     console.error('Reddit fetch error:', err);
// //     return [];
// //   }
// // };



// //  const fetchTwitterPosts = async () => {
// //   try {
// //     const response = await axios.get(
// //       'https://api.twitter.com/2/tweets/search/recent',
// //       {
// //         params: {
// //           query: 'technology', // Modify keyword as needed
// //           max_results: 10,
// //           'tweet.fields': 'public_metrics,created_at'
// //         },
// //         headers: {
// //           Authorization: `Bearer ${BEARER_TOKEN}`,
// //         },
// //       }
// //     );

// //     return response.data.data.map((tweet: any) => ({
// //       title: tweet.text.slice(0, 60),
// //       description: tweet.text,
// //       likes: tweet.public_metrics.like_count || 0,
// //       comments: [], // Twitter API v2 does not provide direct replies
// //       reports: 0,
// //       platform: 'Twitter',
// //     }));
// //   } catch (err:any) {
// //     console.error('Twitter fetch error:', err.response?.data || err);
// //     return [];
// //   }
// // };
 


// export async function fetchAndStorePosts() {
//   // const twitterPosts = await fetchTweets ;

//   // const allPosts = [...twitterPosts];

//   // for (const post of allPosts) {
//   //   await prisma.post.create({
//   //     data: post
//   //   });
//   // }

//   // console.log(`${allPosts} posts inserted into DB.`);
//   // console.log(twitterPosts)
//   // await prisma.$disconnect();
// }


// fetchAndStorePosts() ;