# Gaia Code Challenge

### Getting Started

##### Checkout this repo, install dependencies, then start:

```
> git clone https://github.com/melissjs/GCC.git
> cd GCC
> npm install
> npm start
```

### For Transparency

##### I used a boilerplate project for webpack configuration:


* https://github.com/StephenGrider/ReduxSimpleStarter
* this boilerplate also has an existing configuration for testing


### Known Issues

##### There are a few issues I moved on from for the sake of expediency:


* video tile uniformity in the grid breaks down on loading more (maybe flexbox related?)
* concatenating episode/series titles caused flexbox related issues so I allowed them to wrap
* select option dropdown menu not styled (used the default select element when I should have used a div?)
* BEM naming conventions could be better


##### In hindsight I would have changed:


* as specified, video tiles are both a child and parent component but I understand now that the child should have been a vote component; breaking out the thumbnail and details into separate components had no advantage


##### Given more time:


* I would experiment with immutableJS, I see where I could have used it in my caching data structure.
* I would successfully implement tests, I got really stuck with moxios and ran out of time



