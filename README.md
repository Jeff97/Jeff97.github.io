# Zhanfeng Li — Academic Website

_Source for the academic homepage of Zhanfeng Li, a postdoctoral fellow working on soft-matter mechanics, growth, and morphing structures._

[![Website](https://img.shields.io/badge/website-jeff97.github.io-0A66C2)](https://jeff97.github.io)
[![GitHub stars](https://img.shields.io/github/stars/Jeff97/Jeff97.github.io?style=social)](https://github.com/Jeff97/Jeff97.github.io/stargazers)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

## 📋 Overview

This repository powers [jeff97.github.io](https://jeff97.github.io), the personal academic website of **Zhanfeng Li (李展锋)** at South China University of Technology. The site presents research interests, publications, talks, teaching, portfolio material, and contact links.

<p align="center">
  <img src="images/profile.jpg" width="190" alt="Profile photograph of Zhanfeng Li">
</p>

_Figure 1: Profile image used by the academic website._

The site is built with Jekyll and GitHub Pages on top of the Academic Pages template[^1].

## 🌐 Visit the site

- **Homepage:** [https://jeff97.github.io](https://jeff97.github.io)
- **Google Scholar:** [Publication profile](https://scholar.google.com/citations?user=6q4o6skAAAAJ)
- **ORCID:** [0000-0001-5458-3123](https://orcid.org/0000-0001-5458-3123)
- **ResearchGate:** [Zhanfeng Li](https://www.researchgate.net/profile/Zhanfeng-Li-2)

## 📚 Content structure

| Path | Purpose |
| --- | --- |
| [`_pages/`](_pages/) | Main site pages and navigation destinations |
| [`_publications/`](_publications/) | Publication records |
| [`_talks/`](_talks/) | Talks and presentations |
| [`_teaching/`](_teaching/) | Teaching entries |
| [`_portfolio/`](_portfolio/) | Research and project highlights |
| [`_posts/`](_posts/) | News and dated posts |
| [`files/`](files/) | Downloadable documents |
| [`images/`](images/) | Profile and research imagery |
| [`_config.yml`](_config.yml) | Identity, URL, collections, and Jekyll settings |

## 🔧 Local preview

### Prerequisites

- Ruby and Bundler
- A native build toolchain required by the selected Ruby gems

### Run the site

```bash
git clone https://github.com/Jeff97/Jeff97.github.io.git
cd Jeff97.github.io
bundle install
bundle exec jekyll serve -l -H localhost
```

Open [http://localhost:4000](http://localhost:4000). Jekyll reloads content changes automatically; restart the server after changing `_config.yml`.

## ⚙️ Updating content

1. Edit identity, profile links, and site-wide behavior in `_config.yml`
2. Add or revise Markdown entries in the appropriate collection directory
3. Place downloadable documents in `files/` and reusable media in `images/`
4. Preview locally and check internal links before pushing to `master`

The `markdown_generator/` utilities can help turn structured publication or talk data into collection entries, but direct Markdown editing is also supported.

## 🔗 Template attribution

This site is based on [Academic Pages](https://github.com/academicpages/academicpages.github.io)[^1], which in turn is derived from the Minimal Mistakes Jekyll theme[^2]. The site-specific content and configuration are maintained in this repository; upstream theme credits remain intact.

## 🔐 License

The theme code retains its original [MIT License](LICENSE) and copyright notice for Michael Rose. Personal text, photographs, publications, and third-party assets may be subject to separate rights and are not relicensed merely by appearing in this repository.

[^1]: Academic Pages. “Academic Pages is a GitHub Pages template for personal and professional portfolio-oriented websites.” https://github.com/academicpages/academicpages.github.io

[^2]: Michael Rose. “Minimal Mistakes Jekyll theme.” https://github.com/mmistakes/minimal-mistakes
