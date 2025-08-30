# react-basis
- Reactの基礎学習用のリポジトリです。

## プロジェクトの新規作成方法
- appコンテナを起動
```bash
make up
```
- appコンテナの稼働状況を確認
```bash
make ps
```
- appコンテナに入る
```bash
make app
```
- appコンテナ内でプロジェクトを作成
```bash
npx create-react-app .
```
- プロジェクト直下でGit管理したいので、競合を防止するため、`react-basis`配下に新規作成された次のファイルを削除
```bash
rm -rf .gitignore README.md
```
- appコンテナ内でサーバーを起動
```bash
make rebuild
```
- [localhost:3000](localhost:3000)にアクセス

## 参考
- [Start a New React Project](https://18.react.dev/learn/start-a-new-react-project)
