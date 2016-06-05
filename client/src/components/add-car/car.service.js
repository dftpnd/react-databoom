class Car {
  constructor() {
    const engins = {
      gasoline: 'gasoline',
      diesel: 'diesel'
    };

    const du = {
      all: 'all',
      front: 'front',
      rear: 'rear',
      awd: 'awd',
      awd4: 'awd4'
    };
    const tr = {
      mt: 'mt',
      at: 'at',
      ps: 'Powershift',
      dsg: 'DSG',
      dct: 'DCT',
      ttct: 'T TCT',
      tfsi: 'TFSI',
    };

    this.makes = [
      {
        name: 'Acura',
        models: [
          {
            name: 'TLX'
          }, {
            name: 'RDX'
          }, {
            name: 'MDX'
          }
        ]
      },
      {
        /* Car Mark */
        name: 'Alfa Romeo', models: [
        {
          name: 'MiTo'
        }, {
          name: 'Giulietta'
        }, {
          name: '4C'
        }]
      },
      {
        /* Car Mark */
        name: 'Aston Martin', models: [
        {
          name: 'Rapide S'
        }, {
          name: 'DB9'
        }, {
          name: 'Vanquish'
        }
      ]
      },
      {
        /* Car Mark */
        name: 'Audi', models: [
        {
          name: 'A1'
        }, {
          name: 'A3'
        }, {
          name: 'S3'
        }, {
          name: 'A4'
        }, {
          name: 'A5'
        }, {
          name: 'A6'
        }, {
          name: 'S6'
        }, {
          name: 'RS6'
        }, {
          name: 'A7'
        }, {
          name: 'S7'
        }, {
          name: 'RS7'
        }, {
          name: 'A8'
        }, {
          name: 'S8'
        }, {
          name: 'Q3'
        }, {
          name: 'RS Q3'
        }, {
          name: 'Q5'
        }, {
          name: 'SQ5'
        }, {
          name: 'Q7'
        }, {
          name: 'SQ7'
        }, {
          name: 'TT'
        }, {
          name: 'TTS'
        }, {
          name: 'S5'
        }, {
          name: 'R8'
        }
      ]
      },
      {
        /* Car Mark */
        name: 'Bentley', models: [
        {
          name: 'Flying Spur'
        }, {
          name: 'Mulsanne'
        }, {
          name: 'Continental GT Speed'
        }, {
          name: 'Continental GT'
        }, {
          name: 'Continental GT V8'
        }
      ]
      },
      {
        /* Car Mark */
        name: 'BMW', models: [
        {
          name: 'i3'
        }, {
          name: '1'
        }, {
          name: '3'
        }, {
          name: 'M3'
        }, {
          name: '4'
        }, {
          name: '5'
        }, {
          name: 'M5'
        }, {
          name: '6'
        }, {
          name: 'M6'
        }, {
          name: '7'
        }, {
          name: 'X1'
        }, {
          name: 'X3'
        }, {
          name: 'X4'
        }, {
          name: 'X5'
        }, {
          name: 'X5 M'
        }, {
          name: 'X6'
        }, {
          name: 'X6 M'
        }, {
          name: 'M2'
        }, {
          name: 'M4'
        }, {
          name: 'i8'
        },
        {
          name: ''
        }
      ]
      },
      {
        /* Car Mark */
        name: 'Brilliance', models: [
        {
          name: 'H230'
        }, {
          name: 'H530'
        }, {
          name: 'V5'
        }]
      },
      {
        /* Car Mark */
        name: 'Cadillac', models: [
        {
          name: 'CTS'
        }, {
          name: 'XT5'
        }, {
          name: 'SRX'
        }, {
          name: 'Escalade'
        }]
      },
      {
        /* Car Mark */
        name: 'Changan', models: [
        {
          name: 'CS35'
        }, {
          name: 'Eado'
        }, {
          name: 'Raeton'
        }]
      },
      {
        /* Car Mark */
        name: 'Chery', models: [
        {
          name: 'IndiS'
        }, {
          name: 'Bonus 3'
        }, {
          name: 'Very'
        }, {
          name: 'Bonus'
        }, {
          name: 'M11'
        }, {
          name: 'Arrizo 7'
        }, {
          name: 'Tiggo'
        }, {
          name: 'Tiggo 5'
        }]
      },
      {
        /* Car Mark */
        name: 'Chevrolet', models: [
        {
          name: 'Niva'
        }, {
          name: 'Tahoe'
        }, {
          name: 'Corvette Stingray '
        }, {
          name: 'Corvette Z06'
        }]
      },
      {
        /* Car Mark */
        name: 'Chrysler', models: [
        {
          name: 'Grand Voyager'
        }]
      },
      {
        /* Car Mark */
        name: 'Citroen', models: [
        {
          name: 'DS3'
        }, {
          name: 'C-Elysee'
        }, {
          name: 'C4'
        }, {
          name: 'DS4'
        }, {
          name: 'C4 Picasso'
        }, {
          name: 'Grand C4 Picasso'
        }, {
          name: 'Berlingo'
        }, {
          name: 'Jumper'
        }, {
          name: 'Jumpy'
        }
      ]
      },
      {
        /* Car Mark */
        name: 'Datsun', models: [
        {
          name: 'mi-DO'
        }, {
          name: 'on-DO'
        }
      ]
      },
      {
        /* Car Mark */
        name: 'Dongfeng', models: [
        {
          name: 'S30'
        }, {
          name: 'H30 Cross'
        }]
      },
      {
        /* Car Mark */
        name: 'DS', models: [
        {
          name: 'DS 4'
        }, {
          name: 'DS 4 Crossback'
        }]
      },
      {
        /* Car Mark */
        name: 'FAW', models: [
        {
          name: 'Oley'
        }, {
          name: 'V5'
        }, {
          name: 'Besturn B50'
        }
      ]
      },
      {
        /* Car Mark */
        name: 'Ferrari', models: [
        {
          name: 'LaFerrari'
        }, {
          name: '458 Italia'
        }, {
          name: '458 Speciale'
        }, {
          name: '488 GTB'
        }, {
          name: 'GTC4Lusso'
        }, {
          name: 'F12berlinetta'
        }
      ]
      },
      {
        /* Car Mark */
        name: 'FIAT', models: [
        {
          name: '500'
        },{
          name: 'Punto'
        },{
          name: 'Scudo'
        },{
          name: 'Ducato'
        }]
      },
      {
        /* Car Mark */
        name: 'Ford', models: [
        {
          name: 'Fiesta'
        }, {
          name: 'Focus'
        }, {
          name: 'Mondeo'
        }, {
          name: 'EcoSport'
        }, {
          name: 'Kuga'
        }, {
          name: 'Explorer'
        }, {
          name: 'Transit'
        }, {
          name: 'Tourneo'
        }]
      },
      {
        /* Car Mark */
        name: 'Geely', models: [
        {
          name: 'Emgrand'
        }, {
          name: 'GC6'
        }, {
          name: 'Emgrand X7'
        }]
      },
      {
        /* Car Mark */
        name: 'Great Wall', models: [
        {
          name: 'Hover H3'
        }, {
          name: ''
        }, {
          name: ''
        }, {
          name: ''
        }, {
          name: ''
        }, {
          name: ''
        }, {
          name: ''
        }, {
          name: ''
        }, {
          name: ''
        }]
      },
      {
        /* Car Mark */
        name: 'Haima', models: [
        {
          name: 'todo',
          modification: [
            {
              name: 'todo',
              driveUnit: du.front,
              transmission: tr.dct,
              engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
            }
          ]
        }]
      },
      {
        /* Car Mark */
        name: 'Haval', models: [
        {
          name: 'todo',
          modification: [
            {
              name: 'todo',
              driveUnit: du.front,
              transmission: tr.dct,
              engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
            }
          ]
        }]
      },
      {
        /* Car Mark */
        name: 'Honda', models: [
        {
          name: 'todo',
          modification: [
            {
              name: 'todo',
              driveUnit: du.front,
              transmission: tr.dct,
              engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
            }
          ]
        }]
      },
      {
        /* Car Mark */
        name: 'Hyundai', models: [
        {
          name: 'todo',
          modification: [
            {
              name: 'todo',
              driveUnit: du.front,
              transmission: tr.dct,
              engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
            }
          ]
        }]
      },
      {
        /* Car Mark */
        name: 'Infiniti', models: [
        {
          name: 'todo',
          modification: [
            {
              name: 'todo',
              driveUnit: du.front,
              transmission: tr.dct,
              engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
            }
          ]
        }]
      },
      {
        /* Car Mark */
        name: 'Jaguar', models: [
        {
          name: 'todo',
          modification: [
            {
              name: 'todo',
              driveUnit: du.front,
              transmission: tr.dct,
              engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
            }
          ]
        }]
      },
      {
        /* Car Mark */
        name: 'Jeep', models: [
        {
          name: 'todo',
          modification: [
            {
              name: 'todo',
              driveUnit: du.front,
              transmission: tr.dct,
              engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
            }
          ]
        }]
      },
      {
        /* Car Mark */
        name: 'KIA', models: [
        {
          name: 'todo',
          modification: [
            {
              name: 'todo',
              driveUnit: du.front,
              transmission: tr.dct,
              engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
            }
          ]
        }]
      },
      {
        /* Car Mark */
        name: 'Lada', models: [
        {
          name: 'todo',
          modification: [
            {
              name: 'todo',
              driveUnit: du.front,
              transmission: tr.dct,
              engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
            }
          ]
        }]
      },
      {
        /* Car Mark */
        name: 'Lamborghini', models: [
        {
          name: 'todo',
          modification: [
            {
              name: 'todo',
              driveUnit: du.front,
              transmission: tr.dct,
              engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
            }
          ]
        }]
      },
      {
        /* Car Mark */
        name: 'Land Rover', models: [
        {
          name: 'todo',
          modification: [
            {
              name: 'todo',
              driveUnit: du.front,
              transmission: tr.dct,
              engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
            }
          ]
        }]
      },
      {
        /* Car Mark */
        name: 'Lexus', models: [
        {
          name: 'todo',
          modification: [
            {
              name: 'todo',
              driveUnit: du.front,
              transmission: tr.dct,
              engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
            }
          ]
        }]
      },
      {
        /* Car Mark */
        name: 'LIFAN', models: [
        {
          name: 'todo',
          modification: [
            {
              name: 'todo',
              driveUnit: du.front,
              transmission: tr.dct,
              engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
            }
          ]
        }]
      },
      {
        /* Car Mark */
        name: 'Maserati', models: [
        {
          name: 'todo',
          modification: [
            {
              name: 'todo',
              driveUnit: du.front,
              transmission: tr.dct,
              engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
            }
          ]
        }]
      },
      {
        /* Car Mark */
        name: 'Mercedes-Benz', models: [
        {
          name: 'todo',
          modification: [
            {
              name: 'todo',
              driveUnit: du.front,
              transmission: tr.dct,
              engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
            }
          ]
        }]
      },
      {
        /* Car Mark */
        name: 'MINI', models: [
        {
          name: 'todo',
          modification: [
            {
              name: 'todo',
              driveUnit: du.front,
              transmission: tr.dct,
              engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
            }
          ]
        }]
      },
      {
        /* Car Mark */
        name: 'Mitsubishi', models: [
        {
          name: 'todo',
          modification: [
            {
              name: 'todo',
              driveUnit: du.front,
              transmission: tr.dct,
              engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
            }
          ]
        }]
      },
      {
        /* Car Mark */
        name: 'Nissan', models: [
        {
          name: 'todo',
          modification: [
            {
              name: 'todo',
              driveUnit: du.front,
              transmission: tr.dct,
              engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
            }
          ]
        }]
      },
      {
        /* Car Mark */
        name: 'Peugeot', models: [
        {
          name: 'todo',
          modification: [
            {
              name: 'todo',
              driveUnit: du.front,
              transmission: tr.dct,
              engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
            }
          ]
        }]
      },
      {
        /* Car Mark */
        name: 'Porsche', models: [
        {
          name: 'todo',
          modification: [
            {
              name: 'todo',
              driveUnit: du.front,
              transmission: tr.dct,
              engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
            }
          ]
        }]
      },
      {
        /* Car Mark */
        name: 'Ravon', models: [
        {
          name: 'todo',
          modification: [
            {
              name: 'todo',
              driveUnit: du.front,
              transmission: tr.dct,
              engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
            }
          ]
        }]
      },
      {
        /* Car Mark */
        name: 'Renault', models: [
        {
          name: 'todo',
          modification: [
            {
              name: 'todo',
              driveUnit: du.front,
              transmission: tr.dct,
              engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
            }
          ]
        }]
      },
      {
        /* Car Mark */
        name: 'Rolls-Royce', models: [
        {
          name: 'todo',
          modification: [
            {
              name: 'todo',
              driveUnit: du.front,
              transmission: tr.dct,
              engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
            }
          ]
        }]
      },
      {
        /* Car Mark */
        name: 'Skoda', models: [
        {
          name: 'todo',
          modification: [
            {
              name: 'todo',
              driveUnit: du.front,
              transmission: tr.dct,
              engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
            }
          ]
        }]
      },
      {
        /* Car Mark */
        name: 'Smart', models: [
        {
          name: 'todo',
          modification: [
            {
              name: 'todo',
              driveUnit: du.front,
              transmission: tr.dct,
              engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
            }
          ]
        }]
      },
      {
        /* Car Mark */
        name: 'SsangYong', models: [
        {
          name: 'todo',
          modification: [
            {
              name: 'todo',
              driveUnit: du.front,
              transmission: tr.dct,
              engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
            }
          ]
        }]
      },
      {
        /* Car Mark */
        name: 'Subaru', models: [
        {
          name: 'todo',
          modification: [
            {
              name: 'todo',
              driveUnit: du.front,
              transmission: tr.dct,
              engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
            }
          ]
        }]
      },
      {
        /* Car Mark */
        name: 'Toyota', models: [
        {
          name: 'todo',
          modification: [
            {
              name: 'todo',
              driveUnit: du.front,
              transmission: tr.dct,
              engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
            }
          ]
        }]
      },
      {
        /* Car Mark */
        name: 'Volkswagen', models: [
        {
          name: 'todo',
          modification: [
            {
              name: 'todo',
              driveUnit: du.front,
              transmission: tr.dct,
              engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
            }
          ]
        }]
      },
      {
        /* Car Mark */
        name: 'Volvo', models: [
        {
          name: 'todo',
          modification: [
            {
              name: 'todo',
              driveUnit: du.front,
              transmission: tr.dct,
              engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
            }
          ]
        }]
      },
      {
        /* Car Mark */
        name: 'Zotye', models: [
        {
          name: 'todo',
          modification: [
            {
              name: 'todo',
              driveUnit: du.front,
              transmission: tr.dct,
              engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
            }
          ]
        }]
      },
      {
        /* Car Mark */
        name: 'УАЗ', models: [
        {
          name: 'todo',
          modification: [
            {
              name: 'todo',
              driveUnit: du.front,
              transmission: tr.dct,
              engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
            }
          ]
        }]
      }
    ];

    this.models = {};

    this.save = this.save.bind(this);

    return instance;
  }


}

export default Car;
