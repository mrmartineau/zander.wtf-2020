---
slug: how-to-painlessly-move-kickoffs-assets-directory
title: 'How to painlessly move Kickoff’s assets directory'
subtitle: '#tipsForKickoff'
date: 2016-01-09
---

Kickoff's assets directory resides in the root of the repo, it contains the framework's source and compiled files. What if you needed the assets directory, not to be served from there but from another location? For example, a Wordpress theme would ideally serve assets from within the `wp-content/themes/` directory. Wouldn’t trying such a thing be a massive pain in the arse? Normally I’d agree, but in Kickoff’s case its simple because we have a global config that allows developer to changes these kinds of things with extreme ease.

## Here’s what you do

Apart from manually moving the directory, you need to edit 3 lines of Kickoff’s global Grunt config, in [`_grunt-configs/config.js`](https://github.com/TryKickoff/kickoff/blob/master/_grunt-configs/config.js#L9-L11) to be exact. **Change the values on lines 9–11 to point to the new location**, for example:

```
srcDir  : ‘wp-content/themes/your-theme/assets/src’,
distDir : ‘wp-content/themes/your-theme/assets/dist’,
tempDir : ‘wp-content/themes/your-theme/assets/temp’,
```

## And that’s it. But there’s more…

As a bonus, you could separate the locations for `assets/src` and `assets/dist` as there’s no reason why they need to be together.

### #tipsForKickoff

To find more tips like this for Kickoff, lookout for the [#tipsForKickoff](https://twitter.com/hashtag/tipsForKickoff?f=tweets) hashtag
