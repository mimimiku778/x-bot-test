# X Bot with Claude Code

GitHub ActionsとClaude Code Base Actionを使用して、AI生成メッセージをX(Twitter)に投稿するボットです。

## 機能

- Claude Code Base Actionを使用してAIメッセージを生成
- workflow_dispatchで動作
- カスタマイズ可能なテーマと追加指示
- X(Twitter)への自動投稿とリプライ

## 使い方

1. GitHubリポジトリの「Actions」タブに移動
2. 「Generate AI Message and Post to X」ワークフローを選択
3. 「Run workflow」ボタンをクリック
4. オプション：
   - **テーマ**: メッセージのテーマを指定（デフォルト: 今日は何の日）
   - **追加の指示**: AIへの追加指示を入力
5. 「Run workflow」で実行

## 必要なシークレット

以下のシークレットをGitHubリポジトリに設定してください：

- `CLAUDE_CODE_OAUTH_TOKEN`: Claude トークン
- `TWITTER_API_KEY`: X(Twitter) APIキー
- `TWITTER_API_SECRET`: X(Twitter) APIシークレット
- `TWITTER_ACCESS_TOKEN`: X(Twitter)アクセストークン
- `TWITTER_ACCESS_TOKEN_SECRET`: X(Twitter)アクセストークンシークレット

## ワークフローの動作

1. Claude Code Base Actionが`src/index.js`のメッセージを更新
2. 更新されたメッセージをX(Twitter)に投稿

## カスタマイズ

ワークフローファイル（`.github/workflows/claude-generate.yml`）を編集して、プロンプトやツールの権限を変更できます。

## 注意事項

- Claude Code Base Actionは`@beta`バージョンを使用しています
- issueやPRからのトリガーは無効化されています（workflow_dispatchのみ）
