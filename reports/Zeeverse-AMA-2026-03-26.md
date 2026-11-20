# Zeeverse AMA 深度总结｜2026-03-26

2026 年 3 月 26 日｜Community Call｜主要发言 Euler（依内容辨识，Jackal 据称次日回来）｜片尾口述已聊约一小时，原稿无时间轴且从交谈中切入

教程完成率从 **32% 提到 68%**之后，Zeeverse 要解决的是玩家给角色起完名，能否在第一天继续找到事做。团队计划用七层首座副本和村庄图腾给出明确去向。这期还花了很长时间回答交易玩家的问题，包括 **GEX API 已开放到哪一步、Gold 与 Spirit 各自代表什么、为什么要把稀有装备挂牌独立于资源池**。

## 一、菲律宾是用来验证教程的软启动市场，测试重心转向第一天

Euler 回答为何继续在菲律宾测试。广告面向普通游戏用户，团队希望观察缺少额外奖励刺激时，玩家是否愿意自己走完教程。常见的低规格设备和较弱网络也能更早暴露加载和性能问题。他估计美国同类活动每获取一人的成本可能是菲律宾的 **10–20 倍**，会上没有实时报价、投放预算或按市场的对照数据。有人问新玩家进 Discord 后询问 FOREST 怎么办，Euler 说当时并未主动把买来的用户导进 Discord，如遇到再引导看项目网页。

