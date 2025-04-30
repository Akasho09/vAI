import axios from 'axios';

export const fetchTweets = async () => {
  try {
    const response = await axios.get(
      "https://api.twitter.com/2/tweets/search/recent?query=technology",
      {
        headers: {
          Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
        },
      }
    );
    return response?.data?.data || [];
  } catch (error) {
    console.error("Error fetching tweets:", error);
    throw error;
  }
};


const fetchRedditPosts = async () => {
    try {
      const res = await axios.get('https://www.reddit.com/r/technology/top.json?limit=10');
      return res.data.data.children.map((child: any) => ({
        title: child.data.title,
        description: child.data.selftext || 'No description provided.',
        likes: child.data.ups,
        comments: [], // You could add sample comments or skip
        reports: 0,
        platform: 'Reddit'
      }));
    } catch (err) {
      console.error('Reddit fetch error:', err);
      return [];
    }
  };
  


  export async function fetchAndStorePosts() {
      console.log("here ")
    const twitterPosts = await fetchTweets() ;
    const redditPosts = await fetchRedditPosts()
    const allPosts = [...twitterPosts , ...redditPosts];
  
  //   for (const post of allPosts) {
  //     await prisma.post.create({
  //       data: post
  //     });
  //   }
  
  //   console.log(`${allPosts} posts inserted into DB.`);
    console.log(allPosts)
    // await prisma.$disconnect();
    return allPosts
  }