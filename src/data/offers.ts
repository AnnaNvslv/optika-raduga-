// Universal "current offers" banner. It renders only if at least one entry
// below has `active: true`. Old promo conditions from the previous site
// were NOT carried over automatically (they may have changed) — see
// CONTENT_TO_CONFIRM.md item 8.
//
// The entry below is a safe, honest PLACEHOLDER (no invented numbers or
// discounts) so the new banner design isn't empty while you decide on a
// real offer. Anna: replace title/description with the real promotion
// whenever you have one — the banner and photo are already live.

export type Offer = {
  active: boolean;
  title: string;
  description: string;
};

export const offers: Offer[] = [
  {
    active: true,
    title: "Следите за акциями",
    description:
      "Актуальные условия уточняйте по телефону — раздел скоро обновится.",
  },
];

export const hasActiveOffers = offers.some((o) => o.active);
