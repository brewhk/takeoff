# takeoff

<img src="https://cloud.githubusercontent.com/assets/13403405/11977486/47046640-a9be-11e5-9902-cfae9d32e246.png" style="width:120px" alt="Takeoff Logo">

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

There are three main blocks of content - the screens, the text and the decorations.

![takeoff-anatomy](https://cloud.githubusercontent.com/assets/13403405/12696418/905bfec0-c7a5-11e5-9f2d-f41382fe7a28.png)

### Usage

[Download jQuery](https://jquery.com/download/). E.g. Put this in your `<head>`:

    <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>

Include the `EventEmitter.min.js`,`lethargy.min.js`, `smartscroll.min.js`, `takeoff.min.js` (In that order) before the `</body>` closing tag and initiate the plugin.

    <script src="https://rawgit.com/Olical/EventEmitter/master/EventEmitter.min.js"></script>
    <script src="https://rawgit.com/d4nyll/lethargy/master/lethargy.min.js"></script>
    <script src="https://rawgit.com/d4nyll/smartscroll/master/smartscroll.min.js"></script>
    <script src="/js/takeoff.min.js"></script>

We have created a barebone template to help you get started - it contains no content but many comments to guide you along.

Take off!

    <script>
      $(function() {
        $.takeoff({
          changingBackground: true,
          slideDuration: 700
        });
      });
    </script>

You can pass many other options into `$.takeoff()`, as detailed in the following section.

##### Options

###### `changingBackground`

Takeoff can subtly change the background colour of your page between different slides. Set the `changingBackground` option to true and add a `data-tf-background-color` to every `.takeoff__backgroundBlock` element. `.takeoff__backgroundBlock` blocks without a `data-tf-background-color` attribute will have a white (`#ffffff`) background.

    <section class="takeoff__backgroundBlock" data-tf-background-color="#ff556b">
        Section 1
    </section>
