const original = {
  name: 'John',
  birthday: new Date(1990, 0, 1), // January 1, 1990
  address: {
    city: 'Toronto',
    coordinates: {
      lat: 43.7,
      long: -79.4,
      both: ['40s', '-70s'],
      coordsAddress: {
        street: 'Dobbinton',
        city: 'Toronto',
      }
    }
  },
  friends: ['Alice', 'Bob']
};

const deepClone = (orig: any, clone = {}): object => {
  for (const key of Object.keys(orig)) {
    if (orig[key] instanceof Array) {
      clone[key] = [...orig[key]];
    } else if (orig[key] instanceof Date) {
      clone[key] = new Date(orig[key])
    } else if (orig[key] instanceof Object) {
      clone[key] = deepClone(orig[key], {});
    } else {
      clone[key] = orig[key];
    }
  }

  return clone;
};

const clone: any = deepClone(original);
console.log(clone);
console.log(original);
// console.log(clone.friends);
// clone.friends[0] = 'Wonder';
// console.log(clone.friends);
// console.log(original.friends);
console.log('=c=', clone.address.coordinates.coordsAddress);
clone.address.coordinates.coordsAddress.street = 'Secreto';
clone.address.city = 'Oshawa';
console.log('=c=', clone.address);
console.log('=o=', original.address);


// const orig = {
//   name: 'deepClone',
//   data: new Date(),
//   date2: '2024-04-30T15:38:21.976Z',
//   address: {
//     city: 'city',
//     place: {
//       usual: ['street1', 'street2'],
//       continent: 'continent',
//       ethnicity: 'ethnicity',
//     }
//   }
// };
//
// const clone = structuredClone(orig);
// const stringifiedClone: any = JSON.parse(JSON.stringify(orig));
//
// console.log('=orig=', orig);
// console.log('=clone=', clone);
// console.log('=stringClone=', stringifiedClone);
// console.log('=array-clone=', clone.address.place.usual);
// console.log('=array-string=', stringifiedClone.address.place.usual);

export {};
