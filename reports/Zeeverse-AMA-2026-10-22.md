# Zeeverse / FOREST AMA 深度总结｜中后期内容恢复开发，首个开放世界 Boss 先试伤害竞赛

2026 年 10 月 22 日｜Community Call｜主要发言人 Euler、Jackal（据对话互称辨认）｜转录覆盖约 64 分钟，末段标为 63:44

主线第三章已在测试，Forge 和 Great Tree 也重新开工。老玩家等的不只是新任务。会上讨论了旧副本的 Prestige 难度、最多约十只新 Zee、普通步行提速与自动寻路，并预告了一个没有任务门槛的世界 Boss。最容易引起争论的是它允许多人一起打，却暂定只有输出最高的玩家领掉落。万圣节已经开跑，Shaman Rank 上线后的经验差异同样让不少老玩家追问。FOREST 这边，Euler 把 Windows 版和用 Harness 做 Zeeverse 可玩广告提上了日程。[本期完整存档转录](transcription/2026-10-22.txt)

## 一、第三章目标 10 月 30 日送审，Forge 与 Great Tree 已重新开工

[10:23](#t=623)

Jackal 说 **Main Campaign Part 3** 已大致做完约一周，团队正在调掉落、地下城进度并集中测试。他为这项任务交付约 **300 行本地化文本，其中约 120 行是对话**。第三章会引入 The Ship、The Wicker、藏宝图及两个首饰槽，新图腾传送点会更靠近熔炉。送审目标为 **10 月 30 日**，若审核快最快当周五，否则可能到随后周一。会后官网在 **11 月 2 日**刊出 1.18.0，正式任务名 **Third Time’s the Charm**，明列两座副本以及持铲去 20 个点挖宝的玩法。本场送审计划和最终发版日期可分别核对。转录 [10:23–12:14](#t=623)、[36:21–36:40](#t=2181)。[Zeeverse 1.18.0 发布说明｜会后，11 月 2 日](https://zeeverse.com/news/1-18-0-release-notes)

第三章已在集中测试、调整奖励和副本进度。Jackal 给的是送审目标，并按审批速度估计发版窗口。

> **Jackal · [10:28–10:39](#t=628)**
>
> “We’re planning for the next update to be submitted at October 30. Uh, so, if that uh goes through fast, we might be looking at the next Friday update. Or, uh, monda- Monday after that.”
>
> “我们计划 10 月 30 日送审下一版更新。如果审核通过得快，最快当周五能更新，否则可能是之后的周一。”

团队仍会保留新手体验的小修，同时已重新投入 **Forge、Great Tree 及中后期内容**。他们想让主线通关后解锁 **Prestige**，旧 Boss 在更高难度下能发挥原来的机制，并承载新奖励和新 Zee。会上提出最多约 **10 只**新 Zee，想增加战斗搭配的空间。外观方面，Euler 问社区最喜欢九只初始 Zee 中的哪些。团队会探索外形翻新，新增 Zee 可能有更可爱、更强悍的设计。Jackal 还希望重做过于线性的伤害公式，避免副本难度过于依赖抬敌方等级和血量，给阵容搭配更多作用。数量、名单和算法都未定。转录 [12:14–19:53](#t=734)、[24:47–25:41](#t=1487)。[本期转录｜后期内容、Zee 外观与伤害计算](transcription/2026-10-22.txt)

## 二、地图导航要让玩家少迷路，自动走路和提速处于不同阶段

[20:06](#t=1206)

Euler 自己在现有地图也常迷路。他想移动少数地点、改世界布局，让玩家看到景物就比较容易找到方向。手机端会考虑 **Auto Walk**。设想是选择地点，角色自行走过去，前几条任务可直接前往下一目标，同一能力也给现有玩家用。团队还没敲定寻路实现。Jackal 同时在测普通步行速度，会上估约快 **20%–25%**，过快会再调。**会后** 10 月 26 日的 1.17.9 将实际移动提速记为约 **28%**，还取消乘船前的确认操作。Auto Walk 在该日志无交付记录。转录 [20:06–24:32](#t=1206)。[Zeeverse 1.17.9 发布说明｜会后，10 月 26 日](https://zeeverse.com/news/1-17-9-release-notes)

Euler 自己也常在旧地图迷路。他把选点自动走路当作对手机操作的改善，还设想前几项任务可引导玩家走到目标。

> **Euler · [21:51–22:03](#t=1311)**
>
> “But generally, when it comes to mobile, this actually is a bit of a problem uh for for many player. So, we will be, um, adding a way for you to just pick a spot and just walk there.”
>
> “在手机上，找到路、走到目的地对不少玩家来说确实有点困难。所以我们会做一个功能，你选个地点，角色就能走过去。”

## 三、落叶堆 Boss 先测多人同打，暂定仅最高伤害玩家领奖

[25:58](#t=1558)

Jackal 介绍，会在 Great Tree 自带的 Boss 之前先做一只开放世界 Boss。它拟从落叶堆长出，**无任务要求**，初稿大约每小时可打一次，也考虑允许玩家主动召唤。Boss 有机会用重击令某位玩家的 Zee 出局，团队希望一般玩家也能参与，经验丰富的玩家通常需要组队，个别装备与 Zee 组合可能撑过。还提到新的 Zee 和未来生活技能材料作为可能的内容，未给掉落表或概率。本场机器稿首次写作 **Molcher**，11 月 19 日同一落叶堆 Boss 在机器稿中写作 **Mulcher**，待正式拼法。转录 [25:58–27:47](#t=1558)、[29:00–31:18](#t=1740)。[本期转录｜首个开放世界 Boss](transcription/2026-10-22.txt) · [11 月 19 日转录｜会后口述拼法](transcription/2026-11-19.md)

Euler 把争议规则讲得很直接。**即使十人一起打，也只由伤害最高的一人拿奖励**，所得物品会在聊天中播报。他设想同伴可以自己商量怎么分，团队借首只 Boss 观察合作与竞争的实际表现。十人是说明奖励口径的例子，人数上限、是否支持分成工具及最终规则均未在会中确定。后续闲聊提到掉落后的 PK，属于玩笑。转录 [31:19–33:43](#t=1879)。[本期转录｜伤害、奖励分配和聊天播报](transcription/2026-10-22.txt)

Euler 以十人同打说明暂定分配方式，接着说同行的朋友可以自行商量。他举的是伤害竞赛的例子，参战人数上限尚未公布。

> **Euler · [31:52–32:01](#t=1912)**
>
> “Even if there are 10 players trying to kill the boss, after boss is dead, the player who did the most of the damage, only him receives the reward. But the trick is, the reward will show up in the chat, so everybody will see who received what.”
>
> “即使有 10 个玩家一起打 Boss，打完后也只有伤害最高的人拿奖励。这里的安排是，奖励会在聊天里播报，所以所有人都能看到谁拿了什么。”

## 四、万圣节套装的价值在传送，用不用取决于出门路线

[27:53](#t=1673)

Halloween 2026 已在上一日上线。野生 Zee 会按剩余供给掉活动装备，马车同一时间一辆，抢先找到可保底拿一件，奖励被领走后两小时再刷。首发的 **Watcher’s Crescent** 共 50 把，伐木效率等同 Mithril Axe。Mawkin 的 Mask、Top 和 Bottoms 各 150 件，三件穿齐可用无需 Souls 的 Candle Teleport，传送到地图东北角，施法不给 Shamanism XP。官方写的野生 Zee 概率为传奇 **0.03%**、史诗 **0.09%**，马车为传奇 **10%**、史诗 **90%**，均受剩余供应限制。11 月 2 日补丁后来把 Candle Teleport 门槛降到两件。[Halloween 2026 活动公告｜10 月 21 日](https://zeeverse.com/news/halloween-2026-the-hunt-is-on) · [1.18.0 发布说明｜会后，11 月 2 日](https://zeeverse.com/news/1-18-0-release-notes)

玩家担心为了飞去 Hollow Trials 临时穿更弱的套装，后来又得换回战斗装备。Jackal 说 Mawkin 面向从 Steel 过渡的早中期玩家，换装所需的背包空间本身就是旅行决策。有些路线会刚好受益，例如传到靠近 Epic 树的位置，再用 Village Teleport 回村存木料，或者把村庄、Umbra 附近和 Candle 落点一带的农田串起来。Great Tree 想再加 **Root Network**，修好的 Metal Totem 与不同用途装备会给更多走法。**Wardrobe、预设 Loadout 与独立外观槽**目前不在范围内，团队讨论更多的是能否减少 Stash 取出、关闭、换装、再打开的步骤。转录 [27:53–28:46](#t=1673)、[33:44–38:40](#t=2024)。[本期转录｜传送用途及衣柜问答](transcription/2026-10-22.txt)

## 五、Shaman Rank 取代 Mask 直接加成，老持有者的落差得到回应

[39:03](#t=2343)

10 月 13 日官网改版已列出新规则。关联钱包的合格收藏品与 Totem 计算 **Shaman Points**，从 **Clay 的 500 点到 Obsidian 的 150,000 点共十阶**。旧 Mask 直给的 XP／Spirit 与新 Rank 加成不叠加，官方用十张 Mask 的旧 XP 加成 +100% 换到某一等级的 +70% 举例。这个例子解释了为什么玩家持有物没有变化，看到的收益却会下降。[Zeeverse 官网改版公告｜10 月 13 日](https://zeeverse.com/news/zeeverse-website-update-shaman-ranks-collector-profile-more)

Euler 回答，初版有意留出之后调整的空间，希望 Rank 最后同时容纳数值、额外技能收益、区域或功能权限。他认为持有约 100 张 Mask 这种大收藏者应该接近或达到最高 Rank，团队会根据反馈检查分值，未宣布具体改表。他还说看好旧空投活动任务、完成教程和游戏内成就接入，举了技能 99 级、拥有某只 Zee 或装备、击败 100,000 只 Zee 的成就例子。这里要看清两套口径。Euler 在会上将任务描述为给免费玩家的进阶路径，**已发布规则明确写 Quest Points 独立于 Shaman Rank**。截至本场无法从官网首版规则验证“只完成教程就到 Rank I”，成就系统也有待建设。转录 [39:03–46:43](#t=2343)。[官网公告｜Shaman Points 和 Quest Points](https://zeeverse.com/news/zeeverse-website-update-shaman-ranks-collector-profile-more) · [本期转录｜Rank 问答](transcription/2026-10-22.txt)

有人注意到改用 Rank 后 XP 或 Spirit 加成降低。Euler 说明为什么初版留出调整空间，并举了未来可能加入的权益。

> **Euler · [39:27–39:49](#t=2367)**
>
> “This rank will then be filled with multiple different perks besides just the spirit or or XP bonuses. You will start to see things, uh, for example, as being able to access maybe some certain regions, uh, or certain, having a certain features inside the game, just because you have this rank.”
>
> “这个等级之后还会加入多种权益，除了 Spirit 或 XP 加成，也可能凭等级进入某些区域，或者使用游戏里的某些功能。”

## 六、网页 GEX、背包与战斗镜头的问答

[55:20](#t=3320)

- **GEX 网页端**。玩家问订单、买家卖家名称和历史。Euler 说网页已可直接交易，有几个基础 Trading Bot，早些时候也提供过 API 供玩家写机器人，但使用不多。10 月 13 日官网公告还将 Market 标为即将开放，10 月 22 日的可用性以现场口述为依据。新增交易历史字段等仍是反馈，Euler 倾向先把基础流程跑顺。转录 [55:20–57:46](#t=3320)。[10 月 13 日网站更新](https://zeeverse.com/news/zeeverse-website-update-shaman-ranks-collector-profile-more) · [GEX 游戏文档｜市场基础](https://whitepaper.zee-verse.com/economy/game-exchange-gex)
- **背包、工具腰带与 Souls**。Jackal 认为准备出门要带哪些工具仍是玩法，Toolbelt 当前未排入范围。Euler 更想研究不同 Zee 如何在战斗外替玩家带工具或 Souls、节省伐木时间或帮助过河，也保留 Soul Pouch 的可能性。Jackal 提到曾建议通过活动送 Fishing Barrel。片尾说 Zee Passives 已在开发，细项留待之后。转录 [49:09–52:28](#t=2949)、[59:19–59:33](#t=3559)。
- **献祭 Zee 帮另一只升级**。团队愿意研究。Euler 指出现有 Umbra 献祭收益有限，若可交易 Zee 变成升级材料，机器人刷 Zee 再卖给想加速升级的玩家可能影响平衡。Jackal 说计划新增 Zee 多了之后，养成时间会更需要考虑。会上没有承诺新献祭功能或替代配方。转录 [52:28–55:15](#t=3148)。
- **副本镜头**。当场没有按玩家提议提交具体功能，方向是减少拖长的动画、给镜头更多灵活性，逐步改善流畅度。转录 [57:50–58:54](#t=3470)。

## 七、FOREST Windows 版接近发布，Zeeverse 要用 Harness 自己做广告

[01:37](#t=97)

Euler 回顾在新加坡见了潜在合作方，对外展示两个项目。会上 Mac 版 Harness 已有，Windows 版希望下周初推出。Euler 称 Harness 已支持围绕 BNB 生态中的其他代币建应用或小游戏，举了稳定币和既有社区代币。可以使用自己的 ChatGPT、Claude 订阅。除去托管与发行底层，团队亦在改善 Harness 的内置指令和工具，让模型能补上制作小游戏时容易遗漏的细节。Euler 还提到团队认为最近一次外部基础设施事件未影响 Forest，并回顾之前事件后有做防护，这些是内部运行反馈。转录 [01:37–06:19](#t=97)。[Forest Harness 下载页｜平台背景](https://forest.inc/build) · [Forest Playkit 文档](https://forest.inc/docs/developers/forest-playkit)

接下来最明确的内部用例是 **Zeeverse Playable Ads**。Euler 预计扩大获客投放时，素材更新可能要快到一天制作约五件。他想把游戏素材交给 Harness，做可点击试玩的短小游戏和广告，先满足 Zeeverse 自己的需求，再把同一技术开放给其他创作者。一天五件是工作量设想，未公布广告投放的实际产出或效果。他用 Epic 先用 Unreal Engine 做自家游戏来解释顺序。转录 [06:36–09:26](#t=396)。[本期转录｜Playable Ads](transcription/2026-10-22.txt)

Euler 从扩大获客后广告素材要更快轮替讲起，接着提出用 Zeeverse 素材在 Harness 内制作可玩广告。五条是对未来工作量的估计。

> **Euler · [07:04–07:09](#t=424)**
>
> “The life, uh, lifespan of of each creative gets just shorter and shorter. So, in reality, that means we may even need to produce like 5 new ads every single day, so just we can keep them fresh and keep them running on the networks to acquire more players.”
>
> “每条素材能用的时间越来越短。实际投放时，我们可能每天都要做大约 5 条新广告，让投放渠道上的素材保持新鲜，好吸引更多玩家。”

## 八、活动、抽奖与路线图

[46:54](#t=2814)

Euler 说团队成员本人不去，但 Zeeverse 会通过 Arbitrum 合作在印度 **Devcon 8** 展示，现场或有代码、新收藏徽章机会。主办方的会期是 11 月 3 至 6 日、地点孟买。马来西亚社区提议办活动，他请把具体信息发给自己或 Cherry，有机会提供周边与奖品支持。片尾 Jackal 说一小时前万圣节已有约 **38,000 次击败 Zee**，推算当时约 39,000 次，这是活动期间的游戏击杀计数和口算。他还遇过一次紫色掉落球为空，聊天尾段回复当天修了玩家此前报告的狗相关 Bug。轮盘抽出三份一个月 Premium Pass，中奖者开工单找 Cherry 领码。转录 [46:54–48:57](#t=2814)、[59:52–63:44](#t=3592)。[Devcon 8 官方公告](https://blog.ethereum.org/2025/12/23/devcon-mumbai) · [本期转录｜片尾与抽奖](transcription/2026-10-22.txt)

| 状态 | 10 月 22 日会上能确认的进展 |
| --- | --- |
| 已有 | 万圣节掉落、Mawkin 和首发 Candle Teleport；新版 Collector Profile 与 Shaman Rank。Euler 说网页 GEX 和基础机器人已能用，Mac 版 Forest Harness 已有。 |
| 已完成内容，正在测试 | 主线第三章与两座副本，目标 10 月 30 日送审。普通步行提速在调试，Windows Harness 接近发布。 |
| 开发中 | Forge、Great Tree 重启投入，较早一只无任务条件的开放世界 Boss 用于试多人系统，Zee Passives 已做开发。 |
| 设计或探索 | Prestige、新增最多约十只 Zee，地图、Auto Walk、伤害公式、游戏成就接入 Rank、非战斗 Zee 负重与献祭调整。FOREST 有用自家 Harness 批量做广告的计划。 |

## 九、我的整体评价

这场最值得看的是世界 Boss 的奖励能否把人聚在一起。低门槛、明显的落叶堆和同一时段刷新能让玩家碰面。最高伤害独享奖励也会让小队考虑带谁、最后怎么分，是否吸引一般玩家反复参加，要看同一组人会不会垄断奖励，以及失败者在现场是否还能得到有用的体验。这个实际结果比会议时描述的紧张感更能说明设计成效。

另外两个值得跟踪的是走路和 Rank。只要地图做得能自己认方向、旅行工具各有合适的路线，Mawkin 这种装备就有独立于战斗强度的用途。Rank 则需要让老玩家算得出自己的变化，并让无资产玩家知道哪些游戏行为将来真能加分。FOREST 的下一次检验已经很具体，做出来的可玩广告要有人愿意试玩，团队也要能在生产、测试和修改上节省时间。

资料说明：英文机器稿含时间坐标，无逐句说话人表。部分新 Boss 名称与少数昵称暂依原稿，规则按会前公告、会上口述和显式注明日期的后续版本核对。[英文转录存档](transcription/2026-10-22.txt)
