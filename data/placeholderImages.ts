/**
 * 仮画像（Unsplash）の一覧。
 * 正式な写真素材が用意でき次第、このファイルのURLだけを差し替えれば
 * サイト全体の画像を一括で更新できます（public/images 配下に実画像を配置して
 * パスに置き換える運用でも構いません）。
 */
function unsplash(id: string, w = 1600, q = 80) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export const heroImages = {
  top: unsplash("photo-1600585154340-be6161a56a0c", 1920),
  personal: unsplash("photo-1600607687920-4e2a09cf159d"),
  corporate: unsplash("photo-1497366216548-37526070297c"),
  realestate: unsplash("photo-1524758631624-e2822e304c36"),
};

export const serviceImages = {
  personalReform: unsplash("photo-1584622650111-993a426fbf0a"),
  personalNewbuild: unsplash("photo-1512917774080-9991f1c4c750"),
  personalRenovation: unsplash("photo-1600566753086-00f18fb6b3ea"),
  corporateNewbuild: unsplash("photo-1493809842364-78817add7ffb"),
  corporateRenovationConstruction: unsplash("photo-1541976590-713941681591"),
  corporateRenovation: unsplash("photo-1497366811353-6870744d04b2"),
  realestateSale: unsplash("photo-1503387762-592deb58ef4e"),
  realestateRent: unsplash("photo-1522708323590-d24dbb6b0267"),
  realestatePurchase: unsplash("photo-1560448204-e02f11c3d0e2"),
  realestateManagement: unsplash("photo-1568605114967-8130f3a36994"),
};

export const strengthImages = {
  oneStop: unsplash("photo-1600585152915-d208bec867a1", 800),
  bothClients: unsplash("photo-1556909114-f6e7ad7d3136", 800),
  valueFocused: unsplash("photo-1486406146926-c627a92ad1ab", 800),
  localSupport: unsplash("photo-1449844908441-8829872d2607", 800),
};

// サービス詳細ページ「当社の強み」欄で、強み1〜3個目に順番に割り当てる写真
export const serviceStrengthImages = [
  unsplash("photo-1556909114-f6e7ad7d3136", 800),
  unsplash("photo-1486406146926-c627a92ad1ab", 800),
  unsplash("photo-1449844908441-8829872d2607", 800),
];

export const companyPhilosophyImage = unsplash("photo-1493809842364-78817add7ffb", 1600);

export const projectImages = [
  unsplash("photo-1600607687939-ce8a6c25118c"),
  unsplash("photo-1600585154526-990dced4db0d"),
  unsplash("photo-1600566752355-35792bedcfea"),
  unsplash("photo-1560518883-ce09059eeffa"),
  unsplash("photo-1560185127-6ed189bf02f4"),
  unsplash("photo-1582268611958-ebfd161ef9cf"),
];

export const propertyImages = [
  unsplash("photo-1600047509807-ba8f99d2cdde"),
  unsplash("photo-1523217582562-09d0def993a6"),
  unsplash("photo-1502005229762-cf1b2da7c5d6"),
  unsplash("photo-1497215728101-856f4ea42174"),
  unsplash("photo-1590490360182-c33d57733427"),
  unsplash("photo-1465101046530-73398c7f28ca"),
];

export const companyImage = unsplash("photo-1541888946425-d81bb19240f5");
export const contactBannerImage = unsplash("photo-1567767292278-a4f21aa2d36e");

// 個人のお客様「住宅リフォーム」ページ専用の画像
export const reformLifestyleImages = {
  heroFamily: unsplash("photo-1476703993599-0035a21b17a9", 1920),
  livingRoom: unsplash("photo-1560448204-603b3fc33ddc", 1600),
};

// 「お客様の声」欄で使用する仮の人物写真(実際のお客様の声・写真に差し替えてください)
export const testimonialImages = [
  unsplash("photo-1494790108377-be9c29b29330", 400),
  unsplash("photo-1472099645785-5658abf4ff4e", 400),
  unsplash("photo-1573497019940-1c28c88b4f3e", 400),
];

// 「担当者紹介」欄で使用する仮のスタッフ写真(実際のスタッフ写真に差し替えてください)
export const staffPhotoImages = [
  unsplash("photo-1519085360753-af0119f7cbe7", 400),
  unsplash("photo-1500648767791-00dcc994a43e", 400),
  unsplash("photo-1633332755192-727a05c4013d", 400),
];

// 住宅リフォームの工事内容別ページ(kitchen/bath/toilet 等)で使用する画像
export const subServiceImages = {
  washroom: unsplash("photo-1620626011761-996317b8d101"),
  wallPainting: unsplash("photo-1605146768851-eda79da39897"),
  roof: unsplash("photo-1592595896616-c37162298647"),
  insulation: unsplash("photo-1584622781564-1d987f7333c1"),
  windows: unsplash("photo-1600210492493-0946911123ea"),
  barrierFree: unsplash("photo-1531835551805-16d864c8d311"),
  fullReform: unsplash("photo-1626885930974-4b69aa21bbf9"),
  usedHomeReform: unsplash("photo-1518780664697-55e3ad937233"),
  mansionReform: unsplash("photo-1502672260266-1c1ef2d93688"),
};
