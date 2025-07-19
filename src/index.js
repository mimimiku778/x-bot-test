import { TwitterApi } from 'twitter-api-v2';
import dotenv from 'dotenv';
import { loadGeneratedMessage } from './generate-message.js';

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
    let replyMessage;
    
    // Claude Codeが生成したメッセージがあれば使用
    const generatedMessage = loadGeneratedMessage();
    
    if (process.env.NODE_ENV === 'development') {
      message = `【開発環境テスト】\nこれはローカル環境からのテスト投稿です。\n実際の投稿ではありません。\n\n${timestamp}`;
      replyMessage = `【テストリプライ】\nこれは開発環境からの自動リプライテストです。`;
    } else if (generatedMessage && process.env.USE_GENERATED_MESSAGE === 'true') {
      // Claude Codeが生成したメッセージを使用
      message = `【Claude Code生成テスト】\n${generatedMessage.mainMessage}\n\n${timestamp}`;
      replyMessage = generatedMessage.replyMessage;
    } else {
      message = `【GitHub Actions 自動投稿テスト】\nこれは試験用リポジトリからの自動投稿です。\n定期実行のテストを行っています。\n\n${timestamp}`;
      replyMessage = `【自動リプライテスト】\nGitHub Actionsからの自動リプライ機能も正常に動作しています。`;
    }
    
    // メインツイートを投稿
    const tweet = await client.v2.tweet(message);
    console.log(`Successfully posted tweet: ${tweet.data.id}`);
    console.log(`Message: ${message}`);
    
    // 自分のツイートにリプライ
    const reply = await client.v2.reply(replyMessage, tweet.data.id);
    console.log(`Successfully posted reply: ${reply.data.id}`);
    console.log(`Reply message: ${replyMessage}`);
    
  } catch (error) {
    console.error('Error posting tweet:', error);
    process.exit(1);
  }
}

postTweet();