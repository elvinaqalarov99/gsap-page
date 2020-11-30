const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');


const tl = new TimelineMax();

tl.fromTo(
	hero,
	1,
	{ height: "0%" },{height: "80%",ease: Power2.easeInOut}
).fromTo(
	hero,
	1.2,
	{width: "100%"},{width: "80%",ease: Power2.easeInOut}
).fromTo(
	slider,
	1,
	{x:"-100%"},
	{x: "0%"},
	"-=0.5"
).fromTo(
	logo,
	1.5,
	{x: -500},
	{x: 0,ease: Power2.easeInOut},
	'-=1'
).fromTo(
	hamburger,
	1.5,
	{x: 500},
	{x: 0,ease: Power2.easeInOut},
	'-=1.5'
).fromTo(
	headline,
	1,
	{opacity:0},
	{opacity:1},
	'-=1'
);