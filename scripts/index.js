class GmRollMessage extends Application {
    constructor() {
        super();

        Hooks.on("chatMessage", (app, html, data) => {
            console.log(data);
            if ((data.type === "gmroll") || (data.type === "blindroll")) {
                AudioHelper.play({src: CONFIG.sounds.dice});
                ChatMessage.create({
                    user: game.user._id,
                    speaker: { actor: this.actor },
                    content: "<i>Rolled some hidden dice.</i>"
                });
            }
        });
    }
}

let app = new GmRollMessage();
