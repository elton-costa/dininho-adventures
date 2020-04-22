'use strict';
((win, doc) => {
    const screen = {
        width: win.innerWidth,
        height: win.innerHeight
    };

    const $canvas = doc.querySelector('#game-dino');
    const context = $canvas.getContext('2d');
    const sky = new Sky(context, screen);
    const floor = new Floor(context, screen);
    const dininho = new Dininho(context, screen, floor.height);
    
    $canvas.width = screen.width;
    $canvas.height = screen.height;

    floor.draw();
    sky.draw();
    dininho.draw();
    
})(window, document);