# boiler_kintone_script_dev


kintone カスタマイズ用 TypeScript 開発テンプレート

## 概要

このプロジェクトは、kintone のカスタマイズを TypeScript で効率的に開発するためのテンプレートです。

- TypeScript による型安全な開発
- Rollup によるバンドル
- kintone API 型定義（@kintone/dts-gen）対応

## ディレクトリ構成

```
scriptDev/
├── src/              # TypeScript ソースコード
│   ├── index.ts      # エントリポイント
│   └── types/        # 型定義
├── compiled/         # トランスパイル後のJS
├── dist/             # バンドル出力
├── package.json      # 各種依存管理
├── tsconfig.json     # TypeScript 設定
├── rollup.config.ts  # Rollup 設定
```

## 主なコマンド

| コマンド   | 説明                     |
| ---------- | ------------------------ |
| pnpm dev   | 開発用ビルド（監視付き） |
| pnpm build | 本番用ビルド             |
| pnpm tsc   | 型チェック               |
| pnpm test  | テスト実行（vitest）     |

## 依存パッケージ

- TypeScript
- Rollup
- @kintone/dts-gen
- @kintone/rest-api-client
- vitest

## サンプルコード

```typescript
kintone.events.on("app.record.create.show", (event) => {
	const record = event.record;
	record["HelloWorld"].value = "Hello, Kintone TypeScript Development!";
	return event;
});
```

## ライセンス

ISC
