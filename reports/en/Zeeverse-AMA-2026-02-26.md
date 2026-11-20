# Zeeverse AMA Deep Dive | February 26, 2026

February 26, 2026 · Community Call · Main speakers Jackal and Euler, identified from how they addressed each other and from context · The transcript has no timestamps and starts mid-conversation · Full duration unverified

The team had spent some time on onboarding. What would veteran players get to play next? The call gave an order **starting with the tutorial and UI rework, then connecting dungeon sections through the main quest and shifting the team's focus toward Great Tree, Forge, and late-game bosses**. It also covered two ways to trade. The in-game Marketplace would handle listings for individual pieces of equipment and Zee, while GEX would continue to focus on standardized resources and liquidity pools. FOREST's priority was using Seed Vault to connect trading, events, and the airdrop.

## 1. The new tutorial leads into the main quest, and restoring totems will change veterans' daily routes

At the end of the call, the team recapped plans from the part of the opening missing from the recording. The aim was to ship the first part of the tutorial **the following week**, introducing the story and bringing players into Zeme. Two dungeons would follow in separate modules. Each module would let the team see whether new players made it through and adjust later quests accordingly. The UI was also being reworked, with direct improvements to the minimap and the previously awkward bank or Stash. Before the call, 1.7.8 had already removed mandatory registration, reduced the initial download, and improved dungeon loading. The next round would change what players learned once they got in and how the story continued. The March 9 release notes for 1.8.0 confirmed that the new tutorial, UI, minimap, and Stash arrived together, after the call's target of “next week.” [1.7.8 release notes](https://zeeverse.com/news/1-7-8-release-notes) · [1.8.0 release notes](https://zeeverse.com/news/1-8-0-release-notes)

