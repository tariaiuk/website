version 0.3 21/12/19
Latest v0.37 18/01/20

### Design

to have black header with mon  
21/12/19 change: to 2 mon with kanji between
below that a menu bar  
A Responsive design that will also work for iphone5 (325px)    
breakpoints 480, 640, 768, 1024  

Frontpage is "about iaido"

Using tailwind css to help with sizing objects in screen layout. Reason, because I like using it. pros: Flexbox and slim css file produced

As it has static site content therefore using Hugo framework as site generator. Jo's suggestion
### Directory structure
Hugo works on list pages and single pages  
So dojo and sensei are list pages, about and the other level2 files are single pages. - - see below
- about
- dojo  
 - Edinburgh
 - Glasgow
 - Borders
 - Sussex  - listed as 2 pages east and west???
- sensei
 - dojochou
 - space for other dojo leaders???

### Other things
menu is hard coded but could pick up from site config file <config.yaml>

img file URLs are adjusted to fit with live version server setup (not using baseURL)

Hugo makes use of templates, partials and blocks. {{referencing}} of the page/section/etc to import the text of the page.  

Everything is changeable the font, colours, spacing, layout, design, etc
