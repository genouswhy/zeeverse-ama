# Zeeverse / FOREST AMA 深度总结｜2026 年 7 月 2 日

2026 年 7 月 2 日｜Community Call｜主持：Jackal（Euler 因病缺席）｜[英文转录](transcription/2026-07-02.txt)

Jackal 一个人回答了这场最尖锐的问题。团队仍把新手留存摆在第一位，现阶段能同时惠及老玩家的，是**更快的采集、重做的战斗界面、Heist 的有限度恢复，以及用战斗模拟检查过强的组合**。Jackal 在会上直接说，现有内容仍缺一个完整的终局，Great Tree、Forge 和更有难度的 PvE / PvP 是下一阶段要补的部分。

对已有角色和装备的玩家，这次有两个即时消息。Jackal 说砍树已经从三斧才判定改成每斧判定，6 月 11 日的更新日志则列出了 **Taka 跟随协助伐木**。Heist 的最新回归口径是先按三只 Zee 上线，再投票决定是否改成五只。 [6 月 11 日 1.13.0 更新日志](https://zeeverse.com/news/1-13-0-release-notes)

## 一、砍树每斧判定一次，采矿随后做同样调整

Jackal 说投放一直在跑，团队按天观察新手在哪里流失。近期调整了 **The Well** 的平衡，也提到撤掉过一个稀有宝箱相关步骤，以减少卡住或绕路。6 月 27 日的正式补丁同时优化了 **Finding Your Feet**、Joran 带领的村庄游览、任务进度和野生 Zee 战斗。会上没有披露本轮留存率。 [6 月 27 日 1.14.0 更新日志](https://zeeverse.com/news/1-14-0-release-notes)

Jackal 说旧的伐木动画要连续砍三下，再判定一次是否得到木材。新做法是**每次挥斧立即判定**。他粗略估计，到了需要反复尝试的较高级树木，经验获取速度可能接近原来的三倍。这来自判定频率变化，实际体验仍取决于树种、成功率和动作耗时。矿镐在会上仍按三下判定一次，计划下一步转为每下判定。 [本期转录（采集问答）](transcription/2026-07-02.txt)

Jackal 说明近期伐木改动，并对照了单次判定之前玩家必须等多久。

> **Jackal**
>
> “So, previously there was a woodcutting animation that, uh, essentially was you chop three times, and then you roll for success. \[…\] The animation now is a one chop long, and the success chance is calculated, uh, immediately. So with every chop you have a chance to acquire a log.”
>
> “以前伐木动画基本是连砍三下，然后才判定成功与否。\[…\] 现在动画只有一斧那么长，成功判定马上就做。所以每砍一下，就有机会拿到一根原木。”

农田旁的 **Compost Bin** 已在 6 月更新加入，可减少堆肥来回跑动。 [6 月 11 日 1.13.0 更新日志](https://zeeverse.com/news/1-13-0-release-notes)

玩家说种下种子后立即点浇水会遇到 Shaman 正忙，建议能**排队执行连续动作**。Jackal 认可这个体验问题，具体实现和排期还未定。玩家另问的是叫 **Woodworker** 的 NPC 功能。他澄清之后表示，计划让 Woodworker 代做 Sawmill 的木料加工，把原木变成木杆等制品，稀有材料会多花一些 Spirit。还想为 **Hoarder** 增设售卖基础生活技能物品的标签，让工具丢失后有补购机会。 [1.7.7 更新日志（Woodworker 名称）](https://zeeverse.com/news/1-7-7-release-notes)

## 二、Taka 被动已经有实际效果，进化后希望继续强化

把 **Taka 设为 Active Follower**，去砍树时能看见它参与。Jackal 说它在后台小幅提高 **Woodcutting Power**，这个属性关系到伐木成功率。拟在后续版本把被动详情显示在 Zee 详情页，其他 Zee 也会获得相应的被动。会上未公布 Taka 具体加多少成功率，也没有逐种列出其他 Zee 的效果。 [6 月 11 日 1.13.0 更新日志](https://zeeverse.com/news/1-13-0-release-notes)

有人问进化后是否还会协助伐木。Jackal 的起始设计是让进化后保留功能并增强它，以免进化后失去玩家喜欢的用途。玩家口述用 Chaka 举例，当前已上线的伐木案例是 **Taka**。 [官方 Zeedex（Taka 与 Chaka）](https://whitepaper.zee-verse.com/gameplay/zee/zeedex)

技能还拟增加一个**总榜**，把账号各项技能合起来展示，给多项生活技能都有积累的玩家一个比较位置。当时已有工作项被接手，正式计算公式、显示值和发布时间仍待确认。

## 三、新战斗界面已在测试服，自动战斗视角锁在 Shaman 身后

Jackal 给社区看了两个概念界面，一是 **Zee Inspect**，二是 **Shaman Inspect**。新设计要让角色与收藏更有存在感，也处理大型面具超出现有框的问题。另有一段 **3v3 / 5v5 战斗**视频，Jackal 强调它来自测试服的实际实现。Shaman 会在战斗场景里出现，因为能施法、喂食，出击仍由 Zee 负责。开启自动战斗时，镜头计划固定在玩家的 Shaman 身后，避免一直跟随各个技能切换。

展示新版 3v3 / 5v5 战斗后，Jackal 先回答自动战斗镜头会如何处理，再说明 Shaman 为什么会进场。

> **Jackal**
>
> “Autoplay will lock the camera behind your Shaman. So you, so it'll just play out normally like that. It's quite kind kind of similar, but yeah, as Shaman is also being able to cast spells and feed, we also dis- uh, felt the Shaman should appear in the battle.”
>
> “自动战斗会把镜头锁在你的 Shaman 身后，战斗就这样正常进行。整体还是差不多，不过 Shaman 也能施法和喂食，所以我们觉得这个角色应该出现在战斗里。”

玩家看到开发视频后说镜头来回跳，感觉眩晕。Jackal 同意还需要放缓并平滑转场，这一版仍要经过美术调整。另有人认为野生 Zee 打斗改得更好看后已有变慢的感觉，担心副本也拖时长。Jackal 表示倍速会继续提供，可能有一定影响，仍需实际测效率。7 月 14 日正式发布的 **1.15.0** 后来确认了战斗 UI、3D Zee Inspect 和副本倍速调整。8 月 12 日 **1.16.0** 再确认 3D Shaman Inspect。 [7 月 14 日 1.15.0 更新日志（会后核对）](https://zeeverse.com/news/1-15-0-release-notes) [8 月 12 日 1.16.0 更新日志（会后核对）](https://zeeverse.com/news/1-16-0-release-notes)

近期还要让交互按钮使用对应的小图标，并给任务对话中的物品和 NPC 名加颜色与图标，帮助玩家快速认出要找什么。会上展示的是显示方式的修改，任务文本调整会按各章进度继续推进。 [7 月 14 日 1.15.0 更新日志（会后核对）](https://zeeverse.com/news/1-15-0-release-notes)

## 四、战斗模拟器开始找出过强装备和阵容

Jackal 说自己在做 **Battle Simulator**，测试 5v5 阵容及装备，希望让平衡讨论有可比较的结果。模拟仍在调整，目标是让它寻找有效走法。会上也说明，公布的会是补丁与调整，尚未公开完整模拟输入、打法、样本和结果表。

介绍自制 Battle Simulator 时，Jackal 说明模拟怎样用于调整装备和 Zee，以及玩家会看到哪部分结果。

> **Jackal**
>
> “And this will allow us to exactly pinpoint, uh, uh, what's overpowered, what's underpowered, and, uh, uh, will allow us to do quite a bit more balancing. \[…\] I actually think I will never, hmm, we will never share like exact findings, we will just share these findings in in the sense of the balancing.”
>
> “这样我们就能明确找出什么过强、什么过弱，还有很多平衡调整可做。\[…\] 我想我应该不会，嗯，我们应该不会公布具体的研究结果。我们会通过平衡调整把这些发现体现出来。”

| 项目 | Jackal 当时的初步发现或调整方向 |
| --- | --- |
| **Soulkeeper 套装** | 表现过强，拟调整，尚未说明哪些数值或效果会变。 |
| **Watcher 套装** | 他认为存在机制设计问题，倾向重做。转录对套装名有模糊处。 |
| **Shield of Souls / Nina Wach’a** | 他称两件副手模拟中表现相近，希望小幅增强 Shield of Souls，使它与自己的稀有定位相符。 |
| **Draxotl** | 玩家想恢复过去的强度，Jackal 举以前能打出约 8,000 甚至破万伤害为例。他说，模拟里不含 Legendary 的头部 5v5 阵容都能看到 Draxotl，他仍认为它是最强的坦克之一。 |
| **Legendary Zee / 物品** | 团队会复查强度，尤其在锦标赛恢复前减少极端压制的阵容。他也提到自己持有很强的 Matoka。 |

这些是在测试条件下给出的方向和观察。对玩家最直接的意义，是老阵容和单件装备的强度可能各有调整，现阶段仍没有正式数值和生效日。 [官方 Zeedex（Draxotl、Matoka）](https://whitepaper.zee-verse.com/gameplay/zee/zeedex) [Genesis 装备文档（Shield of Souls、Soulkeeper）](https://whitepaper.zee-verse.com/economy/nft-assets/items-erc-1155/collection-genesis/legendary-items) [The Forge 官方文档（Nina Wach’a）](https://whitepaper.zee-verse.com/gameplay/pve/the-forge-locked)

## 五、Heist 先按三只 Zee 恢复，能量药水制作拟取消两条途径

Jackal 说 Heist UI 已交给美术，UI 好了之后就接近能发。片尾被明确问到采用三只还是五只，他答复**先按三只 Zee 恢复**，再开放社区投票，看要不要改成五只。有人提六种属性能否各上一只，他认为五只本身已增加战斗时长和负担，暂时维持现有规模。大幅重做仍需等待新手主线占用的开发资源释放。 [2025 年 10 月 22 日 1.7.3 更新日志（Heist 暂停）](https://zeeverse.com/news/1-7-3-release-notes)

抽奖前有人再问 Heist 究竟以三只还是五只 Zee 回归，Jackal 把回归规格和后续投票分开回答。

> **Jackal**
>
> “It will come back as a team of 3. Uh, exactly as it was, except for the UI rework, and, uh, you, uh, we will be putting out a voting, essentially whether you guys want it to be team of five.”
>
> “恢复时每队三只 Zee。除了界面重做，其余跟以前一样。然后我们会发起投票，主要是看看大家想不想改成每队五只。”

团队拟同时移除**熟鱼制能量药水**和 **HRT 制能量药水**。前者原是给钓鱼增加用途的过渡做法，后者准备改在 GEX 出售。Jackal 估计现有能量供给减少会推高药水的成本，也希望打野生 Zee 的行为回报更有意义，会上没有报价或掉率。**会后核对**，8 月 12 日 1.16.0 正式公告列出两条配方移除。 [8 月 12 日 1.16.0 更新日志](https://zeeverse.com/news/1-16-0-release-notes)

他还重申对宏或自动化的处理，团队近期对涉嫌自动卖 **Chipped Mug** 的玩家用了临时封禁。Jackal 同时认为重复搬运和出售的负担值得团队改善。会上没有公布判定标准或账号范围。 [Relic 官方文档（Chipped Mug 拼写及用途）](https://whitepaper.zee-verse.com/economy/relics)

## 六、每日任务、Zee 献祭和新的 PvP 区域还在设计中

- **Daily Quests。** 首批会以新手容易做的小任务为主，老玩家也能做，并可每天拿少量 Spirit。Jackal 提到大约 **28 天**后可考虑切入更复杂的任务集合，详细适用与计时目前未给。**会后核对**，8 月 12 日 1.16.0 加了每日四个任务，公告未给出这项约 28 天的设计。 [8 月 12 日 1.16.0 更新日志](https://zeeverse.com/news/1-16-0-release-notes)
- **Zee Sacrifice。** 社区提议把未到 50 级的 Zee 经验转成某种货币。Jackal 支持继续讨论，并强调反复献祭应有明显递减回报，免得囤一批 Zee 就能高效转化。会上未给货币名或兑换曲线。游戏之前已有献祭给 Souls of Ruin 的规则，本次谈的是经验转化构想。 [1.7.7 更新日志（既有献祭奖励）](https://zeeverse.com/news/1-7-7-release-notes)
- **开放世界 PvP。** 团队讨论过在某些区域放更好的资源，同时允许其他玩家攻击采集者。这个方向留待以后探索。地图北边的封路是通往另一个生物群系的预留入口，Umbra 一侧也可能接另一片区域。Jackal 对新区域主题是湿地还是沙漠没有给定论。

## 七、从新手到终局需要三段内容，Spirit Guides 负责更懂游戏的社区引导

有玩家请 Jackal 判断，要同时做好普通游戏和 Web3 游戏还缺什么。他分成三段。第一段是可规模化获客的新手体验，玩家能顺利学会并留下。第二段是主线收尾后由 **Great Tree** 通向 World Boss、由 **Forge** 的任务通向相应的副本和制作内容，Land 也可在中期提供活动。第三段是高难 PvE、合作 Boss、PvP 和锦标赛，让老玩家有理由培养强力 Zee，并争取高阶装备。合作 Boss 的专名在转录里不够清楚。他认为少数玩家无法支撑后续内容成本，也承认老玩家正在承受等待新内容的代价。

玩家问 Zeeverse 要同时做好普通游戏和 Web3 游戏还缺什么。Jackal 讲完新手和中期后，用高难内容和奖励说明终局。

> **Jackal**
>
> “There's no endgame content, uh, which you know usually comes out in two ways, which is like insanely hard, uh, PVE content or PVP content. Uh, and the insanely hard PVE content would probably come with like, uh, great best in slot, uh, weaponry.”
>
> “我们还没有终局内容。这类内容通常有两种，一种是特别难的 PvE，另一种是 PvP。特别难的 PvE 可能会给很强的、在对应栏位里顶级的武器。”

问到旧版 Discord 管理队伍为何换成 **Spirit Guides**，Jackal 说旧队伍主要处理工单，新玩家经常更需要熟知游戏的引导。活跃老玩家原本已在做很多答疑，于是团队让熟悉玩法的成员集中过渡为 Guides，工单也有自动化空间。他感谢当时持续给新人带路的普通玩家。

## 八、FOREST、BNB Chain 问答与片尾

- Jackal 依 Euler 的提醒分享 **FOREST 上的一款新农场小游戏**。他说自己还没玩过，提到可能在下一次直播试试，并带到以往试玩的 Plinko。片尾把相关代币口述为 “garden tokens”，转录看不到发在聊天里的网址，无法据此确认游戏名称、代币代码或规则。
- 有人问 Zeeverse 会不会迁往 **BNB Chain**，还是只与 FOREST 合作。Jackal 表示这部分应由 Euler 回答，当天留下问题。会议没有宣布迁移决定。
- Jackal 说平时想用**两周一次**的频率准备更多内容，这次因 Euler 生病，计划让他下周加开一场。他会尝试发录音，上一场聊天录音下载后是零字节，若再出现会考虑更换录制方法。
- 现场抽出**三份一个月 Premium Pass**，得主向 Cherry 提交工单。Cherry 同时公布了 Zeeverse 的 subreddit。Jackal 约大家下周直播，并感谢老玩家陪伴游戏度过新手内容优先的阶段。 [Premium Pass 官方页面](https://zeeverse.com/app/premium)

## 九、本期路线图

| 会上状态 | 内容 |
| --- | --- |
| 已可用 | 逐斧判定的伐木、Taka 跟随协助伐木、农田堆肥桶，近期版本继续改善野生 Zee 和教程。 |
| 已展示或准备中 | 新战斗场景在测试服，Zee / Shaman 详情页方案已展示。生活技能与任务的交互提示要继续优化。Heist 界面改好后计划先用 3v3 恢复。 |
| 仍在开发和讨论 | 逐镐采矿、Woodworker 和 Hoarder 功能、其他 Zee 被动、技能总榜、每日任务进阶和 Zee 献祭方案。Great Tree、Forge、高难 PvE、锦标赛与开放世界 PvP 等待后续推进。 |

## 十、我的整体评价

这次最具体的进展是把玩家重复做得最多的操作拆开检查。**砍一下就看到一次结果**，连等了半天却没拿到木材的体感也会不同。相同思路用到采矿、农活排队和加工服务，可能比单纯提高奖励更能改善每天上线的体验。

对高阶玩家，值得看的是 Battle Simulator 能否转化成可理解的补丁，以及 Heist 恢复后玩家有没有空间真正改规则。对新玩家，重做战斗镜头既要清楚告诉人发生了什么，也要让自动刷副本保持稳定的速度。可以观察的指标是相同采集条件下的经验、同一副本的实测耗时、Heist 第一轮投票和套装补丁的明确数值。英文转录没有句级时间，Jackal 中途提到他已讲约 42 分钟，完整时长无法据此确定。 [本期英文转录](transcription/2026-07-02.txt)
