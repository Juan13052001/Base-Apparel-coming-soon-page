# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Base Apparel coming soon page solution](#frontend-mentor---base-apparel-coming-soon-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

**Desktop**

![](/images/Captura%20web_17-2-2022_131936_127.0.0.1.jpeg)

**Mobile**

![](/images/Captura%20web_17-2-2022_131750_127.0.0.1.jpeg)

**Status active**
![](/images/Captura%20web_17-2-2022_131956_127.0.0.1.jpeg)

### Links

- Solution URL: [GitHub](https://github.com/Juan13052001/Base-Apparel-coming-soon-page)
- Live Site URL: [Live Site](https://juan13052001.github.io/Base-Apparel-coming-soon-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- JS

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

In the HTML I used media queries so that I can change the image with respect to the screen size.
In the CSS I set the error icon and text to disappear from the screen and appear on the screen.
In the JavaScript code I used these classes to add the error text and to make the error icon appear if it does not meet the validation conditions of the regular expression

```html
<div class="image">
  <picture class="image-hero">
      <source
      media="(max-width:375px)"
      srcset="images/hero-mobile.jpg"/>
      <img src="images/hero-desktop.jpg" alt="hero-desktop" />
  </picture>
</div>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
form.addEventListener("submit", (e) => {
    const RegEmail = /^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/;
    e.preventDefault();
    const email = texto.value;
    console.log(email);
    if (email == "" || email === undefined) {
        icon.classList.add("hidden");
        textError.innerHTML = "Please provide a valid email";
    } else {
        icon.classList.remove("hidden");
        textError.style.display = "none";
    }
});
```

## Author

- Frontend Mentor - [@Juan13052001](https://www.frontendmentor.io/profile/Juan13052001)

