const postsData = {
    author: 'Robin Goetz',
    heading: `Let's learn Solid.js quickly, by creating a useDebounce hook`,
    postDate: 'Mar 2',
    readTime: '8 min read',
    content: `Disclaimer: I'm not a Solid.js affiliate in any ways, and also I'm not experienced enough with Solid.js (~2days!) to claim what I write here is "good solid.js code" or even "correct".
    Introduction
    Although I started learning Solid.js just two days ago, I feel it's made me very productive. One thing I tried to do with it as a first personal exercise, was creating a "drawer" (drawers are those menus that enter the page from one side, in case you didn't know).
    
    I wrote just a few lines of very understandable (read "lovely") code, and then voila, it worked!
    
    At this point, I felt very happy with the journey I'd begun, so I decided to do a second exercise: To make the drawer "less crazy"! I.e., I didn't want it to expand "just when the mouse started hovering on it", I wanted it to "wait" for some time (a delay) and let the user make up their mind whether they actually wanted the drawer to open or not. So I needed a debouncer! (Don't worry if you don't know what it is, I'll explain).
    
    It happened to be an interesting exercise in the end, and it taught me more of Solid's API, so I decided to share it with other peer learners (you!) too. Don't worry if you don't know any Solid.js, I'll try to explain things bit by bit.
    
    What is Debouncing?
    To me, debouncing means "not jumping into conclusions". A practical example of when a debouncer can be useful is, when the user is typing letters into a search box, and you want to "trigger the search as the user types", you think this would be great UX, the user doesn't have to click/tap the magnifier (search) button, however, there's an issue with this great idea, EVERY letter that the user types, will make a call to your backend..., which is wasteful. Actually, it could even be "bad UX", assume the search box reacting to every letter instantly as the user types, they might feel the search box is made by a crazy developer!
    
    Solid.js Quick Start Tutorial
    Reactivity
    The general idea of UI frameworks is to make views react automatically to changes to "the state of the data" (aka, just "the state"). This makes it way easier to write and reason about UI code, compared to using a bunch of event listeners here and there to "manually" update views once the data has changed.
    
    Signals
    Solid uses the term "signal" for state (data). Well of course that might not be a precise definition of signals, but it's good enough for the beginning. Let's continue the talk in code (which is not cheap, hopefully!)`
}

module.exports = postsData;