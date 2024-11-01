export const linkMixin = {
    methods: {
		target(item) {
			let target = '_blank';
			(item.Link.Url.startsWith('#')) && (target = '');
			return target;
		},
        getLinkUrl(item) {
            let newLink = item.Link.Url;
            (item.Link.Url === '#nolink') && (newLink = 'javascript:;');
            return newLink;
        },
        goTo(event, item) {
            if (item.Link.Url.startsWith('#') && item.Link.Url !== '#nolink') {
                event.preventDefault();
                const hrefValue = item.Link.Url;
                document.querySelector(hrefValue).scrollIntoView({behavior: 'smooth'});
            }
        }
    }
};
