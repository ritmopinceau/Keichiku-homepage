import { ServiceDetail, StrengthItem, FlowStep, BusinessCategory } from "./types";
import { heroImages, serviceImages, strengthImages } from "./placeholderImages";

export const businessCategories: {
  key: BusinessCategory;
  englishLabel: string;
  headline: string;
  description: string;
  items: string[];
  buttonLabel: string;
  href: string;
  image: string;
  imageAlt: string;
}[] = [
  {
    key: "personal",
    englishLabel: "For Individual",
    headline: "暮らしに寄り添う住まいづくり",
    description:
      "住宅リフォーム、新築、リノベーションを通して、ご家族の暮らしや将来に合わせた住まいをご提案します。",
    items: ["住宅リフォーム", "新築住宅", "住宅リノベーション"],
    buttonLabel: "個人のお客様向けサービスを見る",
    href: "/personal",
    image: heroImages.personal,
    imageAlt: "家族が暮らす明るいリビングルーム",
  },
  {
    key: "corporate",
    englishLabel: "For Business",
    headline: "事業の未来を支える建築",
    description:
      "店舗、オフィス、施設などの新築・改修・リノベーションに対応し、事業の目的や運営に合わせた空間をつくります。",
    items: ["新築工事", "改修工事", "リノベーション"],
    buttonLabel: "法人のお客様向けサービスを見る",
    href: "/corporate",
    image: heroImages.corporate,
    imageAlt: "スタイリッシュなオフィスの内観",
  },
  {
    key: "realestate",
    englishLabel: "Real Estate",
    headline: "不動産の価値をつなぐ",
    description:
      "不動産の売買、賃貸、買取、管理まで、建築の知識を活かした総合的なご提案を行います。",
    items: ["売買", "賃貸", "買取", "管理"],
    buttonLabel: "不動産サービスを見る",
    href: "/realestate",
    image: heroImages.realestate,
    imageAlt: "街並みと不動産物件",
  },
];

export const companyStrengths: (StrengthItem & { icon: string; image: string })[] = [
  {
    title: "建築と不動産を一社で対応",
    description:
      "物件探し、購入、設計、施工、リフォーム、管理まで、一つの窓口で相談できます。",
    icon: "Layers",
    image: strengthImages.oneStop,
  },
  {
    title: "個人・法人の両方に対応",
    description:
      "一般住宅だけでなく、店舗、オフィス、施設などの建築工事にも対応します。",
    icon: "Users",
    image: strengthImages.bothClients,
  },
  {
    title: "建物の価値を考えた提案",
    description:
      "見た目の美しさだけでなく、使いやすさ、安全性、維持管理、将来の資産価値まで考慮します。",
    icon: "Gem",
    image: strengthImages.valueFocused,
  },
  {
    title: "地域に根ざした迅速な対応",
    description:
      "地域の特性を理解し、お客様とのコミュニケーションを大切にしながら対応します。",
    icon: "MapPin",
    image: strengthImages.localSupport,
  },
];

export const defaultFlowSteps: FlowStep[] = [
  { step: 1, title: "お問い合わせ", description: "電話またはフォームよりお気軽にご連絡ください。" },
  { step: 2, title: "ヒアリング", description: "ご要望やお悩み、ご予算感を丁寧にお伺いします。" },
  { step: 3, title: "現地調査または物件確認", description: "建物や土地、物件の状態を専門スタッフが確認します。" },
  { step: 4, title: "ご提案・お見積もり", description: "調査内容をもとに、プランとお見積もりをご提示します。" },
  { step: 5, title: "ご契約", description: "内容にご納得いただいたうえでご契約となります。" },
  { step: 6, title: "工事または各種手続き", description: "工事の着工、または売買・賃貸契約に関する手続きを進めます。" },
  { step: 7, title: "完成・お引き渡し", description: "工事完了後の確認、または物件のお引き渡しを行います。" },
  { step: 8, title: "アフターフォロー", description: "お引き渡し後も、点検や管理を通じて継続的にサポートします。" },
];

