export const people = [
  {
    id: 1,
    name: "Sean",
    age: 30,
    gender: "male",
  },
  {
    id: 2,
    name: "David",
    age: 20,
    gender: "male",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople[0];
};
