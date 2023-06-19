# Toast-It JS
A very simple toast message for the web. (`only 1.57 kb`)

## How to use it
Download the minified version of `toastitv1.0-min.css` and `toastitv1.0-min.js` Toast-It files.
Integrate thes efiles in your Web Project throughthe following sintax:

1. Your JS maing file must be declared as `type="module"`.

### CSS configuration
2. Add the CSS file in the `<head>` metatag in every HTML document where you'll want to use Toast-It.

```CSS
<link rel="stylesheet" href="../path/to/css/library/toastitv1.0.css">
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

You have an example to show how runs Toast-It in a desktop webapp.

![Toast-It running in a desktop webapp](https://raw.githubusercontent.com/mobilepadawan/toastit-js/main/ToastIt-JS/images/showing-toast-it-in-action-01.gif)


