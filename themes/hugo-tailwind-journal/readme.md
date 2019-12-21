# History of this branch
version 0.3 21/12/19

### Design

to have black header with mon  
below that a menu bar  
A Responsive design that will also work for iphone5 (325px)    
breakpoints 480, 640, 768, 1024  

Frontpage is "about"

Using tailwind css to help with sizing objects in screen layout. Reason, because I like using it. Flexbox and slim css file produced

As it has static site content therefore using Hugo framework as site generator. Jo's suggestion
### Directory structure
Hugo works on list pages and single pages  
So dojo and sensei are list pages, about and the other level2 files are single pages. - - see below
- about
- dojo  
 - Edinburgh
 - Glasgow
 - Borders
 - Sussex  - single entry or 2 pages east and west???
- sensei
 - dojochou
 - space for other dojo leaders???

### Other things
menu is hard coded but could pick up from site config file <config.yaml>

img file URLs are adjusted to fit with live version server setup (not using baseURL)

Hugo makes use of templates, partials and blocks. {{referencing}} of the page/section/etc has improved.  
(the code for serving of the metadata, for the single page files, of each dojo is probably in the wrong place)

Everything is changeable the font, colours, spacing, layout, design, etc

# Below is original readme.md

# TailwindCSS Journal

_TailwindCSS Journal_ is a minimalist theme for [Hugo](https://gohugo.io) using [TailwindCSS](https://tailwindcss.com).

Based on [Journal](https://dashdashzako.github.io/hugo-journal-demo/), it also focuses on improving reading experience with no fancy effect.

It uses [Chroma](https://gohugo.io/content-management/syntax-highlighting/) for the syntaxic coloration of code snippets.

Demo is available [here](https://ianrodrigues.github.io/hugo-tailwind-journal-demo/).

## Installation

Please refer to the [Hugo documentation](https://gohugo.io/themes/installing/).

## Configuration

A few parameters should be adjusted in the site config:

```toml
baseURL = "https://username.github.io/"
disqusShortname = "username"
googleAnalytics = "UA-XXXXXXXXX-X"
title = "Tailwind Journal"
theme = "hugo-tailwind-journal"
pygmentsCodeFences = true
pygmentsUseClasses = true

[taxonomies]
    tag = "tags"

[permalinks]
    posts = "/posts/:year/:month/:title/"

[params]
    author = "John Doe"
    avatar = "images/avatar.jpg"
    description = "A minimalist journal template for Hugo using TailwindCSS."
    tagline = "A minimalist journal template for Hugo using TailwindCSS."

[languages]
    [languages.en]
        contentDir = "content/english"
        languageCode = "en-us"
        languageName = "🇺🇸 English"
        weight = 1

    [languages.pt-br]
        contentDir = "content/portuguese"
        description = "Um template minimalista para Hugo usando TailwindCSS."
        languageCode = "pt-br"
        languageName = "🇧🇷 Português"
        tagline = "Um template minimalista para Hugo usando TailwindCSS."
        weight = 2

    [languages.de]
        contentDir = "content/german"
        description = "Eine minimalistische Journalvorlage für Hugo mit TailwindCSS."
        languageCode = "de"
        languageName = "🇩🇪 Deutsch"
        tagline = "Eine minimalistische Journalvorlage für Hugo mit TailwindCSS."
        weight = 3
```
