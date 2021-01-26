# Notes

## Obj:

HTML5, SEO, accessibility, layouts

Semantic HTML is useful for: SEO, accessibility, clarity when developing

Semantic HTML provides more context and clues for when the HTML is interpreted and indexed by a search engine. Using article and section tags signals to the SE that the main content of the page is in that tag, or that there are multiple blocks of info on the given page. Header information can get grouped with blocks of content, etc.

Semantic HTML also helps screen readers immensely as the software can create a document outline, which allows users to jump to particular sections, e.g. the <article> for content, or the <nav> to navigate away.

## Tags
`<article>`
 marks the content of the page, may be skipped to by screen readers, is important for SEO and directing web crawlers to important content

`<section>` marks sections _within_ an article or page. If a page needs breaking up, use sections rather than multiple article tags (unless on an index page showing multiple articles to navigate to!)

`<aside>`
  marks content that isn't part of the main flow of a page - e.g. a CTA, ad, etc. These are generally ignored by web crawlers

`<figcaption>`
  indicates text is paired with a nearby image element

`<figure>`
  indicates that an image element is referred to in the article; not purely decoration

`<header>`, `<footer>` section at the bottom of each page; may be deprioritised

`<hgroup>` groups related headers together at the top of an article/section. DEPRECIATED/not supported in all browsers

`<mark>` highlights text, defaults to yellow. background-color CSS can be used to change the colour

`<nav>` marks a section as a place where links help users navigate to other pages or within the page. This will massively help screen readers pick out links that are more important to users.

`<progress>` displays progress of a process. Progress is stored as a value in the element and displayed visually, but allows a screen reader to report a value for progress. Can specify a current value and a max value. If a max value is shown but no current value then (depending on browser) you'll see an indeterminate progress bar, e.g. pulsing colours but 100% full.


## Misc:

### slash at the end of <meta charset="utf-8"/>

[This is a rule from XML that's not needed in HTML](https://superuser.com/questions/1048013/why-some-metatags-have-in-the-end-and-some-dont)
