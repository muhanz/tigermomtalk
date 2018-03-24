//http://www.sohu.com/a/33089622_115782

var chengyu_idioms = [
  { pp: "Àiwūjíwū", ci: "爱屋及乌", jm: "Love me, love my dog." },
  { pp: "Bǎi wén bùrú yī jiàn", ci: "百闻不如一见", jm: "Seeing is believing." },
  { pp: "Bènniǎoxiānfēi", ci: "笨鸟先飞", jm: "A slow sparrow should make an early start." },
  { pp: "Bù shí rénjiān yānhuǒ", ci: "不食人间烟火", jm: 'Impractical. Literally: "does not eat human food". The opposite is 很食人间烟火，食 is being used as a verb.' },
  { pp: "Luòtuó xiángzi", ci: "骆驼祥子", jm: "？？？" },
  { pp: "Bù yǐ wù xǐ, bù yǐ jǐ bēi", ci: "不以物喜，不以己悲", jm: "not pleased by external gains, not saddened bypersonnal losses" },
  { pp: "Bù dǎ bùchéng jiāo", ci: "不打不成交", jm: "No discord, no concord." },
  { pp: "Chāi dōng qiáng bǔ xī qiáng", ci: "拆东墙补西墙", jm: "rob Peter to pay Paul" },
  { pp: "Dà kāi yǎnjiè open", ci: "大开眼界", jm: "open one’s eyes; broaden one’s horizon; be an eye-opener" },
  { pp: "Guòyóubùjí", ci: "过犹不及", jm: "going too far is as bad as not going far enough; beyondis as wrong as falling short; too much is as bad as too little" },
  { pp: "Huó dào lǎo, xué dào lǎo", ci: "活到老，学到老", jm: "One is never too old to learn." },
  { pp: "Jìwǎngbùjiù", ci: "既往不咎", jm: "let bygones be bygones 来源：www.examda.com" },
  { pp: "Jīn wú zú chì, rén wú wán rén", ci: "金无足赤，人无完人", jm: "Gold can’t be pure and man can’t be perfect." },
  { pp: "Móushì zài rén, chéngshì zài tiān", ci: "谋事在人，成事在天", jm: "The planning lies with man, the outcome withHeaven. / Man proposes, God disposes. "},
  { pp: "Nòngqiǎochéngzhuō", ci: "弄巧成拙", jm: "be too smart by half; Cunning outwits itself." },
  { pp: "Péile fūrén yòu zhé bīng", ci: "赔了夫人又折兵", jm: "From Romance of the Three Kingdoms: to suffer two unfortunate incidents back to back 来源：www.examda.com" },
  { pp: "Pāozhuānyǐnyù a", ci: "抛砖引玉", jm: "a modest spur to induce others to come forward withvaluable contributions; throw a sprat to catch a whale" },
  { pp: "Pòfǔchénzhōu", ci: "破釜沉舟", jm: "cut off all means of retreat；burn one‘s own way of retreatand be determined to fight to the end" },
  { pp: "Qiǎo fù nánwéi wúmǐzhīchuī", ci: "巧妇难为无米之炊", jm: "If you have no hand you can’t make a fist./ One can’tmake bricks without straw." },
  { pp: "Qiānlǐ zhī xíng shǐ yú zúxià", ci: "千里之行始于足下", jm: "a thousand-li journey begins with the first step--the highest eminence is to be gained step by step" },
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
  { pp: "Wúwéi ér zhì", ci: "无为而治", jm: "Inaction as an action of resolution." },
  { pp: "jǐnpò gǎn", ci: "紧迫感", jm: "A sense of urgency." },
  { pp: "shěnshíduóshì", ci: "审时度势", jm: "Evaluate the situation." },
  { pp: "rén nuó huó, shù nuó sǐ", ci: "人挪活，树挪死", jm: "Man lives in motion, trees die in motion." },
  { pp: "jiéyīsuōshí", ci: "节衣缩食", jm: "To be frugal; saving money on clothes and food" },
  { pp: "fā xiǎo", ci: "发小", jm: "Since one's childhood, literally, since one's hair was small." },
  { jm: "I scratch your back, you scratch mine. (idiom)", ci: "投桃报李", pp: "tóutáobàolǐ"},
  { jm: "With bitter comes the sweet.", ci: "苦尽甘来", pp: "Kǔjìngānlái"},
  { jm: "Dedication and faith will move mountains to open", ci: "精诚所至金石为开", pp: "Jīngchéng suǒ zhì jīnshí wéi kāi"},
  { jm: "Whoever is pitiful must have a cause to be despised.", ci: "可怜之人必有可恶之处", pp: "Kělián zhī rén bì yǒu kěwù zhī chù"},
  { jm: "Whatever you can think will come true;", ci: "心想事成", pp: "Tiāndào chóu qín"},
  { jm: "Work will be rewarded", ci: "劳有所获，事半功倍", pp: "Láo yǒu suǒ huò"},
  { jm: "Achieve maximum results with little effort", ci: "事半功倍", pp: "Shìbàngōngbèi"},
  { jm: "Diligence can mend dullness", ci: "勤能补拙", pp: "qínnéngbǔzhuō"},
  { jm: "BETA | The more you work, the more you earn; familiarity can breed talent.", ci: "多劳多得熟能生巧", pp: "duō láo duō dé shúnéngshēngqiǎo"},
  { jm: "lit. the iron tree blooms (idiom), a highly improbable or extremely rare occurrence", ci: "铁树开花", pp: "tiě shù kāi huā"},
  { pp: "Yuàn dǔ fúshū", ci: "愿赌服输", jm: "So willing to bet that one would bet the clothes one wears" },
  { pp: "Diào'erlángdāng", ci: "吊儿郎当", jm: "To have a lighthearted attitude, as if like laughing children" },
  { pp: "Jǔshǒuzhīláo", ci: "举手之劳", jm: "Easy pickings." },
  { pp: "Yì gāo dǎn dà", ci: "艺高胆大", jm: "Literally: when one's craft is strong, one gains courage. Hence the double meaning: 1) to encourage one to work hard, the other to be brave when taking risks, assuming one has done the consummate work before a trial." },
  { pp: "Jiàqīngjiùshú", ci: "驾轻就熟", jm: "The more you do something the more familiar you are with it" },
  { pp: "shuō ér gēnjù", ci: "说而根据", jm: "To say things that are evidence-backed." },
  { pp: "jiāngshān yì gǎi běnxìng nán yí", ci: "江山易改本性难移", jm: "Mountains and rivers are easy to move, compared to changing one's personality." },  
  { pp: "Zhìfù guāngróng", ci: "致富光荣", jm: "TO BE RICH IS TO BE GLORIOUS." },  
  { pp: "Yántīngjìcóng", ci: "言听计从", jm: "To take one's word as law and divine edict." },  
  { pp: "Shìshí shèng yú xióngbiàn", ci: "事实胜于雄辩", jm: "Action trumps debate." },  
  { pp: "shí niǎo zài lín bùrú yī niǎo zài shǒu", ci: "十鸟在林不如一鸟在手", jm: "A dozen partridges in the woods is worth less than one in hand." },  
  { pp: "xíng bǎi lǐ zhě bàn jiǔshí", ci: "行百里者半九十", jm: "What you got you here won't get you there." }, 
  { pp: "qiǎng cí duó lǐ", ci: "强词夺理", jm: "Senseless rhetoric from a demogogue." }, 
  { pp: "Chūbù yànzhèng", ci: "初步验证", jm: "Preliminary verification." },  
  { pp: "Huà hǔ bùchéng fǎn lèi quǎn", ci: "画虎不成反类犬", jm: "To fail in drawing a tiger, so to try and pivot mid-stroke to a dog. To fail at A and B." },  
  { pp: "shùnshì ér dòng", ci: "顺势而动", jm: "To follow the trend." }, 
  { pp: "Shéi zhuànqián shéi yīngxióng, shéi méi qián shéi gǒuxióng", ci: "谁赚钱谁英雄，谁没钱谁狗熊", jm: "Whoever makes money is the hero, whoever doesn't is the bear/loser" }, 
  { pp: "Xíngshì bǐ rén qiáng", ci: "形势比人强", jm: "Environment is stronger than the individual." },  
  { pp: "Pǔbiàn sā wǎng, zhòngdiǎn bǔlāo", ci: "普遍撒网，重点捕捞", jm: "Throw out the nets frequently, catching fish at the critical moment" },  
  { pp: "yuèzǔdàipáo", ci: "越俎代庖", jm: "Taking on responsibilities that is noe one's responsibilities e.g. micromanaging." }, 
  { pp: "Bēigōngshéyǐng", ci: "杯弓蛇影", jm: "Extremely suspicious/paranoid, literally, to see snakes in the cup from the shadow of a bow on the wall." }, 
  { pp: "Shěběnzhúmò", ci: "舍本逐末", jm: "Penny wise, pound foolish." },  
  { pp: "Yīn xiǎo shī dà débùchángshī", ci: "因小失大得不偿失", jm: "Because one believes small losses are large, so one cannot win anything/loses one's compensation" },  
  { pp: "Mǎi dú huán zhū", ci: "买椟还珠", jm: "To buy a treasure chest but give back the pearl/missing the big picture" }, 
  { pp: "Jiǎnle zhīma, diūle xīguā", ci: "捡了芝麻，丢了西瓜", jm: "Foraging for sesame seeds, lost the watermelon; Penny wise, pound foolish." }, 
  { pp: "Shúnéngshēngqiǎo", ci: "熟能生巧", jm: "Practice makes perfect"}
]

function getRandomQuote() {
  var index = Math.floor(Math.random() * chengyu_idioms.length);
  return chengyu_idioms[index];
}

var pp = document.querySelector('.pinyin-pronunciation');
var ci = document.querySelector('.chengyu-idiom');
var jm = document.querySelector('.jieshi-meaning');

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

var refresh_button = document.querySelector('#refresh');
var copy_button = document.querySelector('#content-copy');

if (refresh_button) {
  refresh_button.addEventListener('click', function() {
    fillInContainer();
  })  
}

if (copy_button) {
  copy_button.addEventListener('click', function() {
    copyQuote();
  })  
}

