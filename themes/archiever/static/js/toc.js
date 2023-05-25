const headings = document.querySelectorAll('.toc a');
let activeLink = null;

export const setActiveLink = link => {
    if (activeLink) activeLink.classList.remove('active');
    activeLink = link;
    activeLink.classList.add('active');

    const url = new URL(window.location.href);
    url.hash = decodeURI(link.hash);
    history.pushState({}, '', url.toString());
};

export const handleScroll = () => {
    const scrollTop = window.scrollY + 60;
    for (let i = headings.length - 1; i >= 0; i--) {
        const section = document.querySelector(decodeURI(headings[i].hash));
        if (section.offsetTop <= scrollTop) {
            setActiveLink(headings[i]);
            break;
        }
    }
};

export const handleClick = event => {
    event.preventDefault();
    const target = event.target;
    const section = document.querySelector(decodeURI(target.hash));
    const scrollTop = section.offsetTop - 60;
    window.scrollTo({ top: scrollTop, behavior: 'smooth' });
    setActiveLink(target);
};

window.addEventListener('scroll', handleScroll);
headings.forEach(link => {
    link.addEventListener('click', handleClick);
});
