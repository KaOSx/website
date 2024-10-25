---
//layout: news
title: KaOS 2024.09
description: It is a great pleasure to present to you the September release of a new stable ISO. More applications are now ready to use Qt6 and Frameworks 6, the big one now being Calligra.
permalink: /news/2024/kaos09/
date: "2024-09-23 01:23:31 -0500"
pubDate: "2024-09-23 01:23:31 -0500"
heroImage: "/2024/package_chooser.png"
---

It is a great pleasure to present to you the September release of a new stable ISO.
![](/2024/midna2024.png "Midna 2024")
For the Plasma desktop, the latest [KDE Gear (24.08.1)](https://kde.org/announcements/gear/24.08.0/), Plasma (6.1.5), and Frameworks (6.6.0) are included. All built on **Qt 6.7.2**. Among the many changes included in KDE Gear 24.08:

- New features in Dolphin are designed to make it easier to access and manage files and folders that require administrative privileges
- Konsole: if you need to bookmark something important in a long output, double-click the scroll bar to set a position marker. You can then quickly scroll back and locate it later.
- Kdenlive: brand new keyframe curve editor to customize effects, and easing methods (Cubic in/out and Exponential in/out) for fades.

More applications are now ready to use Qt6 and Frameworks 6, the big one now being **Calligra**. Since Calligra is again actively maintained and developed, it has returned to being the default office suite for KaOS. Another one that is now Qt6-based is Virtualbox.

The UI of the installer has been updated for quite a few pages. This includes an option to choose either Calligra or LibreOffice as the preferred office suite. You will also see that the bootloader selection page and sound backend page are more **integrated with Plasma 6 (through Kirigami)**.
![](/2024/package_chooser.png "Package Chooser")
<sub>Package Chooser</sub>

There also is now an option in the installer **to install with the all-new filesystem bcachefs**, it is still in experimental stage, but is included in the kernel build, and the needed bcachefs-tools are available in the repositories. Calamares can use bcachefs when used in manual mode, though no specific settings for this filesystem have been implemented yet.
![](/2024/bcachefs_install.png "Bcachefs used for an installation")
<sub>Bcachefs used for an installation</sub>

Among the new packages included is [Zed](https://zed.dev/), a Rust-based code editor, a very fast and capable alternative to vscode. KaOS is also starting to actively follow the development of a complete independent browser [Ladybird](https://ladybird.org/) This browser is in pre-alpha state, can be used for simple browsing, and will see a monthly build in the repositories.
![](/2024/zed.png "Zed Code Editor")
<sub>Zed Editor</sub>

Updates to the base of the system included a move to Boost 1.85.0/ICU 75.1 stack, Ruby 3.3.5, Perl 5.38, kernel moved to Linux 6.10.11, Systemd 253.25, ZFS 2.2.6, KMod 33, OpenSSL 3.3, FFMPEG 6.1, OpenJDK 17 and Mesa 24.2.3.
![](/2024/ladybird.png "Ladybird Browser")
A new Phonon sound backend is in use. So far VLC was used, but there is no Qt6 porting for VLC yet. Using **phonon-mpv** as default now gives a fully Qt6-ready backend.

Four years after being end of life, **GTK2 is finally removed from the KaOS repositories**. The one major application left that still required GTK2 was Ardour, but with 8.4.0, an internal YTK is used, thus GTK2 is now gone.

SDDM 0.20.0 added the option to run this display manager in Wayland mode, so KaOS is one step closer to being ready to move away from X11. The shell used to run in Wayland mode is kwin_wayland (upstream default is using Weston).

The automated partitioning option in the installer (Calamares) now offers the use of all popular filesystems, so no need to use manual partitioning to be able to choose XFS, EXT4, BTRFS, or ZFS.

Big thanks goes to [YourHostingSolutions](https://yourhostingsolutions.com/){:target="\_blank"} for not only providing a mirror but also providing a server for KaOS. With the discontinuation of Fosshost, a new server was sorely needed.

Getting good logs has always been a bit of a challenge since you have to know what `journalctl` commands to use. That is now a thing of the past, **Kjournald** gives the option to view the logs from a nice GUI, with all kinds of filter options in the left-hand pane (it is part of the default install)

## Common Notes

The Linux kernel has all the needed ucode build-in for a fully automated Early Microcode update.

KaOS uses the Systemd-provided Systemd-boot for UEFI installs.

KaOS' creation **Croeso** (Welsh for welcome) for helping with configuring a new install is included. It will run on the newly installed system and offers to adjust some 15 commonly used settings, includes a custom Wallpaper selector, distribution info, and the option to select packages to install from six different groups. It is written in QML and fits well with the Welcome application used in the Live system. The latter includes an Installation Guide.

This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.
![](/2024/bootloader.png "Bootloader Selection")
<sub>Bootloader Selection</sub>
The artwork includes custom icon themes for light and dark themes. Midna creates a complete unified look from boot-up all the way through logout.

There is an option to verify the authenticity of downloaded KaOS ISO files **through GPG signature verification**, see the [Download page](https://kaosx.us/pages/download/#authenticity-check) for further details and instructions.

## Known issues:

- Installing on RAID is currently not possible

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/) page. KaOS ISO's **do not support Unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
