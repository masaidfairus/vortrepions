// Preloader Animation
function startLouder() {
    let counterElement = document.querySelector(".counter");
    let currentValue = 0;

    function updateCounter() {
        if (currentValue >= 100) {
            currentValue = 100; // Ensure it doesn't go above 100
            counterElement.textContent = `0.${currentValue.toString().padStart(3, '0')}`;
            return;
        }

        currentValue += Math.floor(Math.random() * 10) + 1;

        if (currentValue > 100) {
            currentValue = 100;
        }

        // Display the counter as 0.000 to 0.100
        counterElement.textContent = `0.${currentValue.toString().padStart(3, '0')}`;

        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
    }

    updateCounter();
}

startLouder();

  // gsap code here!
    gsap.to(".counter", 0.25, {
        delay: 3.5,
        opacity: 0,
    });

    gsap.to(".opening", 1.5, {
        delay: 3.5,
        opacity: 1,
        ease:"power4.inOut",
    });

    gsap.to(".opening", 1.5, {
        delay: 4.5,
        opacity: 0,
        ease:"power4.inOut",
    });

    gsap.from(".img-up", 1.5, {
        delay: 5,
        x: 1000,
        stagger: {
            amount: 0.5,
        },
        ease:"power4.inOut",
    });

    gsap.from(".img-down", 1.5, {
        delay: 5,
        x: -1000,
        stagger: {
            amount: 0.5,
        },
        ease:"power4.inOut",
    });

    gsap.to(".img-up", 1.5, {
        delay: 6,
        y: 1000,
        stagger: {
            amount: 0.5,
        },
        ease:"power4.inOut",
    });

    gsap.to(".img-down", 1.5, {
        delay: 6,
        y: -1000,
        stagger: {
            amount: 0.5,
        },
        ease:"power4.inOut",
    });

    gsap.to(".overlay", 1.5, {
        delay: 6,
        opacity: 0,
        stagger: {
            amount: 0.5,
        },
        ease:"power4.inOut",
    });


    gsap.from(".h1", 1.5, {
        delay: 6.5,
        y: 700,
        stagger: {
            amount: 0.5,
        },
        ease:"power4.inOut",
    });

    gsap.from(".hero", 2, {
        delay: 7,
        y: 400,
        ease:"power4.inOut",
    });

// Go to the top of the page