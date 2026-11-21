# Zeeverse / FOREST AMA Deep Dive | Eight onboarding quests and upgradable Land perks for Tribes

August 27, 2026 | Community Call | Main speakers identified by how they addressed each other: Euler and Jackal

Zeeverse wants newcomers to do a few things on their own in the village before tackling a dungeon. Longtime players are waiting for Chapter 3, rings, treasure maps, the Forge, and world bosses. The team laid out two approaches. Onboarding still takes up most of the game client's development time. In parallel, the web team could build Land upgrades that grant in-game perks to Tribe members. FOREST reported progress on testing the Builder and on cloud hosting. Creators immediately asked how many credits it takes to generate a game. [Full archived transcript](../transcription/2026-08-27.txt)

## 1. Eight Finding Your Feet quests put dungeons later in the journey

[11:09](#t=669)

Jackal said the new **Finding Your Feet** consisted of eight quests at the time. Several teaching areas cover combat, gathering, crafting, and other activities. Each short quest gives players a result they can see. Coyote, the combat mentor, would get voice lines. Three optional side quests would sit near the teaching areas. The names spoken on the call were Hungry, Collector, and Mudman, some of them shorthand. [Zeeverse 1.5.0 release notes for Coyote’s name](https://zeeverse.com/news/1-5-0-release-notes)

Why move dungeons later? Euler recalled sending players into a dungeon about 15 minutes in. Newcomers had just learned how to interact with the world when a dungeon introduced a whole new set of rules. Mobile players were especially liable to drop out there. The new route has players fight wild Zee and get familiar with resources and items before entering the Mountainside dungeon. The team would use data from a fresh group of players to judge the pacing. The 1.17.0 notes published on August 31 confirmed the multi-quest structure, optional side quests, and revised path to unlocking Mountainside. The update also consolidated skills into a single screen, adjusted wild Zee in the starting area, began tracking the most recently accepted quest, and improved fonts and composting. Jackal illustrated the kind of simplification he meant with the Compost Bin, where a whole batch of berries or seeds could go in with one click. [Zeeverse 1.17.0 release notes, published August 31 after the call](https://zeeverse.com/news/1-17-0-release-notes) · [Call transcript on composting](../transcription/2026-08-27.txt)

Jackal asked why the early game had been stretched out. Euler said dungeons felt almost like a separate game, so players needed time to get comfortable with the existing mechanics first.

> **Euler** · [11:09](#t=669)
>
> “And if within the first 15 minutes, when the player is entering the world, like completing all the tutorial, we say, ‘Yo, uh, doesn’t matter what you just learned in this world, let’s going to the dungeon.’ It’s, uh, it’s sometimes, uh, too much.”

**How does the Mudman side quest link two skills?** The upcoming build moved the closed Heist out of the starting area and put clay deposits in its place. The side quest has players dig up clay, add water, and make a new mask on a pottery wheel. Jackal put repeat crafting and selling after the quest on the 1.18 plan and estimated about 20 Spirit per mask. He wanted a way for low-level players to train Mining and Crafting while earning a little Spirit. **After the call**, the official site and App Store both recorded 1.17.1 as a September 7 release. Its notes already listed selling Clay Masks to villagers after completing The Mudman. They also confirmed that mining and wetting clay and making masks grant skill experience. The notes gave no sale price. [Zeeverse 1.17.1 release notes](https://zeeverse.com/news/1-17-1-release-notes) · [App Store version history](https://apps.apple.com/lv/app/zeeverse/id6755680403?platform=mac)

## 2. Land upgrades could burn $VEE and grant perks to the Tribe

[17:46](#t=1066)

Euler said a Tribe mostly amounted to a name and a private chat channel at the time, with few things to do together. He proposed having **Land owners spend and burn $VEE to upgrade their plots**. Higher levels would give owners and fellow Tribe members better perks, such as bonus experience or faster stamina recovery. Land type and rarity could also affect the kind or strength of a perk. He used level 50 to illustrate bonuses increasing with each level. The call provided no final level or cost table. The game docs also describe placing a Genesis Mask in a Land Altar to receive Blessings. The team had yet to explain how upgrade perks and existing Blessings would work together. [Land overview](https://whitepaper.zee-verse.com/lands/overview) · [Land Blessings](https://whitepaper.zee-verse.com/lands/blessings)

A player asked whether the system would have to wait until after Chapter 3. Euler said the Zeeverse website's Dashboard could handle most of the upgrade process. The game client would only need to implement the perks, so the web team might be able to move ahead independently. He leaned toward releasing the upgrades sooner and left the order open. Another player asked how many Seeds they could get. The speakers directed players to the actual calculation in **Collector’s Profile** and said Mask and Land combinations might matter. The call discussed this Seeds lookup separately from the Land upgrade idea. [Call transcript on Land, perks, and Collector’s Profile](../transcription/2026-08-27.txt)

Asked whether Land perks would come before or after Chapter 3, Euler explained why the web team could work in parallel and gave his best guess about the order.

> **Euler** · [17:46](#t=1066)
>
> “The good good thing about this is that, uh, because it’s on the web, we can allocate resource, uh, from, um, uh, from different depts that are not as booked, so they are not like really combined together. Uh, so, honestly, I don’t know. I, I think it’s gonna come sooner than than that.”

## 3. Chapter 3 had a backend, while onboarding and client fixes led the release work

[36:46](#t=2206)

The community asked when to expect the third major quest, the Forge, world bosses, rings, and treasure maps. Jackal said **rings and treasure maps would come with Chapter 3**. He said the chapter's backend was complete, art was still in production, and frontend work and the dialogue he was writing still needed attention. If the whole team moved over immediately, he estimated they might reach testing or final work in about two weeks. The team was still iterating on onboarding based on the data, so that estimate never became a schedule. The Forge and world bosses also had no release date.

Asked when Chapter 3, rings, and treasure maps would be ready, Jackal estimated how long it might take if the whole team switched over. Onboarding still had priority.

> **Jackal** · [36:46](#t=2206)
>
> “If we like drop everything, it would take us around two weeks to get our testing, to like finishing, but um time is literally money, and uh onboarding efforts is uh where we are uh want want to spend our time and money into.”

What about players unable to enter a dungeon? After checking with Cherry on the call, Jackal said the team had a fix and players would need the new client. He specifically said the Epic versions for Mac and Windows and the Google review were still pending. The call opened with an expectation of releasing the update the next day. Later the team said they would try for that day and mentioned using 1.17.1 for smaller issues. The official site published the 1.17.0 notes on August 31. The hour each version became downloadable and when the approvals cleared remain unverified. [Call transcript on Chapter 3, platform review, and closing remarks](../transcription/2026-08-27.txt) · [1.17.0 release notes, published August 31 after the call](https://zeeverse.com/news/1-17-0-release-notes)

## 4. Daily Quests could scale to skills, and level 99 should have a visible reward

[39:45](#t=2385)

The August 12 release of 1.16.0 introduced four Daily Quests per day. Jackal said everyone received the same tasks at the time. He wanted them to follow a player's skill levels, for example by asking players to mine coal once their Mining level is high enough and awarding XP on completion. The team was still discussing whether to unlock a fourth daily as a prize draw after completing three. Possible rewards included higher-tier ore and evolution shards. The call used **100 shards for one evolution stone and one free evolution** to show how free players might trade time for progress. No final exchange rate or earn rate was set. [Zeeverse 1.16.0 release notes from August 12](https://zeeverse.com/news/1-16-0-release-notes) · [Call transcript on Daily Quests](../transcription/2026-08-27.txt)

A player asked whether level 99 Taming came with a badge or marker. Jackal wanted a visible cosmetic reward when players maxed out a skill. He mentioned Skillcapes and gave examples like a purple aura or flames around a character. The look was undecided, while the Daily Quests redesign was further along. He also brought up total skill levels and an overall level leaderboard. One idea was to show total level near player names, though that might crowd the Tribe tag. The call congratulated Boyman on his Karu. The official notes published afterward listed two commemorative statues, one for the first player to max every Karu Trait and one for the first to get four Traits to level 20. The transcript mentions more than one first, each for a different achievement. [Skills documentation on the level 99 cap](https://whitepaper.zee-verse.com/gameplay/skills) · [Zeeverse 1.17.0 release notes, published August 31 after the call](https://zeeverse.com/news/1-17-0-release-notes)

## 5. Gathering and crafting should feel better, with inventory planning still part of play

[52:15](#t=3135)

Jackal described accidental taps while gathering, waits for animations, trouble filtering for items, and excessive scrolling through crafting lists. He estimated that a fishing animation took about 12 seconds, with roughly seven seconds of extra presentation around the action. He wanted to rework animations across several skills while keeping the chance of success tied to each swing while logging or mining. Players complained about frequent camera changes in combat. Jackal initially thought they meant scene changes. Once they clarified, he said he wanted to restore the option to position the camera as before. Short fights still need the presentation to work, and long fights need to remain easy to control.

The **Bonfire** was one of the more developed examples on the call. The team wanted to reduce the no-fire area in the village so players could light a fire nearer the Stash. Other players could keep it going by adding wood and accept slightly less experience in exchange for fewer interactions. Nearby players could cook fish at the same fire. Someone asked whether cooked fish would again be used in stamina potions. Jackal said it would stay out of that recipe and acknowledged that food uses and feeding Zee deserved more work. Version 1.16.0 had already removed the recipe. [1.16.0 release notes from August 12](https://zeeverse.com/news/1-16-0-release-notes) · [Call transcript on fishing, the camera, and Bonfire](../transcription/2026-08-27.txt)

Jackal pictured several people feeding a shared bonfire or cooking fish at it. The counts illustrate the proposed activity.

> **Jackal** · [52:15](#t=3135)
>
> “For example, two two people are like bonfire in the bonfire, immediate instantly refreshing the duration of the fire, right? Uh, then, for example, there’s like three other people coming to cook their fish on the fire, and thus making both fire making and cooking a social experience.”

The team asked players for feedback on several other ideas.

- **Dungeon Chests.** Loot automatically went to the Stash at the time, which led Jackal to ask what the carried inventory was for. He pictured overflow loot going into a dungeon chest, then either being carried back to the village Stash or transferred remotely for Spirit. Getting about 40 waves from an empty backpack and keeping 20 slots in the overflow chest were examples. Expanding storage through quests was another part of the idea. Whether bringing AFK players back to collect loot would be worth it remained an open question.
- **Teleport Tablets and Soul Pouches.** Players complained about carrying several kinds of Souls to cast spells. One proposal was to craft a tablet from clay and multiple Souls, so the teleport only needed one slot. The team was considering whether the tablet could be recovered. A second idea was a pouch that could hold a selection of Souls and be upgraded through quests or Crafting. Jackal said the team generally wanted to keep the 20-slot backpack and let players earn tools that free up space. The official docs explain why casting needs several kinds of Souls. [Shamanism skill documentation](https://whitepaper.zee-verse.com/gameplay/skills/shamanism)
- **Stash and interaction improvements.** In response to a question about equipping items by right-clicking, Jackal suggested custom tabs for separating farm tools or cosmetic gear and changing equipment while the Stash is open. He also wanted to explore transforming items while walking, filling multiple containers with water in one sequence, and making it quicker to mount up. Players could share the exact steps for any action that felt slow or got stuck.

## 6. FOREST had deployed cloud hosting and wanted to make generation cheaper

[28:34](#t=1714)

Euler said active tests of the AI Builder showed that it could generally put together simple on-chain games and applications. He invited the community to use trial credits and send feedback from real projects. According to the call, **Forest Cloud had been deployed**. It brought hosting into the platform so creators did not have to arrange their own cloud servers. It could also hold data that should not live only on the frontend. Euler focused on the Harness that uses existing models, hosting, and infrastructure for in-game economies. He was tentative about SDK support for MCP, and he used agents creating or deploying games on their own to illustrate a direction of travel. [FOREST’s July 3 Playkit announcement](https://forest.inc/news/forest-playkit-infrastructure-behind-zeeverse-economy) · [Forest Cloud documentation for background](https://forest.inc/docs/whitepaper/forest-cloud)

One tester said the feature felt like magic and worried about using up credits too quickly. Euler said the team was looking for a better balance of quality and cost across models. He wanted users to choose between stronger reasoning and lower credit use. The team was also looking at connecting a creator's existing subscription so their own model account would cover the cost. Both ideas were under study. Euler used the difference between personal subscriptions and API billing to explain the costs. He gave no new FOREST price list.

A tester liked the Builder but worried about credit use. Euler first discussed offering cheaper models and then described the idea of connecting an existing subscription.

> **Euler** · [28:34](#t=1714)
>
> “And then on the other hand, which is a bit more hackish, uh, we are looking in a way how you could uh just connect your subscription uh to Forest Harness \[…\] and and essentially use your own subscription plan, and and skip paying for credits and tokens altogether.”

The call also mentioned recent trades and cross-market arbitrage that generated platform fees. Euler wanted to explore ongoing $FOREST buybacks with those fees and keep talking to other exchanges. He gave no allocation, new exchange name, or date. He also said he would attend the Mr. Block Summit in Taipei the following week. The organizer listed September 4 as the date and Zeeverse and Forest among the participants. [Call transcript on the FOREST Q&A](../transcription/2026-08-27.txt) · [Mr. Block Summit organizer’s event page](https://www.accupass.com/event/2608211102381945389551)

## 7. Closing remarks and the roadmap at the time

[1:00:29](#t=3629)

Jackal took over after Euler left early. He spun the wheel for three one-month Premium Passes. Winners could open a ticket with Cherry for their codes. Some usernames are hard to spell with confidence from the transcript. Jackal planned to use his own automated transcription and summarization tool to release the recording and text more quickly. He asked for reproducible interaction issues with fishing, changing equipment, filling containers with water, and mounting up. He expected to hold another call in two weeks. [Call transcript on the giveaway and closing remarks](../transcription/2026-08-27.txt)

| Status | What the August 27 call established |
| --- | --- |
| In place before the call | Four Daily Quests. The cooked-fish stamina potion recipe was already gone. Euler said FOREST had deployed cloud hosting and the Builder was in trials. |
| Awaiting client release | The multi-quest Finding Your Feet, skill interface, and several usability changes were awaiting platform sign-off. The official site published 1.17.0 notes on August 31. |
| In development or a near-term goal | Web-based Land upgrades and in-game perks, improved Daily Quests, skill content, and animations. Chapter 3 had a backend and still needed art, frontend work, dialogue, and testing. |
| Ideas or requests for feedback | A fourth daily prize draw, new materials and a path to free evolution, max-skill cosmetics, Dungeon Chests, shared Bonfires, Teleport Tablets, and the Soul Pouch. FOREST was also discussing model tiers, using existing subscriptions, and buybacks funded by fees. |

## 8. My overall take

Two sets of data would tell me the most. First, can a new player go from one short quest to a first wild encounter and then to a first dungeon? Shorter quests give the team a chance to see where players leave. A side quest like Mudman links Mining and Crafting with a small payoff and can make clear why learning the skills is worthwhile. Second, how many ordinary players will choose to join a Tribe and stay after Land upgrades arrive? Experience or stamina perks could make top-tier Land much better at recruiting. The rules and results will show whether different plots can offer perks that suit different players.

Longtime players gave examples the team can turn directly into product work. How long a fishing action takes, how many times players have to open and close the Stash to change gear, and how many slots a routine teleport takes are easier to check than a general judgment about how smooth the game feels. For FOREST, I would watch whether creators can finish the same size of minigame with fewer credits, and whether people can open it, play it, and want to come back after deployment.

Source notes. The English machine transcript is a single block of text that starts mid-sentence and lacks an original timeline, a full runtime, and line-by-line speaker labels. Platform release times, the Clay Mask sale price, official rules for exchanging evolution shards, and the Land upgrade schedule remain unverified. [Archived English transcript](../transcription/2026-08-27.txt)
