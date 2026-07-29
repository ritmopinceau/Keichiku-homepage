/**
 * /work-and-life(西淀川区で働く・暮らす)ページ専用のコンテンツ。
 * 日本語(ja)・英語(en)・中国語(zh)・ベトナム語(vi)の4言語分を
 * ここに集約している。言語を追加する場合は、この型に沿って
 * WorkLifeLang と workLifeContent にキーを1つ追加するだけでよい。
 *
 * 「対応可能かどうか未確認」の内容(法人契約・家具家電付き物件・複数人向け物件・
 * 来日前相談など)は、事実として断定せず「ご相談いただけます」調にとどめている。
 * 実際の対応可否が確認でき次第、より具体的な表現に更新すること。
 */

export type WorkLifeLang = "ja" | "en" | "zh" | "vi";

export const workLifeLangLabels: Record<WorkLifeLang, string> = {
  ja: "日本語",
  en: "English",
  zh: "中文",
  vi: "Tiếng Việt",
};

export interface WorkLifeAreaItem {
  icon: string;
  title: string;
  time: string;
  body: string;
}

export interface WorkLifeDailyItem {
  icon: string;
  label: string;
}

export interface WorkLifeFaqItem {
  question: string;
  answer: string;
}

export interface WorkLifeContent {
  metaTitle: string;
  metaDescription: string;
  hero: { title: string; catchphrase: string; body: string; ctaPrimary: string; ctaSecondary: string };
  mapSection: { heading: string; body: string; footnote: string };
  centralArea: { heading: string; items: WorkLifeAreaItem[] };
  dayTrip: { heading: string; items: WorkLifeAreaItem[]; footnote: string };
  dailyLife: { heading: string; body: string; items: WorkLifeDailyItem[] };
  reassurance: { heading: string; body: string; examples: string[]; disclaimer: string };
  forCompanies: { heading: string; body: string; examples: string[]; ctaPrimary: string; ctaSecondary: string };
  process: { heading: string; steps: string[] };
  faq: { heading: string; items: WorkLifeFaqItem[] };
  finalCta: { heading: string; body: string; ctaHousing: string; ctaCompany: string; ctaPhone: string };
}

