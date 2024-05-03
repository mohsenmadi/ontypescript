const orig = {
  name: 'deepClone',
  data: new Date(),
  date2: '2024-04-30T15:38:21.976Z',
  address: {
    city: 'city',
    place: {
      usual: ['street1', 'street2'],
      continent: 'continent',
      ethnicity: 'ethnicity',
    }
  }
};

setTimeout(() => {
  const clone = structuredClone(orig);
  const stringifiedClone: any = JSON.parse(JSON.stringify(orig));

  console.log('=orig=', orig);
  console.log('=clone=', clone);
  console.log('=stringClone=', stringifiedClone);
  console.log('=array-clone=', clone.address.place.usual);
  console.log('=array-string=', stringifiedClone.address.place.usual);
}, 5234);

export {}
