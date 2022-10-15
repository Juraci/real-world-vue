import { mount } from '@vue/test-utils';
import EventCard from '@/components/EventCard.vue';

describe('EvnetCard.vue', () => {
  it('renders the event object passed', () => {
    const data = {
      event: {
        id: 5928101,
        category: 'animal welfare',
        title: 'Hot Dog Competition',
        description: 'Find your new feline friend at this event',
        location: 'Meow town',
        date: 'January 28, 2025',
        time: '12:30',
        petsAllowed: true,
        organizer: 'Kat Laydee',
      },
    };

    const wrapper = mount(EventCard, {
      props: { event: data.event },
    });

    expect(wrapper.find('span').text()).toEqual('@ 12:30 on January 28, 2025');
    expect(wrapper.find('h4').text()).toEqual('Hot Dog Competition');
  });
});
