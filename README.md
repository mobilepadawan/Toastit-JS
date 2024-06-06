# Toast-It JS (Toast messages very easy)
A very simple ultra-tiny toast message Library for the web. (`Less than 3KB (JS + CSS)`). ⚖️

![Built with JavaScript](https://img.shields.io/badge/Built%20with-JavaScript-red?style=for-the-badge&logo=javascript) 

![MIT License](https://img.shields.io/npm/l/toastify-js)

Visit the [Toast-It Official Website](https://mobilepadawan.github.io/Toastit-JS/) for watching "me" in action. 👀

# Summary

[How to use it](#how-to-use-it)
* [CSS configuration](#css-configuration)
* [JS configuration](#js-configuration)
* [CDN alternative](#cdn-alternative)

[Toast-It in action](#toast-it-in-action)
* [First final version](#first-final-version--april-2024)
* [Beta version](#beta-version-work-in-progress)

[The upcoming version](#the-upcoming-features-we-are-working-on-it)
* [Another things in beta phase](#another-things-in-beta-phase)
* [Classic ToastIt CSS stylesheet](#classic-toastit-css-stylesheet)
* [Modern ToastIt CSS stylesheet](#modern-toastit-css-stylesheet)
* [Emoji friendly](#emoji-friendly)
* [How to test modern CSS](#how-to-test-modern-css)



## How to use it
Download the minified version of `toastitv1.0-min.css` and `toastitv1.0-min.js` files and add them into your Web Project using the following sintax:

### CSS configuration
1. Add the CSS file in the `<head>` metatag in every HTML document where you need to use Toast-It.

```HTML
<link rel="stylesheet" href="./css/toastitv1.0.min.css">
```
Or you can also import it into your primary CSS file by importing the toastitv1.0 CSS file via CSS `@import`.

```CSS
@import url("./css/toastitv1.0.min.css");
```

### JS configuration
2. Add to the top of your JS main file the `import` statement for importing the Toast-It JS file. 🔝 
   
```javascript
import ToastIt from "./js/toastitv1.0.min.js";
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
If you prefer to use the CDN version of `Toastit-JS`, please download the minified version of `toastitv1.0-cdn.js` or the minified version of it. 

Remember to declare it in your JS code before the main JS file of your project.

```HTML
<head>
   <script src="./js/toastitv1.0-cdn.min.js"></script>
   <script defer src="./js/main.js"></script>
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
We have launched the final version of `ToastIt JS module` and `ToastIt JS CDN` the first week of April 2024.  The current final version is the `1.0`.

### Beta version (work in progress)
In this beta version `1.1` we are including the posibility to configure a `right`, `center` or `left` position for the Toast message on screen. 
Stay tuned for more information.

```javascript 
ToastIt.now({
            close: true,               // true || false
            style: 'success',          // generic, info, success, warning, error
            timer: 3700,               //max: 10000
            position: 'right',         // left, center, or right 
            message: `I'm a Toast-It message.`
        }
)
```

The current beta version is fully functional but only as a Module Library. If you want to try, don't forget to also download the CSS file. The filename we are working on is `toastitv1.1-beta.js` located at the developers folder.

🤚🏼 Please do not use this version **in Production!**!

<hr>

## The upcoming features (we are working on it)
These features are under revision. We'll inform you throw this way if this features will be available or discarded.

- [x] To stack more than one notification on screen (2024-03-08)
- [x] Use Toast-It JS by CDN referencing
- [x] Let to change the Toast-It position on screen
- [x] Unlock the support for more than 10 seconds of the toast messages
- [ ] Fix the bug of `ToastIt` when its shown from a `<dialog>`with `::backdrop` style
- [ ] Cut or Truncate text messages exceeded in length
- [ ] ~~Automatically hide the 'close' button, to free up space for long message text (discarded)~~
- [ ] To add a fallback action based on double click or double tap over the Toast-It to close the message

### Another things in beta phase

```
🔔 Recently (2024-06-06) the modern CSS file came to its final version.
```

We are developing some additional Stylesheet files to improve the only option offered by `Toast-It JS`. In the coming weeks you can profit the first one, `modern CSS stylesheet`, to replace the default CSS stylesheet. This `new` option will offer a clean and less invasive colour pallette.

### Classic ToastIt CSS stylesheet
![Classic ToastIt CSS stylesheet](https://raw.githubusercontent.com/mobilepadawan/Toastit-JS/main/docs/images/default-css-toastit.png)

### Modern ToastIt CSS stylesheet
![Modern ToastIt CSS stylesheet](https://raw.githubusercontent.com/mobilepadawan/Toastit-JS/main/docs/images/modern-css-toastit.png)

### Emoji friendly
Also the modern CSS stylesheet file is such friendly for using an emoji with the shown message.

![Modern ToastIt CSS stylesheet is emoji friendly](https://raw.githubusercontent.com/mobilepadawan/Toastit-JS/main/docs/images/emoji-css-modern-toastit.png)

### How to test modern CSS
🔔 If you want to try this another CSS Styles, download the `toastitv1.0.modern.css` file from the `/developer` folder. This version can be modified for you if you want to make some improvements over the beta version's code. If you don't want to make improvements, please download a beta version of this CSS located at the `/src` folder.
