---
//layout: docs
status: publish
published: true
title: Packaging Guide
permalink: /docs/package/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ""
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 469
wordpress_url: http://www.kde-os.tk/?page_id=469
date: "2013-08-14 16:37:37 -0400"
date_gmt: "2013-08-14 16:37:37 -0400"
categories: []
tags: []
comments: []
---

KaOS has limited repositories, for many users the options available will be plenty. When that is not the case, one of the reasons why Pacman was chosen for package manager comes into play. It offers about the easiest solution available to build your own packages (through makepkg). Plus there are tens of thousands readily available package scripts (PKGBUILD) through the many distributions that use pacman.

- This will become a table of contents (this text will be scraped).

Debian based distributions (for example), offer the option to add PPA's, but those are binary packages, so there is no control over what exactly is added, and on what dependencies they were build. A much cleaner and safer way to add your missing packages is build them locally.

This tutorial will cover how to get the needed package scripts from various GIT archives and community repositories many distributions use.

### Preparation

It is easiest to set up a build directory within `/home`. Throughout this tutorial we'll be using **GUI options** whenever possible, so for adding the directory, open Dolphin.

[![new_folder](/wp-content/uploads/2013/08/new_folder1-150x150.png){: width="150" height="150" .alignright .size-thumbnail}](/wp-content/uploads/2013/08/new_folder1.png)

Right click in your home directory and select **Create new** &rarr; **Folder**. For this example we'll call the folder `build`.

Next make sure all the needed packages for compiling are installed. Those needed are in a group called `base-devel`:

```sh
sudo pacman -Syu
sudo pacman -S base-devel
```

And select default to install the whole group.

### Getting package scripts

#### KaOS Community Packages

