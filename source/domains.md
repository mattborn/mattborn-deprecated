---
title: Domains
---

# Domains

I’ve made several failed attempts to manage all of my web properties in a systematic way, so perhaps it is time to write about it and see what I can learn in order to be more effective in the future.

## Registrars

### GoDaddy

[godaddy.com](http://godaddy.com)

A few months ago, GoDaddy deactivated all of their renewal coupon codes. The ability renew each of my domains for around 40% off the standard industry renewal rate is the sole reason I used GoDaddy exclusively for the past 9 years. I am now seeking out more reliable, cost-effective registrars to which I will migrate each of my domains as they are due for renewal over the next couple years. GoDaddy is a classic case of a business that got too big.

### Hover

[hover.com](http://hover.com)

While typically seen as one of the sexiest registrars on the block, I have avoided Hover since they charge standard industry renewal rates. It is seemingly attractive that Free Whois Privacy is included with every domain, but I am still not sure whether this is really valuable or not. One thing I am very unhappy about is that they do not offer catch-all email forwarding as part of their DNS configuration. This broke my sister’s email when I transferred the domain and I have yet to set up postfix on another server. I was willing to give it a try, but this may turn out to be a deal-breaker.

### Namecheap

[namecheap.com](http://namecheap.com)

Namecheap is a great example of a company trying to be sexy by painting over rust from the last decade. While I feel like they [missed the mark](http://jamesparsons.com/2014/01/namecheaps-new-2014-redesign-verdict) on the outside and need to pay much more attention to what’s under the hood, these guys are holding their own when it comes to cost-effective domain management. Unlike Hover, they do support catch-all email forwarding and Gmail integration which has made it very easy for me to migrate some domains already. Without coupon codes, Namecheap is nearly $5 cheaper than GoDaddy per domain per year which makes it seem like the obvious choice. Namecheap also [publishes their own coupon codes](https://namecheap.com/promos/coupons.aspx) with new ones every month which could sweeten the deal in the long run.

## DNS configurations

### Route 53

[aws.amazon.com/route53](http://aws.amazon.com/route53)

I am currently only using this for [steveandbritt.com](http://steveandbritt.com) and needed a DNS solution to map to Amazon S3. The initial setup was a bit confusing due to the proprietary nature of things, but it does work and it is dirt cheap. After reviewing other DNS and hosting options, I don’t think I will be using this again in the future.

### Host management

For the past 9 years, I registered most of my domains with GoDaddy using Dreamhost’s nameservers to manage DNS in the same control panel I was managing the hosting configuration including folders, databases, email, mirrors, and redirects. At some point, I realized I could handle things like Gmail integration and A-record forwarding from GoDaddy. Moving forward, I will only use host forwarding when absolutely necessary.

### Registrar management

Ultimately, I’d like to have all of my domains make use of their respective registrar’s DNS configuration and only deal with redundant host management where necessary. This way it is a little bit easier to configure records to use separate service providers for web hosting, databases, and email for each domain.

## Hosting configurations

### Amazon S3

[aws.amazon.com/s3](http://aws.amazon.com/s3)

Wonderful as a free service for the first year, and still nearly free after that. With the discovery of Dokku and Github pages, however, it doesn’t make sense for me to use this any longer (especially given the DNS considerations).

### Dreamhost

[dreamhost.com](http://dreamhost.com)

Great recommendation from [Mig](http://mig.io) way back in the day, but it hasn’t really changed much in the past decade and it’s simply not worth the money for such a rigid LAMP stack.

### Digital Ocean

[digitalocean.com](http://digitalocean.com)

Simply can’t beat $5 a month for root access on an SSD. I was initially using ServerPilot, but that brought the same LAMP stack woes as Dreamhost. With Dokku, I am free to roll any stack I want then quickly deploy to any subdomain.

### Github Pages

[pages.github.com](http://pages.github.com)

I had come across Github pages awhile ago but assumed these only made sense as marketing and documentation for active projects. Since it’s really just free hosting for static sites, I decided it was a good place to start putting any projects that don’t have a home elsewhere.

## Application layer

### ServerPilot

[serverpilot.io](https://serverpilot.io)

Since it’s built specifically for Digital Ocean, I figured ServerPilot’s automated configuration would be a great way to migrate all my PHP projects from Dreamhost. When I realized I had once again backed myself into a corner, I decided it was important to avoid limiting myself to a LAMP stack.

### AppFog

[appfog.com](https://appfog.com)

Absolutely the best application hosting service while it was free, but they dropped the free plan because it was lowering performance for paying customers. I was grandfathered in to keep my free plan, but my account has since gone stale as a result of my move to Digital Ocean + Dokku.

### Heroku

[heroku.com](https://heroku.com)

Easily the most popular PaaS, but something about the configuration bothered me when I first used it a couple years ago. It looks like it has gotten better since then, but I’ve found solace in rolling my own stacks with Dokku.

### Dokku

Basically, [a roll-your-own Heroku](https://github.com/progrium/dokku).

## Email configurations

### Local

In my Dreamhost days, it made sense to use their email for all my domains, but the lack of persistency and data loss that occurs as domains expire makes it frustrating that I didn’t just use Gmail. Many of my domains are still using local email, but the goal is to move all email to the cloud.

### Forwarding

The easist email configuration for any domain is a simple catch-all that forwards everything to an existing email address.

### Catch-all via postfix

While I’ve never set up [postfix](http://postfix.org) before, Eric said he’d help me and it would be great to have a mail forwarding solution on hand.

### Gmail

Gmail is persistent, [easy to integrate](https://integrate.godaddy.com/google/gmail-domain.aspx), and free. Since Google Apps is no longer free, the best option is to configure a catch-all that forwards to a personal Gmail address.

## Currently owned or managed

### [brotado.com](http://brotado.com)

Prototypes for [Sprout](http://sproutsocial.com). Uses [Grunt](http://gruntjs.com) + [Assemble](http://assemble.io).

### [clarkrichard.com](http://clarkrichard.com)

Formerly a WordPress site I created and managed for my friend, but it now redirects to his new site. He recently signed to Sony Music.

### [eddiejwilliams.com](http://eddiejwilliams.com)

Formerly a WordPress site I created for my friend and former NFL player, but I think he’s using a different site now.

### [kellypruka.com](http://kellypruka.com)

A splash page and catch-all email forwarding for my mom.

### [mattborn.com](http://mattborn.com)

My personal site. Dokku awaits fresh content.

### [mattmeg.com](http://mattmeg.com)

Personal site for Meg & I. All it has going for it so far is the [airbnb page](http://mattmeg.com/airbnb).

### [meganborn.com](http://meganborn.com)

Meg’s personal site.

### [meganpflederer.com](http://meganpflederer.com)

Redirects to meganborn.com.

### [steveandbritt.com](http://steveandbritt.com)

Wedding microsite for Meg’s cousin + fiancé.

## Previously owned or managed

### 9lies.com

Microsite to promote a sermon series at [Redemption](http://redemptionbc.org).

### abstractedmatt.com

Personal alias. Memorial splash planned for [mattborn.com/abstracted](http://mattborn.com/abstracted)

### auburnmoor.com

Microsite to promote my friends Chris and Kara’s debut EP.

### auburnststorage.com

Commercial microsite for a storage company based in Rockford.

### badbb.org

Bad business bureau. At the time, I was frustrated after getting scammed by [Sundance Vacations](http://www.sundancevacations.com
) + shorted by a client, so I wanted to build an index of bad businesses.

### barebone5.com

Boilerplate HTML5 templates because I didn’t agree with everything other boilerplates were doing. Memorial splash planned for [mattborn.com/barebone5](http://mattborn.com/barebone5)

### beersnobathon.com

Happy hour promotion for [Sprout](http://sproutsocial.com). Moved to beer.snobathon.com.

### bllbrd.com

Music metadata + download indexing service created with my buddy [Eric](http://ericcecchi.com). Built with [Ruby on Rails](http://rubyonrails.org) and [Bootstrap](http://getbootstrap.com) using the short-lived Billboard.com API. Memorial splash planned for [mattborn.com/bllbrd](http://mattborn.com/bllbrd)

### clarkrichardmusic.com

Original domain used until clarkrichard.com was available.

### clientools.com

In-browser toolbar for developing and managing client sites.

### clhsbook.com

Digital version of the [CLHS](http://clschools.org) yearbook. Memorial splash planned for [mattborn.com/clhs](http://mattborn.com/clhs)

### clschools.info

Beta development site for [CLHS](http://clschools.org).

### cyandev.com

Beta development site for cyansomething.com.

### cyansomething.com

Personal alias for all my work at the time. Memorial splash planned for [mattborn.com/cyan](http://mattborn.com/cyan)

### demption.com

Beta development site for [Redemption](http://redemptionbc.org). (re.demption.com)

### designoverdose.com

Personal alias for all my portfolio work in college. Memorial splash planned for [mattborn.com/overdose](http://mattborn.com/overdose)

### endvre.com

Personal alias. Never used.

### fishcaughtina.net

Student project site for [CLHS](http://clschools.org).

### freshplugs.com

Developer-friendly WordPress plugin service and store started with my buddy Nick while we were at [Paper Tower](http://papertower.com).

### hereapp.com

Attendance app for classrooms.

### heyrockford.com

Podcast project.

### jamiebreeden.com

Personal site I configured and managed for my friend from college.

### jvcrosscurrent.cc

Registered for my old youth group at [Rockford First](http://rockfordfirst.com).

### killingwhat.com

Microsite to promote sermon series at [Redemption](http://redemptionbc.org).

### laughataustin.com

Microsite for students at [CLHS](http://clschools.org).

### mailrss.com

Intended as an inbound email-to-RSS feed service for eliminating noise from your inbox while preserving on-demand access to valuable promotions. Memorial splash planned for [mattborn.com/mailrss](http://mattborn.com/mailrss)

### marisolyterra.com

Microsite created for my former band. Memorial splash planned for [mattborn.com/marisolyterra](http://mattborn.com/marisolyterra)

### mattandmeg.us

Never used.

### mattborn.info

Never used.

### matthewborn.me

Self-promotion microsite that will be moved to mattborn.com.

### matthewborn.co

Never used.

### matthewcyan.com

Former personal site.

### mätt.com

Never used.

### mdashed.com

Self-promotion microsite created whilst trying to attract the attention of Carsonified for $80k/year to work-from-anywhere.

### meganandmatthew.com

Never used.

### modwai.com

Intended to showcase minimalist posters I wanted to print and sell.

### morningstarvending.com

Registered for my grandfather’s vending business.

### natekelly.com

Personal site I configured and managed for my buddy from college.

### noqpon.com

Intended as a mobile application to serve up store cards and curated coupons.

### nubcore.com

Intended as an education blog covering web design and fundamentals of living.

### omgthatsucks.com

Intended as a showcase and commentary on poorly designed websites.

### plaidelephant.com

Configured and managed for my buddy, Nate Kelly.

### ragesale.com

Intended as a community-based garage sale listing service. (ga.ragesale.com)

### ritzmanhouse.com

Commercial microsite for a bed and breakfast in Northwest Illinois.

### rockfordinteractive.com

Full-service design and social media agency start-up based in Rockford. Started with my sister Rikki and my friends Chris, Eric, and Dave. Memorial splash planned for [mattborn.com/rockford](http://mattborn.com/rockford)

### simplechurch.co

Events and media management app for churches or similar organizations. Memorial splash planned for [mattborn.com/chvrch](http://mattborn.com/chvrch)

### snobathon.com

Beer and wine happy hour promotion for [Sprout](http://sproutsocial.com).

### solepro.com

Intended as a curated, community-driven informational resource for sole proprietors, small business owners, and entrepreneurs. Memorial splash planned for [mattborn.com/solepro](http://mattborn.com/solepro)

### solepro.org

Alias for solepro.com.

### sometro.com

Intended as a fashion blog for young men.

### spymastered.com

Data analysis and auto-play assistant for the Spymaster Twitter game created with my buddy [Zack](http://z19r.com).

### stealcandy.com

Intended as a series of articles and infographics on how to make money.

### tanshare.com

Intended as a marketplace for reselling vacation timeshare packages.

### terrifictuesdays.com

Microsite for weeknight drinking with my buddies in college.

### thetweetup.com

School project for local meetups coordinated via Twitter.

### timweiskopf.com

Personal site I managed for a buddy from church.

### trackluv.com

Intended as a track-and-field blog.

### weekendtan.com

Alias for tanshare.com.

### wubstruck.com

Personal site for our French Bulldog, Wub! New site planned for [mattmeg.com/wub](http://mattmeg.com/wub)

### yumawards.com

Intended as an incentive-driven recipe sharing site as a collaboration with my buddy Mike’s dad, [Papa Colesworthy](http://iqlearningsystems.com).
