# Zeeverse / FOREST AMA 深度总结｜首日留存改善，主线第三章与 Forest Studio 接下来怎么交付

2026 年 9 月 10 日｜Community Call｜主要发言人 Euler、Jackal（据对话互称辨认）

新版入门的一个意外是，团队想把强制教程压到约八分钟，实际串起来却接近四十分钟。尽管中途流失比预期多，Euler 仍报告 D1（首日）留存指标约提高 30%。接下来他们一边修掉把人卡在教程里的步骤，一边把开发安排延伸到玩家第三天、第七天能玩的内容。Jackal 展示了主线第三章的两座地下城，Euler 则预告 Mac 版 Forest Studio，想让创作者用手里的 AI 订阅做链上小游戏。[本期完整存档转录](transcription/2026-09-10.txt)

## 一、入门流程的意外结果，把强制引导缩短仍是要做的事

[05:37](#t=337)

Euler 回顾，旧流程约三十分钟，下一版约十六分钟。团队观察到，普通手机玩家大概给游戏十分钟决定要不要继续。本来想让玩家做完开场 **Arrival** 就能自行探索，再自行接短任务，实际却把一串子任务也做成了强制引导。团队测到需要约四十分钟，与预期的八分钟相差很大。Euler 报告新版的 **D1 留存指标约提高 30%**。会上没有给绝对留存率、统计窗口和对照样本分组，也无法判断哪些具体改动带来了提升。他提到每天有数百名新玩家供团队观察，未给本项实验的准确人数。8 月 31 日的官方 1.17.0 日志确认了 Finding Your Feet 改成多段探索、战斗、采集和制作任务的背景。[Zeeverse 1.17.0 发布说明](https://zeeverse.com/news/1-17-0-release-notes) · [本期转录｜教程时长与留存](transcription/2026-09-10.txt)

Euler 回顾入门设计时说，团队本想让玩家做完 Arrival 就自行探索。虽然串起来的教程超出预期，他仍报告 D1 留存指标约提高 30%。

> **Euler** · [05:37](#t=337)
>
> “We ended up kind of forcing people into these, um, uh, sub quests. So essentially instead of like cutting down tutorial to like 8 8 minutes, we ended up ac- actually increasing it like 40 minutes.”
>
> “结果我们又让玩家不得不做这串子任务。本来想把教程缩到大约 8 分钟，实际却增加到了大约 40 分钟。”

“我的斧头去哪了？”是最常被团队观察到的公开聊天问题之一。Jackal 解释，**Back in One Piece** 当时把身上的物品归进 Stash，目的是防止任务卡死，玩家因此可能找不到原来的斧头。他们想简化流程，也在调打开地图及过场时锁定操作的体验。Euler 鼓励老玩家用新账号从头玩一小时，原账号已通过的旧步骤很难暴露这类问题。会后 1.17.4 日志确认 Back in One Piece 减少了限制，也简化副本进程与奖励。[Zeeverse 1.17.4 发布说明｜会后 App Store 9 月 22 日记录](https://zeeverse.com/news/1-17-4-release-notes) · [App Store 版本历史](https://apps.apple.com/lv/app/zeeverse/id6755680403?platform=mac)

## 二、普通攻击回到一键选敌，野战里按奖励类型减少捡取

[18:29](#t=1109)

野生 Zee 战后，团队想让 **Spirit 直接入手**，将基础收益与其他需要玩家留意的掉落区分开。另有地图上的 **Corrupted Zees**，设计类似 Guarded Treasure Chests 的路上遭遇，击败后可给 Souls、遗物等。战斗动画改版曾让普通攻击从点击敌人变成先选普攻、再选敌人。Euler 希望把普通攻击恢复成直接点可见敌人，保留特殊技能的选择步骤。至于锁定镜头，会上没有近期改动安排，Euler 称未来若做，可能会考虑能自由调整方向的镜头。步速、动画速度也只是好手感的候选改动。

Euler 说战斗动画改版后，玩家得先按普攻按钮，再点对手。他接着说明在什么条件下可以省掉第一次点击。

> **Euler** · [18:29](#t=1109)
>
> “If you want to direct attack, you can just click on a, ju- just click on opponent, and if the opponent is in your visible range, you won't be required to do essentially two actions too do an attack.”
>
> “如果想直接普攻，点一下对手就行。只要对手在你看得见的范围，就不用为了打一下操作两次。”

**会后可核对的部分**。App Store 9 月 10 日记录 1.17.2，官网说明它是副本选关无限载入修复。随后 1.17.3 加入地图上一次性掉落奖励的 Corrupted Zees，并把战斗开始时的普攻预选打开。1.17.4 明确记载野生 Zee 的 Spirit 飞向玩家，以及同时行动并行以加快野战。App Store 将后两版分别记在 9 月 12 日和 9 月 22 日，这些记录只覆盖该渠道和日志列出的功能。[1.17.2 发布说明](https://zeeverse.com/news/1-17-2-release-notes) · [1.17.3 发布说明](https://zeeverse.com/news/1-17-3-release-notes) · [1.17.4 发布说明](https://zeeverse.com/news/1-17-4-release-notes) · [App Store 版本历史](https://apps.apple.com/lv/app/zeeverse/id6755680403?platform=mac)

## 三、第三章预告 The Ship 和 The Wicker，旧 Mr. Block 宝箱要等装备槽

[28:27](#t=1707)

Jackal 在会上放出两座地下城的选关画面。他预告 **The Ship** 在末段设置一位 Boss，**The Wicker** 则准备让两个 Boss 同时出战，配套双目标机制。Boss 图当时仍在做绑定等工作，现场没有公布。高等级 Zee 可能很快刷过基础难度，因此还讨论了 **Prestige**。设想是在主线 Campaign 完成后，通过小任务或互动解锁旧地下城的高难版本，沿用原来的 Boss，提高难度与奖励，并考虑第二档类似 Nightmare 的 **Prestige+**。Forge 每波 Boss 更大更强是团队试过的相关思路。高难版本仍是设计讨论。[本期转录｜副本预告](transcription/2026-09-10.txt)

看过两座新副本的预览后，讨论转到高等级队伍可能快速打过基础难度的问题。会上设想通关主线后才能解锁 Prestige。

> **主持人** · [28:27](#t=1707)
>
> “And prestige mode will give you a chance to go back into the dungeons, uh, into the old dungeons, and they won’t play out exactly the same, uh, but the bosses will be the same. But everything will be at much much higher difficulty level.”
>
> “Prestige 模式会让你有机会回到旧地下城。打起来不会完全一样，Boss 还是原来的 Boss，但整体难度会高得多。”

有玩家问 Mr. Block 的箱子。Euler 理解为上一年活动流传下来的宝箱，称内含戒指与项链这种新装备类型，计划在主线第三章解锁相应装备槽时或其后不久开放。第三章、藏宝与装备槽是相关交付件，各自准确开启时间仍待后续确认。Jackal 希望下周重新主动投入第三章，继续保留新手体验为首要优先级，Heist 也预计同期重新拾起。团队估计第三章集中做加上测试需两到三周，Jackal 随口问过十月中旬作为可能窗口。**会后**官方在 1.18.0 中列出正式任务名 **Third Time’s the Charm**、两座新副本和挖宝系统，App Store 把这一版记为 11 月 2 日。[Zeeverse 1.18.0 发布说明](https://zeeverse.com/news/1-18-0-release-notes) · [App Store 版本历史](https://apps.apple.com/lv/app/zeeverse/id6755680403?platform=mac)

## 四、Heist、锦标赛、旧活动道具和 AI Mask 的问答

[12:51](#t=771)

- **Heist 和多人内容**。恢复 Heist 的方向仍在，当前每天的开发分配优先处理新手体验。Euler 把社交、多人玩法、新 Campaign 和更往后的进度作为首日改善后要接住的内容。玩家问锦标赛时，Jackal 说游戏改动很多，赛事状态还需检查，可能要重测，短期没有恢复排期。
- **Shells 和 Belt**。两类旧物品仍属于活动历史资产，团队讨论过用途，当前未排高优先级。Euler 提到更换个人头像、买入 Mask 是自己的行为，用来表达对收藏的态度。相关玩笑和昵称不能用来判断未来机制或价格。
- **Mask 搭配 AI Agent**。Euler 说在 FOREST 实做 Agent 后，更清楚让 Agent 在游戏中持续运转会有 API 成本，也要解释清楚它给游戏增加什么。部分低操作频率玩法或许可探索，会上没有可确认的启用模式。[本期转录｜锦标赛、旧道具与 Masks 问答](transcription/2026-09-10.txt)

## 五、FOREST 公布 Forest Studio，先接 Mac 上用户自己的 AI 订阅

[38:56](#t=2336)

Euler 上周在台北 Mr. Block Summit 介绍 Forest Studio，这次跟社区讲了首版设想。网页 Builder 由平台调用模型 API，用户为生成消耗积分。Euler 用约 20 美元的 API 成本举例，说明创作者会觉得做一次简单实验太贵。团队当时正在测试的新 **Forest Studio（Forest Harness）** 放在本机运行。会上的下一周目标是先给 Mac 版接 OpenAI 账号，让已有 AI 订阅的用户用自己的额度。所谓“免费”针对免用原网页 Builder 的平台积分或另付其 API 成本的设想，现有订阅仍有自身额度与费用，链上发布也有流程与网络费用。

Euler 用一次简单实验可能花约 20 美元说明网页 Builder 的成本，再介绍 Mac 版目标。这里的免费以用户已有订阅为前提。

> **Euler** · [38:56](#t=2336)
>
> “We will be releasing next week this harness that you will be able to use on your Mac, and connect, you will be able to just connect with your, uh, OpenAI account. And use your existing charge of the subscription. So in practice, you will be able to use the currently best available models essentially for free.”
>
> “我们计划下周发布这个 Harness，你能在 Mac 上用它，也能连好自己的 OpenAI 账号，使用现有订阅的额度。这样一来，你基本不用额外付费，就能用目前最好的模型。”

Studio 计划提供项目管理、修改不同模块和 Tokenomics、查看源代码与日志的开发者视图。Forest Cloud 承担托管，Playkit 和平台承接钱包、结算及发行流程。Euler 用五分钟生成一个带推荐、跨地区榜单的小点击游戏，以及会中即兴讨论的 PvP 跳跃游戏描述原型速度。这些是示意，没有可逐项验收的交付指标。现行官方指南可核实开发者视图与发布流程。9 月 24 日的后续会议开场才明确说 Studio 是前一日发布，可以回看该场整理首版时间。[Forest Harness 官方指南｜功能背景](https://forest.inc/docs/creator-playbook/forest-harness) · [Mr. Block Summit 活动页](https://www.accupass.com/event/2608211102381945389551) · [9 月 24 日转录｜会后发布口径](transcription/2026-09-24.txt)

## 六、Remix 想让原作者拿到手续费分成，跨链看生态支持

[47:18](#t=2838)

Euler 提出的 **Remix** 是从已有作品继续改规则、换品牌，原作可以有后续收益。他用 Gold Miner 和 Diamond Miner 受到玩家讨论的经历说明，玩家最关心的有时是改几条规则。会上举例，衍生作品做成后，原作者可能获得约 **5% 的手续费分成**。他说的是衍生作品手续费的一小部分，会上没有形成正式费率表。有人问为何不从头做以省去分成，Euler 承认可以独立开发，认为 Remix 的路径靠节省重复工作和支持原作者来吸引创作者。大量衍生作品产生以 $FOREST 配对的流动性池，是他描述的增长设想，尚无按该机制运行的数据。[本期转录｜Remix 问答](transcription/2026-09-10.txt) · [$FOREST 与 Seed Economy 官方文档｜经济机制背景](https://forest.inc/docs/whitepaper/forest-and-seed-economy)

Euler 先提到 Diamond Miner 和 Gold Miner 已引发玩家讨论玩法还能怎么改，然后用一笔改作产生的手续费举例说明原作者能得到什么。

> **Euler** · [47:18](#t=2838)
>
> “If you succeed, then then small, more small percentage around 5 percent of the fees will go towards the original creator, which then inspires people actually build cool stuff, even if they don’t have a big strong social following.”
>
> “如果你的改作做成了，手续费里会划出一小部分，大约 5%，给原作者。这样即使创作者在社交平台上没那么多关注，也会有动力做点有意思的东西。”

社区问 **Robinhood Chain**。Euler 说 FOREST 技术上大致能适配它和其他 EVM 链，仍有几天左右的收尾工作，实际发行还取决于时机、社区和生态支持。Robinhood 已于 7 月公布其主网，FOREST 并未在会上宣布已经部署。营销方面，团队考虑 Builder 奖励、替活跃创作者承担 AI 订阅费、新应用交易赛、Seed Vault 等，未说明报名或发放细则。[Robinhood 主网上线公告｜7 月 1 日](https://robinhood.com/newsroom/robinhood-accelerates-global-expansion-robinhood-chain-mainnet-stock-tokens-agentic-trading/) · [本期转录｜跨链和营销问答](transcription/2026-09-10.txt)

有人问 Zeeverse 与 FOREST 如何互相帮助。Euler 提到 Zeeverse 的 Masks 或资产可能接入权益，社区也可以用 Zeeverse 资产做小游戏，未来可考虑给 Harness 一个素材库。他还用预测市场、寻宝和 P2A 活动说明工具可服务游戏之外的项目。这些是产品方向，会上没有确定两边的权益或价格。Euler 先行离场后 Jackal 抽出三份一个月 Premium Pass，得奖者提交工单领取。片尾再次请大家试玩新手流程，两位预计两周后再见。[本期转录｜双方协作及片尾](transcription/2026-09-10.txt)

## 七、当时路线图

| 状态 | 9 月 10 日会上能确认的进展 |
| --- | --- |
| 已有 | 多段 Finding Your Feet 在运行，团队已收集到首日留存与聊天反馈。 |
| 继续修整 | 减少强制教程、调整 Back in One Piece、改善战斗与 Spirit 拾取。随后数个小版本交付了其中一部分。 |
| 恢复开发及近期目标 | 主线第三章有 The Ship 和 The Wicker 的选关预览，装备槽、宝箱与藏宝玩法随章节或其后推进。Heist 希望重新投入。Forest Studio 在测 Mac 版与自带 AI 订阅。 |
| 探索中 | Prestige 与 Prestige+、赛事与历史资产用途、游戏内 Agent。FOREST 的 Remix 分账、创作者补贴、跨链及与 Zeeverse 资产互通仍待明确。 |

## 八、我的整体评价

这场最有价值的是团队把教程做错的地方讲具体了。任务内容越丰富，初期能展示的玩法就越多，连续锁住玩家也更容易把人赶走。首日留存约提升 30% 可以作为继续验证的信号，值得用同一批渠道与统计口径看前十分钟的退出点、首次地下城到达率，再顺着看第三和第七天。对于老玩家，双 Boss 和以后可能开放的 Prestige 能让同一座副本面对不同阶段的队伍，前提是难度会改变打法，战利品也有回刷价值。

Forest Studio 想降低的是每次把想法做成可玩原型的成本。对创作者来说，第一次接通自己的模型账号、做出一版并成功发布，比现场演示能多快生成更能说明门槛。Remix 若要在此基础上形成真实利益，原作需有可复用价值，分成计算和归属也要让两边都能查到。

资料说明：英文机器稿为单段，无可用时间轴、完整时长和逐句说话人表。斧头抱怨的次数在转录里无法可靠辨认，保留趋势。留存指标、周期估算、Forest 费率与跨链承诺均保持会上限定。[英文转录存档](transcription/2026-09-10.txt)
