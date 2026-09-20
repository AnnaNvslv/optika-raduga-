// All contact and location facts in one place — edit here, nowhere else.
// Statuses of these facts (which are current vs. inherited from the old
// site) are tracked in CONTENT_TO_CONFIRM.md at the repo root.

export const phones = {
  landline: { display: "+7 (812) 702-05-90", href: "tel:+78127020590" },
  mobile: { display: "+7 (904) 559-05-90", href: "tel:+79045590590" },
};

export const whatsapp = {
  href: "https://wa.me/79045590590",
  display: "WhatsApp",
};

export const vk = {
  href: "https://vk.com/optikaraduga",
  display: "ВКонтакте",
};

export const email = {
  address: "optika.spb@yandex.ru",
  href: "mailto:optika.spb@yandex.ru",
};

export const address = {
  short: "Санкт-Петербург, проспект Стачек, 72",
  full: "Санкт-Петербург, проспект Стачек, дом 72",
  building: "ДК имени Газа, правое крыло, первый этаж",
  entrance: "Вход со стороны улицы Новостроек",
  landmark: "Ориентир: коричневые колонны и деревянные двери",
  forNavigator: "Для автомобильного навигатора: проспект Стачек, 72А",
  metro: "м. «Кировский завод»",
  metroNote: "1 минута пешком от метро «Кировский завод»",
};

// Generic address-search link (not a specific organization-card ID, which
// hasn't been confirmed — see CONTENT_TO_CONFIRM.md). Safe to publish as-is:
// it always resolves to the correct address on Yandex Maps.
export const routeUrl =
  "https://yandex.ru/maps/?text=" +
  encodeURIComponent("Санкт-Петербург, проспект Стачек, 72");

export const hours = [
  { label: "Пн–Пт", value: "10:30–19:30" },
  { label: "Сб–Вс", value: "11:00–18:00" },
];
