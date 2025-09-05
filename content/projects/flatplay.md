+++
title = "Flatplay"
description = "A CLI tool to build and run Flatpak applications."
weight = 3
template="project_page.html"

[extra]
technologies = ["Rust", "Flatpak"]

[extra.externals]
github = "https://github.com/mufeedali/flatplay"
crates = "https://crates.io/crates/flatplay"
+++

**Flatplay** is a CLI tool to build and run Flatpak applications that you're working on. It's designed to be easy to integrate into your workflows with editors like [Zed](https://zed.dev/) or [neovim](https://neovim.io/).

It was built with the goal of simplifying my GNOME application development workflow. I wanted to avoid having to depend on GNOME Builder or the Flatpak VS Code extension. As great as they are, they add friction when working with different editors or when you want to quickly test a GNOME application. On the other hand, using flatplay is as simple as simply running `flatplay` in your project's directory.

## Installation

Flatplay is distributed via [Crates](https://crates.io/crates/flatplay):

```bash
cargo install flatplay
```
