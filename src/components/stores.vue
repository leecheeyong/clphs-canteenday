<script setup>
import { ref } from 'vue'

// const stores = await fetch('https://canteenday-2024.vercel.app/stores').then((r) => r.json())
const stores = [
  {
    name: 'Carbonara di Lusso',
    venue: 'A01',
    category: '主食',
    link: '',
    description:
      '你！想不想来一场酣畅淋漓的意大利之旅！你！又想不想尝试鲜少体验过的意大利风味！在此欢迎各位师生前来我们的档口“Carbonara Di Lusso”！诚邀各位品尝由我们所尽心烹饪的Carbonara，品味意大利传统与创新的完美结合！这道经典美食以其浓郁的奶油酱汁和烟熏培根闻名，配以丝滑细腻的意大利面，每一口都是一次味蕾的深度体验！秉承着意大利料理的精髓，从选材到烹饪技艺，力求将最纯正的美味呈现给在座的每一位师生！还在等什么？！就让我们的意大利面征服你们的味蕾，成为你在本次食堂日的不二之选！',
    video: './poster/A01.webp'
  },
  {
    name: '葱冲葱油面',
    venue: 'A02',
    category: '主食',
    link: '',
    description:
      '细腻的面条🍜\n配上金黄香脆的葱段🧅\n厚实的香肠😍\n营养丰富的荷包蛋🍳\n再加上秘制的葱油酱汁✨ \n每一口 都让人回味无穷😎\n葱冲葱油面你值得拥有🫵🏻❤️‍🔥',
    video: './poster/A02.webp'
  },
  {
    name: 'Marioの蘑菇庄园',
    venue: 'A03',
    category: '主食',
    link: '',
    description:
      '欢迎来到食堂日的“西域小调”！我们Marioの蘑菇庄园将为大家呈现经典的Alfredo Macaroni。浓郁的奶油酱汁、滑嫩的通心粉，搭配香气四溢的蘑菇，带您领略异域风情。\n期待您的光临，让我们一起享受这场味觉盛宴！\n',
    video: './poster/A03.webp'
  },
  {
    name: '麻辣香锅',
    venue: 'A04',
    category: '主食',
    link: '',
    description: '麻辣香锅，麻的爽心，辣的过瘾，辣在你嘴上，麻在你心里',
    video: './poster/A04.webp'
  },
  {
    name: '辣妹子x喜番你',
    venue: 'A05',
    category: '主食',
    link: '',
    description:
      'A05 辣妹子x喜番你🔥 🥢\n\n热辣美味，尽在“辣妹子麻辣烫”和“喜欢你番茄烫”！🍲\n\n您是否在寻找一种既能刺激味蕾，又能温暖身心的美食？\n\n辣妹子麻辣烫将是您的最佳选择！\n\n·  《海底捞》秘制浓郁汤底：融合多种天然香料，味道独特，回味无穷～\n·辣妹精选食材：我们精挑细选新鲜蔬菜、肉类和海鲜，确保每一口都充满自然的鲜美🫦',
    video: './poster/A05.webp'
  },
  {
    name: '粉掌柜',
    venue: 'A06',
    category: '主食',
    link: '',
    description:
      '在巴黎也能闻到香味的蒜香拌面🧄🍜\n辣出欧美厚唇的酸辣粉🥵🔥🫦\n你见过吗🫵？ \n\n想要一探究竟🤔？ \n食堂日《粉掌柜》档口 我们不见不散🙌',
    video: './poster/A06.webp'
  },
  {
    name: 'Spaghetti Bolognese',
    venue: 'A07',
    category: '主食',
    link: '',
    description:
      '是不是吃腻了学校食堂卖的意大利面?! 这次食堂日我们隆重推出好吃到爆又真材实料的意大利面😋。不相信? 吃过的人回头率💯，价格合理又大份! 别犹豫了，直接来找我们购买吧！我们在体育处外空地等着你喔！😍',
    video: './poster/A07.webp'
  },
  {
    name: '条条长长',
    venue: 'A08',
    category: '主食',
    link: '',
    description:
      '尝鲜时刻，尽在条条长长！\n您是否在寻找一种快捷、美味又令人满足的餐点？条条长长——您的最佳主食！我们精心研制的方便面，以其独特的风味和绝佳的口感，带给您无与伦比的美食体验。我们在小操场不见不散！',
    video: './poster/A08.webp'
  },
  {
    name: '酸一口宽粉辣!',
    venue: 'A09',
    category: '主食',
    link: '',
    description:
      'A09 酸一口宽粉辣 一嗦上天🥵‼️\n\n酸辣宽粉可是让人一口就爱上的舌尖美味😍🔥\n\n宽粉弹牙爽滑，搭配独特的酸辣酱料 🍋酸爽开胃🌶️ 辣意十足，每一口都让你欲罢不能🤤\n\n快来试试吧🥴 让这道让人垂涎欲滴的美味，瞬间征服你的味蕾，带你进入味觉的极致享受🫰🏻🫰🏻',
    video: './poster/A09.webp'
  },
  {
    name: 'Kungfu Maggi',
    venue: 'A10',
    category: '主食',
    link: '',
    description:
      '我们做这个食物的原因是让每一位学生吃了我们的kunfu maggi，就学会了一点点kungfu👊👊\n保护自己，保护家人，\n也可以保护未来的“人”。\n\n请多多支持👊👊，Letsgooooo！！',
    video: './poster/A10.webp'
  },
  {
    name: '雪花奇缘',
    venue: 'B01',
    category: '小吃',
    link: '',
    description:
      '咯吱一声，像踩在雪地里的声音，这就是让人念念不忘的雪花酥❄️⛄️。它是追剧的必备零食，仿佛与韩剧里的oppa一起在雪地里舞动。雪花酥的魅力，吃一口就会爱上🤤💛～',
    video: './poster/B01.webp'
  },
  {
    name: '后宫烧烤',
    venue: 'B02',
    category: '小吃',
    link: '',
    description:
      '～～～～《后宫烧烤》小故事～～～～\n皇上！您许久没有莅临后宫了，各位妃嫔们对您啊～甚是想念～，听林嫔说最近后宫的各位妃嫔们都在研究着一种从西域传入的美食！皇上！不妨今晚用膳时去看看如何？，皇上：亚比！囧囧囧！，小陈子！传旨！朕今晚就到后宫去看看她们能搞出什么名堂来！\n…………………..分割线………………….\n（戌时正点，御花园）\n小陈子：皇上驾到～～～～～\n众妃嫔：臣妾拜见皇上～～～\n皇上：听小陈子说，最近后宫内爱妃们正在研究一种从西域传入我紫禁城的美食，女人们，你们成功的引起了朕的注意‼️究竟是什么美食❓快速速向朕道来🫵🏻❗️❗️❗️\n林嫔：皇上🫅～～～您眼前的美食便是从西域传来的美食👀👀“烧烤🍖🔥”\n皇上：哦😯！爱妃请继续！\n林嫔：臣妾与各位姐妹们，研究了无数个日夜🌞🌛终于❗️让臣妾们研究出来了几个好吃的烧烤了🍗🔥❤️‍🔥🥵\n（再后来，随着这项从西域传入宫廷的美食广泛的流传，许多品尝过这项美食的大臣们都对此赞不绝口！众妃嫔们变合资在民间开了一间店铺名为“后宫烧烤🍗”自此这个从清朝开的店铺便一直流传自此！\n故事结束🔚！亚比囧囧囧！）\n🫵🏻🫵🏻🫵🏻🫵🏻🫵🏻\n你，就是你！0️⃣8️⃣0️⃣2️⃣❗️❗️❗️\n确定不get和皇上的同款烧烤吗？🫵🏻❗️\n真的不好奇吗❓👀💭🫣\n我们的摊位是🅱️✊2️⃣（B02）\n请各位客官和牛仔们！🤠👖多多支持❗️⚠️\n你们的支持，将会是我们的动力😎🫡\n0802！B02！我们在小草场们等你🫵🏻\n烧烤的味道👅，我知道！\n《后宫烧烤❤️‍🔥🔥🍗💭》\n恭迎各位客官们莅临～～～❤️‍🔥',
    video: './poster/B02.webp'
  },
  {
    name: '想薯你啦',
    venue: 'B03',
    category: '小吃',
    link: '',
    description:
      '当你感到饥饿，需要一份美味的小吃时，有什么比一份金黄酥脆的薯条更能满足你的味蕾呢？我们的薯条采用新鲜优质的土豆，经过精心挑选和处理，为你呈现出独一无二的美味体验。',
    video: './poster/B03.webp'
  },
  {
    name: '友谊肠村',
    venue: 'B04',
    category: '小吃',
    link: '',
    description:
      '生活可经不起等待！赶快来份烤肠就趁现在！！！🤤🔥快拉上你的朋友们，到我们友谊肠村来根烤肠吧！我们在体育处外空地等你哦😋',
    video: './poster/B04.webp'
  },
  {
    name: '金港鱼蛋香',
    venue: 'B05',
    category: '小吃',
    link: '',
    description:
      '🇭🇰原始于香港的咖哩鱼蛋是个有名的街头小吃。经过神奇调味后🤩不知不觉马来西亚的味道也深入了酱汁里。。。 圆滚滚的鱼丸🫣浸在香喷喷的咖哩汁里🤤 单人的RM5不如双人的RM8😳 在杯里方便您随手携带，边享受边闲游😍❣️',
    video: './poster/B05.webp'
  },
  {
    name: "Tax'us chicken",
    venue: 'B06',
    category: '小吃',
    link: '',
    description: 'Better then texas, better don’t tax’us',
    video: './poster/B06.webp'
  },
  {
    name: 'ChuDoDo',
    venue: 'B07',
    category: '小吃',
    link: '',
    description:
      'B07 CHUDODO🍩\n\n圈圈圆圆圈圈⭕ 甜甜咸咸甜甜🍭 的我\n期待你的到来🤩\n在原本简单香甜的经典中⚜️，淋上糖霜，沾上奥利奥\n究竟Churro & Donut的结合到底可以带给我们什么样的惊喜呢❓\n保证你绝对可以让你享受每一口带来的甜蜜🍯与满足😋',
    video: './poster/B07.webp'
  },
  {
    name: '迷亖你披萨',
    venue: 'B08',
    category: '小吃',
    link: '',
    description:
      '♨️融化在披萨热浪中的不只有芝士🧀 还有烦恼 一口一口地吃掉忧愁吧‼️别人画的饼吃不上，我们的披萨安排上！🍕🍕快来吃出炉前悄悄努力，出炉后迷亖你的披萨吧‼️✨',
    video: './poster/B08.webp'
  },
  {
    name: '鸡鸡复炸鸡',
    venue: 'B09',
    category: '小吃',
    link: '',
    description: '美味炸鸡在召唤你的味蕾！跟着我有炸鸡吃！',
    video: './poster/B09.webp'
  },
  {
    name: '渴乐炸鸡',
    venue: 'B10',
    category: '小吃',
    link: '',
    description:
      '想不想让你的味觉体验前所未有的感觉？\n-渴乐炸鸡-\n望🐔止渴，鸡乐无穷😝\n四款美味任你挑选，每一杯都是独一无二的味觉享受！\nB10-渴乐炸鸡 在8月2日与你见面！',
    video: './poster/B10.webp'
  },
  {
    name: '薯不CHEESE就别玩',
    venue: 'B11',
    category: '小吃',
    link: '',
    description:
      '🤠三角含薯，是我们对数学与美食的完美结合。这个三角形的美食，拥有令人垂涎🤤的黄金马铃薯🥔搭配浓郁的CHEESE🧀，不仅是视觉上的完美对称，更是味觉上的极致享受。🪽每一口咬下去，都仿佛品尝到了三角函数中的无限乐趣。MMMMMM SINCOSTANGENT！🤩\n\n💐所以说，薯不CHEESE就别玩❗我们相信，食物就像三角函数，角度📐决定了美味。我们用心挑选最优质的马铃薯，精心搭配最香浓的CHEESE，让每一个三角形的三角含薯都成为味蕾上的绝妙公式。🫣来吧，别输不起👎🏻，让 B11 与你一起解开美食的角度，体验数学与美味的完美碰撞！我们在小草场不见不散！',
    video: './poster/B11.webp'
  },
  {
    name: '热浪香肠串',
    venue: 'B12',
    category: '小吃',
    link: '',
    description:
      '热浪香肠串发出了迷人的香味♨！我们还有自制的炸薯片🥔香脆可口！随着热浪来到小草场吧❤️‍🔥',
    video: './poster/B12.webp'
  },
  {
    name: 'Jumeokbap & Tteokbokki',
    venue: 'B13',
    category: '小吃',
    link: '',
    description:
      '📣 안녕하세요~ CALLING ALL FOOD LOVERS\n美味不容错过！快来体验我们小吃摊的正宗韩国街头美食 💁\n🍙 韩式饭团 (Jumeokbap) ~ 饭团里嫩滑的午餐肉和酸爽韩式泡菜，充满浓郁的香气和多层次的口感， 每一口都让你仿佛置身于韩国街头😍\n🔥 韩式辣炒年糕 (Tteokbokki) ~ 经典韩国小吃辣炒年糕，搭配独家秘制酱料，香辣诱人，超正！！超Q弹！！\n还等什么⁉️ 快来和朋友一起分享这份美味，感受韩国街头小吃的魅力！无论是饭团的鲜香，还是年糕的辛辣，都会让你的味蕾大呼过瘾 🎉 \n',
    video: './poster/B13.webp'
  },
  {
    name: '黄金脆薯球',
    venue: 'B14',
    category: '小吃',
    link: '',
    description:
      '地瓜球配巧克力酱是一款别具风味的创意甜品，将传统地瓜球的天然甜美与巧克力酱的浓郁丝滑完美融合。外皮的酥脆与内里的柔软，配上的巧克力酱，融合了地瓜与巧克力特有的香气与甜度。每一口都是双重口感的极致享受，酥脆的地瓜球沾上丝滑的巧克力酱，带来前所未有的味觉体验。这道甜品不仅是味蕾的盛宴，更是视觉的享受，让每一个瞬间都充满惊喜与甜蜜(⁠◕⁠ᴗ⁠◕⁠✿⁠)。无论您是甜品爱好者，还是寻求新奇口味的美食探索者，都不要错过这款独特的甜品。快来我们的店铺，享受这道美味的盛宴吧！无论是与朋友分享，还是独自享用，地瓜球配巧克力酱都会让您回味无穷，带来无限惊喜与满足。我们期待您的光临，共同体验这场甜蜜的味觉之旅(⁠・⁠o⁠・⁠)！',
    video: './poster/B14.webp'
  },
  {
    name: '关东咕噜咕噜煮',
    venue: 'B15',
    category: '小吃',
    link: '',
    description: '心有所属💗不如我的关东煮😋人手一碗热气腾腾的关东煮🍢吃喝丸乐🤩用热情温暖你的胃❤‍🔥',
    video: './poster/B15.webp'
  },
  {
    name: '饺饺者',
    venue: 'B16',
    category: '小吃',
    link: '',
    description:
      '尊敬的饺子狂热者们，\n\n有没有一款小吃让你吃完一口就忍不住再来十口？答案当然是——台式煎饺！\n\n台式煎饺，不仅仅是一种食物，它更是一种生活态度。在本校一年一度食堂日饕餮盛宴的百家争鸣中需要一个小确幸，而我们的小确幸就是咬一口金黄酥脆、内馅多汁的台式煎饺。饺子皮脆到掉渣，内馅鲜到流泪。每个煎饺都是一个小小的惊喜盒子，咬开一看，惊喜连连。\n\n为什么选择我们的台式煎饺？\n\n1. 食材讲究：我们可是专门从菜市场挑选最有个性的食材，保证每一个煎饺都能上演“食材的华尔兹”。\n2. 工艺绝佳：我们的饺子师傅个个身怀绝技，煎饺时都能表演空中翻锅，让饺子皮脆到出新高度。\n3. 口味丰富：从猪肉白菜到猪肉韭菜，从素食到肉类，我们的馅料可是堪比饺子界的联合国。\n4. 方便快捷：不管食堂日当天是晴天，还是雨天，我们的台式煎饺都会让您有美好的一天。\n\n台式煎饺——让你每一口都惊呼“哇塞！”\n\n我们的摊位在B16哦，快来找我们吧，加入我们的饺子狂欢派对，一起成为饺子界的饺饺者吧！\n\n店名：饺饺者\n摊位号：B16\n联系方式：011-2090 0681（组长：颜睿恩）\n\n温馨提示：本摊不对吃饱扶墙出门者负责，但我们绝对欢迎每一位饺子狂热者的光临！',
    video: './poster/B16.webp'
  },
  {
    name: '小堡堡',
    venue: 'B17',
    category: '小吃',
    link: '',
    description:
      '小小汉堡，小巧精致，大口满足🤤汉堡胚搭配着鸡蛋的香味加上番茄和蔬菜的衬托，每一口都是满满的幸福感，简单的享受，绝对的美味😋\n8月2日 我们在B17等你！🫶🏻',
    video: './poster/B17.webp'
  },
  {
    name: '牛郎“烧”卷',
    venue: 'B18',
    category: '小吃',
    link: '',
    description:
      '体验西域牛仔的独特风情，品味令人难以抗拒的牛郎“烧”卷！这道小吃将火鸡面与春卷皮完美结合，外皮酥脆，内馅火辣入味，再点缀上香喷喷的芝麻，给你的味蕾带来全新的冲击！\n\n无论你是喜欢挑战辣味，还是偏爱甜的口感，我们都能满足你的需求。辣味口感火辣刺激，而甜味则以秘制甜酱调制而成，风味独特！\n\n让我们一起骑上骏马，穿越西域的狂野，享受这道充满异域风情的美味佳肴吧！🌶️🍬✨',
    video: './poster/B18.webp'
  },
  {
    name: '豆你玩!',
    venue: 'B19',
    category: '小吃',
    link: '',
    description: '真的没“豆你玩！”本摊B19的炸包浆豆腐，外酥里嫩，香浓爆浆，可以走过但不要错过哦🌟',
    video: './poster/B19.webp'
  },
  {
    name: '汤圆：重生之我是麻糍',
    venue: 'B20',
    category: '小吃',
    link: '',
    description: 'QQ弹弹的汤圆麻糍🍡，加上有滋有味的toppings，软软糯糯不粘牙，绝对让你念念不忘💗✨',
    video: './poster/B20.webp'
  },
  {
    name: '哈尔冰粉',
    venue: 'C01',
    category: '甜品',
    link: '',
    description:
      '青春没有售价🔥冰粉全款拿下🤤\n\n那么热的天🥵就应该吃点冰的❄️\n\n全场注意📢轻轻松松实现中学时代独自☝🏻人全款拿下冰粉的愿望🫵🏻我们C01 小草场见‼️',
    video: './poster/C01.webp'
  },
  {
    name: '爱他不如爱玉冰',
    venue: 'C02',
    category: '甜品',
    link: '',
    description: '不吃你会后悔的',
    video: './poster/C02.webp'
  },
  {
    name: '逗你一笑',
    venue: 'C03',
    category: '甜品',
    link: '',
    description:
      '买花不如买豆花🌸豆花更能温暖ta🫶🏻\n豆花一碗🥣 幸福美满😍\n🫵🏻还在等什么 还不快点拿下‼️😼',
    video: './poster/C03.webp'
  },
  {
    name: 'Hwachae',
    venue: 'C04',
    category: '甜品',
    link: '',
    description:
      '⚠️全部 oppa 和 noona 注意⚠️\n\n🇰🇷🇰🇷想去韩国吗? 🇰🇷🇰🇷 我们现在就带你体验 🦋🌻 让在千里之外能够品尝到韩国甜美的滋味 🍍🍉🥤🧊🍧🍇 \n\n水果，汽水和我们的一份心意，希望你会到我们的档口而来买一碗我们从韩国偷来的 🌸花chae🌸\n\n💋ps: oppa 和 noona 最喜欢吃的，如果你是oppa 或 noona 走过路过不要错过🕺',
    video: './poster/C04.webp'
  },
  {
    name: '冰雪奇缘',
    venue: 'C05',
    category: '甜品',
    link: '',
    description:
      '亲爱的顾客们，\n\n欢迎光临我们的鸡蛋仔专卖店！我们为您精心制作的鸡蛋仔，外焦里嫩，口感独特，给您带来极致的美味体验。\n\n我们只选用新鲜优质的原料，搭配独特的配方，确保每一口鸡蛋仔都充满了浓郁的鸡蛋香味和丰富的口感。无论是经典原味还是创意口味，我们都能满足您的味蕾。\n\n来一份热腾腾的鸡蛋仔，无论是休闲时光还是聚会小吃，都是绝佳选择。\n\n快来尝试吧，让我们一起享受这份美味的鸡蛋仔！\n\n期待您的光临！',
    video: './poster/C05.webp'
  },
  {
    name: 'Chur Chur Churros',
    venue: 'C06',
    category: '甜品',
    link: '',
    description:
      '欢迎来到Chur Chur Churro——美味的欢乐时刻！\n亲爱的美食爱好者，\n\n无论你是甜食爱好者还是美味探寻者，Chur Chur Churro都将成为你味蕾的终极目的地！我们为您精心制作每一根酥脆香甜的Churro，让您在每一口中都能感受到幸福的滋味。\n\n我们提供三种特色酱料供您选择：草莓酱、巧克力酱和蜂蜜。每一种酱料都有独特的风味，与我们的Churro完美搭配，让您的味蕾每次都有新的惊喜。',
    video: './poster/C06.webp'
  },
  {
    name: '熊熊星“球”',
    venue: 'C07',
    category: '甜品',
    link: '',
    description:
      '🌟 熊熊星“球” 登场！🌟\n\n亲爱的朋友们，\n\n8月2日这一天，别错过我们食堂义卖日的重头戏——熊熊星“球”！这个美味的创意甜点不仅有令人垂涎的口感，更是一份爱心满满的美食。快来尝试吧！\n\n📍 档口： C07\n🍽️ 名称： 熊熊星“球\n💰 价格： RM4 \n菜单：热汤圆，冷汤圆（只限50份）\n\n无论你是老饕还是甜品爱好者，熊熊星“球”都会让你感受到前所未有的幸福感。每一颗汤圆都经过精心制作，保证让你一口难忘！\n\n赶快来C07档口，熊熊星“球”等你来品尝！\n\n期待见到你们！',
    video: './poster/C07.webp'
  },
  {
    name: '果冻梦工厂',
    venue: 'C08',
    category: '甜品',
    link: '',
    description: '果冻时光，甜美回忆。',
    video: './poster/C08.webp'
  },
  {
    name: '“烙烙”家常',
    venue: 'C09',
    category: '甜品',
    link: '',
    description:
      '走过路过不要错过 📣\n“烙烙”家常烙饼！！！\n一边吃烙饼 一边唠家常😋\nC09 我们不见不散🔊🎊',
    video: './poster/C09.webp'
  },
  {
    name: '夏日最芒',
    venue: 'C10',
    category: '甜品',
    link: '',
    description:
      '冰爽夏日，尽享芒果风情！！！\n在炎热的夏季，一份清凉的芒果冰无疑是天赐良品。芒果的香甜与冰的清凉完美融合，为您带来无与伦比的口感享受。今天，让我们一同走进芒果的世界，感受冰爽的夏日风情！',
    video: './poster/C10.webp'
  },
  {
    name: '噢哈游诈雪糕',
    venue: 'C11',
    category: '甜品',
    link: '',
    description:
      'John Cena：”ohayo!! 早上好 OHIO，现在我有 *诈bingchiling（炸冰淇淋）*，我很喜欢bingchiling（冰淇淋），但是 *诈bingchiling（炸冰淇淋）* 比bingchiling（冰淇淋）， *诈bingchiling（炸冰淇淋）* 我最喜欢。所以现在是音乐时间，准备，1，2，3，食堂日当天， *C11档口* 有卖诈bingchiling（炸冰淇淋）……~ 食堂日当天，我要买诈bingchiling（炸冰淇淋）……~ 食堂日当天~，我要吃诈bingchiling（炸冰淇淋）~不要忘记，不要错过，去 *十大信条走廊* 买诈bingchiling（炸冰淇淋），因为非常甜品，口味非常好，差不多一样bingchiling（冰淇淋）。“',
    video: './poster/C11.webp'
  },
  {
    name: '桃气满满',
    venue: 'C12',
    category: '甜品',
    link: '',
    description:
      '当生活需要一丝甜蜜💕的点缀时，不妨来尝试我们精心推出的桃胶炖奶🥛及桃胶羹🥣。我们的甜品融合了浓郁的牛奶香气以及天然QQ弹弹的桃胶，让每一口都是舌尖上的惊喜👅。这款甜品绝对能够为您带来极致的满足感😎。\n\n选择桃胶炖奶与桃胶羹🍽️，体验天然与美味的完美邂逅🩵。让这份甜蜜💕成为您生活中的幸福时刻☺️！现在就来品尝我们的甜品吧‼️让美味为你的生活增添一抹亮色吧🤩🫧！\n\n心动💗不如行动🏃，期待与您🫵🏻在C12相遇🤩✨！',
    video: './poster/C12.webp'
  },
  {
    name: '特种“冰“',
    venue: 'C13',
    category: '甜品',
    link: '',
    description:
      '天气炎热，感觉疲惫不堪？感觉做任何事都提不起精神？那试试特种“冰”自制的冰条吧。把曾经的心掏空给你，冷冰冰的送给你。放松自己，解解热。包你凉爽，快乐乐。🧊🧊🧊',
    video: './poster/C13.webp'
  },
  {
    name: '绿得发慌/满江红',
    venue: 'C14',
    category: '甜品',
    link: '',
    description:
      '草莓的酸甜搭配可口的荔枝，再加上凉粉的滑嫩爽口的口感。让凉粉的魅力在舌尖绽放，为你带来无与伦比的全新体验，为这个夏天里的你留下难忘的回忆！！！！让抹茶的清香与奥利奥碎片的酥脆与凉粉在口中完美融合。每一口都是全新不同的清爽感，带给你前所未有的体验！',
    video: './poster/C14.webp'
  },
  {
    name: '霸王茶鸡',
    venue: 'D01',
    category: '饮料',
    link: '',
    description:
      '品味大自然的馈赠，畅享健康与美味\n亲爱的水果茶爱好者们：\n\n夏日炎炎，最好的消暑饮品莫过于一杯清爽的水果茶。当新鲜的水果遇上醇厚的茶香，那种沁人心脾的美妙体验，简直让人爱不释手。今天，我们向您隆重推荐——水果茶，一款将健康与美味完美融合的饮品。',
    video: './poster/D01.webp'
  },
  {
    name: 'Western Titanic',
    venue: 'D02',
    category: '饮料',
    link: '',
    description:
      '冰冷的汽水与丝滑的冰淇淋碰撞出独特的口感💥仿佛置身于西域的绿洲 享受一瞬间的清凉与甘甜😍\n\n让我们一起探秘西域，畅享“Titanic”奇饮吧🤩‼️',
    video: './poster/D02.webp'
  },
  {
    name: '水来舅舅蜗',
    venue: 'D03',
    category: '饮料',
    link: '',
    description: '晚安大小姐 烧石灰水来舅舅蜗',
    video: './poster/D03.webp'
  },
  {
    name: 'Lemonade',
    venue: 'D04',
    category: '饮料',
    link: '',
    description: '一口上头，人间清醒',
    video: './poster/D04.webp'
  },
  {
    name: '泰酷啦!',
    venue: 'D05',
    category: '饮料',
    link: '',
    description:
      'hot hot的day，炫一杯cold cold的泰式奶绿，保证你一天比一天更“酷毙”！拥有奶绿，告别绿绿！',
    video: './poster/D05.webp'
  },
  {
    name: 'Mr fufu',
    venue: 'D06',
    category: '饮料',
    link: '',
    description:
      '哥哥，我送你mr fufu！在这个炎热的夏日，百香果风味牛仔啤酒和黑加仑风味牛仔红酒为你带来了清凉解渴的美好时光。饮一口，品味无尽的自由与豪情！',
    video: './poster/D06.webp'
  },
  {
    name: 'Game Zone',
    venue: 'G01',
    category: '游戏',
    link: '',
    description:
      '不知道大家有没有机会和朋友聚在一起玩游戏？？？是因为没有时间？？？是因为太过繁忙？？是因为没有东西可玩？？？\n\nGame Zone给予你机会拥抱友谊\nGame Zone给予你友谊中的重要回忆\nGame Zone你值得拥有\n\n欢迎来到Game Zone，体验最前沿主机游戏设备PlayStation5，和同学朋友们畅玩爽快的Overcooked2！'
  }
]
const foodCount = ref(stores.filter((store) => store.category === '主食').length)
const snackCount = ref(stores.filter((store) => store.category === '小吃').length)
const drinkCount = ref(stores.filter((store) => store.category === '饮料').length)
const gameCount = ref(stores.filter((store) => store.category === '游戏').length)
const otherCount = ref(stores.filter((store) => store.category === '甜品').length)

