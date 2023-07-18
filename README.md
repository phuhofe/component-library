# Flora - UI Component Library for the Adstate Design System

Most of the documentation about the component library can be found in the about section on [components.design.adstate.com](https://components.design.adstate.com/).

## Prerequisites for Windows

1. Install bash: https://gitforwindows.org/

2. Setup npm to use bash binary:\
   `npm config set script-shell "PATH TO YOUR BASH BINARY"`\
   for example:\
   `npm config set script-shell "C:\\Program Files\\git\\bin\\bash.exe"`

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:6006/`. The app will automatically reload if you change any of the source files. Sometimes you may need to restart the dev server for changes to apply.

## Versioning

We follow the [Semantic Versioning](https://semver.org/) standard.

Version increases are done automatically by the [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) tool. It reads commit messages to decide on the new version. Therefor we follow the [Angular Commit Message Format](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format).

**Example commits**:

- feat: add button component
- ci: update pipeline script to deploy to k1 instead of k2

