# 引き継ぎメモ(2026-07-16時点)

## プロジェクト概要
- 建築会社・不動産会社のコーポレートサイト(個人向け建築/法人向け建築/不動産の3事業をワンストップで扱う想定)
- パス: `/Users/ritomo/kenchiku-fudousan-hp`
- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- 全22ページ実装済み(トップ、個人/法人/不動産の一覧+詳細9ページ、施工事例一覧・詳細、物件一覧・詳細、会社案内、お問い合わせ、プライバシーポリシー、404)
- データ駆動設計: `data/` 配下(siteConfig, services, projects, properties, faq, news, placeholderImages, inquiryTypes)を編集するだけで内容が変わる構造

## 公開状況
- GitHubリポジトリ: https://github.com/ritmopinceau/Keichiku-homepage (現在 **Public**。ユーザーにPrivate化を提案したが最終結論は保留中)
- Vercel本番URL: https://keichiku-homepage.vercel.app
- GitHubにpushすると自動でVercelが再ビルド・再デプロイされる
- ローカルとGitHubは同期済み(最新コミット `4dfd6ea`)

## この環境固有の制約(重要・次のセッションでも同じはず)
1. **Node.js/npmが未インストール**。`npm install` `npm run dev` `npm run build` はこの環境では実行不可。ビルド確認はユーザーの実機か、この制約が解消されない限り不可能。
2. **`git push` はCLIから認証情報がなく失敗する**(`could not read Username for 'https://github.com'`)。pushは必ずユーザーが **GitHub Desktopアプリ** で手動実行(「Push origin」ボタン)。`git init`・`git add`・`git commit` はこちらのBashから実行可能。
3. ユーザーはターミナル/GitHub/Vercelの操作に不慣れ。Safari/GitHub Desktop/Vercelの画面はユーザーにスクリーンショットを送ってもらい、「どのボタンを押すか」を一つずつ具体的に案内する形で進めてきた。
4. Claude Browser paneのスクリーンショットが稀に古いフレーム(黒画面など)を返すことがある。疑わしい時は `getBoundingClientRect` 等のJS実測、または再navigate後の撮り直しで解消する。
5. 本番確認は `mcp__Claude_Browser__*` ツール(navigate/screenshot/javascript_tool)で行っている。ローカルプレビューが必要な場合は `python3 -m http.server` + `.claude/launch.json` で静的ファイルを配信する手が使えるが、Next.js自体のdevサーバーは(1)の理由で使えない。

## これまでの作業履歴(コミット順)
1. `6016491` サイト一式の新規実装(全22ページ、共通コンポーネント一式)
2. GitHub Desktop経由でGitHubリポジトリ作成・初回push、Vercelと連携して本番公開
3. `dcab230` タイトルの二重表示(サイト名が2回つく)不具合を修正
4. `529bf05` サービス詳細ページ「当社の強み」と会社案内「会社の理念」に写真を追加
5. `77747fd` 存在しない(404の)Unsplash画像URL4件を差し替え
6. `920ae35` トップページのスマホ表示で「施工事例」「物件情報」セクションを非表示にしスクロールを短縮(mdブレークポイント以上でのみ表示)
7. `4dfd6ea` ユーザー提供の詳細デザインルール(積水ハウス/住友林業等を参考にした「上質・信頼・誠実・余裕」路線)に基づき、全ページ・全コンポーネントの余白(セクション上下96〜176px相当)・角丸(カード20px/ボタン10px)・シャドウ・タイポグラフィ(H1 48-64px/H2 36-44px/H3 26-32px/本文18px前後)を刷新

## 未完了・保留中のタスク
- **独自ドメイン購入**: `takko.com` の取得をVercel経由で検討中。Vercelのドメイン検索画面(vercel.com → Domains → `takko.com`)までは開いたが、価格確認・実購入(カード情報入力)はユーザー自身に委ねる必要がある(代行不可)。続きから再開する場合は「takko.comの検索結果を見せてください」と聞くとよい。
- **GitHubリポジトリの公開範囲**: 現在Public。Private化の提案はしたが明確な返答なし。
- **最新デザイン刷新(`4dfd6ea`)が本番に正しく反映されているか、目視確認がまだ**。次のセッションで最初に確認するとよい(https://keichiku-homepage.vercel.app をPC幅・スマホ幅の両方でスクリーンショット確認)。

## データ・会社情報の編集方法(詳細はREADME.md参照)
- 会社名・電話番号・住所・営業時間・許認可番号 → `data/siteConfig.ts`
- サービス内容(9サービス分) → `data/services.ts`
- 施工事例 → `data/projects.ts`
- 物件情報 → `data/properties.ts`
- FAQ → `data/faq.ts`
- お知らせ → `data/news.ts`
- 画像(現状Unsplashのプレースホルダー) → `data/placeholderImages.ts` に集約。**Unsplash画像は存在しないID(404)のことがあるため、差し替え時は `curl -s -o /dev/null -w "%{http_code}" "<url>"` で200を確認してから採用すること**(今回4件404だった教訓)。
- お問い合わせフォームの送信先 → `lib/submitContactForm.ts`(現状はダミー実装、コンソール出力のみ)

## 次にやるとよいこと(優先順)
1. 最新デザインが本番に正しく反映されているか、PC/スマホ双方のスクリーンショットで確認
2. ドメイン購入の続き(ユーザーの意向確認から)
3. GitHubリポジトリの公開設定の最終確認(Public/Private)
4. 可能であれば実機のNode環境で `npm run build` を実行し、型エラー・ビルドエラーがないか確認してもらう
