# Zeeverse / FOREST AMA Deep Dive | Mid- and late-game work resumes, with a damage contest for the first open-world boss

October 22, 2026 | Community Call | Main speakers identified by how they addressed each other: Euler and Jackal | The transcript covers about 64 minutes and ends at 63:44

Chapter 3 was in testing, and work had resumed on the Forge and the Great Tree. Longtime players were waiting for more than new quests. The call covered Prestige difficulty for older dungeons, up to around ten new Zee, faster walking, and automatic pathfinding. It also previewed a world boss with no quest requirement. The most contentious part was that many players could fight it together, but only the top damage dealer would collect loot under the proposal. Halloween was already underway. The change in experience bonuses after Shaman Rank launched also prompted questions from longtime players. For FOREST, Euler set his sights on a Windows release and using the Harness to make playable ads for Zeeverse. [Full archived transcript](../transcription/2026-10-22.txt)

## 1. Chapter 3 targets an October 30 submission, and the Forge and Great Tree are back in development

[10:23](#t=623)

Jackal said **Main Campaign Part 3** had been largely complete for about a week. The team was tuning drops and dungeon progression and doing focused testing. He delivered **about 300 lines of localization text, around 120 of them dialogue**. The chapter would introduce The Ship, The Wicker, treasure maps, and two jewelry slots. The new Totem teleport would take players closer to the furnace. The submission target was **October 30**. With quick approval it could go out that Friday, or possibly the following Monday. After the call, the official site published 1.18.0 on **November 2** with the quest name **Third Time’s the Charm**, both dungeons, and the option to dig for treasure with a shovel at 20 spots. The November 2 release is separate from the submission target discussed on the call. Transcript [10:23–12:14](#t=623), [36:21–36:40](#t=2181). [Zeeverse 1.18.0 release notes, published November 2 after the call](https://zeeverse.com/news/1-18-0-release-notes)

Chapter 3 was in focused testing while the team adjusted rewards and dungeon progression. Jackal gave a submission target and made the release window conditional on approval.

> **Jackal · [10:28–10:39](#t=628)**
>
> “We’re planning for the next update to be submitted at October 30. Uh, so, if that uh goes through fast, we might be looking at the next Friday update. Or, uh, monda- Monday after that.”

The team would continue making small onboarding fixes and had already resumed work on **the Forge, the Great Tree, and mid- and late-game content**. It wanted players who finished the campaign to unlock **Prestige**, where older bosses could make fuller use of their existing mechanics at higher difficulty and offer new rewards and new Zee. The call floated up to **around 10 new Zee** to give players more combinations in combat. Euler asked which of the nine starter Zee the community liked most. The team would explore refreshing their appearance, with some new Zee possibly cuter and others fiercer. Jackal also wanted to rework a damage formula he considered too linear, so dungeons would rely less on raising enemy levels and health and team composition could matter more. The count, lineup, and formula were all undecided. Transcript [12:14–19:53](#t=734), [24:47–25:41](#t=1487). [Call transcript on late-game content, Zee designs, and damage calculations](../transcription/2026-10-22.txt)

## 2. Map navigation should be easier, and auto walking and faster movement are at different stages

[20:06](#t=1206)

Euler often got lost on the current map himself. He wanted to move a few places and change the world's layout so landmarks would help players get their bearings. For mobile, the team was considering **Auto Walk**. Players would select a destination and their character would walk there. Early quests could take players straight to their next objective, and existing players could use the same feature. The team had yet to settle on a pathfinding implementation. Jackal was meanwhile testing normal walking speed. He estimated an increase of **20%–25%** and said the team could adjust it if it felt too fast. **After the call**, the October 26 release of 1.17.9 recorded an increase of about **28%** and removed the confirmation before boarding a boat. The notes did not list Auto Walk as shipped. Transcript [20:06–24:32](#t=1206). [Zeeverse 1.17.9 release notes, published October 26 after the call](https://zeeverse.com/news/1-17-9-release-notes)

Euler said he regularly got lost on the existing map. He described picking a destination as a way to help mobile players and also envisioned guiding players to objectives in early quests.

> **Euler · [21:51–22:03](#t=1311)**
>
> “But generally, when it comes to mobile, this actually is a bit of a problem uh for for many player. So, we will be, um, adding a way for you to just pick a spot and just walk there.”

## 3. The leaf-pile boss would test shared fights, with loot reserved for the top damage dealer

[25:58](#t=1558)

Jackal said an open-world boss would come before the Great Tree's own boss. It would grow out of a pile of leaves and have **no quest requirement**. The early design would let players fight it about once an hour, with player-triggered summoning also under consideration. A heavy hit might knock out one player's Zee. The team wanted ordinary players to be able to take part. Even experienced players would generally need to team up, though certain Zee and gear combinations might hold up. New Zee and future gathering or crafting materials were mentioned as possibilities, with no loot table or odds provided. The machine transcript for this call spells it **Molcher**. The November 19 machine transcript calls the same leaf-pile boss **Mulcher**. The official spelling is pending. Transcript [25:58–27:47](#t=1558), [29:00–31:18](#t=1740). [Call transcript on the first open-world boss](../transcription/2026-10-22.txt) · [November 19 transcript for the later spelling](../transcription/2026-11-19.md)

Euler was direct about the proposed rule. **Even if 10 players fight together, only the one who dealt the most damage gets the reward.** Chat would announce the items. Euler suggested companions could agree on how to share the loot themselves. The team would use this first boss to see how cooperation and competition played out. Ten players was an example. The call established no player cap, loot-splitting tool, or final rules. Later talk about PvP after a drop was a joke. Transcript [31:19–33:43](#t=1879). [Call transcript on damage, reward distribution, and chat announcements](../transcription/2026-10-22.txt)

Euler used ten participants to illustrate the proposed loot rule, then talked about friends deciding how to share. The call gave no player cap.

> **Euler · [31:52–32:01](#t=1912)**
>
> “Even if there are 10 players trying to kill the boss, after boss is dead, the player who did the most of the damage, only him receives the reward. But the trick is, the reward will show up in the chat, so everybody will see who received what.”

## 4. The Halloween set offers a teleport that suits some routes

[27:53](#t=1673)

Halloween 2026 had started the day before. Wild Zee could drop event gear while supplies lasted. One carriage would be active at a time, and the first player to find it was guaranteed an item. It would reappear two hours after someone claimed the reward. The event launched with 50 **Watcher’s Crescent** axes, matching the Mithril Axe for logging. There were 150 each of the Mawkin Mask, Top, and Bottoms. Wearing all three allowed Candle Teleport without Souls. It sends players to the northeast corner of the map and awards no Shamanism XP. The published odds for wild Zee were **0.03%** legendary and **0.09%** epic. For the carriage they were **10%** legendary and **90%** epic, all limited by remaining supply. The November 2 patch later lowered the Candle Teleport requirement to two pieces. [Halloween 2026 event announcement from October 21](https://zeeverse.com/news/halloween-2026-the-hunt-is-on) · [1.18.0 release notes, published November 2 after the call](https://zeeverse.com/news/1-18-0-release-notes)

Players worried they would have to put on a weaker set to teleport to Hollow Trials, then switch back to their combat gear. Jackal said Mawkin was for early- to mid-game players moving up from Steel. Having room in the bag to change outfits was itself a travel decision. Some routes fit the teleport well. Players could go near Epic trees and use Village Teleport to return and store their logs, or connect the village, the area near Umbra, and farms near the Candle arrival point. The Great Tree was expected to add a **Root Network**, and the repaired Metal Totem and gear with different uses would add more routes. A **Wardrobe, preset Loadouts, and separate cosmetic slots** were outside the current scope. The team was more focused on cutting the steps of taking out gear, closing the Stash, swapping, and reopening it. Transcript [27:53–28:46](#t=1673), [33:44–38:40](#t=2024). [Call transcript on teleport routes and the wardrobe question](../transcription/2026-10-22.txt)

## 5. Shaman Rank replaces direct Mask bonuses, and longtime holders ask about the gap

[39:03](#t=2343)

The October 13 website update gave the new rules. Eligible collectibles and Totems in linked wallets count toward **Shaman Points**, with **ten tiers from Clay at 500 points to Obsidian at 150,000 points**. The direct Mask bonuses for XP and Spirit do not stack with the new Rank bonuses. The official example showed ten Masks previously giving +100% XP and a particular new rank giving +70%. That explains how players can see a lower bonus with the same holdings. [Zeeverse website update announcement from October 13](https://zeeverse.com/news/zeeverse-website-update-shaman-ranks-collector-profile-more)

Euler said the first version intentionally left room for changes. He hoped ranks would eventually grant stat bonuses, extra skill rewards, and access to areas or features. He felt a large collector with around 100 Masks should be at or near the highest rank. The team would review point values based on feedback. He announced no changes to the table. Euler also saw potential in old airdrop quests, finishing the tutorial, and in-game achievements. He mentioned reaching level 99 in a skill, owning a specific Zee or item, and defeating 100,000 Zee. Euler described quests on the call as a way for free players to progress. **The published rules explicitly track Quest Points separately from Shaman Rank**. As of this call, the launch rules did not confirm that finishing the tutorial alone could earn Rank I, and the achievement system still had to be built. Transcript [39:03–46:43](#t=2343). [Website announcement on Shaman Points and Quest Points](https://zeeverse.com/news/zeeverse-website-update-shaman-ranks-collector-profile-more) · [Call transcript on the Rank Q&A](../transcription/2026-10-22.txt)

Some holders had noticed lower XP or Spirit bonuses after the move to Rank. Euler explained why the team left room to adjust it and gave examples of perks a rank could grant later.

> **Euler · [39:27–39:49](#t=2367)**
>
> “This rank will then be filled with multiple different perks besides just the spirit or or XP bonuses. You will start to see things, uh, for example, as being able to access maybe some certain regions, uh, or certain, having a certain features inside the game, just because you have this rank.”

## 6. Questions on web GEX, inventory, and the combat camera

[55:20](#t=3320)

- **GEX on the web.** Players asked about orders, buyer and seller names, and trading history. Euler said direct web trading and a few basic Trading Bots were available. The team had also provided an API earlier for players to write bots, though few used it. The October 13 update still marked Market as coming soon. The October 22 availability comes from Euler's remarks on the call. More fields in trading history remained a player request. Euler wanted the core flow to work smoothly first. Transcript [55:20–57:46](#t=3320). [October 13 website update](https://zeeverse.com/news/zeeverse-website-update-shaman-ranks-collector-profile-more) · [GEX game documentation for market basics](https://whitepaper.zee-verse.com/economy/game-exchange-gex)
- **Inventory, tool belts, and Souls.** Jackal saw choosing which tools to bring as part of play. A Toolbelt was outside the current scope. Euler was more interested in ways different Zee might carry tools or Souls outside combat, save logging time, or help cross rivers. A Soul Pouch remained possible. Jackal recalled suggesting a Fishing Barrel as an event reward. The closing remarks said Zee Passives were in development, with details to come. Transcript [49:09–52:28](#t=2949), [59:19–59:33](#t=3559).
- **Sacrificing one Zee to help level up another.** The team was willing to explore this. Euler said the current Umbra sacrifice yields little. If tradeable Zee became upgrade materials, bots might farm and sell them to players who wanted faster leveling, affecting game balance. Jackal said training time would matter more as the lineup of Zee grew. The team committed to no new sacrifice feature or substitute recipe on the call. Transcript [52:28–55:15](#t=3148).
- **Dungeon camera.** The team made no commitment to a particular feature after the player's suggestion. It wanted to shorten drawn-out animations, make the camera more flexible, and gradually improve how combat feels. Transcript [57:50–58:54](#t=3470).

## 7. FOREST is close to a Windows release, and Zeeverse will use the Harness to make its own ads

[01:37](#t=97)

Euler recalled meeting potential partners and showing both projects in Singapore. The Harness was available on Mac at the time, and the team hoped to launch Windows early the following week. Euler said the Harness already supported building apps or minigames around other tokens in the BNB ecosystem, citing stablecoins and existing community tokens. Creators could use their own ChatGPT or Claude subscriptions. Alongside hosting and publishing infrastructure, the team was improving instructions and tools built into the Harness so models could fill in details they often miss when making minigames. Euler also said the team believed a recent external infrastructure incident had not affected Forest and recalled putting protections in place after a previous incident. Those reports came from internal operations. Transcript [01:37–06:19](#t=97). [Forest Harness download page for platform background](https://forest.inc/build) · [Forest Playkit documentation](https://forest.inc/docs/developers/forest-playkit)

The clearest next internal use case was **Zeeverse Playable Ads**. Euler estimated that once acquisition spending increased, the team might need to produce about five new ad creatives a day. He wanted the Harness to take Zeeverse assets and make short playable minigames and ads. The team would meet its own needs first, then open the same technology to other creators. Five a day was an estimate of the potential workload. Euler gave no actual ad production or performance figures. He cited Epic making its own games with Unreal Engine to explain the order. Transcript [06:36–09:26](#t=396). [Call transcript on Playable Ads](../transcription/2026-10-22.txt)

Euler described faster creative turnover as acquisition expands, then proposed making playable ads with Zeeverse assets in the Harness. Five per day was a workload estimate.

> **Euler · [07:04–07:09](#t=424)**
>
> “The life, uh, lifespan of of each creative gets just shorter and shorter. So, in reality, that means we may even need to produce like 5 new ads every single day, so just we can keep them fresh and keep them running on the networks to acquire more players.”

## 8. Events, the giveaway, and the roadmap

[46:54](#t=2814)

Euler said team members would be absent in person, but Zeeverse would exhibit through its Arbitrum collaboration at **Devcon 8** in India. Attendees might have a chance to get codes and new collectible badges. The organizer listed November 3–6 in Mumbai. The Malaysian community suggested holding an event, and Euler asked them to send the details to him or Cherry. The team might be able to provide merchandise and prizes. At the close, Jackal said there had been **about 38,000 Zee defeats** an hour earlier in the Halloween event and estimated around 39,000 by then. The first figure was an in-game event kill count, and the second was his estimate. He had also seen one purple loot orb turn out empty. In the closing chat he said the team had fixed a dog-related bug that day after a player had reported it. The wheel drew three one-month Premium Passes, and winners could open a ticket with Cherry for a code. Transcript [46:54–48:57](#t=2814), [59:52–63:44](#t=3592). [Official Devcon 8 announcement](https://blog.ethereum.org/2025/12/23/devcon-mumbai) · [Call transcript on the closing remarks and giveaway](../transcription/2026-10-22.txt)

| Status | What the October 22 call established |
| --- | --- |
| In place | Halloween drops, Mawkin, and the initial Candle Teleport. The new Collector Profile and Shaman Rank. Euler said web GEX and basic bots were available, as was Forest Harness for Mac. |
| Content complete and in testing | Chapter 3 and its two dungeons targeted submission on October 30. Faster normal walking was being tested. Windows Harness was nearing release. |
| In development | Work had resumed on the Forge and the Great Tree. An earlier open-world boss with no quest requirement was planned to test multiplayer. Zee Passives were in development. |
| In design or under exploration | Prestige, up to about ten new Zee, the map, Auto Walk, the damage formula, achievements counting toward ranks, using Zee to carry items outside combat, and changes to sacrifice. FOREST planned to use its own Harness to produce batches of ads. |

## 9. My overall take

The thing to watch is whether the boss rewards bring people together. A low barrier to entry, a recognizable pile of leaves, and timed appearances can get players to meet each other. Giving all the loot to the top damage dealer will also make teams think about whom they bring and how they split rewards. Whether ordinary players keep coming back depends on whether the same group dominates the loot and whether people who lose still get something out of being there. Those outcomes will tell us more about the design than how tense the fight sounded on the call.

Walking and Rank are also worth following. If players can navigate by landmarks and different travel tools work well for different routes, gear like Mawkin has a use independent of combat strength. With Rank, longtime players need to be able to calculate what changed for them. Players without assets need to know which in-game actions will actually count toward their points. The next test for FOREST is concrete. People have to want to try the playable ads, and the team has to save time making, testing, and revising them.

Source notes. The English machine transcript includes time codes and has no line-by-line speaker list. Some new boss names and a few usernames follow the transcript for now. The report checks rules against announcements made before the call, remarks on the call, and later versions with dates shown. [Archived English transcript](../transcription/2026-10-22.txt)
