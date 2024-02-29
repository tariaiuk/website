# Tokyo Adachi Roshukai UK

This is a static website built with Jekyll, a simple, blog-aware, static site generator. The website is automatically deployed to GitHub Pages.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you start, ensure you have the following installed on your machine:

- **Ruby version 2.5.0 or higher**: Jekyll requires Ruby to run. You can check if you have Ruby installed and its version by running `ruby -v` in your terminal. If you don't have Ruby installed, you can download it from the [official Ruby website](https://www.ruby-lang.org/en/downloads/).

- **RubyGems**: RubyGems is a package manager for Ruby that will help you install Jekyll. You can check if you have RubyGems installed by running `gem -v` in your terminal. If you don't have RubyGems installed, it should be installed automatically when you install Ruby.

- **GCC and Make**: To further extend site in the future, potentially those might be requered to build native extensions for some of the gems used by Jekyll. You can check if you have GCC installed by running `gcc -v` and Make by running `make -v` in your terminal. If you don't have these installed, you can download them from the [GCC website](https://gcc.gnu.org/install/index.html) and the [GNU Make website](https://www.gnu.org/software/make/). If you're on a Mac, you can also install these by installing the Xcode Command Line Tools with `xcode-select --install`.

### Installation

1. **Install Jekyll and bundler gems**:

```
gem install jekyll bundler
```
2. **Clone the repository**:
```
git clone https://github.com/tariaiuk/tariaiuk.github.io.git
```
3. **Change into your new directory**:
```
cd repository
```
4. **Install gems from the Gemfile**:
```
bundle install
```
5. **Build the site and make it available on a local server**:
```
bundle exec jekyll serve
```
Now browse to http://localhost:4000


## Setting Up GitHub Pages with a Custom Domain

GitHub Pages allows you to host your project directly from your GitHub repository. Here's how to set it up with a custom domain:

1. **Create a Repository**: If you want your site to be hosted at `<username>.github.io`, your repository should be named `<username>.github.io`. However, if you're using a custom domain, you can name your repository anything you like.

2. **Enable GitHub Pages**: Go to your GitHub repository and click on "Settings". Scroll down to the "GitHub Pages" section. Select the branch you want to deploy from (usually `main` or `gh-pages`), and save.

3. **Add a CNAME file**: In the root of your repository, create a file named `CNAME`. In this file, add your domain name (e.g., `www.yourdomain.com`). Commit and push this file to your repository.

4. **Configure your Domain Provider**: Log in to your domain provider's website and navigate to the DNS settings for your domain. You need to add a few records here:

    - For an apex domain (`yourdomain.com`), add four `A` records with the following IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
    - For a `www` subdomain (`www.yourdomain.com`), add a `CNAME` record pointing to `yourusername.github.io`.

5. **Enforce HTTPS**: Go back to the "GitHub Pages" section in your repository settings. Check the "Enforce HTTPS" box to ensure your website is served over HTTPS.

Please note that DNS changes can take up to 24-48 hours to propagate across the internet.

