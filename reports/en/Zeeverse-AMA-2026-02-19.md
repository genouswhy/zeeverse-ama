# Zeeverse / FOREST AMA Deep Dive | February 19, 2026

February 19, 2026 · Community Call · Jackal and Euler · Full duration could not be established from the transcript

Zeeverse gave a clearer order for its next releases. **The new tutorial was in internal testing and was expected to ship with the UI. The main quest would follow, splitting existing dungeons into about seven parts and taking veteran players through a new unlock sequence.** For established players, the main questions were how existing dungeon and quest progress would carry over and which assets the off-chain market would accept. FOREST turned January's points auction idea into a specific **Seed Vault** design. It confirmed that token creators already had access to configurable staking templates, with more pricing curves and playable modules planned.

The English transcript has no line-by-line timestamps or speaker labels. The references describe the exchanges to look for. Public updates issued after the call are dated. [English transcript](../transcription/2026-02-19.txt)

## 1. Guest play and a smaller initial download have shipped, and the new tutorial and UI are in testing

[07:14](#t=434)

Version **1.7.8**, released February 16, allowed people to play without registering. Guest saves stay on the device, while linking an account makes it easier to play across devices and recover access. The same update reduced the initial download, improved dungeon loading, and fixed a memory leak during long dungeon sessions. Euler said the client downloads the remaining files needed for play on first launch. He used an initial download of about 1 GB as an example of the barrier players on slow connections could face. The call gave no measured size for the old package, size for the new initial download, or download completion rate. The 1.7.8 notes also list Lunar New Year decorations, a one-time exit after claiming Hollow Trials rewards, and Farming XP from composting. [1.7.8 release notes, February 16, 2026](https://zeeverse.com/news/1-7-8-release-notes) · [Transcript, client size and downloads on demand](../transcription/2026-02-19.txt)

While recapping the latest update, Euler explained when the rest of the game files would download now that the initial client was smaller.

> **Euler** · [07:14](#t=434)
>
> “The game client is way way lower in size. It's much smaller, and when you open the game for the first time, I, it will just um uh automatically download the remaining files, the re- required files for you to play.”

The full new tutorial was already **in internal testing**. Euler said it generally ran well, with some rough edges to fix, and targeted the week beginning February 23. Existing players would also see the global **UI rework**. The new tutorial itself was easier to experience from the start, so the team invited volunteers to test using new accounts. Euler planned to resume controlled paid acquisition after the tutorial shipped, see where players stopped, and then move resources toward mid-game development. The later 1.8.0 notes, published **March 9**, documented the reworked tutorial and UI, minimap, fonts, and Stash. The actual announcement came after the target discussed here. [Transcript, tutorial testing, the next-week target, and the invitation to test](../transcription/2026-02-19.txt) · [Later 1.8.0 release notes, March 9, 2026](https://zeeverse.com/news/1-8-0-release-notes)

## 2. The main quest would use about seven sections of existing dungeons, and veterans would play it from the start

[08:45](#t=525)

On February 5, the team had described a dungeon redesign with exploration, enemies, chests, and puzzles. On this call, Euler said the team had narrowed the scope. It would **use the existing world and dungeons, divide them into about seven sections, and connect them through the main quest**. The tutorial could ship first and the main quest could follow in stages, giving the team new-player data while providing content for existing players. Seven was an estimate, and the division into stages was unsettled. The plan also included **one or two new bosses** and new ways to teleport. Zee might appear through the story or bosses. The hosts discussed tougher Prestige Bosses with larger reward pools as a repeatable challenge. [February 5 transcript, earlier dungeon design](../transcription/2026-02-05.txt) · [Transcript, narrowing the scope and adding new bosses](../transcription/2026-02-19.txt)

The team had considered spending more time redesigning the dungeons. Euler explained how the main quest would use existing content after the team narrowed the scope.

> **Euler** · [08:45](#t=525)
>
> “We will be splitting up the existing dungeons into probably 7 or something like, some something like this, and and and they will come together as as the main quest, as the main campaign.”

Euler said **existing players would also take the new main quest from the beginning**. Players who had cleared older dungeons and ordinary quests would still go through the new unlock sequence. Stronger teams and skills already trained were expected to help. Euler gave Woodcutting level 20 as an example. Jackal recalled that the team had previously required Firemaking level 50 and said the actual requirements would be announced nearer release. The call left open how existing quest completion flags would be migrated. [Transcript, existing players and skill requirements](../transcription/2026-02-19.txt)

The later 1.9.0 notes from **April 2** confirm that a new quest replaced Shaman’s Journey and that Grass Dungeon and its stage selection changed. This establishes work on the earliest part of the main quest and dungeons. The final number of sections and migration of existing progress would require the relevant later release notes. [Later 1.9.0 release notes, April 2, 2026](https://zeeverse.com/news/1-9-0-release-notes)

Related work included cleaning up trees and vegetation that clipped into one another and made the map harder to read. The **Hatchery** was still intended to show the spirit world, where players could see spirit forms of unreleased Zee. Jackal also wanted to add a Zee deep in Umbra that reflected the area's style. Between Umbra, new bosses, and The Forge, the team might introduce new Zee in batches. No official list of new Zee, drop rates, or release dates was announced. [Transcript, map presentation, Hatchery, Umbra, and the Zee roadmap](../transcription/2026-02-19.txt)

## 3. The off-chain Marketplace would list items in $VEE, with Mask and Land staying on existing channels

[11:44](#t=704)

Euler returned to a **fixed-price marketplace inside the game** separate from the GEX for materials. Players would list at a specified $VEE price, as on OpenSea, and a buyer could choose to buy. The hosts listed Zee, equipment, and ERC-1155 items that could be deposited into the game but were unavailable in GEX pools. **Mask and Land could not be deposited for listing under the proposal**, which left them on their existing trading channels. Euler expected the market to follow the tutorial and said the schedule still needed checking. The call gave no launch date, transaction fees, or supported asset list. Off-chain GEX had handled materials since December 2025. The separate market would handle other items. [Initial off-chain GEX release notes, 1.7.5, December 15, 2025](https://zeeverse.com/news/1-7-5-release-notes) · [GEX documentation](https://whitepaper.zee-verse.com/economy/game-exchange-gex) · [Transcript, off-chain Marketplace and listing eligibility](../transcription/2026-02-19.txt)

Someone asked whether Zee could be listed in the planned fixed-price market, and Euler explained which assets could not be listed there.

> **Euler** · [11:44](#t=704)
>
> “The only thing what you won't be able to list uh is the items that you cannot deposit inside the game, and these items are masks and lands.”

## 4. Zee could help with life skills, while Shiny forms and clothing are still in design

[26:40](#t=1600)

- **Life skill bonuses.** Euler used the example of Trumpy helping with Fishing. A Zee that rarely saw combat could still be useful when it followed a player who was gathering. The call gave no skill assignment table, trigger chances, or stat values. Jackal checked the higher-tier tools task and confirmed it was scheduled but unfinished. Shipping alongside the UI was uncertain. [Trumpy in the official Zeedex](https://whitepaper.zee-verse.com/gameplay/zee/zeedex#trumpy) · [Transcript, Trumpy, Fishing, and tool status](../transcription/2026-02-19.txt)
- **Shiny Zee.** Euler wanted to preserve ultra-rare appearances like the rare Glooper for collectors to pursue. The hosts discussed a very small stat difference and worried it could become a combat upgrade players felt required to chase. Bonuses, drop rates, and timing remained open. [Transcript, Shiny Zee and possible stat changes](../transcription/2026-02-19.txt)
- **Clothing production.** The team wanted Shaman gear to match the world better and discussed processing clothing and leather through something like Tanning. Existing Crafting could focus more on hard materials such as ores. Skills such as Farming could supply materials for clothing. The skill name, raw materials, and training progression were unsettled. [Transcript, equipment appearance, Crafting, and Tanning](../transcription/2026-02-19.txt)

## 5. FOREST turns points auctions into Seed Vault, with its staking template already live

[30:01](#t=1801)

**Seed Vault** was intended to host recurring timed auctions. People would bid with **SEEDS** earned from staking, trading competitions, and other activities, then share a fixed prize pool when bidding closed. Euler used **1 million $FOREST** to illustrate a prize pool without setting that amount for the round. Spending points in an early round would leave less for later ones, so each event's rewards, pool size, and level of participation would shape how people used their points. The design could also support pools of partner or creator tokens or USDT. A later public explanation on **April 1** specified distribution in proportion to effective SEEDS and multipliers for the top ten under the published rules. The February 19 preview gave no date for the first auction or final multiplier values. [Transcript, Seed Vault and the example prize pool](../transcription/2026-02-19.txt) · [Later SEED Vault mechanics, April 1, 2026](https://forest.inc/news/seed-vaults-the-economy-behind-the-forest-protocol-flywheel)

When introducing Seed Vault to people hearing about it for the first time, Euler used a hypothetical prize pool to explain how to enter with SEEDS.

> **Euler** · [30:01](#t=1801)
>
> “Seed vaults will be generally the air-drop mechanic that will allow us to start air-drop the forest token uh through these bidding campaigns. \[…\] Let's say we add um like 1,000,000 forest token uh to the to the campaign, and uh everybody who has seeds can I can then bid uh, generally deposit the seeds into the vault.”

**The Staking Template was announced live on February 17.** Creators could choose the template when creating a token, configure the pool and rewards, and deploy them. The announcement said parameters could not change after deployment and any undistributed staking rewards would be burned at the end. Euler illustrated the range of configurations with an extreme example of 1% liquidity and 99% staking rewards. He also estimated that developing and auditing an implementation independently could cost about $50,000. The announcement verifies availability of the template. The call included no security audits or returns for a specific project. [FOREST Staking Template announcement, February 17, 2026](https://forest.inc/news/staking-template-critical-milestone) · [Transcript, one-click staking and the configuration example](../transcription/2026-02-19.txt)

## 6. Linear and exponential pricing curves are planned, and the on-chain randomness module is still in development

[36:12](#t=2172)

Euler said FOREST already used a **logarithmic bonding curve**, with rapid price changes early on that flattened over time. It could suit launches in which later participants should be able to enter at similar prices, at the cost of less price movement before the end of the curve stage. The team planned to add **linear and exponential** options for creators to select at launch. A linear curve changes at a steadier rate, and an exponential one accelerates more toward the end. “Graduation” on the call meant moving from initial pricing to the later liquidity stage. The **March 18** announcement went on to list the three configurable curves. [Transcript, bonding curves](../transcription/2026-02-19.txt) · [FOREST glossary and FAQ](https://docs.forest.inc/faq) · [Later configurable curves announcement, March 18, 2026](https://forest.inc/news/customizable-bonding-curves-powered-by-forest-protocol)

The FOREST website redesign aimed to simplify the UI. The team wanted creators to combine templates and switch between them within one token experience. It was also building an **on-chain random number generation (RNG) module** for games of chance such as coin flips or a prize wheel. Euler used a fictional token and a wheel to illustrate it. People could play using the token, and if a game's rules set aside fees to burn, they could use its existing burn capability. The team said the burn feature worked. The call gave no release date for the RNG module, and probabilities, fees, and permissions were still in design. [Transcript, website redesign, combined templates, RNG, and burns](../transcription/2026-02-19.txt)

## 7. FOREST competitions look for early activity, with room to adjust reward multipliers

[48:45](#t=2925)

A player asked how tokens were selected. Euler said the first competition picked a token that had some polish and activity. The creator earned about $600–$700 in fees, according to the team's recap. For the second event, the team gave more weight to existing participation and liquidity. The first round also showed that tokens before graduation could see little price movement under the logarithmic curve used at the time. Euler wanted to see an initial user base and genuine trades, but gave no fixed selection requirements. The official announcements show the first competition was for **RAMEN** and the second for **$BLOOM**. The latter ran from February 9 to 14 with a 500,000 SEEDS prize pool. [First competition announcement, January 26, 2026](https://forest.inc/news/the-first-forest-trading-competition) · [Second competition announcement, February 9, 2026](https://forest.inc/news/the-second-trading-competition) · [Transcript, token selection Q&A](../transcription/2026-02-19.txt)

Another player thought the rankings rewarded the leaders too heavily. The published multipliers for the top three in the second competition were **3, 2.5, and 2**. Euler said the intent was to encourage players to fight for rankings. Future competitions could test smaller multipliers or extend extra multipliers to the top 10. That idea concerned trading competitions. The Seed Vault auction multipliers published later were a separate mechanism. [Second competition announcement, February 9, 2026](https://forest.inc/news/the-second-trading-competition) · [Transcript, suggestion to reward the top 10](../transcription/2026-02-19.txt)

A player questioned whether the trading competition's leaderboard rewards were fair, and Euler gave examples of how future events could adjust the multipliers.

> **Euler** · [48:45](#t=2925)
>
> “So, all the feedback is welcome. If you're saying multipliers are maybe too high, we can try to reduce them. Maybe include more multipliers for like top 10.”

## 8. Hong Kong event, third-stage evolution, and closing

[02:07](#t=127)

- **Hong Kong event.** Euler recalled Mr. Block's event during Consensus in Hong Kong, where the team spoke with projects including Tron, EtherFi, River, Puffer, and Lighter. The organizer's event page lists Zeeverse and Forest. Euler described the meetings as potential leads for partnerships and said the main community event was still in Taiwan. No concrete partnership was disclosed. [Mr. Block Hong Kong event page](https://luma.com/mrblock_hk_2026) · [Transcript, opening recap of the Hong Kong event](../transcription/2026-02-19.txt)
- **Water-type preview.** Jackal ended by showing the water-type Zee concept mentioned at the start. A player asked whether it was another version of an existing skin. The artwork was absent from the transcript, leaving its exact name and release method unconfirmed. When asked whether Chaka's third-stage evolution would consume two second-stage Zee at level 51 or 99, the hosts said they needed to revisit the requirements, without deciding the levels or number. [Transcript, water-type concept art and Evolution 3 Q&A](../transcription/2026-02-19.txt)
- **Raffle.** After excluding hosts, moderators, and bots, Jackal reported **26 entries**. He drew **three Premium Passes** and asked winners to claim through a support ticket. He also announced a Tuesday stream and a Community Call the following Thursday. [Transcript, closing raffle](../transcription/2026-02-19.txt)

## 9. Roadmap

| Status on February 19 | Items discussed |
| --- | --- |
| Publicly available | Zeeverse 1.7.8 offered play without registration, a smaller initial download, and loading improvements. The FOREST Staking Template was live, and the second competition for $BLOOM had finished. |
| In testing or planned soon | New tutorial and full UI, followed by a return to small acquisition tests. Timing for the separate off-chain marketplace was still open. A FOREST website redesign, Seed Vault, and new curves had been previewed. |
| Delivery in stages | Existing dungeons would be divided for the main quest, with new bosses, teleportation, and map improvements. Existing players would complete the new main quest unlocks. |
| Details unsettled | When tools would ship, clothing skills, Shiny Zee, skill bonuses, and third-stage evolution requirements. FOREST template combinations, RNG games, and future competition multipliers. |

## 10. Overall assessment

**Shipping the tutorial ahead of the main quest gives the team an earlier look at its acquisition funnel.** It can study downloads, direct entry, and tutorial completion first, then use the main quest to keep players who decide to stay. Existing players need a clear account of how much they have to replay and how long it takes. If their existing progress lets them unlock stages faster and they meet new bosses or gain useful teleport routes along the way, replaying can feel worthwhile. Dividing the old stages on its own leaves the question of repeatable late-game content open.

FOREST covered the live Staking Template, the upcoming auctions with SEEDS, and the randomness features still in development. We can look at the prize pool, effective points, and settlement of individual Vaults, and at how many players creators keep after competitions end. This call did not provide comparative retention figures for the tutorial, migration rules for the main quest, a launch date for the off-chain Marketplace, or the first Vault's settings. These affect when players can use the features and what it will cost them to do so.
