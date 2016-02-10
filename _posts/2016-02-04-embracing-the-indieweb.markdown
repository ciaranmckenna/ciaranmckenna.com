---
layout: post
title:  "Embracing the IndieWeb"
date:   2016-02-10 07:59:19 +0000
author: Barry McGee
categories: development
---

I spent last weekend building and deploying this website - who says a cobbler can't have shiny new shoes?

![Mssy trees](http://cdn.brymge.net/img/night-lights.jpg)

I recently attended January's [Front End London](http://www.frontendlondon.co.uk) meetup and listened to <a href="https://calumryan.com">Calum Ryan</a> gave a great presentation about the [IndieWeb movement](https://indiewebcamp.com/).

What is the IndieWeb? According to their site they are;

> The IndieWeb is a people-focused alternative to the "corporate web".

Basically they are a group advocating the people take back ownership of their own content and self host.

This movement was not something I had been aware of previously but elucidated very nicely what I had already been pondering for a while - mainly that the walled gardens of Silicon Valley like Facebook et al were becomign all consuming.

More recent initiatives such as Facebook Instant and Apple News are attempts to sidestep the web entirely, to encourage users down their funnel to the internet, and their funnel alone.

The first step on my IndieWeb journey is to reclaim my web domain. I had previously using Flavors.me for convenience but aside from that platform have patchy uptime (and seems to have been mothballed by Moo), it didn't serve my needs fully anyway as I need to have an online CV on this domain.

The second step I've taken is to associate this domain with my other profiles sitting on the "Silicon Valley Silos". This can be done with the rel="me" HTML attribute, simples!

{% highlight html %}
  <a rel="me" href="https://www.linkedin.com/in/barrymcgee">LinkedIn</a>
  <a rel="me" href="https://github.com/barrymcgee">Github</a>
  <a rel="me" href="https://twitter.com/barrymcgee">Twitter</a>
{% endhighlight %}

You can see these links in action for reals in the footer of this page.

If you want to associate one of your user profiles but not actually display the link
on your page, you can do so by using the <link> element in the page head. I did this
for my Google+ profile in the head of this site because... well, Google+.

{% highlight html %}
  <link rel="me" href="https://plus.google.com/u/0/111779287499137528056/about">
{% endhighlight %}

My third and last step for now is to add a
