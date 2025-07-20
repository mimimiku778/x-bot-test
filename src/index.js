import { TwitterApi } from 'twitter-api-v2';
import dotenv from 'dotenv';

dotenv.config();

const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

async function postTweet() {
  try {
    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'Asia/Tokyo' });
    let message;
    let replyMessage;
    
    if (process.env.NODE_ENV === 'development') {
      message = `[Development Environment Test]\nTest post from local environment.\n\n${timestamp}`;
      replyMessage = `Test reply.`;
    } else {
      message = `[GitHub Actions Test]\nClaude Code generated message test post.\n\n${timestamp}`;
      replyMessage = `Reply feature test.`;
    }
    
    const tweet = await client.v2.tweet(message);
    console.log(`Tweet posted: ${tweet.data.id}`);
    
    const reply = await client.v2.reply(replyMessage, tweet.data.id);
    console.log(`Reply posted: ${reply.data.id}`);
    
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

postTweet();