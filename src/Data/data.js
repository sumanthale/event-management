let events = [
  {
    id: 1,
    name: 'Holi',
    date: '2021-01-01',
    price: 100,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    location: 'Hyderabad',
  },
  {
    id: 2,
    name: 'Ugadi',

    date: '2021-01-01',
    price: 100,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    location: 'Hyderabad',
  },
  {
    id: 3,
    name: 'Christmas',
    date: '2021-01-01',
    price: 100,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    location: 'Hyderabad',
  },
  {
    id: 4,
    name: 'A',
    date: '2021-01-01',
    price: 100,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    location: 'Hyderabad',
  },
  {
    id: 5,
    name: 'B',
    date: '2021-01-01',
    price: 100,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    location: 'Hyderabad',
  },
  {
    id: 6,
    name: 'C',
    date: '2021-01-01',
    price: 100,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    location: 'Hyderabad',
  },
  {
    id: 7,
    name: 'D',
    date: '2021-01-01',
    price: 100,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    location: 'Hyderabad',
  },
  {
    id: 8,
    name: 'E',
    date: '2021-01-01',
    price: 100,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    location: 'Hyderabad',
  },
  {
    id: 9,
    name: 'F',
    date: '2021-01-01',
    price: 100,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    location: 'Hyderabad',
  },
  {
    id: 10,
    name: 'G',
    date: '2021-01-01',
    price: 100,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    location: 'Hyderabad',
  },
  {
    id: 11,
    name: 'H',
    date: '2021-01-01',
    price: 100,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    location: 'Hyderabad',
  },
  {
    id: 12,
    name: 'I',
    date: '2021-01-01',
    price: 100,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    location: 'Hyderabad',
  },
];

export const addEvent = (event) => {
  events.push({ ...event, id: events.length + 1 });
};

export const deleteEvent = (id) => {
  console.log(id);
  events = events.filter((event) => event.id !== id);
};

export const updateEvent = (evt) => {
  events = events.map((event) => (event.id === evt.id ? { ...evt } : event));
};

export const getEvent = (id) => {
  return events.find((event) => event.id === id);
};
export const getEvents = () => {
  return events;
};
export default events;