The main quest would bring regular dungeons into the story and have players **restore totems, then travel between the totems they had repaired**. A player asked about convenient access near a village. The team confirmed there would be one near a place players regularly visit, though the place name is unclear in the transcript. The free main quest totems would need to coexist with later travel options such as Great Tree and Umbra. Gold costs and travel time came up as possible ways to balance them, with a decision still open. Veteran players with strong teams may find the first few dungeons easy, while the totems could cut down on backtracking on their regular gathering routes. [Quest documentation](https://whitepaper.zee-verse.com/gameplay/quests)

After the discussion turned to restoring totems in the main quest, the host explained their new use for travel and the need to balance it against late-game travel.

> **Host**
>
> “Upon restoring these totems, you'll be able to traverse in between them. However, uh, obviously, we're looking to balance this, because as you know, a free to play campaign versus the endgame quest. \[…\] We're still looking into the balance of these teleports, not to make them, you know, uh, too overpowered.”

## 2. Late-game goals include repeatable bosses, exclusive drops, and new areas

The recording starts in the middle of a discussion about reusing content built for onboarding in an encounter with something to offer veterans, including boss-specific drops and new mechanics. The opening exchange used a Vulcan-style fight as an example. When a player later asked where the team would focus after the tutorial, the team said quests such as Great Tree and Forge would unlock items, areas, and ways to travel. Vulcan came up again, along with a world boss envisioned as a multiplayer experience. Both discussions described work in development, and the transcript does not give enough information to tie each fight to a specific quest.

The recording starts mid-conversation, as the host is explaining how work done for onboarding could also support a late-game boss fight for veterans.

> **Host**
>
> “I think it's really cool that we found a way how we can um, uh, use the content and and and the stuff we are building for onboarding, and translate that into also a late game experience uh for existing player base. \[…\] It will offer uh boss unique drops.”

The team closed by giving the order of priorities. It would finish the main quest and then shift fully to Great Tree, Forge, and other mid- and late-game content. Work on both quests was already under way alongside the phased work on the main quest. The team would keep making small adjustments to onboarding based on data from new players. Players asked how much development time the team would devote and when they could play. The call gave the priority order, with release dates, drop tables, and group rules still open.

## 3. The Marketplace would list rare individual items, and the off-chain GEX API would handle pool trades

| What players want to do | Route and status discussed on the call |
|---|---|
| Trade standardized resources that have pools | GEX already supports these trades, with resources priced in $VEE. The team proposed making the off-chain GEX API public so players with the necessary technical skills could trade programmatically, giving energy potions as an example. There was no date for opening the API. |
| Sell individual items that are ineligible for listing on GEX | Under the proposal, players could list these in a separate off-chain Marketplace within the game and settle trades in $VEE. Legendary armor and Shield of Souls were examples. The team compared listing items one at a time to using OpenSea, with trades taking place in the game. The feature was in development and depended on the market UI update. |
| Sell a Zee you have trained | The team also included Zee among the assets it intended to support in the Marketplace. The recording leaves asset eligibility, cross-chain execution, and fees unspecified. |

Euler expected the API to help traders manage pricing discrepancies and liquidity across on-chain and off-chain markets and make better use of the funds already in pools. That was the team's rationale for opening the tool. It did not announce any observed effect on prices or liquidity. The GEX documentation confirms the basic resource-pool structure and $VEE pricing. The status of the proposed capabilities comes from the call. [GEX game documentation](https://whitepaper.zee-verse.com/economy/game-exchange-gex)

After using energy potions as an example of programmatic trading, Euler addressed possible concerns about trading tools and explained why the team still wanted to open the API.

> **Euler**
>
> “If we want to enable people to uh manage liquidity, manage prices between uh on chain and off chain gap, uh, then then we kind of should give uh tools for people to do that. And and at the end of the day, the more the volume there is, the more utilization for existing liquidity there is.”

## 4. FOREST discussed a stake of about 7 million tokens and made Seed Vault central to the next phase

A player asked about a lockup of **about 7 million $FOREST tokens** that had drawn community attention. The speaker said the team's preliminary check suggested one trader or a group of traders might have bought the tokens a few months earlier and then locked them. The call did not provide an address, transaction hash, or verifiable account attribution. The speaker also said the design was meant to yield a lower APY per token staked as more tokens were staked. The answer gave the team's understanding of the lockup. It did not announce a new yield, a reward distribution formula, or any price outcome.

The platform team showed a sample of the new interface and aimed to release the new UI and templates the following week. The first step would be **uploading HTML5 games or applications and attaching them to tokens**, followed by considering built-in AI tools for generating projects from text. Using SEED to pay for prompt-based generation and cap usage was a proposal. FOREST had announced the Staking Template for creators on February 17. The capabilities previewed on the call would build on it. [Staking Template announcement](https://forest.inc/news/staking-template-critical-milestone)

After showing a sample of the new FOREST interface, Euler explained which part of the playable-content support would come first.

> **Euler**
>
> “Anyone will be able to upload their HTML 5 uh game or app, uh, on top of the coin. \[…\] We will be adding right after HTML 5, uh, support, uh, inbuilt AI game builder.”

When asked how phase four of Zeeverse P2A would connect to the FOREST airdrop, the team proposed **ongoing auctions through Seed Vault**, starting with $FOREST and potentially adding tokens from partner projects. The idea was for new project launches and trading activity to produce SEED, which participants could then use to bid for rewards. The launch depended on the feature and related work being ready. The recording gives no event date, eligibility criteria, or individual allocation for phase four of P2A. A 2025 announcement had already described a SEED-based claim model. The April 1 announcement later explained this version of the Vault's time-limited prize pools, shares, and rank bonuses. On the call, Cherry was asked to verify the final winners of the previous trading competition, and the question remained open at the end. [2025 SEED claim rules](https://zeeverse.medium.com/forest-airdrop-unlock-the-seed-based-claim-model-4c230a66f55f) · [April 1 explanation of Seed Vaults](https://forest.inc/news/seed-vaults-the-economy-behind-the-forest-protocol-flywheel)

Asked how phase four of Zeeverse P2A would connect to the FOREST airdrop, Euler explained why the team wanted distribution to take the form of recurring auctions.

> **Euler**
>
> “That's why uh we have a seed vaults where we will be handing out these air drops for the seeds, as ongoing thing, and I also think it's really cool because it kind of keeps um engagement active across the platform. Because there is al- constantly something happening.”

## 5. Events for veterans would start with a small test, and social items and merchandise remained under discussion

- **Off-chain GEX competition.** The team suggested a small trial using the more accessible off-chain GEX. When a player asked how to verify the standings without seeing participants on the trading page, the answer was to have the data team export results daily and post a leaderboard in Discord. If the event proved popular, they would consider a live in-game leaderboard and repeat events. Trading volume, profit and loss, and holding periods were all options for scoring. Eligible items, prizes, and a start date were left for discussion after the call.
- **Community moderation.** The competition conversation led to a discussion of repeated arguments in chat. The hosts asked members to treat one another with respect and said two members would have a one-week cooldown while still being able to read posts. The recording does not establish the exact permissions or confirm what happened afterward.
- **Seeds and social collectibles.** A player suggested having an NPC periodically match trades for different seeds, perhaps with a stall that appeared on Sundays. The team also discussed adding new emotes, NFT emotes, mounts, and items for unconventional equipment slots to the rewards for Discord activity. Players might get them by redeeming community shop points or through events, and the items could be traded. The shop name and exact terms are unclear in the transcript. The crop seeds in this discussion are separate from FOREST's SEED.
- **3D printing and merchandise.** Anyone with a specific printing request could contact the team about a model. Plush toys and possible IP partners were still ideas. The team said the wooden collector's box shown on the call was part of a run of **25 individually numbered sets**, with a figure and other merchandise. Giving one away at a future event was mentioned as an example.
- **Closing giveaway.** Two Premium Passes came up during the sign-off. The giveaway drew three times from a list of 31 names, awarding a one-month pass each round. Winners were asked to open a Discord ticket for the code.

## 6. Roadmap as described on the call

| Status | Items |
|---|---|
| Available before the call | Guest access and loading improvements in 1.7.8, GEX resource trading, and the FOREST Staking Template. |
| Near-term targets from the call | First part of the new tutorial and UI, the introductory dungeon modules that would follow, and the new FOREST interface and templates. |
| In development or awaiting decisions | Main quest totems and teleport balance, Great Tree and Forge, exclusive drops and a multiplayer world boss, the in-game Marketplace, the off-chain API, and Seed Vault. |
| Trial proposals and concepts | A small GEX trading competition, Discord social items, NPC seed trading, SEED for AI generation, and merchandise from future IP collaborations. |

## Overall assessment

There are two concrete ways to judge whether rebuilding the tutorial benefits veterans. Once the main quest ships, can the totems cut down on backtracking along frequently traveled routes? Can later fights offer exclusive rewards to teams that are already well developed? For trading, resources with standardized pools had been the ones that were easy to compare on price. A Marketplace that can handle rare individual items would give players a more natural way to sell them. A small GEX competition would also allow the team to test the value of the event on its own. It could start by seeing whether the daily leaderboard makes scores and prizes clear, then decide whether a built-in feature is worthwhile. FOREST's ongoing auctions need to be assessed against the published rounds, eligibility requirements, and distribution rules. The individual $FOREST lockup discussed on the call cannot establish how the system works.

Sources include the [February 26 English transcript](../transcription/2026-02-26.txt). The machine transcript has no speaker divisions or timestamps, and coverage of the missing opening comes from the closing recap. The screenshots and chat messages from the call were not archived. Project announcements confirm when guest access, the tutorial, and the UI shipped, as well as the later public explanation of Seed Vault. Teleport fees, late-game rewards, ownership of the stake, and competition rules remain open as described above.
