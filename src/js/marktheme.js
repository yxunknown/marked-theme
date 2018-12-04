container = document.getElementById('container');
markdown = '## nnn\n' +
    '\n' +
    'Noice is Not Noice, a noicer fork...\n' +
    '\n' +
    '<p align="center">\n' +
    '<a href="https://github.com/jarun/nnn/releases/latest"><img src="https://img.shields.io/github/release/jarun/nnn.svg?maxAge=600" alt="Latest release" /></a>\n' +
    '<a href="http://formulae.brew.sh/formula/nnn"><img src="https://img.shields.io/homebrew/v/nnn.svg?maxAge=600" alt="Homebrew" /></a>\n' +
    '<a href="https://www.archlinux.org/packages/community/x86_64/nnn/"><img src="https://img.shields.io/badge/archlinux-rolling-blue.svg?maxAge=600" alt="Arch Linux" /></a>\n' +
    '<a href="https://packages.debian.org/search?keywords=nnn&searchon=names&exact=1"><img src="https://img.shields.io/badge/debian-10+-blue.svg?maxAge=2592000" alt="Debian Buster+" /></a>\n' +
    '<a href="https://apps.fedoraproject.org/packages/nnn"><img src="https://img.shields.io/badge/fedora-27+-blue.svg?maxAge=2592000" alt="Fedora 27+" /></a>\n' +
    '<a href="https://software.opensuse.org/package/nnn"><img src="https://img.shields.io/badge/opensuse%20leap-15.0+-blue.svg?maxAge=2592000" alt="openSUSE Leap 15.0+" /></a>\n' +
    '<a href="https://packages.ubuntu.com/search?keywords=nnn&searchon=names&exact=1"><img src="https://img.shields.io/badge/ubuntu-17.10+-blue.svg?maxAge=2592000" alt="Ubuntu Artful+" /></a>\n' +
    '</p>\n' +
    '\n' +
    '<p align="center">\n' +
    '<a href="https://travis-ci.org/jarun/nnn"><img src="https://img.shields.io/travis/jarun/nnn/master.svg" alt="Build Status" /></a>\n' +
    '<a href="https://github.com/jarun/nnn/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-BSD%202--Clause-yellow.svg?maxAge=2592000" alt="License" /></a>\n' +
    '</p>\n' +
    '\n' +
    '[![nnn screencast](https://i.imgur.com/wNtI24c.jpg)](https://vimeo.com/233223942 "Click to see nnn in action!")\n' +
    '\n' +
    '<p align="center"><i>nnn in action! (click to play video)</i></a></p>\n' +
    '\n' +
    '`nnn` is probably the [fastest and most resource-sensitive](#comparison) file manager you have ever used. It integrates seamlessly with your DE and favourite GUI utilities, has a unique [navigate-as-you-type](#navigate-as-you-type-mode) mode with auto-select, disk usage analyzer mode, bookmarks, contexts, application launcher, familiar navigation shortcuts, subshell spawning and much more.\n' +
    '\n' +
    '[Integrate utilities](https://github.com/jarun/nnn#sample-scripts) like sxiv or fzy easily, or use it as a [(neo)vim plugin](https://github.com/jarun/nnn#neovim-plugin); `nnn` supports as many scripts as you need!\n' +
    '\n' +
    'It runs on Linux, macOS, Raspberry Pi, Cygwin, Linux subsystem for Windows and Termux.\n' +
    '\n' +
    '[Quickstart](#quickstart) and see how `nnn` simplifies those long desktop sessions... Missing a feature? Want to contribute? Head to the rolling [ToDo list](https://github.com/jarun/nnn/issues/137).\n' +
    '\n' +
    '*Love smart and efficient utilities? Explore [my repositories](https://github.com/jarun?tab=repositories). Buy me a cup of coffee if they help you.*\n' +
    '\n' +
    '<p align="center">\n' +
    '<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RMLTQ76JSXJ4Q"><img src="https://img.shields.io/badge/PayPal-donate-green.svg" alt="Donate via PayPal!" /></a>\n' +
    '</p>\n' +
    '\n' +
    '#### TABLE OF CONTENTS\n' +
    '\n' +
    '- [Features](#features)\n' +
    '- [Comparison](#comparison)\n' +
    '- [Installation](#installation)\n' +
    '  - [Dependencies](#dependencies)\n' +
    '  - [From a package manager](#from-a-package-manager)\n' +
    '  - [Release packages](#release-packages)\n' +
    '  - [From source](#from-source)\n' +
    '  - [Shell completion](#shell-completion)\n' +
    '- [Usage](#usage)\n' +
    '  - [Cmdline options](#cmdline-options)\n' +
    '  - [Keyboard shortcuts](#keyboard-shortcuts)\n' +
    '  - [Leader key](#leader-key)\n' +
    '  - [Contexts](#contexts)\n' +
    '  - [Directory color](#directory-color)\n' +
    '  - [Filters](#filters)\n' +
    '  - [Navigate-as-you-type mode](#navigate-as-you-type-mode)\n' +
    '  - [File indicators](#file-indicators)\n' +
    '  - [Utility dependencies](#utility-dependencies)\n' +
    '  - [Help](#help)\n' +
    '- [Quickstart](#quickstart)\n' +
    '- [How to](#how-to)\n' +
    '  - [add bookmarks](#add-bookmarks)\n' +
    '  - [copy file paths](#copy-file-paths)\n' +
    '    - [selection](#selection)\n' +
    '    - [to clipboard](#to-clipboard)\n' +
    '  - [cd on quit](#cd-on-quit)\n' +
    '  - [(neo)vim plugin](#neovim-plugin)\n' +
    '  - [run custom scripts](#run-custom-scripts)\n' +
    '    - [sample scripts](#sample-scripts)\n' +
    '  - [change dir color](#change-dir-color)\n' +
    '  - [integrate patool](#integrate-patool)\n' +
    '  - [work faster at rename prompt](#work-faster-at-rename-prompt)\n' +
    '  - [set idle timeout](#set-idle-timeout)\n' +
    '  - [show hot plugged drives](#show-hot-plugged-drives)\n' +
    '  - [tmux configuration](#tmux-configuration)\n' +
    '  - [BSD terminal issue](#bsd-terminal-issue)\n' +
    '  - [Disable file open on navigation](#disable-file-open-on-navigation)\n' +
    '- [Why fork?](#why-fork)\n' +
    '- [Mentions](#mentions)\n' +
    '- [Developers](#developers)\n' +
    '\n' +
    '#### FEATURES\n' +
    '\n' +
    '- Modes\n' +
    '  - Basic, detail (default), disk usage analyzer (du)\n' +
    '  - Vim (or neovim) file picker (as a plugin)\n' +
    '- Navigation\n' +
    '  - Familiar, easy shortcuts (arrows, `~`, `-`, `&`)\n' +
    '  - *Navigate-as-you-type* with auto-select directory\n' +
    '  - Contexts (_aka_ tabs _aka_ workspaces)\n' +
    '  - Bookmarks\n' +
    '  - Pin and visit a directory\n' +
    '- Sorting\n' +
    '  - Directories always listed on top\n' +
    '  - Sort by file name, modification time, size\n' +
    '  - Numeric order for numeric names (visit _/proc_)\n' +
    '- Search\n' +
    '  - Instant filtering with *search-as-you-type*\n' +
    '- Mimes\n' +
    '  - Open with desktop opener or specify a custom app\n' +
    '  - Create, list, extract archives (needs (p)atool)\n' +
    '  - Open all text files in EDITOR (optional)\n' +
    '- Information\n' +
    '  - Detailed stat-like file information\n' +
    '  - Media information (needs mediainfo/exiftool)\n' +
    '- Convenience\n' +
    '  - Create, rename files and directories\n' +
    '  - Select files across directories\n' +
    '  - Copy, move, delete selection\n' +
    '  - Batch rename/move/delete (needs vidir)\n' +
    '  - Show directories in custom color (default: blue)\n' +
    '  - Spawn a subshell in the current directory\n' +
    '  - Run custom scripts in the current directory\n' +
    '  - Change directory at exit (*easy* shell integration)\n' +
    '  - Edit file in EDITOR or open in PAGER\n' +
    '  - GUI app launcher (up to 2 space-separated args)\n' +
    '  - Terminal locker integration\n' +
    '- Unicode support\n' +
    '- Highly optimized, static analysis integrated code\n' +
    '- Available on many distros\n' +
    '\n' +
    '#### COMPARISON\n' +
    '\n' +
    'Stripped binary (or script) size and memory usage of `nnn` and some other similar utilities while viewing a directory with 13.5K files (0 directories), sorted by size/du:\n' +
    '\n' +
    '<pre>\n' +
    '<b>BINSZ</b>    VIRT  <b>  RES</b>    SHR S  %MEM   COMMAND\n' +
    '<b> 650K</b>  139720  <b>91220</b>   8460 S   1.1   ranger\n' +
    '<b>   1M</b>   50496  <b>15328</b>   4076 S   0.2   vifm\n' +
    '<b>   1M</b>   72152  <b>12468</b>   7336 S   0.2   mc\n' +
    '<b>  70K</b>   16068  <b> 4620</b>   2408 S   0.1   ncdu\n' +
    '<b>  60K</b>   15748  <b> 4396</b>   2516 S   0.1   nnn -S\n' +
    '</pre>\n' +
    '\n' +
    'Intrigued? Find out [HOW](https://github.com/jarun/nnn/wiki/performance-factors).\n' +
    '\n' +
    '#### INSTALLATION\n' +
    '\n' +
    '#### Dependencies\n' +
    '\n' +
    '`nnn` needs libncursesw (on Linux or ncurses on macOS) and standard libc.\n' +
    '\n' +
    '#### From a package manager\n' +
    '\n' +
    '- [Arch Linux](https://www.archlinux.org/packages/community/x86_64/nnn/) (`pacman -S nnn`)\n' +
    '- [Debian](https://packages.debian.org/search?keywords=nnn&searchon=names&exact=1) (`apt-get install nnn`)\n' +
    '- [Fedora](https://apps.fedoraproject.org/packages/nnn) (`dnf install nnn`)\n' +
    '- [FreeBSD](https://www.freshports.org/misc/nnn) (`pkg install nnn`)\n' +
    '- [Gentoo](https://packages.gentoo.org/packages/app-misc/nnn) (`emerge nnn`)\n' +
    '- [Homebrew](http://formulae.brew.sh/formula/nnn) (`brew install nnn`)\n' +
    '- [NixOS](https://github.com/NixOS/nixpkgs/tree/master/pkgs/applications/misc/nnn) (`nix-env -i nnn`)\n' +
    '- [OpenBSD](https://cvsweb.openbsd.org/cgi-bin/cvsweb/ports/sysutils/nnn/) (`pkg_add nnn`)\n' +
    '- [openSUSE](https://software.opensuse.org/package/nnn) (and packages for several other distros) (`zypper in nnn`)\n' +
    '- [Raspbian Testing](https://archive.raspbian.org/raspbian/pool/main/n/nnn/) (`apt-get install nnn`)\n' +
    '- [Slackware](http://slackbuilds.org/repository/14.2/system/nnn/) (`slackpkg install nnn`)\n' +
    '- [Solus](https://packages.getsol.us/shannon/n/nnn/) (`eopkg install nnn`)\n' +
    '- [Source Mage](http://codex.sourcemage.org/test/shell-term-fm/nnn/) (`cast nnn`)\n' +
    '- [Termux](https://github.com/termux/termux-packages/tree/master/packages/nnn) (`pkg in nnn`)\n' +
    '- [Ubuntu](https://packages.ubuntu.com/search?keywords=nnn&searchon=names&exact=1) (`apt-get install nnn`)\n' +
    '- [Ubuntu PPA](https://launchpad.net/~twodopeshaggy/+archive/ubuntu/jarun/) (`apt-get install nnn`)\n' +
    '- [Void Linux](https://github.com/void-linux/void-packages/tree/master/srcpkgs/nnn) (`xbps-install -S nnn`)\n' +
    '\n' +
    '#### Release packages\n' +
    '\n' +
    'Packages for Arch Linux, CentOS, Debian, Fedora, Solus, and Ubuntu are available with the [latest stable release](https://github.com/jarun/nnn/releases/latest).\n' +
    '\n' +
    '#### From source\n' +
    '\n' +
    'To cook yourself, download the [latest stable release](https://github.com/jarun/nnn/releases/latest) or clone this repository (*risky*). Then install the dependencies and compile (e.g. on Ubuntu 16.04):\n' +
    '\n' +
    '    $ sudo apt-get install pkg-config libncursesw5-dev\n' +
    '    $ make\n' +
    '    $ sudo make install\n' +
    '\n' +
    '`PREFIX` is supported, in case you want to install to a different location.\n' +
    '\n' +
    'Instructions for [Cygwin](https://github.com/jarun/nnn/wiki/Cygwin-instructions).\n' +
    '\n' +
    '#### Shell completion\n' +
    '\n' +
    'Search keyword and option completion scripts for Bash, Fish and Zsh can be found in respective subdirectories of [`scripts/auto-completion/`](scripts/auto-completion). Please refer to your shell\'s manual for installation instructions.\n' +
    '\n' +
    '#### USAGE\n' +
    '\n' +
    '#### Cmdline options\n' +
    '\n' +
    '```\n' +
    'usage: nnn [-b key] [-C] [-e] [-i] [-l]\n' +
    '           [-p file] [-S] [-v] [-h] [PATH]\n' +
    '\n' +
    'The missing terminal file manager for X.\n' +
    '\n' +
    'positional args:\n' +
    '  PATH   start dir [default: current dir]\n' +
    '\n' +
    'optional args:\n' +
    ' -b key  bookmark key to open\n' +
    ' -C      disable directory color\n' +
    ' -e      use exiftool instead of mediainfo\n' +
    ' -i      start in navigate-as-you-type mode\n' +
    ' -l      start in light mode\n' +
    ' -p file copy selection to file (stdout if \'-\')\n' +
    ' -S      start in disk usage analyser mode\n' +
    ' -v      show program version\n' +
    ' -h      show this help\n' +
    '```\n' +
    '\n' +
    '`>` indicates the currently selected entry in `nnn`.\n' +
    '\n' +
    '#### Keyboard shortcuts\n' +
    '\n' +
    'Press <kbd>?</kbd> in `nnn` to see the list anytime.\n' +
    '\n' +
    '```\n' +
    ' NAVIGATION\n' +
    '       ↑, k, ^P  Up             PgUp, ^U  Scroll up\n' +
    '       ↓, j, ^N  Down           PgDn, ^D  Scroll down\n' +
    ' Home, g, ^, ^A  First entry           ~  Go HOME\n' +
    '  End, G, $, ^E  Last entry            &  Start dir\n' +
    ' ←, Bksp, h, ^H  Parent dir            -  Last visited dir\n' +
    '    →, ↵, l, ^M  Open file/enter dir   .  Toggle show hidden\n' +
    '              /  Filter          Ins, ^I  Toggle nav-as-you-type\n' +
    '              b  Pin current dir      ^W  Go to pinned dir\n' +
    '        Tab, ^T  Next context          d  Toggle detail view\n' +
    '          `, ^/  Leader key      LeaderN  Go to/create context N\n' +
    '            Esc  Exit prompt          ^L  Redraw, clear prompt\n' +
    '             ^G  Quit and cd           q  Quit context\n' +
    '          Q, ^Q  Quit                  ?  Help, config\n' +
    ' FILES\n' +
    '             ^O  Open with...          n  Create new\n' +
    '              D  File details         ^R  Rename entry\n' +
    '          ⎵, ^K  Copy entry path       r  Open dir in vidir\n' +
    '          Y, ^Y  Toggle selection      y  List selection\n' +
    '              P  Copy selection        X  Delete selection\n' +
    '              V  Move selection       ^X  Delete entry\n' +
    '              f  Archive entry         F  List archive\n' +
    '             ^F  Extract archive    m, M  Brief/full media info\n' +
    '              e  Edit in EDITOR        p  Open in PAGER\n' +
    ' ORDER\n' +
    '             ^J  Disk usage            S  Apparent du\n' +
    '              s  Size                  t  Modification time\n' +
    ' MISC\n' +
    '              o  Launch GUI app    !, ^]  Spawn SHELL in dir\n' +
    '              R  Run custom script     L  Lock terminal\n' +
    '```\n' +
    '\n' +
    'Help & settings, file details, media info and archive listing are shown in the PAGER. Please use the PAGER-specific keys in these screens.\n' +
    '\n' +
    '#### Leader key\n' +
    '\n' +
    'The Leader key (<kbd>`</kbd> or <kbd>^/</kbd>) provides a powerful multi-functional navigation mechanism. It is case-sensitive and understands contexts, bookmarks and handy location shortcuts.\n' +
    '\n' +
    '| Key | Function |\n' +
    '|:---:| --- |\n' +
    '| <kbd>1-4</kbd> | Go to/create selected context |\n' +
    '| <kbd>></kbd>, <kbd>.</kbd> | Go to next active context |\n' +
    '| <kbd><</kbd>, <kbd>,</kbd> | Go to previous active context |\n' +
    '| key | Go to bookmarked location |\n' +
    '| <kbd>~</kbd> | Go to HOME directory |\n' +
    '| <kbd>-</kbd> | Go to last visited directory |\n' +
    '| <kbd>&</kbd> | Go to start directory |\n' +
    '| <kbd>q</kbd> | Quit context |\n' +
    '\n' +
    '#### Contexts\n' +
    '\n' +
    'Contexts serve the purpose of exploring multiple directories simultaneously. 4 contexts are available. The status of the contexts are shown in the top left corner:\n' +
    '\n' +
    '- the current context is in reverse\n' +
    '- other used contexts are underlined\n' +
    '- rest are unused\n' +
    '\n' +
    'To switch to a context press the Leader key followed by the context number (1-4).\n' +
    '\n' +
    'The first time a context is entered, it copies the state of the last visited context. Each context remembers its start directory and last visited directory.\n' +
    '\n' +
    'When a context is quit, the next active context is selected. If the last active context is quit, the program quits.\n' +
    '\n' +
    '#### Directory color\n' +
    '\n' +
    'Each context can have its own color for directories specified:\n' +
    '\n' +
    '    export NNN_CONTEXT_COLORS="1234"\n' +
    'colors: 0-black, 1-red, 2-green, 3-yellow, 4-blue (default), 5-magenta, 6-cyan, 7-white\n' +
    '\n' +
    '#### Filters\n' +
    '\n' +
    'Filters support regexes to instantly (search-as-you-type) list the matching entries in the current directory.\n' +
    '\n' +
    'Ways to exit filter prompt:\n' +
    '- press <kbd>^L</kbd> to clear filter followed by <kbd>Bksp</kbd> (to clear the filter symbol, like vi)\n' +
    '  - at other prompts <kbd>^L</kbd> followed by <kbd>Enter</kbd> discards all changes and exits prompt\n' +
    '- run a search with no matches and press <kbd>Enter</kbd>\n' +
    '\n' +
    'Common use cases:\n' +
    '- to list all matches starting with the filter expression, start the expression with a `^` (caret) symbol\n' +
    '- type `\\.mkv` to list all MKV files\n' +
    '- use `.*` to match any character (_sort of_ fuzzy search)\n' +
    '\n' +
    'If `nnn` is invoked as root or the environment variable `NNN_SHOW_HIDDEN` is set the default filter will also match hidden files.\n' +
    '\n' +
    '#### Navigate-as-you-type mode\n' +
    '\n' +
    'In this mode directories are opened in filter mode, allowing continuous navigation. Works best with the **arrow keys**.\n' +
    '\n' +
    'In case of only one match and it\'s a directory, `nnn` auto selects the directory and enters it in this mode. To disable this behaviour,\n' +
    '\n' +
    '    export NNN_NO_AUTOSELECT=1\n' +
    '\n' +
    '#### File indicators\n' +
    '\n' +
    'The following indicators are used in the detail view:\n' +
    '\n' +
    '| Indicator | File Type |\n' +
    '|:---:| --- |\n' +
    '| `/` | Directory |\n' +
    '| `*` | Executable |\n' +
    '| <code>&#124;</code> | Fifo |\n' +
    '| `=` | Socket |\n' +
    '| `@` | Symbolic Link |\n' +
    '| `@/` | Symbolic Link to directory |\n' +
    '| `b` | Block Device |\n' +
    '| `c` | Character Device |\n' +
    '\n' +
    '#### Utility dependencies\n' +
    '\n' +
    '| External dependency | Operation |\n' +
    '| --- | --- |\n' +
    '| xdg-open (Linux), open(1) (macOS), cygstart (Cygwin) | desktop opener |\n' +
    '| file | determine file type |\n' +
    '| cp, mv, rm, xargs (from findutils on Linux)  | copy, move and remove files |\n' +
    '| mediainfo, exiftool | multimedia file details |\n' +
    '| atool, patool ([integration](#integrate-patool)) | create, list and extract archives |\n' +
    '| vidir (from moreutils) | batch rename, move, delete dir entries |\n' +
    '| vlock (Linux), bashlock (macOS), lock(1) (BSD) | terminal locker |\n' +
    '| $EDITOR (overridden by $VISUAL, if defined) | edit files (fallback vi) |\n' +
    '| $PAGER | page through files (fallback less) |\n' +
    '| $SHELL | spawn a shell, run script (fallback sh) |\n' +
    '\n' +
    'To edit all text files in EDITOR (preferably CLI, fallback vi):\n' +
    '\n' +
    '    export NNN_USE_EDITOR=1\n' +
    '\n' +
    'Arguments to the `$EDITOR`, `$PAGER` and `$SHELL` should be combined together, e.g.,\n' +
    '\n' +
    '    export EDITOR=\'vim -xR\'\n' +
    '\n' +
    '#### Help\n' +
    '\n' +
    '    $ nnn -h\n' +
    '    $ man nnn\n' +
    'To lookup keyboard shortcuts at runtime, press <kbd>?</kbd>.\n' +
    '\n' +
    '#### QUICKSTART\n' +
    '\n' +
    '1. Install the [utilities required](#file-handling) for your regular activities.\n' +
    '2. Configure [cd on quit](#cd-on-quit).\n' +
    '3. Optionally open all text files in EDITOR (fallback vi):\n' +
    '\n' +
    '       export NNN_USE_EDITOR=1\n' +
    '4. Run `n`.\n' +
    '5. Press <kbd>?</kbd> for help on keyboard shortcuts anytime.\n' +
    '6. For additional functionality [setup custom scripts](#run-custom-scripts).\n' +
    '\n' +
    '#### HOW TO\n' +
    '\n' +
    '#### add bookmarks\n' +
    '\n' +
    'Set environment variable `NNN_BMS` as a string of `key_char:location` pairs (max 10) separated by semicolons (`;`):\n' +
    '\n' +
    '    export NNN_BMS=\'d:~/Documents;u:/home/user/Cam Uploads;D:~/Downloads/\'\n' +
    '\n' +
    'NOTE: Bookmark keys should be single-character to use them in combination with the Leader key.\n' +
    '\n' +
    '#### copy file paths\n' +
    '\n' +
    '##### selection\n' +
    '\n' +
    'Use <kbd>^K</kbd> to copy the absolute path of the file under the cursor.\n' +
    '\n' +
    'To copy multiple absolute file paths:\n' +
    '\n' +
    '- press <kbd>^Y</kbd> (or <kbd>Y</kbd>) to enter selection mode. In this mode it\'s possible to\n' +
    '  - cherry-pick individual files one by one by pressing <kbd>^K</kbd> on each entry (works across directories and contexts); or,\n' +
    '  - navigate to another file in the same directory to select a range of files\n' +
    '- press <kbd>^Y</kbd> (or <kbd>Y</kbd>) _again_ to copy the paths and exit the selection mode\n' +
    '\n' +
    'The files in the list can now be copied (<kbd>P</kbd>), moved (<kbd>V</kbd>) or removed (<kbd>X</kbd>).\n' +
    '\n' +
    'To list the file paths copied to memory press <kbd>y</kbd>.\n' +
    '\n' +
    'File paths are copied to the temporary file `DIR/.nnncp`, where `DIR` (by priority) is:\n' +
    '\n' +
    '    $HOME or,\n' +
    '    $TMPDIR or,\n' +
    '    /tmp\n' +
    '\n' +
    'The path is shown in the help and configuration screen..\n' +
    '\n' +
    'To use the copied paths from the cmdline, use command substitution. For example, if `DIR` above is `/home/user`:\n' +
    '\n' +
    '    # bash/zsh\n' +
    '    ls -ltr `cat /home/user/.nnncp`\n' +
    '    ls -ltr $(cat /home/user/.nnncp)\n' +
    '\n' +
    '    # fish\n' +
    '    ls -ltr (cat /home/user/.nnncp)\n' +
    '\n' +
    'An alias may be handy:\n' +
    '\n' +
    '    alias ncp=\'cat /home/user/.nnncp\'\n' +
    '\n' +
    'so you can easily handle files together:\n' +
    '\n' +
    '    # bash/zsh\n' +
    '    ls -ltr `ncp`\n' +
    '    ls -ltr $(ncp)\n' +
    '\n' +
    '    # fish\n' +
    '    ls -ltr (ncp)\n' +
    '\n' +
    '##### to clipboard\n' +
    '\n' +
    'Along with default copy, `nnn` can pipe the absolute path of the current file or multiple files to a copier script. For example, you can use `xsel` on Linux or `pbcopy` on macOS. Here\'s a sample [copier script](https://github.com/jarun/nnn/tree/master/scripts/copier).\n' +
    '\n' +
    'To inform `nnn` of the executable copier script location:\n' +
    '\n' +
    '    export NNN_COPIER="/path/to/copier.sh"\n' +
    '\n' +
    '#### cd on quit\n' +
    '\n' +
    'To quit `nnn` and switch to the directory last opened follow the instructions below.\n' +
    '\n' +
    'Pick the appropriate file for your shell from [`scripts/quitcd`](scripts/quitcd) and add the contents to your shell\'s rc file. You\'ll need to spawn a new shell for the change to take effect. You should start `nnn` as `n` (or modify the function name to something else). To change directory on quit press `^G` while exiting.\n' +
    '\n' +
    'As you might notice, `nnn` uses the environment variable `NNN_TMPFILE` to write the last visited directory path. You can change it.\n' +
    '\n' +
    '#### (neo)vim plugin\n' +
    '\n' +
    '`nnn` can be used as a file picker/chooser within vim or neovim. Find the plugin [here](https://github.com/mcchrish/nnn.vim).\n' +
    '\n' +
    '#### run custom scripts\n' +
    '\n' +
    '`nnn` can invoke custom scripts with the currently selected file name as argument 1.\n' +
    '\n' +
    'Export the path to the custom executable script:\n' +
    '\n' +
    '    export NNN_SCRIPT=/usr/local/bin/nscript\n' +
    '\n' +
    'Press <kbd>R</kbd> to run the script in the current directory.\n' +
    '\n' +
    'It\'s possible to run multiple scripts with `nnn` as long as the scripts are in the same location and share the same prefix. To enable multiple scripts,\n' +
    '\n' +
    '    export NNN_MULTISCRIPT=1\n' +
    '\n' +
    'With the example of `NNN_SCRIPT` above, some more scripts could be:\n' +
    '\n' +
    '    /usr/local/bin/nscript1\n' +
    '    /usr/local/bin/nscript2\n' +
    '    /usr/local/bin/nscriptcustom1\n' +
    '    /usr/local/bin/nscriptcustom2\n' +
    '    and so on...\n' +
    '\n' +
    'Type the correct suffix  when prompted on pressing the keybind <kbd>R</kbd>. To use the base script (`NNN_SCRIPT`), just press <kbd>Enter</kbd>.\n' +
    '\n' +
    '##### sample scripts\n' +
    '\n' +
    '- Open image files in current dir in **sxiv**:\n' +
    '\n' +
    '      #!/usr/bin/env sh\n' +
    '\n' +
    '      sxiv -q * >/dev/null 2>&1\n' +
    '\n' +
    '- Fuzzy find files in **fzy** and open with xdg-open:\n' +
    '\n' +
    '      #!/usr/bin/env sh\n' +
    '\n' +
    '      xdg-open $(find -type f | fzy) >/dev/null 2>&1\n' +
    '\n' +
    '#### change dir color\n' +
    '\n' +
    'The default color for directories is blue. Option `-c` accepts color codes from 0 to 7 to use a different color:\n' +
    '\n' +
    '    0-black, 1-red, 2-green, 3-yellow, 4-blue, 5-magenta, 6-cyan, 7-white\n' +
    '\n' +
    'Any other value disables colored directories.\n' +
    '\n' +
    '#### integrate patool\n' +
    '\n' +
    'On systems where `atool` is not available but `patool` is, drop two copies of the Python3 script [natool](https://github.com/jarun/nnn/tree/master/scripts/natool) as `atool` and `apack` somewhere in `$PATH`.\n' +
    '\n' +
    '#### work faster at rename prompt\n' +
    '\n' +
    'The rename prompt supports some bash-like command-line shortcuts - <kbd>^A</kbd>, <kbd>^E</kbd>, <kbd>^U</kbd>. <kbd>^L</kbd> clears the name.\n' +
    '\n' +
    '#### set idle timeout\n' +
    '\n' +
    'The terminal locker is disabled by default. To set the wait time in seconds, use environment variable `NNN_IDLE_TIMEOUT`.\n' +
    '\n' +
    '#### show hot plugged drives\n' +
    '\n' +
    'Enable volume management in your DE file manager and set removable drives or media to be auto-mounted when inserted. Then visit the usual mount point location (`/mnt` or `/media/user`) in `nnn`.\n' +
    '\n' +
    '#### tmux configuration\n' +
    '\n' +
    '`nnn` might not handle keypresses correctly when used with tmux (see issue #104 for more details). Set `TERM=xterm-256color` to address it.\n' +
    '\n' +
    '#### BSD terminal issue\n' +
    '\n' +
    'By default in OpenBSD & FreeBSD, `stty` maps <kbd>^Y</kbd> to `DSUSP`. This means that typing <kbd>^Y</kbd> will suspend `nnn` as if you typed <kbd>^Z</kbd> (you can bring `nnn` back to the foreground by issuing `fg`) instead of entering multi-copy mode. You can check this with `stty -a`. If it includes the text `dsusp = ^Y`, issuing `stty dsusp undef` will disable this `DSUSP` and let `nnn` receive the <kbd>^Y</kbd> instead.\n' +
    '\n' +
    '#### Disable file open on navigation\n' +
    '\n' +
    'In order to disable opening files on accidental navigation key (<kbd>→</kbd> or <kbd>l</kbd>) press:\n' +
    '\n' +
    '    export DISABLE_FILE_OPEN_ON_NAV=1\n' +
    '\n' +
    'To open files with this setting, press <kbd>Enter</kbd>.\n' +
    '\n' +
    '#### WHY FORK?\n' +
    '\n' +
    '`nnn` was initially forked from [noice](http://git.2f30.org/noice/) but is significantly [different](https://github.com/jarun/nnn/wiki/nnn-vs.-noice) today. I chose to fork because:\n' +
    '- one can argue my approach deviates from the goal of the original project -  keep the utility `suckless`. `noice` was rudimentary. In my opinion evolution is the taste of time.\n' +
    '- I would like to have a bit of control on what features are added in the name of desktop integration. A feature-bloat is the last thing in my mind. Check out [nnn design considerations](https://github.com/jarun/nnn/wiki/nnn-design-considerations) for more details.\n' +
    '\n' +
    '#### MENTIONS\n' +
    '\n' +
    '- [FOSSMint](https://www.fossmint.com/nnn-linux-terminal-file-browser/)\n' +
    '- [Hacker News](https://news.ycombinator.com/item?id=18520898)\n' +
    '- [It\'s FOSS](https://itsfoss.com/nnn-file-browser-linux/)\n' +
    '- [LinuxLinks](https://www.linuxlinks.com/nnn-fast-and-flexible-file-manager/)\n' +
    '- [Ubuntu Full Circle Magazine - Issue 135](https://fullcirclemagazine.org/issue-135/)\n' +
    '\n' +
    '#### DEVELOPERS\n' +
    '\n' +
    '1. Copyright © 2014-2016 Lazaros Koromilas\n' +
    '2. Copyright © 2014-2016 Dimitris Papastamos\n' +
    '3. Copyright © 2016-2018 [Arun Prakash Jana](https://github.com/jarun)';
container.innerHTML = marked(markdown);