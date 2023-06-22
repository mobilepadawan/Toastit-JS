# Toast-It JS
A very simple toast message for the web. (`only 1.57 kb`). ⚖️

Here you have the [Toast-It Website](https://mobilepadawan.github.io/toastit-js/) for watching me in action. 👀

## How to use it
Download the minified version of `toastitv1.0-min.css` and `toastitv1.0-min.js` Toast-It files.
Integrate thes efiles in your Web Project throughthe following sintax:

0. We can't use this JS class as a CDN, yet. In the upcoming version we'll add this optional feature.

```html
<!-- CDN is not supported yet. Please, come back later -->
<script src="../path/to/cdn/library/toastitv1.0-min.js"></script>
```

2. Your JS maing file must be declared as `type="module"`.

### CSS configuration
2. Add the CSS file in the `<head>` metatag in every HTML document where you'll want to use Toast-It.

```CSS
<link rel="stylesheet" href="../path/to/css/library/toastitv1.0-min.css">
```
Or you can also import it into your primary CSS file.

```css
/* For example: if you are using a CSS file called `styles.css`, add the following link at the top of you CSS file. */
@import url("../path/to/css/library/toastitv1.0-min.css");
```
### JS configuration
3. Add to the top of your JS coding file the import statement for JS module files. 🔝 
   
```javascript
import ToastIt from "../path/to/js/library/toastitv1.0-min.js";
```

3. Just configure the 4 basic parameter to start using Toasti-It. ⚙️
   
```javascript
ToastIt.now({
            close: true, 
            style: 'success', 
            timer: 3700, 
            message: 'This is a toast message.' 
        }
)
```

These parameters should be added as an object parameter, into the parenthesis of **.now()** method.

4. Your webapp is ready to enjoy this simple but effective library. 🥂

<hr>

## Toast-It in action

You have an example to show how Toast-It runs in a desktop webapp.

![Toast-It running in a desktop webapp](https://raw.githubusercontent.com/mobilepadawan/toastit-js/main/images/showing-toast-it-in-action-01.gif)

And here is another example about Toast-It running in mobile screens. 
PS: _Please, be careful with the length of text messages to show._

![Toast-It running in a desktop webapp](https://raw.githubusercontent.com/mobilepadawan/toastit-js/main/images/showing-toast-it-in-action-02.gif)

<hr>

### About the messages with an overlength text...
We are evaluating how to solve this thinking a couple of possible scenarios: 
* To cut (truncate) the text messages exceeded in length
* To hide automatically the close button to give its place to the whole text message length.
   * To add a fallback action based on double click or double tap over the Toast-It to close the message
 
**The feature we picked it up will be included in the future versions of its Library.**

<hr>

## Upcoming features (in evaluation)

These features are under revision. We'll inform you throw this way if this features will be available or discarded.

[ ] Use Toast-It JS by CDN referencing.
[ ] Change the position of the Toast in screen.
[ ] Unlock the support for more than 10 seconds of onscreen toast messages.
[ ] To stack more than one notification on screen.
[ ] Cut or truncate text messages exceeded in length.
[ ] Hide automatically the close button to releaf its place to the whole text message length.
