gsap.registerPlugin(Draggable);

const glassBox = document.querySelector(".liquid-glass");

window.addEventListener("DOMContentLoaded", () => {
    Draggable.create(glassBox, {
        type: "x,y",
        inertia: true,
        trigger: ".glass-drag-handle",
        onRelease: function () {
            gsap.to(this.target, {
                x: 0,
                y: 0,
                duration: 1.5,
                ease: "elastic.out(1, 0.3)",
            });
        },
    });
});
