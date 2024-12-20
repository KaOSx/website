---
//layout: news
title: KaOS 2021.03
description: It is a great pleasure to present to you the September release of a new stable ISO.
permalink: /news/2021/kaos03/
pubDate: '2021-03-24 01:23:31 -0500'
date_gmt: '2021-03-24 01:23:31 -0500'
heroImage: "/blog-placeholder-2.jpg"
---

{% include image.html
            img="img/2021/cala_welcomeq.png"
            title="Calamares in QML"
            caption="Calamares in QML"
            url="/img/2021/cala_welcomeq.png" %}
            
KaOS is very proud to announce the availability of the March release of a new stable ISO.

With almost 60 % percent of the packages updated since the last ISO and the last release being over two months old, a new ISO is more than due. News for [Plasma 5.21](https://kde.org/announcements/plasma/5/5.21.0/) include a new application launcher featuring two panes to make it simple to locate your programs and comes with improved keyboard, mouse, and touch input, boosting accessibility across the board, Plasma System Monitor, a new app for monitoring system resources and the sound applet now displays the live microphone volume. 

{% include image.html
            img="img/2021/kickoff.webp"
            title="Plasma 5.21 Kickoff Launcher"
            caption="Plasma 5.21 Kickoff Launcher"
            url="/img/2021/kickoff.webp" %}
            
The tool to manage, search, and install **KaOS Community Packages, kcp** has been completely rewritten (still in Go) in order to support the main new feature: the configuration. 
Now, you can adapt kcp/pckcp to your needs in editing the configuration files (located in `$HOME/.config/kcp/` directory). Notable options : 
* You can use another temporary directory (for installations through kcp) than /tmp 
* kcp can use a third organization for package management. The only constraint is the organization should be on Github 
* For install or download operations, the clone method can use either ssh or https 
* You can define a locale different from the system 
* You can use a custom PKGBUILD prototype to use for PKGBUILD generation through pcpkcp 
* You can add packages to ignore for depends when you check a PKGBUILD with pckcp 
{% include image.html
            img="img/2021/kcp.png"
            title="Rewritten kcp"
            caption="Rewritten kcp"
            url="/img/2021/kcp.png" %}
Other notable changes: 
* Improved performances on updating the database (which needed to completely refactor the database). The operation should be significantly faster. 
* Improved performances for the PKGBUILD parser. The scanner is more accurate and faster. Plus it is designed as an API in order to be usable for a third app. 
* Some PKGBUILD checkers were added/modified/merged. 
* Added is a man for pckcp. The man for kcp was updated 

The installer Calamares has picked up the transition to QML again. All navigation is now done in QML for KaOS. The **Finished module** was also ported to QML, this gives a simpler end page, with clear buttons showing two options. It also opened the way to give users a clear message regarding installation logs once the install is completed. Usersq is another module being ported to QML, a preview is included in this release, but is not the default users module yet. 

The default mirror used for all KaOS installs is provided by [Fosshost](https://fosshost.org/). Big change with Fosshost is that with just one mirror users will have access to a worldwide network of mirrors through [Fastly CDN](https://fosshost.org/news/fosshost-mirror-service-changes){:target="_blank"}. No longer is there a need to adjust a mirrorlist, you will always be connected to the fastest mirror in your area.

As always with this rolling distribution, you will find the very latest packages for the Plasma Desktop, this includes Frameworks 5.80.0, Plasma 5.21.3, and KDE Applications 20.12.3.  All built on **Qt 5.15.2**.

{% include image.html
            img="img/2021/vscodium.png"
            title="VSCodium"
            caption="VSCodium"
            url="/img/2021/vscodium.png" %}
This ISO means the end of the non-free Nvidia 340xx support in KaOS. This driver needed to be heavily patched since Linux 5.6, but now with Linux 5.11, loading the module completely fails SDDM. Since upstream pretty much abandoned this driver, it is time to remove from KaOS. Users with Nvidia cards prior to 2014 will need to switch over to the in-kernel modesetting driver or install nouveau. 

New applications added include VSCodium. 

Updates to the base of this distribution were numerous and include Python3 3.8.8, **Systemd 247.5**, Proj 8.0.0, Git 2.31.0, LLVM/Clang 11.1.0, Protobuf 3.15, Hdf5 1.12.0, Poppler 21.03.0, Mesa 20.3.4, NetworkManager 1.30.2, ZSTD 1.4.9, Krb5 1.19.1. 

{% include image.html
            img="img/2021/cala_finishedq.png"
            title="Installer final page in QML"
            caption="Installer final page in QML"
            url="/img/2021/cala_finishedq.png" %}

## Common Notes
The Linux kernel has all the needed ucode build-in for a fully automated Early Microcode update. 

KaOS uses the Systemd provided Systemd-boot for UEFI installs.

Included is a KaOS specific tool to write ISO files to USB. Not only does **IsoWriter** write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do.  New in this version is the ability to **verify the integrity of the written USB flash drive** in comparison to the downloaded ISO file.  This can be done in Dolphin too, right-click the ISO file, select Actions then select Verify ISO Write.

Since LibreOffice 6.2, it is now possible to supply this as a pure Qt5/kf5 application. **LibreOffice** has thus replaced Calligra as the default Office Application for KaOS.

KaOS' creation **Croeso** (Welsh for welcome) for helping with configuring a new install is included. It will run on the newly installed system and offers to adjust some 15 commonly used settings, includes a custom Wallpaper selector, distribution info, and the option to select packages to install from six different groups.  It is written in QML and fits well with the Welcome application used in the Live system.  The latter includes an Installation Guide.

{% include image.html
            img="img/2021/systemmonitor.webp"
            title="Plasma 5.21 Systemmonitor"
            caption="Plasma 5.21 Systemmonitor"
            url="/img/2021/systemmonitor.webp" %}

This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.

The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through logout.

There is an option to verify the authenticity of downloaded KaOS ISO files **through GPG signature verification**, see the [Download page](https://kaosx.us/pages/download/#authenticity-check) for further details and instructions.

## Known issues:
* Installing on RAID is currently not possible

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/) page. KaOS ISO's **do not support Unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
