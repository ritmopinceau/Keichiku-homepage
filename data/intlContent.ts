export type Locale = "en" | "zh" | "vi";

export const locales: Locale[] = ["en", "zh", "vi"];

export interface IntlBusinessCard {
  title: string;
  description: string;
  href: string;
}

export interface IntlFieldRow {
  label: string;
  value: string;
}

export interface IntlContent {
  locale: Locale;
  langLabel: string;
  htmlLang: string;
  ogLocale: string;
  nav: {
    home: string;
    company: string;
    contact: string;
  };
  home: {
    metaTitle: string;
    metaDescription: string;
    englishLabel: string;
    heroTitle: string;
    heroSubtitle: string;
    heroCta: string;
    businessSectionTitle: string;
    businesses: IntlBusinessCard[];
    moreLabel: string;
    noticeBody: string;
  };
  company: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    fields: IntlFieldRow[];
    businessTitle: string;
    businessItems: string[];
  };
  contact: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    intro: string;
    phoneLabel: string;
    faxLabel: string;
    addressLabel: string;
    hoursLabel: string;
    closedLabel: string;
    closedValue: string;
    formNote: string;
    formButtonLabel: string;
  };
}

export const intlContent: Record<Locale, IntlContent> = {
  en: {
    locale: "en",
    langLabel: "English",
    htmlLang: "en",
    ogLocale: "en_US",
    nav: { home: "Home", company: "Company", contact: "Contact" },
    home: {
      metaTitle: "Takko Construction Group",
      metaDescription:
        "Takko Construction Group provides construction and real estate services in Osaka, Japan. Homes, businesses, and property — one-stop support.",
      englishLabel: "English",
      heroTitle: "Build. Renovate. Create the future.",
      heroSubtitle:
        "From homes to shops and facilities, and real estate sales, leasing, and management — we provide one-stop support for all your building and property needs.",
      heroCta: "Contact Us",
      businessSectionTitle: "Our Services",
      businesses: [
        {
          title: "For Homeowners",
          description: "Reforms and new homes tailored to your family's lifestyle.",
          href: "/personal",
        },
        {
          title: "For Businesses",
          description: "New construction, renovation, and remodeling for offices, shops, and facilities.",
          href: "/corporate",
        },
        {
          title: "Real Estate",
          description: "Buying, selling, leasing, and property management services.",
          href: "/realestate",
        },
      ],
      moreLabel: "Learn more",
      noticeBody:
        "This page is available in English for your convenience. Detailed service pages are currently available in Japanese only. Please feel free to contact us — we're happy to assist.",
    },
    company: {
      metaTitle: "Company Profile",
      metaDescription: "Company profile of Takko Construction Group — Osaka, Japan.",
      title: "Company Profile",
      fields: [
        { label: "Company Name", value: "Takko Construction Co., Ltd." },
        { label: "Representative", value: "Shinjiro Manabe" },
        { label: "Established", value: "April 1956 (Showa 31)" },
        { label: "Capital", value: "JPY 20,000,000" },
        { label: "Address", value: "3-1-25 Owada, Nishiyodogawa-ku, Osaka 555-0032, Japan" },
        { label: "Phone", value: "06-6473-1682" },
        { label: "Fax", value: "06-6474-1686" },
        { label: "Business Hours", value: "8:30–17:30 (Mon–Fri, excluding public holidays)" },
      ],
      businessTitle: "Business",
      businessItems: [
        "Construction design & construction (new build, extension, renovation)",
        "Real estate brokerage (sales & leasing)",
        "Real estate purchase",
        "Rental & commercial property management",
      ],
    },
    contact: {
      metaTitle: "Contact Us",
      metaDescription: "Contact Takko Construction Group in Osaka, Japan.",
      title: "Contact Us",
      intro:
        "For inquiries, please call us or use the contact form below. Please note that phone support is primarily available in Japanese.",
      phoneLabel: "Phone",
      faxLabel: "Fax",
      addressLabel: "Address",
      hoursLabel: "Business Hours",
      closedLabel: "Closed",
      closedValue: "Saturdays, Sundays, public holidays, and New Year holidays",
      formNote:
        "Our contact form is currently only available in Japanese. If you're more comfortable in English, please feel free to write your message in English — we will do our best to respond.",
      formButtonLabel: "Go to Contact Form (Japanese page)",
    },
  },
  zh: {
    locale: "zh",
    langLabel: "中文",
    htmlLang: "zh",
    ogLocale: "zh_CN",
    nav: { home: "首页", company: "公司简介", contact: "联系我们" },
    home: {
      metaTitle: "拓工建设集团",
      metaDescription: "拓工建设集团在日本大阪提供建筑与不动产服务。住宅、商业、不动产，一站式支持。",
      englishLabel: "中文",
      heroTitle: "建造、翻新、焕新未来。",
      heroSubtitle: "从住宅到店铺设施，以及不动产的买卖、租赁与管理，我们为您提供建筑与土地相关的一站式服务。",
      heroCta: "联系我们",
      businessSectionTitle: "我们的服务",
      businesses: [
        { title: "个人客户", description: "翻新装修、新建住宅，为您量身定制居住方案。", href: "/personal" },
        { title: "法人客户", description: "办公室、店铺、设施的新建、改建与翻新工程。", href: "/corporate" },
        { title: "不动产", description: "买卖、租赁、物业管理等不动产相关服务。", href: "/realestate" },
      ],
      moreLabel: "了解更多",
      noticeBody:
        "为方便您浏览，本页面提供中文版本。详细的服务介绍页面目前仅提供日文版。如有任何疑问，欢迎随时与我们联系。",
    },
    company: {
      metaTitle: "公司简介",
      metaDescription: "拓工建设集团公司简介 —— 日本大阪。",
      title: "公司简介",
      fields: [
        { label: "公司名称", value: "拓工建设股份有限公司" },
        { label: "代表人", value: "真锅晋次郎" },
        { label: "成立", value: "1956年4月(昭和31年)" },
        { label: "资本金", value: "2,000万日元" },
        { label: "地址", value: "日本大阪府大阪市西淀川区大和田3-1-25　〒555-0032" },
        { label: "电话", value: "06-6473-1682" },
        { label: "传真", value: "06-6474-1686" },
        { label: "营业时间", value: "8:30-17:30(周一至周五，法定节假日除外)" },
      ],
      businessTitle: "业务内容",
      businessItems: [
        "建筑工程设计与施工(新建、增建、翻新、改造)",
        "不动产买卖及租赁中介",
        "不动产收购",
        "出租及商业物业管理运营",
      ],
    },
    contact: {
      metaTitle: "联系我们",
      metaDescription: "联系日本大阪拓工建设集团。",
      title: "联系我们",
      intro: "如有任何咨询，欢迎致电或通过下方表单与我们联系。请注意，电话咨询主要以日语应对。",
      phoneLabel: "电话",
      faxLabel: "传真",
      addressLabel: "地址",
      hoursLabel: "营业时间",
      closedLabel: "休息日",
      closedValue: "周六、周日、法定节假日、年末年初",
      formNote: "目前联系表单仅提供日文版。您也可以直接用中文填写咨询内容，我们会尽力为您处理。",
      formButtonLabel: "前往联系表单(日文页面)",
    },
  },
  vi: {
    locale: "vi",
    langLabel: "Tiếng Việt",
    htmlLang: "vi",
    ogLocale: "vi_VN",
    nav: { home: "Trang chủ", company: "Giới thiệu công ty", contact: "Liên hệ" },
    home: {
      metaTitle: "Takko Construction Group",
      metaDescription:
        "Takko Construction Group cung cấp dịch vụ xây dựng và bất động sản tại Osaka, Nhật Bản. Hỗ trợ trọn gói cho nhà ở, doanh nghiệp và bất động sản.",
      englishLabel: "Tiếng Việt",
      heroTitle: "Xây dựng, sửa chữa, kiến tạo tương lai.",
      heroSubtitle:
        "Từ nhà ở đến cửa hàng, cơ sở kinh doanh, cùng dịch vụ mua bán, cho thuê và quản lý bất động sản — chúng tôi hỗ trợ trọn gói mọi nhu cầu về xây dựng và bất động sản của quý khách.",
      heroCta: "Liên hệ với chúng tôi",
      businessSectionTitle: "Dịch vụ của chúng tôi",
      businesses: [
        {
          title: "Khách hàng cá nhân",
          description: "Cải tạo, xây nhà mới phù hợp với phong cách sống của gia đình bạn.",
          href: "/personal",
        },
        {
          title: "Khách hàng doanh nghiệp",
          description: "Xây dựng mới, cải tạo văn phòng, cửa hàng, cơ sở kinh doanh.",
          href: "/corporate",
        },
        {
          title: "Bất động sản",
          description: "Dịch vụ mua bán, cho thuê và quản lý bất động sản.",
          href: "/realestate",
        },
      ],
      moreLabel: "Xem thêm",
      noticeBody:
        "Trang này được cung cấp bằng tiếng Việt để quý khách tiện theo dõi. Các trang dịch vụ chi tiết hiện chỉ có bằng tiếng Nhật. Nếu có bất kỳ thắc mắc nào, xin vui lòng liên hệ với chúng tôi.",
    },
    company: {
      metaTitle: "Giới thiệu công ty",
      metaDescription: "Giới thiệu công ty Takko Construction Group — Osaka, Nhật Bản.",
      title: "Giới thiệu công ty",
      fields: [
        { label: "Tên công ty", value: "Công ty TNHH Xây dựng Takko" },
        { label: "Người đại diện", value: "Shinjiro Manabe" },
        { label: "Thành lập", value: "Tháng 4 năm 1956 (Showa 31)" },
        { label: "Vốn điều lệ", value: "20.000.000 yên" },
        { label: "Địa chỉ", value: "3-1-25 Owada, Nishiyodogawa-ku, Osaka 555-0032, Nhật Bản" },
        { label: "Điện thoại", value: "06-6473-1682" },
        { label: "Fax", value: "06-6474-1686" },
        { label: "Giờ làm việc", value: "8:30–17:30 (Thứ Hai – Thứ Sáu, trừ ngày lễ)" },
      ],
      businessTitle: "Ngành nghề kinh doanh",
      businessItems: [
        "Thiết kế & thi công xây dựng (xây mới, cải tạo, sửa chữa)",
        "Môi giới mua bán & cho thuê bất động sản",
        "Mua lại bất động sản",
        "Quản lý cho thuê và bất động sản thương mại",
      ],
    },
    contact: {
      metaTitle: "Liên hệ",
      metaDescription: "Liên hệ với Takko Construction Group tại Osaka, Nhật Bản.",
      title: "Liên hệ",
      intro:
        "Quý khách có thể liên hệ qua điện thoại hoặc biểu mẫu bên dưới. Xin lưu ý hỗ trợ qua điện thoại chủ yếu bằng tiếng Nhật.",
      phoneLabel: "Điện thoại",
      faxLabel: "Fax",
      addressLabel: "Địa chỉ",
      hoursLabel: "Giờ làm việc",
      closedLabel: "Ngày nghỉ",
      closedValue: "Thứ Bảy, Chủ Nhật, ngày lễ, và nghỉ Tết Dương lịch",
      formNote:
        "Biểu mẫu liên hệ hiện chỉ có bằng tiếng Nhật. Quý khách có thể điền nội dung bằng tiếng Việt, chúng tôi sẽ cố gắng hỗ trợ tốt nhất.",
      formButtonLabel: "Đến biểu mẫu liên hệ (trang tiếng Nhật)",
    },
  },
};
