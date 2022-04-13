const herois = [
  {
    id: 1,
    name: 'Fulana',
    class: 'Warrior',
    skill: 'Shout',
    story:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis eu sapien et mollis. Nullam dapibus mollis ante a consectetur. Ut et convallis elit. Aliquam rhoncus tellus sapien, at lobortis.',
  },
  {
    id: 2,
    name: 'Fulano',
    class: 'Warrior',
    skill: 'Stump',
    story:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis eu sapien et mollis. Nullam dapibus mollis ante a consectetur. Ut et convallis elit. Aliquam rhoncus tellus sapien, at lobortis.',
  },
  {
    id: 3,
    name: 'Sicrana',
    class: 'Ranger',
    skill: 'Hideout',
    story:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis eu sapien et mollis. Nullam dapibus mollis ante a consectetur. Ut et convallis elit. Aliquam rhoncus tellus sapien, at lobortis.',
  },
  {
    id: 4,
    name: 'Sicrano',
    class: 'Ranger',
    skill: 'Deceive',
    story:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis eu sapien et mollis. Nullam dapibus mollis ante a consectetur. Ut et convallis elit. Aliquam rhoncus tellus sapien, at lobortis.',
  },
  {
    id: 5,
    name: 'Beltrana',
    class: 'Mage',
    skill: 'Armageddon',
    story:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis eu sapien et mollis. Nullam dapibus mollis ante a consectetur. Ut et convallis elit. Aliquam rhoncus tellus sapien, at lobortis.',
  },
  {
    id: 6,
    name: 'Beltrano',
    class: 'Mage',
    skill: 'Gravity',
    story:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis eu sapien et mollis. Nullam dapibus mollis ante a consectetur. Ut et convallis elit. Aliquam rhoncus tellus sapien, at lobortis.',
  },
];

const find__all__H__serv = () => {
  return herois;
};
const find__H__by__id__serv = (param__id) => {
  return herois.find((hero) => hero.id === param__id);
};
// const find__H__by__class__serv = () => {

// };

const create__H__serv = (new__hero) => {
  new__hero.id = herois.length + 1;
  herois.push(new__hero);
  return new__hero;
};
const update__H__serv = (id, hero__edit) => {
  hero__edit['id'] = id;
  herois[herois.findIndex((hero) => hero.id === id)];
  return hero__edit;
};
const delete__H__serv = () => {
  return herois.splice(
    herois.findIndex((hero) => hero.id === id),
    1
  );
};

module.exports = {
  find__all__H__serv,
  find__H__by__id__serv,
  // find__H__by__class__serv,
  create__H__serv,
  update__H__serv,
  delete__H__serv,
};
