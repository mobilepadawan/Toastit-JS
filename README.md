# Toast-It JS (a JavaScript library for toast messages)
A very simple ultra-tiny toast message Library for the web. (`only 4.55 kb`). ⚖️

![Built with JavaScript](https://img.shields.io/badge/Built%20with-JavaScript-red?style=for-the-badge&logo=javascript)

![MIT License](https://img.shields.io/npm/l/toastify-js)

Here you have the [Toast-It Website](https://mobilepadawan.github.io/toastit-js/) for watching me in action. 👀

## How to use it
Download the minified version of `toastitv1.0-min.css` and `toastitv1.0-min.js` files and add them into your Web Project using the following sintax:

### CSS configuration
1. Add the CSS file in the `<head>` metatag in every HTML document where you need to use Toast-It.

```HTML
   <link rel="stylesheet" href="../path/to/css/library/toastitv1.0-min.css">
```
Or you can also import it into your primary CSS file.

```CSS
/* e.g. if you are using a CSS file called `styles.css`, 
   add the following link at the top of you CSS file. */

   @import url("../path/to/css/library/toastitv1.0-min.css");
```

### JS configuration
2. Add to the top of your JS main file the `import` statement to import the Toast-It JS file. 🔝 
   
```javascript
import ToastIt from "../path/to/js/library/toastitv1.0-min.js";
```

3. Just configure the four basic parameters to start using Toasti-It. ⚙️
   
```javascript
ToastIt.now({
            close: true,            // true || false
            style: 'success',       // generic, info, success, warning, error
            timer: 3700,            //max: 10000
            message: `I'm a Toast-It message.` 
        }
)
```

These parameters must be added as an object parameter, into the parenthesis of the `.now()` method.

4. Your webapp is ready to enjoy this simple but effective library. 🥂
   1. Your main JS file and/or the JS files where you'll reference Toast-It JS must be declared as `type="module"`.
   2. We can't use this JS library as a CDN, yet. In the upcoming version we'll add this optional feature.


<hr>

## Toast-It in action

You have an example to show how Toast-It runs in a desktop webapp.

![Toast-It running in a desktop webapp](https://raw.githubusercontent.com/mobilepadawan/toastit-js/main/images/showing-toast-it-in-action-01.gif)

And here is another example about Toast-It running in mobile screens. 
PS: _Please, be consistency with the length of toast messages to show._

![Toast-It running in a desktop webapp](https://raw.githubusercontent.com/mobilepadawan/toastit-js/main/images/showing-toast-it-in-action-02.gif)

<hr>

### About the messages with an overlength text...
We are evaluating how to solve this thinking a couple of possible scenarios. This issue is in the bellow list of tasks to improve the library in the upcoming weeks. 

**The feature we picked it up will be included in the future versions of its Library.**

<hr>

## The upcoming features (we are working on it)

These features are under revision. We'll inform you throw this way if this features will be available or discarded.

- [ ] Use Toast-It JS by CDN referencing.
- [ ] Let to change the Toast-It position on screen.
- [ ] Unlock the support for more than 10 seconds of the toast messages.
- [ ] To stack more than one notification on screen.
- [ ] Cut or truncate text messages exceeded in length.
- [ ] Automatically hide the 'close' button, to free up space for long message text.
   * _To add a fallback action based on double click or double tap over the Toast-It to close the message_

