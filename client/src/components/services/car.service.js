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

		this.elements = [
			{label: 'переднего бампера', value: 1},
			{label: 'левой фары', value: 2},
			{label: 'правой фары', value: 3},
			{label: 'переднего капота', value: 4},
			{label: 'лобового стекла', value: 5},
			{label: 'крыши', value: 6},
			{label: 'заднего стекла', value: 7},
			{label: 'заднего номера', value: 8},
			{label: 'заднего бампера', value: 9},
			{label: 'левой задней фары', value: 10},
			{label: 'правой задней фары', value: 11},
			{label: 'правого переднего крыла', value: 12},
			{label: 'правого переднего колеса', value: 13},
			{label: 'правой передней двери', value: 14},
			{label: 'правой заднй двери', value: 15},
			{label: 'правого заднего колеса', value: 16},
			{label: 'правого заднего подкрылка', value: 17},
			{label: 'левый передний подкрылок', value: 18},
			{label: 'левое переднее колесо', value: 19},
			{label: 'левая передная дверь', value: 20},
			{label: 'левая задняя дверь', value: 21},
			{label: 'левая заднее колесо', value: 22},
			{label: 'левый задний подкрылок', value: 23}
		];

		this.damageTypes = [
			{label: 'Глубокая вмятина', value: 1},
			{label: 'царапина', value: 2}
		];

		this.typeRepair = [
			{label: 'Покраска детали', value: 1},
			{label: 'Замена детали', value: 2}
		];

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
							{name: '2.4 DCT', du: du.front, hp: 208, ac: 8.2, ec: 2.4, et: et.gasoline},
							{name: '3.5 AT AWD', dU: du.all, hp: 290, ac: 6.9, ec: 3.5, et: et.gasoline}
						]
					}, {
						name: 'RDX',
						eq: ['Techno'],
						mod: [
							{name: '3.5 AT', du: du.all, hp: 273, ac: 7.9, ec: 3.5, et: et.gasoline}
						]
					}, {
						name: 'MDX',
						eq: ['Techno', 'Advance'],
						mod: [
							{name: '3.5 AT', du: du.all, hp: 290, ac: 7.6, ec: 3.5, et: et.gasoline}
						]
					}
				]
			},
			{
				/* Car Mark */
				name: 'Alfa Romeo', models: [
				{
					name: 'MiTo',
					eq: ['Progression', 'Distinctive', 'Quadrifoglio Verde'],
					mod: [
						{name: '0.9 T MT', du: du.front, hp: 105, ac: 11.4, ec: 0.9, et: et.gasoline},
						{name: '1.4 T TCT', du: du.front, hp: 140, ac: 8.1, ec: 1.4, et: et.gasoline},
						{name: '1.4 T TCT', du: du.front, hp: 170, ac: 7.3, ec: 1.4, et: et.gasoline}
					]
				}, {
					name: 'Giulietta',
					eq: ['Progression', 'Distinctive', 'Exclusive'],
					mod: [
						{name: '1.4T MT', du: du.front, hp: 120, ac: 9.4, ec: 1.4, et: et.gasoline},
						{name: '1.4T TCT', du: du.front, hp: 170, ac: 7.6, ec: 1.4, et: et.gasoline}
					]
				}, {
					name: '4C',
					eq: ['Progression'],
					mod: [
						{name: '1.8T TCT', du: du.rear, hp: 240, ac: 4.5, ec: 1.8, et: et.gasoline}
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Aston Martin', models: [
				{
					name: 'Rapide S',
					eq: ['Базовая'],
					mod: [
						{name: '5.9 AT', du: du.rear, hp: 558, ac: 4.9, ec: 5.9, et: et.gasoline}
					]
				}, {
					name: 'DB9',
					eq: ['Базовая'],
					mod: [
						{name: '6.0 AT', du: du.rear, hp: 517, ac: 4.6, ec: 6.0, et: et.gasoline}
					]
				}, {
					name: 'Vanquish',
					eq: ['Базовая'],
					mod: [
						{name: '5.9 AT', du: du.rear, hp: 573, ac: 4.1, ec: 5.9, et: et.gasoline}
					]
				}
			]
			},
			{
				/* Car Mark */
				name: 'Audi', models: [
				{
					name: 'A1',
					eq: ['Базовая', 'Attraction', 'Ambition'],
					mod: [
						{name: '1.4 TFSI MT', du: du.front, hp: 125, ac: 8.9, ec: 1.4, et: et.gasoline},
						{name: '1.4 TFSI AMT', du: du.front, hp: 125, ac: 8.9, ec: 1.4, et: et.gasoline},
						{name: '1.4 TFSI AMT', du: du.front, hp: 150, ac: 7.9, ec: 1.4, et: et.gasoline},
						{name: '1.8 TFSI AMT', du: du.front, hp: 192, ac: 6.9, ec: 1.4, et: et.gasoline}
					]
				}, {
					name: 'A3',
					eq: ['Базовая', 'Sport'],
					mod: [
						{name: '1.4 TFSI MT', du: du.front, hp: 150, ac: 8.2, ec: 1.4, et: et.gasoline},
						{name: '1.4 TFSI AMT', du: du.front, hp: 150, ac: 8.2, ec: 1.4, et: et.gasoline},
						{name: '2.0 TFSI AMT', du: du.front, hp: 190, ac: null, ec: 2.0, et: et.gasoline},
						{name: '2.0 TFSI quattro AMT', du: du.all, hp: 190, ac: null, ec: 2.0, et: et.gasoline}
					]
				}, {
					name: 'A4',
					eq: ['Design line', 'Sport line'],
					mod: [
						{name: '1.4 TFSI MT', du: du.front, hp: 150, ac: 8.7, ec: 1.4, et: et.gasoline},
						{name: '1.4 TFSI AMT', du: du.front, hp: 150, ac: 8.5, ec: 1.4, et: et.gasoline},
						{name: '2.0 TFSI MT', du: du.front, hp: 190, ac: 7.2, ec: 2.0, et: et.gasoline},
						{name: '2.0 TFSI AMT', du: du.front, hp: 190, ac: 7.3, ec: 2.0, et: et.gasoline},
						{name: '2.0 TFSI AMT', du: du.front, hp: 249, ac: 6.3, ec: 2.0, et: et.gasoline},
						{name: '2.0 TFSI quattro AMT', du: du.all, hp: 249, ac: 5.8, ec: 2.0, et: et.gasoline}
					]
				}, {
					name: 'A5',
					eq: ['Базовая'],
					mod: [
						{name: '1.8 TFSI MT', du: du.front, hp: 144, ac: 9.3, ec: 1.8, et: et.gasoline},
						{name: '1.8 TFSI CVT', du: du.front, hp: 144, ac: 9.6, ec: 1.8, et: et.gasoline},
						{name: '1.8 TFSI MT', du: du.front, hp: 177, ac: 8.2, ec: 1.8, et: et.gasoline},
						{name: '1.8 TFSI CVT', du: du.front, hp: 177, ac: 8.4, ec: 1.8, et: et.gasoline},
						{name: '2.0 TFSI МТ	', du: du.front, hp: 230, ac: 7, ec: 2.0, et: et.gasoline},
						{name: '2.0 TFSI CVТ', du: du.front, hp: 230, ac: 7.2, ec: 2.0, et: et.gasoline},
						{name: '2.0 TFSI quattro МТ', du: du.all, hp: 230, ac: 6.5, ec: 2.0, et: et.gasoline},
						{name: '2.0 TFSI quattro AМТ', du: du.all, hp: 230, ac: 6.5, ec: 2.0, et: et.gasoline},
						{name: '3.0 TFSI quattro AMT', du: du.all, hp: 272, ac: 6, ec: 3.0, et: et.gasoline}
					]
				}, {
					name: 'A6',
					eq: ['Базовая'],
					mod: [
						{name: '1.8 TFSI MT', du: du.front, hp: 190, ac: 7.9, ec: 1.8, et: et.gasoline},
						{name: '1.8 TFSI AMT', du: du.front, hp: 190, ac: 7.9, ec: 1.8, et: et.gasoline},
						{name: '2.0 TFSI quattro AMT', du: du.all, hp: 249, ac: 6.5, ec: 2.0, et: et.gasoline},
						{name: '2.0 TFSI AMT', du: du.front, hp: 252, ac: 6.7, ec: 2.0, et: et.gasoline},
						{name: '3.0 TFSI quattro AMT', du: du.all, hp: 333, ac: 5.1, ec: 3.0, et: et.gasoline}
					]
				}, {
					name: 'A7',
					eq: ['Базовая'],
					mod: [
						{name: '2.0 TFSI quattro AMT', du: du.all, hp: 249, ac: 6.5, ec: 2.0, et: et.gasoline},
						{name: '3.0 TFSI quattro AMТ', du: du.all, hp: 333, ac: 5.3, ec: 3.0, et: et.gasoline}
					]
				}, {
					name: 'A8',
					eq: ['Базовая', 'Базовая W12'],
					mod: [
						{name: '3.0 TFSI quattro AТ', du: du.all, hp: 310, ac: 5.7, ec: 3.0, et: et.gasoline},
						{name: '3.0 L TFSI quattro AТ', du: du.all, hp: 310, ac: 5.9, ec: 3.0, et: et.gasoline},
						{name: '4.0 TFSI quattro AТ', du: du.all, hp: 435, ac: 4.5, ec: 4.0, et: et.gasoline},
						{name: '4.0 L TFSI quattro AТ', du: du.all, hp: 435, ac: 4.6, ec: 4.0, et: et.gasoline},
						{name: '6.3 L FSI quattro AТ', du: du.all, hp: 500, ac: 4.6, ec: 6.3, et: et.gasoline}
					]
				}, {
					name: 'Q3',
					eq: ['Базовая', 'Sport', 'Design'],
					mod: [
						{name: '1.4 TFSI MT', du: du.front, hp: 150, ac: 9.2, ec: 1.4, et: et.gasoline},
						{name: '1.4 TFSI AMT', du: du.front, hp: 150, ac: 8.9, ec: 1.4, et: et.gasoline},
						{name: '2.0 TFSI quattro AMT', du: du.all, hp: 180, ac: null, ec: 2.0, et: et.gasoline},
						{name: '2.0 TFSI quattro AMT', du: du.all, hp: 220, ac: 6.4, ec: 2.0, et: et.gasoline},
						{name: '2.0 TDI quattro AMT	', du: du.all, hp: 184, ac: 7.9, ec: 2.0, et: et.diesel}
					]
				}, {
					name: 'Q5',
					eq: ['Базовая'],
					mod: [
						{name: '2.0 TFSI quattro MT', du: du.all, hp: 180, ac: 8.5, ec: 2.0, et: et.gasoline},
						{name: '2.0 TFSI quattro MT', du: du.all, hp: 230, ac: 7.2, ec: 2.0, et: et.gasoline},
						{name: '2.0 TFSI quattro AT', du: du.all, hp: 230, ac: 6.9, ec: 2.0, et: et.gasoline},
						{name: '3.0 TFSI quattro AT', du: du.all, hp: 272, ac: 5.9, ec: 3.0, et: et.gasoline}
					]
				}, {
					name: 'Q7',
					eq: ['Базовая'],
					mod: [
						{name: '2.0 TFSI quattro AT', du: du.all, hp: 252, ac: 6.9, ec: 2.0, et: et.gasoline},
						{name: '3.0 TFSI quattro AT', du: du.all, hp: 333, ac: 6.1, ec: 3.0, et: et.gasoline},
						{name: '3.0 TDI quattro AT', du: du.all, hp: 249, ac: 6.9, ec: 3.0, et: et.diesel}
					]
				}, {
					name: 'R8',
					eq: ['Базовая'],
					mod: [
						{name: '5.2 FSI quattro AMT', du: du.all, hp: 540, ac: 3.5, ec: 5.2, et: et.gasoline},
						{name: '5.2 FSI quattro AMT', du: du.all, hp: 610, ac: 3.2, ec: 5.2, et: et.gasoline}
					]
				}, {
					name: 'RS Q3',
					eq: ['Базовая'],
					mod: [
						{name: '2.5 TFSI quattro AMT', du: du.all, hp: 340, ac: 4.8, ec: 2.5, et: et.gasoline}
					]
				}, {
					name: 'RS6',
					eq: ['Базовая'],
					mod: [
						{name: '4.0 TFSI quattro AMT', du: du.all, hp: 560, ac: 3.9, ec: 4.0, et: et.gasoline},
						{name: '4.0 TFSI quattro AMT', du: du.all, hp: 605, ac: 3.7, ec: 4.0, et: et.gasoline}
					]
				}, {
					name: 'RS7',
					eq: ['Базовая'],
					mod: [
						{name: '4.0 TFSI quattro AMТ', du: du.all, hp: 560, ac: 3.9, ec: 4.0, et: et.gasoline},
						{name: '4.0 TFSI quattro AMТ', du: du.all, hp: 605, ac: 3.7, ec: 4.0, et: et.gasoline}
					]
				}, {
					name: 'S3',
					eq: ['Базовая'],
					mod: [
						{name: '2.0 TFSI quattro MT', du: du.all, hp: 300, ac: 5.3, ec: 2.0, et: et.gasoline},
						{name: '2.0 TFSI quattro AMT', du: du.all, hp: 300, ac: 4.9, ec: 2.0, et: et.gasoline}
					]
				}, {
					name: 'S5',
					eq: ['Базовая'],
					mod: [
						{name: '3.0 TFSI quattro AMT', du: du.all, hp: 333, ac: 5.1, ec: 3.0, et: et.gasoline}
					]
				}, {
					name: 'S6',
					eq: ['Базовая'],
					mod: [
						{name: '4.0 TFSI quattro AMT', du: du.all, hp: 450, ac: 4.4, ec: 4.0, et: et.gasoline}
					]
				}, {
					name: 'S7',
					eq: ['Базовая'],
					mod: [
						{name: '4.0 TFSI quattro AMТ', du: du.all, hp: 450, ac: 4.6, ec: 4.0, et: et.gasoline}
					]
				}, {
					name: 'S8',
					eq: ['S8', 'S8 Plus'],
					mod: [
						{name: '4.0 TFSI quattro AТ', du: du.all, hp: 520, ac: 4.1, ec: 4.0, et: et.gasoline},
						{name: '4.0 TFSI quattro AТ', du: du.all, hp: 605, ac: 3.8, ec: 4.0, et: et.gasoline}
					]
				}, {
					name: 'SQ5',
					eq: ['Базовая'],
					mod: [
						{name: '3.0 TFSI AMT', du: du.all, hp: 354, ac: 5.4, ec: 3.0, et: et.gasoline}
					]
				}, {
					name: 'SQ7',
					eq: ['Базовая'],
					mod: [
						{name: '4.0 TDI quattro AT', du: du.all, hp: 435, ac: 4.8, ec: 4.0, et: et.diesel}
					]
				}, {
					name: 'TT',
					eq: ['Базовая'],
					mod: [
						{name: '1.8 TFSI MT', du: du.front, hp: 180, ac: 6.9, ec: 1.8, et: et.gasoline},
						{name: '1.8 TFSI AMT', du: du.front, hp: 180, ac: 7, ec: 1.8, et: et.gasoline},
						{name: '2.0 TFSI MT', du: du.front, hp: 230, ac: 6, ec: 2.0, et: et.gasoline},
						{name: '2.0 TFSI AMT', du: du.front, hp: 230, ac: 5.9, ec: 2.0, et: et.gasoline},
						{name: '2.0 TFSI quattro AMT	', du: du.all, hp: 230, ac: 5.3, ec: 2.0, et: et.gasoline}
					]
				}, {
					name: 'TTS',
					eq: ['Базовая'],
					mod: [
						{name: '2.0 TFSI quattro MT', du: du.all, hp: 310, ac: 4.9, ec: 2.0, et: et.gasoline},
						{name: '2.0 TFSI quattro AMT	', du: du.all, hp: 310, ac: 4.6, ec: 2.0, et: et.gasoline}
					]
				}
			]
			},
			{
				/* Car Mark */
				name: 'Bentley', models: [
				{
					name: 'Flying Spur',
					eq: ['Базовая'],
					mod: [
						{name: '6.0 AT', du: du.all, hp: 625, ac: 4.6, ec: 6.0, et: et.gasoline}
					]
				}, {
					name: 'Mulsanne',
					eq: ['Базовая'],
					mod: [
						{name: '6.8 AT', du: du.rear, hp: 505, ac: 5.3, ec: 6.8, et: et.gasoline}
					]
				}, {
					name: 'Continental GT Speed',
					eq: ['Базовая'],
					mod: [
						{name: '6.0 AT', du: du.all, hp: 625, ac: 4.2, ec: 6.0, et: et.gasoline}
					]
				}, {
					name: 'Continental GT',
					eq: ['Базовая'],
					mod: [
						{name: '6.0 AT', du: du.all, hp: 575, ac: 4.5, ec: 6.0, et: et.gasoline}
					]
				}, {
					name: 'Continental GT V8',
					eq: ['Базовая'],
					mod: [
						{name: '4.0 AT', du: du.all, hp: 507, ac: 4.8, ec: 4.0, et: et.gasoline}
					]
				}
			]
			},
			{
				/* Car Mark */
				name: 'BMW', models: [
				{
					name: 'i3',
					eq: ['Базовая'],
					mod: [
						{name: 'i3', du: du.rear, hp: 170, ac: 7.2, et: et.electro},
						{name: 'i3 REx', du: du.rear, hp: 170, ac: 7.9, et: et.electro}
					]
				}, {
					name: 'i8',
					eq: ['Базовая'],
					mod: [
						{name: 'i8', du: du.all, hp: 362, ac: 4.4, et: et.gasoline},
					]
				}, {
					name: '1',
					eq: ['Базовая', 'Base', 'Advantage', 'Urban Line', 'Sport Line', 'M Sport'],
					mod: [
						{name: '118i MT', du: du.rear, hp: 136, ac: 8.5, et: et.gasoline},
						{name: '118i AT', du: du.rear, hp: 136, ac: 8.7, et: et.gasoline},
						{name: '120i AT', du: du.rear, hp: 177, ac: 7.2, et: et.gasoline},
						{name: 'M 140i AT', du: du.all, hp: 340, ac: 4.6, et: et.gasoline},
						{name: 'M 140i AT xDrive', du: du.all, hp: 340, ac: 4.4, et: et.gasoline}
					]
				}, {
					name: '3',
					eq: ['Базовая', 'Sport Line', 'Luxury Line', 'SE Локальная сборка', 'M Sport Локальная сборка', 'Sport Line Локальная сборка', 'Luxury Line Локальная сборка'],
					mod: [
						{name: '318i MT', du: du.rear, hp: 136, ac: 8.9, et: et.gasoline},
						{name: '318i AT	', du: du.rear, hp: 136, ac: 9.1, et: et.gasoline},
						{name: '320i MT', du: du.rear, hp: 184, ac: 7.2, et: et.gasoline},
						{name: '320i AT', du: du.rear, hp: 184, ac: 7.3, et: et.gasoline},
						{name: '320i MT xDrive', du: du.all, hp: 184, ac: 7.5, et: et.gasoline},
						{name: '320i AT xDrive', du: du.all, hp: 184, ac: 7.6, et: et.gasoline},
						{name: '330i AT xDrive', du: du.all, hp: 249, ac: 5.8, et: et.gasoline},
						{name: '320d AT', du: du.rear, hp: 190, ac: 7.2, et: et.diesel},
						{name: '320d AT xDrive', du: du.all, hp: 190, ac: 7.3, et: et.diesel},
						{name: '340i AT xDrive', du: du.all, hp: 326, ac: 4.9, et: et.gasoline}
					]
				}, {
					name: '4',
					eq: ['Sport Line', 'Luxury Line'],
					mod: [
						{name: '420i AT', du: du.rear, hp: 184, ac: 7.5, et: et.gasoline},
						{name: '420i AT xDrive', du: du.all, hp: 184, ac: 7.8, et: et.gasoline},
						{name: '430i AT xDrive', du: du.all, hp: 249, ac: 5.8, et: et.gasoline},
						{name: '420d AT', du: du.rear, hp: 184, ac: 7.3, et: et.diesel},
						{name: '420d AT xDrive', du: du.all, hp: 184, ac: 7.3, et: et.diesel},
						{name: '440i AT xDrive', du: du.all, hp: 326, ac: 4.9, et: et.gasoline}
					]
				}, {
					name: '5',
					eq: ['Базовая', 'SE Локальная сборка', 'M Sport Локальная сборка', 'Business Локальная сборка', 'Luxury Локальная сборка'],
					mod: [
						{name: '520i AT', du: du.rear, hp: 184, ac: 7.9, et: et.gasoline},
						{name: '528i AT xDrive', du: du.all, hp: 245, ac: 6.3, et: et.gasoline},
						{name: '520d AT', du: du.rear, hp: 184, ac: 7.9, et: et.diesel},
						{name: '525d AT xDrive', du: du.all, hp: 218, ac: 7, et: et.diesel},
						{name: '535i AT xDrive', du: du.all, hp: 306, ac: 5.6, et: et.gasoline},
						{name: '530d AT xDrive', du: du.all, hp: 258, ac: 5.7, et: et.diesel},
						{name: 'M550d AT xDrive', du: du.all, hp: 381, ac: 4.7, et: et.diesel},
						{name: '550i AT xDrive', du: du.all, hp: 450, ac: 4, et: et.gasoline}
					]
				}, {
					name: '6',
					eq: ['Базовая'],
					mod: [
						{name: '640i AT xDrive', du: du.all, hp: 320, ac: 5.2, et: et.gasoline},
						{name: '640d AT xDrive', du: du.all, hp: 313, ac: 5.1, et: et.diesel},
						{name: '650i AT xDrive', du: du.all, hp: 450, ac: 4.4, et: et.gasoline}
					]
				}, {
					name: '7',
					eq: ['Базовая'],
					mod: [
						{name: '740Le xDrive', du: du.all, hp: 245, ac: 5.3, et: et.gasoline},
						{name: '730i', du: du.rear, hp: 258, ac: null, et: et.gasoline},
						{name: '740Li xDrive', du: du.all, hp: 326, ac: 5.2, et: et.gasoline},
						{name: '730d xDrive', du: du.all, hp: 265, ac: 5.8, et: et.diesel},
						{name: '730Ld xDrive', du: du.all, hp: 265, ac: 5.9, et: et.diesel},
						{name: '740d xDrive', du: du.all, hp: 320, ac: 5.2, et: et.diesel},
						{name: '740Ld xDrive', du: du.all, hp: 320, ac: 5.3, et: et.diesel},
						{name: '750d xDrive', du: du.all, hp: 400, ac: 4.6, et: et.diesel},
						{name: '750Ld xDrive', du: du.all, hp: 400, ac: 4.7, et: et.diesel},
						{name: '750i xDrive', du: du.all, hp: 450, ac: 4.4, et: et.gasoline},
						{name: '750Li xDrive', du: du.all, hp: 450, ac: 4.5, et: et.gasoline}
					]
				}, {
					name: 'M2',
					eq: ['Базовая'],
					mod: [
						{name: '3.0 MT', du: du.rear, hp: 370, ac: 4.5, ec: 3.0, et: et.gasoline},
						{name: '3.0 DCT', du: du.rear, hp: 370, ac: 4.3, ec: 3.0, et: et.gasoline}
					]
				}, {
					name: 'M3',
					eq: ['Базовая'],
					mod: [
						{name: '3.0 MT', du: du.rear, hp: 431, ac: 4.3, ec: 3.0, et: et.gasoline},
						{name: '3.0 DCT', du: du.rear, hp: 431, ac: 4.1, ec: 3.0, et: et.gasoline}
					]
				}, {
					name: 'M4',
					eq: ['Базовая'],
					mod: [
						{name: '3.0 MT', du: du.rear, hp: 431, ac: 4.3, ec: 3.0, et: et.gasoline},
						{name: '3.0 DCT', du: du.rear, hp: 431, ac: 4.1, ec: 3.0, et: et.gasoline}
					]
				}, {
					name: 'M5',
					eq: ['Базовая'],
					mod: [
						{name: '4.4 DCT', du: du.rear, hp: 560, ac: 4.3, ec: 4.4, et: et.gasoline}
					]
				}, {
					name: 'M6',
					eq: ['Базовая'],
					mod: [
						{name: '4.4 DCT', du: du.rear, hp: 560, ac: 4.2, ec: 4.4, et: et.gasoline}
					]
				}, {
					name: 'X1',
					eq: ['Базовая'],
					mod: [
						{name: '18i sDrive AT', du: du.front, hp: 136, ac: 9.7, et: et.gasoline},
						{name: '20i xDrive AT', du: du.all, hp: 192, ac: 7.4, et: et.gasoline},
						{name: '25i xDrive AT', du: du.all, hp: 231, ac: 6.5, et: et.gasoline},
						{name: '18d xDrive AT', du: du.all, hp: 150, ac: 9.3, et: et.diesel},
						{name: '20d xDrive AT', du: du.all, hp: 190, ac: 7.6, et: et.diesel},
						{name: '25d xDrive AT', du: du.all, hp: 231, ac: 6.6, et: et.diesel}
					]
				}, {
					name: 'X3',
					eq: ['Базовая', 'Urban Локальная сборка', 'M Sport Локальная сборка', 'Lifestyle Локальная сборка', 'Exclusive Локальная сборка', 'xLine Локальная сборка'],
					mod: [
						{name: '20i MT xDrive', du: du.all, hp: 184, ac: 8.4, et: et.gasoline},
						{name: '20i AT xDrive', du: du.all, hp: 184, ac: 8.2, et: et.gasoline},
						{name: '28i AT xDrive', du: du.all, hp: 245, ac: 6.5, et: et.gasoline},
						{name: '20d MT xDrive', du: du.all, hp: 190, ac: 8.1, et: et.diesel},
						{name: '20d AT xDrive', du: du.all, hp: 190, ac: 8.1, et: et.diesel},
						{name: '35i AT xDrive', du: du.all, hp: 306, ac: 5.6, et: et.gasoline},
						{name: '35d AT xDrive', du: du.all, hp: 250, ac: 5.9, et: et.diesel}
					]
				}, {
					name: 'X4',
					eq: ['Базовая', 'M Sport Локальная сборка', 'Exclusive Локальная сборка	'],
					mod: [
						{name: '20i AT xDrive', du: du.all, hp: 184, ac: 8.1, et: et.gasoline},
						{name: '28i AT xDrive', du: du.all, hp: 245, ac: 6.4, et: et.gasoline},
						{name: '20d AT xDrive', du: du.all, hp: 190, ac: 8, et: et.diesel},
						{name: '35i AT xDrive', du: du.all, hp: 306, ac: 5.5, et: et.gasoline},
						{name: '30d AT xDrive', du: du.all, hp: 250, ac: 5.8, et: et.diesel},
						{name: '35d AT xDrive', du: du.all, hp: 313, ac: 5.2, et: et.diesel}
					]
				}, {
					name: 'X5',
					eq: ['Базовая', 'Prestige Локальная сборка', 'Luxury Локальная сборка', 'Exclusive Локальная сборка', 'M Sport Локальная сборка', 'Pure Experience Локальная сборка', 'Pure Excellence Локальная сборка', 'Business Локальная сборка'],
					mod: [
						{name: '40e', du: du.front, hp: 245, ac: 6.8, et: et.gasoline},
						{name: '35i', du: du.front, hp: 306, ac: 6.5, et: et.gasoline},
						{name: '25d', du: du.front, hp: 218, ac: 8, et: et.diesel},
						{name: '30d', du: du.front, hp: 249, ac: 6.8, et: et.diesel},
						{name: '40d', du: du.front, hp: 313, ac: 5.9, et: et.diesel},
						{name: 'M50d', du: du.front, hp: 381, ac: 5.3, et: et.diesel},
						{name: '50i', du: du.front, hp: 450, ac: 5, et: et.gasoline}
					]
				}, {
					name: 'X5 M',
					eq: ['Базовая'],
					mod: [
						{name: '4.4 AT', du: du.all, hp: 575, ac: 4.2, ec: 4.4, et: et.gasoline}
					]
				}, {
					name: 'X6',
					eq: ['Базовая', 'Prestige Локальная сборка', 'Luxury Локальная сборка', 'M Sport Локальная сборка', 'Pure Extravagance Локальная сборка'],
					mod: [
						{name: '', du: du.all, hp: 306, ac: 6.4, et: et.gasoline},
						{name: '', du: du.all, hp: 249, ac: 6.7, et: et.diesel},
						{name: '', du: du.all, hp: 313, ac: 5.8, et: et.diesel},
						{name: '', du: du.all, hp: 381, ac: 5.2, et: et.diesel},
						{name: '', du: du.all, hp: 450, ac: 4.8, et: et.gasoline}
					]
				}, {
					name: 'X6 M',
					eq: ['Базовая'],
					mod: [
						{name: '4.4 AT', du: du.all, hp: 575, ac: 4.2, ec: 4.4, et: et.gasoline}
					]
				}
			]
			},

			{
				/* Car Mark */
				name: 'Brilliance', models: [
				{
					name: 'H230',
					eq: ['Comfort', 'Deluxe'],
					mod: [
						{name: '1.5 MT', du: du.front, hp: 105, ac: null, ec: 1.5, et: et.gasoline},
						{name: '1.5 AT', du: du.front, hp: 105, ac: null, ec: 1.5, et: et.gasoline}
					]
				}, {
					name: 'H530',
					eq: ['Comfort', 'Deluxe'],
					mod: [
						{name: '1.6 MT', du: du.front, hp: 110, ac: 11.3, ec: 1.6, et: et.gasoline},
						{name: '1.6 AT', du: du.front, hp: 110, ac: 13.1, ec: 1.6, et: et.gasoline}
					]
				}, {
					name: 'V5',
					eq: ['Comfort', 'Deluxe'],
					mod: [
						{name: '1.6 MT', du: du.front, hp: 110, ac: null, ec: 1.6, et: et.gasoline},
						{name: '1.6 AT', du: du.front, hp: 110, ac: null, ec: 1.6, et: et.gasoline}
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Cadillac', models: [
				{
					name: 'CTS',
					eq: ['Standard', 'Luxury', 'Performance', 'Premium'],
					mod: [
						{name: '2.0T AT RWD', du: du.rear, hp: 276, ac: 6.8, ec: 2.0, et: et.gasoline},
						{name: '2.0T AT AWD', du: du.all, hp: 276, ac: 6.8, ec: 2.0, et: et.gasoline}
					]
				}, {
					name: 'XT5',
					eq: ['XT5', 'Luxury', 'Premium', 'Platinum'],
					mod: [
						{name: '3.6 AT AWD', du: du.all, hp: 310, ac: 7, ec: 3.6, et: et.gasoline}
					]
				}, {
					name: 'Escalade',
					eq: ['Luxury', 'Premium', 'Platinum', 'Luxury ESV', 'Premium ESV', 'Platinum ESV'],
					mod: [
						{name: '6.2 AT', du: du.all, hp: 409, ac: null, ec: 6.2, et: et.gasoline}
					]
				}, {
					name: 'SRX',
					eq: ['Base', 'Top'],
					mod: [
						{name: '3.0 AT FWD', du: du.front, hp: 249, ac: null, ec: 3.0, et: et.gasoline},
						{name: '3.0 AT AWD', du: du.all, hp: 249, ac: 8.5, ec: 3.0, et: et.gasoline},
						{name: '3.6 AT AWD', du: du.all, hp: 318, ac: 8.1, ec: 3.6, et: et.gasoline}
					]
				}]
			}, {
				/* Car Mark */
				name: 'Changan', models: [
					{
						name: 'CS35',
						eq: ['Comfort', 'Luxe'],
						mod: [
							{name: '1.6 MT', du: du.front, hp: 113, ac: 14, ec: 1.6, et: et.gasoline},
							{name: '1.6 AT', du: du.front, hp: 113, ac: 15, ec: 1.6, et: et.gasoline}
						]
					}, {
						name: 'Eado',
						eq: ['Comfort', 'Luxe'],
						mod: [
							{name: '1.6 MT', du: du.front, hp: 113, ac: 12.6, ec: 1.6, et: et.gasoline},
							{name: '1.6 AT', du: du.front, hp: 113, ac: 13.5, ec: 1.6, et: et.gasoline}
						]
					}, {
						name: 'Raeton',
						eq: ['Luxe'],
						mod: [
							{name: '1.8 T AT', du: du.front, hp: 163, ac: 11.5, ec: 1.8, et: et.gasoline}
						]
					}]
			},
			{
				/* Car Mark */
				name: 'Chery', models: [
				{
					name: 'IndiS',
					eq: ['IN14C', 'IN14C AMT'],
					mod: [
						{name: '1.3 MT', du: du.front, hp: 83, ac: null, ec: 1.3, et: et.gasoline},
						{name: '1.3 AMT', du: du.front, hp: 83, ac: null, ec: 1.3, et: et.gasoline}
					]
				}, {
					name: 'Bonus 3',
					eq: ['Base', 'Comfort'],
					mod: [
						{name: '1.5 MT', du: du.front, hp: 109, ac: null, ec: 1.5, et: et.gasoline}
					]
				}, {
					name: 'Very',
					eq: ['VR14B', 'VR14BP', 'VR14C', 'VR14LX'],
					mod: [
						{name: '1.5 MT', du: du.front, hp: 109, ac: null, ec: 1.5, et: et.gasoline}
					]
				}, {
					name: 'M11',
					eq: ['MS13C-MT', 'MS13LX-MT', 'MS13C-CVT', 'MS13LX-CVT'],
					mod: [
						{name: '1.6 MT', du: du.front, hp: 125, ac: 14.1, ec: 1.6, et: et.gasoline},
						{name: '1.6 CVT', du: du.front, hp: 125, ac: 15.5, ec: 1.6, et: et.gasoline}
					]
				}, {
					name: 'Arrizo 7',
					eq: ['Luxury'],
					mod: [
						{name: '1.6 MT', du: du.front, hp: 126, ac: null, ec: 1.6, et: et.gasoline},
						{name: '1.6 CVT', du: du.front, hp: 126, ac: null, ec: 1.6, et: et.gasoline}
					]
				}, {
					name: 'Tiggo 5',
					eq: ['Comfort', 'Т21С15-МТ2', 'Luxury', 'T21C15-CVT2'],
					mod: [
						{name: '2.0 MT', du: du.front, hp: 138, ac: null, ec: 2.0, et: et.gasoline},
						{name: '2.0 CVT', du: du.front, hp: 138, ac: null, ec: 2.0, et: et.gasoline}
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Chevrolet', models: [
				{
					name: 'Niva',
					eq: ['L', 'LC', 'GL', 'GLC', 'LE', 'LE Plus'],
					mod: [
						{name: '1.7 MT', du: du.all, hp: 80, ac: 19, ec: 1.7, et: et.gasoline}
					]
				}, {
					name: 'Tahoe',
					eq: ['LE', 'LT', 'LTZ'],
					mod: [
						{name: '6.2 AT', du: du.front, hp: 426, ac: null, ec: 6.2, et: et.gasoline}
					]
				}, {
					name: 'Corvette Stingray',
					eq: ['3LT'],
					mod: [
						{name: '6.2 MT', du: du.rear, hp: 466, ac: 4.2, ec: 6.2, et: et.gasoline},
						{name: '6.2 AT', du: du.rear, hp: 466, ac: 4.2, ec: 6.2, et: et.gasoline}
					]
				}, {
					name: 'Corvette Z06',
					eq: ['3LZ'],
					mod: [
						{name: '6.2 AT', du: du.rear, hp: 659, ac: 3.7, ec: 6.2, et: et.gasoline}
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Chrysler', models: [
				{
					name: 'Grand Voyager',
					eq: ['Limited'],
					mod: [
						{name: '3.6 AT', du: du.front, hp: 283, ac: 9.5, ec: 3.6, et: et.gasoline},
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Citroen', models: [
				{
					name: 'DS3',
					eq: ['So Chic', 'TouchDrive', '3D Led Vision'],
					mod: [
						{name: '1.6 VTi MT', du: du.front, hp: 120, ac: 8.9, ec: 1.6, et: et.gasoline},
						{name: '1.6 VTi AT', du: du.front, hp: 120, ac: 10.9, ec: 1.6, et: et.gasoline}
					]
				}, {
					name: 'C-Elysee',
					eq: ['Dynamique', 'Tendance', 'Exclusive'],
					mod: [
						{name: '1.2 MT', du: du.front, hp: 72, ac: 14.2, ec: 1.2, et: et.gasoline},
						{name: '1.6 MT', du: du.front, hp: 115, ac: 9.4, ec: 1.6, et: et.gasoline},
						{name: '1.6 AT', du: du.front, hp: 115, ac: 10.8, ec: 1.6, et: et.gasoline}
					]
				}, {
					name: 'C4',
					eq: ['Dynamique', 'Tendance', 'Optimum', 'Exclusive', 'Lounge'],
					mod: [
						{name: '1.6 MT', du: du.front, hp: 116, ac: 10.9, ec: 1.6, et: et.gasoline},
						{name: '1.6 AT', du: du.front, hp: 120, ac: 12.8, ec: 1.6, et: et.gasoline},
						{name: '1.6 THP AT', du: du.front, hp: 150, ac: 9.6, ec: 1.6, et: et.gasoline}
					]
				}, {
					name: 'DS4',
					eq: ['Chic', 'Be Chic', 'Sport Chic'],
					mod: [
						{name: '1.6 THP AT', du: du.front, hp: 150, ac: 9, ec: 1.6, et: et.gasoline}
					]
				}, {
					name: 'C4 Picasso',
					eq: ['Tendance', 'Intensive', 'Exclusive'],
					mod: [
						{name: '1.6 MT', du: du.front, hp: 120, ac: 12.3, ec: 1.6, et: et.gasoline},
						{name: '1.6 THP AT', du: du.front, hp: 150, ac: null, ec: 1.6, et: et.gasoline}
					]
				}, {
					name: 'Grand C4 Picasso',
					eq: ['Tendance', 'Intensive', 'Exclusive'],
					mod: [
						{name: '1.6 MT', du: du.front, hp: 120, ac: 12.6, ec: 1.6, et: et.gasoline},
						{name: '1.6 THP AT', du: du.front, hp: 150, ac: null, ec: 1.6, et: et.gasoline}
					]
				}
			]
			},
			{
				/* Car Mark */
				name: 'Datsun', models: [
				{
					name: 'mi-DO',
					eq: ['Trust', 'Dream', 'International'],
					mod: [
						{name: '1.6 MT', du: du.front, hp: 87, ac: 12, ec: 1.6, et: et.gasoline},
						{name: '1.6 AT', du: du.front, hp: 87, ac: 14.3, ec: 1.6, et: et.gasoline}
					]
				}, {
					name: 'on-DO',
					eq: ['Trust', 'Dream', 'Access'],
					mod: [
						{name: '1.6 MT', du: du.front, hp: 82, ac: 12.2, ec: 1.6, et: et.gasoline},
						{name: '1.6 MT', du: du.front, hp: 87, ac: 12.2, ec: 1.6, et: et.gasoline}
					]
				}
			]
			},
			{
				/* Car Mark */
				name: 'Dongfeng', models: [
				{
					name: 'S30',
					eq: ['Comfort', 'Luxury'],
					mod: [
						{name: '1.6 MT', du: du.front, hp: 117, ac: null, ec: 1.6, et: et.gasoline},
						{name: '1.6 AT', du: du.front, hp: 117, ac: null, ec: 1.6, et: et.gasoline}
					]
				}, {
					name: 'H30 Cross',
					eq: ['Comfort', 'Luxury'],
					mod: [
						{name: '1.6 MT', du: du.front, hp: 117, ac: null, ec: 1.6, et: et.gasoline},
						{name: '1.6 AT', du: du.front, hp: 117, ac: null, ec: 1.6, et: et.gasoline}
					]
				}]
			},
			{
				/* Car Mark */
				name: 'DS', models: [
				{
					name: 'DS 4',
					eq: ['Be Chic'],
					mod: [
						{name: '1.6 THP AT', du: du.front, hp: 150, ac: 8.6, ec: 1.6, et: et.gasoline},
						{name: '1.6 HDi AT', du: du.front, hp: 120, ac: 11.4, ec: 1.6, et: et.diesel}
					]
				}, {
					name: 'DS 4 Crossback',
					eq: ['Crossback'],
					mod: [
						{name: '1.6 THP AT', du: du.front, hp: 150, ac: 8.6, ec: 1.6, et: et.gasoline},
						{name: '1.6 HDi AT', du: du.front, hp: 120, ac: 11.4, ec: 1.6, et: et.diesel},
						{name: '2.0 HDi AT', du: du.front, hp: 181, ac: 8.6, ec: 1.6, et: et.diesel}
					]
				}]
			},
			{
				/* Car Mark */
				name: 'FAW', models: [
				{
					name: 'Oley',
					eq: ['Comfort', 'Deluxe'],
					mod: [
						{name: '1.5 MT', du: du.front, hp: 102, ac: null, ec: 1.5, et: et.gasoline},
						{name: '1.5 AT', du: du.front, hp: 102, ac: null, ec: 1.5, et: et.gasoline}
					]
				}, {
					name: 'V5',
					eq: ['Comfortable Plus', 'Deluxe'],
					mod: [
						{name: '1.5 MT', du: du.front, hp: 102, ac: null, ec: 1.5, et: et.gasoline}
					]
				}, {
					name: 'Besturn B50',
					eq: ['Modern', 'Deluxe'],
					mod: [
						{name: '1.6 MT', du: du.front, hp: 103, ac: null, ec: 1.6, et: et.gasoline}
					]
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
			}, {
				/* Car Mark */
				name: 'FIAT', models: [
					{
						name: '500',
						eq: ['Lounge'],
						mod: [
							{name: '1.4 MT', du: du.front, hp: 100, ac: 10.5, ec: 1.4, et: et.gasoline},
							{name: '1.4 MTA', du: du.front, hp: 100, ac: 10.7, ec: 1.4, et: et.gasoline}
						]
					}, {
						name: 'Punto',
						eq: ['Easy'],
						mod: [
							{name: '1.4 MTA', du: du.front, hp: 77, ac: 13.2, ec: 1.4, et: et.gasoline}
						]
					}
				]
			}, {
				/* Car Mark */
				name: 'Ford', models: [
					{
						name: 'Fiesta',
						eq: ['Trend', 'Trend Plus', 'Titanium'],
						mod: [
							{name: '1.6 MT', du: du.front, hp: 105, ac: 11.4, ec: 1.6, et: et.gasoline},
							{name: '1.6 Powershift', du: du.front, hp: 105, ac: 11.9, ec: 1.6, et: et.gasoline},
							{name: '1.6 Powershift', du: du.front, hp: 120, ac: 10.7, ec: 1.6, et: et.gasoline}
						]
					}, {
						name: 'Focus',
						eq: ['Titanium', 'SYNC Edition'],
						mod: [
							{name: '1.5 EcoBoost AT', du: du.front, hp: 150, ac: 9.3, ec: 1.5, et: et.gasoline},
							{name: '1.6 MT', du: du.front, hp: 150, ac: 12.4, ec: 1.6, et: et.gasoline},
							{name: '1.6 PowerShift', du: du.front, hp: 150, ac: 13.2, ec: 1.6, et: et.gasoline},
							{name: '1.6 MT', du: du.front, hp: 125, ac: 11, ec: 1.6, et: et.gasoline},
							{name: '1.6 PowerShift', du: du.front, hp: 125, ac: 11.8, ec: 1.6, et: et.gasoline}
						]
					}, {
						name: 'Mondeo',
						eq: ['Ambiente', 'Trend', 'Titanium', 'Titanium Plus'],
						mod: [
							{name: '2.0 EcoBoost AT', du: du.front, hp: 199, ac: 8.7, ec: 2.0, et: et.gasoline},
							{name: '2.0 EcoBoost AT', du: du.front, hp: 240, ac: 7.9, ec: 2.0, et: et.gasoline},
							{name: '2.5 AT', du: du.front, hp: 149, ac: 10.3, ec: 2.5, et: et.gasoline}
						]
					}, {
						name: 'EcoSport',
						eq: ['Trend', 'Titanium', 'Titanium Plus', 'Trend Plus'],
						mod: [
							{name: '1.6 MT 2WD', du: du.front, hp: 122, ac: 12.5, ec: 1.6, et: et.gasoline},
							{name: '1.6 MT Powershift 2WD', du: du.front, hp: 122, ac: 12.5, ec: 1.6, et: et.gasoline},
							{name: '2.0 MT 4WD', du: du.all, hp: 140, ac: 11.5, ec: 2.0, et: et.gasoline}
						]
					}, {
						name: 'Kuga',
						eq: ['Trend', 'Titanium', 'Titanium Plus', 'Trend Plus'],
						mod: [
							{name: '1.6 EcoBoost MT 2WD', du: du.front, hp: 150, ac: 9.7, ec: 1.6, et: et.gasoline},
							{name: '1.6 EcoBoost MT 4WD', du: du.all, hp: 150, ac: 10.7, ec: 1.6, et: et.gasoline},
							{name: '1.6 EcoBoost MT 2WD', du: du.all, hp: 182, ac: 9.7, ec: 1.6, et: et.gasoline},
							{name: '2.5 AT 2WD', du: du.front, hp: 150, ac: 9.7, ec: 1.6, et: et.gasoline}
						]
					}, {
						name: 'Explorer',
						eq: ['XLT', 'Limited', 'Limited Plus', 'Sport'],
						mod: [
							{name: '3.5 AT', du: du.all, hp: 249, ac: 8.7, ec: 3.5, et: et.gasoline},
							{name: '3.5 AT', du: du.all, hp: 345, ac: 6.4, ec: 3.5, et: et.gasoline}
						]
					}
				]
			}, {
				/* Car Mark */
				name: 'Geely', models: [
					{
						name: 'Emgrand',
						eq: ['Standart', 'Comfort', 'Luxury'],
						mod: [
							{name: '1.5 MT', du: du.front, hp: 106, ac: null, ec: 1.5, et: et.gasoline},
							{name: '1.8 MT', du: du.front, hp: 129, ac: null, ec: 1.8, et: et.gasoline},
							{name: '1.8 CVT', du: du.front, hp: 129, ac: null, ec: 1.8, et: et.gasoline}
						]
					}, {
						name: 'GC6',
						eq: ['Base', 'Comfort'],
						mod: [
							{name: '1.5 MT', du: du.front, hp: 94, ac: null, ec: 1.5, et: et.gasoline}
						]
					}, {
						name: 'Emgrand X7',
						eq: ['Standart', 'Comfort', 'Luxury'],
						mod: [
							{name: '1.8 MT', du: du.front, hp: 125, ac: null, ec: 1.8, et: et.gasoline},
							{name: '2.0 MT', du: du.front, hp: 140, ac: null, ec: 2.0, et: et.gasoline},
							{name: '2.4 AT', du: du.front, hp: 148, ac: null, ec: 2.4, et: et.gasoline}
						]
					}]
			},
			{
				/* Car Mark */
				name: 'Great Wall', models: [
				{
					name: 'Hover H3',
					eq: ['Luxe'],
					mod: [
						{name: '2.0 MT', du: du.all, hp: 116, ac: null, ec: 2.0, et: et.gasoline}
					]
				}, {
					name: 'Hover H5',
					eq: ['Luxe'],
					mod: [
						{name: '2.0 D MT', du: du.all, hp: 150, ac: null, ec: 2.0, et: et.diesel},
						{name: '2.0 D AT', du: du.all, hp: 150, ac: null, ec: 2.0, et: et.diesel},
						{name: '2.4 MT', du: du.all, hp: 136, ac: null, ec: 2.4, et: et.gasoline}
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Haima', models: [
				{
					name: 'M3',
					eq: ['Comfort', 'Standard'],
					mod: [
						{name: '1.5 MT', du: du.front, hp: 112, ac: null, ec: 1.5, et: et.gasoline}
					]
				}, {
					name: '7',
					eq: ['Deluxe', 'GL', 'Navigation'],
					mod: [
						{name: '2.0 MT', du: du.front, hp: 150, ac: null, ec: 2.0, et: et.gasoline},
						{name: '2.0 AT', du: du.front, hp: 150, ac: null, ec: 2.0, et: et.gasoline}
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Haval', models: [
				{
					name: 'H2',
					eq: ['City', 'Elite'],
					mod: [
						{name: '1.5 T MT FWD', du: du.front, hp: 150, ac: null, ec: 1.5, et: et.gasoline},
						{name: '1.5 T MT AWD', du: du.all, hp: 150, ac: null, ec: 1.5, et: et.gasoline}
					]
				}, {
					name: 'H6',
					eq: ['Luxe', 'Elite'],
					mod: [
						{name: '1.5 T MT FWD', du: du.front, hp: 150, ac: null, ec: 1.5, et: et.gasoline},
						{name: '1.5 T MT AWD', du: du.all, hp: 150, ac: null, ec: 1.5, et: et.gasoline},
						{name: '2.0 D MT AWD', du: du.all, hp: 143, ac: null, ec: 2.0, et: et.gasoline}
					]
				}, {
					name: 'H8',
					eq: ['Elite Tecnic'],
					mod: [
						{name: '2.0 T AT AWD', du: du.all, hp: 218, ac: null, ec: 2.0, et: et.gasoline}
					]
				}, {
					name: 'H9',
					eq: ['Elite'],
					mod: [
						{name: '2.0 T AT', du: du.all, hp: 218, ac: null, ec: 2.0, et: et.gasoline}
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Honda', models: [
				{
					name: 'CR-V',
					eq: ['Comfort', 'Elegance', 'Sport'],
					mod: [
						{name: '2.0 MT 2WD', du: du.front, hp: 150, ac: 10.1, ec: 2.0, et: et.gasoline},
						{name: '2.0 MT', du: du.all, hp: 150, ac: 10.4, ec: 2.0, et: et.gasoline},
						{name: '2.0 AT', du: du.all, hp: 150, ac: 12.8, ec: 2.0, et: et.gasoline},
						{name: '2.4 CVT', du: du.all, hp: 188, ac: 10, ec: 2.4, et: et.gasoline}
					]
				}, {
					name: 'Pilot',
					eq: ['Lifestyle', 'Executive', 'Premium'],
					mod: [
						{name: '3.0 AT', du: du.all, hp: 249, ac: 9.1, ec: 3.0, et: et.gasoline}
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Hyundai', models: [
				{
					name: 'Solaris',
					eq: ['Active', 'Comfort', 'Elegance'],
					mod: [
						{name: '1.4 MT', du: du.front, hp: 107, ac: 11.5, ec: 1.4, et: et.gasoline},
						{name: '1.4 AT', du: du.front, hp: 107, ac: 13.4, ec: 1.4, et: et.gasoline},
						{name: '1.6 MT', du: du.front, hp: 123, ac: 10.3, ec: 1.6, et: et.gasoline},
						{name: '1.6 AT', du: du.front, hp: 123, ac: 11.2, ec: 1.6, et: et.gasoline}
					]
				}, {
					name: 'i30',
					eq: ['Start', 'Classic', 'Active'],
					mod: [
						{name: '1.4 MT', du: du.front, hp: 100, ac: 13.2, ec: 1.4, et: et.gasoline},
						{name: '1.6 AT', du: du.front, hp: 130, ac: 11, ec: 1.6, et: et.gasoline}
					]
				}, {
					name: 'Elantra',
					eq: ['Start', 'Base', 'Active', 'Comfort'],
					mod: [
						{name: '1.6 MT', du: du.front, hp: 128, ac: 10.1, ec: 1.6, et: et.gasoline},
						{name: '1.6 AT', du: du.front, hp: 128, ac: 11.6, ec: 1.6, et: et.gasoline},
						{name: '2.0 MT', du: du.front, hp: 150, ac: 8.8, ec: 2.0, et: et.gasoline},
						{name: '2.0 AT', du: du.front, hp: 150, ac: 9.9, ec: 2.0, et: et.gasoline}
					]
				}, {
					name: 'Veloster',
					eq: ['Jet', 'Turbo Jet'],
					mod: [
						{name: '1.6 AT', du: du.front, hp: 132, ac: 11.5, ec: 1.6, et: et.gasoline},
						{name: '1.6 T DCT', du: du.front, hp: 186, ac: 8.1, ec: 1.6, et: et.gasoline}
					]
				}, {
					name: 'i40',
					eq: ['Comfort', 'Active', 'Active Plus', 'Lifestyle Plus', 'Business', 'High-Tech'],
					mod: [
						{name: '1.6 MT', du: du.front, hp: 135, ac: 11.5, ec: 1.6, et: et.gasoline},
						{name: '1.7 TD DCT', du: du.front, hp: 141, ac: 10.8, ec: 1.7, et: et.diesel},
						{name: '2.0 MT', du: du.front, hp: 150, ac: 10.4, ec: 2.0, et: et.gasoline},
						{name: '2.0 AT', du: du.front, hp: 150, ac: 10.9, ec: 2.0, et: et.gasoline}
					]
				}, {
					name: 'Genesis',
					eq: ['Business', 'Advance', 'Premium', 'Luxury', 'Sport'],
					mod: [
						{name: '3.0 AT', du: du.rear, hp: 249, ac: 8.6, ec: 3.0, et: et.gasoline},
						{name: '3.0 AT AWD', du: du.all, hp: 249, ac: 9, ec: 3.0, et: et.gasoline},
						{name: '3.8 AT AWD', du: du.all, hp: 315, ac: 6.8, ec: 3.8, et: et.gasoline}
					]
				}, {
					name: 'EQUUS',
					eq: ['Luxury', 'Elite', 'Elite Plus', 'Royal', 'Limousine'],
					mod: [
						{name: '3.8 AT', du: du.rear, hp: 334, ac: 6.9, ec: 3.8, et: et.gasoline},
						{name: '5.0 AT', du: du.rear, hp: 430, ac: 5.8, ec: 5.0, et: et.gasoline},
						{name: '5.0 AT L', du: du.rear, hp: 430, ac: 6, ec: 5.0, et: et.gasoline}
					]
				}, {
					name: 'Creta',
					eq: ['Базовая'],
					mod: [
						{name: '1.6 MT', du: du.front, hp: 123, ac: null, ec: 1.6, et: et.gasoline},
						{name: '1.6 AT', du: du.front, hp: 123, ac: null, ec: 1.6, et: et.gasoline},
						{name: '2.0 MT 4WD', du: du.all, hp: 150, ac: null, ec: 2.0, et: et.gasoline},
						{name: '2.0 AT 4WD', du: du.all, hp: 150, ac: null, ec: 2.0, et: et.gasoline}
					]
				}, {
					name: 'Tucson',
					eq: ['Start', 'Comfort', 'Travel', 'Prime', 'Prime+High Tech'],
					mod: [
						{name: '1.6 T-GDi MT 4WD', du: du.front, hp: 132, ac: 11.5, ec: 1.6, et: et.gasoline},
						{name: '1.6 T-GDi DCT 4WD', du: du.all, hp: 177, ac: 9.1, ec: 1.6, et: et.gasoline},
						{name: '2.0 MT 2WD', du: du.front, hp: 150, ac: 10.6, ec: 2.0, et: et.gasoline},
						{name: '2.0 AT 2WD', du: du.front, hp: 150, ac: 11.1, ec: 2.0, et: et.gasoline},
						{name: '2.0 MT 4WD', du: du.all, hp: 150, ac: 11.3, ec: 2.0, et: et.gasoline},
						{name: '2.0 AT 4WD', du: du.all, hp: 150, ac: 11.8, ec: 2.0, et: et.gasoline},
						{name: '2.0 CRDi AT 4WD	', du: du.all, hp: 185, ac: 9.5, ec: 2.0, et: et.diesel}
					]
				}, {
					name: 'Santa Fe',
					eq: ['Comfort', 'Start', 'Dynamic', 'High-Tech'],
					mod: [
						{name: '2.2 CRDi AT 4WD', du: du.all, hp: 200, ac: 9, ec: 2.2, et: et.diesel},
						{name: '2.4 MT 4WD', du: du.all, hp: 171, ac: 11, ec: 2.4, et: et.gasoline},
						{name: '2.4 AT 4WD', du: du.all, hp: 171, ac: 11.5, ec: 2.4, et: et.gasoline}
					]
				}, {
					name: 'Grand Santa Fe',
					eq: ['Active', 'Style', 'Family', 'High-Tech'],
					mod: [
						{name: '2.2 CRDi AT 4WD', du: du.all, hp: 197, ac: 10, ec: 2.2, et: et.diesel},
						{name: '3.3 AT 4WD', du: du.all, hp: 249, ac: 8, ec: 3.3, et: et.gasoline}
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Infiniti', models: [
				{
					name: 'Q50',
					eq: ['Base', 'Elegance', 'Elegance+Navi', 'Premium', 'Premium+Navi', 'Elite', 'GT', 'Hi-Tech', 'Hi-Tech+', 'Business', 'Business+Navi'],
					mod: [
						{name: '2.0 AT', du: du.rear, hp: 211, ac: 7.3, ec: 2.0, et: et.gasoline}
					]
				}, {
					name: 'Q70',
					eq: ['Premium', 'Sport', 'Elite', 'Hi-Tech'],
					mod: [
						{name: '2.5 AT', du: du.rear, hp: 221, ac: 9.2, ec: 2.5, et: et.gasoline},
						{name: '3.7 AT AWD', du: du.all, hp: 333, ac: 6.3, ec: 3.7, et: et.gasoline}
					]
				}, {
					name: 'QX50',
					eq: ['Elite', 'Hi-Tech', 'Design'],
					mod: [
						{name: '2.5 AT AWD', du: du.all, hp: 222, ac: 9.5, ec: 2.5, et: et.gasoline}
					]
				}, {
					name: 'QX60',
					eq: ['Premium', 'Elegance', 'Elite', 'Hi-Tech'],
					mod: [
						{name: '3.5 CVT 4WD', du: du.all, hp: 262, ac: 8.4, ec: 3.5, et: et.gasoline},
					]
				}, {
					name: 'QX70',
					eq: ['Elegance', 'Elegance+Navi', 'Premium', 'Premium+Navi', 'Sport', 'Sport + NAVI', 'Hi-Tech'],
					mod: [
						{name: '3.0d AT AWD', du: du.all, hp: 238, ac: 8.3, ec: 3.0, et: et.diesel},
						{name: '3.7 AT AWD', du: du.all, hp: 333, ac: 6.8, ec: 3.7, et: et.gasoline},
						{name: '5.0 AT AWD', du: du.all, hp: 400, ac: 5.8, ec: 5.0, et: et.gasoline}
					]
				}, {
					name: 'QX80',
					eq: ['Base', 'Hi-Tech'],
					mod: [
						{name: '5.6 AT 4WD', du: du.all, hp: 405, ac: 6.5, ec: 5.6, et: et.gasoline}
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Jaguar', models: [
				{
					name: 'XE',
					eq: ['Pure', 'Prestige', 'R Sport', 'Portfolio', 'S'],
					mod: [
						{name: '2.0 T AT', du: du.rear, hp: 200, ac: 7.7, ec: 2.0, et: et.gasoline},
						{name: '2.0 T AT', du: du.rear, hp: 240, ac: 6.8, ec: 2.0, et: et.gasoline},
						{name: '2.0 D AT', du: du.rear, hp: 180, ac: 7.8, ec: 2.0, et: et.diesel},
						{name: '2.0 D AT AWD', du: du.all, hp: 180, ac: 7.9, ec: 2.0, et: et.diesel},
						{name: '3.0 S/C AT', du: du.rear, hp: 340, ac: 5.1, ec: 3.0, et: et.gasoline}
					]
				}, {
					name: 'XF',
					eq: ['Pure', 'Prestige', 'R Sport', 'Portfolio', 'S'],
					mod: [
						{name: '2.0 AT', du: du.rear, hp: 240, ac: 7, ec: 2.0, et: et.gasoline},
						{name: '2.0 D AT', du: du.rear, hp: 180, ac: 8.1, ec: 2.0, et: et.diesel},
						{name: '2.0 D AT AWD', du: du.all, hp: 180, ac: 8.4, ec: 2.0, et: et.diesel},
						{name: '3.0 S/C AT AWD', du: du.all, hp: 340, ac: 5.4, ec: 3.0, et: et.gasoline},
						{name: '3.0 S/C AT AWD', du: du.all, hp: 340, ac: 5.3, ec: 3.0, et: et.gasoline}
					]
				}, {
					name: 'XJ',
					eq: ['Luxury', 'Premium Luxury', 'R Sport', 'Portfolio', 'Autobiography'],
					mod: [
						{name: '2.0 AT SWB', du: du.rear, hp: 240, ac: 7.9, ec: 2.0, et: et.gasoline},
						{name: '2.0 AT LWB', du: du.rear, hp: 240, ac: 7.9, ec: 2.0, et: et.gasoline},
						{name: '3.0 S/C AWD AT SWB', du: du.all, hp: 340, ac: 6.4, ec: 3.0, et: et.gasoline},
						{name: '3.0 S/C AWD AT LWB', du: du.all, hp: 340, ac: 6.4, ec: 3.0, et: et.gasoline},
						{name: '3.0 D AT LWB', du: du.rear, hp: 300, ac: 6.2, ec: 3.0, et: et.diesel},
						{name: '3.0 D AT SWB', du: du.rear, hp: 300, ac: 6.2, ec: 3.0, et: et.diesel},
						{name: '5.0 S/C AT LWB', du: du.rear, hp: 510, ac: 4.9, ec: 5.0, et: et.gasoline}

					]
				}, {
					name: 'F-Pace',
					eq: ['Pure', 'Prestige', 'R Sport', 'Portfolio', 'S', 'First Edition'],
					mod: [
						{name: '2.0 D AT', du: du.all, hp: 180, ac: 8.7, ec: 2.0, et: et.diesel},
						{name: '3.0 S/C AT', du: du.all, hp: 340, ac: 5.8, ec: 3.0, et: et.gasoline},
						{name: '3.0 S/C AT', du: du.all, hp: 380, ac: 5.5, ec: 3.0, et: et.gasoline},
						{name: '3.0 D AT', du: du.all, hp: 300, ac: 6.2, ec: 3.0, et: et.diesel}
					]
				}, {
					name: 'F-Type',
					eq: ['Базовая', 'S', 'S AWD', 'British Design Edition', 'R', 'SVR'],
					mod: [
						{name: '3.0 S/C AT', du: du.rear, hp: 340, ac: 5.3, ec: 3.0, et: et.gasoline},
						{name: '3.0 S/C MT', du: du.rear, hp: 380, ac: 5.5, ec: 3.0, et: et.gasoline},
						{name: '3.0 S/C AT AWD', du: du.all, hp: 380, ac: 5.1, ec: 3.0, et: et.gasoline},
						{name: '5.0 S/C AT AWD', du: du.all, hp: 550, ac: 4.1, ec: 5.0, et: et.gasoline},
						{name: '5.0 S/C AT AWD', du: du.all, hp: 575, ac: 3.7, ec: 5.0, et: et.gasoline}
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Jeep', models: [
				{
					name: 'Renegade',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Compass',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Cherokee',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Grand Cherokee',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Grand Cherokee SRT8',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Wrangler',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}]
			},
			{
				/* Car Mark */
				name: 'KIA', models: [
				{
					name: 'Picanto',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Rio',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: `pro_cee'd`,
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: `cee'd`,
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: `cee'd_sw`,
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: `pro_cee'd GT`,
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: `cee'd GT`,
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Cerato',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Soul',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Optima',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Optima GT',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Quoris',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Sportage',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Sorento',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Mohave',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Venga',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Lada', models: [
				{
					name: 'XRAY',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Granta',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Granta Sport',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Kalina',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Kalina Cross',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Kalina Sport',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Kalina NFR',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Vesta',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Priora',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Largus',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Largus Cross',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: '4x4',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: '4x4 Urban',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Lamborghini', models: [
				{
					name: 'Huracan LP610-4',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Aventador LP700-4',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Land Rover', models: [
				{
					name: 'Discovery Sport',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Range Rover Evoque',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Discovery IV',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Range Rover Sport',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Range Rover',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Lexus', models: [
				{
					name: 'IS',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'ES',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'GS',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'GS F',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'LS',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'NX',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'RX',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'GX',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'LX',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'RC F',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'RC',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}]
			},
			{
				/* Car Mark */
				name: 'LIFAN', models: [
				{
					name: 'X50',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Smily',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Celliya',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Solano',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Cebrium',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'X60',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Maserati', models: [
				{
					name: 'Ghibli Diesel',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Ghibli',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Ghibli S Q4',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Quattroporte S Q4',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Quattroporte GTS',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Levante',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Levante S',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Levante Diesel',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Mazda', models: [
				{
					name: '3',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: '6',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'CX-5',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Mercedes-Benz', models: [
				{
					name: 'A',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'A AMG',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'CLA',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'CLA AMG',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'C',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'C AMG',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'E',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'E AMG',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'CLS',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'CLS AMG',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'S',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'S AMG',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Maybach S',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'GLA',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'GLA AMG',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'GLC',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'GLE',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'GLE AMG',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'GLS',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'GLS AMG',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'G',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'G AMG',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'G 4x4²',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'C',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'C AMG',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'AMG GT',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'B',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Sprinter',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Citan',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Vito',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'V',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}]
			},
			{
				/* Car Mark */
				name: 'MINI', models: [
				{
					name: 'Cooper',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Cooper S',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'John Cooper Works',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Cooper Clubman',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Cooper S Clubman',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Cooper Paceman',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Cooper S Paceman',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'John Cooper Works Paceman',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Cooper Countryman',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Cooper S Countryman',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Cooper SD Countryman',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'John Cooper Works Countryman',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Mitsubishi', models: [
				{
					name: 'i-MiEV',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Lancer Evolution X',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Outlander',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Pajero Sport',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'L200',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Nissan', models: [
				{
					name: 'Juke',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Almera',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Tiida',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Sentra',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Teana',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Terrano',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Qashqai',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'X-Trail',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Murano',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Pathfinder',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Patrol',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'GT-R',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Peugeot', models: [
				{
					name: '208',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: '301',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: '408',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: '308',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: '3008',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: '508',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: '2008',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Partner',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Expert',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Boxer',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Porsche', models: [
				{
					name: 'Panamera',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Panamera Diesel',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Panamera 4',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Panamera S',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Panamera 4S',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Panamera S E-Hybrid',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Panamera GTS',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Panamera Turbo',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Panamera Turbo S',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Macan',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Macan S',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Macan S Diesel',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Macan GTS',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Macan Turbo',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Cayenne',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Cayenne Diesel',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Cayenne S',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Cayenne S Diesel',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Cayenne S E-Hybrid',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Cayenne GTS',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Cayenne Turbo',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Cayenne Turbo S',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Ravon', models: [
				{
					name: 'R2',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Matiz',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Nexia',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Gentra',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Renault', models: [
				{
					name: 'Logan',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Sandero',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Sandero Stepway',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Clio RS',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Megane',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Fluence',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Megane RS',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Duster',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Kaptur',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Koleos',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Kangoo',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Skoda', models: [
				{
					name: 'Rapid',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Octavia',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Octavia Scout',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Octavia RS',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Superb',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Yeti',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Smart', models: [
				{
					name: 'fortwo',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'forfour',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}]
			},
			{
				/* Car Mark */
				name: 'SsangYong', models: [
				{
					name: 'Actyon',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Kyron',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Rexton',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Stavic',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Actyon Sports',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Subaru', models: [
				{
					name: 'XV',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'WRX',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'WRX STI',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Outback',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Forester',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Suzuki', models: [
				{
					name: 'SX4',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Vitara',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Jimny',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Grand Vitara',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Toyota', models: [
				{
					name: 'Corolla',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Prius',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Camry',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'RAV4',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Highlander',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Land Cruiser Prado',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Land Cruiser 200',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'GT86',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Alphard',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Hilux',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Hiace',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Volkswagen', models: [
				{
					name: 'Polo',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Jetta',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Golf',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Golf GTI',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Golf R',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Beetle',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Passat',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Passat Alltrack',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Passat CC',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Tiguan',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Touareg',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Crafter',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Caddy',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Transporter',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Amarok',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Caravelle',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Multivan',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'California',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Volvo', models: [
				{
					name: 'V40 Cross Country',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'S60',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'S60 Cross Country',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'V60 Cross Country',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'S90',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'XC60',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'XC70',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'XC90',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}]
			},
			{
				/* Car Mark */
				name: 'Zotye', models: [
				{
					name: 'Z300',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'T600',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}]
			},
			{
				/* Car Mark */
				name: 'УАЗ', models: [
				{
					name: 'Hunter',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Patriot',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: '3303',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: '39625',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: '3909',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: '2206',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: '39094',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Cargo',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
				}, {
					name: 'Pickup',
					eq: ['', ''],
					mod: [
						{name: '', du: du.front, hp: 0, ac: 0, ec: 0, et: et.gasoline},
					]
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

export default new Car();
