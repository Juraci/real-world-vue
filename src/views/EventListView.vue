<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :event="event" :key="event.id" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue';
import axios from 'axios';

export default {
  name: 'EventListView',
  components: {
    EventCard,
  },
  created() {
    axios
      .get('https://my-json-server.typicode.com/Juraci/real-world-vue-3/events')
      .then((response) => (this.events = response.data))
      .catch((error) => console.log(`API error ${JSON.stringify(error)}`));
  },
  data() {
    return {
      events: [],
    };
  },
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
