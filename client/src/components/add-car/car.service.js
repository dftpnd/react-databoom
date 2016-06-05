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
		};

		this.makes = [
			{
				name: 'Acura',
				models: [
					{
						name: 'TLX',
						modification: [
							{
								name: 'Techno',
								driveUnit: du.front,
								transmission: tr.dct,
								engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
							},
							{
								name: 'Advance',
								driveUnit: du.front,
								transmission: tr.all,
								engin: {horsepower: 290, volume: '3.5', type: engins.gasoline}
							}
						]
					}, {
						name: 'RDX',
						modification: [
							{
								name: 'Techno',
								driveUnit: du.all,
								transmission: tr.at,
								engin: {horsepower: 273, volume: '3.5', type: engins.gasoline}
							}
						]
					}, {
						name: 'MDX',
						modification: [
							{
								name: 'Techno',
								driveUnit: du.all,
								transmission: tr.at,
								engin: {horsepower: 290, volume: '3.5', type: engins.gasoline}
							},
							{
								name: 'Advance',
								driveUnit: du.all,
								transmission: tr.at,
								engin: {horsepower: 290, volume: '3.5', type: engins.gasoline}
							}
						]
					}
				]
			},
			{
				/* Car Mark */
				name: 'Alfa Romeo', models: [
				{
					name: 'MiTo',
					modification: [
						{
							name: 'Progression',
							driveUnit: du.front,
							transmission: tr.mt,
							engin: {horsepower: 105, volume: '0.9', type: engins.gasoline}
						},
						{
							name: 'Distinctive',
							driveUnit: du.front,
							transmission: tr.mt,
							engin: {horsepower: 140, volume: '1.4', type: engins.gasoline}
						}, {
							name: 'Quadrifoglio Verde',
							driveUnit: du.front,
							transmission: tr.mt,
							engin: {horsepower: 170, volume: '1.4', type: engins.gasoline}
						}
					]
				}, {
					name: 'Giulietta',
					modification: [
						{
							name: 'Progression',
							driveUnit: du.front,
							transmission: tr.mt,
							engin: {horsepower: 120, volume: '0.9', type: engins.gasoline}
						},
						{
							name: 'Distinctive',
							driveUnit: du.front,
							transmission: tr.mt,
							engin: {horsepower: 170, volume: '1.4', type: engins.gasoline}
						}, {
							name: 'Exclusive',
							driveUnit: du.front,
							transmission: tr.mt,
							engin: {horsepower: 170, volume: '1.4', type: engins.gasoline}
						}]
				}, {
					name: '4C',
					modification: [
						{
							name: 'Progression',
							driveUnit: du.rear,
							transmission: tr.ttct,
							engin: {horsepower: 240, volume: '1.8', type: engins.gasoline}
						}
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Aston Martin', models: [
				{
					name: 'TLX',
					modification: [
						{
							name: 'Techno',
							driveUnit: du.front,
							transmission: tr.dct,
							engin: {horsepower: 208, volume: '2.4', type: engins.gasoline}
						}
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Audi', models: [
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
				name: 'Bentley', models: [
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
				name: 'BMW', models: [
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
				name: 'Brilliance', models: [
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
				name: 'Cadillac', models: [
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
				name: 'Changan', models: [
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
				name: 'Chery', models: [
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
				name: 'Chevrolet', models: [
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
				name: 'Chrysler', models: [
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
				name: 'Citroen', models: [
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
				name: 'Datsun', models: [
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
				name: 'DS', models: [
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
				name: 'FAW', models: [
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
				name: 'Ferrari', models: [
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
				name: 'FIAT', models: [
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
				name: 'Ford', models: [
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
				name: 'Geely', models: [
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
				name: 'Great Wall', models: [
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