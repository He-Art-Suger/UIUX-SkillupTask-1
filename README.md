# UI/UXスキルアップ課題①：OpsBoard UI改善

## 課題の目的

Next.js / React / TypeScript を使い、既存のたたき台UIを改善しながら、以下の経験を積むことを目的とします。

- 複数ページを持つプロダクトの情報設計
- ユーザーが迷いにくいUI設計
- 一覧、詳細、可視化ページの改善
- コンポーネント単位のテスト
- Playwrightによる基本的な画面遷移テスト

## 想定プロダクト

**OpsBoard** は、カスタマーサクセス担当者が顧客対応タスクを管理する小規模業務アプリです。

現在はバックエンドとの接続が最低限できている状態を想定しています。このテンプレートでは `src/lib/mockApi.ts` がバックエンドAPIの代替です。

## 現在の状態

最低限、以下は動作します。

- タスク一覧ページ `/`
- タスク詳細ページ `/tasks/[id]`
- インサイトページ `/insights`
- mock APIからのタスク取得
- コンポーネントテストの雛形
- E2Eテストの雛形

ただし、UI/UXには意図的に改善余地を残しています。

## 詳細
- 課題内容について：[TASK.md](docs/TASK.md)
- 1.現状の課題整理：[1_task_management.md](docs/outputs/1_task_management.md)
- 2.改善方針の設計：[2_design_of_improvement.md](docs/outputs/2_design_of_improvement.md)
- 3.タスク一覧ページの改善：[3_improvement_tasklist.md](docs/outputs/3_improvement_tasklist.md)