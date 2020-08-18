'use strict';

import users from './users.js';

const getSortedUniqueSkills = users => {
  const uniqueSkills = users.reduce((acc, {skills}) => {

    skills.forEach(skill => {
      if (!acc.includes(skill)) {
        acc.push(skill);
      }
    });

    return acc;
  },[]);

  return uniqueSkills.sort();


};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
