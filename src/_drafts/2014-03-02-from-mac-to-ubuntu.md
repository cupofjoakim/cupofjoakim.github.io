---
layout: post
date: 2014-03-02
title: From Mac to Ubuntu - Evaluation
categories: articles
type: article
excerpt: "Linux is everywhere. It's on our servers, in our virtual machines and on our game consoles. I set out into a journey to see if I could replace OS X with a new version of Ubuntu and still work as a front-end developer effectively. Spoiler: It's almost possible."
---

When I grew up I often entertained myself through going on various nerdy endeavours. I read fantasy novels, played Dungeons and Dragons and even melted my moms' motherboard after overclocking the integrated graphics card too much. Sorry mom. I also tried out Linux a couple of times. Every time I did I would get really excited while the chosen distro was downloading – only to be upset when I failed to install the proper drivers or fucked something else up. 

Fast forward to 2015. I've now been working as a front-end developer for a couple of years. Linux distros seem to have matured quite a bit. Some governmental institutions are actually [replacing Windows desktops with Ubuntu](http://www.linuxinsider.com/rsstory/74715.html)! Almost all the tools I use are built in ruby and node, both of which are available in linux. Could I replace my OS X life with Ubuntu? Experimention time!

## Installing the OS
For the sake of the safety (and my job) I used my stationary desktop computer for the experiment. It's two years Old, but is running a haswell processor and a Nvidia GeForce GTX 760 with a couple of SSD's and modern gigabit motherboard with support for wifi.

The installation went very smoothly and I got up and running without any real problems, except for the video drivers. Ubuntu installed some basic driver which worked perfectly, but I couldn't really get all that performance from my card. I figured I should try to get the official Nvidia drivers up and running, but that was like opening the gates to hell. The computer wouldn't boot past the GRUB OS selection screen for ubuntu and I was greeted with a black screen. I tried resetting and retrying the installation a few times with a couple of recommended older versions of the drivers but it all ended the same way. I finally gave up – I don't really need the extra performance either way.

## Setting up for development
Since the nature of my projects varies a lot there's a lot of stuff I can't really work without. 

* Git
* Node
* Ruby
* Sublime Text
* PHP
* Virtual Box
* Vagrant

I had no real issues setting up these tools, as they're all available via package managers. **However, my workflow usually integrates photoshop or sketch as well. I still haven't found a good solution that problem.** 


## Extra: Non-work use

### Making it feel good
My biggest issue with ubuntu was their invasive amazon ads in the search-launcher, dubbed the "Shopping lens" by the ubuntu team. 

Other than that, the customization I did was kind of minimal. I installed a custom icon theme (numix dark), corrected the launchbar colour to a dark grey-blue colour, made the launchbar a bit smaller and added a more tasteful wallpaper to match it up.

The fact that ubuntu has support for multiple workspaces is a godsend for me, since it's one of the OS X featuresI use the most. Setting up proper keybindings was easy and quite frankly not a problem at all.

### Multimedia
Thank god for HTML5 Video. Flash seems to be a natural enemy in linux environments. It kind of works, but I found that performance-wise it left a lot to wish for. Streaming from twitch.tv seemed too much to ask for, but I know that they're planning a HTML version of the player in the near future.

### Gaming
Well, the library of Linux friendly steam titles are definitely growing. The issue of the video drivers were my only issue, but due to the low performance needed for the types of games I usually play, it didn't bother me too much, except that I couldn't run games in the optimum resolution for my 27" screen (2560x1440).

## Verdict
For web development I have to say that I think ubuntu is a very good alternative to OS X and windows. I do enjoy working with ubuntu moreso than windows, but due to the fact that the Adobe Creative Cloud seems next to impossible to get working correctly there's no way I'd recommend it for frontend developers that have to implement design from time to time. If I did less frontend work and more backend, there's a big chance that I'd stay on ubuntu just due to how quick it feels. More focused, maybe.

The reason I've heard many developers have for choosing OS X over windows almost always apply for ubuntu as well. More than anything, I'm simply questioning how anyone would want to develop on a windows machine if they're working with non-microsoft technologies. 

10/10 - Would recommend for work anyday.