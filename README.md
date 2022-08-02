
# :paintbrush: Etch A Sketch

![Image of the page](https://github.com/e-meyer/etch-a-sketch/blob/main/images/final-layout.png)

A repository to show my solution for the [Etch-A-Sketch](https://www.theodinproject.com/lessons/foundations-etch-a-sketch) project from [TheOdinProject](https://theodinproject.com). There's only the landing page, where the main component is the grid where you can draw whatever you want.

## :scroll: Walkthrough

This project really tested out my JavaScript and google skills. It was meant to be hard, and for the most part, it really was. 

### Setting up the grid

When going throught TheOdinProject materials, it's possible to notice that there are some lessons that use HTML Canvas to show some coding examples. So, I thought I should give it a try... and that was definetly the worst possibility I could think of. It's not worth mentioning how I tried to implement it but, anyway, the result was awful.

As I did not know how to use the Grid properties just yet, I then tried using Flexbox to place the grid elements. So I hardcoded the padding of each square and calculated the height x width (multiplicating padding of each square by 2 and then by 16 - the number of squares), to then get the height and width of the grid. 

Calculating looked like the best option overall because of the possibility to let the user choose the size of the grid later on, but the grid squares would go to the next line everytime using flexbox. That has definetly something to do with the `flex-wrap` property.

> Once the browser shrinked, the grid would get messy and not respect the width and height anymore. Even letting the user set the grid size wouldn't be an option if I couldn't make it work for a presetted size.

Maybe setting the height and width of the whole grid and calculating the padding for each square would be a better approach, but I stopped trying to work with Flexbox and started **learning Grid**. And that was definetly a **key turning point**.

First, I changed the `display` of the grid div to `display: grid`. Then all I had to do was, when executing the grid maker function after the grid size slider was changed,  set `grid-template-columns`and `grid-template-rows` to the size gotten from the range slider, where each element of the grid would fill `1fr` of it, so:

    grid.style.gridTemplateColumns = `repeat({$gridSize}, 1fr)`
    grid.style.gridTemplateRows = `repeat({$gridSize}, 1fr)`

and then suddenly all my problems _with the grid_ were solved.

### Adding events

The second major problem I had was dealing with the mouse events, because I wanted it to be possible to click and drag to paint instead of just using `mousemove` to paint whenever the grid element is hovered or `click` to paint when it's clicked.

This was a little easier to deal with than the previous one, but a little tricky. I created a variable updates everytime the event `mousedown` and `mouseup` are triggered. When the user clicks and holds down the mouse button, the variable is set to true. If it's up, the value is false. So when the grid element div would trigger listening to the `mousemove` event, it would also check the status of `mouseDown` variable. If it is false, it returns and does not change the color. If it is true, then the color of the div will be changed.

## :abacus: Languages

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>

<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>

## :flower_playing_cards: Live version

You can check the live version clicking <a href="https://e-meyer.github.io/etch-a-sketch/">here</a>.


