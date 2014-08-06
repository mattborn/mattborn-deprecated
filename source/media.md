---
title: Media
---

# Media

A few years ago, I registered bllbrd.com and created my first production [Rails](http://rubyonrails.org) app with the help of my buddy [Eric](http://ericcecchi.com). The initial idea was to scrape [Billboard.com]() for all the top track lists, then scrape all of the seedy free MP3 sites to find links to 320kbps downloads for each song on the lists. We then added services for grabbing additional metadata, album artwork, Youtube videos, and streaming availability via the [Rdio](http://rdio.com/developers) & [Spotify](https://developer.spotify.com) APIs. Eventually, we wanted to make the [WolframAlpha](http://www.wolframalpha.com/) of multimedia: a search tool that would index every* song, movie, and TV show, then apply as much metadata as possible, and finally scrape every streaming and download service for availability including bit torrent, usenet, etc. As you might imagine, this never happened and bllbrd.com no longer exists, but after seeing sites like [CanIStreamIt](http://www.canistream.it) pop up, I know it’s possible.

* Well, there would be a layer of light curation and data cleaning to make sure crappy content doesn’t slow down the service.

## Music

[Zack](http://z19r.com) and I are currently working on a project to compile every band we were influenced by in high school including specific albums and songs. My vision is to programmatically determine if any of the bands are still touring, add album artwork, create Rdio or Spotify playlists, and integrate music videos from YouTube or Vimeo.

As it is in my nature to take everything one step further, I could see this small project turning into a bigger app that I would call “Four More Years.” You could put in the year you graduated high school and we would automatically generate a similar experience grabbing album releases, radio hits, and songs that would have likely influenced you during that time. You could also step forward or backward in increments of 4 years which would roughly map to your middle school and college years. To make it social, we could add a “Top 80 Minutes” voting system where you could invite all your friends from high school to vote on their favorite songs (or grab existing play data) to create a playlist that would fit on a standard CD-R. Perhaps, a user could also upload local garage band songs for an additional level of engagement. After awhile, I’d imagine we would have some interesting, aggregate data to sell identifying patterns for particular genres, regions, ages, etc.
