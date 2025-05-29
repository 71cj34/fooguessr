function pulseElement(id, color, bgcolor) {
    const el = document.getElementById(id);
    if (!el) {
        console.warn(`Element with id "${id}" not found.`);
        return;
    }

    if (!el.dataset.originalColor) {
        el.dataset.originalColor = el.style.color || getComputedStyle(el).color;
        el.dataset.originalBg = el.style.backgroundColor || getComputedStyle(el).backgroundColor;
    }

    const originalColor = el.dataset.originalColor;
    const originalBg = el.dataset.originalBg;


    if (el.dataset.pulseTimeout) {
        clearTimeout(el.dataset.pulseTimeout);
        delete el.dataset.pulseTimeout;
    }

    if (el.dataset.transitionTimeout) {
        clearTimeout(el.dataset.transitionTimeout);
        delete el.dataset.transitionTimeout;
    }

    el.style.transition = 'color 1s ease, background-color 1s ease';

    el.style.color = (color === '') ? originalColor : color;
    el.style.backgroundColor = (bgcolor === '') ? originalBg : bgcolor;

    const pulseDuration = 2000; 

    const colorTimeout = setTimeout(() => {
        el.style.color = originalColor;
        el.style.backgroundColor = originalBg;

        delete el.dataset.pulseTimeout;
    }, pulseDuration);

    el.dataset.pulseTimeout = colorTimeout; // Store the timeout ID

    // clear transition after pulse duration + transition time
    const transitionTimeout = setTimeout(() => {
        el.style.transition = '';
        delete el.dataset.transitionTimeout;
    }, pulseDuration + 1000);

    el.dataset.transitionTimeout = transitionTimeout;
}
