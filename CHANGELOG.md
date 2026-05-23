# Changelog

This file tracks AlphaHENG-local changes and concise sync summaries for `big_vision`.

## Recording rules

- Keep `Unreleased` current.
- Record behavior, experiment, dependency, validation, and operator workflow changes.
- Summarize the effect of upstream syncs instead of copying commit logs.

## [Unreleased]

- Updated `big_vision/tools/lit_demo` to `esbuild 0.25.0` and migrated the
	dev-server script to the context-based `watch()` / `serve()` API so the demo
	no longer depends on the vulnerable legacy release line.
- Updated `esbuild-sass-plugin` to a release line compatible with secure
	`esbuild` and added `sass-embedded` so the lit-demo install no longer relies
	on an invalid peer-dependency combination.
- Pinned the lit-demo TensorFlow.js backend packages to `3.20.0` to match the
	already-pinned core and converter packages, restoring clean installs and
	builds after the esbuild validation surfaced fresh-install version skew.
