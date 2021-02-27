<h1>
  <img src="logo.png" alt="Logo" width="50" height="50">
  librarian
</h1>

A discord bot that displays projects from a multitude of platforms.

## Commands
  * The prefix is `lib`.
  * search [platform] [project] - `platform` must be one of the platforms listed below. `project` is a package you wish to search for on the specified platform.
    * Example: `search npm typescript`

## Valid Platforms
All [libraries.io](https://libraries.io) platforms are valid for use with this bot.
  * alcatraz
  * atom
  * bower
  * cargo
  * carthage
  * clojars
  * cocoapods
  * cpan
  * cran
  * dub
  * elm
  * emacs
  * go
  * hackage
  * haxelib
  * hex
  * homebrew
  * inqlude
  * julia
  * maven
  * meteor
  * nimble
  * npm
  * nuget
  * packagist
  * platformio
  * pub
  * puppet
  * purescript
  * pypi
  * racket
  * rubygems
  * sublime
  * swiftpm
  * wordpress


## Constraints
  * The [libraries.io API](https://libraries.io/api) has a ratelimit of 60 requests per minute, so deploying this bot to scale will be difficult.

## Contributing
  * Pull requests for new features are always welcome.
  * If you have a suggestion or a bug to report, open an issue.

## Hosting
  1. `git clone` this repository or fork it.
  2. Rename `.env.example` to `.env` and update it with your own tokens for discord and libraries.io.
  3. Run `npm run dev`.