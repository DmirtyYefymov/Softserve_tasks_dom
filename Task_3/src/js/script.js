'use strict';

const btn = document.querySelector('button'),
      wrapper = document.querySelectorAll('p');

function showText() {
    let text = document.getElementById('text');
	let out = '';
    wrapper.forEach (() => {
        btn.addEventListener('mouseover', () => {
            out += `<p>Mouse on me!</p>`;
            text.innerHTML = out;
        });
        btn.addEventListener('mouseout', () => {
            out += `<p>Mouse is not on me!</p>`;
            text.innerHTML = out;
        });
        btn.addEventListener('click', () => {
            out += `<p>I was pressed!</p>`;
            text.innerHTML = out;
        });
    });
}
showText();