按会上口径，约两周前最初版本的教程完成率是 **32%**，迭代一周多后约 **68%**。这是软启动样本的教程完成率，未公布样本量，也未给对应的次日留存。1.8.0 与 1.8.1 可独立确认教程改版、孵化和取物卡死热修。新目标是从约前十分钟转向首日体验，下一轮计划再引入约 **200–300 名新人**。团队口述当时日活还在几百量级，未来几千及全球发行规模都是预期。 [1.8.0 更新日志](https://zeeverse.com/news/1-8-0-release-notes) · [1.8.1 更新日志](https://zeeverse.com/news/1-8-1-release-notes)

Euler 回答为什么继续用菲律宾软启动时，先说需要有足够多人走教程、才能积累数据，然后举了两版的完成率。

> **Euler**
>
> “When we started with the first tutorial version two weeks ago, our completion rate uh was only 32 percent, and which which appear like which is generally a terrible result. And what we did, we managed to improve that result to 68 percent. So that's more than two x improvement.”
>
> “大约两周前，我们开始测第一版教程，那时完成率只有 32%，整体来看是个很差的结果。后来我们把它提到了 68%，达到了原来的两倍多。”

## 二、首段主线预计周末送出，老玩家也要重建第一座图腾

旧流程容易在取名后失去方向，原有支线各自有内容但串不成第一天的行动。Euler 在本场把首段说成当时设想的 **七个主线部分中的第一个**。第一座副本由此前口述的约 60 层重做成 **7 层**，最后一层是 Boss。玩家通关途中拾取图腾碎片，在村里复原图腾后再开放后面的地图。

谈到已有角色为什么也要重走首区，Euler 详细说了副本缩短之后，图腾碎片怎么接上开放地图。

> **Euler**
>
> “Instead of having sixty levels on the first dungeon, we'll have just seven, and and the seven seventh level will be the boss, and once um you complete all the seven levels, uh, meanwhile, you will be collecting the totem pieces, and you will rebuild the first totem, and the first totem will unlock the rest of the zeevers.”
>
> “第一座副本会从六十层改成七层，第七层是 Boss。你打完这七层的同时会收集图腾碎片，用它们重建第一座图腾，然后才能解锁 Zeeverse 的其他区域。”

方案对既有玩家也设首区门槛。Euler 提到个别传送手段可能绕过，未把它当作开放的跳关入口。给练度较高玩家的首通用时估计是 **5–10 分钟**。上线时序说法是周五晚送审，争取周六、最迟希望到周一，然后拉新观察并紧跟几轮修正。会后的正式日志日期为 **4 月 2 日**，确认上线全新引导任务、重做 Grass Dungeon 和关卡选择，不足以确认全部门槛细节。 [1.9.0 更新日志](https://zeeverse.com/news/1-9-0-release-notes) · [任务游戏文档](https://whitepaper.zee-verse.com/gameplay/quests)

## 三、同版本拟换两种图标，升级资源与交易货币各有用途

| 玩家看到的改动 | 会上明确的功能口径 |
|---|---|
| 原本用于 Zee 升级的 **Coins** → **Spirit** | 换名称和图标，击败 Zee、卖遗物等来路以及已持余额按原逻辑延续。 |
| 游戏内 GEX 的 $VEE 图标和名称 → **Gold** | 游戏内用金币显示链下交易余额。团队称可按 **1 比 1** 充值为 Gold、提回 $VEE，已有功能维持，并考虑网页端保留 $VEE 名称。 |

Euler 将 Gold 的界面命名归因于应用商店渠道要求。这是团队对改动动机的口述，会议没有展开政策条文。2025 年 1.7.5 已上线 GEX 的链下市场和链下 $VEE，也把移动客户端的链上功能与 WebGL／Epic 分开。4 月 2 日 1.9.0 确认两个名称变更。玩家核对更新后的余额时，可以先确认看到的是升级用 Spirit，还是用于交换的 Gold。 [1.7.5 更新日志](https://zeeverse.com/news/1-7-5-release-notes) · [1.9.0 更新日志](https://zeeverse.com/news/1-9-0-release-notes) · [$VEE 游戏文档](https://whitepaper.zee-verse.com/economy/utility-tokens/usdvee)

Euler 先讲升级用的余额怎样改名，再用一进一出两步说明交易用的 Gold 和 VEE 的关系。

> **Euler**
>
> “One to one for the v token. So, you will be generally just, when when you will withdraw the gold coins, uh, you will receive the v token. And when you will when you will deposit the token inside the game, you will receive the gold coins.”
>
> “和 VEE 是一比一的。你把 Gold 提出去，收到的是 VEE。把 VEE 充进游戏，收到的就是 Gold。”

## 四、GEX 已可查全量交易池，程序化充提和稀有物 Marketplace 仍待上线

玩家以为 API 示例的 25 项就是可见上限。团队说明 **25 项只是示例**，已有方法列出完整物品和池子。会中提到限额听译近 **每分钟 240 笔**，原文有数字重复，未公开对应接口、单位配额和后续是否调整。发言者同时请玩家避免请求刷屏。此刻接口可以在 GEX 内交易，玩家还不能由它直接完成链上链下两边的充提。

玩家看到示例只列了 25 项，追问是否打算只开放这些物品。Euler 解释示例的条数意味着什么。

> **Euler**
>
> “The 25 items which were \[…\] provided as an example. You can easily uh just, there is a method, so you can easily query um every single item, every single pool.”
>
> “那 25 项列出来是给大家作示例的。已经有一个方法，你可以查到每种物品、每个交易池。”

Euler 当时的目标是本周补上 **物品和 $VEE 的程序化充提**。原稿未披露实际**上线日**。Euler 的用意是让使用者能更连续地处理两边价差。新的游戏内 Marketplace 则准备放在 GEX 旁边，用来挂售高等级装备和 Zee 等低同质性的物品，拟同时给接口。这延续了 2 月会上的方向，具体上线时间、物品范围及交易限制仍要等成品。游戏文档给出了 GEX 标准物品池、交易与加流动性的机制。 [GEX 游戏文档](https://whitepaper.zee-verse.com/economy/game-exchange-gex)

此前在游戏里用交易池交换的多是大量供应的标准物品。Euler 拿高阶装备和 Zee 说明为什么还想加一个挂单市场。

> **Euler**
>
> “Currently there is no um way for you to trade your zs. There is no way for you to trade your uh like high level equipment. And we'll be opening up the marketplace next to the gex, where you will be able to just list your items off chain.”
>
> “眼下还没办法交易你的 Zee，也没办法交易高等级装备。我们会在 GEX 旁边开一个 Marketplace，你可以直接把自己的物品挂到链下出售。”

## 五、团队希望用分池承担活动风险，FOREST 被提为对外能力

Euler 用玩家砍木、在游戏内卖出、再买需要的材料举例，说明玩家有机会从正常游玩进入同一个交易循环。他希望有更多普通玩家使用这套交换，因此交易费可以成为部分收入。会上拿传统游戏约 **3–4%** 与自己的 **40–50%** 机会做对比，后一个是团队预想可获得收入的参与面，没有披露已实现付费率或收入结果。

关于 Play-to-Earn，他设想为一次活动推出特定物品，把举例中的 **2 亿 $VEE** 放进单独的流动性池。若活动物品过量供应，那一池会先承受价格下降。会上没有宣布这笔预算、具体活动或隔离效果的实测。被问能否在 GEX 买其他游戏道具时，Euler 认为 Zeeverse 内应交易玩家能用的物品。他更愿意通过 **FOREST 为其他游戏提供类似技术**，强调对方还需要能支撑交易的成熟游戏经济。没有宣布跨游戏市场或外部接入时间。

Euler 假设在全球发行之前投放一批活动物品，用同一池子承接奖励和卖压，解释为什么他想把活动资源分池。

> **Euler**
>
> “We will be able, let's say, allocate 200 million V token to it. Uh, and and this will be a single pool which is exposed to play to earn behavior. And the moment these items will be overinflated, the price for every item will just drop and crash.”
>
> “举例说，可以拨 2 亿 VEE 到这里。承受边玩边赚行为的就是这一个池子。等这些物品的供给过量，物品价格就会一路跌下去。”

## 六、现场问答和片尾

- **再做交易赛。** Euler 倾向下次按利润而非成交量来评，拟等 Jackal 回来讨论。会中没有确定交易品、奖品或规则。对现成交易应用和信用卡购买，他提到可能由社区做开放工具，也讨论过游戏内购显示为 Gold 的路径。这些属于未来设想。
- **发行与社区预期。** 有听众直说更关心 TGE。Euler 表示当下不是合适时机，全球发行要有能持续留下的玩家才能支撑代币活动。发言中每天十万新增、累计百万用户及线下卡支付的例子都是未来情景。转录未公布 TGE 日期，也未宣布购物支付或合作。
- **同行玩法。** 玩家问其他 Web3 游戏近况。Euler 表示自己没有深入追踪，只提到 Ronin 有一些他认为做出了实际游戏内容的作品。这是他的现场观察。
- **抽奖。** 片尾请 Cherry 留截图供会后抽奖，原稿收在主持人道别处，没有开奖明细。

## 七、按本场口径看路线图

- **会前已有。** 新教程/UI、菲律宾软启动测试、链下 GEX 和基本交易查询。
- **当下目标。** 交付首段主线和重做七层副本，推出 Spirit 与 Gold 的界面命名，随后热修并继续拉新测首日。
- **继续开发。** 程序化充提、低同质性资产的 Marketplace 和相应接口。
- **探索。** 利润赛、隔离物品池投放、FOREST 向外输出交易基建、内购或其他支付方式，全球发行及 TGE 日程待定。

## 我的整体评价

32% 到 68% 说明前十分钟有了明显改善的迹象，后续更能说明问题的是通关后多少人能完成首座图腾，出镇后还愿不愿意继续。交易这边，玩家是否能分清 Spirit 和 Gold 会影响他们能否顺畅从打怪走到交易。再往后，程序化充提可用率、普通玩家的实际交易覆盖、深度与交易费收入是三项不同的结果，会上提出的收益和隔离设想需要分别观察。

资料依据为 [3 月 26 日原始转录](transcription/2026-03-26.txt)。缺少逐句时码、菲律宾原始数据、API 对应历史版本和现场截图。GEX 限速听译保留不确定性，发版目标、代币市场判断与产品实装分别描述。
