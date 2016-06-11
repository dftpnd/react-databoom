class Car {
	constructor() {
		const et = {
			gasoline: 'gasoline',
			diesel: 'diesel',
			hybrid: 'hybrid',
			electro: 'electro',
			gas: 'gas'
		};

		const du = {
			all: 'all',
			front: 'front',
			rear: 'rear'
		};

		this.bodyType = [
			{value: 'sedan', label: 'седан'},
			{value: 'hatchback', label: 'хетчбэк'},
			{value: 'estate', label: 'универсал'},
			{value: 'suv', label: 'внедорожник '},
			{value: 'cabriolet', label: 'кабриолет'},
			{value: 'crossover', label: 'кроссовер'},
			{value: 'coupe', label: 'купе'},
			{value: 'limousine', label: 'лимузин'},
			{value: 'minivan', label: 'минивэн'},
			{value: 'pickup', label: 'пикап'},
			{value: 'van', label: 'фургон'},
			{value: 'minibus', label: 'микроавтобус'}
		];

		this.colors = [
			{value: 'red', label: 'красный'},
			{value: 'brown', label: 'коричневый'},
			{value: 'orange', label: 'оранжевый'},
			{value: 'beige', label: 'бежевый'},
			{value: 'yellow', label: 'желтый'},
			{value: 'green', label: 'зеленый'},
			{value: 'blue', label: 'голубой'},
			{value: 'dark-blue', label: 'синий'},
			{value: 'purple', label: 'фиолетовый'},
			{value: 'purple', label: 'пурпурный'},
			{value: 'pink', label: 'розовый'},
			{value: 'white', label: 'белый'},
			{value: 'gray', label: 'серый'},
			{value: 'black', label: 'черный'},
			{value: 'gold', label: 'золотой'},
			{value: 'silver', label: 'серебряный'}
		];

		this.mileage = [
			{value: 1, label: '0 - 4 999'},
			{value: 2, label: '5 000 - 9 999'},
			{value: 3, label: '10 000 - 14 999'},
			{value: 4, label: '15 000 - 19 999'},
			{value: 5, label: '20 000 - 24 999'},
			{value: 6, label: '25 000 - 29 999'},
			{value: 7, label: '30 000 - 34 999'},
			{value: 8, label: '35 000 - 39 999'},
			{value: 9, label: '40 000 - 44 999'},
			{value: 10, label: '45 000 - 49 999'},
			{value: 11, label: '50 000 - 54 999'},
			{value: 12, label: '55 000 - 59 999'},
			{value: 13, label: '60 000 - 64 999'},
			{value: 14, label: '65 000 - 69 999'},
			{value: 15, label: '70 000 - 74 999'},
			{value: 16, label: '75 000 - 79 999'},
			{value: 17, label: '80 000 - 84 999'},
			{value: 18, label: '85 000 - 89 999'},
			{value: 19, label: '90 000 - 94 999'},
			{value: 20, label: '95 000 - 99 999'},
			{value: 21, label: '100 000 - 109 999'},
			{value: 22, label: '110 000 - 119 999'},
			{value: 23, label: '120 000 - 129 999'},
			{value: 24, label: '130 000 - 139 999'},
			{value: 25, label: '140 000 - 149 999'},
			{value: 26, label: '150 000 - 159 999'},
			{value: 27, label: '160 000 - 169 999'},
			{value: 28, label: '170 000 - 179 999'},
			{value: 29, label: '180 000 - 189 999'},
			{value: 30, label: '190 000 - 199 999'},
			{value: 31, label: '200 000 - 209 999'},
			{value: 32, label: '210 000 - 219 999'},
			{value: 33, label: '220 000 - 229 999'},
			{value: 34, label: '230 000 - 239 999'},
			{value: 35, label: '240 000 - 249 999'},
			{value: 36, label: '250 000 - 259 999'},
			{value: 37, label: '260 000 - 269 999'},
			{value: 38, label: '270 000 - 279 999'},
			{value: 39, label: '280 000 - 289 999'},
			{value: 40, label: '290 000 - 299 999'},
			{value: 41, label: '300 000 - 309 999'},
			{value: 42, label: '310 000 - 319 999'},
			{value: 43, label: '320 000 - 329 999'},
			{value: 44, label: '330 000 - 339 999'},
			{value: 45, label: '340 000 - 349 999'},
			{value: 46, label: '350 000 - 359 999'},
			{value: 47, label: '360 000 - 369 999'},
			{value: 48, label: '370 000 - 379 999'},
			{value: 49, label: '380 000 - 389 999'},
			{value: 50, label: '390 000 - 399 999'},
			{value: 51, label: '400 000 - 409 999'},
			{value: 52, label: '410 000 - 419 999'},
			{value: 53, label: '420 000 - 429 999'},
			{value: 54, label: '430 000 - 439 999'},
			{value: 55, label: '440 000 - 449 999'},
			{value: 56, label: '450 000 - 459 999'},
			{value: 57, label: '460 000 - 469 999'},
			{value: 58, label: '470 000 - 479 999'},
			{value: 59, label: '480 000 - 489 999'},
			{value: 60, label: '490 000 - 499 999'},
			{value: 61, label: '500 000'}
		];

		this.transmission = [
			{value: 'mt', label: 'механика'},
			{value: 'at', label: 'автомат'},
			{value: 'robot', label: 'робот'},
			{value: 'variable', label: 'вариатор'}
		];

		this.et = [
			{label: 'бензиновый', type: et.gasoline},
			{label: 'дизельный', type: et.diesel},
			{label: 'гибрид', type: et.hybrid},
			{label: 'электро', type: et.electro},
			{label: 'газ', type: et.gas}
		];

		this.du = [
			{label: 'передний', type: du.front},
			{label: 'задний', type: du.rear},
			{label: 'полный', type: du.all}
		];

		this.makes = [
			{
				name: 'Acura',
				models: [
					{
						name: 'TLX',
						eq: ['Techno', 'Advance'],
						mod: [
							{name: '2.4 DCT', du: du.rear, hp: 208, ac: 8.2, ec: 2.4, et: et.gasoline},
							{name: '3.5 AT AWD', dU: du.all, hp: 290, ac: 6.9, ec: 3.5, et: et.gasoline},
						]
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
				}, {
					name: 'Punto'
				}, {
					name: 'Scudo'
				}, {
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
					name: 'Hover H5'
				}]
			},
			{
				/* Car Mark */
				name: 'Haima', models: [
				{
					name: 'M3'
				}]
			},
			{
				/* Car Mark */
				name: 'Haval', models: [
				{
					name: 'H2'
				}, {
					name: 'H6'
				}, {
					name: 'H8'
				}, {
					name: 'H9'
				}]
			},
			{
				/* Car Mark */
				name: 'Honda', models: [
				{
					name: 'CR-V'
				}, {
					name: 'Pilot'
				}]
			},
			{
				/* Car Mark */
				name: 'Hyundai', models: [
				{
					name: 'Solaris'
				}, {
					name: 'i30'
				}, {
					name: 'Elantra'
				}, {
					name: 'Veloster'
				}, {
					name: 'i40'
				}, {
					name: 'Genesis'
				}, {
					name: 'EQUUS'
				}, {
					name: 'Creta'
				}, {
					name: 'Tucson'
				}, {
					name: 'Santa Fe'
				}, {
					name: 'Grand Santa Fe'
				}, {
					name: 'HD'
				}, {
					name: 'H-1'
				}]
			},
			{
				/* Car Mark */
				name: 'Infiniti', models: [
				{
					name: 'Q50'
				}, {
					name: 'Q70'
				}, {
					name: 'QX50'
				}, {
					name: 'QX60'
				}, {
					name: 'QX70'
				}, {
					name: 'QX80'
				}]
			},
			{
				/* Car Mark */
				name: 'Jaguar', models: [
				{
					name: 'XE'
				}, {
					name: 'XF'
				}, {
					name: 'XJ'
				}, {
					name: 'F-Pace'
				}, {
					name: 'F-Type'
				}]
			},
			{
				/* Car Mark */
				name: 'Jeep', models: [
				{
					name: 'Renegade'
				}, {
					name: 'Compass'
				}, {
					name: 'Cherokee'
				}, {
					name: 'Grand Cherokee'
				}, {
					name: 'Grand Cherokee SRT8'
				}, {
					name: 'Wrangler'
				}]
			},
			{
				/* Car Mark */
				name: 'KIA', models: [
				{
					name: 'Picanto'
				}, {
					name: 'Rio'
				}, {
					name: `pro_cee'd`
				}, {
					name: `cee'd`
				}, {
					name: `cee'd_sw`
				}, {
					name: `pro_cee'd GT`
				}, {
					name: `cee'd GT`
				}, {
					name: 'Cerato'
				}, {
					name: 'Soul'
				}, {
					name: 'Optima'
				}, {
					name: 'Optima GT'
				}, {
					name: 'Quoris'
				}, {
					name: 'Sportage'
				}, {
					name: 'Sorento'
				}, {
					name: 'Mohave'
				}, {
					name: 'Venga'
				}]
			},
			{
				/* Car Mark */
				name: 'Lada', models: [
				{
					name: 'XRAY'
				}, {
					name: 'Granta'
				}, {
					name: 'Granta Sport'
				}, {
					name: 'Kalina'
				}, {
					name: 'Kalina Cross'
				}, {
					name: 'Kalina Sport'
				}, {
					name: 'Kalina NFR'
				}, {
					name: 'Vesta'
				}, {
					name: 'Priora'
				}, {
					name: 'Largus'
				}, {
					name: 'Largus Cross'
				}, {
					name: '4x4'
				}, {
					name: '4x4 Urban'
				}]
			},
			{
				/* Car Mark */
				name: 'Lamborghini', models: [
				{
					name: 'Huracan LP610-4'
				}, {
					name: 'Aventador LP700-4'
				}]
			},
			{
				/* Car Mark */
				name: 'Land Rover', models: [
				{
					name: 'Discovery Sport'
				}, {
					name: 'Range Rover Evoque'
				}, {
					name: 'Discovery IV'
				}, {
					name: 'Range Rover Sport'
				}, {
					name: 'Range Rover'
				}]
			},
			{
				/* Car Mark */
				name: 'Lexus', models: [
				{
					name: 'IS'
				}, {
					name: 'ES'
				}, {
					name: 'GS'
				}, {
					name: 'GS F'
				}, {
					name: 'LS'
				}, {
					name: 'NX'
				}, {
					name: 'RX'
				}, {
					name: 'GX'
				}, {
					name: 'LX'
				}, {
					name: 'RC F'
				}, {
					name: 'RC'
				}]
			},
			{
				/* Car Mark */
				name: 'LIFAN', models: [
				{
					name: 'X50'
				}, {
					name: 'Smily'
				}, {
					name: 'Celliya'
				}, {
					name: 'Solano'
				}, {
					name: 'Cebrium'
				}, {
					name: 'X60'
				}]
			},
			{
				/* Car Mark */
				name: 'Maserati', models: [
				{
					name: 'Ghibli Diesel'
				}, {
					name: 'Ghibli'
				}, {
					name: 'Ghibli S Q4'
				}, {
					name: 'Quattroporte S Q4'
				}, {
					name: 'Quattroporte GTS'
				}, {
					name: 'Levante'
				}, {
					name: 'Levante S'
				}, {
					name: 'Levante Diesel'
				}]
			},
			{
				/* Car Mark */
				name: 'Mazda', models: [
				{
					name: '3'
				}, {
					name: '6'
				}, {
					name: 'CX-5'
				}]
			},
			{
				/* Car Mark */
				name: 'Mercedes-Benz', models: [
				{
					name: 'A'
				}, {
					name: 'A AMG'
				}, {
					name: 'CLA'
				}, {
					name: 'CLA AMG'
				}, {
					name: 'C'
				}, {
					name: 'C AMG'
				}, {
					name: 'E'
				}, {
					name: 'E AMG'
				}, {
					name: 'CLS'
				}, {
					name: 'CLS AMG'
				}, {
					name: 'S'
				}, {
					name: 'S AMG'
				}, {
					name: 'Maybach S'
				}, {
					name: 'GLA'
				}, {
					name: 'GLA AMG'
				}, {
					name: 'GLC'
				}, {
					name: 'GLE'
				}, {
					name: 'GLE AMG'
				}, {
					name: 'GLS'
				}, {
					name: 'GLS AMG'
				}, {
					name: 'G'
				}, {
					name: 'G AMG'
				}, {
					name: 'G 4x4²'
				}, {
					name: 'C'
				}, {
					name: 'C AMG'
				}, {
					name: 'E'
				}, {
					name: 'AMG GT'
				}, {
					name: 'S'
				}, {
					name: 'S AMG'
				}, {
					name: 'B'
				}, {
					name: 'Sprinter'
				}, {
					name: 'Citan'
				}, {
					name: 'Vito'
				}, {
					name: 'V'
				}]
			},
			{
				/* Car Mark */
				name: 'MINI', models: [
				{
					name: 'Cooper'
				}, {
					name: 'Cooper S'
				}, {
					name: 'John Cooper Works'
				}, {
					name: 'Cooper Clubman'
				}, {
					name: 'Cooper S Clubman'
				}, {
					name: 'Cooper Paceman'
				}, {
					name: 'Cooper S Paceman'
				}, {
					name: 'John Cooper Works Paceman'
				}, {
					name: 'Cooper Countryman'
				}, {
					name: 'Cooper S Countryman'
				}, {
					name: 'Cooper SD Countryman'
				}, {
					name: 'John Cooper Works Countryman'
				}]
			},
			{
				/* Car Mark */
				name: 'Mitsubishi', models: [
				{
					name: 'i-MiEV'
				}, {
					name: 'Lancer Evolution X'
				}, {
					name: 'Outlander'
				}, {
					name: 'Pajero Sport'
				}, {
					name: 'L200'
				}]
			},
			{
				/* Car Mark */
				name: 'Nissan', models: [
				{
					name: 'Juke'
				}, {
					name: 'Almera'
				}, {
					name: 'Tiida'
				}, {
					name: 'Sentra'
				}, {
					name: 'Teana'
				}, {
					name: 'Terrano'
				}, {
					name: 'Qashqai'
				}, {
					name: 'X-Trail'
				}, {
					name: 'Murano'
				}, {
					name: 'Pathfinder'
				}, {
					name: 'Patrol'
				}, {
					name: 'GT-R'
				}]
			},
			{
				/* Car Mark */
				name: 'Peugeot', models: [
				{
					name: '208'
				}, {
					name: '301'
				}, {
					name: '408'
				}, {
					name: '308'
				}, {
					name: '3008'
				}, {
					name: '508'
				}, {
					name: '2008'
				}, {
					name: 'Partner'
				}, {
					name: 'Expert'
				}, {
					name: 'Boxer'
				}]
			},
			{
				/* Car Mark */
				name: 'Porsche', models: [
				{
					name: 'Panamera'
				}, {
					name: 'Panamera Diesel'
				}, {
					name: 'Panamera 4'
				}, {
					name: 'Panamera S'
				}, {
					name: 'Panamera 4S'
				}, {
					name: 'Panamera S E-Hybrid'
				}, {
					name: 'Panamera GTS'
				}, {
					name: 'Panamera Turbo'
				}, {
					name: 'Panamera Turbo S'
				}, {
					name: 'Macan'
				}, {
					name: 'Macan S'
				}, {
					name: 'Macan S Diesel'
				}, {
					name: 'Macan GTS'
				}, {
					name: 'Macan Turbo'
				}, {
					name: 'Cayenne'
				}, {
					name: 'Cayenne Diesel'
				}, {
					name: 'Cayenne S'
				}, {
					name: 'Cayenne S Diesel'
				}, {
					name: 'Cayenne S E-Hybrid'
				}, {
					name: 'Cayenne GTS'
				}, {
					name: 'Cayenne Turbo'
				}, {
					name: 'Cayenne Turbo S'
				}]
			},
			{
				/* Car Mark */
				name: 'Ravon', models: [
				{
					name: 'R2'
				}, {
					name: 'Matiz'
				}, {
					name: 'Nexia'
				}, {
					name: 'Gentra'
				}]
			},
			{
				/* Car Mark */
				name: 'Renault', models: [
				{
					name: 'Logan'
				}, {
					name: 'Sandero'
				}, {
					name: 'Sandero Stepway'
				}, {
					name: 'Clio RS'
				}, {
					name: 'Megane'
				}, {
					name: 'Fluence'
				}, {
					name: 'Megane RS'
				}, {
					name: 'Duster'
				}, {
					name: 'Kaptur'
				}, {
					name: 'Koleos'
				}, {
					name: 'Kangoo'
				}]
			},
			{
				/* Car Mark */
				name: 'Skoda', models: [
				{
					name: 'Rapid'
				}, {
					name: 'Octavia'
				}, {
					name: 'Octavia Scout'
				}, {
					name: 'Octavia RS'
				}, {
					name: 'Superb'
				}, {
					name: 'Yeti'
				}]
			},
			{
				/* Car Mark */
				name: 'Smart', models: [
				{
					name: 'fortwo'
				}, {
					name: 'forfour'
				}]
			},
			{
				/* Car Mark */
				name: 'SsangYong', models: [
				{
					name: 'Actyon'
				}, {
					name: 'Kyron'
				}, {
					name: 'Rexton'
				}, {
					name: 'Stavic'
				}, {
					name: 'Actyon Sports'
				}]
			},
			{
				/* Car Mark */
				name: 'Subaru', models: [
				{
					name: 'XV'
				}, {
					name: 'WRX'
				}, {
					name: 'WRX STI'
				}, {
					name: 'Outback'
				}, {
					name: 'Forester'
				}]
			},
			{
				/* Car Mark */
				name: 'Suzuki', models: [
				{
					name: 'SX4'
				}, {
					name: 'Vitara'
				}, {
					name: 'Jimny'
				}, {
					name: 'Grand Vitara'
				}]
			},
			{
				/* Car Mark */
				name: 'Toyota', models: [
				{
					name: 'Corolla'
				}, {
					name: 'Prius'
				}, {
					name: 'Camry'
				}, {
					name: 'RAV4'
				}, {
					name: 'Highlander'
				}, {
					name: 'Land Cruiser Prado'
				}, {
					name: 'Land Cruiser 200'
				}, {
					name: 'GT86'
				}, {
					name: 'Alphard'
				}, {
					name: 'Hilux'
				}, {
					name: 'Hiace'
				}]
			},
			{
				/* Car Mark */
				name: 'Volkswagen', models: [
				{
					name: 'Polo'
				}, {
					name: 'Jetta'
				}, {
					name: 'Golf'
				}, {
					name: 'Golf GTI'
				}, {
					name: 'Golf R'
				}, {
					name: 'Beetle'
				}, {
					name: 'Passat'
				}, {
					name: 'Passat Alltrack'
				}, {
					name: 'Passat CC'
				}, {
					name: 'Tiguan'
				}, {
					name: 'Touareg'
				}, {
					name: 'Crafter'
				}, {
					name: 'Caddy'
				}, {
					name: 'Transporter'
				}, {
					name: 'Amarok'
				}, {
					name: 'Caravelle'
				}, {
					name: 'Multivan'
				}, {
					name: 'California'
				}]
			},
			{
				/* Car Mark */
				name: 'Volvo', models: [
				{
					name: 'V40 Cross Country'
				}, {
					name: 'S60'
				}, {
					name: 'S60 Cross Country'
				}, {
					name: 'V60 Cross Country'
				}, {
					name: 'S90'
				}, {
					name: 'XC60'
				}, {
					name: 'XC70'
				}, {
					name: 'XC90'
				}]
			},
			{
				/* Car Mark */
				name: 'Zotye', models: [
				{
					name: 'Z300'
				}, {
					name: 'T600'
				}]
			},
			{
				/* Car Mark */
				name: 'УАЗ', models: [
				{
					name: 'Hunter'
				}, {
					name: 'Patriot'
				}, {
					name: '3303'
				}, {
					name: '39625'
				}, {
					name: '3909'
				}, {
					name: '2206'
				}, {
					name: '39094'
				}, {
					name: 'Cargo'
				}, {
					name: 'Pickup'
				}]
			}
		];

		this.models = {};
		this.get = this.get.bind(this);
	}

	get() {
		return this.makes;
	}
}

export default Car;