const currentPage = ref('主食')
const currentShowing = ref(stores.filter((store) => store.category === currentPage.value))
const changeCurrentPage = (category) => {
  currentPage.value = category
  currentShowing.value = stores.filter((store) => store.category === currentPage.value)
}
</script>
<template>
  <div class="max-w-screen-xl px-2 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24" id="stores">
    <div class="max-w-6xl mx-auto sm:text-left text-center" data-aos="fade-up">
      <h1 class="text-5xl font-extrabold leading-tight tracking-tight text-gray-900">摊位</h1>
      <h1
        class="mb-4 text-2xl sm:text-left tracking-tight font-extrabold text-gray-900 text-center"
      >
        Stores
      </h1>
    </div>

    <div class="flow-root max-w-6xl lg:px-0 mx-auto mt-8 sm:mt-12 lg:mt-16">
      <!-- Breadcrumb -->
      <nav
        data-aos="fade-up"
        class="flex justify-center px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50/40"
        aria-label="Breadcrumb"
      >
        <ol class="inline-flex items-center space-x-0 md:space-x-16 rtl:space-x-reverse">
          <li
            class="inline-flex items-center text-center p-2 rounded-lg"
            @click="changeCurrentPage('主食')"
            :class="
              currentPage == '主食'
                ? 'bg-pink-200 animate-fadeIn'
                : 'hover:scale-[1.1] ease-in-out transition'
            "
          >
            <i class="bx bx-bowl-rice"></i>
            <span class="ms-1 text-xl font-medium text-gray-500 md:ms-2">主食 {{ foodCount }}</span>
          </li>
          <li
            class="inline-flex items-center text-center p-2 rounded-lg"
            @click="changeCurrentPage('小吃')"
            :class="
              currentPage == '小吃'
                ? 'bg-pink-200 animate-fadeIn'
                : 'hover:scale-[1.1] ease-in-out transition'
            "
          >
            <i class="bx bx-bowl-rice"></i>
            <span class="ms-1 text-xl font-medium text-gray-500 md:ms-2"
              >小吃 {{ snackCount }}</span
            >
          </li>
          <li>
            <div
              class="flex items-center text-center p-2 rounded-lg"
              @click="changeCurrentPage('饮料')"
              :class="
                currentPage == '饮料'
                  ? 'bg-pink-200 animate-fadeIn'
                  : 'hover:scale-[1.1] ease-in-out transition'
              "
            >
              <i class="bx bx-drink"></i>
              <span class="ms-1 text-xl font-medium text-gray-500 md:ms-2"
                >饮料 {{ drinkCount }}</span
              >
            </div>
          </li>
          <li>
            <div
              class="flex items-center text-center p-2 rounded-lg"
              @click="changeCurrentPage('甜品')"
              :class="
                currentPage == '甜品'
                  ? 'bg-pink-200 animate-fadeIn'
                  : 'hover:scale-[1.1] ease-in-out transition'
              "
            >
              <i class="bx bx-layer"></i>
              <span class="ms-1 text-xl font-medium text-gray-500 md:ms-2"
                >甜品 {{ otherCount }}</span
              >
            </div>
          </li>
        </ol>
      </nav>

      <div class="-my-4 divide-y divide-gray-200" data-aos="zoom-in">
        <ul
          class="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-y-10 gap-x-6 items-start py-8 lg:px-0 px-4"
        >
          <li
            class="relative flex flex-col sm:flex-row xl:flex-col items-start animate-[fadeIn_2s_ease] bg-slate-200 py-8 px-6 rounded-lg"
            v-for="item in currentShowing"
          >
            <div class="order-1 sm:ml-6 xl:ml-0">
              <h2 class="mb-1 text-slate-900 text-xl font-semibold">
                <span class="mb-1 block text-2xl leading-6 text-indigo-500">{{ item.name }}</span
                ><a href="#map">{{ item.venue }}</a>
              </h2>
              <div class="prose prose-slate prose-sm text-lg text-slate-600">
                <p>
                  {{
                    item.description.length > 100
                      ? `${item.description.slice(0, -(item.description.length - 100))}...`
                      : item.description
                  }}
                </p>
              </div>
              <a
                v-if="item.link"
                class="group inline-flex items-center h-9 rounded-full text-lg font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                href="#"
                >关注本摊<svg
                  class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
                ></a
              >
            </div>
            <img
              class="mb-6 rounded-lg w-full sm:w-[10rem] sm:mb-0 xl:mb-6 xl:w-full"
              width="200"
              height="100"
              :src="item.video"
              :key="item.video"
              title="Store Poster"
              loading="lazy"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
