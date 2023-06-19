# Toast-It JS
A very simple toast message for the web.

## How to use it
You just download and refer into your `<head>` and `</head>` HTML file the `toastitv1.0-min.css` and `toastitv1.0-min.js` files.

After that, you should integrar in your JS project code files the following sintax:

1. Your JS coding file should be declared as type="module".
2. Add to the top of your JS coding file the import statement for JS module files.
```javascript
import ToastIt from "../path/to/js-library/toastitv1.0.js";
```

3. Just configure the 4 basic parameter to start using Toasti-It.
```javascript
ToastIt.now({
            close: true, 
            style: 'success', 
            timer: 3700, 
            message: 'This is a toast message.' 
        }
)
```
These parameters should be added as an object parameter, to the **now()** method.

4. You can startign enjoy this simple but effective library.
