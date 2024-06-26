import DisplayComponent from './display.vue';

export default {
	id: 'walk-time-display',
	name: 'Display walk times',
	icon: 'schedule',
	description: 'Displays the time of a walk from an input json',
	component: DisplayComponent,
	options: null,
	types: ['string', 'json'],
};
