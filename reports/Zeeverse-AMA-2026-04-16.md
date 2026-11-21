# Zeeverse AMA 深度总结｜2026-04-16

2026 年 4 月 16 日｜Community Call｜主要发言 Euler、Jackal｜转入 FOREST 议题时口述已聊约 35 分钟，原稿无时间轴，整场时长待核

本场最具体的老玩家提案是 **先恢复现有 Heist，再让社区在现有系统能调的范围内投票改规则**。团队还讨论用独立 HRT 池及固定额度回购，替代直接换能量药。和主线并行试做的理由很直接：玩家已经等到疲劳，而引导仍占主要开发人手。FOREST 部分回应了第一轮 Vault、Forest Spin 的计分条件和 SDK 公布进度，也澄清 Zeeverse 与 FOREST 各自要做什么。

## 一、社区可以试着调 Heist，前提是沿用现有框架

[09:18](#t=558)

玩家指出现阶段新内容多为引导，担心既有社区被忽略。团队会上口述约九成人手仍在 Zeeverse，引导和续接主线占主要工时。他认可老玩家的疲劳，想找能不推倒重建、又足以让社区参与的方案。Heist 原先出现过高资源玩家重复刷收益、低练度玩家认为规则不公平的矛盾，改动又使投入较多的人质疑收益。1.7.3 公告曾因重做暂停 Heist，原玩法是玩家之间的金库攻防。 [1.7.3 更新日志](https://zeeverse.com/news/1-7-3-release-notes) · [Heist 游戏文档](https://whitepaper.zee-verse.com/gameplay/pvp/heist-under-construction)

设想是 **先恢复可运行的旧模式，再每周或隔周改一轮**。玩家可在周二直播等场合提交想法，Jackal 归纳后发投票，团队实施通过且在现有技术范围内的调整。讨论例子包括每周重置排名、停战 24 小时后开始掉排名并可能影响收益、先修保护范围的一些问题。排名衰减如何对应新版 HRT 奖励，要等规则确定。Jackal 拿禁止自己参赛开玩笑。投票参与资格、适用范围、上线规则和具体更新频率未定。当被问时间，Euler 说后续版本有机会，估计一两周，仍需问开发是否有阻碍。4 月 20 日公布的 1.10.0 是当时较近的服务更新，其中未公告 Heist 重开。 [1.10.0 更新日志](https://zeeverse.com/news/1-10-0-release-notes)

玩家担心团队一直做新手内容，老玩家只能继续等。Jackal 说当时没有人手重做 Heist，提出用现有模式试着让社区参与改规则。

> **Jackal** · [13:37](#t=817)
>
> “And for example, we can look to implement them weekly or bi-weekly, and that would be like, for example, uh, for example, we we come to, we go to my streams on Tuesdays, and then we can uh brainstorm. And then I put out these propositions, and people vote, and if the vote passes, we implement them.”
>
> “比如，我们可以考虑每周或隔周落实一批改动。大家可以来我周二的直播一起想办法，然后我把提案列出来，让大家投票。通过的改动，我们就去做。”

## 二、Heist 奖励拟由 HRT 池结算，社区能讨论产量与激励对象

[15:31](#t=931)

团队的经济试验是让 **Heist Reward Token（HRT）进 GEX 流动性池**，玩家可把拿到的 HRT 卖入池子，同时拟撤掉 HRT 直接转换能量药的用途。Euler 先以每月 **500 万到 1,000 万 $VEE** 举例，后面更具体地按 **1,000 万 $VEE** 演示固定额度通过 GEX 回购 HRT。其余发多少 HRT、按天还是赛季奖励，欢迎社区一起设。回购是拟议的补贴方案，暂无法核定最终预算、可交易链或价格。

Euler 用固定额度在 GEX 回购举例，随后把奖励发放量、周期和是否继续用 HRT 交给社区作为可讨论的变量。

> **Euler** · [16:02](#t=962)
>
> “It's up to community to decide uh how how many token, how many high tokens they want to reward uh every season or every day or or whatever. And and and they can decide to even like completely remove the high tokens.”
>
> “每个赛季或每天发多少 HRT 作为奖励，可以由社区决定。社区甚至可以决定完全移除 HRT。”

这与把 HRT 直接换为日常资源的激励不同。市场结算下，赛季发放太多会稀释同一额度的支持，玩家投票会影响奖励的实际价值。2025 年 1.7.5 已列过链上 $HRT–$VEE 池，本场说的是让新版 Heist 的奖励和回购从 GEX 承接。后来 8 月 12 日的 1.16.0 独立确认一项变化，即 HRT 做能量药的路径已删除。这个后续实装不能倒推 4 月的回购与复开方案已经落地。 [1.7.5 更新日志](https://zeeverse.com/news/1-7-5-release-notes) · [1.16.0 更新日志](https://zeeverse.com/news/1-16-0-release-notes)

## 三、主线第二段预告两个副本、另一枚蛋和新战斗视角

[27:00](#t=1620)

Jackal 展示开发中的战斗镜头，让玩家少从己方 Zee 背后挡着看敌人。说到接下来的任务，他给了 **5 月上半月**的目标，预告两个副本与两场 Boss 设计。其中一场在玩家未正确处理机制时可让一只 Zee 在**该场战斗**中即时出局，另一场像是三名敌人共同组成的 Boss。这里谈的是副本内规则。第二座图腾预计连进传送系统，并有一枚 Dark Matter 蛋；Umbra、Forge 和主线末段另有 Zee 方向。团队希望逐步增加普通参与者可以拿到的 Zee，和过去的限量联动供给并存。

Jackal 在预览下一段主线时，把失误导致出局的时间限定在单场战斗，然后才转向另一个 Boss。

> **Jackal** · [28:31](#t=1711)
>
> “It comes with two new dungeons. With two new bosses. Uh, instant kill mechanic, uh, that will be able to instantly kill your z, uh, for the duration of the battle, uh, if you don't uh, uh, don't do what it needs to be done, and the second boss will be actually kind of three bosses.”
>
> “这一段会带来两座新副本、两个新 Boss。一个有即时击倒机制，如果你该做的事没做对，你的 Zee 会立刻倒下，持续到这场战斗结束。第二个 Boss 实际上有点像是三个 Boss 组成的。”

5 月 11 日的 1.11.0 后来确认 **A Longer Ask**、早期副本进度与 Boss 调整、新套装和 Rako 发布。5 月 13 日的 1.11.1 补有 The Well、Corrupted Egg 等修正。两篇日志可确认内容到达的阶段，未列会上预览的全部 Boss 触发或掉蛋细则。 [1.11.0 更新日志](https://zeeverse.com/news/1-11-0-release-notes) · [1.11.1 更新日志](https://zeeverse.com/news/1-11-1-release-notes)

## 四、Land 交付争论把生成器、资源玩法和真正进场分开了

[17:40](#t=1060)

有人因为 Land 久未实装要求给可追责的日期。团队对此反应强烈，请有疑问的玩家上麦或私下讨论。Euler 解释已开放生成器，批量生成个性化地形与资源布局是为避免手工制作大量岛屿；Woodcutting、Firemaking、Mining、Crafting、Summoning 和 Soulcrafting 一类技能也要与 Land 玩法接上。已有生成工具和世界内可访问 Land 属于两个交付问题。本场没有给出实际开放日期、Tribe Wars 状态或进入方式的新承诺。 [Land Generator 官方介绍](https://zeeverse.medium.com/zeeverse-worlds-from-words-159920ecb2f3) · [Land 游戏文档](https://whitepaper.zee-verse.com/lands/overview)

围绕「已经能生成地块，为什么还没法进游戏玩」的争论，Euler 说到 Land 要用上哪些技能。

> **Euler** · [19:52](#t=1192)
>
> “When you build something, you don't build one certain feature. You actually end up building a lot of things that each support each other. And uh this is um, uh, I just said to about the uh lan lan gameplay also required uh exactly whole whole skills to be uh released from uh woodcutting and fire making to mining crafting, summoning, soulcrafting.”
>
> “做一个玩法时，往往得做很多互相支撑的东西。就像刚才说的，Land 玩法也需要整套技能推出，从伐木和生火，到采矿、制作、召唤和 Soulcrafting。”

## 五、FOREST 回顾首轮 Vault 与 Spin 计分，下一步推 SDK

[31:55](#t=1915)

Euler 说平台在前一晚达到成交量 **100 万美元**的里程碑，未披露统计窗口或明细。他解释新项目代币先在池中与 $FOREST 配对，用户用 BNB 买项目代币时中间经过 $FOREST。流动性费用留在曲线池中是会上解释的经济效果。这个说明没有提供逐笔手续费、销毁凭证或价格结果。 [FOREST 经济文档](https://forest.inc/docs/whitepaper/forest-and-seed-economy)

**Forest Spin 本轮只按代币实际交易量计分。** Euler 明确回答迷你游戏是否会算入，纠正此前介绍时让人以为玩游戏也可计榜的口径。他将它称为已经结束的第三次交易赛，观察到参与扩展到项目币以外。首轮 Seed Vault 已结束，Euler 粗估消耗了流通量的 **约 10–15%**，同时说没重新查。官方历史页列首轮结算消耗 **8,254,756.07 SEED**、99 位参与者、奖池 100,000 $FOREST；相对流通量的比例仍是口述估计。 [Seed Vault 结算历史](https://forest.inc/vault)

比赛已经结束，Euler 是在回答「玩迷你游戏算不算」的追问。这个回答说明该轮榜单最后用的是什么数据。

> **Euler** · [34:39](#t=2079)
>
> “I saw there was a question about the spin token, and actually playing uh the the the the the spin mini game. Uh, on this competition, we only counted in the volume uh on actual token trading. So, this was all about trading, and less about actual, uh, like playing.”
>
> “我看到有人问 Spin 代币，以及实际去玩 Spin 迷你游戏的事。这一轮比赛，我们只计代币的实际交易量。这场活动的计分重心就是交易。”

团队希望下一周放出第一版 **Forest SDK**，让创作者自行制作可使用代币的应用和小游戏。已有项目被安排参与，小型作品也可联系团队。会前 4 月 14 日已有首个孵化项目 Acid Gamez 与已上架的 Stack，说明生态中有游戏可玩。SDK 对外可用则由 **4 月 30 日**公告确认，包括 HTML5 接钱包、在游戏内交易和读取余额与报价。从会上目标到官网公开的日期分开看。 [Acid Gamez 孵化公告](https://forest.inc/news/forest-studios-first-incubation-acid-gamez) · [Forest SDK 发布公告](https://forest.inc/news/forest-sdk-infra)

在说明 SDK 想让创作者把代币接进应用后，Euler 接着讲第一批小游戏从哪里来，以及其他创作者可以怎样参与。

> **Euler** · [38:34](#t=2314)
>
> “We gonna start simple. Uh, we have actually some partners lined up as well who will uh release the first first mini games around that. So, uh, definitely expect some new tokens popping up as well. Uh, if you have a good idea, don't hesitate, just build it, and reach out to us, we'll find a way to support you.”
>
> “我们会先从简单的东西做起。已经安排了一些伙伴，他们会用它发布第一批小游戏，也会有一些新代币出现。你有好点子就直接做，并来联系团队，我们会想办法支持你。”

## 六、片尾问答谈获客、两个项目的边界和老玩家反馈

[41:04](#t=2464)

- **新一批用户。** 上一波玩家推进首段主线比预期更快，团队准备下一波扩大样本，并观察第一天和前几天是否有足够内容。现场未给新预算、规模和留存结果。
- **四年后的方向。** Euler 把 Zeeverse 描述为希望经营多年的 MMORPG。谈到 RuneScape，他借其长年积累的内容和玩家经济说明深度需要时间。FOREST 的目标是把 Zeeverse 开发时积累的技术做成外部创作者可用的工具和发行平台，项目人员可在 FOREST 做市场推广时继续打磨游戏。
- **对 NFT、代币项目动机的质疑。** 主持方请玩家用版本记录看实际交付，回应仍会开发，未给财务明细、承诺收益或新的分发进度。野生 Zee 战斗异常可提工单，倒置战斗画面的玩笑没有作为修复计划。
- **领奖。** Jackal 片尾按参会名单抽三张一个月 Premium Pass，开工单由团队发代码。

## 七、按本场口径看路线图

| 状态 | 内容 |
|---|---|
| 会前已有 | 首段主线、Land Generator、FOREST Vault 首轮结算及 Spin 赛结束，Stack 已上线。 |
| 近期目标 | 服务更新、扩大获客样本、第二段主线、图腾与新 Zee，Forest SDK 对外开放。 |
| 提案与待定 | 社区投票改 Heist、复开时间、HRT 发行与回购额度、Land 进场日期。 |

## 我的整体评价

这是少数把老玩家的不满转换成具体参与方式的一期。Heist 成败可以从投票有多少不同练度的人参与、改规则后能否找到对手、是否仍有人靠反复刷奖励获益来判断。HRT 独立池的价值要看覆盖普通参与者的有效奖励、池子承受赛季发放的能力。新的主线 Boss 则该看第一次失败后玩家能不能从提示理解机制，这会决定「给老玩家挑战」和「接住新人」是否能发生在同一套副本里。

资料依据为 [4 月 16 日原始转录](transcription/2026-04-16.txt)。缺逐句时间和发言人标签，口头示例和计划如上标识。比赛计分采用主持人对已结束轮次的澄清，试验回购、平台交易统计和具体复开日期仍缺独立数据。
