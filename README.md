# takeoff

<img src="https://cloud.githubusercontent.com/assets/13403405/11977485/47044818-a9be-11e5-82d6-2158a3482f1d.png" width="120" alt="Takeoff Logo">

A smooth landing page to help your app take off!

### Demo

A [demo](http://takeoff.brew.com.hk/) speaks a thousand words.

### Dependencies

* [jQuery](https://jquery.com/)
* [EventEmitter](https://github.com/Olical/EventEmitter)
* [Lethargy](https://github.com/d4nyll/lethargy) (Soft dependency)
* [smartscroll](https://github.com/d4nyll/smartscroll)

### Getting Started

Download the repository and have a look at the [examples](https://github.com/brewhk/takeoff/tree/master/examples). If you get stuck, refer back to these examples.

Elements with an `id` or `class` beginning with `takeoff__` has a function within Takeoff. You may add additional classes but do not change or remove the `takeoff__` ID/class.

##### Structure

The landing page is made up of a header and/or footer, and a series of *slides*. Every *slide* has three blocks - the screens, the texts, the decorations.

![takeoff-anatomy](https://cloud.githubusercontent.com/assets/13403405/12696418/905bfec0-c7a5-11e5-9f2d-f41382fe7a28.png)

The header and footer will stay in place, but the slides can be changed with up/down scroll, keyboard and swipe.

##### Theme

The look of your page is determined by the theme, which is just a CSS file on top of the base CSS. Use this to position and scale your decorations. In the examples, the theme files are named after the theme's name.

### Usage

We have created a barebone [template](https://github.com/brewhk/takeoff/tree/master/template) to help you get started - it contains no content but many comments to guide you along.

1. Add in your title, favicons, theme CSS, header and footer
2. Add your screens, text blocks and decoration blocks. Make sure the quantity of blocks of each type is the same.
3. Download and include the `EventEmitter.min.js`,`lethargy.min.js`, `smartscroll.min.js`, `takeoff.min.js` (***in that order***) before the `</body>` closing tag and initiate the plugin.

     <script src="https://rawgit.com/Olical/EventEmitter/master/EventEmitter.min.js"></script>
     <script src="https://rawgit.com/d4nyll/lethargy/master/lethargy.min.js"></script>
     <script src="https://rawgit.com/d4nyll/smartscroll/master/smartscroll.min.js"></script>
     <script src="/js/takeoff.min.js"></script>

 > You may wish to combine and minify the `.js` files into one file. Just be sure to keep the load order described above.

4. Initiate and take off!

     <script>
       $(function() {
         $.takeoff({
           changingBackground: true,
           slideDuration: 700
         });
       });
     </script>

 You can pass an options object into `$.takeoff()`; the properties are detailed in the following section.

##### Options

###### `changingBackground`

Takeoff can subtly change the background colour of your page between different slides. Set the `changingBackground` option to true and add a `data-tf-background-color` to every `.takeoff__backgroundBlock` element. `.takeoff__backgroundBlock` blocks without a `data-tf-background-color` attribute will have a white (`#ffffff`) background.

    <section class="takeoff__backgroundBlock" data-tf-background-color="#ff556b">
        Section 1
    </section>

###### `slideDuration`

The duration of the slide animation, in miliseconds (ms).
