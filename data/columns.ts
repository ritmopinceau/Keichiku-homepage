import type { ColumnArticle, ColumnCategory } from "./types";
import { projectImages, subServiceImages, companyImage } from "./placeholderImages";

/**
 * コラム(お役立ち記事)。検索されやすいキーワードごとに1記事ずつ追加していく想定。
 * 新しい記事はこの配列に1件追加するだけで、一覧・詳細ページ・サイトマップに反映されます。
 */
export const columnCategories: ColumnCategory[] = ["費用・相場", "補助金・制度", "会社選び", "工事の基礎知識", "リノベーション"];

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
        paragraphs: [
          "リフォーム費用は「どこを」「どこまで」直すかによって数十万円から数千万円まで幅があります。設備の交換のみか、間取り変更まで含むかで金額は大きく変わります。",
          "まずは工事内容ごとのおおよその相場を把握したうえで、現地調査で正確な見積りを取ることが失敗しないリフォームの第一歩です。",
        ],
      },
      {
        heading: "工事内容別の費用相場の目安",
        paragraphs: [
          "キッチンリフォームは設備交換のみで20万円〜60万円、対面式への変更を伴う場合は150万円〜350万円が目安です。浴室リフォームはユニットバスへの交換で80万円〜150万円程度です。",
          "外壁塗装は建物の規模により70万円〜180万円、屋根の葺き替えは120万円〜250万円が目安となります。詳しい内訳は各工事の詳細ページでご確認いただけます。",
        ],
      },
      {
        heading: "費用を抑えるためのポイント",
        paragraphs: [
          "複数箇所をまとめて工事することで、足場代や職人の手配にかかる費用を抑えられる場合があります。また、国や自治体の補助金制度が利用できる工事もあるため、事前の確認がおすすめです。",
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
        paragraphs: [
          "リフォームに関する補助金には、住宅の省エネ性能を高める工事を対象とした制度や、子育て世帯・若者夫婦世帯を対象とした制度など、いくつかの種類があります。",
          "制度によって対象となる工事内容や申請時期、予算の上限が異なるため、年度ごとに最新情報を確認する必要があります。",
        ],
      },
      {
        heading: "申請時の注意点",
        paragraphs: [
          "多くの補助金制度は、工事着工前の申請が必要です。契約前に対象となるかどうかを確認せずに着工してしまうと、補助金を受けられなくなる場合があるため注意が必要です。",
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
        paragraphs: [
          "依頼を検討している工事内容と近い施工事例があるかどうかは、技術力を見極める重要な判断材料です。写真だけでなく、工期や費用感まで公開されているかも確認しましょう。",
        ],
      },
      {
        heading: "建築と不動産、どこまで一括対応できるか",
        paragraphs: [
          "中古住宅の購入を伴うリフォームなどでは、不動産と建築の窓口が別々だと情報の行き違いが生じやすくなります。ワンストップで対応できる会社は、資金計画から施工まで一貫した提案が受けられます。",
        ],
      },
      {
        heading: "アフターサポート体制",
        paragraphs: [
          "工事完了後の保証内容や定期点検の有無も、長く安心して住み続けるためには欠かせない比較ポイントです。",
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
        paragraphs: [
          "外壁を触ると白い粉が手に付く「チョーキング」現象や、コーキング(目地)のひび割れ・痩せは、塗膜の防水性能が低下しているサインです。",
          "ひび割れを放置すると、そこから雨水が侵入し、建物内部の腐食や雨漏りにつながる可能性があります。",
        ],
      },
      {
        heading: "塗り替えの一般的な周期",
        paragraphs: [
          "使用する塗料の耐久性にもよりますが、一般的なシリコン塗料で10年前後、フッ素塗料であれば15年前後が塗り替えの目安とされています。",
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
        paragraphs: [
          "中古住宅の購入とリフォームを別々に進めると、購入後に想定より高額な工事費が必要と分かるケースがあります。購入前に建物状況調査(インスペクション)とリフォーム費用の概算を確認しておくことで、無理のない資金計画が立てられます。",
        ],
      },
      {
        heading: "住宅ローンとリフォームローンをまとめる方法",
        paragraphs: [
          "リフォーム一体型の住宅ローンを利用すれば、物件購入費用とリフォーム費用をまとめて借り入れることができ、手続きの手間を減らせます。",
        ],
      },
    ],
    relatedServiceHref: "/personal/reform/used-home-reform",
    relatedServiceLabel: "中古住宅リフォームの詳細を見る",
    metaDescription: "中古住宅の購入とリフォームを同時に進めるメリットを解説。インスペクションの活用法や、住宅ローンとリフォームローンをまとめる方法をご紹介します。",
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
