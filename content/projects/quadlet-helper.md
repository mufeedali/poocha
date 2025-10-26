+++
title = "quadlet-helper"
description = "CLI tool for managing Podman Quadlets and self-hosted infrastructure."
weight = 6
template="project_page.html"

[extra]
technologies = ["Go", "Podman", "Quadlet", "systemd"]

[extra.externals]
github = "https://github.com/mufeedali/quadlet-helper"
+++

**quadlet-helper** (qh) is a CLI tool for managing Podman Quadlet units and related infrastructure tasks. Built as a personal tool for [`quad-bucket`](https://github.com/mufeedali/quad-bucket), exploring Go as an alternative to shell scripting.

General features (useful for anyone) include:

- **Unit Management**: Manage quadlet unit files. Mostly here because I want completions and I want `restart` to reload the `systemd` daemon.
- **Backup Management**: Create and manage `systemd` timer-based automated backups using `rsync`, `restic`, or `rclone`. Includes email notifications support.

Features specific to `quad-bucket` include:

- **Cloudflare IPs Updater**: Update Cloudflare's `trustedIPs` for traefik. Includes timer installation support to automate it.
- **Example files generation**: Generate example configurations (currently only traefik) and environment files.

{% callout(type="note", title="Backups can involve some manual effort") %}
- The tool you intend to use (`rclone`, `rsync` or `restic`) is expected to be installed by you.
- `rclone` support expects any remotes to have been already configured.
- `restic` support requires you to have initialized the backup repository. 
{% end %}

It's intended to always remain completely replaceable with no lock-in.

Probably not what you need, but could still be useful. The systemd-based backup system can be pretty nice to use, for example.
