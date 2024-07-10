const useLinkMixin = () => {
    const target = (item) => {
        let target = '_blank';
        if (item.Link.Url.startsWith('#')) {
            target = '';
        }
        return target;
    };

    const getLinkUrl = (item) => {
        let newLink = item.Link.Url;
        if (item.Link.Url === '#nolink') {
            newLink = '#';
        }
        return newLink;
    };

    const goTo = (event, item) => {
        if (item.Link.Url.startsWith('#') && item.Link.Url !== '#nolink') {
            event.preventDefault();
            const hrefValue = item.Link.Url;
            document.querySelector(hrefValue).scrollIntoView({behavior: 'smooth'});
        }
    };

    return { target, getLinkUrl, goTo };
};

export default useLinkMixin;
