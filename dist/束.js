!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){var r=n(1);"string"==typeof r&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1};n(3)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,'body{font-size:1.5vw;line-height:2.0;text-shadow:1px 1px 0.25vw #FFF, -1px -1px 0.25vw #FFF;text-align:center;overflow-x:hidden;background:None !important}#bg{position:fixed;background:url("https://synthetic.librian.it/紙背景花紋.webp");background-color:#dec6a1;background-size:cover;background-position:fixed;top:0;left:0;width:100%;height:100%;margin:0;padding:0;z-index:-999}#全{margin:0 4vw}a{text-decoration:none}a.synth{padding:0px 1.6vw;font-size:125%}hr.synth{margin:3.6vw 0}h1{font-size:340%;font-weight:normal}h2{font-size:150%;font-weight:normal;margin-block-start:0.4em}header{text-align:left;height:3vw}header.synth{justify-content:space-between;align-items:stretch}header>div a{border-left:1px solid rgba(0,0,0,0.2);color:inherit;padding:0vw 1vw;font-size:80%;transition:text-shadow 0.3s}header>div a:hover{transition:text-shadow 0.1s;text-shadow:1px 1px 0.25vw #DDF, -1px -1px 0.25vw #DDF}#語言選擇{display:inline-flex;flex-direction:column;align-items:center}#語言選擇>button{visibility:hidden;opacity:0;transition:visibility 0s 0.75s, opacity 0.75s linear;font-size:80%}#語言選擇:hover>button{visibility:visible;opacity:1;transition:opacity 0.25s}.分,.二分{display:flex;justify-content:space-between}.二分>*:first-child{width:49%}.二分>*:last-child{width:49%}.星{transition:filter 1.2s}.星:hover{filter:brightness(1.1);transition:filter 0.2s}.pagename{display:inline-block;margin-left:1vw}.太陽交換{display:inline-block}.太陽交換>.a{position:relative;transition:left 0.2s, opacity 0.2s;left:0vw}.太陽交換:hover>.a{opacity:0;left:-0.5vw}.太陽交換>.b{position:absolute;transform:translateX(-50%) scale(1.6);left:50%;opacity:0;width:100%}.太陽交換:hover>.b{display:block;opacity:1;transform:translateX(-50%) scale(1);transition:opacity 0.2s, transform 0.2s}.頭像{width:1em;height:1em;border-radius:50%;box-shadow:0px 0px 0.3vw #FFF}.頭圖{position:absolute;top:4vw;width:30%;z-index:-1;transform:translateX(-50%);opacity:0.8;mix-blend-mode:multiply}.極{box-shadow:0px 0px 0.5vw rgba(0,0,0,0.5);border-radius:1vw}.視頻容器{display:flex;justify-content:center}.視頻容器 video{box-shadow:0px 0px 1.5vw rgba(0,0,0,0.5);transition:box-shadow 0.5s}.視頻容器 video:hover{box-shadow:0px 0px 1vw rgba(0,0,0,0.5)}.視頻容器 .vjs-fullscreen{background:url("https://synthetic.librian.it/紙背景花紋.webp");background-color:#dec6a1;background-size:cover;background-position:fixed}\n',""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),o=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")}));return[n].concat(o).concat([i]).join("\n")}var a,s,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var a=0;a<t.length;a++){var s=t[a];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),e.push(s))}},e}},function(t,e,n){"use strict";var r,i={},o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function s(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function c(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id],a=0;if(o){for(o.refs++;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(g(r.parts[a],e))}else{for(var s=[];a<r.parts.length;a++)s.push(g(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function l(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var r=n.nc;r&&(t.attributes.nonce=r)}if(Object.keys(t.attributes).forEach((function(n){e.setAttribute(n,t.attributes[n])})),"function"==typeof t.insert)t.insert(e);else{var i=a(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var f,u=(f=[],function(t,e){return f[t]=e,f.filter(Boolean).join("\n")});function d(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=u(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function p(t,e,n){var r=n.css,i=n.media,o=n.sourceMap;if(i&&t.setAttribute("media",i),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,v=0;function g(t,e){var n,r,i;if(e.singleton){var o=v++;n=h||(h=l(e)),r=d.bind(null,n,o,!1),i=d.bind(null,n,o,!0)}else n=l(e),r=p.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=s(t,e);return c(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o],l=i[a.id];l&&(l.refs--,r.push(l))}t&&c(s(t,e),e);for(var f=0;f<r.length;f++){var u=r[f];if(0===u.refs){for(var d=0;d<u.parts.length;d++)u.parts[d]();delete i[u.id]}}}}},function(t,e,n){"use strict";n.r(e);var r=function(t){return function(){var t="锕爱碍蔼皑剀嗳嫒暧瑷硙锿阂霭叆埯谙钳铵阴顸鹌腌袄奥翱嚣媪岙浇硗骜鳌罢坝钯鲅鲌摆败呗办颁绊坂辩钣帮绑镑谤岗纺报饱宝剥鲍鸨龅备贝辈钡狈惫鹎贲绷镚笔闭毕币毙哔复滗筚纰荜虑诐费赑跸铋闬鲾边变编贬辫拼笾缏鳊标镖镳飑飙骠骉鳔别鳖瘪别鳖濒宾摈滨频傧殡缤膑髌鬓并饼槟禀绠拨驳钵铂卜泼发袯钹镈饽馎鹁补扑钚钸碜财蚕残掺参惨惭灿戋浅骖鲹黪仓沧舱苍伧玱鸧艹册侧测厕帻恻栅层缯诧钗锸镲馇侪虿龇单产缠搀阐颤铲谗蝉馋刬啴冁团婵崭惮忏掸浐渐产禅胀蒇裣觇谄谶长场厂尝肠畅偿伥傥尝怅枨玚苌锠阊鲳鲿绰钞唠涛绉诌鼌车彻砗称尘沉陈衬栈榇渖谌闯龀撑诚惩骋枪柽蛏赪铛迟痴齿耻驰炽啸扦抬滞离饬鸱冲虫宠佣桩烛种冲铳丑绸筹踌畴俦帱梼诪雠处锄触橱础储厨雏憷恹绌刍诎诸蹰传创疮怆戗锤邮纯莼辁鹑缀辍镞龊词辞赐兹荠鹚从丛葱聪囱枞纵总苁骢凑薮辏窜蹿攒撺镩缞错营躜锉鹾达哒垯胆荙跶迭鞑带贷绐诒轪递隶叇骀驮担弹诞郸坛殚瘅箪赡当党挡档荡垱凼烫珰疡砀筜裆谠岛盗捣导祷焘鱽灯邓镫敌缔涤籴约莜觌诋谛适镝题点电淀颠垫巅癫钿钓调鸟粜赵轺铞鲷鸼叠谍绖轶鲽鳎钉顶订锭铤饤丢铥动东冻栋岽胨鸫斗读渎窦钭饾独镀赌犊枢椟牍笃锗阇黩断锻缎簖对队兑怼镦吨顿钝炖趸夺堕亸椭泽缍铎饳饿额鹅讹恶疴哑垭垩桠猡谔轭锇锷阏颚鳄鹗腭贰儿饵尔迩铒鲕鸸罚阀珐废酦饭烦贩范矾钒枫沨访钫鲂鳑飞诽绋绯鲱坟奋愤纷粪偾喷豮鲼风缝丰疯冯讽凤锋沣砜赗负缚赋辅妇抚辐肤讣呒绂幞赙锫韨驸鲋鳆凫麸轧夹钆该盖钙赅赶干赣秆尴绀鳡刚钢纲冈戆沟颃镐皋藁缟诰锆个搁阁鸽铬纥钾铪镉闸颌鲄给颈亘赓鲠鹒宫贡巩龚红唝够钩购构区缑觏诟钩鞴鸲顾蛊贾哌谷诂轱毂钴锢馉鲴鸪鹄鹘剐呙挂诖铦鸹哙关观馆惯贯纶掼权沦鳏鹳广扩横犷归贵轨规硅柜龟诡闺刽伪伪刿匦匮妫桧洼绘鲑鳜滚辊浑绲衮锟鲧过国锅涡划埚帼掴椁腘蜗蝈锞馃虾吓为还骇颏汉韩滩钤阚颔绗号灏胶蚝颢贺鹤呵缴蝎诃辂辖阖饸阋鹖龁鸻轰鸿纮荭讧闳闹黉后糇鲘鲎户壶护沪戏浒芦许轷鳠鹕鹱话画华哗婳桦浍狯铧骅坏怀换唤环缓欢涣焕痪奂缳锾镮阛鲩黄谎锽鳇会挥汇辉毁秽贿讳烩诲咴哕晖炜珲缋翚翙荟袆诙违阓韦颒溃荤愍缗诨阍馄伙货获祸钬镬几机鸡积记级极计挤纪际绩缉饥蓟辑剂济齐继击讥叽哜洁玑矶秸结羁蕲虮蚁觊讦迹跻霁骑骥鱾鲫鲚鹡赍齑价驾荚颊挟槚浃蛱郏铗颉见减间键贱检简歼监坚艰荐剑溅涧鉴践捡笺俭碱硷拣舰槛缄茧饯堑戬枧滥睑笕缣纤裥谏谮谫钘钱锏闲险鞯骞鳒鲣鹣咸将讲奖浆酱蒋强桨绛姜螀缰鳉脚较觉娇绞搅骄矫轿饺铰侥乔侨却学峤挢桥纠荞鲛鹪节届阶杰诫疖诘锴鲒进仅紧尽劲锦晋谨烬尽卺浕琎缙荩觐赆锓馑静惊经镜净竞径荆鲸茎痉刭弪泾烃胫迳陉靓颕垧滢荧颎蓥旧厩缪阄鸠鹫举锯剧惧驹据鉅屦榉窭篓蒌讵邹锔飓鲏龃鹃绢桊锩镌隽决绝诀珏谲镢阕阙鞒骙军骏钧匀皲馂鲪开凯垲恺忾岂铠锎闿莶馅龛钪闶铐鲓颗课壳缂轲钶骒恳垦龈硁铿抠妪殴眍库裤喾圣绔夸块侩脍蒉郐鲙宽髋矿况旷圹纩诓诳贶邝亏窥馈岿愦篑聩顷壸裈阃鲲鹍阔蜡腊蓝癞镴来赖莱厉崃徕懒梾涞濑睐籁赉铼兰烂拦篮栏揽缆阑谰澜览岚廪斓榄炼褴襕镧锒阆捞劳涝络崂痨耢铑铹乐饹鳓类泪垒镭缧颣诔里礼历丽砾沥鲤励篱俪呖坜栎枥泺洒牦疠砺粝缡莅苈蓠蚀蛎里跞轹逦郦酾锂铄雳飒骊疬鳢鲡鹂俩连联练莲恋脸链敛怜帘镰涟奁娈挛殓潋琏蔹裢鲢两辆凉粮谅唡蹒辌魉疗辽镣缭钌镠鹩猎临邻鳞赁凛懔檩渗蔺躏辚领铃灵岭龄凌棂绫鲮鸰陆刘馏偻游浏绺铆锍镏飗骝鹠鹨龙拢笼聋垄咙陇咔昽胧栊泷珑眬砻茏庞楼搂娄喽嵝溇瘘耧蝼镂髅录炉卢鲁卤颅庐掳绿虏赂禄噜垆撸摅橹栌氇渌滤泸箓胪舻辘轳镥鲈鹭鸬乱滦峦孪栾脔銮鸾药锊论轮抡伦仑囵罗锣骡箩萝骆逻啰椤烁荦脶镙驴闾榈吕侣铝屡缕褛稆吗妈马骂码玛蚂么么唛嬷杩犸蓦买卖迈麦脉劢荬满瞒蛮馒谩缦螨颟鳗鹲猫贸锚没务没镁霉谜鹛门们闷懑扪焖钔梦锰黾觅弥幂纟沵猕祢芈谧绵缅渑腼面庙纱缈鹋灭闽悯珉闵鳘鸣铭谬万殁无袜谟镆馍谋亩钼纳钠内镎难摊哝馕闹脑恼挠垴桡蛲铙讷馁拟腻泞滠鲵捻撵辇辗鲇酿袅茑镍聂镊啮嗫摄谂蹑陧颞宁拧柠狞咛宁聍苎纽钮浓农脓侬秾驽疟诺傩钕呕欧鸥沤怄瓯纡讴盘丬抛疱狍赔辔鹏苹罴铍骗谝骈飘朴缥贫嫔颦凭评鲆颇钋钷铺谱镤镨气启弃凄栖脐讫启桤渍碛绮蛴锜颀骐鲯鳍牵签铅钎迁谴谦潜佥悭椠缱羟肷荨鹐墙抢呛蔷嫱庆樯炝襁亲跄锖锵镪翘锹窍硚窑缲诮谯跷铫窃惬箧锲寝钦吣嵚揿骎请轻氢倾庼苘鲭穷琼茕巯虬赇鳅趋驱躯龋岖组觑阒驺劝颧绻诠铨鳈确鹊悫让镶饶绕扰娆荛热认韧纫纴讱轫饪驲绒荣镕嵘缛蝾颂铷颥软锐绥润闰萨杀钑赛鳃伞毵糁馓丧颡扫骚缫鳋涩啬穑铯厦赊鲨晒筛术闪删陕缮姗讪钐骟鳝鳣伤赏汤殇绱觞烧绍绡设慑畲厍叶谁婶肾审绅瘆诜声绳胜时师试识驶势释饰狮视实湿诗尸嘘埘浉绎莳谥贳轼铈铊鲺鲥鸤兽寿绶书树数输属赎竖纾纻镯鹬帅闩双骦鹴税说顺硕丝饲咝厮缌蛳锶飔饴驷鸶耸诵怂讼松擞锼飕馊诉苏肃缩稣谡骕鹔岁随虽谇孙损笋狲荪锁琐唢牺献獭挞沓阘闼态钛鲐谈叹贪瘫谭昙赕钽锬镗铴饧讨绦绦绹鼗韬职铽腾誊体锑屉绨缇跃锡鳀鹈觍阗条鲦龆铁贴听厅颋铜统恸鲖头绣谕图涂秃钍专抟砖颓蜕脱饨鲀驼鸵箨萚饦鼍娲污腽弯湾顽塆纨绾苋网辋为围伟卫维谓潍纬苇遗帏沩涠玮猬诿闱韪喂鲔鳂问闻稳温纹愠缊蕴辒阌韫鳁瓮鹟窝卧挝癯莴龌雾误钨呜吴乌诬芜坞于妩庑御怃邬铻骛鹀鹉鹜龉细袭习铣系屃玺绤胁觋诶郄饻饩鳛峡狭侠煅硖线县现显闲鲜衔锨贤宪羡娴岘崄挦猃狝痫籼藓蚬跹轩鹇项响乡厢详缃芗饷飨骧鲞销萧晓哓枭泶潇箫蟏骁鸮写谢泻协谐携撷绁缬亵锌寻衅兴慭镡荥铏骍汹讻诇锈馐鸺须虚续叙绪吁溆诩谞顼选悬绚癣碹璇谖铉镟馔峃嚯鳕讯训驯逊勋询埙浔鲟压鸭亚鸦讶厌娅挜札氩痖烟盐严验艳阉砚彦谚颜阎俨兖厣滟檐觃讠谳赝这酽闫靥颜餍魇黡鼹龂样养扬痒杨阳鸯旸炀锳钖飏摇谣遥瑶尧钥峣犹飖鳐鹞业爷页晔烨谒邺铘余馌亿医仪异译彝谊艺颐忆义诣议铱勚呓峄怿择瘗祎缢舣贻钇镒镱驿鹢鹝鹥银饮隐荫瘾铟骃应蝇赢鹰颖莹婴樱缨萤嘤茔撄颍潆璎瘿绬萦罂鸴莺鹦哟涌拥咏踊痈镛颙鲬鳙优铀忧诱莸铕鱿鲉与鱼语狱渔誉娱舆屿预驭俣伛嵛欤滪玙蓣觎谀钰阈饫郁鹆远员圆愿园缘渊鸳辕橼贠陨鸢鹓鼋阅岳悦粤彟钺云运晕韵酝郧恽殒氲涢纭赟郓杂扎臜灾载暂赞瓒赞趱錾脏赃脏驵灶枣凿唣则责啧箦谪赜贼鲗赠综锃诈铡咤揸鲊鲝齄债斋战盏毡绽斩谵飐骣鹯张帐涨账诏钊蛰辙詟辄鹧鸷阵镇针诊贞侦桢浈祯纼缜赈轸鸩帧睁争挣证郑狰峥筝诤钲铮纸质帜织执挚掷栀栉絷制觯志贽跖踯踬轵轾铚只骘钟肿众终冢众钟皱轴昼骤纣荮诹赒辀猪筑贮铸嘱驻瞩诛伫槠橥潴铢转赚啭颛装庄壮状妆坠锥赘缒骓谆准浊诼资咨眦缁谘赀辎锱镃鲻踪偬骔鲰诅钻缵鳟",e="錒愛礙藹皚剴噯嬡曖璦磑鎄閡靄靉垵諳鉗銨陰頇鵪醃襖奧翺囂媼嶴澆磽驁鼇罷壩鈀鮁鮊擺敗唄辦頒絆阪辯鈑幫綁鎊謗崗紡報飽寶剝鮑鴇齙備貝輩鋇狽憊鵯賁繃鏰筆閉畢幣斃嗶複潷篳紕蓽慮詖費贔蹕鉍閈鰏邊變編貶辮拚籩緶鯿標鏢鑣颮飆驃驫鰾別鼈癟彆鱉瀕賓擯濱頻儐殯繽臏髕鬢並餅檳稟綆撥駁缽鉑蔔潑發襏鈸鎛餑餺鵓補撲鈈鈽磣財蠶殘摻參慘慚燦戔淺驂鯵黲倉滄艙蒼傖瑲鶬艸冊側測廁幘惻柵層繒詫釵鍤鑔餷儕蠆齜單産纏攙闡顫鏟讒蟬饞剗嘽囅團嬋嶄憚懺撣滻漸產禪脹蕆襝覘諂讖長場廠嘗腸暢償倀儻嚐悵棖瑒萇錩閶鯧鱨綽鈔嘮濤縐謅鼂車徹硨稱塵沈陳襯棧櫬瀋諶闖齔撐誠懲騁槍檉蟶赬鐺遲癡齒恥馳熾嘯扡擡滯離飭鴟沖蟲寵傭樁燭種衝銃醜綢籌躊疇儔幬檮譸讎處鋤觸櫥礎儲廚雛怵懨絀芻詘諸躕傳創瘡愴戧錘郵純蓴輇鶉綴輟鏃齪詞辭賜茲薺鶿從叢蔥聰囪樅縱總蓯驄湊藪輳竄躥攢攛鑹縗錯營躦銼鹺達噠墶膽薘躂叠韃帶貸紿詒軑遞隸靆駘馱擔彈誕鄲壇殫癉簞贍當黨擋檔蕩壋氹燙璫瘍碭簹襠讜島盜搗導禱燾魛燈鄧鐙敵締滌糴約蓧覿詆諦適鏑題點電澱顛墊巔癲鈿釣調鳥糶趙軺銱鯛鵃疊諜絰軼鰈鰨釘頂訂錠鋌飣丟銩動東凍棟崠腖鶇鬥讀瀆竇鈄餖獨鍍賭犢樞櫝牘篤鍺闍黷斷鍛緞籪對隊兌懟鐓噸頓鈍燉躉奪墮嚲橢澤綞鐸飿餓額鵝訛惡屙啞埡堊椏玀諤軛鋨鍔閼顎鱷鶚齶貳兒餌爾邇鉺鮞鴯罰閥琺廢醱飯煩販範礬釩楓渢訪鈁魴鰟飛誹紼緋鯡墳奮憤紛糞僨噴豶鱝風縫豐瘋馮諷鳳鋒灃碸賵負縛賦輔婦撫輻膚訃嘸紱襆賻錇韍駙鮒鰒鳧麩軋夾釓該蓋鈣賅趕幹贛稈尷紺鱤剛鋼綱岡戇溝頏鎬臯槁縞誥鋯個擱閣鴿鉻紇鉀鉿鎘閘頜魺給頸亙賡鯁鶊宮貢鞏龔紅嗊夠鈎購構區緱覯詬鉤韝鴝顧蠱賈呱穀詁軲轂鈷錮餶鯝鴣鵠鶻剮咼掛詿銛鴰噲關觀館慣貫綸摜權淪鰥鸛廣擴橫獷歸貴軌規矽櫃龜詭閨劊僞偽劌匭匱媯檜窪繪鮭鱖滾輥渾緄袞錕鯀過國鍋渦劃堝幗摑槨膕蝸蟈錁餜蝦嚇為還駭頦漢韓灘鈐闞頷絎號灝膠蠔顥賀鶴嗬繳蠍訶輅轄闔餄鬩鶡齕鴴轟鴻紘葒訌閎鬨黌後餱鮜鱟戶壺護滬戲滸蘆許軤鱯鶘鸌話畫華嘩嫿樺澮獪鏵驊壞懷換喚環緩歡渙煥瘓奐繯鍰鐶闤鯇黃謊鍠鰉會揮匯輝毀穢賄諱燴誨噅噦暉煒琿繢翬翽薈褘詼違闠韋頮潰葷湣緡諢閽餛夥貨獲禍鈥鑊幾機雞積記級極計擠紀際績緝饑薊輯劑濟齊繼擊譏嘰嚌潔璣磯稭結羈蘄蟣蟻覬訐跡躋霽騎驥魢鯽鱭鶺齎齏價駕莢頰挾檟浹蛺郟鋏頡見減間鍵賤檢簡殲監堅艱薦劍濺澗鑒踐撿箋儉堿鹼揀艦檻緘繭餞塹戩梘濫瞼筧縑纖襇諫譖譾鈃錢鐧閒險韉騫鰜鰹鶼鹹將講獎漿醬蔣強槳絳薑螿韁鱂腳較覺嬌絞攪驕矯轎餃鉸僥喬僑卻學嶠撟橋糾蕎鮫鷦節屆階傑誡癤詰鍇鮚進僅緊盡勁錦晉謹燼儘巹濜璡縉藎覲贐鋟饉靜驚經鏡淨競徑荊鯨莖痙剄弳涇烴脛逕陘靚頴坰瀅熒熲鎣舊廄繆鬮鳩鷲舉鋸劇懼駒據钜屨櫸窶簍蔞詎鄒鋦颶鮍齟鵑絹棬錈鐫雋決絕訣玨譎钁闋闕鞽騤軍駿鈞勻皸餕鮶開凱塏愷愾豈鎧鐦闓薟餡龕鈧閌銬鮳顆課殼緙軻鈳騍懇墾齦硜鏗摳嫗毆瞘庫褲嚳聖絝誇塊儈膾蕢鄶鱠寬髖礦況曠壙纊誆誑貺鄺虧窺饋巋憒簣聵頃壼褌閫鯤鶤闊蠟臘藍癩鑞來賴萊厲崍徠懶棶淶瀨睞籟賚錸蘭爛攔籃欄攬纜闌讕瀾覽嵐廩斕欖煉襤襴鑭鋃閬撈勞澇絡嶗癆耮銠鐒樂餎鰳類淚壘鐳縲纇誄裏禮曆麗礫瀝鯉勵籬儷嚦壢櫟櫪濼灑犛癘礪糲縭蒞藶蘺蝕蠣裡躒轢邐酈釃鋰鑠靂颯驪鬁鱧鱺鸝倆連聯練蓮戀臉鏈斂憐簾鐮漣奩孌攣殮瀲璉蘞褳鰱兩輛涼糧諒啢蹣輬魎療遼鐐繚釕鏐鷯獵臨鄰鱗賃凜懍檁滲藺躪轔領鈴靈嶺齡淩欞綾鯪鴒陸劉餾僂遊瀏綹鉚鋶鎦飀騮鶹鷚龍攏籠聾壟嚨隴哢曨朧櫳瀧瓏矓礱蘢龐樓摟婁嘍嶁漊瘺耬螻鏤髏錄爐盧魯鹵顱廬擄綠虜賂祿嚕壚擼攄櫓櫨氌淥濾瀘籙臚艫轆轤鑥鱸鷺鸕亂灤巒孿欒臠鑾鸞藥鋝論輪掄倫侖圇羅鑼騾籮蘿駱邏囉欏爍犖腡鏍驢閭櫚呂侶鋁屢縷褸穭嗎媽馬罵碼瑪螞麼麽嘜嬤榪獁驀買賣邁麥脈勱蕒滿瞞蠻饅謾縵蟎顢鰻鸏貓貿錨冇務沒鎂黴謎鶥門們悶懣捫燜鍆夢錳黽覓彌冪糸濔獼禰羋謐綿緬澠靦麵廟紗緲鶓滅閩憫瑉閔鰵鳴銘謬萬歿無襪謨鏌饃謀畝鉬納鈉內鎿難攤噥饢鬧腦惱撓堖橈蟯鐃訥餒擬膩濘灄鯢撚攆輦輾鯰釀嫋蔦鎳聶鑷齧囁攝諗躡隉顳甯擰檸獰嚀寧聹苧紐鈕濃農膿儂穠駑瘧諾儺釹嘔歐鷗漚慪甌紆謳盤爿拋皰麅賠轡鵬蘋羆鈹騙諞駢飄樸縹貧嬪顰憑評鮃頗釙鉕鋪譜鏷鐠氣啓棄淒棲臍訖啟榿漬磧綺蠐錡頎騏鯕鰭牽簽鉛釺遷譴謙潛僉慳槧繾羥膁蕁鵮牆搶嗆薔嬙慶檣熗繈親蹌錆鏘鏹翹鍬竅礄窯繰誚譙蹺銚竊愜篋鍥寢欽唚嶔撳駸請輕氫傾廎檾鯖窮瓊煢巰虯賕鰍趨驅軀齲嶇組覷闃騶勸顴綣詮銓鰁確鵲愨讓鑲饒繞擾嬈蕘熱認韌紉紝訒軔飪馹絨榮鎔嶸縟蠑頌銣顬軟銳綏潤閏薩殺鈒賽鰓傘毿糝饊喪顙掃騷繅鰠澀嗇穡銫廈賒鯊曬篩術閃刪陝繕姍訕釤騸鱔鱣傷賞湯殤緔觴燒紹綃設懾佘厙葉誰嬸腎審紳瘮詵聲繩勝時師試識駛勢釋飾獅視實濕詩屍噓塒溮繹蒔諡貰軾鈰鉈鯴鰣鳲獸壽綬書樹數輸屬贖豎紓紵鐲鷸帥閂雙驦鸘稅說順碩絲飼噝廝緦螄鍶颸飴駟鷥聳誦慫訟鬆擻鎪颼餿訴蘇肅縮穌謖驌鷫歲隨雖誶孫損筍猻蓀鎖瑣嗩犧獻獺撻遝闒闥態鈦鮐談歎貪癱譚曇賧鉭錟鏜鐋餳討縧絛綯鞀韜職鋱騰謄體銻屜綈緹躍錫鯷鵜覥闐條鰷齠鐵貼聽廳頲銅統慟鮦頭繡諭圖塗禿釷專摶磚頹蛻脫飩魨駝鴕籜蘀飥鼉媧汙膃彎灣頑壪紈綰莧網輞爲圍偉衛維謂濰緯葦遺幃溈潿瑋蝟諉闈韙餵鮪鰃問聞穩溫紋慍縕蘊轀閿韞鰮甕鶲窩臥撾臒萵齷霧誤鎢嗚吳烏誣蕪塢於嫵廡禦憮鄔鋙騖鵐鵡鶩齬細襲習銑係屭璽綌脅覡誒郤餏餼鰼峽狹俠煆硤線縣現顯閑鮮銜鍁賢憲羨嫻峴嶮撏獫獮癇秈蘚蜆躚軒鷳項響鄉廂詳緗薌餉饗驤鯗銷蕭曉嘵梟澩瀟簫蠨驍鴞寫謝瀉協諧攜擷絏纈褻鋅尋釁興憖鐔滎鉶騂洶訩詗鏽饈鵂須虛續敘緒籲漵詡諝頊選懸絢癬镟璿諼鉉鏇饌嶨謔鱈訊訓馴遜勳詢塤潯鱘壓鴨亞鴉訝厭婭掗劄氬瘂煙鹽嚴驗豔閹硯彥諺顔閻儼兗厴灩簷覎訁讞贗這釅閆靨顏饜魘黶鼴齗樣養揚癢楊陽鴦暘煬鍈鍚颺搖謠遙瑤堯鑰嶢猶颻鰩鷂業爺頁曄燁謁鄴鋣餘饁億醫儀異譯彜誼藝頤憶義詣議銥勩囈嶧懌擇瘞禕縊艤貽釔鎰鐿驛鷁鷊鷖銀飲隱蔭癮銦駰應蠅贏鷹穎瑩嬰櫻纓螢嚶塋攖潁瀠瓔癭緓縈罌鴬鶯鸚喲湧擁詠踴癰鏞顒鯒鱅優鈾憂誘蕕銪魷鮋與魚語獄漁譽娛輿嶼預馭俁傴崳歟澦璵蕷覦諛鈺閾飫鬱鵒遠員圓願園緣淵鴛轅櫞貟隕鳶鵷黿閱嶽悅粵彠鉞雲運暈韻醞鄖惲殞氳溳紜贇鄆雜紮臢災載暫贊瓚讚趲鏨髒贓臟駔竈棗鑿唕則責嘖簀謫賾賊鰂贈綜鋥詐鍘吒摣鮓鮺齇債齋戰盞氈綻斬譫颭驏鸇張帳漲賬詔釗蟄轍讋輒鷓鷙陣鎮針診貞偵楨湞禎紖縝賑軫鴆幀睜爭掙證鄭猙崢箏諍鉦錚紙質幟織執摯擲梔櫛縶製觶誌贄蹠躑躓軹輊銍隻騭鍾腫衆終塚眾鐘皺軸晝驟紂葤諏賙輈豬築貯鑄囑駐矚誅佇櫧櫫瀦銖轉賺囀顓裝莊壯狀妝墜錐贅縋騅諄準濁諑資谘眥緇諮貲輜錙鎡鯔蹤傯騌鯫詛鑽纘鱒";t+="历布占恒致征折向舍千累困肮板表采杆琅狸刹台凶岩症注着锛镔铖钏镄擀睾镓钜镘麽铌鲶铩谑芸锺垅吒彷馀宁槔飚溜锘锝锪镅曲",e+="歷佈佔恆緻徵摺嚮捨仟纍睏骯闆錶採桿瑯貍剎臺兇巖癥註著錛鑌鋮釧鐨搟睪鎵鉅鏝麼鈮鯰鎩謔蕓鍾壠咤徬餘寧橰飈霤鍩鍀鍃鎇麯";var n={"干涸":"乾涸","计划":"計畫","台风":"颱风","度假":"渡假","头发":"頭髮","通奸":"通姦","强奸":"强姦","激荡":"激盪","复苏":"復甦"},r=["皇后","王后"],i={},o={"圜":"圆","溼":"湿","鋂":"镅","甯":"宁","妳":"你","喦":"岩","襬":"摆","滷":"卤","儘":"尽","噹":"当","彙":"汇","滙":"汇","檯":"台","鞦":"秋","鐘":"钟","曏":"向","糰":"团","罎":"坛","颳":"刮","閤":"合","鬍":"胡","迴":"回","穫":"获","纔":"才","纏":"缠","鹸":"硷","髒":"脏","藉":"借","衝":"冲","齣":"出","鼕":"冬","復":"复","傢":"家","捲":"卷","剋":"克","瞭":"了","矇":"蒙","濛":"蒙","懞":"蒙","衊":"蔑","闢":"辟","僕":"仆","韆":"千","繫":"系","鏇":"旋","祗":"只","衹":"只","硃":"朱","埰":"采"};return function(a){var s={type:"simplified",str:"",language:""};for(var c in a)s[c]=a[c];var l,f,u="",d={};if("traditional"==s.type){for(var p in l=t,f=e,n)s.str=s.str.replace(p,n[p]);if("zh_TW"==s.language)for(var p in i)s.str.indexOf(p)>-1&&(s.str=s.str.replace(new RegExp(p,"g"),i[p]))}else{for(var p in l=e,f=t,n)s.str.indexOf(n[p])>-1&&(s.str=s.str.replace(new RegExp(n[p],"g"),p));for(p in o)s.str.indexOf(p)>-1&&(s.str=s.str.replace(new RegExp(p,"g"),o[p]))}p=0;for(var h=s.str.length;p<h;p++){for(var v=!1,g=s.str[p],b=0;b<r.length;b++){var y;if(p>=(y=s.str.indexOf(r[b]))&&p<y+r[b].length-1){g=r[b],v=!0;break}}if(!v)if(d[g])g=d[g];else(y=l.indexOf(g))>-1&&(g=d[g]=f[y]);u+=g,p+=g.length-1}if("simplified"==s.type&&"zh_TW"==s.language)for(var p in i)u.indexOf(i[p])>-1&&(u=u.replace(new RegExp(i[p],"g"),p));return u}}()({str:t})};n(0);window.onload=function(){var t,e,n,i,o;for(n=0,i=(t=$("#全, #全 *").contents().filter((function(){return 3===this.nodeType}))).length;n<i;n++)o=(e=t[n]).nodeValue,e=$(e),/^([\x00-\x7f])*$/.test(o)||(e.after(`<span class='lang--cht'>${o}</span>`),e.after(`<span class='lang--chs'>${r(o)}</span>`),e.remove());return $(".lang--cht").css("display",""),$(".lang--chs").css("display","none"),$("#用--cht").click((function(){return $(".lang--cht").css("display",""),$(".lang--chs").css("display","none")})),$("#用--chs").click((function(){return $(".lang--cht").css("display","none"),$(".lang--chs").css("display","")}))}}]);