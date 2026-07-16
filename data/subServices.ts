import type { BusinessCategory, SubService } from "./types";
import { projectImages, subServiceImages } from "./placeholderImages";

/**
 * 個人のお客様 > 住宅リフォーム の下にぶら下がる、工事内容別ページのデータ。
 * URL: /personal/reform/[slug]
 *
 * ページを追加したいときは、この配列に1件追加するだけで
 * 一覧・詳細ページ・サイトマップ・内部リンクがすべて自動的に反映されます。
 * 同じ考え方で新築・リノベーション・法人・不動産の各カテゴリにも
 * 専用の配列を追加していく想定です(将来の拡張ポイント)。
 */
export const subServices: SubService[] = [
  {
    parentCategory: "personal",
    parentSlug: "reform",
    slug: "kitchen",
    title: "キッチンリフォーム",
    englishLabel: "Kitchen",
    icon: "ChefHat",
    shortSummary: "対面式への変更やシステムキッチンの交換まで、暮らし方に合わせてご提案します。",
    heroImage: projectImages[0],
    heroImageAlt: "リフォーム後の対面キッチン",
    overview: [
      "キッチンリフォームでは、老朽化した設備の交換から、独立型から対面式への間取り変更まで幅広く対応しています。",
      "毎日使う場所だからこそ、動線や収納量、ご家族とのコミュニケーションのしやすさまで含めてプランをご提案します。",
    ],
    painPoints: [
      "コンロやシンクなど設備だけを新しくしたい",
      "独立型キッチンを対面式に変更したい",
      "収納が足りず使い勝手が悪い",
      "水漏れや換気の不具合が気になる",
    ],
    workScopeItems: [
      "システムキッチンの交換",
      "対面式への間取り変更",
      "収納・パントリーの増設",
      "換気扇・レンジフードの交換",
      "給排水管の更新",
      "床・壁の内装工事",
    ],
    priceRanges: [
      { label: "部分交換(コンロ・レンジフードなど)", price: "20万円〜60万円" },
      { label: "システムキッチンの交換", price: "80万円〜200万円" },
      { label: "対面式への変更(壁の撤去を含む)", price: "150万円〜350万円" },
    ],
    faqItems: [
      {
        id: "kitchen-duration",
        question: "キッチンリフォームの工期はどれくらいですか？",
        answer: "設備交換のみであれば3日〜1週間程度、対面式への間取り変更を伴う場合は2〜3週間程度が目安です。",
      },
      {
        id: "kitchen-cooking-during-work",
        question: "工事中、料理はできますか？",
        answer: "工事内容によっては簡易的な調理スペースをご用意することも可能です。事前にご相談ください。",
      },
    ],
    relatedProjectCategory: "住宅リフォーム",
    metaDescription:
      "〇〇市のキッチンリフォームなら〇〇建設・不動産へ。対面式への変更、システムキッチンの交換、収納増設まで費用の目安とあわせてご案内します。現地調査・お見積り無料。",
  },
  {
    parentCategory: "personal",
    parentSlug: "reform",
    slug: "bath",
    title: "浴室リフォーム",
    englishLabel: "Bath",
    icon: "Bath",
    shortSummary: "寒さや老朽化が気になる浴室を、断熱性・掃除のしやすさに優れたユニットバスへ。",
    heroImage: projectImages[1],
    heroImageAlt: "リフォーム後の浴室",
    overview: [
      "浴室リフォームでは、在来工法の浴室からユニットバスへの交換を中心に、断熱性や安全性を高めるご提案を行っています。",
      "ヒートショック対策としての断熱・暖房設備の追加や、手すりの設置などバリアフリー化にもあわせて対応できます。",
    ],
    painPoints: [
      "冬場の浴室が寒く、ヒートショックが心配",
      "カビや老朽化が気になる",
      "浴槽が古く、またぎにくい",
      "断熱性の高いユニットバスにしたい",
    ],
    workScopeItems: [
      "在来浴室からユニットバスへの交換",
      "断熱材・浴室暖房乾燥機の設置",
      "手すり・滑りにくい床材の設置",
      "給湯設備の交換",
      "窓・換気設備の更新",
    ],
    priceRanges: [
      { label: "ユニットバスへの交換(同サイズ)", price: "80万円〜150万円" },
      { label: "断熱・浴室暖房乾燥機の追加", price: "10万円〜30万円" },
      { label: "サイズ変更を伴う交換", price: "150万円〜250万円" },
    ],
    faqItems: [
      {
        id: "bath-heatshock",
        question: "ヒートショック対策はできますか？",
        answer: "断熱性の高いユニットバスへの交換や浴室暖房乾燥機の設置により、冬場の温度差を軽減できます。",
      },
      {
        id: "bath-duration",
        question: "工事中お風呂に入れない期間はどれくらいですか？",
        answer: "一般的なユニットバス交換で3〜5日程度です。近隣の入浴施設のご案内も可能です。",
      },
    ],
    relatedProjectCategory: "住宅リフォーム",
    metaDescription:
      "〇〇市の浴室リフォームなら〇〇建設・不動産へ。ユニットバスへの交換、断熱・ヒートショック対策、バリアフリー化まで費用目安とあわせてご案内します。",
  },
  {
    parentCategory: "personal",
    parentSlug: "reform",
    slug: "toilet",
    title: "トイレリフォーム",
    englishLabel: "Toilet",
    icon: "Droplets",
    shortSummary: "節水性能の高い最新トイレへの交換から、内装・手すりの設置まで対応します。",
    heroImage: projectImages[2],
    heroImageAlt: "リフォーム後のトイレ空間",
    overview: [
      "トイレリフォームでは、便器の交換だけでなく、内装のクロス張り替えや収納の追加まであわせて対応しています。",
      "節水性能の高い最新機種への交換により、日々の水道代の負担軽減にもつながります。",
    ],
    painPoints: [
      "古いトイレで節水性能が低い",
      "内装の汚れ・old感が気になる",
      "手すりを設置してバリアフリーにしたい",
      "収納や手洗いスペースを増やしたい",
    ],
    workScopeItems: [
      "便器・タンクの交換",
      "内装(壁紙・床材)の張り替え",
      "手洗いカウンターの設置",
      "手すりの設置",
      "収納棚の増設",
    ],
    priceRanges: [
      { label: "便器交換のみ", price: "15万円〜30万円" },
      { label: "便器交換+内装リフォーム", price: "25万円〜50万円" },
      { label: "手洗いカウンター・収納の増設を含む", price: "40万円〜70万円" },
    ],
    faqItems: [
      {
        id: "toilet-duration",
        question: "トイレリフォームの工期はどれくらいですか？",
        answer: "便器交換のみであれば半日〜1日、内装を含む場合は1〜2日程度が目安です。",
      },
      {
        id: "toilet-water-saving",
        question: "節水効果はどれくらいありますか？",
        answer: "機種にもよりますが、20年ほど前の便器と比べて使用水量を半分以下に抑えられる場合があります。",
      },
    ],
    relatedProjectCategory: "住宅リフォーム",
    metaDescription:
      "〇〇市のトイレリフォームなら〇〇建設・不動産へ。便器交換から内装、バリアフリー化まで費用の目安とあわせてご案内します。現地調査・お見積り無料。",
  },
  {
    parentCategory: "personal",
    parentSlug: "reform",
    slug: "washroom",
    title: "洗面所リフォーム",
    englishLabel: "Washroom",
    icon: "Sparkles",
    shortSummary: "洗面化粧台の交換から、脱衣スペースの収納・断熱まであわせて対応します。",
    heroImage: subServiceImages.washroom,
    heroImageAlt: "リフォーム後の洗面所",
    overview: [
      "洗面所リフォームでは、洗面化粧台の交換を中心に、収納力の向上や脱衣スペースの使いやすさまで含めてご提案します。",
      "洗濯機置き場や収納棚のレイアウトを見直すことで、家事動線が大きく改善するケースも多くあります。",
    ],
    painPoints: [
      "洗面化粧台が古く、収納も足りない",
      "脱衣スペースが狭く使いづらい",
      "洗濯機置き場のレイアウトを見直したい",
      "冬場の脱衣所が寒い",
    ],
    workScopeItems: [
      "洗面化粧台の交換",
      "収納棚・タオル掛けの増設",
      "洗濯機パンの交換・移設",
      "床・壁の断熱リフォーム",
      "換気設備の更新",
    ],
    priceRanges: [
      { label: "洗面化粧台の交換", price: "15万円〜40万円" },
      { label: "収納増設・レイアウト変更を含む", price: "30万円〜60万円" },
      { label: "断熱・内装を含む全面リフォーム", price: "50万円〜100万円" },
    ],
    faqItems: [
      {
        id: "washroom-storage",
        question: "収納を増やすことはできますか？",
        answer: "洗面化粧台の交換にあわせて、壁面収納やタオル掛けの増設など、収納力を高めるご提案が可能です。",
      },
      {
        id: "washroom-cold",
        question: "脱衣所の寒さ対策はできますか？",
        answer: "床・壁への断熱材の追加や、開口部の断熱リフォームにより寒さを軽減できます。",
      },
    ],
    relatedProjectCategory: "住宅リフォーム",
    metaDescription: "〇〇市の洗面所リフォームなら〇〇建設・不動産へ。洗面化粧台の交換から収納増設、断熱リフォームまでご案内します。",
  },
  {
    parentCategory: "personal",
    parentSlug: "reform",
    slug: "wall-painting",
    title: "外壁塗装",
    englishLabel: "Exterior Painting",
    icon: "PaintRoller",
    shortSummary: "建物を雨風から守り、美観を保つための外壁塗装。劣化診断から対応します。",
    heroImage: subServiceImages.wallPainting,
    heroImageAlt: "外壁塗装後の住宅外観",
    overview: [
      "外壁塗装は美観だけでなく、雨水の侵入を防ぎ建物の寿命を延ばすための大切なメンテナンスです。",
      "現地調査でひび割れや劣化状況を確認したうえで、塗料の種類や工程を含めた最適なプランをご提案します。",
    ],
    painPoints: [
      "外壁にひび割れやチョーキング(白い粉)が出ている",
      "前回の塗装から10年以上経っている",
      "どの塗料を選べばよいか分からない",
      "近隣への配慮をしながら工事してほしい",
    ],
    workScopeItems: [
      "外壁の洗浄・下地補修",
      "ひび割れ補修(コーキング打ち替え)",
      "下塗り・中塗り・上塗り",
      "付帯部(軒天・雨樋など)の塗装",
      "足場の設置・養生",
    ],
    priceRanges: [
      { label: "シリコン塗料での塗装(30坪程度)", price: "70万円〜120万円" },
      { label: "フッ素・高耐久塗料での塗装", price: "100万円〜180万円" },
      { label: "ひび割れ補修・下地処理を含む", price: "+10万円〜30万円" },
    ],
    faqItems: [
      {
        id: "wall-painting-timing",
        question: "外壁塗装はどのくらいの周期で必要ですか？",
        answer: "使用する塗料にもよりますが、一般的には10〜15年を目安に塗り替えをご検討いただくケースが多いです。",
      },
      {
        id: "wall-painting-during-rain",
        question: "雨の日でも工事は進みますか？",
        answer: "塗装工事は天候の影響を受けやすいため、雨天時は作業を中止し、工程を調整して対応します。",
      },
    ],
    relatedProjectCategory: "住宅リフォーム",
    metaDescription: "〇〇市の外壁塗装なら〇〇建設・不動産へ。劣化診断から塗料選び、費用目安まで分かりやすくご案内します。現地調査・お見積り無料。",
  },
  {
    parentCategory: "personal",
    parentSlug: "reform",
    slug: "roof",
    title: "屋根工事",
    englishLabel: "Roof",
    icon: "Home",
    shortSummary: "雨漏りや老朽化が気になる屋根の葺き替え・カバー工法・部分補修に対応します。",
    heroImage: subServiceImages.roof,
    heroImageAlt: "屋根工事後の住宅外観",
    overview: [
      "屋根は建物の中でも特に劣化が進みやすい部分です。雨漏りや瓦のズレなど、気づきにくい劣化も現地調査で確認します。",
      "葺き替え・カバー工法・部分補修など、建物の状態と予算に合わせた工法をご提案します。",
    ],
    painPoints: [
      "雨漏りが発生している、または心配",
      "瓦やスレートのズレ・破損がある",
      "屋根の点検を一度もしたことがない",
      "台風・地震に強い屋根にしたい",
    ],
    workScopeItems: [
      "屋根の点検・劣化診断",
      "葺き替え工事",
      "カバー工法(重ね葺き)",
      "部分補修・棟板金の交換",
      "雨樋の交換",
    ],
    priceRanges: [
      { label: "部分補修(棟板金交換など)", price: "10万円〜30万円" },
      { label: "カバー工法(重ね葺き)", price: "80万円〜150万円" },
      { label: "葺き替え工事", price: "120万円〜250万円" },
    ],
    faqItems: [
      {
        id: "roof-inspection",
        question: "屋根の点検だけでもお願いできますか？",
        answer: "はい、点検のみのご依頼も承っております。無料の現地調査で劣化状況を確認し、必要な場合のみご提案します。",
      },
      {
        id: "roof-earthquake",
        question: "地震に強い屋根にすることはできますか？",
        answer: "軽量な屋根材へのカバー工法により、建物への負荷を軽減し耐震性を高めることができます。",
      },
    ],
    relatedProjectCategory: "住宅リフォーム",
    metaDescription: "〇〇市の屋根工事なら〇〇建設・不動産へ。雨漏り補修、葺き替え、カバー工法まで費用の目安とあわせてご案内します。",
  },
  {
    parentCategory: "personal",
    parentSlug: "reform",
    slug: "insulation",
    title: "断熱リフォーム",
    englishLabel: "Insulation",
    icon: "Thermometer",
    shortSummary: "壁・床・天井の断熱改修で、夏は涼しく冬は暖かい住まいへ。光熱費の削減にも。",
    heroImage: subServiceImages.insulation,
    heroImageAlt: "断熱リフォーム後の暖かいリビング",
    overview: [
      "断熱リフォームでは、壁・床・天井への断熱材の追加や、窓の断熱改修により、室内の温度差を軽減します。",
      "冷暖房効率が上がることで光熱費の削減にもつながり、結露やヒートショックの予防にも効果的です。",
    ],
    painPoints: [
      "夏は暑く冬は寒い家をなんとかしたい",
      "冷暖房費の負担を減らしたい",
      "結露やカビが発生しやすい",
      "ヒートショック対策をしたい",
    ],
    workScopeItems: [
      "壁・天井への断熱材の充填",
      "床下断熱の施工",
      "窓の断熱改修(内窓・複層ガラス)",
      "気密性を高める施工",
      "断熱材の劣化調査",
    ],
    priceRanges: [
      { label: "床下断熱の施工", price: "30万円〜60万円" },
      { label: "壁・天井の断熱改修(部分)", price: "50万円〜120万円" },
      { label: "住宅全体の断熱リフォーム", price: "150万円〜300万円" },
    ],
    faqItems: [
      {
        id: "insulation-subsidy",
        question: "断熱リフォームは補助金の対象になりますか？",
        answer: "工事内容によっては、国や自治体の断熱改修に関する補助金制度を利用できる場合があります。詳しくはお問い合わせください。",
      },
      {
        id: "insulation-effect",
        question: "本当に効果を実感できますか？",
        answer: "特に窓や床下の断熱改修は体感しやすく、冷暖房の効きが良くなったとご実感いただくお客様が多いです。",
      },
    ],
    relatedProjectCategory: "住宅リフォーム",
    metaDescription: "〇〇市の断熱リフォームなら〇〇建設・不動産へ。壁・床・窓の断熱改修で夏涼しく冬暖かい住まいに。補助金相談も承ります。",
  },
  {
    parentCategory: "personal",
    parentSlug: "reform",
    slug: "windows",
    title: "窓リフォーム",
    englishLabel: "Windows",
    icon: "Thermometer",
    shortSummary: "内窓の設置や複層ガラスへの交換で、断熱性・防音性・防犯性を高めます。",
    heroImage: subServiceImages.windows,
    heroImageAlt: "窓リフォーム後の明るい室内",
    overview: [
      "窓は住まいの中でも熱の出入りが大きい部分です。内窓の設置や複層ガラスへの交換で断熱性を大きく改善できます。",
      "断熱性能の向上だけでなく、防音性・防犯性の向上にもつながる工事です。",
    ],
    painPoints: [
      "窓際が冬に冷える、結露がひどい",
      "外の音が気になる",
      "防犯性を高めたい",
      "既存の窓枠を活かして工事したい",
    ],
    workScopeItems: [
      "内窓(二重窓)の設置",
      "複層ガラスへの交換",
      "サッシごとの交換",
      "防犯ガラスへの交換",
      "雨戸・シャッターの設置",
    ],
    priceRanges: [
      { label: "内窓の設置(1箇所)", price: "8万円〜15万円" },
      { label: "複層ガラスへの交換", price: "10万円〜20万円" },
      { label: "サッシごとの交換", price: "15万円〜30万円" },
    ],
    faqItems: [
      {
        id: "windows-subsidy",
        question: "窓の断熱リフォームは補助金の対象になりますか？",
        answer: "国の断熱窓に関する補助金制度の対象になる場合があります。対象となるかどうかも含めてご案内いたします。",
      },
      {
        id: "windows-duration",
        question: "工事は1日で終わりますか？",
        answer: "内窓の設置であれば1箇所あたり数時間程度で完了することが多く、住みながらの工事にも対応しやすい工事です。",
      },
    ],
    relatedProjectCategory: "住宅リフォーム",
    metaDescription: "〇〇市の窓リフォームなら〇〇建設・不動産へ。内窓設置・複層ガラス交換で断熱性・防音性・防犯性を向上。補助金相談も承ります。",
  },
  {
    parentCategory: "personal",
    parentSlug: "reform",
    slug: "barrier-free",
    title: "バリアフリーリフォーム",
    englishLabel: "Barrier-Free",
    icon: "Accessibility",
    shortSummary: "手すりの設置や段差解消など、将来を見据えた安心・安全な住まいづくりをサポートします。",
    heroImage: subServiceImages.barrierFree,
    heroImageAlt: "バリアフリーリフォーム後の明るい室内",
    overview: [
      "バリアフリーリフォームでは、手すりの設置や段差の解消、廊下・浴室の拡幅など、将来の暮らしを見据えたご提案を行います。",
      "介護保険を利用した住宅改修にも対応しており、ケアマネージャーの方との連携も可能です。",
    ],
    painPoints: [
      "段差でつまずきやすい箇所がある",
      "浴室・トイレに手すりを付けたい",
      "車椅子でも移動しやすい動線にしたい",
      "介護保険の住宅改修が利用できるか知りたい",
    ],
    workScopeItems: [
      "手すりの設置(廊下・浴室・トイレ)",
      "段差の解消・スロープの設置",
      "開き戸から引き戸への変更",
      "浴室・トイレの拡幅",
      "滑りにくい床材への変更",
    ],
    priceRanges: [
      { label: "手すりの設置(1箇所)", price: "2万円〜5万円" },
      { label: "段差解消・床材変更", price: "10万円〜30万円" },
      { label: "引き戸への変更・拡幅工事", price: "20万円〜60万円" },
    ],
    faqItems: [
      {
        id: "barrier-free-insurance",
        question: "介護保険を使ったリフォームはできますか？",
        answer: "要支援・要介護認定を受けている方は、介護保険の住宅改修費支給制度を利用できる場合があります。申請のサポートも行います。",
      },
      {
        id: "barrier-free-partial",
        question: "手すりの設置だけでもお願いできますか？",
        answer: "はい、手すりの設置のみなど小規模な工事からご相談いただけます。",
      },
    ],
    relatedProjectCategory: "住宅リフォーム",
    metaDescription: "〇〇市のバリアフリーリフォームなら〇〇建設・不動産へ。手すり設置、段差解消、介護保険を利用した住宅改修までご案内します。",
  },
  {
    parentCategory: "personal",
    parentSlug: "reform",
    slug: "full-reform",
    title: "全面リフォーム",
    englishLabel: "Full Reform",
    icon: "Building2",
    shortSummary: "水まわりから内装、間取り変更まで、住まい全体を一度に刷新します。",
    heroImage: subServiceImages.fullReform,
    heroImageAlt: "全面リフォーム工事の様子",
    overview: [
      "全面リフォームでは、水まわり設備の一新から間取り変更、断熱・耐震性能の向上まで、住まい全体をまとめて改修します。",
      "工事範囲が広いからこそ、工程管理と予算配分が重要です。優先順位を整理しながら、無理のない資金計画をご提案します。",
    ],
    painPoints: [
      "複数箇所が古く、まとめてリフォームしたい",
      "間取りから見直して暮らしやすくしたい",
      "耐震性能も含めて安心できる住まいにしたい",
      "何から手をつければよいか分からない",
    ],
    workScopeItems: [
      "水まわり設備(キッチン・浴室・トイレ・洗面)の一新",
      "間取り変更・内装工事",
      "耐震補強",
      "断熱改修",
      "外壁・屋根のメンテナンス",
      "電気・給排水設備の更新",
    ],
    priceRanges: [
      { label: "水まわり中心の全面リフォーム", price: "300万円〜600万円" },
      { label: "間取り変更を含む全面リフォーム", price: "600万円〜1,200万円" },
      { label: "耐震・断熱まで含むフルリフォーム", price: "1,000万円〜1,800万円" },
    ],
    faqItems: [
      {
        id: "full-reform-priority",
        question: "予算が限られていますが、優先順位をつけて相談できますか？",
        answer: "はい、ご予算に応じて優先度の高い工事から進める段階的なプランもご提案可能です。",
      },
      {
        id: "full-reform-living",
        question: "工事期間中の仮住まいは必要ですか？",
        answer: "工事範囲によって異なります。水まわりを含む大規模な工事では仮住まいをご検討いただく場合があり、事前にご案内します。",
      },
    ],
    relatedProjectCategory: "住宅リフォーム",
    metaDescription: "〇〇市の全面リフォームなら〇〇建設・不動産へ。水まわりから間取り変更、耐震・断熱まで住まい全体をまとめて改修します。",
  },
  {
    parentCategory: "personal",
    parentSlug: "reform",
    slug: "used-home-reform",
    title: "中古住宅リフォーム",
    englishLabel: "Used Home Reform",
    icon: "Key",
    shortSummary: "中古住宅の購入にあわせて、インスペクションからリフォームまで一括でサポートします。",
    heroImage: subServiceImages.usedHomeReform,
    heroImageAlt: "中古住宅リフォーム後の外観",
    overview: [
      "中古住宅の購入時には、建物状況調査(インスペクション)による劣化確認と、購入後のリフォーム費用を含めた資金計画が重要です。",
      "不動産部門と連携し、物件探しの段階からリフォーム費用の見込みまで含めてご相談いただけます。",
    ],
    painPoints: [
      "中古住宅を購入したいが、リフォーム費用が読めない",
      "建物の劣化状況を購入前に確認したい",
      "住宅ローンとリフォームローンをまとめたい",
      "購入とリフォームを別々の会社に頼むのが不安",
    ],
    workScopeItems: [
      "建物状況調査(インスペクション)",
      "購入前のリフォーム費用概算",
      "水まわり・内装の全面リフォーム",
      "耐震・断熱性能の診断と改修",
      "住宅ローン・リフォームローンの一括相談",
    ],
    priceRanges: [
      { label: "建物状況調査(インスペクション)", price: "5万円〜10万円" },
      { label: "水まわり中心のリフォーム", price: "300万円〜600万円" },
      { label: "耐震・断熱を含む全面リフォーム", price: "800万円〜1,500万円" },
    ],
    faqItems: [
      {
        id: "used-home-inspection-timing",
        question: "インスペクションは購入前・購入後どちらがよいですか？",
        answer: "購入前に実施いただくことで、リフォーム費用を踏まえた資金計画が立てやすくなるため、購入前のご依頼をお勧めしています。",
      },
      {
        id: "used-home-loan",
        question: "住宅ローンとリフォームローンをまとめられますか？",
        answer: "リフォーム一体型住宅ローンなど、提携金融機関のご案内が可能です。詳しくはご相談ください。",
      },
    ],
    relatedProjectCategory: "住宅リフォーム",
    metaDescription: "〇〇市の中古住宅リフォームなら〇〇建設・不動産へ。インスペクションから資金計画、リフォームまで一括でサポートします。",
  },
  {
    parentCategory: "personal",
    parentSlug: "reform",
    slug: "mansion-reform",
    title: "マンションリフォーム",
    englishLabel: "Mansion Reform",
    icon: "Building2",
    shortSummary: "スケルトンリフォームから水まわり交換まで、管理規約に配慮しながら対応します。",
    heroImage: subServiceImages.mansionReform,
    heroImageAlt: "リフォーム後のマンションリビング",
    overview: [
      "マンションリフォームでは、管理規約や工事可能な時間帯、共用部の養生など、戸建てとは異なる制約を踏まえた進行が必要です。",
      "スケルトン状態からの間取り変更や、水まわり設備の交換まで、管理組合への届け出も含めてサポートします。",
    ],
    painPoints: [
      "中古マンションを購入し、間取りから見直したい",
      "管理規約で何ができるか分からない",
      "配管の位置を変更できるか知りたい",
      "工事の音や近隣への配慮が心配",
    ],
    workScopeItems: [
      "管理規約の確認・管理組合への届け出サポート",
      "スケルトンリフォーム(間取り変更)",
      "水まわり設備の交換",
      "床・壁・天井の内装工事",
      "収納・造作家具の設置",
    ],
    priceRanges: [
      { label: "水まわり中心のリフォーム", price: "250万円〜500万円" },
      { label: "スケルトンリフォーム(間取り変更)", price: "600万円〜1,200万円" },
      { label: "内装・造作家具を含むフルリフォーム", price: "800万円〜1,500万円" },
    ],
    faqItems: [
      {
        id: "mansion-rules",
        question: "管理規約で工事に制限はありますか？",
        answer: "床材の遮音等級や工事可能な時間帯など、マンションごとに規約が異なります。事前に確認のうえプランをご提案します。",
      },
      {
        id: "mansion-pipe",
        question: "配管の位置は自由に変更できますか？",
        answer: "コンクリートスラブの構造によって制約がある場合があります。現地調査で可否を確認いたします。",
      },
    ],
    relatedProjectCategory: "住宅リノベーション",
    metaDescription: "〇〇市のマンションリフォームなら〇〇建設・不動産へ。スケルトンリフォームから水まわり交換まで、管理規約に配慮して対応します。",
  },
];

export function getSubServicesByParent(parentCategory: BusinessCategory, parentSlug: string): SubService[] {
  return subServices.filter((s) => s.parentCategory === parentCategory && s.parentSlug === parentSlug);
}

export function getSubService(parentCategory: BusinessCategory, parentSlug: string, slug: string): SubService | undefined {
  return subServices.find(
    (s) => s.parentCategory === parentCategory && s.parentSlug === parentSlug && s.slug === slug
  );
}
