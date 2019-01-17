---
title: React Finland 2018
slug: react-finland
date: '2018-05-03'
opener: >-
  I spent an enjoyable couple of days last week attending the inaugural React
  Finland conference in Helsinki.
featured: ../images/helsinki-1.jpg
---

I was attracted to the conference by the single track format and the diverse range of talks scheduled, from the technical aspects of building an application with server-side rendering using [Next.js](https://github.com/zeit/next.js/) to the more philosophical "How React Changed Everything".

Dual track conferences tend to frustrate me as I always worry I'm missing a better speaker in another room.

The venue was the rather grand [Valkoinen Sali](http://www.valkoinensali.com/) in the centre of Helsinki. I arrived early on the first day with a promise that a traditional Finnish breakfast would be on offer and I wasn't disappointed - freshly made smoothies, smoked salmon on rye and lashings of good coffee made for a great start to the first day.

![Credit: Gant Laborde - @GantLaborde](../images/helsinki-smoothie.png)

Speaking of the food, the Finns have their lunch at 11.30am which takes a little getting used to and can make the afternoons seem to stretch forever. I previously worked with a remote team based in Oslo and they all disappeared for lunch mid-morning too. 🤷🏻‍♂️

![Credit: Sara Vieira - @NikkitaFTW](../images/helsinki-jani.png)

Jani Eväkallio delivered the keynote to kick off day one on the topic of "The New Best Practices". Starting with a brief overview of how React came to be the dominant force in the Javascript world it is today, Jani continued with a reminder that once upon a time, many developers were disgusted at the idea of JSX. Mixing Javascript with HTML was sacrilege, right? Five years later, JSX now has a certain beauty to the trained eye and hell; we're now even putting CSS in our JS. Point being, standards and best practice are fluid and always evolving. Be open to new ideas and techniques.

The rest of the day followed with talks focussing on managing state, differing styling techniques and showcasing new tools. Highlights for me included;

- [Immer](https://github.com/mweststrate/immer) - a tiny package showcased by Michel Weststrate that allows you to work with immutable data structures.
- An introduction to the recently introduced [Context](https://reactjs.org/docs/context.html) API by Patrick Hund, which should help me avoid excessive props drilling in projects without an explicit state management system.
- Server-side rendering with [Next.js](https://github.com/zeit/next.js/) which was demonstrated by Sia Karamalegos - I'm an old-school web standardista and still feel a little uneasy leaving all page rendering to JS as I've concerns about accessibility, SEO and speed. Next.js looks like it could alleviate many of those concerns.
- Sara Vieira gave a tour de force talk on [Apollo](https://github.com/apollographql/react-apollo) and [GraphQL](https://graphql.org). Being honest, she lost me halfway through as the code examples kept coming thick and fast. However, her enthusiasm was infectious, and it was clear these tools are very powerful once you mastered them.
- I'm a massive fan of linting; I think having the correct linting set up is the next best thing to pair-programming as your editor keeps a constant eye on your code for silly mistakes. Andrey Okonetchnikov takes a similar view and has created an excellent little tool, [lint-staged](https://github.com/okonet/lint-staged) which will lint only the files you have git staged and also prevent you from committing those files until the linting issues have resolved. No longer will your git log be peppered with "Fix linting" messages.

On the second day, I made the mistake of having the hotel breakfast only to have immediate food regret as I arrived at the venue and viewed the spread on offer. 🤦🏻‍♂️

![Credit: Gant Laborde - @GantLaborde](../images/helsinki-brek.png)

Getting over that, Ken Wheeler kicked off day two with an irreverent and energetic talk on "How React Changed Everything". Ken took us back to a time when Flash sites ruled the web, how Steve Jobs put an end to that and how we got from there to where we are today. It's Ken's view that "React is the perfect abstraction" and it's here to stay for many years yet. However, the next chapter in the React story will focus on making it "faster, smaller and simpler."

![Credit: Jörge Ojanen - @mieshukka](../images/helsinki-ken.jpg)

Ken also touched on a theme which ran through many of the talks in one way or another which is that we should address the lack of strict type in JS by using Flow, Typescript or some other variation. Ken finished by introducing Reason, a new strictly typed syntax for the OCaml language that is meant to be welcoming to JavaScript developers. Reason has been created by the same person that originally created React, Jordan Walke, so is therefore one to watch.

Other highlights of day two for me included;

- Nik Graf gave an introduction to [Reason](https://github.com/reasonml/reason-react), with code examples explaining the unique concepts such as variants.
- David Khourshid demonstrated how [state charts](https://slides.com/davidkhourshid/statecharts-workshop#/) could simplify even the most complex of applications.
- Shay Keinan shows us how to make [VR apps using React](https://500tech.com/blog/all/introduction-to-react-vr-part-1/s), which it turns out shares many parallels with React Native.
- There were insights into how both the [conference site](https://react-finland.fi/) and accompanying app were designed and built.
- Gant Laborde provided an overview of the treasure trove of [tools and boilerplates](https://infinite.red/ignite) created by his company to springboard development of React Native apps.

After we wrapped up, we were bussed out to a local Aquarium for the official afterparty. It was an interesting choice of venue, but I can't say I was particularly keen on it as it all underground without any natural light - after two days in a curtained theatre, I was ready to see more sky so left early and enjoyed a walk back into Helsinki. The afterparty did include specially brewed conference beer, very cool. 🙌🏻

![Conference IPA](../images/helsinki-3.jpg)

All attendees were also given a free ticket to the near by Allas Sea Pools, which I was able to squeeze in before my flight home.

![Allas Sea Pools](../images/helsinki-2.jpg)

All in all, a thoroughly enjoyable conference. Thank you to my employer [Canonical](https://www.canonical.com/) who kindly funded my trip.
