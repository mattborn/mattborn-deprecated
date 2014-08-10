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

### brotado.com

### clarkrichard.com

### eddiejwilliams.com

### kellypruka.com

### mattborn.com

### mattmeg.com

### meganborn.com

### meganpflederer.com

### steveandbritt.com


## Previously owned

### 9lies.com

### abstractedmatt.com

Memorial splash planned for [mattborn.com/abstracted](http://mattborn.com/abstracted)

### auburnmoor.com

### auburnststorage.com

### badbb.org

### barebone5.com

Memorial splash planned for [mattborn.com/barebone5](http://mattborn.com/barebone5)

### beersnobathon.com

### bllbrd.com

Memorial splash planned for [mattborn.com/bllbrd](http://mattborn.com/bllbrd)

### clarkrichardmusic.com

### clientools.com

### clhsbook.com

Memorial splash planned for [mattborn.com/clhs](http://mattborn.com/clhs)

### clschools.info

### cyandev.com

### cyansomething.com

Memorial splash planned for [mattborn.com/cyan](http://mattborn.com/cyan)

### demption.com

### designoverdose.com

Memorial splash planned for [mattborn.com/overdose](http://mattborn.com/overdose)

### endvre.com

### fishcaughtina.net

### freshplugs.com

### hereapp.com

### heyrockford.com

### jamiebreeden.com

### jvcrosscurrent.cc

### killingwhat.com

### laughataustin.com

### mailrss.com

Memorial splash planned for [mattborn.com/mailrss](http://mattborn.com/mailrss)

### marisolyterra.com

Memorial splash planned for [mattborn.com/marisolyterra](http://mattborn.com/marisolyterra)

### mattandmeg.us

### mattborn.info

### matthewborn.me

### matthewborn.co

### matthewcyan.com

### mätt.com

### mdashed.com

### meganandmatthew.com

### modwai.com

### morningstarvending.com

### natekelly.com

### noqpon.com

### nubcore.com

### omgthatsucks.com

### plaidelephant.com

### ragesale.com

### ritzmanhouse.com

### rockfordinteractive.com

Memorial splash planned for [mattborn.com/rockford](http://mattborn.com/rockford)

### simplechurch.co

Memorial splash planned for [mattborn.com/chvrch](http://mattborn.com/chvrch)

### snobathon.com

### solepro.com

Memorial splash planned for [mattborn.com/solepro](http://mattborn.com/solepro)

### solepro.org

### sometro.com

### spymastered.com

### stealcandy.com

### tanshare.com

### terrifictuesdays.com

### thetweetup.com

### timweiskopf.com

### trackluv.com

### weekendtan.com

### wubstruck.com

New site planned for [mattmeg.com/wub](http://mattmeg.com/wub)

### yumawards.com

