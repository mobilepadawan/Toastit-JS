# Toast-It JS (JS library for toast messages)
A very simple ultra-tiny toast message Library for the web. (`only 2.8 kb (JS + CSS)`). ⚖️

![Built with JavaScript](https://img.shields.io/badge/Built%20with-JavaScript-red?style=for-the-badge&logo=javascript) 

![MIT License](https://img.shields.io/npm/l/toastify-js)

There is the [Toast-It Official Website](https://mobilepadawan.github.io/Toastit-JS/) for watching "me" in action. 👀

## How to use it
Download the minified version of `toastitv1.0-min.css` and `toastitv1.0-min.js` files and add them into your Web Project using the following sintax:

### CSS configuration
1. Add the CSS file in the `<head>` metatag in every HTML document where you need to use Toast-It.

```HTML
<link rel="stylesheet" href="../path/to/css/library/toastitv1.0.min.css">
```
Or you can also import it into your primary CSS file by importing the toastitv1.0 CSS file via CSS `@import`.

```CSS
@import url("../path/to/css/libraries/toastitv1.0.min.css");
```

### JS configuration
2. Add to the top of your JS main file the `import` statement for importing the Toast-It JS file. 🔝 
   
```javascript
import ToastIt from "../path/to/js/libraries/toastitv1.0.min.js";
```

3. Just configure the onlny four basic parameters to start using Toasti-It. ⚙️
   
```javascript
ToastIt.now({
            close: true,            // true || false
            style: 'success',       // generic, info, success, warning, error
            timer: 3700,            //max: 10000
            message: `I'm a Toast-It message.` 
        }
)
```

These parameters must be added using a literal object structure into the parenthesis of the `.now()` method.

4. Your webapp is ready to enjoy this simple but effective library.
   1. The main main JS file(s) where you declare `Toast-It JS` must be declared as `type="module"`.
   2. We can't use this JS library as a CDN, yet. In the upcoming version we'll add this optional feature.

### CDN alternative
If you prefer to use the CDN version of `Toastit-JS`, please download the minified version of `toastitv1.0-cdn.js`. 

```HTML
<head>
   <script src="path/to/js/libraries/toastitv1.0-cdn.min.js"></script>
</head>
```

The CSS file is the same for both JS libraries.

<hr>

## Toast-It in action

Watch the following example where you can show how Toast-It runs in a desktop webapp.

![Toast-It running in a desktop webapp](https://raw.githubusercontent.com/mobilepadawan/Toastit-JS/main/docs/images/showing-toast-it-in-action-01.gif)

And here is another example to watch about Toast-It runs in mobile screens.
PS: _Please, be always consistency with the length of toast messages to show._

![Toast-It running in a desktop webapp](https://raw.githubusercontent.com/mobilepadawan/Toastit-JS/main/docs/images/showing-toast-it-in-action-02.gif)

<hr>

### First final version (📆 April 2024)
We have launched the final version of `ToastIt JS module` and `ToastIt JS CDN` the first days of April 2024.  The current final version is the `1.0`.

### Beta version (work in progress)
In this beta version `1.1` we are including the posibility to configure a `right`, `center` or `left` position for the Toast message on screen. Stayed tune for more information.

```javascript
ToastIt.now({
            close: true,               // true || false
            style: 'success',          // generic, info, success, warning, error
            timer: 3700,               //max: 10000
            message: `I'm a Toast-It message.`,
            position: 'right'          // left, center, or right 
        }
)
```

The current beta version is fully functional but only as a Module Library. If you want to try, don't forget to also download the CSS file. The filename we are working on is `toastitv1.1-beta.js` located at the developers folder.

🤚🏼 Please do not use this version for **Products in Production!**!

<hr>

## The upcoming features (we are working on it)
These features are under revision. We'll inform you throw this way if this features will be available or discarded.

- [x] To stack more than one notification on screen. (2024-03-08)
- [x] Use Toast-It JS by CDN referencing.
- [x] Let to change the Toast-It position on screen.
- [x] Unlock the support for more than 10 seconds of the toast messages.
- [ ] Fix the HTML <dialog> issue when ToastIt is shown behind the ::backdrop style
- [ ] Cut or truncate text messages exceeded in length.
- [ ] Automatically hide the 'close' button, to free up space for long message text.
   * _To add a fallback action based on double click or double tap over the Toast-It to close the message_

