const rows = ["", "", "肉体", "感覚", "精神", "社会"];
const syndromeKind = [
  "",
  "エンジェルハイロウ",
  "バロール",
  "ブラックドッグ",
  "ブラム=ストーカー",
  "キュマイラ",
  "エグザイル",
  "ハヌマーン",
  "モルフェウス",
  "ノイマン",
  "オルクス",
  "サラマンダー",
  "ソラリス",
  "ウロボロス"
];

const worksKind = [
  "",
  "小学生",
  "中学生",
  "高校生",
  "不良高校生",
  "大学生",
  "フリーター",
  "教師",
  "主婦・主夫",
  "UGNチルドレンA",
  "UGNチルドレンB",
  "UGNチルドレンC",
  "UGNチルドレンD",
  "UGN支部長A",
  "UGN支部長B",
  "UGN支部長C",
  "UGN支部長D",
  "刑事",
  "鑑識",
  "弁護士",
  "防衛隊員",
  "傭兵",
  "研究者",
  "教授",
  ""
];

const awakenKind = [
  "",
  "死",
  "憤怒",
  "素体",
  "感染",
  "渇望",
  "無知",
  "犠牲",
  "命令",
  "忘却",
  "探求",
  "償い",
  "生誕"
];

const urgeKind = [
  "",
  "解放",
  "吸血",
  "飢餓",
  "殺戮",
  "破壊",
  "加虐",
  "嫌悪",
  "闘争",
  "妄想",
  "自傷",
  "恐怖",
  "憎悪"
];

const ability = ["", "", "HP", "侵蝕値", "行動値", "移動"];

const syndromeColumn = {
  syndrome: "",
  statusPoint: [0, 0, 0, 0]
};

const worksColumn = {
  works: "",
  statusPoint: [0, 0, 0, 0]
};

export {
  rows,
  syndromeKind,
  worksKind,
  awakenKind,
  urgeKind,
  ability,
  syndromeColumn,
  worksColumn
};
