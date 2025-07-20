## X Bot with Claude Code

A bot that posts AI-generated messages to X (Twitter) using GitHub Actions and Claude Code Base Action.

### Features
- Generates AI messages using Claude Code Base Action
- Operates via workflow_dispatch
- Customizable themes and additional instructions
- Automatic posting and replies to X (Twitter)

### Usage
1. Navigate to the "Actions" tab in your GitHub repository
2. Select the "Generate AI Message and Post to X" workflow
3. Click the "Run workflow" button
4. Options:
   - **Theme**: Specify the message theme (Default: What day is it today)
   - **Additional Instructions**: Enter additional instructions for the AI
5. Execute by clicking "Run workflow"

### Required Secrets
Please set the following secrets in your GitHub repository:
- `ANTHROPIC_API_KEY` for Claude API key authentication  
   or `CLAUDE_CODE_OAUTH_TOKEN` for OAuth token authentication (Pro and Max users can generate this by running `claude setup-token` locally)
- `TWITTER_API_KEY`: X (Twitter) API key
- `TWITTER_API_SECRET`: X (Twitter) API secret
- `TWITTER_ACCESS_TOKEN`: X (Twitter) access token
- `TWITTER_ACCESS_TOKEN_SECRET`: X (Twitter) access token secret

### Workflow Behavior
1. Claude Code Base Action updates the message in `src/index.js`
2. Posts the updated message to X (Twitter)

### Customization
You can modify the workflow file (`.github/workflows/claude-generate.yml`) to change prompts and tool permissions.

### Notes
- Claude Code Base Action uses the `@beta` version
- Triggers from issues and PRs are disabled (workflow_dispatch only)

---

## X Bot with Claude Code(Japanese)

GitHub ActionsとClaude Code Base Actionを使用して、AI生成メッセージをX(Twitter)に投稿するボットです。

### 機能

- Claude Code Base Actionを使用してAIメッセージを生成
- workflow_dispatchで動作
- カスタマイズ可能なテーマと追加指示
- X(Twitter)への自動投稿とリプライ

### 使い方

1. GitHubリポジトリの「Actions」タブに移動
2. 「Generate AI Message and Post to X」ワークフローを選択
3. 「Run workflow」ボタンをクリック
4. オプション：
   - **テーマ**: メッセージのテーマを指定（デフォルト: 今日は何の日）
   - **追加の指示**: AIへの追加指示を入力
5. 「Run workflow」で実行

### 必要なシークレット

以下のシークレットをGitHubリポジトリに設定してください：

- `ANTHROPIC_API_KEY` Claude APIキー認証用  
   または `CLAUDE_CODE_OAUTH_TOKEN` OAuthトークン認証用（ProおよびMaxユーザーは、ローカルで `claude setup-token` を実行することでこれを生成できます）
- `TWITTER_API_KEY`: X(Twitter) APIキー
- `TWITTER_API_SECRET`: X(Twitter) APIシークレット
- `TWITTER_ACCESS_TOKEN`: X(Twitter)アクセストークン
- `TWITTER_ACCESS_TOKEN_SECRET`: X(Twitter)アクセストークンシークレット

### ワークフローの動作

1. Claude Code Base Actionが`src/index.js`のメッセージを更新
2. 更新されたメッセージをX(Twitter)に投稿

### カスタマイズ

ワークフローファイル（`.github/workflows/claude-generate.yml`）を編集して、プロンプトやツールの権限を変更できます。

### 注意事項

- Claude Code Base Actionは`@beta`バージョンを使用しています
- issueやPRからのトリガーは無効化されています（workflow_dispatchのみ）
