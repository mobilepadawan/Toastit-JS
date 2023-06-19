# Toast-It JS
A very simple toast message for the web. (`only 1.57 kb`)

## How to use it
Download the minified version of `toastitv1.0-min.css` and `toastitv1.0-min.js` Toast-It files.
Integrate thes efiles in your Web Project throughthe following sintax:

1. **Your JS main file must be declared as `type="module"`. Owr JS file is very lightweight but, if you can improve the HTML loading performance, add the `defer` attribute in your JS file declaration. Here is an example:**

```javascript
<script defer type="module" src="src/js/index.js"></script>
```
The `defer` attribute helps you to declare the JS files into the `<head>` metatag section, avoiding to declare it at the bottom of the HTML document. 

### CSS configuration
2. **Add the CSS file in the `<head>` metatag in every HTML document where you'll want to use Toast-It.**

```css
<link rel="stylesheet" href="path/to/css/library/toastitv1.0.css">
```

Or you can also import it into your primary CSS file.

```css
/* IE: You have a CSS file called `styles.css`.
   Just add this link at the top of it. */
@import url("../path/to/css/library/toastitv1.0-min.css");
```
### JS configuration
3. **Add to the top of your JS coding file the import statement for JS module files. 🔝 **
   
```javascript
import ToastIt from "../path/to/js/library/toastitv1.0-min.js";
```

3. **Just configure the 4 basic parameter to start using Toasti-It. ⚙️ **
   
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

4. ** Your webapp is ready to enjoy this simple but effective library. 🥂 **

<hr>

## Toast-It in action

Here os an example to show how Toast-It runs in a desktop webapp.

![Toast-It running in a desktop webapp](https://raw.githubusercontent.com/mobilepadawan/toastit-js/main/ToastIt-JS/images/showing-toast-it-in-action-01.gif)

And here is another example about Toast-It running in mobile screens. 
PS: _Please, be careful with the length of text messages to show._

![Toast-It running in a desktop webapp](https://raw.githubusercontent.com/mobilepadawan/toastit-js/main/ToastIt-JS/images/showing-toast-it-in-action-02.gif)

<hr>

### About toast messages with an overlength text...
We are evaluating how to solve this, thinking a couple of possible scenarios: 
* To cut (truncate) the text messages exceeded in length, by adding three dots (...) at the end ot it and representing the complete message in the `title` attribute of the Toast message. _(just for reading in desktop applications)_
* To hide automatically the close button to give its place to the whole text message length.
   * adding a fallback action based on double click or double tap over the Toast-It to close the message

<hr>

**The feature to be chosen it up between 👆 both of listed up, will be included in a future version of this Library.**