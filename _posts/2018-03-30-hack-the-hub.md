---
layout: post
title: Hack The Hub 2018
date: 2018-03-30T11:17:00.062Z
author: Barry McGee
categories: development
excerpt: I spent last weekend at [Hack the Hub](https://www.hackthehub2018.com/), a Machine Learning (ML) Hackathon in Belfast.
image: https://www.barrymcgee.co.uk/images/uploads/hackthehub-hero.jpg
---
I spent last weekend at [Hack the Hub](https://www.hackthehub2018.com/), a Machine Learning (ML) Hackathon in Belfast.

![Computer user overwhelmed by email](/images/uploads/hackthehub-hero.jpg)

It was held in the cavernous S13 space, a former B&Q warehouse on the Boucher Road. While this meant we had acres of spaces to roam freely, the challenge of heating a room the size of an aircraft hangar meant the few small gas heaters provided struggled to make their presence felt.

![All hail the heater](/images/uploads/heater.jpg)

However, we're not unfamiliar with the cold in Belfast and stoically soldiered on.

I had little previous experience of ML aside from knowing my [Nest thermostats](https://nest.com/uk/thermostats/nest-learning-thermostat/overview/) take advantage of it to toggle my radiators on and off so I was interested to dig in and see what ML involved.

I didn't know anyone else attending so I was assigned a random group to work with. As usual with such events, several were no-shows so we quickly improvised to assemble a new team. We were to be #team9 - myself, Peter, [Stephen](https://twitter.com/McGuns7) and Mal.

The day started with the organisers and sponsors outlined some pre-defined challenges. Teams were also free to chart their own path along the theme of machine learning if they so wished.

![All hail the heater](/images/uploads/s13.jpg)

We decided to tackle a challenge set by one of the sponsors, [Bazaarvoice](https://www.bazaarvoice.com/uk/) - ratings and review SaaS provider with a recent outpost based in Belfast. The [challenge](https://docs.google.com/presentation/d/1in6jmyABLETLHJdwsWSpQ1WA0o5F_Cvxtydpzp6D0xw/edit#slide=id.p26) was to use machine learning to help with the moderation of images. We were provided with a sample dataset of roughly 1000 images already rated 1-5 stars.

Integral to the challenge was using this sample data set to inform our solution which should then be able to automatically assign a star rating to a new image based on the learnings from the data set.

The solution should also provide meta information about the image such as a description of the image, information on a person in the photo if present etc.

Some links to Java and Python based ML frameworks were provided but given my experience, I looked to Javascript to see what I could do. After some research, I found the [Computer Vision API](https://azure.microsoft.com/en-gb/services/cognitive-services/computer-vision/) from Microsoft Azure.

This service uses ML to read images and returns metadata with confidence rating assigned - I then used this to build a prototype (utilising [Vanilla Framework](https://vanillaframework.io/) 💪🏻 for front-end styling) and verified that we could use this to return a lot of the relevant information required by the challenge.

At this stage, we then sketched out how we might architect an app to utilise this API by running our dataset against it and pulling out key data points and pairing it with our known star rating to train our own neural network.

Off my back-of-an-envelope scrawl, Stephen made a presentable system overview:

![All hail the heater](/images/uploads/flow-chart.png)

Looking again to Javascript, I found [Brain.js](https://github.com/BrainJS) - a library of Neural Networks written in JavaScript. This looked promising. A little digging later, I found this fantastic tutorial on how to train your own neural network to [detect if a tweet is by Donald Trump or Kim Kardashian](https://itnext.io/you-can-build-a-neural-network-in-javascript-even-if-you-dont-really-understand-neural-networks-e63e12713a3).

What I loved about this is the simple format required to train your own neural network.

The example used is to train a network about contrast so it could predict whether or not light or dark text should be used on a given background.

```
let net = new brain.NeuralNetwork();
net.train([
{
Input: { r: 0.03, g: 0.7, b: 0.5 },
Output: { black: 1 }
},{
Input: { r: 0.16, g: 0.09, b: 0.2 },
Output: { black: 1 }
},{
Input: { r: 0.5, b: 0.5 },
Output: { black: 1 }
}
]);
let output = net.run({ r: 1, g: 0.4, b: 0 });
```

Each data point must be between zero and one. Looking at the above, I realised that if we could transpile our dataset into a collection of data points between zero and one, we could pass a representation of each image to our own neural network with the predefined star rating, training it with the ability to assign an informed star rating on new images.

We did not know the criteria with the original dataset was rated but hypothesised that a person rates an image subconsciously on image sharpness, brightness, contrast, quality of the image based on noise.

This information could be gleaned from each image using an API such as Site Engine. Using the metadata pulled from the Computer Vision API, we could then augment each array of data points to make the representation richer.

These data points could all be passed to our trained neural network like so:

```
// [{input: [confidence, sharpness, brightness, contrast, noise, hasFace, isCeleb, etc], output: [RATING]},
{
Input: { c: 0.12, s: 0.01, b: 0.1, c: 0.1, n: 0.876, hasFace: 0, isCeleb: 0 },
Output: { rating: 1 }
}
```

...which would then in theory return our star rating. Done job, order all the beers, right?

Err.. not so fast - we had a problem. I had a clear view of where we were and where we wanted to go but had no idea of how to get there.
Our dataset of 1000 images was provided as jpegs in folders names, "1star", "2star" etc. We need a way to normalise these images into the format required by `Brain.js` as outlined above.

This also needed to be done programmatically as it would days manually to generate a sample size big enough to adequately train our neural network.

By now, it was the end of day one and I only had a couple of hours of coding left on Sunday morning before having to present our work to the judges. I didn't have the expertise to quickly write a script to do this and neither did my team members.

In hindsight, I should have reached out to the wider hackathon via the Slack group to see if anyone would be willing to lend a hand but looking around, everyone seemed very busy with their own projects.

> This is probably my biggest takeaway for future hackathons - reach out for help beyond your own team, even from other teams.

So, mindful of time, I scaled back our scope and used the confidence rating of the Computer Vision API alone to generate a star rating. The confidence percentage returned with each image could be divided by twenty and rounded up/down to provide a rudimentary rating.

With the pipeline in place - there's hopefully was a clear direction of travel demonstrated and a vision of how all the parts could join up to make a viable proposition.

Another stetch goal, as outlined in out system overview above, would have been to implemented data points from emotions and brand APIs using ML to pick emotions of people pictures of specific brand names.

Many congratulations to #deepducks [who took the top prize](https://medium.com/hackthehub/deep-ducks-hackthehub-2018-winners-699cd67dfb6c) with their ML app to moderate text reviews.

It was a super fun weekend - thank you to all the organised and sponsors who put on a great event, provided food, coffee and beer while not a single dime was asked of the participants. 👏🏻

You can have a play yourself with our final app. Paste any in image URL and watch the wonder of ML describe your image back to you! 💥

[https://hackthehub-cec6b.firebaseapp.com/](https://hackthehub-cec6b.firebaseapp.com/)

Also, if you're so inclined: [View the (hacky) source code](https://github.com/barrymcgee/hackthehub)
