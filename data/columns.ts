import type { ColumnArticle, ColumnCategory } from "./types";
import { projectImages, subServiceImages, companyImage, factoryImages } from "./placeholderImages";

/**
 * コラム(お役立ち記事)。検索されやすいキーワードごとに1記事ずつ追加していく想定。
 * 新しい記事はこの配列に1件追加するだけで、一覧・詳細ページ・サイトマップに反映されます。
 */
export const columnCategories: ColumnCategory[] = [
  "費用・相場",
  "補助金・制度",
  "会社選び",
  "工事の基礎知識",
  "リノベーション",
  "工場・倉庫向け",
];

export const columns: ColumnArticle[] = [
  {
    slug: "reform-cost-guide",
    title: "リフォーム費用の相場を工事別に解説【2026年版】",
    category: "費用・相場",
    publishedAt: "2026-04-10",
    excerpt: "キッチン・浴室・トイレ・外壁塗装など、工事内容別のリフォーム費用相場を分かりやすくまとめました。",
    heroImage: projectImages[0],
    heroImageAlt: "リフォーム後の対面キッチン",
    sections: [
      {
        heading: "リフォーム費用は工事内容によって大きく異なる",
        blocks: [
          {
            type: "p",
            text: "リフォーム費用は「どこを」「どこまで」直すかによって数十万円から数千万円まで幅があります。設備の交換のみか、間取り変更まで含むかで金額は大きく変わります。",
          },
          {
            type: "p",
            text: "まずは工事内容ごとのおおよその相場を把握したうえで、現地調査で正確な見積りを取ることが失敗しないリフォームの第一歩です。",
          },
        ],
      },
      {
        heading: "工事内容別の費用相場の目安",
        blocks: [
          {
            type: "p",
            text: "キッチンリフォームは設備交換のみで20万円〜60万円、対面式への変更を伴う場合は150万円〜350万円が目安です。浴室リフォームはユニットバスへの交換で80万円〜150万円程度です。",
          },
          {
            type: "p",
            text: "外壁塗装は建物の規模により70万円〜180万円、屋根の葺き替えは120万円〜250万円が目安となります。詳しい内訳は各工事の詳細ページでご確認いただけます。",
          },
        ],
      },
      {
        heading: "費用を抑えるためのポイント",
        blocks: [
          {
            type: "p",
            text: "複数箇所をまとめて工事することで、足場代や職人の手配にかかる費用を抑えられる場合があります。また、国や自治体の補助金制度が利用できる工事もあるため、事前の確認がおすすめです。",
          },
        ],
      },
    ],
    relatedServiceHref: "/personal/reform",
    relatedServiceLabel: "住宅リフォームの詳細を見る",
    faqItems: [
      {
        id: "cost-guide-estimate-free",
        question: "見積りは無料でお願いできますか？",
        answer: "はい、現地調査・お見積りは無料で承っております。内容にご納得いただくまで費用は発生しません。",
      },
    ],
    metaDescription:
      "リフォーム費用の相場を工事別に解説。キッチン・浴室・トイレ・外壁塗装・屋根工事など、工事内容ごとの費用目安をまとめました。",
  },
  {
    slug: "reform-subsidy-guide",
    title: "リフォームで使える補助金まとめ",
    category: "補助金・制度",
    publishedAt: "2026-05-02",
    excerpt: "断熱改修や子育て支援など、リフォームで活用できる補助金制度の種類と注意点をまとめました。",
    heroImage: subServiceImages.insulation,
    heroImageAlt: "断熱リフォーム後の暖かいリビング",
    sections: [
      {
        heading: "リフォームで利用できる補助金の種類",
        blocks: [
          {
            type: "p",
            text: "リフォームに関する補助金には、住宅の省エネ性能を高める工事を対象とした制度や、子育て世帯・若者夫婦世帯を対象とした制度など、いくつかの種類があります。",
          },
          {
            type: "p",
            text: "制度によって対象となる工事内容や申請時期、予算の上限が異なるため、年度ごとに最新情報を確認する必要があります。",
          },
        ],
      },
      {
        heading: "申請時の注意点",
        blocks: [
          {
            type: "p",
            text: "多くの補助金制度は、工事着工前の申請が必要です。契約前に対象となるかどうかを確認せずに着工してしまうと、補助金を受けられなくなる場合があるため注意が必要です。",
          },
        ],
      },
    ],
    relatedServiceHref: "/personal/reform/windows-insulation",
    relatedServiceLabel: "窓・断熱リフォームの詳細を見る",
    faqItems: [
      {
        id: "subsidy-guide-check",
        question: "自分の家が補助金の対象になるか知りたいです。",
        answer: "建物の状況や工事内容によって対象可否が異なります。現地調査の際にあわせてご案内いたします。",
      },
    ],
    metaDescription: "リフォームで使える補助金制度をまとめて解説。省エネ改修・断熱リフォーム・子育て支援など、申請時の注意点もあわせてご紹介します。",
  },
  {
    slug: "how-to-choose-a-construction-company",
    title: "住宅会社の選び方、比較する際の5つのポイント",
    category: "会社選び",
    publishedAt: "2026-05-20",
    excerpt: "リフォーム・新築を依頼する住宅会社を選ぶ際に、比較しておきたい5つのポイントを解説します。",
    heroImage: companyImage,
    heroImageAlt: "打ち合わせをするスタッフ",
    sections: [
      {
        heading: "実績と施工事例を確認する",
        blocks: [
          {
            type: "p",
            text: "依頼を検討している工事内容と近い施工事例があるかどうかは、技術力を見極める重要な判断材料です。写真だけでなく、工期や費用感まで公開されているかも確認しましょう。",
          },
        ],
      },
      {
        heading: "建築と不動産、どこまで一括対応できるか",
        blocks: [
          {
            type: "p",
            text: "中古住宅の購入を伴うリフォームなどでは、不動産と建築の窓口が別々だと情報の行き違いが生じやすくなります。ワンストップで対応できる会社は、資金計画から施工まで一貫した提案が受けられます。",
          },
        ],
      },
      {
        heading: "アフターサポート体制",
        blocks: [
          {
            type: "p",
            text: "工事完了後の保証内容や定期点検の有無も、長く安心して住み続けるためには欠かせない比較ポイントです。",
          },
        ],
      },
    ],
    relatedServiceHref: "/company",
    relatedServiceLabel: "会社案内を見る",
    metaDescription: "住宅会社を選ぶ際に比較しておきたい5つのポイントを解説。実績確認からアフターサポートまで、失敗しない会社選びのコツをご紹介します。",
  },
  {
    slug: "exterior-painting-timing",
    title: "外壁塗装のタイミングと劣化サイン",
    category: "工事の基礎知識",
    publishedAt: "2026-06-05",
    excerpt: "外壁塗装を検討すべきタイミングと、見逃しやすい劣化のサインをまとめました。",
    heroImage: subServiceImages.wallPainting,
    heroImageAlt: "外壁塗装後の住宅外観",
    sections: [
      {
        heading: "見逃しやすい劣化のサイン",
        blocks: [
          {
            type: "p",
            text: "外壁を触ると白い粉が手に付く「チョーキング」現象や、コーキング(目地)のひび割れ・痩せは、塗膜の防水性能が低下しているサインです。",
          },
          {
            type: "p",
            text: "ひび割れを放置すると、そこから雨水が侵入し、建物内部の腐食や雨漏りにつながる可能性があります。",
          },
        ],
      },
      {
        heading: "塗り替えの一般的な周期",
        blocks: [
          {
            type: "p",
            text: "使用する塗料の耐久性にもよりますが、一般的なシリコン塗料で10年前後、フッ素塗料であれば15年前後が塗り替えの目安とされています。",
          },
        ],
      },
    ],
    relatedServiceHref: "/personal/reform/wall-painting",
    relatedServiceLabel: "外壁塗装の詳細を見る",
    metaDescription: "外壁塗装を検討すべきタイミングと劣化のサインを解説。チョーキング現象やひび割れの見分け方、塗り替え周期の目安をご紹介します。",
  },
  {
    slug: "used-home-purchase-and-reform",
    title: "中古住宅購入とリフォーム、同時に進めるメリット",
    category: "リノベーション",
    publishedAt: "2026-06-25",
    excerpt: "中古住宅の購入とリフォームを同時に検討することで得られるメリットと注意点を解説します。",
    heroImage: subServiceImages.usedHomeReform,
    heroImageAlt: "中古住宅リフォーム後の外観",
    sections: [
      {
        heading: "購入前にリフォーム費用が分かる安心感",
        blocks: [
          {
            type: "p",
            text: "中古住宅の購入とリフォームを別々に進めると、購入後に想定より高額な工事費が必要と分かるケースがあります。購入前に建物状況調査(インスペクション)とリフォーム費用の概算を確認しておくことで、無理のない資金計画が立てられます。",
          },
        ],
      },
      {
        heading: "住宅ローンとリフォームローンをまとめる方法",
        blocks: [
          {
            type: "p",
            text: "リフォーム一体型の住宅ローンを利用すれば、物件購入費用とリフォーム費用をまとめて借り入れることができ、手続きの手間を減らせます。",
          },
        ],
      },
    ],
    relatedServiceHref: "/personal/reform/used-home-reform",
    relatedServiceLabel: "中古住宅リフォームの詳細を見る",
    metaDescription: "中古住宅の購入とリフォームを同時に進めるメリットを解説。インスペクションの活用法や、住宅ローンとリフォームローンをまとめる方法をご紹介します。",
  },
  {
    slug: "factory-warehouse-heat-shield-sheet",
    title: "工場・倉庫の暑さ対策なら「遮熱シート」という選択肢",
    category: "工場・倉庫向け",
    publishedAt: "2026-07-25",
    excerpt: "エアコンだけに頼らない、熱中症対策・電気代削減・作業環境改善のご提案。屋根から伝わる熱を抑える遮熱シートについて解説します。",
    heroImage: factoryImages.warehouseInterior,
    heroImageAlt: "倉庫内観",
    sections: [
      {
        heading: "こんなお悩みありませんか？",
        blocks: [
          {
            type: "list",
            items: [
              { label: "工場内が40℃近くまで上がる" },
              { label: "エアコンをつけても涼しくならない" },
              { label: "従業員の熱中症が心配" },
              { label: "電気代だけが年々上がっている" },
            ],
          },
          {
            type: "p",
            text: "工場や倉庫の暑さは、働く人の安全だけでなく、生産性や人材確保、光熱費にも影響する経営課題です。",
          },
          {
            type: "p",
            text: "大阪市・西淀川区を中心に工場・倉庫の改修工事を行う株式会社拓工建設では、屋根から伝わる熱を抑える「遮熱シート」の施工をご提案しています。",
          },
        ],
      },
      {
        heading: "工場・倉庫が暑くなる本当の原因とは？",
        blocks: [
          {
            type: "p",
            text: "「エアコンを増設すれば解決する」と思われがちですが、実は工場や倉庫が暑くなる大きな原因は屋根から伝わる輻射熱(ふくしゃねつ)です。",
          },
          {
            type: "p",
            text: "金属製の屋根は真夏の強い日差しを受けることで非常に高温になり、その熱が建物内部へ伝わります。その結果、次のような悪循環が起こります。",
          },
          {
            type: "list",
            items: [
              { label: "室内温度が上昇する" },
              { label: "エアコンが効きにくくなる" },
              { label: "作業環境が悪化する" },
              { label: "熱中症リスクが高まる" },
            ],
          },
          {
            type: "p",
            text: "つまり、屋根から入ってくる熱を抑えなければ、空調設備だけでは根本的な解決にならないケースも少なくありません。",
          },
        ],
      },
      {
        heading: "遮熱シートとは？",
        blocks: [
          {
            type: "p",
            text: "遮熱シートは、太陽からの熱を反射し、屋根から室内へ伝わる熱を抑える建築資材です。建物内部に熱が入りにくくなることで、次のような効果が期待できます。",
          },
          {
            type: "list",
            items: [
              { label: "室内温度の上昇を抑える" },
              { label: "エアコン効率を高める" },
              { label: "電気代の削減につながる" },
              { label: "作業環境の改善が期待できる" },
            ],
          },
          {
            type: "p",
            text: "建物の構造や施工条件によって効果は異なりますが、工場や倉庫の暑さ対策として多くの企業で採用されています。",
          },
        ],
      },
      {
        heading: "工場・倉庫の暑さを放置するとどうなる？",
        blocks: [
          {
            type: "p",
            text: "工場の暑さは、単なる「夏の不快感」ではありません。経営にも大きな影響を与えます。",
          },
          {
            type: "list",
            items: [
              { label: "熱中症リスクの増加", description: "高温環境では従業員の体調不良や熱中症のリスクが高まります。" },
              { label: "作業効率の低下", description: "暑い環境では集中力が低下し、作業ミスや生産性の低下につながることがあります。" },
              { label: "電気代の増加", description: "エアコンを強く運転しても冷えにくく、電気代だけが増えてしまうケースも少なくありません。" },
              {
                label: "採用・定着への影響",
                description: "近年は職場環境を重視する求職者も多く、暑い工場は人材確保の面でも課題となることがあります。",
              },
            ],
          },
        ],
      },
      {
        heading: "遮熱シートを施工する5つのメリット",
        blocks: [
          {
            type: "list",
            items: [
              {
                label: "① 屋根からの熱を抑え、室内環境を改善",
                description: "遮熱シートにより、屋根から伝わる熱を軽減し、作業空間の温度上昇を抑える効果が期待できます。",
              },
              { label: "② エアコン効率が向上", description: "建物内部へ入り込む熱が減るため、冷房効率の改善につながります。" },
              { label: "③ 電気代削減が期待できる", description: "冷房設備への負担を軽減できるため、光熱費の削減につながる可能性があります。" },
              { label: "④ 工場を稼働しながら施工できる場合も", description: "建物の状況によっては、操業を止めずに施工できるケースがあります。" },
              { label: "⑤ 長期間使用できる", description: "一度施工すると長期間使用でき、日常的なメンテナンスが少ないことも魅力です。" },
            ],
          },
        ],
      },
      {
        heading: "このような工場・倉庫におすすめです",
        blocks: [
          { type: "p", text: "次のようなお悩みがある企業様は、一度ご相談ください。" },
          {
            type: "list",
            items: [
              { label: "夏になると室温が40℃近くになる" },
              { label: "エアコンを増設しても暑い" },
              { label: "工場・倉庫の電気代を抑えたい" },
              { label: "従業員の熱中症対策をしたい" },
              { label: "作業環境を改善したい" },
              { label: "工場を止めずに暑さ対策をしたい" },
            ],
          },
        ],
      },
      {
        heading: "工場・倉庫の暑さ対策は、まず現地調査から",
        blocks: [
          { type: "p", text: "工場や倉庫は、建物の構造や屋根材、広さによって最適な暑さ対策が異なります。" },
          {
            type: "p",
            text: "株式会社拓工建設では、お客様の建物を実際に確認したうえで、遮熱シート施工の可否や効果が期待できるポイントをご提案しています。",
          },
          {
            type: "p",
            text: "「エアコンを増設する前に相談したい」「今の工場に合った暑さ対策を知りたい」「電気代を少しでも抑えたい」そんな方は、まずはお気軽にご相談ください。",
          },
        ],
      },
      {
        heading: "工場・倉庫の暑さでお困りなら、株式会社拓工建設へ",
        blocks: [
          {
            type: "p",
            text: "大阪市西淀川区を拠点に、工場・倉庫・事務所などの改修工事を数多く手掛けてきた株式会社拓工建設が、現地調査から施工まで一貫して対応いたします。",
          },
          { type: "p", text: "西淀川工業会会員様は、現地調査・効果予測・お見積もりを無料で承っています。" },
          { type: "p", text: "暑さ対策をご検討中の企業様は、ぜひお気軽にお問い合わせください。" },
        ],
      },
    ],
    relatedServiceHref: "/corporate",
    relatedServiceLabel: "法人のお客様向けサービスを見る",
    faqItems: [
      {
        id: "heat-shield-aircon-only",
        question: "エアコンだけではダメなのでしょうか？",
        answer:
          "エアコンは室内を冷やす設備ですが、屋根から大量の熱が入り続けると効率が下がることがあります。まず建物への熱の侵入を抑えることで、冷房効率の向上が期待できます。",
      },
      {
        id: "heat-shield-operating",
        question: "工場を止めずに施工できますか？",
        answer: "建物の構造や施工方法によっては、稼働しながら施工できる場合があります。現地調査のうえ、最適な施工方法をご提案します。",
      },
      {
        id: "heat-shield-survey-free",
        question: "現地調査や見積もりはお願いできますか？",
        answer: "現地調査を行い、建物の状況に合わせた施工方法をご提案します。費用や工期についても分かりやすくご説明いたします。",
      },
    ],
    metaDescription:
      "工場・倉庫の暑さ対策に「遮熱シート」という選択肢。屋根からの輻射熱を抑え、熱中症対策・電気代削減・作業環境改善につながる施工を、大阪市西淀川区の株式会社拓工建設がご提案します。",
  },
];

export function getSortedColumns(): ColumnArticle[] {
  return [...columns].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getColumnBySlug(slug: string): ColumnArticle | undefined {
  return columns.find((c) => c.slug === slug);
}

export function getColumnsByCategory(category: ColumnCategory): ColumnArticle[] {
  return columns.filter((c) => c.category === category);
}

export function getRelatedColumns(current: ColumnArticle, limit = 3): ColumnArticle[] {
  const sameCategory = columns.filter((c) => c.slug !== current.slug && c.category === current.category);
  const others = columns.filter((c) => c.slug !== current.slug && c.category !== current.category);
  return [...sameCategory, ...others].slice(0, limit);
}
