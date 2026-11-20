# Zeeverse / FOREST AMA 深度总结｜新手任务拆成八段，Land 开始设计可升级的部落权益

2026 年 8 月 27 日｜Community Call｜主要发言人 Euler、Jackal（据对话互称辨认）

Zeeverse 想让新人先在村里做几件能独立完成的事，再去打地下城。老玩家等的却是第三章、戒指、藏宝图、Forge 和世界 Boss。团队这次给出了两种应对。新手体验仍占用游戏客户端的主要开发资源，Land 升级则尝试走网页端并行开发，把部落成员能享受的游戏权益接到土地上。FOREST 报告了 Builder 实测和云端托管的进展，创作者马上追问生成一款游戏要花多少积分。[本期完整存档转录](transcription/2026-08-27.txt)

## 一、八段 Finding Your Feet，把进地下城这件事往后放

Jackal 介绍，新版 **Finding Your Feet** 当时由八段任务组成，通过几个教学点分别教战斗、采集、制作等玩法。任务拆得短，玩家每做一小段就能看到结果。战斗导师 Coyote 会获得语音，教学点旁还放入三条可选支线，会上口述为 Hungry、Collector 和 Mudman，部分是口头简称。[Zeeverse 1.5.0 发布说明｜Coyote 名称](https://zeeverse.com/news/1-5-0-release-notes)

为什么延后地下城？Euler 拿开场约 15 分钟就让玩家跳进地下城举例。新人刚学完世界里的操作，进副本立刻又要学一套规则，手机玩家尤其容易在这里流失。新路径让玩家先打野生 Zee、熟悉资源与物品，再到 Mountainside 地下城，团队会通过新一批玩家的数据判断节奏合不合适。8 月 31 日发布的 1.17.0 说明确认了多任务结构、可选支线和 Mountainside 解锁路线改造。同版把技能界面改为一屏查看，调整了起始区野生 Zee、追踪最新接取的任务，也改善了字体和堆肥操作。Jackal 会上用 Compost Bin 可一键放入整批浆果或种子解释这类操作简化。[Zeeverse 1.17.0 发布说明｜会后，8 月 31 日](https://zeeverse.com/news/1-17-0-release-notes) · [本期转录｜堆肥操作](transcription/2026-08-27.txt)

Jackal 问为什么拉长前期流程。Euler 举例说明，地下城有一套近似另一款游戏的规则，玩家需要先有时间熟悉地面玩法。

> **Euler**
>
> “And if within the first 15 minutes, when the player is entering the world, like completing all the tutorial, we say, ‘Yo, uh, doesn’t matter what you just learned in this world, let’s going to the dungeon.’ It’s, uh, it’s sometimes, uh, too much.”
>
> “如果玩家刚进世界的头 15 分钟，才把教程做完，我们就说：‘嘿，刚才在这个世界里学的东西先放一放，来打地下城吧。’有时这一下给得太多了。”

**Mudman 支线怎么连起两门技能？** 待发版本把关闭中的 Heist 移出起始区，原区域用来布置黏土矿点。支线让玩家挖黏土、加水并用陶轮做新面具。Jackal 把任务过后反复制售面具放在 1.18 的计划里，口头估计是每件约 20 Spirit。他想给低等级玩家一个既练 Mining、又练 Crafting、还能挣少量 Spirit 的活。**会后**，官网与 App Store 均记录 1.17.1 于 9 月 7 日发布。该版日志已列出完成 The Mudman 后向村民出售 Clay Mask，也确认了挖黏土、湿润黏土及做面具会给技能经验，未列售价。[Zeeverse 1.17.1 发布说明](https://zeeverse.com/news/1-17-1-release-notes) · [App Store 版本历史](https://apps.apple.com/lv/app/zeeverse/id6755680403?platform=mac)

## 二、Land 升级拟消耗 $VEE，收益落到部落成员身上

Euler 认为当时的 Tribe 主要有名称和专属聊天频道，能一起做的事有限。他提出让 **Land 所有者消耗并销毁 $VEE 来升级土地**。土地等级提高后，所有者和同部落成员会得到更好的 Perks，例如经验加成、加快体力恢复。土地类型及稀有度也可能影响 Perks 的种类或强度。“50 级”用于解释逐级加成，会上没有公布最终等级与成本表。游戏文档另有抵押 Genesis Mask 到 Land Altar 获取 Blessings 的机制，升级加成与既有祝福怎么共同生效还没有说明。[Land 概览](https://whitepaper.zee-verse.com/lands/overview) · [Land Blessings](https://whitepaper.zee-verse.com/lands/blessings)

玩家问这个系统会不会排在主线第三章之后。Euler 说，大部分升级流程可以放在 Zeeverse 网站的 Dashboard，游戏端只需实现权益，网页团队因此有机会独立推进。他倾向升级较早推出，同时保留了先后不确定性。另有人询问能拿多少 Seeds，会上让玩家先看 **Collector’s Profile** 的实际计算结果，并提到 Mask 和 Land 组合可能相关。这里的 Seeds 查询与 Land 升级设想是两段讨论。[本期转录｜Land、Perks 与 Collector’s Profile](transcription/2026-08-27.txt)

被问到 Land 权益会在第三章之前还是之后上线，Euler 说网页端有机会并行开发，较早发布只是他的判断。

> **Euler**
>
> “The good good thing about this is that, uh, because it’s on the web, we can allocate resource, uh, from, um, uh, from different depts that are not as booked, so they are not like really combined together. Uh, so, honestly, I don’t know. I, I think it’s gonna come sooner than than that.”
>
> “这件事的好处是，因为它在网页上做，我们可以从没排得那么满的部门调人，所以两个项目并不完全绑在一起。老实说我也不知道，我觉得它会比那个更早出来。”

## 三、第三章已有后端，发行仍优先照顾新人和客户端修复

社区追问第三个大型任务、Forge、世界 Boss、戒指和藏宝图的时间。Jackal 说，**戒指和藏宝图随第三章来**。第三章后端据称已做完，美术仍在制作，前端和他负责的对话也还需要补。倘若全员马上转去做这项工作，他估计约两周可推进到测试或收尾。当时仍在根据数据反复修改新手流程，所以这段估算没有成为排期，Forge 和世界 Boss 同样没有发布日。

回答第三章、戒指和藏宝图何时能做完时，Jackal 给了一个以全员转向为前提的估算，当时人员仍优先投入新手流程。

> **Jackal**
>
> “If we like drop everything, it would take us around two weeks to get our testing, to like finishing, but um time is literally money, and uh onboarding efforts is uh where we are uh want want to spend our time and money into.”
>
> “如果我们放下手里的一切，大概要两周才能推进到测试和收尾。但时间就是钱，我们现在还是想把时间和钱花在新手体验上。”

地下城无法进入怎么办？Jackal 会上向 Cherry 核对后转达，团队已有修复，玩家端还要等新客户端。他特别提到 Epic 的 Mac、Windows 版和 Google 审核当时尚未完成。开头说预计次日推更新，后面则说争取当日，并提到计划用 1.17.1 处理较小问题。能独立核验的是官网 8 月 31 日刊出了 1.17.0 日志，各端实际可下载的小时和这些阻塞何时解除仍待查。[本期转录｜第三章、平台审核与收尾](transcription/2026-08-27.txt) · [1.17.0 发布说明｜会后，8 月 31 日](https://zeeverse.com/news/1-17-0-release-notes)

## 四、Daily Quests 想按等级给任务，99 级需要有可见的回报

8 月 12 日的 1.16.0 已加入每天四项 Daily Quests。Jackal 形容当时的任务对所有人相同，接下来想让任务跟技能走，例如挖矿达到相应等级后接到挖煤，完成后还有 XP。仍在讨论的是先做三个日常，再解锁第四个抽奖任务，奖励可试更高阶的矿石或进化碎片。会上用 **100 个碎片换 1 枚进化石、换一次免费进化**说明免费玩家也可以用时间换取进度，未给定最终兑换率或获取速度。[Zeeverse 1.16.0 发布说明｜8 月 12 日](https://zeeverse.com/news/1-16-0-release-notes) · [本期转录｜Daily Quests](transcription/2026-08-27.txt)

玩家问 Taming 99 级有没有标志。Jackal 想给技能满级玩家一个可见的外观奖励，谈到 Skillcapes，也用紫色光环、身上带火举例。具体视觉仍未定，日常改版的设计则更主动在推进。他还提到总技能等级和总等级排行榜，考虑在昵称附近显示综合等级，同时担心和部落标签挤在一起。会上表扬 Boyman 的 Karu，官方会后日志列出两座纪念雕像，分别纪念首个升满 Karu 全部 Traits 的玩家，以及首个把四项 Traits 提到 20 级的玩家。转录前后谈到不止一个“首个”，应按各自范围理解。[技能文档｜99 级上限](https://whitepaper.zee-verse.com/gameplay/skills) · [Zeeverse 1.17.0 发布说明｜会后，8 月 31 日](https://zeeverse.com/news/1-17-0-release-notes)

## 五、生活技能的首要问题是手感，背包规划仍是玩法的一部分

Jackal 集中谈了采集误触、动画等待、筛选找物、制作清单滚动等操作摩擦。以钓鱼为例，他估计一次动画约 12 秒，其中约 7 秒属于额外的演出包裹。他想重做多项技能的动画，先保留伐木、采矿每砍一下或敲一下判定一次成功的结构。玩家抱怨战斗镜头频繁切换，他起初听成场景切换，澄清后表示也希望补回可像原来一样摆放的镜头选项。短战斗的演出效果和长战斗的可操作性需要同时照顾。

**Bonfire** 是会上比较完整的例子。团队想缩小村里禁止点火的范围，让玩家能在离 Stash 更近的位置生火。其他玩家能持续加木头续火，以略少的经验换取低操作频率，附近的玩家也可以借同一个火堆烹鱼。有人问会不会恢复熟鱼制体力药水，Jackal 明确回答不会，同时承认食物用途和给 Zee 喂食值得再做。这项配方已在 1.16.0 移除。[1.16.0 发布说明｜8 月 12 日](https://zeeverse.com/news/1-16-0-release-notes) · [本期转录｜钓鱼、镜头与 Bonfire](transcription/2026-08-27.txt)

Jackal 用几名玩家同时添柴、烤鱼来说明共享篝火的用途。人数是举例，这套玩法仍是构想。

> **Jackal**
>
> “For example, two two people are like bonfire in the bonfire, immediate instantly refreshing the duration of the fire, right? Uh, then, for example, there’s like three other people coming to cook their fish on the fire, and thus making both fire making and cooking a social experience.”
>
> “比如有两个人在篝火旁添柴，立刻延长火堆的持续时间，对吧？再有三个人过来用同一个火堆烤鱼。这样生火和烹饪都会变成能和别人一起做的事。”

另外几项属于向玩家征求意见的方案。

- **Dungeon Chests**。当时战利品会自动进入 Stash，Jackal 因此追问随身背包的用途。他设想副本里超出随身栏位的战利品先放在地下城箱子，再运回村里的 Stash，或消耗 Spirit 远程转运。拿空背包能刷约 40 波、溢出箱暂存 20 格只是例子，任务扩容也是配套设想。值不值得让挂机玩家折返仍是公开问题。
- **Teleport Tablets 和 Soul Pouches**。玩家抱怨施法要带多种 Souls。回应之一是把黏土和几种 Soul 预制成一块传送石板，让传送只占一个格子，并考虑让石板可回收。另一种思路是制作可选装若干种 Soul 的袋子，再靠任务或 Crafting 升级。Jackal 说团队通常希望保留 20 格背包，让玩家挣到减轻占格的工具。官方文档解释了施法为何牵涉多类 Souls。[Shamanism 技能文档](https://whitepaper.zee-verse.com/gameplay/skills/shamanism)
- **Stash 和动作改良**。面对右键装备问题，他提出自订分页，把农具或外观装备分开存、打开 Stash 时直接换装，也希望研究能否边走边转化物品、一次连续装水、缩短上坐骑的操作。玩家遇到类似卡顿可以直接提供具体动作。

## 六、FOREST 已部署云端托管，下一步要把生成成本降下来

Euler 说，AI Builder 已在主动测试，大体能拼出简单的链上游戏和应用，欢迎社区拿试用积分给真实反馈。按会上说法，**Forest Cloud 已部署**，目的是把过去需要各自找云主机的托管环节接进平台，也方便保存不宜只放在前端的数据。他把重点放在使用现有模型的 Harness、托管和经济基础设施。SDK 对 MCP 的支持是 Euler 当时带保留的说法，Agent 自行创建或部署游戏属于他用来说明方向的设想。[FOREST 7 月 3 日 Playkit 公告](https://forest.inc/news/forest-playkit-infrastructure-behind-zeeverse-economy) · [Forest Cloud 文档｜机制背景](https://forest.inc/docs/whitepaper/forest-cloud)

有试玩者说功能像魔法，但怕积分消耗太快。Euler 回答正在找质量与成本更合适的模型组合，想让使用者在推理能力较高和较省积分的模型之间选择，也在研究接入用户已有的订阅，以自己的模型账户承担费用。两种做法都在研究，他用个人订阅和 API 计价差异解释成本，并未给出 FOREST 的新价目表。

试玩者喜欢生成效果，却担心积分消耗。Euler 先谈了可选低成本模型，再提出接入自有订阅的研究方向。

> **Euler**
>
> “And then on the other hand, which is a bit more hackish, uh, we are looking in a way how you could uh just connect your subscription uh to Forest Harness \[…\] and and essentially use your own subscription plan, and and skip paying for credits and tokens altogether.”
>
> “另一方面，有个稍微取巧一点的办法。我们在研究怎么让你把自己的订阅接到 Forest Harness，直接用订阅额度，省掉为积分和 token 额外付费。”

会上还提到近期有交易与跨市场套利带来平台手续费。Euler 想研究用这些手续费持续回购 $FOREST，并继续与其他交易所接触，未公布执行比例、新交易所或落地日期。他也预告下一周到台北参加 Mr. Block 峰会。主办方列出的活动日期为 9 月 4 日，参与名单列有 Zeeverse 和 Forest。[本期转录｜FOREST 问答](transcription/2026-08-27.txt) · [Mr. Block Summit 主办方活动页](https://www.accupass.com/event/2608211102381945389551)

## 七、片尾与当时路线图

Euler 提前离场后由 Jackal 接手。他做了三份一个月 Premium Pass 的轮盘抽奖，获奖者可提交工单向 Cherry 领取代码，转录中的个别昵称拼法难以确认。Jackal 计划用自己做的自动转录和摘要工具更快发布本次录音与文字，也希望大家把钓鱼、换装、装水和上坐骑这类可复现的操作问题发给他，预计两周后再开会。[本期转录｜抽奖及片尾](transcription/2026-08-27.txt)

| 状态 | 8 月 27 日会上能确认的进展 |
| --- | --- |
| 会前已有 | 每日四项任务，熟鱼制体力药水配方已移除。Euler 说 FOREST 已部署云端托管，Builder 正在试用。 |
| 等客户端发布 | 多段 Finding Your Feet、技能界面和多项体验改动正在等平台批准。官网随后于 8 月 31 日刊出 1.17.0 日志。 |
| 开发中或近期目标 | Land 网页升级与游戏内 Perks、改良 Daily Quests、技能内容和动画。第三章已有后端，仍需美术、前端、对话与测试。 |
| 设计或征求意见 | 第四日常抽奖、新材料及免费进化途径、技能满级外观、地下城箱子、多人篝火、传送石板与 Soul Pouch。FOREST 的模型选档、自带订阅和手续费回购也在讨论。 |

## 八、我的整体评价

我最想看的是两组数据。第一组是新玩家能否从一项短任务顺利走到首次野战和首次地下城。任务拆得更细给了团队观察流失点的机会，Mudman 这种把 Mining、Crafting 和少量收益连起来的支线，也能让玩家理解为什么要学技能。第二组是 Land 升级后有多少普通成员愿意主动入 Tribe、留在 Tribe。经验或体力加成很容易让顶级土地在招募上更强，土地之间能否有真正适合不同玩家的 Perks，要等规则和实际效果。

老玩家已经给出了不少能直接落到产品的例子，钓鱼做一次耗多久、换装需要开关几次 Stash、常用传送占几个格子，都比抽象地评价“顺不顺”容易核实。对 FOREST，值得看的是同样规模的一款小游戏能否用更少积分做完，并且部署后真的有人能打开、玩和愿意回来。

资料说明：英文机器稿为单段文本，开头从一句话中间切入，缺少原始时间轴、完整时长和逐句说话人标注。各端解禁时间、Clay Mask 售价、进化碎片正式兑换条件和 Land 升级排期未获核实。[英文转录存档](transcription/2026-08-27.txt)
