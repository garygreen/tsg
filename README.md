Tailwind Style Guide Generator
---

![Demo](tsg-demo.gif "Tailwind Style Guide Demo")

## Installation

```command
npm install tsg --save-dev
```

## Usage

```command
tsg <relative or absolute path to config> <generated tailwind css path>
tsg tailwind.config.js tailwind-generated.css
```

## Features

* Shows: Background Colors, Border Colors/Radius/Widths, Font Weights, Heights, Leadings, Margins, Opacities, Widths, Paddings, Shadows, Text Colors/Sizes, Trackings.
* Demo panel, for easy testing of utility classes.
* Multiple config support - useful if you have seperate tailwind configs for frontend/backend.

## Optional Usage Parameters

`--output <path>` - specify a custom path to output the generated docs (by default it will be `tsg`)

`--name=<filename e.g. "admin">` - specify a custom name for the generated config (by default it will be `site`), this is useful for the multi config support.

## Upcoming Features

* Implement remaining config options: fonts, min widths, min height, max width, max height, negative margins, zIndex, svgFill, svgStroke
* Support for prefixed configs and different seperator
* Improved states support (hover/focus etc)
* Simplify build options so don't need to pass generated tailwind css path
* Custom/general utility classes support
* Components support
* Footprint charts - per module and overall filesize.
* Webpack plugin which can automatically trigger generation of style guide
* Ongoing improvements to general style / UI of each component

## Contributing

Although this library is under heavy development, contributions are welcome via a PR. If there are any large PRs being undertaken, it's best to create an issue first to discuss implementation details and see if the PR will likely be accepted.

## Alternatives

This generator was heavily inspired by Sam Selikoff's [ember-cli-tailwind](https://github.com/embermap/ember-cli-tailwind). Mad props go out to him :-)