[KCP](https://github.com/KaOS-Community-Packages) is where KaOS users can share their created package scripts.

[![split_full](/wp-content/uploads/2013/08/snapshot5-150x150.png){: width="150" height="150" .alignright .size-thumbnail}](/wp-content/uploads/2013/08/snapshot5.png)

You can search by package name or by description, once you found your desired package, click on `Download ZIP`.

Going back to dolphin, and the newly created `build` directory, click on **split**, and navigate in the right, newly opened panel to the directory where your downloads go.

Click the just downloaded package zip, this will open the zip file in Ark. Select **Action** &rarr; **Extract** &rarr; **Extract to**, and select your download directory.

[![snapshot6](/wp-content/uploads/2013/08/snapshot6-150x150.png){: width="150" height="150" .alignright .size-thumbnail}](/wp-content/uploads/2013/08/snapshot6.png)

This will create a folder in the current directory, with the PKGBUILD and needed support files. Back in Dolphin, drag this folder to your "build" directory in the left pane.

#### Git Archives

Most distributions have public archives of all package build files in **git** (can be Gitlab or Github or any other variation). There you can access individual files, or download an entire repositories build files in one zip. For this example we'll use KaOS apps Github:

[https://github.com/kaosx/apps](https://github.com/kaosx/apps)

You can click on an individual package &rarr; click on a file or PKGBUILD &rarr; click on `Raw`, then copy/paste the file in kate. Create a folder in your `build` directory with that package name, and save the file in that folder. Repeat for all files from that package.

Or you can download the entire repository by clicking on the **Download zip** button. And repeat the steps for untarring and moving as explained in the [AUR](#aur) section.

Example links to git(hub):

[https://gitlab.archlinux.org/archlinux/packaging/packages](https://gitlab.archlinux.org/archlinux/packaging/packages)\
[https://gitlab.com/frugalware/frugalware-stable](https://gitlab.com/frugalware/frugalware-stable)\
[https://projects.parabolagnulinux.org/](https://projects.parabolagnulinux.org/)

#### AUR

These are user/community maintained repositories, the quality of the packages varies greatly so use **extra precaution when using these**, and always thoroughly check the PKGBUILD.

[https://aur.archlinux.org/](https://aur.archlinux.org/)

Search for your desired package, click on **Download snapshot**". In dolphin, have the split pane setup again, and in the right pane navigate to the directory where your downloads go.

[![untar](/wp-content/uploads/2013/08/untar-150x150.png){: width="150" height="150" .alignright .size-thumbnail}](/wp-content/uploads/2013/08/untar.png)

Right-click the just downloaded package tar, select **Extract** &rarr; **Extract Archive Here**. This will create a folder in the current directory, with the PKGBUILD and needed support files. Drag this folder to your `build` directory in the left pane.

### Building a package

With the sources in place, build tools added, it is time to start building a package. Now we have to leave GUI, and work in the console. Let's use Yakuake for this. Hit F12 to roll out Yakuake, and change directory (`cd`) to your build folder with the desired package. Let's again use kphotoalbum.

```sh
cd build/kphotoalbum
```

the call to start to build, and install the needed dependencies:

```sh
makepkg -s
```

or you can choose to build, and once the build is finished, install:

```sh
makepkg -si
```

Once the dependency checks have finished, this build will fail, since the PKGBUILD calls for Arch-Linux specific packages _libkdcraw5_ and _marble-common_.

[![error](/wp-content/uploads/2013/08/error-150x150.png){: width="150" height="150" .alignright .size-thumbnail}](/wp-content/uploads/2013/08/error.png)

Open the PKGBUILD file, and in the `depends=` line, edit libkdcraw5 and change to libkdcraw, edit marble-common and change to marble (both are what upstream uses) and run the `makepkg` command again.

If you know a newer version of a package is available, or prefer to use an older version, edit the `pkgver=` line, and change to your desired version. If you decide to get a different version, you'll need to get the correct md5sum (sha256sum) from the new tar.

[![sha256](/wp-content/uploads/2013/08/sha1-150x150.png){: width="150" height="150" .alignright .size-thumbnail}](/wp-content/uploads/2013/08/sha1.png)

Safest is to get this directly from the upstream source, but since it is not always easily available or published, you can use `makepkg` for this too:

```sh
makepkg -g
```

Edit the `md5sums=` or `sha1sum=` with the hash numbers generated by that call.

If a dependency of a package you are trying to build is not available in the KaOS repository, you'll need to build and install that dependency first.

Different distributions use different names for the same packages as you saw in the example of kile, so check the KdeOS repository if a needed dependency is available under a **different name**, and use that name in the `depend=` or `makedepends=` line. KaOS tries to follow **upstream naming as much as possible**, and keeps splitting of packages to a minimum, which ends up introducing many new names in other distributions.

#### Installing the newly build package

If you choose not to use `makepkg -i`, then install your just build package (which is created in the current directory) with:

```sh
sudo pacman -U package_name
```

### List of Common Renames

In this section you'll find regularly updated, known different package names, and what conversion name to use.

One big difference to note, not a name change, but file system structure. KaOS keeps more in line with most mainstream distributions (and most package development), to have regular files and binaries in /bin, /lib, /sbin, /usr/sbin. There is no use of thousands of symlinks to try and move all to /usr. So whenever you see a configuration mentioning `sbin=/usr/bin`, remove that line. Kernel is packaged in /lib, so for linux-kernel packaging, do not use /usr/lib with symlinks back to /lib.

KaOS uses versioned names for python, currently python3, make sure the package you are trying to build does not fall back to just python, since that might mean it needs python3.

KaOS uses unique names for Qt versions. Make sure the qmake call for Qt5 or Qt6 is specified, since it is packaged, so it does not conflict with any other Qt version. Replace `qmake` with `/usr/lib/qt5/bin/qmake` for any package that needs Qt5 to build.

Unique names for Qt versions also are in use for KDE Frameworks packages. Older, Qt5 based, are still with the normal, upstream, from Qt6 on, they all have `6`at the end, like `kcoreaddons6`

Python Qt binding packages are called `pyqt5-python3` or `pyqt6-python3`.
