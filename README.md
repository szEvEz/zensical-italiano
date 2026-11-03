# Il mio italiano

My personal wiki for learning Italian, built with [Zensical](https://zensical.org)
and published to GitHub Pages on every push to `main`.

```bash
uv run zensical serve
```

## English translations

The site is written in Italian. The **IT | EN** button in the header shows or
hides the English translation on every page (the choice is remembered per
browser). Translations are marked with the class `en` and hidden by default:

| What | Markdown |
|---|---|
| Line or dialogue line | `**Cliente:** Ciao!` followed on the next line by `*Hi!*{ .en }` |
| List item / table cell | append `*English*{ .en }` |
| Paragraph | an English paragraph whose last line is `{: .en }` |
| Larger block | `<div class="en" markdown>` … `</div>` |

Inside `*…*{ .en }` don't nest `*italics*`: put cited Italian words in `**bold**`
instead. Headings and exercise solutions aren't translated. Short glosses that
should always be visible (e.g. in vocabulary lists) are written as plain English.

The styling and the toggle live in `docs/stylesheets/english.css` and
`docs/javascripts/english.js`.
