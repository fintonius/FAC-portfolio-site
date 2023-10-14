const scrollers = document.querySelectorAll(".scroller");

//if user has Prefers Reduced Motion on addAnimation() is not called
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach(scroller => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector('.scroller-inner');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
            let duplicatedItem = item.cloneNode(true);
            // stops duplicated content being read twice by screen readers
            duplicatedItem.setAttribute('aria-hidden', true);
            scrollerInner.appendChild(duplicatedItem)
        })
    });
}