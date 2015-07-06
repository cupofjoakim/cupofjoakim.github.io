---
layout: post
date: 2015-07-02
title: Building Alchemist App
categories: articles
type: article
excerpt: "In November 2014 me and a colleague set out to build our first iOS app – and learn Swift as we went along. This article serves as a summary of what two js-loving front-enders learned while moving into native territory."
---

In November 2014 we were experiencing a low activity period for the tech team over at The World Loves. Together with my colleague (and former classmate) [Jonatan Pettersson][jonjon] I set out to learn something new. We decided to make an iOS app in Swift, mostly since neither of us had done one before and Swift was growing as a language.

##Introducing Alchemist
Our idea was simple – we should start out as we started out with javascript. Making a product that simply wrapped open API's and presented it's information in a collected way. An aggregator, of sorts.

I had recently started using an awesome service called [TasteKid][tastekid] that recommends media to a users liking. You post a title and get recommendations back. They just happened to have an open API so we decided to simply work around that.

##Constrained by constraints
Confession time: I've never developed a GUI that didn't rely on CSS and HTML before making this app, and I've still never tried flexbox in CSS. Constraints was a totally new concept for me.

I think I did get a hang for it pretty quickly though, mostly thanks to [this article over at appcoda.com][appcoda-article] and the video tutorials over at [Team Treehouse]. I'm still not convinced it's the best way of specifying UI layouts, but then again – CSS is even more shit than this. I did miss the styling parts from CSS though. 

##JSON is a bitch
Well, turns out we web developers are spoiled brats.

Navigating JSON is such a breeze in javascript that I've never given it any thought on how weird it can be in other languages. We spent the better part of a day together just trying to figure it out, and we ended up using the [SwiftJSON library][swiftyjson] because it made it so much easier. Our app was so reliant on JSON sources (themoviedb, goodreads, youtube, tastekid, etc.) that this was a major life saver. 

##Summary
We learned a lot and gained some valuable understanding on how different things are over in app-land. While iOS dev's have stuff like CocoaPods, the tooling isn't like the web development scene at all. It might be because everything is so controlled by Apple and that xCode in itself functions like a framework. While [React Native][reactnative] might change the environment somewhat it's still going to be a bit lack-luster. I like to be able to choose what way I want to develop a product, but in iOS there's mostly just one way.

That being said, Swift isn't really harder than regular web front end technologies if you're doing it at a basic level. Apple are literally giving you almost all the tools you need. I'll try to make another app once I've got enough free time to try out React Native.

The app is available for download over at the [app store][app] if you want to try it out.


[jonjon]: http://karlerikjonatan.github.io/
[tastekid]: https://tastekid.com
[appcoda-article]: http://www.appcoda.com/introduction-auto-layout/
[treehouse]: https://teamtreehouse.com/
[swiftyjson]: https://github.com/SwiftyJSON/SwiftyJSON
[reactnative]: https://facebook.github.io/react-native/
[app]: https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=942473452&mt=8