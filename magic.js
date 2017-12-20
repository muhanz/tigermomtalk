//http://www.sohu.com/a/33089622_115782

var chengyu_idioms = [
{ pp: "Àiwūjíwū", ci: "爱屋及乌", jm: "Love me, love my dog." },
{ pp: "Bǎi wén bùrú yī jiàn", ci: "百闻不如一见", jm: "Seeing is believing." },
{ pp: "Bènniǎoxiānfēi", ci: "笨鸟先飞", jm: "A slow sparrow should make an early start." },
{ pp: "Bù yǐ wù xǐ, bù yǐ jǐ bēi", ci: "不以物喜，不以己悲", jm: "not pleased by external gains, not saddened bypersonnal losses" },
{ pp: "Bù dǎ bùchéng jiāo", ci: "不打不成交", jm: "No discord, no concord." },
{ pp: "Chāi dōng qiáng bǔ xī qiáng", ci: "拆东墙补西墙", jm: "rob Peter to pay Paul" },
{ pp: "Dà kāi yǎnjiè open", ci: "大开眼界", jm: "open one’s eyes; broaden one’s horizon; be aneye-opener" },
{ pp: "Guòyóubùjí", ci: "过犹不及", jm: "going too far is as bad as not going far enough; beyondis as wrong as falling short; too much is as bad as too little" },
{ pp: "Huó dào lǎo, xué dào lǎo", ci: "活到老，学到老", jm: "One is never too old to learn." },
{ pp: "Jìwǎngbùjiù", ci: "既往不咎", jm: "let bygones be bygones 来源：www.examda.com" },
{ pp: "Jīn wú zú chì, rén wú wán rén", ci: "金无足赤，人无完人", jm: "Gold can’t be pure and man can’t be perfect." },
{ pp: "Móushì zài rén, chéngshì zài tiān", ci: "谋事在人，成事在天", jm: "The planning lies with man, the outcome withHeaven. / Man proposes, God disposes. "},
{ pp: "Nòngqiǎochéngzhuō", ci: "弄巧成拙", jm: "be too smart by half; Cunning outwits itself." },
{ pp: "Péile fūrén yòu zhé bīng", ci: "赔了夫人又折兵", jm: "throw good money after bad 来源：www.examda.com" },
{ pp: "Pāozhuānyǐnyù a", ci: "抛砖引玉", jm: "a modest spur to induce others to come forward withvaluable contributions; throw a sprat to catch a whale" },
{ pp: "Pòfǔchénzhōu", ci: "破釜沉舟", jm: "cut off all means of retreat；burn one‘s own way of retreatand be determined to fight to the end" },
{ pp: "Qiǎo fù nánwéi wúmǐzhīchuī", ci: "巧妇难为无米之炊", jm: "If you have no hand you can’t make a fist./ One can’tmake bricks without straw." },
{ pp: "Qiānlǐ zhī xíng shǐ yú zúxià", ci: "千里之行始于足下", jm: "a thousand-li journey begins with the first step--thehighest eminence is to be gained step by step" },
{ pp: "Qián shì bù wàng, hòu shì zhī shī", ci: "前事不忘，后事之师", jm: "Past experience, if not forgotten, is a guide forthe future." },
{ pp: "Qián rén zāi shù, hòu rén chéngliáng", ci: "前人栽树，后人乘凉", jm: "One generation plants the trees in whose shadeanother generation rests.One sows and another reaps." },
{ pp: "Sàiwēngshīmǎ, yān zhī fēi fú", ci: "塞翁失马，焉知非福 ", jm: "Misfortune may be an actual blessing." },
{ pp: "Sānshí érlì", ci: "三十而立", jm: "man should be independent at the age of thirty." },
{ pp: "Sìshí bùhuò", ci: "四十不惑" , jm: "Life begins at forty." },
{ pp: "Shuō cáocāo, cáocāo dào,", ci: "说曹操，曹操到,", jm: "Talk of the devil and he comes." },
{ pp: "Wùyǐlèijù, rén yǐ qún fēn", ci: "物以类聚，人以群分", jm: "Birds of a feather flock together." },
{ pp: "Wàngzǐchénglóng", ci: "望子成龙", jm: "hold high hopes for one’s child" },
{ pp: "Gōngfū bù fù yǒuxīnrén", ci: "功夫不负有心人", jm: "Everything comes to him who waits." },
{ pp: "Hǎole shāngbā wàngle téng", ci: "好了伤疤忘了疼", jm: "once on shore, one prays no more" },
{ pp: "Wū lòu yòu féng liányīnyǔ", ci: "屋漏又逢连阴雨", jm: "Misfortunes never come singly. When it rains itpours." },
{ pp: "Yǒuqíng rén zhōng chéng juànshǔ", ci: "有情人终成眷属", jm: "Jack shall have Jill, all shall be well." },
{ pp: "Yǒu qián néng shǐ guǐ tuī mó", ci: "有钱能使鬼推磨", jm: "Money makes the mare go. Money talks." },
{ pp: "Yǒuyuán qiānlǐ lái xiāng huì", ci: "有缘千里来相会", jm: "Separated as we are thousands of miles apart, we cometogether as if by predestination." },
{ pp: "Yuānjiā yí jiě bùyí jié", ci: "冤家宜解不宜结", jm: "Better make friends than make enemies." },
{ pp: "Yī yán jìchū, sìmǎ nán zhuī", ci: "一言既出，驷马难追", jm: "A real man never goes back on his words." },
{ pp: "Zhǐshàngtánbīng", ci: "纸上谈兵", jm: "be an armchair strategist" },
{ pp: "Zhǐ bāo bù zhù huǒ", ci: "纸包不住火", jm: "Truth will come to light sooner or later." },
{ jm: "Heaven rewards the diligent. (idiom)", ci: "天道酬勤", pp: "Tiāndào chóu qín"},
{ jm: "lit. the iron tree blooms (idiom), a highly improbable or extremely rare occurrence", ci: "铁树开花", pp: "tiě shù kāi huā"}
]

function getRandomQuote() {
  var index = Math.floor(Math.random() * chengyu_idioms.length);
  return chengyu_idioms[index];
}

var pp = document.querySelector('.pinyin-pronunciation');
var ci = document.querySelector('.chengyu-idiom');
var jm = document.querySelector('.jieshi-meaning');

var refresh_button = document.querySelector('#refresh');
var copy_button = document.querySelector('#content-copy');

function fillInContainer() {
  var quote = getRandomQuote();
  pp.innerHTML = quote["pp"];
  ci.innerHTML = quote["ci"];
  jm.innerHTML = quote["jm"];
}

function copyQuote() {
  var copyText = document.querySelector('.chengyu-idiom').innerHTML;
  
  // Create a dummy input to copy the string array inside it
  var dummy = document.createElement("input");
  // Add it to the document
  document.body.appendChild(dummy);
  // Set its ID
  dummy.setAttribute("id", "dummy_id");
  // Output the array into it  
  document.getElementById("dummy_id").value=copyText;  
  // Select it
  dummy.select();
  // Copy its contents
  document.execCommand("copy");
  // Remove it as its not needed anymore
  document.body.removeChild(dummy);
  
//   copyText.select();
//   document.execCommand("copy");
  alert("Text copied!");
}

if (refresh_button) {
  refresh_button.addEventListener('click', function() {
    fillInContainer();
  })  
}

copy_button.addEventListener('click', function() {
  copyQuote();
})