For more detailed instructions, refer to the [GitHub Pages documentation](https://docs.github.com/en/pages).



## Project Structure

This project has a specific structure to organize the content and templates:

- **_layouts**: This directory contains two templates: `page.html` and `dojo.html`. The `page.html` template is the default one used for most pages, while the `dojo.html` template is specific to the dojo view card, which includes dojo summary cards on the top and a sensei pic + bio section.

- **_dojos**: This directory is a Jekyll collection configured in `_config.yml`. It contains individual files for each dojo, with a number prefix to organize them in a map-view order from the top-left to the bottom-right of the UK.

- **assets**: This directory contains the CSS, images, and JavaScript used in the project. The CSS files are in `assets/css`, the images are in `assets/images`, and the JavaScript files are in the root of the `assets` directory.

- **assets/responsiveHeaderFooter.js**: This JavaScript file is responsible for dynamically replacing text and images to better suit different screen resolutions. It also contains the code for the back-to-the-top button.

- **Standard Pages**: There are three standard pages: "About" (which is the root index page), "Lineage", and "Dojos". These pages use the `page.html` layout and are located in the root directory and in the `dojos` and `lineage` directories.

## Project Styles

Across the website we use minimal, elegant, sophisticated style rich in sumi-e and charcoal traditional artworks.
With the exception of colour-inverted header, the text is black and is always against the white background.
We use brown colour as the support colour -- for things like links, border lines, map pins, back to the top of the page button. 
Brown is chosen over red to represent the elegance of our lineage and makes the appearance more profound.

For transliterated Japanese terms appearing for the first time on the page we use kanji in brackets in bold with lose translation if possible/applies. We use terms Dojo, Sensei, Senpai, Iai, Iaijutsu, Iaido from apperrcase throughout the whole website.

### Picture embed
Pictures are embedded into `.md` templates (or `html` _layouts templates) using the base style and one of the two containers:
1. **image-container**: defines things like default margin, top-bottom borders, maxing image widthh while keeping proportions, limiting max image height.
2. **single-image-container**: focuses on the best display of a single image, optionally with caption
```
<div class="image-container single-image-container">
    <img src="/assets/images/2023_memorial_seminar.jpg" alt="2023 Susseex seminar">
    <p>2023: Tokyo Adachi Roshukai seminar in Sussex</p>
</div>
```
3. **grid-image-container**: focuses on the display of two images (three or more are impractical due to the mobile/desktop scaling and relation to the text). Works together with `image-with-caption-item`, has screen-width adaptation (becomes vertical for small screens). For the best effects use square images.
```
<div class="image-container grid-image-container">
    <div class="image-with-caption-item">
        <img src="../assets/images/dojos/kensaki-nats-2019.jpg" alt="BKA Nationals 2019">
        <p>BKA Nationals 2019</p>
    </div>
    <div class="image-with-caption-item">
        <img src="../assets/images/dojos/Glasgow-summer19.jpg" alt="Glasgow summer 2019">
        <p>Open air practiice 2019</p>
    </div>
</div>
```

### Picture-button embed
We use picture-buttons defined with `image-with-caption-button` style. It can be used within a grid or standalone on the page:
1. **Standalone** style is specified in combination with `centered-image-button` which makes the button a circle. Currently we have only two buttons of this type - Honda family mon and BKA link. There is a dynamic adjustment of the width of this button to the width of the screen:
```
<div class="centered-image-button image-with-caption-button">
    <a href="https://www.britishkendoassociation.com/">
        <img src="assets/images/bka-logo_m.png" alt="British Kendo Association">
        <p>British Kendo Association</p>
    </a>
</div>
```
2. **Grid** those buttons are only used for now in dojo links summary and this are square:
```
    {% for dojo in site.dojos %}
        <div class="image-with-caption-button">
            <a href="{{ dojo.url }}">
                <img src="../assets/images/dojos/{{ dojo.dojo-avatar }}" alt="{{ dojo.title }}">
                <p>{{ dojo.title }}</p>
            </a>
        </div>
    {% endfor %}
```

### Artworks
Most of the artworks were generated with Dall-e using multiple iterations of adjusting keywords, many pictures need to be edited afterwards for a complete effect (the AI for now is very bad in generating swords correctly or understanding that we don't want one on the picture). 

For example the `dojos/avatar_default_f.png` was starting from requesting:
```
Draw a female samurai in round hat in the sumi-e style. Imagine that we are creating an avatar of iaidoka, but the hat covers face as she looks down. Please add subtle Japanese flowers in the background. Please keep picture 2D
```
To the following succeeding on the second attempt:
```
Create a drawing of a Japanese woman warrior without the use of  weapons on the drawing, focusing instead on her posture and expression to convey her strength and determination. Her stance is confident and composed, reflecting her martial prowess and resilience. She holds the fan in a way that covers her face, allowing only her determined eyes to be fully visible, showcasing her readiness and focus. She wears a round hat, symbolizing her warrior status. The background, featuring cherry blossoms, is rendered in a bold and expressive manner, yet maintaining the delicate balance of the scene. The artwork, executed in the sumi-e style, uses dynamic brush strokes and a monochromatic palette to capture the essence of the warrior's spirit in a traditional Japanese ink painting, ensuring the composition remains 2D and faithful to the aesthetic.
```
Originals are kept for all cases possible, but for the website `-s.png` are used -- manually resized with the knowledge of max possible size of a given image. This is to improve page loading time.

There are several more specific artworks for which `gimp` original files (`.xcf`) are stored:
* `gb_map.xcf` features the charcoal-style background map of the UK, with TAR pins added as layers on the top. To add dojo, duplicate the pin layer and put it to the approximate correct location on top of the picture. Export to `dojo_map.png`
* `butterfly-full-size.xcf` features the animation of the back-to-top button's butterfly, layers are named in order with durations per frame setting the timing of the flight. Please note that browsers vary on minimal frame length, and we shouldn't go below `50ms`. Export to `buttefly-flight.gif`


