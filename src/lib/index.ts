// place files you want to import through the `$lib` alias in this folder.
export async function initSwiper(element, options = {}) {
	const { default: Swiper } = await import('swiper');
	const { Navigation, Pagination } = await import('swiper/modules');

	await import('swiper/css');
	await import('swiper/css/navigation');
	await import('swiper/css/pagination');

	return new Swiper(element, {
		modules: [Navigation, Pagination],
		...options
	});
}

export function formatDate(dateString) {
	return new Intl.DateTimeFormat('fr-FR', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	}).format(new Date(dateString));
}
