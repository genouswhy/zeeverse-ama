# Zeeverse AMA Report | 2026-03-26

March 26, 2026 | Community Call | Main speaker: Euler (identified from the discussion; Jackal was reportedly due back the next day) | The speakers said at the end that they had been talking for about an hour. The transcript starts mid-conversation and has no timestamps.

With tutorial completion up from **32% to 68%**, Zeeverse now wants to give players a clear idea of what to do on day one once they have named their character. The team plans to guide them through a seven-floor first dungeon and a village totem. The call also took questions from traders about **what the GEX API supports, the distinction between Gold and Spirit, and why rare gear needs its own listings alongside the resource pools**.

## I. The Philippines is the tutorial test market, and the focus is shifting to day one

[00:08](#t=8)

Euler explained why testing was continuing in the Philippines. The ads targeted ordinary game players so the team could see whether they would finish the tutorial of their own accord, without extra incentives. Lower-spec devices and weaker connections common in the market also expose loading and performance problems sooner. Euler estimated that acquiring a user through a comparable U.S. campaign could cost **10–20 times** as much. The call shared no current quotes, ad budget or comparison data by market. Asked what to do if new players joined Discord and asked about FOREST, he said the team was not actively sending users from paid acquisition into Discord at the time and could point them toward the project website if it came up.

According to the call, the original tutorial had a **32%** completion rate about two weeks earlier and reached about **68%** after just over a week of iteration. Those figures cover the soft-launch sample. The team did not disclose its size or day-two retention. Releases 1.8.0 and 1.8.1 independently confirm the tutorial overhaul and hotfixes for stalls during hatching and item pickup. The new focus is the first day, up from roughly the first ten minutes, with about **200–300 new players** planned for the next round. The team said daily active users were then in the hundreds. Thousands of daily users and a global release were expectations for the future. [1.8.0 release notes](https://zeeverse.com/news/1-8-0-release-notes) · [1.8.1 release notes](https://zeeverse.com/news/1-8-1-release-notes)

Euler explained that the Philippines test brought in enough players to get usable tutorial data, then gave the completion figures for the two versions.

> **Euler** · [02:16](#t=136)
>
> “When we started with the first tutorial version two weeks ago, our completion rate uh was only 32 percent, and which which appear like which is generally a terrible result. And what we did, we managed to improve that result to 68 percent. So that's more than two x improvement.”

## II. The first main quest was aimed at the weekend, and returning players would also rebuild the first totem

[05:36](#t=336)

In the old flow, players could lose direction after naming their character. The original side quests had content of their own but did not add up to a clear first-day path. On this call, Euler described the release as the **first of seven planned main quest sections**. The first dungeon went from about 60 floors, as previously described on the calls, to **seven floors**, with a boss on the last floor. Players would collect totem fragments during the run and restore the village totem to unlock subsequent maps.

While explaining why returning players would also go through the starting area, Euler described how the shortened dungeon would lead to the rest of the map.

> **Euler** · [07:44](#t=464)
>
> “Instead of having sixty levels on the first dungeon, we'll have just seven, and and the seven seventh level will be the boss, and once um you complete all the seven levels, uh, meanwhile, you will be collecting the totem pieces, and you will rebuild the first totem, and the first totem will unlock the rest of the zeevers.”

The plan put the first-area gate in front of returning players as well. Euler noted that some teleportation methods might bypass it and did not present them as a supported shortcut. He estimated **5–10 minutes** for experienced players to clear it for the first time. The team planned to submit the build for review on Friday night, aim for Saturday and hope for Monday at the latest. It would then bring in new players to observe and make further fixes. The official **April 2** release notes confirm new introductory quests, the Grass Dungeon overhaul and level selection. The notes do not establish every detail of the access gate. [1.9.0 release notes](https://zeeverse.com/news/1-9-0-release-notes) · [Quests documentation](https://whitepaper.zee-verse.com/gameplay/quests)

## III. Two currencies were getting new icons in the same update

[13:17](#t=797)

| What players would see | How it would work, according to the call |
|---|---|
| **Coins**, used to level Zee, would become **Spirit** | The name and icon would change. Sources such as defeating Zee and selling relics, and balances already held, would carry over under the existing rules. |
| The in-game GEX **$VEE** icon and name would become **Gold** | The game would display off-chain trading balances as gold coins. The team said players could deposit $VEE as Gold and withdraw it back at **1:1**, that existing functionality would continue, and that the web version might keep the $VEE label. |

Euler attributed the Gold label to requirements for app store distribution. The call did not go into policy text. Release 1.7.5 in 2025 had already introduced the off-chain GEX market and off-chain $VEE, and separated on-chain functionality in the mobile client from WebGL and Epic. Release 1.9.0 on April 2 confirms both name changes. When checking an updated balance, players can tell the two apart by use: Spirit for leveling and Gold for exchange. [1.7.5 release notes](https://zeeverse.com/news/1-7-5-release-notes) · [1.9.0 release notes](https://zeeverse.com/news/1-9-0-release-notes) · [$VEE documentation](https://whitepaper.zee-verse.com/economy/utility-tokens/usdvee)

After addressing the leveling currency, Euler used a deposit and a withdrawal to explain the link between Gold and VEE.

> **Euler** · [15:16](#t=916)
>
> “One to one for the v token. So, you will be generally just, when when you will withdraw the gold coins, uh, you will receive the v token. And when you will when you will deposit the token inside the game, you will receive the gold coins.”

## IV. The GEX API can list every pool, with programmatic transfers and the rare item Marketplace still planned

[15:48](#t=948)

Some players took the 25 items in the API example as a limit. The team explained that **25 was an example** and an existing method could list all items and pools. An unclear passage sounds like a rate limit of **240 per minute**. The transcript repeats the number and the call did not specify the endpoint, the unit the quota applied to or whether it would change. The speaker also asked players to avoid flooding the API with requests. The API could already execute trades within GEX. It did not yet support direct deposits and withdrawals between the on-chain and off-chain sides.

A player saw 25 items in the example and asked whether the API would expose only those items. Euler explained what the sample represented.

> **Euler** · [16:10](#t=970)
>
> “The 25 items which were \[…\] provided as an example. You can easily uh just, there is a method, so you can easily query um every single item, every single pool.”

Euler's target at the time was to add **programmatic deposits and withdrawals for items and $VEE** that week. The transcript gives no actual **launch date**. Euler wanted traders to be able to act on price differences between the two sides more continuously. A separate in-game Marketplace was planned alongside GEX, with listings for less interchangeable assets such as high-level gear and Zee, and a proposed API of its own. It continued the direction discussed in February. Timing, eligible items and trading restrictions were still open. The game documentation describes pools for standard items, trades and liquidity provision in GEX. [GEX documentation](https://whitepaper.zee-verse.com/economy/game-exchange-gex)

The off-chain exchange already handled standardized items in large quantities. Euler used high-level gear and Zee to explain why the team wanted listings alongside the pools.

> **Euler** · [11:04](#t=664)
>
> “Currently there is no um way for you to trade your zs. There is no way for you to trade your uh like high level equipment. And we'll be opening up the marketplace next to the gex, where you will be able to just list your items off chain.”

## V. The team discussed separate pools to contain event risk and FOREST as technology for other games

[23:02](#t=1382)

Euler used the example of a player chopping wood, selling it in-game and buying other materials to show how ordinary play can lead into the same trading loop. He wanted more regular players to use the exchange, making fees a possible source of revenue. The call contrasted around **3–4%** in traditional games with a possible **40–50%** for Zeeverse. The latter was the team's estimate of the share of users it might earn revenue from, with no realized payer rate or revenue disclosed.

For Play-to-Earn, he described launching a special item for one event and placing an illustrative **200 million $VEE** in a separate liquidity pool. If the event item became oversupplied, that pool would absorb the price decline first. The call did not announce that budget, name an event or show results from testing the isolation. Asked about buying other games' items on GEX, Euler said Zeeverse should trade items its players can use. He preferred using **FOREST to provide similar technology to other games** and stressed that each would need a mature in-game economy to support trading. There was no announcement of a cross-game marketplace or an external integration date.

Euler used a hypothetical pre-launch event to explain how an isolated pool could hold both the event incentives and the selling pressure.

> **Euler** · [23:59](#t=1439)
>
> “We will be able, let's say, allocate 200 million V token to it. Uh, and and this will be a single pool which is exposed to play to earn behavior. And the moment these items will be overinflated, the price for every item will just drop and crash.”

## VI. Questions from the audience and closing notes

[32:31](#t=1951)

- **Another trading competition.** Euler leaned toward ranking by profit instead of volume and planned to discuss it with Jackal on his return. The call set no assets, prizes or rules. On existing trading apps and credit card purchases, he suggested that the community might build open tools and mentioned the option of displaying in-app purchases as Gold. These were ideas for the future.
- **Launch and community expectations.** One listener said they were more interested in the TGE. Euler said the timing was not right. A global release would need players who continued to play in order to support a token event. The examples of a hundred thousand new players a day, a million total users and offline card payments described future scenarios. The transcript gives no TGE date, retail payments launch or partnership announcement.
- **Other games.** A player asked about other Web3 games. Euler said he had not followed them closely and mentioned some titles on Ronin that he thought had built real gameplay. This was his impression on the call.
- **Giveaway.** The speakers asked Cherry to save a screenshot for a draw after the call. The transcript ends with the host saying goodbye and gives no draw results.

## VII. Roadmap as discussed on this call

- **Already available.** Updated tutorial and UI, the soft-launch test in the Philippines, off-chain GEX and basic trading queries.
- **Immediate targets.** Deliver the first chapter of the main quest and the rebuilt seven-floor dungeon, introduce the Spirit and Gold labels, follow with hotfixes and bring in more players to test day one.
- **Still in development.** Programmatic deposits and withdrawals, plus the Marketplace for less interchangeable assets and its API.
- **Exploratory.** Profit-based competitions, event items in isolated pools, FOREST trading infrastructure for other games, in-app purchases and other payment methods. Global release and TGE dates remain open.

## Overall assessment

The move from 32% to 68% points to a meaningful improvement in the first ten minutes. The next questions are how many players reach and restore the first totem and whether they want to keep playing when they leave town. For trading, understanding Spirit and Gold will affect how easily players can move from fighting Zee to using the exchange. After that, the availability of programmatic deposits and withdrawals, actual participation by ordinary players, liquidity depth and fee revenue will need to be observed. The proposed revenue and isolation mechanisms should be evaluated on their own results.

This report is based on the [March 26 original transcript](../transcription/2026-03-26.txt). Line-by-line timestamps, original data from the Philippines test, the corresponding API version and screenshots from the call were unavailable. The API rate limit remains uncertain. Release targets, token-market judgments and features shipped are reported according to their respective status.
