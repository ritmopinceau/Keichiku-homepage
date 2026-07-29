/**
 * /work-and-life(西淀川区で働く・暮らす)ページ専用のコンテンツ。
 * 日本語(ja)・やさしい日本語(easyJa)・ベトナム語(vi)の3言語分を
 * ここに集約している。言語を追加する場合は、この型に沿って
 * WorkLifeLang と workLifeContent にキーを1つ追加するだけでよい。
 *
 * 「対応可能かどうか未確認」の内容(法人契約・家具家電付き物件・複数人向け物件・
 * 来日前相談など)は、事実として断定せず「ご相談いただけます」調にとどめている。
 * 実際の対応可否が確認でき次第、より具体的な表現に更新すること。
 */

export type WorkLifeLang = "ja" | "easyJa" | "vi";

export const workLifeLangLabels: Record<WorkLifeLang, string> = {
  ja: "日本語",
  easyJa: "やさしい日本語",
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
      body: "日本で初めて暮らす方にとって、住まい探しは大きな不安の一つです。ニッタク産業では、勤務先への通いやすさや、一人暮らし・複数人でのお住まいなど、ご希望に応じたご相談を承っています。",
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
  easyJa: {
    metaTitle: "大阪・西淀川区で働くベトナムのみなさんへ｜生活と部屋のご案内",
    metaDescription: "大阪市西淀川区で働くベトナムのみなさんへ。電車のこと、買い物、休みの日の過ごし方、部屋を借りることを、やさしく紹介します。",
    hero: {
      title: "ベトナムから大阪に来て働くみなさんへ",
      catchphrase: "仕事も、生活も、休みの日も。西淀川区で、安心して新しい生活を始めましょう。",
      body: "大阪市西淀川区には、工場や会社がたくさんあります。仕事に行きやすい場所です。梅田やなんば、心斎橋など、大阪のにぎやかな場所にも行きやすいです。京都や神戸、奈良にも行けます。外国人の人が住む部屋のことも、会社の社宅のことも、相談できます。",
      ctaPrimary: "西淀川区について見る",
      ctaSecondary: "住む部屋について相談する",
    },
    mapSection: {
      heading: "大阪の中心にも、観光地にも行きやすい場所です",
      body: "西淀川区は、大阪市の北西にあります。梅田や、兵庫県の方へ行きやすいです。仕事の日は工場に行きやすく、休みの日は大阪の中心や、京都・神戸・奈良に行けます。",
      footnote: "時間は、姫島駅から電車に乗ったときの目安です。時間や乗る電車によって変わります。",
    },
    centralArea: {
      heading: "大阪の中心に近いです",
      items: [
        { icon: "Train", title: "梅田・大阪駅", time: "7分ぐらい", body: "大きいお店や、レストランがたくさんあります。買い物に便利です。" },
        { icon: "UtensilsCrossed", title: "なんば・道頓堀", time: "20分ぐらい", body: "大阪らしい、にぎやかな場所です。レストランが多いです。" },
        { icon: "ShoppingBag", title: "心斎橋", time: "18分ぐらい", body: "買い物や、洋服のお店が多いです。若い人に人気です。" },
        { icon: "TrainFront", title: "新大阪", time: "26分ぐらい", body: "新幹線に乗れます。遠くへ行くときに便利です。" },
      ],
    },
    dayTrip: {
      heading: "休みの日は、京都・神戸・奈良へ",
      items: [
        { icon: "Landmark", title: "京都", time: "1時間ぐらい", body: "古いお寺や神社がたくさんあります。" },
        { icon: "Ship", title: "神戸", time: "44分ぐらい", body: "海の近くの町です。買い物もできます。" },
        { icon: "TreePine", title: "奈良", time: "1時間10分ぐらい", body: "公園に鹿がいます。古いお寺もあります。" },
        { icon: "Star", title: "USJ", time: "33分ぐらい", body: "休みの日に楽しめる、人気の場所です。" },
      ],
      footnote: "時間は、電車に乗ったときの目安です。",
    },
    dailyLife: {
      heading: "毎日の生活も便利です",
      body: "スーパーやコンビニ、薬のお店が近くにあります。買い物に困りません。病院や銀行、郵便局も近くにあります。自転車でも行きやすいです。",
      items: [
        { icon: "ShoppingCart", label: "スーパー・コンビニ" },
        { icon: "Pill", label: "薬のお店" },
        { icon: "Stethoscope", label: "病院" },
        { icon: "Landmark", label: "銀行・郵便局" },
        { icon: "UtensilsCrossed", label: "レストラン" },
        { icon: "Bike", label: "自転車で移動しやすい" },
      ],
    },
    reassurance: {
      heading: "はじめての日本の生活も、住む部屋を探すお手伝いをします",
      body: "はじめて日本で生活する人は、住む部屋のことが心配だと思います。ニッタク産業は、会社に行きやすい部屋や、一人で住む部屋、みんなで住む部屋のことを相談できます。",
      examples: ["会社や駅に近い部屋を探す", "一人で住む部屋・みんなで住む部屋の相談", "部屋を借りるときの手続きの相談"],
      disclaimer: "※できることは、部屋によって違います。詳しいことは、聞いてください。",
    },
    forCompanies: {
      heading: "外国人スタッフの採用と部屋探しで困っている会社の方へ",
      body: "外国人のスタッフを採用するとき、仕事の場所だけでなく、住む場所のことも大事です。このページは、採用する人に西淀川区のことを伝える資料として使えます。ニッタク産業は、外国人スタッフの部屋や、会社の社宅、会社の名前での契約も相談できます。",
      examples: [
        "採用する人の部屋を探したい",
        "工場の近くに、部屋をいくつか用意したい",
        "会社の名前で部屋を借りたい",
        "社宅として使える部屋を探したい",
        "スタッフが通いやすい場所を知りたい",
        "採用のときに紹介できる部屋の情報がほしい",
      ],
      ctaPrimary: "会社として部屋を相談する",
      ctaSecondary: "部屋について問い合わせる",
    },
    process: {
      heading: "部屋を探す流れ",
      steps: ["問い合わせをする", "会社の場所・人数・希望を伝える", "通いやすい部屋を紹介してもらう", "部屋を見る", "審査・契約をする", "部屋に住み始める"],
    },
    faq: {
      heading: "よくある質問",
      items: [
        {
          question: "外国人でも部屋を借りられますか？",
          answer: "部屋や条件によって違います。仕事の場所や、在留資格、住む人数を教えてください。相談できる部屋を紹介します。",
        },
        {
          question: "ベトナムから日本に来る前でも相談できますか？",
          answer: "まず、採用する会社の担当の人から相談してください。状況に合わせて、できることを案内します。",
        },
        { question: "工場の近くで部屋を探せますか？", answer: "会社の住所や、使う駅を教えてください。通いやすい部屋を紹介します。" },
        { question: "会社の名前で契約できますか？", answer: "会社の名前での契約も相談できます。部屋によって条件が違うので、詳しくは聞いてください。" },
        { question: "家具や家電がある部屋はありますか？", answer: "部屋によって違います。希望を聞いてから、できることを案内します。" },
        { question: "みんなで住む部屋を、まとめて相談できますか？", answer: "はい、相談できます。人数や希望を聞いてから、できることを案内します。" },
      ],
    },
    finalCta: {
      heading: "大阪・西淀川区で、新しい仕事と生活を始めませんか？",
      body: "西淀川区は、工場に行きやすくて、大阪の中心や、関西のいろいろな場所にも行きやすいです。外国人の人の部屋探しも、会社の社宅や契約のことも、気軽に相談してください。",
      ctaHousing: "住む部屋について相談する",
      ctaCompany: "会社として相談する",
      ctaPhone: "電話で問い合わせる",
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
