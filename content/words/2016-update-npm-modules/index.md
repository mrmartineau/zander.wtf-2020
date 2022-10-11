---
slug: update-npm-modules
title: Updating npm packages
subtitle: Exploring the myriad of options to enable you to update with ease
date: 2016-05-21
modified: 2022-10-11
---

#### Update 11/10/2022

If you use [PNpM](https://pnpm.io/) they also have a command similar to Yarn:

```sh
pnpm up --interactive --latest
```

## taze

[taze](https://github.com/antfu/taze) is new tool to update dependencies. It is interesting because by default, it will only bump versions in the ranges you specified in package.json (which is safe and the default behavior of npm install).

```sh
# check all changes and bump to the latest stable changes including majors (breaking changes)
npx taze major -w

# or bump to latest minor changes within the same major version
npx taze minor -w
```

![](https://github.com/antfu/taze/raw/main/screenshots/default.png)

#### Update 15/05/2020

The content in this post may be out-of-date. If you use Yarn, there is a very useful, built-in command `upgrade-interactive` that makes it extremely easy to update.

```sh
yarn upgrade-interactive --latest
```

---

The [npm](http://npmjs.org) cli by itself already offers users a number of different ways to update local and global packages, and for the most part I will focus on working with local packages because that is where I often spend my time; updating and installing them.

## npm update

npm update does exactly as you'd expect, give it a package as the argument and it will update, like so:

```sh
npm update lodash
```

This however, will crucially not update your package.json file, so to do that, add the `--save` flag (or `--save-dev` etc), like so:

```sh
npm update lodash --save
```

This is useful if you know there are updates, but what would do to find out if there were any updates needed?

### Updating npm itself

You might not be aware that npm can update itself. Just run `npm update -g npm`.

## npm outdated

npm outdated will check the npm registry to see if any (or, specific) installed packages are currently outdated. Some example output might look like this:

```sh
$ npm outdated
Package              Current  Wanted  Latest  Location
babel-preset-es2015    6.6.0   6.9.0   6.9.0  kickoff
cssnano                3.5.2   3.6.2   3.6.2  kickoff
eslint                2.10.1  2.10.2  2.10.2  kickoff
imagemin-gifsicle      4.2.0   4.2.0   5.0.1  kickoff
imagemin-mozjpeg       5.1.0   5.1.0   6.0.0  kickoff
imagemin-optipng       4.3.0   4.3.0   5.1.0  kickoff
imagemin-pngquant      4.2.2   4.2.2   5.0.0  kickoff
imagemin-svgo          4.2.1   4.2.1   5.1.0  kickoff
opn                    4.0.1   4.0.2   4.0.2  kickoff
```

It is extremely useful at telling you what is out of date but the only way to update each of these packages is to run npm update on them individually or as a group, which isn't ideal; see below:

```sh
npm update babel-preset-es2015 cssnano eslint imagemin-gifsicle imagemin-mozjpeg imagemin-optipng imagemin-pngquant imagemin-svgo opn --save
```

You can see I used the `--save` flag, but what if some were in `devDependencies` or `optionalDependencies`? I would have to run the command a few times with different flags to ensure that my package.json was updated correctly.

## More tools to check and update your dependencies

As you can see, while the built-in commands are useful, there's gotta be a better way. There is/are and below I will show a few of them

### david

david is the cli for the popular [david-dm](https://david-dm.org/) service. It offers a very simple cli for checking and updating you dependencies?

- Install: `npm i -g david`
- Run: `david`
- Run and update package.json: `david update`
- More info: [libraries.io/npm/david](https://libraries.io/npm/david)

```sh
$ david
devDependencies

┌───────────────────┬─────────┬────────┐
│ Name              │ Package │ Latest │
├───────────────────┼─────────┼────────┤
│ imagemin-optipng  │ 4.3.0   │ 5.1.0  │
├───────────────────┼─────────┼────────┤
│ imagemin-pngquant │ 4.2.2   │ 5.0.0  │
├───────────────────┼─────────┼────────┤
│ imagemin-mozjpeg  │ 5.1.0   │ 6.0.0  │
├───────────────────┼─────────┼────────┤
│ imagemin-gifsicle │ 4.2.0   │ 5.0.1  │
├───────────────────┼─────────┼────────┤
│ imagemin-svgo     │ 4.2.1   │ 5.1.0  │
└───────────────────┴─────────┴────────┘

npm install --save-dev imagemin-optipng@5.1.0 imagemin-pngquant@5.0.0 imagemin-mozjpeg@6.0.0 imagemin-gifsicle@5.0.1 imagemin-svgo@5.1.0
```

---

### npm-check-updates

npm-check-updates is a command-line tool that allows you to upgrade your package.json or bower.json dependencies to the latest versions, regardless of existing version constraints.

npm-check-updates maintains your existing semantic versioning policies, i.e., it will upgrade your `"express": "^4.11.2"` dependency to `"express": "^5.0.0"` when express 5.0.0 is released.

- Install: `npm i -g npm-check-updates`
- Run: `ncu`
- Run and update package.json: `ncu -u`
- More info: [libraries.io/npm/npm-check-updates](https://libraries.io/npm/npm-check-updates)

```sh
$ ncu

 imagemin-gifsicle  4.2.0  →  5.0.1
 imagemin-mozjpeg   5.1.0  →  6.0.0
 imagemin-optipng   4.3.0  →  5.1.0
 imagemin-pngquant  4.2.2  →  5.0.0
 imagemin-svgo      4.2.1  →  5.1.0

The following dependencies are satisfied by their declared version range, but the installed versions are behind. You can install the latest versions without modifying your package file by using npm update. If you want to update the dependencies in your package file anyway, use -a/--upgradeAll.

 babel-preset-es2015  ^6.3.13  →   ^6.9.0
 cssnano               ^3.5.2  →   ^3.6.2
 eslint               ^2.10.0  →  ^2.10.2
 opn                   ^4.0.1  →   ^4.0.2

Run with -u to upgrade package.json
```

---

### npm-dview

npm-dview is a command line tool for comparing a package.json file's dependency version numbers with the latest remote version number. It compares both "dependencies" and/or "devDependencies".

- Install: `npm i -g npm-dview`
- Run: `npm-dview`
- Run and update package.json: `npm-dview --update`
- More info: [libraries.io/npm/npm-dview](https://libraries.io/npm/npm-dview)

```sh
$ npm-dview
Processing: /Users/mrmartineau/htdocs/trykickoff/kickoff/package.json
Processing: dependencies 3 of 3 [===] 100% 0.2s


Processing: devDependencies 22 of 22 [======================] 100% 0.9s



Regular Dependencies
┌───────────────────────────┬──────────────────┬────────┬────────┬──────────┐
│ Module Name               │ Requested        │ Local  │ Remote │ Current? │
├───────────────────────────┼──────────────────┼────────┼────────┼──────────┤
│ console                   │ ^0.5.2           │ 0.5.2  │ 0.5.2  │ ✓        │
├───────────────────────────┼──────────────────┼────────┼────────┼──────────┤
│ double-dollar             │ ^1.0.0           │ 1.0.0  │ 1.0.0  │ ✓        │
├───────────────────────────┼──────────────────┼────────┼────────┼──────────┤
│ lite-ready                │ ^1.0.4           │ 1.0.4  │ 1.0.4  │ ✓        │
└───────────────────────────┴──────────────────┴────────┴────────┴──────────┘

Dev Dependencies
┌───────────────────────────┬──────────────────┬────────┬────────┬──────────┐
│ Module Name               │ Requested        │ Local  │ Remote │ Current? │
├───────────────────────────┼──────────────────┼────────┼────────┼──────────┤
│ autoprefixer              │ ^6.3.6           │ 6.3.6  │ 6.3.6  │ ✓        │
├───────────────────────────┼──────────────────┼────────┼────────┼──────────┤
│ babel-plugin-transform-o… │ ^6.8.0           │ 6.8.0  │ 6.8.0  │ ✓        │
├───────────────────────────┼──────────────────┼────────┼────────┼──────────┤
│ babel-preset-es2015       │ ^6.3.13          │ 6.6.0  │ 6.9.0  │ ✖        │
├───────────────────────────┼──────────────────┼────────┼────────┼──────────┤
│ babelify                  │ ^7.3.0           │ 7.3.0  │ 7.3.0  │ ✓        │
├───────────────────────────┼──────────────────┼────────┼────────┼──────────┤
│ cssnano                   │ ^3.5.2           │ 3.5.2  │ 3.6.2  │ ✖        │
├───────────────────────────┼──────────────────┼────────┼────────┼──────────┤
│ grunt                     │ ^1.0.1           │ 1.0.1  │ 1.0.1  │ ✓        │
├───────────────────────────┼──────────────────┼────────┼────────┼──────────┤
│ grunt-browserify          │ ^5.0.0           │ 5.0.0  │ 5.0.0  │ ✓        │
├───────────────────────────┼──────────────────┼────────┼────────┼──────────┤
│ grunt-contrib-clean       │ ^1.0.0           │ 1.0.0  │ 1.0.0  │ ✓        │
├───────────────────────────┼──────────────────┼────────┼────────┼──────────┤
│ grunt-contrib-copy        │ ^1.0.0           │ 1.0.0  │ 1.0.0  │ ✓        │
├───────────────────────────┼──────────────────┼────────┼────────┼──────────┤
│ grunt-contrib-imagemin    │ ^1.0.0           │ 1.0.0  │ 1.0.0  │ ✓        │
├───────────────────────────┼──────────────────┼────────┼────────┼──────────┤
│ grunt-newer               │ ^1.2.0           │ 1.2.0  │ 1.2.0  │ ✓        │
├───────────────────────────┼──────────────────┼────────┼────────┼──────────┤
│ grunt-shimly              │ ^1.0.2           │ 1.0.2  │ 1.0.2  │ ✓        │
├───────────────────────────┼──────────────────┼────────┼────────┼──────────┤
│ imagemin-gifsicle         │ 4.2.0            │ 4.2.0  │ 5.0.1  │ ✖        │
├───────────────────────────┼──────────────────┼────────┼────────┼──────────┤
│ imagemin-mozjpeg          │ 5.1.0            │ 5.1.0  │ 6.0.0  │ ✖        │
├───────────────────────────┼──────────────────┼────────┼────────┼──────────┤
│ imagemin-optipng          │ 4.3.0            │ 4.3.0  │ 5.1.0  │ ✖        │
├───────────────────────────┼──────────────────┼────────┼────────┼──────────┤
│ imagemin-pngquant         │ 4.2.2            │ 4.2.2  │ 5.0.0  │ ✖        │
├───────────────────────────┼──────────────────┼────────┼────────┼──────────┤
│ imagemin-svgo             │ 4.2.1            │ 4.2.1  │ 5.1.0  │ ✖        │
├───────────────────────────┼──────────────────┼────────┼────────┼──────────┤
│ load-grunt-configs        │ ^1.0.0           │ 1.0.0  │ 1.0.0  │ ✓        │
├───────────────────────────┼──────────────────┼────────┼────────┼──────────┤
│ load-grunt-tasks          │ ^3.5.0           │ 3.5.0  │ 3.5.0  │ ✓        │
├───────────────────────────┼──────────────────┼────────┼────────┼──────────┤
│ minifyify                 │ ^7.3.3           │ 7.3.3  │ 7.3.3  │ ✓        │
├───────────────────────────┼──────────────────┼────────┼────────┼──────────┤
│ postscss                  │ ^1.4.1           │ 1.4.1  │ 1.4.1  │ ✓        │
├───────────────────────────┼──────────────────┼────────┼────────┼──────────┤
│ time-grunt                │ ^1.3.0           │ 1.3.0  │ 1.3.0  │ ✓        │
└───────────────────────────┴──────────────────┴────────┴────────┴──────────┘

Peer Dependencies
┌────────────────────────────────────────────────┐
│ Warning                                        │
├────────────────────────────────────────────────┤
│ No dependencies found in the package.json file │
└────────────────────────────────────────────────┘
```

---

### npm-check

npm-check is very similar to the others in this category, with one exception: it has an interactive interface that allows you to choose which packages you want updated. This is extremely useful if you don't want to update some packages for example. It can also be used on global packages too/

- Install: `npm i -g npm-check`
- Run: `npm-check`
- Run and update package.json: `npm-check -u` This presents an interactive package update chooser. Use `npm-check -g -u`
- More info: [libraries.io/npm/npm-check](https://libraries.io/npm/npm-check)

```sh
$ npm-check -u
? Choose which packages to update.

 Minor Update New backwards-compatible features.
 ◯ babel-preset-es2015 devDep  6.6.0  ❯  6.9.0  https://babeljs.io/
 ◯ cssnano devDep              3.5.2  ❯  3.6.2  https://github.com/ben-eb/cssnano

 Major Update Potentially breaking API changes. Use caution.
 ◯ imagemin-gifsicle devDep  4.2.0  ❯  5.0.1  https://github.com/imagemin/imagemin-gifsicle#readme
 ◯ imagemin-mozjpeg devDep   5.1.0  ❯  6.0.0  https://github.com/imagemin/imagemin-mozjpeg#readme
 ◯ imagemin-optipng devDep   4.3.0  ❯  5.1.0  https://github.com/imagemin/imagemin-optipng#readme
 ◯ imagemin-pngquant devDep  4.2.2  ❯  5.0.0  https://github.com/imagemin/imagemin-pngquant#readme
 ◯ imagemin-svgo devDep      4.2.1  ❯  5.1.0  https://github.com/imagemin/imagemin-svgo#readme

 Space to select. Enter to start upgrading. Control-C to cancel.
```

---

## Is there another way?

Yes there is. Using services like [Greenkeeper.io](https://greenkeeper.io/), Dependabot or Renovate which tracks your dependencies and applies an update to a branch for every new version coming in. Your test suite runs behind the scenes, and only if a dependency update breaks your software, we let you know in a Pull Request, including all the information you need to make an informed decision.

---

If you work on an open-source Github repo, [Greenkeeper.io](https://greenkeeper.io/) is a brilliant choice. It is free for public repos and 1 private repo, and very affordable if you have more private repos. We use it on [Kickoff](http://github.com/TryKickoff/kickoff) and it is brilliant.

For all other use cases, I recommend [npm-check](https://libraries.io/npm/npm-check). The interactive tool is so useful, it not only shows you which packages need updating but provides more information about the package too.

If I have missed any others, please let me know [on Twitter](http://twitter.com/MrMartineau).

It is also worth noting that you might not want to update your dependencies. This is a much more tricky subject that is best left for another post, but if you're interested right now, I recommend reading Nicolás Bevacqua's [post on the subject](https://ponyfoo.com/articles/immutable-npm-dependencies)
