import { EventType } from '../pages/events'

const EVENTS = [
  {
    name: 'Event 1 - a great event',
    description:
      'Potentially long and ongoing description of the event and what it means for the community. There could potentially be a lot of text here, but it should be short enough to fit on one line. There could potentially be a lot of text here, but it should be short enough to fit on one line.',
    date: '2020-03-16T05:35:07.322Z',
    location: 'Location 1',
    link: 'https://www.google.com',
    image: '/images/airtable-image.jpg',
    organisation: {
      name: 'Organisation A',
      image: '/vercel.svg',
    },
  },
  {
    name: 'Event 1 - a great event',
    description:
      'Potentially long and ongoing description of the event and what it means for the community. There could potentially be a lot of text here, but it should be short enough to fit on one line. There could potentially be a lot of text here, but it should be short enough to fit on one line.',
    date: '2020-03-16T05:35:07.322Z',
    location: 'Location 1',
    link: 'https://www.google.com',
    image: '/images/airtable-image.jpg',
    organisation: {
      name: 'Organisation A',
      image: '/vercel.svg',
    },
  },
  {
    name: 'Event 1 - a great event',
    description:
      'Potentially long and ongoing description of the event and what it means for the community. There could potentially be a lot of text here, but it should be short enough to fit on one line. There could potentially be a lot of text here, but it should be short enough to fit on one line.',
    date: '2020-03-16T05:35:07.322Z',
    location: 'Location 1',
    link: 'https://www.google.com',
    image: '/images/airtable-image.jpg',
    organisation: {
      name: 'Organisation A',
      image: '/vercel.svg',
    },
  },
  {
    name: 'Event 1 - a great event',
    description:
      'Potentially long and ongoing description of the event and what it means for the community. There could potentially be a lot of text here, but it should be short enough to fit on one line. There could potentially be a lot of text here, but it should be short enough to fit on one line.',
    date: '2020-03-16T05:35:07.322Z',
    location: 'Location 1',
    link: 'https://www.google.com',
    image: '/images/airtable-image.jpg',
    organisation: {
      name: 'Organisation A',
      image: '/vercel.svg',
    },
  },
  {
    name: 'Event 1 - a great event',
    description:
      'Potentially long and ongoing description of the event and what it means for the community. There could potentially be a lot of text here, but it should be short enough to fit on one line. There could potentially be a lot of text here, but it should be short enough to fit on one line.',
    date: '2023-03-16T05:35:07.322Z',
    location: 'Location 1',
    link: 'https://www.google.com',
    image: '/images/airtable-image.jpg',
    organisation: {
      name: 'Organisation A',
      image: '/vercel.svg',
    },
  },
  {
    name: 'Event 1 - a great event',
    description:
      'Potentially long and ongoing description of the event and what it means for the community. There could potentially be a lot of text here, but it should be short enough to fit on one line. There could potentially be a lot of text here, but it should be short enough to fit on one line.',
    date: '2023-03-16T05:35:07.322Z',
    location: 'Location 1',
    link: 'https://www.google.com',
    image: '/images/airtable-image.jpg',
    organisation: {
      name: 'Organisation A',
      image: '/vercel.svg',
    },
  },
  {
    name: 'Event 1 - a great event',
    description:
      'Potentially long and ongoing description of the event and what it means for the community. There could potentially be a lot of text here, but it should be short enough to fit on one line. There could potentially be a lot of text here, but it should be short enough to fit on one line.',
    date: '2023-03-16T05:35:07.322Z',
    location: 'Location 1',
    link: 'https://www.google.com',
    image: '/images/airtable-image.jpg',
    organisation: {
      name: 'Organisation A',
      image: '/vercel.svg',
    },
  },
  {
    name: 'Event 1 - a great event',
    description:
      'Potentially long and ongoing description of the event and what it means for the community. There could potentially be a lot of text here, but it should be short enough to fit on one line. There could potentially be a lot of text here, but it should be short enough to fit on one line.',
    date: '2023-03-16T05:35:07.322Z',
    location: 'Location 1',
    link: 'https://www.google.com',
    image: '/images/airtable-image.jpg',
    organisation: {
      name: 'Organisation A',
      image: '/vercel.svg',
    },
  },
  {
    name: 'Event 1 - a great event',
    description:
      'Potentially long and ongoing description of the event and what it means for the community. There could potentially be a lot of text here, but it should be short enough to fit on one line. There could potentially be a lot of text here, but it should be short enough to fit on one line.',
    date: '2023-03-16T05:35:07.322Z',
    location: 'Location 1',
    link: 'https://www.google.com',
    image: '/images/airtable-image.jpg',
    organisation: {
      name: 'Organisation A',
      image: '/vercel.svg',
    },
  },
]

export const getEvents = () => {
  const futureEvents = [] as EventType[]
  const pastEvents = [] as EventType[]
  const now = Date.now()
  EVENTS.forEach((event) => {
    if (Date.parse(event.date) < now) {
      pastEvents.push(event)
      return
    }

    futureEvents.push(event)
  })
  return {
    futureEvents,
    pastEvents,
  }
}
