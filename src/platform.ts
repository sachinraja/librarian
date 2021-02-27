import alcatrazImage from 'images/alcatraz.png';
import atomImage from 'images/atom.png';
import bowerImage from 'images/bower.png';
import cargoImage from 'images/cargo.png';
import carthageImage from 'images/carthage.png';
import clojarsImage from 'images/clojars.png';
import cocoapodsImage from 'images/cocoapods.png';
import cpanImage from 'images/cpan.png';
import cranImage from 'images/cran.png';
import dubImage from 'images/dub.png';
import elmImage from 'images/elm.png';
import emacsImage from 'images/emacs.png';
import goImage from 'images/go.png';
import hackageImage from 'images/hackage.png';
import haxelibImage from 'images/haxelib.png';
import hexImage from 'images/hex.png';
import homebrewImage from 'images/homebrew.png';
import inqludeImage from 'images/inqlude.png';
import juliaImage from 'images/julia.png';
import mavenImage from 'images/maven.png';
import meteorImage from 'images/meteor.png';
import nimbleImage from 'images/nimble.png';
import npmImage from 'images/npm.png';
import nugetImage from 'images/nuget.png';
import packagistImage from 'images/packagist.png';
import platformioImage from 'images/platformio.png';
import pubImage from 'images/pub.png';
import puppetImage from 'images/puppet.png';
import purescriptImage from 'images/purescript.png';
import pypiImage from 'images/pypi.png';
import racketImage from 'images/racket.png';
import rubygemsImage from 'images/rubygems.png';
import sublimeImage from 'images/sublime.png';
import swiftpmImage from 'images/swiftpm.png';
import wordpressImage from 'images/wordpress.png';
import path from 'path';

const platformImageMatch: Record<PlatformType, string> = {
  alcatraz: alcatrazImage,
  atom: atomImage,
  bower: bowerImage,
  cargo: cargoImage,
  carthage: carthageImage,
  clojars: clojarsImage,
  cocoapods: cocoapodsImage,
  cpan: cpanImage,
  cran: cranImage,
  dub: dubImage,
  elm: elmImage,
  emacs: emacsImage,
  go: goImage,
  hackage: hackageImage,
  haxelib: haxelibImage,
  hex: hexImage,
  homebrew: homebrewImage,
  inqlude: inqludeImage,
  julia: juliaImage,
  maven: mavenImage,
  meteor: meteorImage,
  nimble: nimbleImage,
  npm: npmImage,
  nuget: nugetImage,
  packagist: packagistImage,
  platformio: platformioImage,
  pub: pubImage,
  puppet: puppetImage,
  purescript: purescriptImage,
  pypi: pypiImage,
  racket: racketImage,
  rubygems: rubygemsImage,
  sublime: sublimeImage,
  swiftpm: swiftpmImage,
  wordpress: wordpressImage,
};

const platforms: Record<PlatformType, PlatformData> = <
  Record<PlatformType, PlatformData>
>{};

Object.entries(platformImageMatch).forEach(([platformName, platformImage]) => {
  platforms[<PlatformType>platformName] = {
    image: platformImage,
    baseImagePath: path.parse(platformImage).base,
  };
});

export function platformToImage(platformName: PlatformType) {
  return platforms[platformName];
}

interface PlatformData {
  image: string;
  baseImagePath: string;
}

export function isPlatformType(keyInput: string) {
  return [
    'alcatraz',
    'atom',
    'bower',
    'cargo',
    'carthage',
    'clojars',
    'cocoapods',
    'cpan',
    'cran',
    'dub',
    'elm',
    'emacs',
    'go',
    'hackage',
    'haxelib',
    'hex',
    'homebrew',
    'inqlude',
    'julia',
    'maven',
    'meteor',
    'nimble',
    'npm',
    'nuget',
    'packagist',
    'platformio',
    'pub',
    'puppet',
    'purescript',
    'pypi',
    'racket',
    'rubygems',
    'sublime',
    'swiftpm',
    'wordpress',
  ].includes(keyInput);
}

export declare type PlatformType =
  | 'alcatraz'
  | 'atom'
  | 'bower'
  | 'cargo'
  | 'carthage'
  | 'clojars'
  | 'cocoapods'
  | 'cpan'
  | 'cran'
  | 'dub'
  | 'elm'
  | 'emacs'
  | 'go'
  | 'hackage'
  | 'haxelib'
  | 'hex'
  | 'homebrew'
  | 'inqlude'
  | 'julia'
  | 'maven'
  | 'meteor'
  | 'nimble'
  | 'npm'
  | 'nuget'
  | 'packagist'
  | 'platformio'
  | 'pub'
  | 'puppet'
  | 'purescript'
  | 'pypi'
  | 'racket'
  | 'rubygems'
  | 'sublime'
  | 'swiftpm'
  | 'wordpress';
