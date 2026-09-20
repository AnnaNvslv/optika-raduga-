// Universal "current offers" block. It renders only if at least one entry
// below has `active: true`. Old promo conditions from the previous site
// were NOT carried over automatically (they may have changed) — see
// CONTENT_TO_CONFIRM.md. To publish a real offer, add/edit an entry here
// and set active: true.

export type Offer = {
  active: boolean;
  title: string;
  description: string;
};

export const offers: Offer[] = [
  // Example (kept inactive on purpose):
  // { active: false, title: "Скидка пенсионерам", description: "..." },
];

export const hasActiveOffers = offers.some((o) => o.active);
