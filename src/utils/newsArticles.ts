import type { Locale } from './locale';

export interface NewsArticle {
  title: string;
  url: string;
  lang: Locale;
  source: string;
}

export const newsArticles: NewsArticle[] = [
  // English
  { title: 'Cyprus drought pushes Kouris reservoir to historic low', url: 'https://www.muser.press/2026/02/25/cyprus-drought-kouris-historic-low/', lang: 'en', source: 'Muser Press' },
  { title: 'Severe drought in Cyprus, February 2026', url: 'https://www.copernicus.eu/en/media/image-day-gallery/severe-drought-cyprus-february-2026', lang: 'en', source: 'Copernicus' },
  { title: 'Storage capacity in dams reaches 19.8 per cent', url: 'https://cyprus-mail.com/2026/02/24/storage-capacity-in-dams-reaches-19-8-per-cent', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Cyprus deploys mobile desalination units from UAE', url: 'https://smartwatermagazine.com/news/smart-water-magazine/cyprus-deploys-mobile-desalination-units-uae-avert-water-crisis', lang: 'en', source: 'Smart Water Magazine' },
  { title: 'Cyprus to spend €196 million in 2026 to tackle water shortages', url: 'https://en.politis.com.cy/economy/economy-hot-spot/965677/cyprus-to-spend-eur196-million-in-2026-to-tackle-water-shortages', lang: 'en', source: 'Politis' },
  { title: 'Water Levels in Cyprus Dams Drop to 13.8%, Well Below Last Year', url: 'https://famagusta-gazette.com/water-levels-in-cyprus-dams-drop-to-13-8-well-below-last-year/', lang: 'en', source: 'Famagusta Gazette' },
  { title: 'Cyprus warns of possible summer water cuts as reserves fall', url: 'https://famagusta-gazette.com/cyprus-warns-of-possible-summer-water-cuts-as-reserves-fall/', lang: 'en', source: 'Famagusta Gazette' },
  { title: 'Water situation in the dams still dire', url: 'https://cyprus-mail.com/2026/02/09/water-situation-in-the-dams-still-dire', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Dramatically Low Water Levels in Cyprus\' Dams', url: 'https://www.thenationalherald.com/dramatically-low-water-levels-in-cyprus-dams/', lang: 'en', source: 'The National Herald' },
  { title: 'Cyprus water emergency: Citizens urged to reduce water use', url: 'https://www.euronews.com/green/2026/01/26/cyprus-water-emergency-citizens-urged-to-reduce-water-use-as-dams-reach-record-low', lang: 'en', source: 'Euronews' },

  // Russian
  { title: 'Крупнейшее водохранилище Кипра Курис заполнено на 12,3%', url: 'https://evropakipr.com/istorii/krupneyshee-vodohranilishche-kipra-kuris-zapolneno-na-123-ved-byli-gody-kogda-cerkov', lang: 'ru', source: 'Европа Кипр' },
  { title: 'В водохранилищах Кипра скоро останется только грязь', url: 'https://evropakipr.com/istorii/v-vodohranilishchah-kipra-skoro-ostanetsya-tolko-gryaz', lang: 'ru', source: 'Европа Кипр' },
  { title: 'На Кипре — сезон дождей, но власти утверждают, что засуха продолжается', url: 'https://evropakipr.com/istorii/na-kipre-sezon-dozhdey-pochemu-vlasti-utverzhdayut-chto-na-ostrove-chetvertyy-god', lang: 'ru', source: 'Европа Кипр' },
  { title: 'Беречь каждую каплю воды — какие меры в борьбе с засухой внедряют на Кипре', url: 'https://evropakipr.com/novosti/berech-kazhduyu-kaplyu-vody-kakie-mery-v-borbe-s-zasuhoy-pomimo-prizyvov-k-ekonomii', lang: 'ru', source: 'Европа Кипр' },
  { title: 'Кипр переживает худший водный кризис за десятилетие', url: 'https://cyprusbutterfly.com.cy/news/kipr-perezhivaet-xudshij-vodnyij-krizis', lang: 'ru', source: 'Cyprus Butterfly' },
  { title: 'Fragmata — бесплатный дашборд показывает ситуацию с пресной водой на Кипре', url: 'https://cyprusbutterfly.com.cy/news/fragmata-besplatnyij-dashbord-pokazyivaet-situacziyu-s-presnoj-vodoj-na-kipre', lang: 'ru', source: 'Cyprus Butterfly' },
  { title: 'Засуха накрыла Кипр. Жителей попросили включать воду только на две минуты в день', url: 'https://www.vokrugsveta.ru/news/zasukha-nakryla-kipr-zhitelei-poprosili-vklyuchat-vodu-tolko-na-dve-minuty-v-den-id6839742/', lang: 'ru', source: 'Вокруг Света' },

  // Greek
  { title: 'Δορυφορική εικόνα αποτυπώνει την τραγική κατάσταση των φραγμάτων στην Κύπρο', url: 'https://www.sigmalive.com/news/local/1304891/doriforiki-eikona-apotipwnei-tin-traghiki-katastasi-ton-fraghmaton-stin-kypro', lang: 'el', source: 'SigmaLive' },
  { title: 'Σημαντική η συνολική εισροή νερού στα φράγματα — Ξεπέρασε τα 9 ΕΚΜ', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/simantiki-i-sinoliki-eisroi-nerou-sta-fragmata-to-telefteo-triimero-kseperase-ta-9-ekm-nerou/', lang: 'el', source: 'KitasWeather' },
  { title: 'Ξεπέρασε ελαφρώς το 90% η μέση βροχόπτωση Φεβρουαρίου', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/kseperase-elafros-to-90-tis-ekato-i-mesi-vroxoptosi-fevrouariou-plirotita-fragmaton/', lang: 'el', source: 'KitasWeather' },
  { title: 'Σημαντική εισροή νερού στα φράγματα – Πλησιάζει το 20% η συνολική πληρότητα', url: 'https://www.politis.com.cy/politis-news/cyprus/988448/simantiki-eisroi-nerou-sta-fraghmata-to-teleftaio-4imero-plisiazei-to-20-i-sinoliki-plirotita', lang: 'el', source: 'Politis' },
  { title: 'Γιατί ενώ βρέχει δεν γεμίζουν τα φράγματα — Δεν αποκλείεται η σπορά νεφών', url: 'https://www.sigmalive.com/news/all/1304121/giati-enw-vrekhei-den-ghemizoyn-ta-fraghmata-den-apoklietai-i-spora-nefwn', lang: 'el', source: 'SigmaLive' },
  { title: 'Μικρή ανάσα ελπίδας για τα φράγματα: άρχισε να ρέει ξανά ο Ξερός ποταμός στη Νατά', url: 'https://dialogos.com.cy/mikri-anasa-elpidas-gia-ta-fragmata-archise-na-reei-xana-o-xeros-potamos-sti-nata/', lang: 'el', source: 'Dialogos' },
  { title: 'Στέρεψαν τα φράγματα, εφιαλτικό προμηνύεται το 2026', url: 'https://www.alphanews.live/cyprus/sterepsan-ta-fragmata-efialtiko-prominyetai-to-2026/', lang: 'el', source: 'AlphaNews' },
  { title: 'Παραμένει δραματική κατάσταση στα φράγματα παρά τις βροχές', url: 'https://www.reporter.com.cy/article/1386704/paramenei-dramatiki-katastasi-sta-fragata-para-tis-broches-molis-sto14-1-i-synoliki-plirotita', lang: 'el', source: 'Reporter' },
  { title: 'Η Κύπρος στερεύει: SOS για τα φράγματα με πληρότητα στο 11%', url: 'https://www.energymag.gr/periballon/113425_i-kypros-stereyei-sos-gia-ta-fragmata-me-plirotita-sto-11', lang: 'el', source: 'EnergyMag' },
];
