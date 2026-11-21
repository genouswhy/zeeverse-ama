# Zeeverse AMA 深度总结｜2026-02-26

2026 年 2 月 26 日｜Community Call｜主要发言 Jackal、Euler（依互称及上下文辨识）｜原稿无时间轴，片头已在交谈，时长待核

新手引导占用了团队一段时间，老玩家接下来能玩到什么？这场给出的次序是 **先上教程和界面重做，让主线分段接上副本，再把团队的重心移向 Great Tree、Forge 和后期 Boss**。会议也讲到了两种交易场景：游戏内 Marketplace 解决单件装备与 Zee 的挂单，GEX 继续围绕标准化资源和流动性池演进。FOREST 的重点则是用 Seed Vault 把交易、活动和空投接起来。

## 一、新教程是主线入口，修复图腾将影响老玩家的日常路线

[03:18](#t=198)

片尾重述了开场未录到的安排。团队希望**下一周**先推教程第一部分，让玩家认识背景故事、走入 Zeme，后续两座副本会分模块跟上。每推一个模块就能观察新玩家是否顺利通关，再调整后面的任务。界面同样在重做，小地图和原本难用的银行／Stash 是直接受益的地方。会前的 1.7.8 已去掉注册硬门槛，并缩小初始下载、优化副本加载。这一轮准备改的是进入之后学什么、故事怎么接。3 月 9 日的 1.8.0 才确认全新教程、界面、小地图和 Stash 一并发布，晚于本场提出的「下周」目标。 [1.7.8 更新日志](https://zeeverse.com/news/1-7-8-release-notes) · [1.8.0 更新日志](https://zeeverse.com/news/1-8-0-release-notes)

主线要把普通副本放进故事里，还会让玩家**修复图腾，之后在修好的图腾之间移动**。有玩家问靠近村庄的便利性，团队确认会有一处靠近日常活动位置，具体地名在转录中较含糊。免费主线图腾还得与 Great Tree、Umbra 等后期移动方式共存。金币和耗时都是会上列出的平衡手段，尚无定案。对高练度的玩家，前几座副本未必有挑战，图腾却可能减少日常打材料的折返。 [任务文档](https://whitepaper.zee-verse.com/gameplay/quests)

说到主线将让玩家修复图腾，主持人解释传送的新用途，以及它和后期传送需要怎样共存。

> **主持人** · [03:18](#t=198)
>
> “Upon restoring these totems, you'll be able to traverse in between them. However, uh, obviously, we're looking to balance this, because as you know, a free to play campaign versus the endgame quest. \[…\] We're still looking into the balance of these teleports, not to make them, you know, uh, too overpowered.”
>
> “修复这些图腾后，你就能在它们之间移动。不过，我们也在考虑平衡，毕竟这里要兼顾免费的主线和后期任务。\[…\] 我们还在琢磨怎么平衡这些传送点，别让它们太强。”

## 二、后期目标包括可反复挑战的 Boss、独有掉落和新的区域

[00:10](#t=10)

录音从一段已经开始的讨论切入：团队打算把为引导制作的内容再利用，做一场老玩家也有理由打的遭遇，加入 Boss 独有掉落与新机制。开场用 Vulcan 风格举例。后续答玩家「教程做完团队主要投入哪里」时，又提到 Great Tree 和 Forge 等任务会开放物品、区域和移动方式，其中有 Vulcan 以及拟做成多人体验的世界 Boss。两处提法都处于开发叙述，录音无法可靠地把每场战斗逐个对应到任务。

录音从交谈中途开始，主持人正在解释为新玩家做的内容如何用到老玩家能打的后期 Boss 战。

> **主持人** · [00:10](#t=10)
>
> “I think it's really cool that we found a way how we can um, uh, use the content and and and the stuff we are building for onboarding, and translate that into also a late game experience uh for existing player base. \[…\] It will offer uh boss unique drops.”
>
> “我觉得挺棒的是，我们找到了办法，把正在为新手引导做的内容也变成老玩家的后期体验。\[…\] 那场 Boss 战会有专属掉落。”

片尾给出的资源排序是先完成主线，再全面转向 Great Tree、Forge 和其他中后期内容。主线分段交付时两项任务已有工作并行，团队也会继续按进场数据小调引导。对于追问要分配多少时间、多久能玩到的玩家，会上只给出了优先级，未给可验收的日期、掉落表或组队规则。

## 三、Marketplace 拟卖稀有单品，链下 GEX API 服务池内交易

[07:22](#t=442)

| 玩家要做的事 | 会上给出的路径与进度 |
|---|---|
| 买卖有池子的标准资源 | 已有 GEX，资源用 $VEE 计价。在本场，团队提出向外公开链下 GEX API，让有技术能力的玩家能自行做程序化交易，列举了能量药。对外发布时间未定。 |
| 出售 GEX 没有上架资格的单件物品 | 拟通过独立的游戏内链下 Marketplace 挂单，以传奇护甲、Shield of Souls 为例，用 $VEE 结算。团队把使用体验类比 OpenSea 的逐件挂牌，交易发生在游戏内。功能在开发，依赖市场界面更新。 |
| 转手自己训练的 Zee | 团队当时同样把 Zee 列入拟开放的 Marketplace 挂单对象。录音未交代哪些 Zee、跨链执行方式或费率。 |

Euler 对 API 的期待是让参与者能管理链上和链下的价差与流动性，并提高已有资金在池子的利用率。这是团队解释开放工具的理由，实际价格和流动性效果未公布。GEX 文档能确认资源池的基础结构与 $VEE 计价，本期新增能力的状态仍以会议原话为准。 [GEX 游戏文档](https://whitepaper.zee-verse.com/economy/game-exchange-gex)

用能量药举例说明程序化交易后，Euler 回应了有人可能对交易工具有顾虑的问题，并解释为什么团队仍想开放 API。

> **Euler** · [07:22](#t=442)
>
> “If we want to enable people to uh manage liquidity, manage prices between uh on chain and off chain gap, uh, then then we kind of should give uh tools for people to do that. And and at the end of the day, the more the volume there is, the more utilization for existing liquidity there is.”
>
> “如果我们希望人们能管理流动性、处理链上和链下的价差，就该给他们相应的工具。归根结底，成交量越大，现有流动性的利用率就越高。”

## 四、FOREST 讨论了约 700 万枚质押，也把 Seed Vault 放在下一阶段中心

[15:16](#t=916)

玩家问起社区关注的**约 700 万枚 $FOREST** 锁仓。发言者称团队粗查后认为可能是一名交易者或一组交易者几个月前买入再锁仓。会上未给地址、交易哈希或可验证的账户归属。发言者也说，参与质押越多，按每枚质押币看到的 APY 越低是设计中预期的现象。这个回答交代了团队如何理解该笔锁仓，未公布新的收益率、奖励分配公式或价格结果。

平台侧展示了新版界面的一张示例图，目标是随后一周推新 UI 和模板。接入顺序先是 **HTML5 游戏／应用上传并挂到代币上**，然后再考虑用内置 AI 按文字描述生成作品。用 SEED 支付提示词生成、限制用量是提出的方案。2 月 17 日 FOREST 已公告面向发行者的 Staking Template，会上的能力预览处在此基础之后。 [Staking Template 公告](https://forest.inc/news/staking-template-critical-milestone)

在展示 FOREST 界面样图后，Euler 解释接入可玩内容会先开放哪一步。

> **Euler** · [15:16](#t=916)
>
> “Anyone will be able to upload their HTML 5 uh game or app, uh, on top of the coin. \[…\] We will be adding right after HTML 5, uh, support, uh, inbuilt AI game builder.”
>
> “任何人都能把自己的 HTML5 游戏或应用上传并挂到代币上。\[…\] 支持 HTML5 之后，我们还会加内置的 AI 游戏生成工具。”

被问到 Zeeverse P2A 第四阶段如何与 FOREST 空投衔接，团队当时主张使用 **Seed Vault 持续竞拍**，先从 $FOREST 开始，之后也可能加入合作项目代币。逻辑是发行新项目和交易活动产生 SEED，参与者再用它竞拍奖励。启动须等功能和其他环节到位，录音未给 P2A 第四阶段的活动日期、可用资格或个人份额。2025 年的公告已有基于 SEED 的领取思路，4 月 1 日公告才公开解释这一版 Vault 的限时奖池、份额和排名加成。旧交易赛最终获奖情况在现场交由 Cherry 核实，未当场结案。 [2025 年 SEED 领取规则](https://zeeverse.medium.com/forest-airdrop-unlock-the-seed-based-claim-model-4c230a66f55f) · [4 月 1 日 Seed Vault 机制](https://forest.inc/news/seed-vaults-the-economy-behind-the-forest-protocol-flywheel)

被问到 Zeeverse P2A 第四阶段怎样接上 FOREST 空投，Euler 解释为什么想把分发设计成持续竞拍。

> **Euler** · [19:25](#t=1165)
>
> “That's why uh we have a seed vaults where we will be handing out these air drops for the seeds, as ongoing thing, and I also think it's really cool because it kind of keeps um engagement active across the platform. Because there is al- constantly something happening.”
>
> “所以我们设计了 Seed Vault，打算持续让人们用 SEED 参与领取这些空投。我觉得有意思的是，这能让平台保持活跃，因为会一直有活动在进行。”

## 五、老玩家的活动先做小测试，社交道具和周边仍在讨论

[24:28](#t=1468)

- **链下 GEX 交易赛。** 团队现场提议用易参与的链下 GEX 做一次小试验。对「交易页看不到参与者，怎么证明排名」的追问，答复是先让数据团队每天导出结果，在 Discord 发榜。若受欢迎再考虑内嵌实时榜、持续举办。按成交量、盈亏或持仓时长计分都只是选项，物品范围、奖品和开赛日期会后再聊。
- **讨论秩序。** 交易赛话题引出对聊天反复争执的讨论，主持方回到对同伴保持尊重，并口头提到给两名成员一周冷静期，可继续看到内容。权限细节与后续执行在录音里没有可核结果。
- **种子与社交收集。** 玩家想到让 NPC 定期撮合不同种子的交换，例如周日出现的小摊。团队还聊到将新表情、NFT 表情、坐骑和非传统装备槽位接进 Discord 活跃奖励。设想中的获取渠道是以社区店内积分兑换或活动送出，物品可转手，店名和具体条件在原稿中待确认。这里的农作物种子与 FOREST 的 SEED 属于不同场景。
- **3D 打印和周边。** 有明确打印需求可联系团队讨论模型。毛绒玩具和未来 IP 伙伴仍是设想。会上展示的现有木盒收藏套装据称共 **25 套**且各有编号，包含手办及周边，未来拿一套做活动奖品只是随口举例。
- **片尾抽奖。** 道别时先提两张 Premium Pass，实际抽奖环节明确为 31 人名单转三轮，每轮一张一个月的通行证。中奖者需开 Discord 工单领码。

## 六、按本场口径看路线图

| 状态 | 内容 |
|---|---|
| 会前已有 | 1.7.8 游客入口及加载优化，GEX 资源交易和 FOREST Staking Template。 |
| 会上近期目标 | 新教程第一部分及 UI、接续的新手副本模块，FOREST 新界面与模板。 |
| 在开发或需后续确定 | 主线图腾和传送平衡、Great Tree 与 Forge、独有掉落与多人世界 Boss、游戏 Marketplace、链下 API、Seed Vault。 |
| 现场试验与构想 | 小规模 GEX 交易赛、Discord 社交道具、NPC 种子交换、AI 生成用 SEED 和未来的 IP 周边。 |

## 我的整体评价

教程重建能否帮到老玩家，可以看两个具体交付：主线推出后图腾能否减少常跑路线的折返，后期战斗能否给养成完成度较高的队伍提供独有奖励。对交易市场，过去只有标准化池子的资源容易比价，新 Marketplace 若能顺利接入稀有单品，玩家就有更自然的出货路径。GEX 小赛又提供了独立判断活动价值的机会，先看每日榜单能否说清计分和奖品，再看是否值得做内建功能。FOREST 的持续竞拍要另外看公开的轮次、资格和分配规则，会议里的 $FOREST 锁仓个案本身无法验证这套机制。

资料依据为 [2 月 26 日原始转录](transcription/2026-02-26.txt)。原稿为无分段、无时间戳的英语机器稿，开场缺录的内容只采用片尾复述。会中截图和聊天原文未归档。从项目公告可确认游客入口、教程与 UI 的交付日期以及 Seed Vault 的后续公开说明，主线传送费、后期奖励、质押归属和竞赛规则仍有上述缺口。
