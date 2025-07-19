import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// GitHub ActionsでClaude Codeが生成したメッセージを保存
export function saveGeneratedMessage(mainMessage, replyMessage) {
  const data = {
    mainMessage,
    replyMessage,
    timestamp: new Date().toISOString()
  };
  
  const filePath = path.join(__dirname, '..', 'generated-message.json');
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('Generated message saved to:', filePath);
}

// 保存されたメッセージを読み込む
export function loadGeneratedMessage() {
  const filePath = path.join(__dirname, '..', 'generated-message.json');
  
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return data;
  }
  
  return null;
}