export const workLifeContent: Record<WorkLifeLang, WorkLifeContent> = {
  ja: {
    metaTitle: "大阪・西淀川区で働くベトナムの方へ｜暮らし・交通・賃貸住宅のご案内",
    metaDescription:
      "大阪市西淀川区で働くベトナムの方へ、交通の便利さ、買い物、休日の過ごし方、賃貸住宅について分かりやすくご紹介します。外国人スタッフの住居、社宅、法人契約をお探しの企業様もご相談ください。",
    hero: {
      title: "ベトナムから大阪・西淀川区へ働きに来る皆さまへ",
      catchphrase: "仕事も、暮らしも、休日も。西淀川区なら、便利で安心できる新生活を始められます。",
      body: "大阪市西淀川区は、工場や事業所が多く、働く場所に近いエリアです。さらに、梅田・なんば・心斎橋など大阪の中心部へも移動しやすく、京都・神戸・奈良へのお出かけにも便利です。外国人の方の賃貸住宅や、企業様の社宅・法人契約についてもご相談いただけます。",
      ctaPrimary: "西淀川区の魅力を見る",
      ctaSecondary: "住まいについて相談する",
    },
    mapSection: {
      heading: "大阪の中心部にも、関西の観光地にも行きやすい場所です",
      body: "西淀川区は大阪市の北西部にあり、大阪駅・梅田エリアや兵庫県方面へ移動しやすい地域です。仕事の日は工場へ通いやすく、休日には大阪市内や京都・神戸・奈良へ気軽に出かけることができます。",
      footnote: "所要時間は姫島駅から電車を利用した場合の目安です。時間帯や乗り換えにより異なります。",
    },
    centralArea: {
      heading: "大阪の中心部に近い",
      items: [
        { icon: "Train", title: "梅田・大阪駅", time: "約7分", body: "大型商業施設や飲食店、家電量販店が集まる大阪の玄関口。仕事帰りや休日の買い物にも便利です。" },
        { icon: "UtensilsCrossed", title: "なんば・道頓堀", time: "約20分", body: "大阪らしい賑わいのある観光地。飲食店が多く、友人との外出にもおすすめです。" },
        { icon: "ShoppingBag", title: "心斎橋", time: "約18分", body: "ショッピングやファッション、飲食店が充実し、若い世代にも人気のエリアです。" },
        { icon: "TrainFront", title: "新大阪", time: "約26分", body: "新幹線が利用でき、遠方への移動にも便利です。" },
      ],
    },
    dayTrip: {
      heading: "休日には京都・神戸・奈良へ",
      items: [
        { icon: "Landmark", title: "京都", time: "約1時間", body: "歴史ある寺院や神社が多く、紅葉や桜など四季の景色も楽しめます。" },
        { icon: "Ship", title: "神戸", time: "約44分", body: "港町の雰囲気とショッピング、中華街、夜景が魅力です。" },
        { icon: "TreePine", title: "奈良", time: "約1時間10分", body: "奈良公園の鹿や、歴史的な寺院・街並みを楽しめます。" },
        { icon: "Star", title: "USJ", time: "約33分", body: "休日に楽しめる人気のテーマパークです。" },
      ],
      footnote: "※所要時間は電車利用の目安です。時間帯や乗り換えにより異なります。",
    },
    dailyLife: {
      heading: "西淀川区は、毎日の生活にも便利です",
      body: "スーパーやコンビニ、ドラッグストアが徒歩や自転車で行ける範囲にあり、日々の買い物に困りにくい地域です。病院やクリニック、銀行、郵便局なども生活圏内にあり、区内は比較的平坦なため自転車での移動もしやすいエリアです。",
      items: [
        { icon: "ShoppingCart", label: "スーパー・コンビニ" },
        { icon: "Pill", label: "ドラッグストア" },
        { icon: "Stethoscope", label: "病院・クリニック" },
        { icon: "Landmark", label: "銀行・郵便局" },
        { icon: "UtensilsCrossed", label: "飲食店" },
        { icon: "Bike", label: "自転車で移動しやすい" },
      ],
    },
    reassurance: {
      heading: "初めての日本での生活も、住まい探しからサポートします",
      body: "日本で初めて暮らす方にとって、住まい探しは大きな不安の一つです。ご安心ください、お部屋探しやご契約は勤務先の企業様を通じて進める形となりますので、ご本人が直接不動産会社とやり取りいただく必要はありません。勤務先への通いやすさや、一人暮らし・複数人でのお住まいなど、ご希望に応じてご相談いただけます。",
      examples: ["勤務先や最寄り駅に合わせた物件探し", "一人暮らし・複数人向けのお部屋のご相談", "入居に必要な手続きに関するご相談"],
      disclaimer: "※対応できる内容は、物件や契約条件によって異なります。詳しくはお問い合わせ時にご確認ください。",
    },
    forCompanies: {
      heading: "外国人スタッフの採用と住まい探しでお困りの企業様へ",
      body: "外国人スタッフを採用する際、勤務先だけでなく、住居や通勤環境の説明も重要です。このページは、採用候補者や入社予定者へ、西淀川区の立地や生活環境を伝える資料としてお使いいただけます。ニッタク産業では、外国人スタッフの賃貸住宅、社宅、法人契約などについてもご相談を承ります。",
      examples: [
        "採用予定者の住居を探したい",
        "工場の近くに複数の部屋を確保したい",
        "法人名義で賃貸契約をしたい",
        "社宅や社員寮として利用できる物件を探したい",
        "外国人スタッフの通勤に便利な地域を知りたい",
        "採用時に紹介できる住居情報がほしい",
      ],
      ctaPrimary: "企業として住まいを相談する",
      ctaSecondary: "賃貸物件について問い合わせる",
    },
    process: {
      heading: "住まい探しの流れ",
      steps: ["お問い合わせ", "勤務先・人数・希望条件を確認", "通勤しやすい物件をご提案", "内覧", "入居審査・契約", "入居"],
    },
    faq: {
      heading: "よくある質問",
      items: [
        {
          question: "外国人でも賃貸住宅を借りられますか？",
          answer: "物件や契約条件、審査内容によって異なります。勤務先や在留資格、入居人数などを確認しながら、ご相談可能な物件をご案内いたします。",
        },
        {
          question: "ベトナムから日本へ来る前でも相談できますか？",
          answer: "まずは採用企業様のご担当者を通じてご相談ください。個々の状況に応じて、可能な範囲でご案内いたします。",
        },
        { question: "工場の近くで部屋を探せますか？", answer: "勤務先の住所や利用する駅をお伺いし、通勤しやすい物件をご提案いたします。" },
        {
          question: "企業名義で契約できますか？",
          answer: "法人契約についてもご相談いただけます。物件ごとに条件が異なりますので、詳しくはお問い合わせください。",
        },
        { question: "家具・家電付きの物件はありますか？", answer: "物件によって対応が異なります。ご希望をお伺いしたうえで、可能な範囲でご案内いたします。" },
        {
          question: "複数人分の部屋をまとめて相談できますか？",
          answer: "そのようなご相談も承っております。人数やご希望条件をお伺いしたうえで、可能な範囲でご案内いたします。",
        },
      ],
    },
    finalCta: {
      heading: "大阪・西淀川区で、新しい仕事と暮らしを始めませんか？",
      body: "西淀川区は、工場へ通いやすく、大阪の中心部や関西各地へも移動しやすい地域です。外国人の方のお部屋探しや、企業様の社宅・法人契約についても、お気軽にご相談ください。",
      ctaHousing: "住まいについて相談する",
      ctaCompany: "企業として相談する",
      ctaPhone: "電話で問い合わせる",
    },
  },
  en: {
    metaTitle: "For Vietnamese Workers in Osaka - Nishiyodogawa | Transportation, Life & Rental Housing Guide",
    metaDescription:
      "A guide for Vietnamese workers in Nishiyodogawa, Osaka, covering transportation, shopping, days off, and rental housing. Companies looking for housing support, company housing, or corporate lease contracts for foreign staff are also welcome to contact us.",
    hero: {
      title: "For Everyone Coming from Vietnam to Work in Osaka - Nishiyodogawa",
      catchphrase: "Work, life, and days off. Start a convenient and reassuring new life in Nishiyodogawa.",
      body: "Nishiyodogawa Ward in Osaka City is home to many factories and businesses, making it an easy place to commute to work. It's also well-connected to central Osaka areas like Umeda, Namba, and Shinsaibashi, as well as day trips to Kyoto, Kobe, and Nara. We're also happy to consult on rental housing for foreign residents, as well as company housing and corporate lease contracts for businesses.",
      ctaPrimary: "See what Nishiyodogawa offers",
      ctaSecondary: "Consult about housing",
    },
    mapSection: {
      heading: "Close to central Osaka and Kansai's popular destinations",
      body: "Nishiyodogawa is located in the northwest of Osaka City, with easy access to the Osaka/Umeda area and toward Hyogo Prefecture. It's convenient for commuting to factories on weekdays, and for exploring central Osaka or Kyoto, Kobe, and Nara on your days off.",
      footnote: "Travel times are estimates for train travel from Himejima Station. They may vary depending on the time of day and connections.",
    },
    centralArea: {
      heading: "Close to central Osaka",
      items: [
        { icon: "Train", title: "Umeda / Osaka Station", time: "About 7 min", body: "Osaka's gateway, with major shopping centers, restaurants, and electronics stores. Convenient for shopping after work or on days off." },
        { icon: "UtensilsCrossed", title: "Namba / Dotonbori", time: "About 20 min", body: "A lively, quintessentially Osaka sightseeing area with many restaurants. A great spot to go out with friends." },
        { icon: "ShoppingBag", title: "Shinsaibashi", time: "About 18 min", body: "Popular with younger generations for its shopping, fashion, and dining options." },
        { icon: "TrainFront", title: "Shin-Osaka", time: "About 26 min", body: "Access to the Shinkansen (bullet train), convenient for longer trips." },
      ],
    },
    dayTrip: {
      heading: "Explore Kyoto, Kobe, and Nara on your days off",
      items: [
        { icon: "Landmark", title: "Kyoto", time: "About 1 hour", body: "Home to many historic temples and shrines, with beautiful autumn leaves and cherry blossoms each season." },
        { icon: "Ship", title: "Kobe", time: "About 44 min", body: "A port city with great shopping, a Chinatown, and beautiful night views." },
        { icon: "TreePine", title: "Nara", time: "About 1 hr 10 min", body: "Famous for Nara Park's deer and its historic temples and townscape." },
        { icon: "Star", title: "USJ", time: "About 33 min", body: "A popular theme park, great for a fun day off." },
      ],
      footnote: "※Travel times are estimates for train travel and may vary depending on the time of day and connections.",
    },
    dailyLife: {
      heading: "Convenient for everyday life, too",
      body: "Supermarkets, convenience stores, and drugstores are all within walking or cycling distance, so you won't have trouble with daily shopping. Hospitals, clinics, banks, and post offices are also part of the local area, and the ward's mostly flat terrain makes getting around by bicycle easy.",
      items: [
        { icon: "ShoppingCart", label: "Supermarkets & convenience stores" },
        { icon: "Pill", label: "Drugstores" },
        { icon: "Stethoscope", label: "Hospitals & clinics" },
        { icon: "Landmark", label: "Banks & post offices" },
        { icon: "UtensilsCrossed", label: "Restaurants" },
        { icon: "Bike", label: "Easy to get around by bicycle" },
      ],
    },
    reassurance: {
      heading: "We support your housing search, from your very first days in Japan",
      body: "For those living in Japan for the first time, finding housing is one of the biggest sources of anxiety. Nittaku Sangyo is happy to consult based on your needs, whether that's proximity to your workplace, or living alone versus sharing a place with others.",
      examples: ["Housing search based on your workplace or nearest station", "Consultation on rooms for one person or for sharing with others", "Guidance on the procedures needed to move in"],
      disclaimer: "※What we're able to offer varies by property and contract conditions. Please contact us for details.",
    },
    forCompanies: {
      heading: "For companies looking for support with hiring and housing for foreign staff",
      body: "When hiring foreign staff, it's important to explain not just the workplace, but also housing and commuting conditions. This page can be used as a resource to share the location and living environment of Nishiyodogawa with candidates or new hires. Nittaku Sangyo is also happy to consult on rental housing, company housing, and corporate lease contracts for foreign staff.",
      examples: [
        "Looking for housing for a prospective hire",
        "Want to secure multiple units near the factory",
        "Want to sign a lease under the company's name",
        "Looking for a property to use as company housing or a dormitory",
        "Want to know which areas are convenient for staff commutes",
        "Want housing information to share during recruitment",
      ],
      ctaPrimary: "Consult about housing as a company",
      ctaSecondary: "Inquire about rental properties",
    },
    process: {
      heading: "Housing search process",
      steps: ["Inquiry", "Confirm workplace, number of people, and preferences", "Property proposals based on commute convenience", "Viewing", "Screening & contract", "Move-in"],
    },
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        {
          question: "Can foreign nationals rent housing?",
          answer: "It depends on the property, contract conditions, and screening process. We'll check your workplace, residence status, and number of occupants, and introduce properties we can consult on.",
        },
        {
          question: "Can I consult before coming to Japan from Vietnam?",
          answer: "Please reach out first through your hiring company's representative. We'll provide guidance where possible based on your situation.",
        },
        { question: "Can I find housing near the factory?", answer: "We'll ask for your workplace address and nearest station, and propose housing convenient for your commute." },
        {
          question: "Can a company sign the lease under its name?",
          answer: "Corporate lease contracts are something we're happy to discuss. Conditions vary by property, so please contact us for details.",
        },
        { question: "Are there furnished properties with appliances?", answer: "This varies by property. We'll listen to your preferences and guide you within what's possible." },
        {
          question: "Can I consult about finding rooms for multiple people at once?",
          answer: "Yes, we welcome this kind of consultation. Please let us know the number of people and your preferences, and we'll guide you within what's possible.",
        },
      ],
    },
    finalCta: {
      heading: "Ready to start a new job and a new life in Osaka - Nishiyodogawa?",
      body: "Nishiyodogawa is convenient for commuting to factories, and for traveling to central Osaka and other parts of Kansai. Feel free to reach out about housing for individuals, as well as company housing and corporate contracts for businesses.",
      ctaHousing: "Consult about housing",
      ctaCompany: "Consult as a company",
      ctaPhone: "Contact us by phone",
    },
  },
  zh: {
    metaTitle: "致在大阪西淀川区工作的越南朋友们｜交通・生活・租房指南",
    metaDescription: "为在大阪市西淀川区工作的越南朋友们介绍交通、购物、假日出游和租房信息。欢迎有外籍员工住房、社宅、法人合同需求的企业垂询。",
    hero: {
      title: "致从越南来到大阪西淀川区工作的朋友们",
      catchphrase: "工作、生活、假日，尽在其中。在西淀川区，开启便利又安心的新生活。",
      body: "大阪市西淀川区聚集了众多工厂和企业，是十分便于上班的地区。同时，前往梅田、难波、心斋桥等大阪市中心也很方便，假日还可以轻松前往京都、神户、奈良游玩。我们也承接外国人租房咨询，以及企业的社宅、法人合同等相关事宜。",
      ctaPrimary: "了解西淀川区的魅力",
      ctaSecondary: "咨询住房事宜",
    },
    mapSection: {
      heading: "地理位置优越，前往大阪市中心及关西各观光地都很方便",
      body: "西淀川区位于大阪市西北部，前往大阪站・梅田一带及兵库县方向都很便利。工作日方便前往工厂上班，假日则可轻松前往大阪市内或京都・神户・奈良。",
      footnote: "所需时间为从姬岛站乘坐电车的大致参考值，会因时间段和换乘情况而有所不同。",
    },
    centralArea: {
      heading: "距大阪市中心很近",
      items: [
        { icon: "Train", title: "梅田・大阪站", time: "约7分钟", body: "大阪的门户地带，云集大型商业设施、餐饮店和家电量贩店，下班后或假日购物都很方便。" },
        { icon: "UtensilsCrossed", title: "难波・道顿堀", time: "约20分钟", body: "充满大阪风情的热闹观光地，餐饮店众多，也适合与朋友出游。" },
        { icon: "ShoppingBag", title: "心斋桥", time: "约18分钟", body: "购物、时尚、餐饮一应俱全，深受年轻人喜爱。" },
        { icon: "TrainFront", title: "新大阪", time: "约26分钟", body: "可乘坐新干线，前往远方十分便利。" },
      ],
    },
    dayTrip: {
      heading: "假日可前往京都・神户・奈良",
      items: [
        { icon: "Landmark", title: "京都", time: "约1小时", body: "拥有众多历史悠久的寺院神社，四季均可欣赏红叶与樱花等美景。" },
        { icon: "Ship", title: "神户", time: "约44分钟", body: "港口城市氛围，购物、中华街与夜景都很有魅力。" },
        { icon: "TreePine", title: "奈良", time: "约1小时10分钟", body: "奈良公园的鹿群，以及历史悠久的寺院街景值得一游。" },
        { icon: "Star", title: "USJ(环球影城)", time: "约33分钟", body: "假日休闲的热门主题乐园。" },
      ],
      footnote: "※所需时间为乘坐电车的大致参考值，会因时间段和换乘情况而有所不同。",
    },
    dailyLife: {
      heading: "西淀川区的日常生活也很便利",
      body: "超市、便利店、药妆店等步行或骑自行车即可到达，日常购物毫无烦恼。医院、诊所、银行、邮局等生活设施也一应俱全，区内地势较为平坦，骑自行车出行也很方便。",
      items: [
        { icon: "ShoppingCart", label: "超市・便利店" },
        { icon: "Pill", label: "药妆店" },
        { icon: "Stethoscope", label: "医院・诊所" },
        { icon: "Landmark", label: "银行・邮局" },
        { icon: "UtensilsCrossed", label: "餐饮店" },
        { icon: "Bike", label: "便于骑自行车出行" },
      ],
    },
    reassurance: {
      heading: "初到日本生活，我们也从住房开始为您提供支持",
      body: "对于初次在日本生活的朋友来说，找房子是最大的担忧之一。新拓产业会根据您的需求，为您提供靠近工作单位的房源、单人居住或多人合住等方面的咨询服务。",
      examples: ["根据工作单位或最近车站寻找房源", "单人居住・多人合住的房源咨询", "入住所需手续的相关咨询"],
      disclaimer: "※具体可提供的支持内容因房源和合同条件而异，详情请咨询我们。",
    },
    forCompanies: {
      heading: "致在招聘及外籍员工住房方面有需求的企业",
      body: "在招聘外籍员工时，不仅工作单位本身，住房和通勤环境的说明也十分重要。本页面可作为向应聘者或新入职员工介绍西淀川区地理位置及生活环境的资料使用。新拓产业也承接外籍员工租房、社宅、法人合同等相关咨询。",
      examples: [
        "希望为拟录用人员寻找住房",
        "希望在工厂附近确保多个房间",
        "希望以法人名义签订租赁合同",
        "希望寻找可作为社宅或员工宿舍使用的房源",
        "希望了解便于员工通勤的区域",
        "希望获得可在招聘时提供的住房信息",
      ],
      ctaPrimary: "以企业身份咨询住房",
      ctaSecondary: "咨询租赁房源",
    },
    process: {
      heading: "找房流程",
      steps: ["咨询", "确认工作单位・人数・希望条件", "提出便于通勤的房源方案", "实地看房", "审核・签约", "入住"],
    },
    faq: {
      heading: "常见问题",
      items: [
        {
          question: "外国人也能租房吗？",
          answer: "这取决于具体房源、合同条件及审核情况。我们会确认您的工作单位、在留资格、入住人数等信息，为您介绍可咨询的房源。",
        },
        {
          question: "来日本之前可以先咨询吗？",
          answer: "请先通过招聘企业的负责人与我们联系，我们会根据具体情况在可能范围内为您提供指导。",
        },
        { question: "可以在工厂附近找房吗？", answer: "我们会询问您工作单位的地址及使用的车站，为您提出便于通勤的房源方案。" },
        { question: "可以以企业名义签约吗？", answer: "法人合同也可以与我们咨询，具体条件因房源而异，详情请垂询。" },
        { question: "有配备家具家电的房源吗？", answer: "这因房源而异，我们会先了解您的需求，再在可能范围内为您介绍。" },
        { question: "可以一并咨询多人合住的房源吗？", answer: "可以，我们承接此类咨询。请告知人数及希望条件，我们会在可能范围内为您介绍。" },
      ],
    },
    finalCta: {
      heading: "要不要在大阪西淀川区，开启新的工作与生活？",
      body: "西淀川区不仅便于前往工厂上班，前往大阪市中心及关西各地也很方便。无论是个人租房咨询，还是企业的社宅、法人合同事宜，都欢迎随时联系我们。",
      ctaHousing: "咨询住房事宜",
      ctaCompany: "以企业身份咨询",
      ctaPhone: "电话咨询",
    },
  },
  vi: {
    metaTitle: "Gửi người Việt Nam làm việc tại Osaka - Nishiyodogawa | Giao thông, cuộc sống, nhà thuê",
    metaDescription:
      "Giới thiệu về giao thông, mua sắm, ngày nghỉ và nhà thuê dành cho người Việt Nam làm việc tại Nishiyodogawa, Osaka. Doanh nghiệp cần tư vấn nhà ở, nhà công ty, hợp đồng pháp nhân cho nhân viên nước ngoài cũng có thể liên hệ.",
    hero: {
      title: "Gửi các bạn từ Việt Nam đến làm việc tại Osaka - Nishiyodogawa",
      catchphrase: "Công việc, cuộc sống và cả ngày nghỉ. Bắt đầu cuộc sống mới thuận tiện và an tâm tại Nishiyodogawa.",
      body: "Quận Nishiyodogawa, thành phố Osaka có nhiều nhà máy và cơ sở kinh doanh, rất thuận tiện để đi làm. Từ đây cũng dễ dàng di chuyển đến trung tâm Osaka như Umeda, Namba, Shinsaibashi, và đi chơi ở Kyoto, Kobe, Nara vào ngày nghỉ. Chúng tôi cũng nhận tư vấn về nhà thuê cho người nước ngoài, cũng như hợp đồng thuê nhà theo pháp nhân cho doanh nghiệp.",
      ctaPrimary: "Xem điểm hấp dẫn của Nishiyodogawa",
      ctaSecondary: "Tư vấn về nhà ở",
    },
    mapSection: {
      heading: "Vị trí thuận tiện để đến trung tâm Osaka và các điểm du lịch Kansai",
      body: "Nishiyodogawa nằm ở phía Tây Bắc thành phố Osaka, thuận tiện di chuyển đến khu vực ga Osaka - Umeda và hướng tỉnh Hyogo. Ngày thường dễ dàng đi đến nhà máy, ngày nghỉ có thể dễ dàng đến trung tâm Osaka hoặc Kyoto, Kobe, Nara.",
      footnote: "Thời gian di chuyển là ước tính khi đi tàu từ ga Himejima. Có thể thay đổi tùy khung giờ và tuyến đường.",
    },
    centralArea: {
      heading: "Gần trung tâm Osaka",
      items: [
        { icon: "Train", title: "Umeda - Ga Osaka", time: "khoảng 7 phút", body: "Trung tâm mua sắm, ẩm thực và cửa hàng điện máy lớn của Osaka. Tiện lợi để mua sắm sau giờ làm hoặc ngày nghỉ." },
        { icon: "UtensilsCrossed", title: "Namba - Dotonbori", time: "khoảng 20 phút", body: "Khu du lịch sầm uất mang đậm chất Osaka, nhiều nhà hàng. Thích hợp đi chơi cùng bạn bè." },
        { icon: "ShoppingBag", title: "Shinsaibashi", time: "khoảng 18 phút", body: "Khu mua sắm thời trang, ẩm thực, được giới trẻ yêu thích." },
        { icon: "TrainFront", title: "Shin-Osaka", time: "khoảng 26 phút", body: "Có thể đi tàu Shinkansen, tiện lợi khi di chuyển xa." },
      ],
    },
    dayTrip: {
      heading: "Ngày nghỉ đến Kyoto, Kobe, Nara",
      items: [
        { icon: "Landmark", title: "Kyoto", time: "khoảng 1 giờ", body: "Nhiều đền chùa lịch sử, có thể ngắm hoa anh đào và lá đỏ theo mùa." },
        { icon: "Ship", title: "Kobe", time: "khoảng 44 phút", body: "Thành phố cảng với khu mua sắm, phố người Hoa và cảnh đêm đẹp." },
        { icon: "TreePine", title: "Nara", time: "khoảng 1 giờ 10 phút", body: "Công viên Nara với đàn hươu và các ngôi chùa lịch sử." },
        { icon: "Star", title: "USJ", time: "khoảng 33 phút", body: "Công viên giải trí nổi tiếng, thích hợp cho ngày nghỉ." },
      ],
      footnote: "※Thời gian di chuyển là ước tính khi đi tàu, có thể thay đổi tùy khung giờ và tuyến đường.",
    },
    dailyLife: {
      heading: "Thuận tiện cho cuộc sống hàng ngày",
      body: "Siêu thị, cửa hàng tiện lợi, hiệu thuốc đều nằm trong khoảng cách đi bộ hoặc đi xe đạp, không lo thiếu nơi mua sắm. Bệnh viện, phòng khám, ngân hàng, bưu điện cũng có trong khu vực sinh hoạt. Địa hình khá bằng phẳng nên dễ dàng di chuyển bằng xe đạp.",
      items: [
        { icon: "ShoppingCart", label: "Siêu thị - cửa hàng tiện lợi" },
        { icon: "Pill", label: "Hiệu thuốc" },
        { icon: "Stethoscope", label: "Bệnh viện - phòng khám" },
        { icon: "Landmark", label: "Ngân hàng - bưu điện" },
        { icon: "UtensilsCrossed", label: "Nhà hàng" },
        { icon: "Bike", label: "Dễ di chuyển bằng xe đạp" },
      ],
    },
    reassurance: {
      heading: "Hỗ trợ tìm nhà ở ngay từ những ngày đầu sinh sống tại Nhật Bản",
      body: "Đối với người lần đầu sinh sống tại Nhật Bản, việc tìm nhà ở là một trong những điều lo lắng lớn. Nittaku Sangyo nhận tư vấn theo nhu cầu như nhà gần nơi làm việc, phòng ở một mình hoặc ở cùng nhiều người.",
      examples: ["Tìm nhà theo nơi làm việc hoặc ga tàu gần nhất", "Tư vấn phòng cho một người hoặc nhiều người ở chung", "Tư vấn các thủ tục cần thiết khi vào ở"],
      disclaimer: "※Nội dung hỗ trợ có thể khác nhau tùy theo từng căn hộ và điều kiện hợp đồng. Vui lòng liên hệ để biết chi tiết.",
    },
    forCompanies: {
      heading: "Gửi doanh nghiệp đang gặp khó khăn trong tuyển dụng và tìm nhà ở cho nhân viên nước ngoài",
      body: "Khi tuyển dụng nhân viên nước ngoài, không chỉ nơi làm việc mà cả nhà ở và môi trường đi lại cũng rất quan trọng. Trang này có thể được sử dụng như tài liệu giới thiệu về vị trí và môi trường sống tại Nishiyodogawa cho ứng viên hoặc nhân viên sắp nhập việc. Nittaku Sangyo cũng nhận tư vấn về nhà thuê, nhà ở công ty, hợp đồng pháp nhân cho nhân viên nước ngoài.",
      examples: [
        "Muốn tìm nhà cho nhân viên dự kiến tuyển dụng",
        "Muốn có nhiều phòng gần nhà máy",
        "Muốn ký hợp đồng thuê nhà theo tên công ty",
        "Muốn tìm nhà có thể dùng làm nhà ở tập thể cho nhân viên",
        "Muốn biết khu vực thuận tiện cho nhân viên đi làm",
        "Muốn có thông tin nhà ở để giới thiệu khi tuyển dụng",
      ],
      ctaPrimary: "Tư vấn nhà ở với tư cách doanh nghiệp",
      ctaSecondary: "Hỏi về nhà cho thuê",
    },
    process: {
      heading: "Quy trình tìm nhà ở",
      steps: ["Liên hệ", "Xác nhận nơi làm việc, số người, điều kiện mong muốn", "Đề xuất nhà ở thuận tiện cho việc đi lại", "Xem nhà thực tế", "Thẩm định và ký hợp đồng", "Chuyển vào ở"],
    },
    faq: {
      heading: "Câu hỏi thường gặp",
      items: [
        {
          question: "Người nước ngoài có thể thuê nhà không?",
          answer: "Tùy thuộc vào từng căn hộ, điều kiện hợp đồng và thẩm định. Chúng tôi sẽ xác nhận nơi làm việc, tư cách lưu trú, số người ở và giới thiệu những căn hộ có thể tư vấn.",
        },
        {
          question: "Có thể tư vấn trước khi đến Nhật từ Việt Nam không?",
          answer: "Vui lòng liên hệ trước thông qua người phụ trách của doanh nghiệp tuyển dụng. Chúng tôi sẽ hướng dẫn trong phạm vi có thể tùy theo từng trường hợp.",
        },
        { question: "Có thể tìm nhà gần nhà máy không?", answer: "Chúng tôi sẽ hỏi địa chỉ nơi làm việc và ga tàu sử dụng để đề xuất nhà ở thuận tiện cho việc đi lại." },
        {
          question: "Có thể ký hợp đồng theo tên công ty không?",
          answer: "Có thể tư vấn về hợp đồng pháp nhân. Điều kiện khác nhau tùy từng căn hộ, vui lòng liên hệ để biết chi tiết.",
        },
        { question: "Có nhà có sẵn nội thất, đồ điện gia dụng không?", answer: "Tùy từng căn hộ mà có sự khác biệt. Chúng tôi sẽ lắng nghe nguyện vọng và giới thiệu trong phạm vi có thể." },
        {
          question: "Có thể tư vấn tìm nhà cho nhiều người cùng lúc không?",
          answer: "Có, chúng tôi nhận tư vấn về việc này. Vui lòng cho biết số người và điều kiện mong muốn để chúng tôi hỗ trợ trong phạm vi có thể.",
        },
      ],
    },
    finalCta: {
      heading: "Bắt đầu công việc và cuộc sống mới tại Osaka - Nishiyodogawa?",
      body: "Nishiyodogawa là khu vực thuận tiện để đi đến nhà máy, cũng như di chuyển đến trung tâm Osaka và các vùng Kansai khác. Hãy liên hệ với chúng tôi để được tư vấn về nhà ở cho cá nhân, cũng như nhà ở công ty và hợp đồng pháp nhân cho doanh nghiệp.",
      ctaHousing: "Tư vấn về nhà ở",
      ctaCompany: "Tư vấn với tư cách doanh nghiệp",
      ctaPhone: "Liên hệ qua điện thoại",
    },
  },
};
