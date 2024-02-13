# Frontend Mentor - Recipe page solution

![Design preview for the Recipe page coding challenge](./design/desktop-preview.jpg)

This is a solution to the [Recipe page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview

Users should be able to:

- View the optimal layout depending on their device's screen size.

### Links

- Live Site URL: https://pohhjie.github.io/frontend-mentor-challenges/ch-05/

## Development process

The objective of this challenge is to rely on my 'eye-power' to replicate the design of this recipe page and pay close attention to the design details to the best of my abilities.

I started by creating a new directory "ch-05" to house these project files and templates for the challenge hosted it onto Github.

For the fonts (Outfit and Young Serif), I used Google CDN instead of using the provided TTF files. These fonts are already hosted on Google's servers, which are distributed worldwide and closer to the user's location, optimizing bandwidth and reducing latency.

Since I'm only using CSS for this challenge, I've included normalize.css (by Nicolas Gallagher) to establish consistent styling across browsers. Additionally, I've incorporated a barebone CSS template from Dave Gamache. Admittedly, it may be a little overkill for a simple challenge like this, but I do plan to build my own custom and lightweight CSS framework someday. Therefore, I view this as a starting point. Of course, for anyone else who simply wants to complete the challenge, it's better to create your own CSS code. You can refer to the 'Useful Resources' section for the works that I have referenced.

To speed up development, I used [Live Server by Ritwick Dey](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension from Visual Studio Marketplace (as I'm using VS Code) that helps automatically refresh my page whenever I make any changes to the HTML layout or CSS styling. Overall, it's takes about an hour to complete both desktop and mobile designs. 

Finally for mobile responsiveness, as there isn't any specific requirement under what sizes (in width) should break for mobile. I tried to make my own judgement and only break when the screen is lower than 550px (Typically the size of a phablet).
 
### Built with

- Semantic HTML5 markup
- CSS3 (Grid, Flexbox, CSS variables)
- Visual Studio Code as my IDE

### Useful resources 

- [necolas/normalize.css](https://github.com/necolas/normalize.css/) - Kudos to Nicolas Gallagher for his work on normalize.css
- [dhg/Skeleton](http://getskeleton.com/) - A dead simple, responsive boilerplate for CSS by Dave Gamache. I use this as a starting point for my CSS styling in this challenge and tweak accordingly.


