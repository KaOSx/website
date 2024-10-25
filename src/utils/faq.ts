const faqs = [
  {
    question: "Introduction",
    answer:
      "Moving away from proprietary Operating Systems to open source options (Linux-based, BSD based, Solaris based) is about wanting freedom and choice in almost all cases. But should any such Operating System or Distribution not make some choices of what it believes is the best fit? KaOS sees a lack of focus in that respect. To create the highest quality Distribution possible, there needs to be a focus to make sure the user gets the best possible for whatever choice they made. It simply is not possible to package any and all to work perfect for every Desktop Environment or Toolkit.",
  },
  {
    question: "What were some of the choices made and why?",
    answer:
      "KaOS has made the choice to use the Linux kernel as a base (though the Illumos kernel is under constant evaluation, and a future switch is a wish). After that choice, the best available package manager, most flexible way of package building, repository maintenance is pacman/makepkg for a rolling distro like KaOS. As for the Desktop Environment, there will never be a change, whether it is Linux or Illumos based, KDE Plasma will be the choice, Qt the Toolkit. With those choices in place, April 2013 package building for this independent distribution was started. KaOS is a build from scratch distribution, every package in every repository is build by and for KaOS. By July 2013 the initial goal of about 1500 packages was reached.",
  },
  {
    question: "No other toolkits?",
    answer:
      "Making the choice for KDE/QT does not mean KaOS loses sight of the importance of having the best tool available for the job. Most of the time it is believed KDE/Qt provides the superior tool, but there are a few applications were the GTK option is the only available of that kind (Inkscape, Ardour to name two), or in the case of web-browsers for example, the Qt options do not stack up to their GTK counterparts. For those instances, GTK applications are available, though their number will stay limited.",
  },
  {
    question: "What repositories are in use?",
    answer:
      "The repository layout is simple, and consists of three groups, Core, Main and Apps. A regular complete system update will always give you the latest available, without the need for any re-install of the system. Core has the base packages needed for a system to boot-up, communicate with the BIOS, connect most hardware and set basic shell options. Example packages are the kernel, systemd, toolchain for building and basic command-line tools. This repository is carefully rolling, since any upstream update not thoroughly tested greatly affects the stability of the system. Main repository consists of all the needed libraries, extra drivers and firmware needed to make the Desktop and Applications function. Many of these can be fully rolling and will move to the end-user after a seven to ten days testing period. Some more vulnerable packages will enter after enough upstream feedback is available that no regressions have occurred. Apps consists of all packages seen and used by the users, including KDE (Frameworks, Plasma and Applications) and any needed tools. It is fully rolling and you can expect updates to reach this repository after a short testing period unless it needed to be built on newer versions of Core or Main packages, than it will have to wait until those are ready to come out of their testing period. Build is were all packages start, whether it is a rebuild, update or new addition, all goes to build, once gone through the proper testing, than they are moved to their respective repository.",
  },
  {
    question: "What is the target user?",
    answer:
      "Users who have tried many Operating Systems/Distributions/Desktop Environments and have found they prefer a Distribution that uses all its available resources to work on one DE to make that the best it can be, and know that after their searches, the best for them is KDE Plasma. Their used hardware is from about 2007 or later, so there are no issues with running 64 bit software. And the target audience is not afraid to use KDE/Qt versions of their needed applications, likes to see the best available selected for their needs, even if that means learning some new ways of working with a before unused application. There is an understanding, selection for applications used for the same goal, will be limited to 5-6. There will be no 20 music-player applications for example.",
  },
  {
    question: "Hardware requirements?",
    answer:
      "KDE is a modern Desktop Environment which can make use of most of any graphics or sound card capabilities. This does not mean KDE can’t be made to run on very low-end hardware, but in general there are better options available for such systems (OpenBox for example). The very minimal needed for hard-drive space is 8 Gb, but 25 Gb is recommended as minimal. KaOS will install with 1 Gb of RAM available, though a much better experience will start with 2 Gb of RAM. Since only x86_64 packages are available, a 64 bit capable cpu is needed. As with any rolling distribution, updates are frequent and can be large, so a reasonable fast internet connection (dial-up will become very cumbersome) and available monthly data of over 2 Gb are recommended.",
  },
  {
    question: "Why are 32 bit applications missing?",
    answer:
      "With the choice to keep the repositories limited in size, the choice was made not to include any 32 bit only application. Reason behind that is two-fold. First off, it is a good eighteen years now that 64 bit is available. Any software that chooses to ignore advances in hardware for such a long time does not make the cut KaOS has set for quality standards. What other improvements have been ignored in what is an eternity in technology time span? Second, basically there are just a handful of such applications left (Android-sdk and Steam are the best known), but to package those means packaging a good 150-200 support packages, including a full toolchain, for just 3-5 applications.",
  },
  {
    question: "KaOS is NOT another Arch based distribution, right?",
    answer:
      "Any time a new distribution is announced, the question always comes, why another one? A distribution like KaOS does not start building roughly 2000 packages from scratch, sets up all infrastructure for repositories, code, website, forum, build-system, ISO releases, if another distribution fulfilled the need. It takes a lot of time and effort, so this only happens because no other distribution offers what those behind KaOS want. Explaining the goals of KaOS in contrast to other distributions does in no way mean there is a right or wrong way, each distribution will be able to tell you why they think their goals are the best, that is why the diversity. Reading the home page where the focus is explained, shows the big difference with Arch Linux. Arch Linux does not want to make choices, it is up to the user to set up a system like they want, everything is packaged so any and all Desktop Environments (or none) are supported. Arch Linux is also bleeding edge rolling, whereas KaOS is a bit more conservative. Packages that are still maintained in an older version and were many in KDE depend on, will not move to the latest, until most upstream projects have caught up with the newer version (examples FFMPEG 6.0 is still fully maintained, while FFMPEG 6.1 is the latest, same for libsoup 2.7, or python 3.11).",
  },
  {
    question: "But isn't KaOS using Pacman?",
    answer:
      "After the choice of KaOS to use the Linux kernel for this rolling distribution, it was decided the best fit for package management was pacman. Does using pacman mean a distribution is based on Arch? What about the other tools and packages used from a variety of distributions? First thing you see when booting a KaOS ISO is gfxboot, a tool from OpenSuse. Other important packages used from OpenSuse are hwinfo and imagewriter, does this make KaOS based on OpenSuse? Or the hardware database, a package from the Gentoo developers, systemd came originally from Fedora. As KaOS sees it, try to find the best available tools for this distribution and keep evaluating what comes available, and the best for this distribution will come forward.",
  },
  {
    question: "Is there an 'upstream'?",
    answer:
      "When stating a distribution is based on another, that means in 99% of the cases, that distribution uses the repositories of the distribution it is based on (mostly 90% plus is from upstream then, added with some repositories for specific settings). For KaOS there are no “upstream” repositories, every package in every repository is built from scratch by and for KaOS.",
  },
  {
    question: "What are some other differences?",
    answer:
      "When comparing to any other distribution, you might want to check some of these points. KaOS is rolling, all packages. No package will be older than one year, even if no updates, it will be rebuilt, so everything integrates as good as possible. KaOS has set a clear and primary focus on packaging from the start, developing new tools (new package manager for example) are not part of the goals, neither is creating and maintaining the infrastructure for a community repository, KCP is fully using any and all that github offers to have such a repository. KaOS wants to keep all as simple as possible. Users are offered a GTK free base after the initial install, but there is no separation to use any GTK after that start.",
  },
  {
    question: "How is the kernel maintained?",
    answer:
      "The model used for the rolling kernel is quite different too. There are two versions available in KaOS, the stable “linux” kernel, and the latest, fully rolling “linux-next” kernel. Any new major kernel release is tested at least 6 weeks as linux-next, once the upstream update rate and amount of patches used in every update (usually around x.x.8 or above) slows down and all tests well, that linux-next version moves to be the new stable kernel.",
  },
  {
    question: "How many repositories?",
    answer:
      "In KaOS there are just three repositories in use, this greatly increases transparency and ease of use for the user and from a development point of view, significantly simplifies things.",
  },
  {
    question: "Is splitting of packages common?",
    answer:
      "Splitting of packages is held to minimum in KaOS too, with one toolkit, one DE there is no need, another way of simplifying things. Filesystem used follows mainstream Linux distributions and application development as much as possible. This means that /lib, /bin, /sbin, /usr/sbin contain regular files and binaries, these are not filled with symlinks. A move to get all those in /usr might be best in the future, but at this stage, needing thousands of symlinks to make that work is not what KaOS sees as a clean and simple solution.",
  },
];

export { faqs };
