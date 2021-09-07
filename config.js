// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Lenin',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: '6b9711138a6e9b6b863b098702a972f3',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C',
  weatherLatitude: '18.493790',
  weatherLongitude: '-88.298531',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/',
    },
    {
      id: '3',
      name: 'Twitch',
      icon: 'twitch',
      link: 'https://www.twitch.tv/',
    },
    {
      id: '4',
      name: 'Whatsapp',
      icon: 'message-circle',
      link: 'https://web.whatsapp.com/',
    },
    {
      id: '5',
      name: 'Facebook',
      icon: 'facebook',
      link: 'https://facebook.com',
    },
    {
      id: '6',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://youtube.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'music',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Favorite',
        link: 'https://www.youtube.com/watch?v=BZNtxpO9DoA',
      },
      {
        name: 'Oldie',
        link: 'https://www.youtube.com/watch?v=zzIOxHIZEis',
      },
      {
        name: 'Rock',
        link: 'https://www.youtube.com/watch?v=1-W6whvn8Bs',
      },
      {
        name: 'Recommendation',
        link: 'https://www.youtube.com/watch?v=hBINDKALYrw',
      },
    ],
    secondList: [
      {
        name: 'Moodle',
        link: 'https://intranet.matematicas.uady.mx/',
      },
      {
        name: 'Outlook',
        link: 'https://outlook.office.com/',
      },
      {
        name: 'Uady Virtual',
        link: 'https://es.uadyvirtual.uady.mx/',
      },
      {
        name: 'Office',
        link: 'https://www.office.com/',
      },
    ],
  },
};
