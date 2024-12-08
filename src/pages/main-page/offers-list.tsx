import { Nullable } from 'vitest';
import OfferCard from './offer-card';
import {Offer} from '../../types/offer.ts';

type OfferListProps = {
  offers: Offer[];
  onActiveOfferChange: (offer: Nullable<Offer>) => void;
};

function OffersList({
  offers,
  onActiveOfferChange,
}: OfferListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <div
          key={offer.id}
          onMouseEnter={() => onActiveOfferChange(offer)}
          onMouseLeave={() => onActiveOfferChange(null)}
        >
          <OfferCard {...offer} />
        </div>
      ))}
    </div>
  );
}

export default OffersList;
