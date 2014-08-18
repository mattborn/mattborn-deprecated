---
title: Fantasy
---

# NFL Fantasy Football Apps

Ever since I started fantasy 4 years ago, I have wanted to build an app to help me make informed decisions in real-time during the draft and on a week-to-week basis for up-to-the-minute waiver releases and sunday morning injury reports. This season I plan to do exactly that.

First, some things to consider:

- Variables that affect decision making can change in a matter of seconds, so assuming dynamic data is involved, we’ll need caching and quick refresh rates
- Since ESPN is [discontinuing it’s public API](http://developer.espn.com/blog/read/publicretirement), we’ll also need to scrape ESPN and sites like FantasyPros
- [FantasyPros](http://fantasypros.com) already has a great draft assistant and week-to-week assistant

## Real-time draft assistant

### Strategy metrics

Primary and backup strategies will be based on these strategy metrics:

- standard scoring vs. PPR (or half PPR)
- position order: RB1, WR1, RB2, WR2, QB1, TE1, etc.
- depth chart availability: # RB1s remaining, # RB2s remaining, etc.
- league defense: steal upcoming picks that may greatly improve another owner’s team (e.g. owner already has Jimmy Graham and Drew Brees is still available)
- scoring combos: QB + WR1, TE1 or RB1 (PPR) same team, e.g. return player1.available && player2.available;
- handcuffs: RB1 + RB2/3 same team
- contingencies: #2s in the depthchart with #1s likely to get injured or suspended (or already waiting to fulfill suspension)
- previous year top 10 draft scorers w/ owner
- previous year top 10 waiver pickups w/ owner

### Player metrics

Like investing, the primary goal in a draft is to assess and minimize risk. Each of these player metrics should increase foresight and long-term predictability using simple visualizations like green, yellow and red lights or numerical rankings:

- [league-specific draft order](http://games.espn.go.com/ffl/tools/projections)
- [3rd-party ADP](http://fantasypros.com/nfl/adp/overall.php)
- previous year’s stats
- above or below previous year’s pre-season projections
- [official depth charts](http://fantasynews.cbssports.com/fantasyfootball/depth-chart)
- [unofficial depth charts](http://fantasypros.com/nfl/depth-charts.php)
- health: weeks missed last season, age or years in league
- QB: offensive line strength (good, okay, bad)
- QB: team passing attempts vs. runs overall
- QB: league + team rank targets or carries
- defense + special teams: creates more opportunities like offensive line strength
- DND 1: Google top avoid drafting results (custom algorithm)
- DND 2: PSL (personal shit list)
- DND 3: Teams with 3 headed monsters, split time
- gamble: likelihood of availability by next pick

## Weekly Assistant (Waiver Analysis)

- daily or weekly snapshots of league roster data including projections and actual stats or scraped points (no need to write our own algorithms)
- competitive value analysis and target calculations for leagues with a fixed waiver allowance
- roster-specific historical projected vs. actual stock tickers to effectively guage whether a team is playing as expected
- net scoring for starting roster would rank the luckiest league owners since draft to help predict more difficult matchups and playoff viability
