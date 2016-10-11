---
layout: post
date: 2016-02-20
title: shhbostad.se
categories: cases
type: case
animation: /assets/images/post-images/shh-bg.mp4
excerpt: I helped Sebton/Co build shhbostad.se and brought wordpress development to modern times!
---

This autumn I spent some time with the newly founded agency [Sebton/Co][sebton]. They're great little family run company ...

## The task
The main project I was brought in to develop was a new website for Svenska Hyreshus, a swedish property group. The website that was planned needed to solve a number of issues, such as:

* Being easy for their managers to update themselves
* Being flexible in terms of layout
* Incorporating their new system for building projects *(This was a big one!)*
* Being able to run on a hosting solution that only supports PHP

## Choosing a platform
After a lot of research about the limitations around this new system of theirs, it was decided that the site would run on wordpress to keep development time down. Wordpress in itself encourages this "Plug & Play" mentality with a lot of random plugins. I've seen a couple of sites being very hard to debug due to plugins being incompatible and I'm not willing to go down that route.

This led the highest priority of the initial development to be stability. I set out to list exactly what kind of plugins would be needed, and then to test them out to see if everything worked as planned.

In the end I decided to go with [Advanced Custom Fields Pro][acf] for their flexible layouts and repeater fields, [Yoast SEO][yoast] for easy SEO management and [WP Mail SMTP][smtp] to allow wordpress to send mail via smtp. Othe plugins were discarded as they wheren't needed.

## Bringing Wordpress to 2015
Wordpress, as I said, feels kind of outdated to me. It's been around since forever and I don't feel that the majority of the wordpress community embraces modern development tools. I wanted to make sure to do wordpress justice by trying out a better workflow.

This led me to try out [Yeopress][yeo], an unofficial yeoman generator for wordpress. It even has support for vagrant, which is awesome. I did however make some changes after trying it out, such as adding support for a staging environment.

## Building the theme
For the theme, I went with the yeopress template theme as a base and built upon that. Grunt was used as the taskrunner, bower as the package manager and we used scss for styling.

The theme needed to be very flexible in terms of layout, so we built it to rely heavily on [Advanced Custom Fields][acf]. Their repeater- and flexible content-fields are a godsend - I really don't think theres any other option. With a developer key it's also very cheap.

When I recieved the first drafts on the design I started to break everything up in rows, like small lego pieces. From the wordpress admin one could easily go in, add a block (let's say a Hero Module for example) and simply position it amongst the other blocks in whatever order they themselves fancied.

I fucking love [Advanced Custom Fields][acf].

## Adding support for Vitec
One of the clients big demands was to have support for their new system for building projects, Vitec.

Vitec is a great platform for what Svenska Hyreshus are doing. It's something for both brokers, project managers and so on, but when you update a project the changes also push to the biggest housing sites in sweden, such as Hemnet or Blocket Bostad.

To bring this funcitonality to the new project I developed a custom plugin that fetched the information from Vitec's SOAP API, stored them in our database and programmatically added pages for the current projects. Since we couldn't use the 'push' features that hemnet or blocket had to update the information instantly as it was updated in the system, I set up a CRON-job to fetch new information from Vitec every 10 minutes.

## Final words
In the end I'm very happy with how the site turned out. What we've got now is a very easily maintained little website that works well. From what I've heard from the clients they're happy as well.

[Check out the website at shhbostad.se][shhbostad]

[yeo]: https://github.com/wesleytodd/YeoPress
[sebton]: http://sebton.se/
[acf]: http://www.advancedcustomfields.com/pro/
[yoast]: https://yoast.com/wordpress/plugins/seo/
[smtp]: https://wordpress.org/plugins/wp-mail-smtp/
[shhbostad]: http://shhbostad.se
