const strContents =
    `[
    {
        "id":1,
        "name":"nahed's kushari diner",
        "dietOfferings":[
            "rice",
            "lentils",
            "salsa",
            "onion",
            "macaroni",
            "checkpeas"
        ],
        "dinnerTables":[
            {
                "id":3,
                "capacity":2,
                "reservations":[
                    {
                        "id":1,
                        "timeStart":1600,
                        "timeEnd":1800,
                        "diners":[
                            {
                                "id":2,
                                "username":"sona",
                                "dietRestrictions":[
                                    "eggs",
                                    "salsa"
                                ]
                            },
                            {
                                "id":3,
                                "username":"youssi",
                                "dietRestrictions":[
                                    "sushi",
                                    "fish"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id":2,
                "capacity":4,
                "reservations":[]
            },
            {
                "id":4,
                "capacity":6,
                "reservations":[]
            },
            {
                "id":1,
                "capacity":4,
                "reservations":[]
            }
        ]
    },
    {
        "id":4,
        "name":"mohsen's bazeen dome",
        "dietOfferings":[
            "barley",
            "eggs",
            "chilli",
            "lamb",
            "salsa"
        ],
        "dinnerTables":[
            {
                "id":6,
                "capacity":6,
                "reservations":[]
            },
            {
                "id":5,
                "capacity":4,
                "reservations":[]
            }
        ]
    },
    {
        "id":2,
        "name":"yousuf's sushi eater",
        "dietOfferings":[
            "sushi",
            "fish",
            "salmon",
            "shrimp"
        ],
        "dinnerTables":[]
    }
]`;

const countChars = (str: string): number => {
  let count = 0;
  str.split('\n').forEach((item) => {
    count += item.trim().split('').length;
  });

  return count;
};

console.log(countChars(strContents));
