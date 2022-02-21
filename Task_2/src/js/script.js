'use strict';

const title = document.querySelector('h1'),
      paragraph = document.querySelectorAll('p'),
      listHorizont = document.querySelectorAll('#myList'),
      invisible = document.querySelectorAll('span');

      
title.style.cssText = 'background-color: green; width: 500px';

paragraph[0].style.fontWeight = 'bold';
paragraph[1].style.color = 'red';
paragraph[2].style.textDecoration = 'underline';
paragraph[3].style.fontStyle = 'italic';

listHorizont.forEach(item => {
    item.style.cssText = 'display: flex; list-style-type: none';
});

invisible[0].style.display = 'none';