export const services: ServiceDetail[] = [
  // ---------- 個人のお客様 ----------
  {
    slug: "reform",
    category: "personal",
    categoryLabel: "個人のお客様",
    title: "住宅リフォーム",
    englishLabel: "Reform",
    shortSummary:
      "キッチン、浴室、トイレなどの水まわりから、内装、外壁、屋根、間取り変更まで、住まいのお悩みに合わせて対応します。",
    cardDescription:
      "キッチン、浴室、トイレなどの水まわりから、内装、外壁、屋根、間取り変更まで、住まいのお悩みに合わせて対応します。",
    heroImage: serviceImages.personalReform,
    heroImageAlt: "リフォーム後の明るいキッチン",
    overview: [
      "住宅リフォームでは、水まわりの設備更新から内装、外壁・屋根といった建物全体のメンテナンス、間取り変更まで幅広く対応しています。",
      "「一部だけ直したい」という小規模な工事から、「暮らし方に合わせて間取りを見直したい」というご要望まで、現地調査をもとに最適なプランをご提案します。",
    ],
    painPoints: [
      "どこに相談すればよいか分からない",
      "費用がどのくらいかかるか知りたい",
      "水まわりの複数箇所をまとめてリフォームしたい",
      "建物の劣化状況を確認してから判断したい",
      "工事中も生活しながら進められるか不安",
    ],
    workScopeTitle: "対応できる工事内容",
    workScopeItems: [
      "キッチンリフォーム",
      "浴室リフォーム",
      "トイレリフォーム",
      "洗面所リフォーム",
      "内装工事",
      "間取り変更",
      "外壁塗装",
      "屋根工事",
      "玄関、窓、断熱工事",
      "バリアフリー工事",
    ],
    strengths: [
      {
        title: "水まわりから構造まで一括対応",
        description: "設備の交換だけでなく、間取り変更や断熱改善まで一社で対応できます。",
      },
      {
        title: "暮らしながらの工事に配慮",
        description: "生活動線や工程を工夫し、住みながらの工事にも柔軟に対応します。",
      },
      {
        title: "将来の資産価値も考慮した提案",
        description: "見た目だけでなく、耐久性や将来のメンテナンス性まで考えたご提案を行います。",
      },
    ],
    faqIds: ["free-consultation", "small-scale", "during-construction", "area"],
    relatedProjectCategory: "住宅リフォーム",
    metaDescription:
      "〇〇市の住宅リフォームなら拓工建設グループへ。キッチン・浴室・トイレなどの水まわりから内装、外壁・屋根、間取り変更まで幅広く対応します。",
  },
  {
    slug: "newbuild",
    category: "personal",
    categoryLabel: "個人のお客様",
    title: "新築住宅",
    englishLabel: "New Build",
    shortSummary:
      "土地やご予算、ご家族の暮らし方を丁寧に確認し、長く安心して暮らせる住まいをつくります。",
    cardDescription:
      "土地やご予算、ご家族の暮らし方を丁寧に確認し、長く安心して暮らせる住まいをつくります。",
    heroImage: serviceImages.personalNewbuild,
    heroImageAlt: "新築の一戸建て住宅の外観",
    overview: [
      "新築住宅では、土地探しから資金計画、設計、施工、お引き渡し後のメンテナンスまで、長期的な視点でサポートします。",
      "ご家族の暮らし方や将来の変化を見据えながら、日々の暮らしやすさと将来の資産価値の両方を大切にした住まいをご提案します。",
    ],
    painPoints: [
      "どこに相談すればよいか分からない",
      "費用がどのくらいかかるか知りたい",
      "土地探しから相談したい",
      "建築と不動産をまとめて相談したい",
      "将来のメンテナンスまで考えて建てたい",
    ],
    workScopeTitle: "対応できるサービス内容",
    workScopeItems: [
      "注文住宅",
      "土地探しからの相談",
      "資金計画",
      "設計、施工",
      "住宅設備の提案",
      "外構工事",
      "アフターメンテナンス",
    ],
    strengths: [
      {
        title: "土地探しから一貫サポート",
        description: "不動産部門と連携し、土地探しの段階からプランをともに検討できます。",
      },
      {
        title: "資金計画も含めたご提案",
        description: "無理のない資金計画をふまえ、優先順位を整理しながらプランをまとめます。",
      },
      {
        title: "引き渡し後も長く付き合えるサポート",
        description: "定期点検やメンテナンスの相談窓口として、長期的にサポートします。",
      },
    ],
    faqIds: ["free-consultation", "land-search", "area", "combined-request"],
    relatedProjectCategory: "新築住宅",
    metaDescription:
      "〇〇市の新築住宅・注文住宅なら拓工建設グループへ。土地探しから資金計画、設計・施工、アフターメンテナンスまでワンストップで対応します。",
  },
  {
    slug: "renovation",
    category: "personal",
    categoryLabel: "個人のお客様",
    title: "住宅リノベーション",
    englishLabel: "Renovation",
    shortSummary: "中古住宅やマンションを、現在のライフスタイルに合わせて生まれ変わらせます。",
    cardDescription:
      "中古住宅やマンションを、現在のライフスタイルに合わせて生まれ変わらせます。",
    heroImage: serviceImages.personalRenovation,
    heroImageAlt: "リノベーション後のナチュラルなリビング",
    overview: [
      "住宅リノベーションでは、中古戸建てやマンションを現在のライフスタイルに合わせて再生します。",
      "物件探しの段階からご相談いただくことも可能で、購入からリノベーションまでを見据えたトータルなご提案を行います。",
    ],
    painPoints: [
      "どこに相談すればよいか分からない",
      "費用がどのくらいかかるか知りたい",
      "中古物件を購入してからリノベーションしたい",
      "現在の建物を活かせるか相談したい",
      "断熱性能や耐震性能も改善したい",
    ],
    workScopeTitle: "対応できるサービス内容",
    workScopeItems: [
      "中古戸建てリノベーション",
      "マンションリノベーション",
      "スケルトンリノベーション",
      "間取り変更",
      "デザインリノベーション",
      "断熱、耐震性能の改善",
      "物件探しとリノベーションの一括相談",
    ],
    strengths: [
      {
        title: "物件探しからリノベーションまで一括提案",
        description: "中古物件の購入とリノベーションをあわせて検討でき、無駄のない計画が立てられます。",
      },
      {
        title: "建物診断にもとづく安心の提案",
        description: "既存建物の状態を確認したうえで、耐震・断熱性能の改善まで含めてご提案します。",
      },
      {
        title: "暮らし方に合わせた自由な間取り",
        description: "スケルトンからの再生を含め、ライフスタイルに合わせた間取りを実現します。",
      },
    ],
    faqIds: ["free-consultation", "land-search", "vacant-house-inherited", "combined-request"],
    relatedProjectCategory: "住宅リノベーション",
    metaDescription:
      "〇〇市の住宅リノベーションなら拓工建設グループへ。中古戸建て・マンションリノベーション、物件探しからの一括相談まで対応します。",
  },

  // ---------- 法人のお客様 ----------
  {
    slug: "newbuild",
    category: "corporate",
    categoryLabel: "法人のお客様",
    title: "法人向け新築工事",
    englishLabel: "New Construction",
    shortSummary: "店舗、オフィス、施設、事業所など、用途や事業計画に合わせた建物を設計・施工します。",
    cardDescription:
      "店舗、オフィス、施設、事業所など、用途や事業計画に合わせた建物を設計・施工します。",
    heroImage: serviceImages.corporateNewbuild,
    heroImageAlt: "建設中の事業用建物",
    overview: [
      "法人向け新築工事では、店舗、オフィス、倉庫、福祉・医療・教育施設など、事業の目的や運営計画に合わせた建物を設計・施工します。",
      "事業計画や収支計画、将来の拡張性まで考慮しながら、運営しやすく資産価値の高い建物をご提案します。",
    ],
    painPoints: [
      "どこに相談すればよいか分からない",
      "費用や工期がどのくらいかかるか知りたい",
      "事業計画に合わせた建物にしたい",
      "土地探しや不動産取得から相談したい",
      "建築と不動産をまとめて相談したい",
    ],
    workScopeTitle: "対応できる建物用途",
    workScopeItems: [
      "店舗",
      "オフィス",
      "事務所",
      "倉庫",
      "工場",
      "福祉施設",
      "医療施設",
      "教育施設",
      "その他事業用建物",
    ],
    strengths: [
      {
        title: "事業計画にもとづく設計提案",
        description: "収益性や運営動線を踏まえ、事業の目的に合った建物計画をご提案します。",
      },
      {
        title: "土地・物件取得から対応",
        description: "不動産部門と連携し、事業用地や既存物件の取得段階からサポートします。",
      },
      {
        title: "多様な用途の施工実績",
        description: "店舗から医療・教育施設まで、幅広い用途の建築に対応してきた実績があります。",
      },
    ],
    faqIds: ["free-consultation", "land-search", "combined-request", "area"],
    relatedProjectCategory: "法人向け新築",
    metaDescription:
      "〇〇市で法人向け新築工事なら拓工建設グループへ。店舗・オフィス・倉庫・福祉施設など、事業計画に合わせた建物を設計・施工します。",
  },
  {
    slug: "renovation-construction",
    category: "corporate",
    categoryLabel: "法人のお客様",
    title: "改修工事",
    englishLabel: "Renewal Works",
    shortSummary:
      "建物を使用しながらの部分改修から、大規模な修繕工事まで、建物の状態や運営スケジュールに合わせて対応します。",
    cardDescription:
      "建物を使用しながらの部分改修から、大規模な修繕工事まで、建物の状態や運営スケジュールに合わせて対応します。",
    heroImage: serviceImages.corporateRenovationConstruction,
    heroImageAlt: "改修工事中の建物外観",
    overview: [
      "改修工事では、内装や外壁、屋根、防水、設備の更新から、耐震改修、大規模修繕まで、建物の状態に応じた工事を行います。",
      "営業や業務を継続しながらの工事にも対応し、運営スケジュールへの影響を最小限に抑えた計画をご提案します。",
    ],
    painPoints: [
      "どこに相談すればよいか分からない",
      "営業を止めずに工事できるか知りたい",
      "建物の劣化状況を確認してから判断したい",
      "耐震性能やバリアフリー化も検討したい",
      "原状回復工事についても相談したい",
    ],
    workScopeTitle: "対応できる工事内容",
    workScopeItems: [
      "内装改修",
      "外壁改修",
      "屋根改修",
      "防水工事",
      "設備更新",
      "原状回復工事",
      "耐震改修",
      "バリアフリー工事",
      "大規模修繕",
    ],
    strengths: [
      {
        title: "稼働しながらの工事計画",
        description: "営業・業務を継続しながら進められるよう、工程や動線を工夫して計画します。",
      },
      {
        title: "劣化診断にもとづく的確な提案",
        description: "建物の現状を調査したうえで、優先順位を整理した改修計画をご提案します。",
      },
      {
        title: "原状回復まで一括対応",
        description: "退去にともなう原状回復工事など、契約に関わる工事にも対応します。",
      },
    ],
    faqIds: ["free-consultation", "during-construction", "area", "small-scale"],
    relatedProjectCategory: "改修工事",
    metaDescription:
      "〇〇市の法人向け改修工事なら拓工建設グループへ。内装・外壁・屋根の改修から耐震改修、大規模修繕まで幅広く対応します。",
  },
  {
    slug: "renovation",
    category: "corporate",
    categoryLabel: "法人のお客様",
    title: "法人向けリノベーション",
    englishLabel: "Renovation",
    shortSummary: "既存建物の魅力や特性を活かしながら、事業の目的に合った新しい空間へ再生します。",
    cardDescription:
      "既存建物の魅力や特性を活かしながら、事業の目的に合った新しい空間へ再生します。",
    heroImage: serviceImages.corporateRenovation,
    heroImageAlt: "リノベーションされたおしゃれな店舗内観",
    overview: [
      "法人向けリノベーションでは、店舗、オフィス、施設など既存建物の特性を活かしながら、事業の目的やブランドイメージに合わせた空間へ再生します。",
      "空き物件の活用や用途変更を含め、建築と不動産の知識を組み合わせたご提案が可能です。",
    ],
    painPoints: [
      "どこに相談すればよいか分からない",
      "空き物件を事業用に活用できるか知りたい",
      "ブランドイメージに合う空間にしたい",
      "動線や省エネ性能も改善したい",
      "現在の建物を活かせるか相談したい",
    ],
    workScopeTitle: "対応できるサービス内容",
    workScopeItems: [
      "店舗リノベーション",
      "オフィスリノベーション",
      "施設リノベーション",
      "用途変更",
      "空き物件の活用",
      "ブランドイメージに合わせた空間設計",
      "動線改善",
      "省エネ、設備改善",
    ],
    strengths: [
      {
        title: "空き物件の活用提案",
        description: "不動産情報を活かし、遊休物件の事業活用まで含めてご提案します。",
      },
      {
        title: "ブランドイメージに合わせた設計",
        description: "事業のコンセプトや運営方針を踏まえた空間デザインをご提案します。",
      },
      {
        title: "用途変更にも対応",
        description: "既存建物の用途変更にかかる法的な確認から施工まで対応します。",
      },
    ],
    faqIds: ["free-consultation", "combined-request", "during-construction", "area"],
    relatedProjectCategory: "法人向けリノベーション",
    metaDescription:
      "〇〇市の法人向けリノベーションなら拓工建設グループへ。店舗・オフィス・施設のリノベーション、用途変更、空き物件活用まで対応します。",
  },

  // ---------- 不動産 ----------
  {
    slug: "sale",
    category: "realestate",
    categoryLabel: "不動産",
    title: "不動産売買",
    englishLabel: "Sale",
    shortSummary: "住宅、土地、マンション、事業用物件などの購入・売却をサポートします。",
    cardDescription: "住宅、土地、マンション、事業用物件などの購入・売却をサポートします。",
    heroImage: serviceImages.realestateSale,
    heroImageAlt: "売買仲介の打ち合わせイメージ",
    overview: [
      "不動産売買では、戸建て、マンション、土地、事業用物件まで、購入・売却の両面からサポートします。",
      "建築の専門知識を活かし、購入前の建物診断やリフォーム・リノベーションを含めた一括提案も可能です。",
    ],
    painPoints: [
      "どこに相談すればよいか分からない",
      "査定額の根拠を知りたい",
      "購入前に建物の状態を確認したい",
      "建築と不動産をまとめて相談したい",
      "相続した不動産の売却を検討している",
    ],
    workScopeTitle: "対応できるサービス内容",
    workScopeItems: [
      "戸建ての購入、売却",
      "マンションの購入、売却",
      "土地の購入、売却",
      "事業用物件の購入、売却",
      "査定",
      "購入前の建物相談",
      "リフォーム、リノベーションとの一括提案",
    ],
    strengths: [
      {
        title: "建築の視点を活かした査定",
        description: "建物の状態や改修の可能性まで踏まえた、実態に即した査定を行います。",
      },
      {
        title: "購入後の改修まで見据えた提案",
        description: "購入とあわせてリフォーム・リノベーションの計画も一括でご提案できます。",
      },
      {
        title: "相続・空き家の売却にも対応",
        description: "相続にともなう不動産売却など、専門的な手続きが必要なケースにも対応します。",
      },
    ],
    faqIds: ["valuation-only", "vacant-house-inherited", "combined-request", "area"],
    relatedProjectCategory: "sale",
    metaDescription:
      "〇〇市の不動産売買なら拓工建設グループへ。戸建て・マンション・土地・事業用物件の購入や売却、査定まで対応します。",
  },
  {
    slug: "rent",
    category: "realestate",
    categoryLabel: "不動産",
    title: "不動産賃貸",
    englishLabel: "Rent",
    shortSummary: "住居用物件から店舗、事務所などの事業用物件まで、ご希望に合った賃貸物件をご案内します。",
    cardDescription:
      "住居用物件から店舗、事務所などの事業用物件まで、ご希望に合った賃貸物件をご案内します。",
    heroImage: serviceImages.realestateRent,
    heroImageAlt: "賃貸マンションの外観",
    overview: [
      "不動産賃貸では、マンション・アパートなどの住居用物件から、店舗・事務所・倉庫などの事業用物件まで幅広くご案内します。",
      "入居時のご相談だけでなく、退去時の原状回復に関するご相談にも対応しています。",
    ],
    painPoints: [
      "どこに相談すればよいか分からない",
      "希望条件に合う物件が見つからない",
      "事業用物件を探している",
      "退去や原状回復について相談したい",
      "初めての賃貸契約で不安がある",
    ],
    workScopeTitle: "対応できるサービス内容",
    workScopeItems: [
      "マンション、アパート",
      "戸建て賃貸",
      "店舗",
      "事務所",
      "倉庫",
      "事業用物件",
      "入居相談",
      "退去、原状回復相談",
    ],
    strengths: [
      {
        title: "住居から事業用まで幅広く紹介",
        description: "住まい探しと事業用物件探し、どちらのご要望にも対応できます。",
      },
      {
        title: "入居後のトラブルにも対応",
        description: "契約後の設備トラブルや原状回復のご相談にも窓口として対応します。",
      },
      {
        title: "建築知識を踏まえた物件提案",
        description: "建物の構造や設備の状態を踏まえた、安心できる物件のご提案を行います。",
      },
    ],
    faqIds: ["area", "during-construction", "combined-request", "free-consultation"],
    relatedProjectCategory: "rent",
    metaDescription:
      "〇〇市の賃貸物件なら拓工建設グループへ。住居用マンション・アパートから店舗・事務所などの事業用物件まで幅広くご案内します。",
  },
  {
    slug: "purchase",
    category: "realestate",
    categoryLabel: "不動産",
    title: "不動産買取",
    englishLabel: "Purchase",
    shortSummary:
      "早期売却をご希望の方や、仲介での売却が難しい物件について、自社または提携先による買取をご提案します。",
    cardDescription:
      "早期売却をご希望の方や、仲介での売却が難しい物件について、自社または提携先による買取をご提案します。",
    heroImage: serviceImages.realestatePurchase,
    heroImageAlt: "買取対象となる戸建て住宅",
    overview: [
      "不動産買取では、早期の現金化をご希望の方や、老朽化・残置物などの事情で仲介での売却が難しい物件について、自社または提携先による買取をご提案します。",
      "相続不動産や空き家など、判断に迷うケースについてもあわせてご相談いただけます。",
    ],
    painPoints: [
      "できるだけ早く現金化したい",
      "老朽化した建物でも買い取ってもらえるか知りたい",
      "残置物があるが片付けてから売却するべきか分からない",
      "相続した不動産をどうすればよいか分からない",
      "近所に知られずに売却したい",
    ],
    workScopeTitle: "対応できるサービス内容",
    workScopeItems: [
      "戸建て買取",
      "マンション買取",
      "土地買取",
      "空き家買取",
      "相続不動産",
      "老朽化した建物",
      "残置物がある物件",
      "早期現金化の相談",
    ],
    strengths: [
      {
        title: "老朽化物件・残置物ありでも相談可能",
        description: "現況のままでの買取が可能かどうか、建築の視点も交えて判断します。",
      },
      {
        title: "スピーディーな現金化",
        description: "仲介による売却活動を行わないため、短期間での現金化が可能です。",
      },
      {
        title: "周囲に知られにくい売却方法",
        description: "広告掲載を行わずに進められるため、周囲に知られたくない場合にも対応します。",
      },
    ],
    faqIds: ["vacant-house-inherited", "valuation-only", "free-consultation", "area"],
    relatedProjectCategory: "sale",
    metaDescription:
      "〇〇市の不動産買取なら拓工建設グループへ。老朽化した建物、空き家、相続不動産など、早期現金化のご相談に対応します。",
  },
  {
    slug: "management",
    category: "realestate",
    categoryLabel: "不動産",
    title: "不動産管理",
    englishLabel: "Management",
    shortSummary: "オーナー様に代わり、賃貸物件や事業用物件の管理・運営をサポートします。",
    cardDescription: "オーナー様に代わり、賃貸物件や事業用物件の管理・運営をサポートします。",
    heroImage: serviceImages.realestateManagement,
    heroImageAlt: "管理されている賃貸マンション",
    overview: [
      "不動産管理では、入居者募集から契約手続き、家賃管理、修繕・メンテナンスまで、オーナー様に代わって物件の管理・運営を行います。",
      "空室対策や建物の維持管理まで含め、資産価値を維持するための総合的なサポートを提供します。",
    ],
    painPoints: [
      "管理業務の手間を減らしたい",
      "空室が続いていて対策を知りたい",
      "入居者対応や修繕をまとめて任せたい",
      "建物の維持管理まで相談したい",
      "管理会社を切り替えたい",
    ],
    workScopeTitle: "対応できるサービス内容",
    workScopeItems: [
      "入居者募集",
      "契約、更新手続き",
      "家賃管理",
      "入居者対応",
      "退去立ち会い",
      "原状回復工事",
      "修繕、メンテナンス",
      "空室対策",
      "建物管理",
    ],
    strengths: [
      {
        title: "建築部門と連携した修繕対応",
        description: "修繕やメンテナンスが必要な際も、自社の建築部門と連携してスムーズに対応します。",
      },
      {
        title: "空室対策のご提案",
        description: "リフォームやリノベーションを含めた空室対策をあわせてご提案します。",
      },
      {
        title: "管理会社の切り替えにも対応",
        description: "他社からの管理切り替えについても、手続きを含めてサポートします。",
      },
    ],
    faqIds: ["free-consultation", "area", "during-construction", "combined-request"],
    relatedProjectCategory: "rent",
    metaDescription:
      "〇〇市の不動産管理なら拓工建設グループへ。入居者募集から家賃管理、修繕・メンテナンス、空室対策までオーナー様をサポートします。",
  },
];

export function getServicesByCategory(category: BusinessCategory): ServiceDetail[] {
  return services.filter((s) => s.category === category);
}

export function getService(category: BusinessCategory, slug: string): ServiceDetail | undefined {
  return services.find((s) => s.category === category && s.slug === slug);
}
