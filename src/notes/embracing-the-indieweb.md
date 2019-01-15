---
title: Embracing the IndieWeb
slug: embracing-the-indieweb
date: '2016-02-11'
opener: >-
  I spent last weekend building and deploying this website - who says a cobbler
  can't have shiny new shoes?
featured: /images/night-lights.png
category:
  - development
---
I recently attended January's [Front End London](http://www.frontendlondon.co.uk) meetup and listened to [Calum Ryan](https://calumryan.com) gave a great presentation about the [IndieWeb movement](https://indiewebcamp.com/).

What is the IndieWeb? According to their site they are;

> The IndieWeb is a people-focused alternative to the "corporate web".

Basically they are a group advocating that people take back ownership of their own content and self host their own websites, rather than publishing out to Medium, Twitter etc.

This movement was not something I had been aware of previously but elucidated very nicely what I had already been pondering for a while - mainly that the walled gardens of Silicon Valley like Facebook et al were becoming all consuming.

Indeed, I think more recent initiatives such as Facebook Instant and Apple News are attempts to sidestep the web entirely - to encourage users down their specific funnel to the internet, and their funnel alone.

The first step on my IndieWeb journey is to reclaim my web domain. I had previously using Flavors.me for convenience but aside from that particular platform having quite patchy uptime (it also seems to have been mothballed by Moo?), it didn't serve my needs fully anyway as I need to have my online CV on this domain.

The second step I've taken is to associate this domain with my other profiles sitting on the "Silicon Valley Silos". This can be done with the `rel="me"` HTML attribute, simples!

`gist:a3e8b41055146d16c30e5eb9f0be91ce#embracing-the-indieweb1.html`

You can see these links in action for reals in the footer of this page.

If you want to associate one of your user profiles but not actually display the link
on your page, you can do so by using the `<link>` element in the page head. I did this
for my Google+ profile in the head of this site because... well, Google+.

`gist:a3e8b41055146d16c30e5eb9f0be91ce#embracing-the-indieweb2.html`

My third and last step for now is to add some [Microformats](http://microformats.org/),
a simple method to convey semantic meaning via markup.

I remember looking at Microformats many years ago and thought they would become much
more prevalent than they actually have. However, implementation of Microformats seems
to have simplified in recent times so marking up a vCard is now as easy as adding some classes.

This is what I've added to my contact page to create a vCard:

`gist:a3e8b41055146d16c30e5eb9f0be91ce#embracing-the-indieweb3.html`

Personally, I'd prefer if the implementation involved a data attribute such as `data-vcard="tel"` or similar as I imagine that adding such generic classes as 'email' and 'tel' would cause styling conflicts on many sites but that's another note for another time.

So - that's it for now. A new site, some small steps to 'IndieWeb' it and a commitment to publish more here.

Stay tuned.
