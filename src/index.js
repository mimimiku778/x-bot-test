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
    const timestamp = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });
    let message;
    
    if (process.env.NODE_ENV === 'development') {
      message = `【開発環境テスト】\nこれはローカル環境からのテスト投稿です。\n実際の投稿ではありません。\n\n${timestamp}`;
    } else {
      message = `おはようございます！今日も素敵な一日になりますように ☀️\n\n${timestamp}`;
    }
    
    const tweet = await client.v2.tweet(message);
    console.log(`Successfully posted tweet: ${tweet.data.id}`);
    console.log(`Message: ${message}`);
  } catch (error) {
    console.error('Error posting tweet:', error);
    process.exit(1);
  }
}

postTweet();