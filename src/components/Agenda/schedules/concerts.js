const concerts = [
  {
    id: 1,
    date: '2025-10-19',
    title: 'William Christie & Les Arts Florissants - Divines idylles',
    venue: 'Philharmonie Luxembourg, Grand Auditorium',
    ticketsUrl:
      'https://www.philharmonie.lu/en/programme/2025-26/william-christie-les-arts-florissants-000000e90019b320',
  },

  {
    id: 2,
    date: '2025-10-25',
    title:
      'Les arts Florissants/ La Descente d’Orphée aux enfers (Charpentier)',
    venue: 'Queen Sofia Palace of Arts, Valencia, Spain',
    ticketsUrl: 'https://www.lesarts.com/es/la-descente-dorphee-aux-enfers/',
  },
  {
    id: 3,
    date: '2025-11-04',
    title:
      'Les arts Florissants/ La Descente d’Orphée aux enfers (Charpentier)',
    venue: 'Cité de la musique, France',
    ticketsUrl:
      'https://philharmoniedeparis.fr/en/activite/28354?itemId=140930',
  },
  {
    id: 4,
    date: '2025-11-06',
    title:
      'Les arts Florissants/ La Descente d’Orphée aux enfers (Charpentier)',
    venue: 'Auditorio Principe Filipe, Oviedo',
    ticketsUrl:
      'https://www.oviedo.es/vive/ocio-cultura-y-deporte/espectaculos/agenda/-/calendars/event/2719462/yAVT6jdpxJNB',
  },
  {
    id: 5,
    date: '2025-11-09',
    title:
      'Les arts Florissants/ La Descente d’Orphée aux enfers (Charpentier)',
    venue: 'Opera Royal, Chateu de Versailles, France',
    ticketsUrl:
      'https://www.operaroyal-versailles.fr/event/charpentier-les-arts-florissants/',
  },

  {
    id: 5,
    date: '2025-11-29',
    title:
      'Advent with Bach - 7th Early Music Days',
    venue: 'The Sugar Palace, City Museum of Rijeka, Croatia',
    ticketsUrl:
      'https://www.operaroyal-versailles.fr/event/charpentier-les-arts-florissants/',
  },
  {
    id: 6,
    date: '2025-12-21',
    title: 'Adele - Die Fledermaus (Strauss)',
    venue: 'Croatian National Theatre in Zagreb',
    ticketsUrl: 'https://www.hnk.hr/hr/opera/predstave/%C5%A1i%C5%A1mi%C5%A1/',
  },
  {
    id: 7,
    date: '2026-01-02',
    title: 'Adele - Die Fledermaus (Strauss)',
    venue: 'Croatian National Theatre in Zagreb',
    ticketsUrl: 'https://www.hnk.hr/hr/opera/predstave/%C5%A1i%C5%A1mi%C5%A1/',
  },
  {
    id: 8,
    date: '2026-01-22',
    title:
      'Mala Floramye - Tijardović, maestro Ivan Hut with HRT Symphony Orchestra',
    venue: 'Vatroslav Lisinski Hall in Zagreb, Croatia',
    ticketsUrl:
      'https://www.lisinski.hr/hr/dogadanja/mala-floramye-br-kanconijer-zbor-i-simfonijski-ork/',
  },
  {
    id: 9,
    date: '2026-02-12',
    title:
      'Les arts Florissants/ La Descente d’Orphée aux enfers (Charpentier)',
    venue: 'Opéra de Massy, France',
    ticketsUrl:
      'https://www.opera-massy.com/fr/les-arts-florissants-la-descente-d-orphee.html?cmp_id=77&news_id=1193&vID=80',
  },
  {
    id: 10,
    date: '2026-02-13',
    title:
      'Les arts Florissants/ La Descente d’Orphée aux enfers (Charpentier)',
    venue: 'Opéra de Massy, France',
    ticketsUrl:
      'https://www.opera-massy.com/fr/les-arts-florissants-la-descente-d-orphee.html?cmp_id=77&news_id=1193&vID=80',
  },
  {
    id: 11,
    date: '2026-02-15',
    title:
      'Les arts Florissants/ La Descente d’Orphée aux enfers (Charpentier)',
    venue: 'El Auditorio Nacional de Música - Madrid, Spain',
    ticketsUrl: null,
  },
  {
    id: 12,
    date: '2026-02-23',
    title:
      'Les arts Florissants/ La Descente d’Orphée aux enfers (Charpentier)',
    venue: 'Auditorium de Lyon, France',
    ticketsUrl:
      'https://www.auditorium-lyon.com/fr/saison-2025-26/formation-invitee/arts-florissants',
  },
  {
    id: 13,
    date: '2026-03-20',
    title: 'Danica - Stanac (Gotovac)',
    venue: 'Croatian National Theatre in Zagreb',
    ticketsUrl: null,
  },
  {
    id: 14,
    date: '2026-03-23',
    title: 'Danica - Stanac (Gotovac)',
    venue: 'Croatian National Theatre in Zagreb',
    ticketsUrl: null,
  },
  {
    id: 15,
    date: '2026-03-25',
    title: 'Danica - Stanac (Gotovac)',
    venue: 'Croatian National Theatre in Zagreb',
    ticketsUrl: null,
  },
  {
    id: 16,
    date: '2026-04-25',
    title: 'Sophie - Werther (Massenet)',
    venue: 'Croatian National Theatre in Zagreb',
    ticketsUrl: null,
  },
  {
    id: 17,
    date: '2026-04-27',
    title: 'Sophie - Werther (Massenet)',
    venue: 'Croatian National Theatre in Zagreb',
    ticketsUrl: null,
  },
  {
    id: 18,
    date: '2026-04-29',
    title: 'Sophie - Werther (Massenet)',
    venue: 'Croatian National Theatre in Zagreb',
    ticketsUrl: null,
  },
  {
    id: 19,
    date: '2026-06-01',
    title: 'Jelena- Nikola Šubić Zrinjski (Ivan pl. Zajc)',
    venue: 'Croatian National Theatre in Zagreb',
    ticketsUrl: null,
  },
  {
    id: 20,
    date: '2026-06-18',
    title: 'Jelena- Nikola Šubić Zrinjski (Ivan pl. Zajc)',
    venue: 'Croatian National Theatre in Zagreb',
    ticketsUrl: null,
  },
  {
    id: 21,
    date: '2026-06-27',
    title: 'Rosina - Il barbiere di Siviglia (Rossini)',
    venue: 'Croatian National Theatre in Zagreb',
    ticketsUrl: null,
  },
];

export default concerts;
