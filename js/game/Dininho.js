function Dininho(context, screen, floorHeight) {
    const dininho = new Image();
    dininho.src = "../../img/game/dininho/correndo/dininho_correndo_1.png";

    const draw = () => {
        dininho.addEventListener('load', () => {
            context.drawImage(dininho, 420, screen.height - dininho.height - (floorHeight * 0.44));
        });
    }
    return {
        draw
    }
}