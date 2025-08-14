import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import {
  ShopCount,
  ShopItem,
  ShopImage,
  ShopInfo,
  ShopName,
  ShopMeta,
  ShopFooter,
  ShopRating,
  ShopOffer,
  Tag,
  ShopItems,
  ShopContent
} from './styles';
import { useShopPage } from '@/contexts/ShopPageContext';

export default function ShopCard(props: {
  shops: any[];
  open: boolean;
  isMobile?: boolean;
  mode?: 'coupon' | 'fav' | undefined;
  setLoading: (value: boolean) => void;
}) {
  const {
    shops,
    open,
    isMobile,
    mode,
    setLoading
  } = props;

  const { updateShopId } = useShopPage();

  if (!shops || shops.length === 0) return null;

  const headerText = open
    ? `Lojas abertas (${shops.length})`
    : `Fechadas agora (${shops.length})`;

  const goToShop = (id: string) => {
    setLoading(true);
    updateShopId(id)
  };

  const renderCouponBlock = (shop: any) => {
    if (!mode || mode !== 'coupon' || !shop.coupon) return null;

    const { name, discount, minimum_value, rule } = shop.coupon;
    const isFreeShipping = discount === 'Frete grátis';

    return (
      <>
        <ShopMeta className="coupon">
          Cupom: <span>{name}</span>
        </ShopMeta>
        <ShopMeta className="coupon">
          {discount} {!isFreeShipping && 'desc. em produtos'}
        </ShopMeta>
        {minimum_value > 0 && (
          <ShopMeta className="coupon">
            Pedido mínimo para uso: R$ {minimum_value.toFixed(2)}
          </ShopMeta>
        )}
        {rule && (
          <ShopMeta className={`coupon ${open ? 'rule' : ''}`}>
            {open ? `VÁLIDO PARA ${rule}` : rule}
          </ShopMeta>
        )}
      </>
    );
  };

  const renderFavBlock = (shop: any) => {
    if (mode && mode === 'coupon') return null;

    const closingHour =
      shop.closingTime
        ? new Date(shop.closingTime).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })
        : null;

    return (
      <>
        <ShopMeta>
          <span>
            <Icon icon="formkit:time" width="15" /> {shop.deliveryTime} min
          </span>
          <span>
            <Icon icon="mdi:delivery-dining" width="15" /> R$
            {shop.deliveryFee.toFixed(2)}
          </span>
          <span>
            <Icon icon="mingcute:location-fill" width="15" />
            1.9km
          </span>
        </ShopMeta>

        <ShopFooter>
          <ShopMeta className={open ? 'time' : 'close'}>
            {open ? (closingHour ? `Fecha às ${closingHour}` : 'Horário não informado') : 'Fechado'}
          </ShopMeta>

          <ShopRating>
            <Icon icon="material-symbols:star-rounded" width="20" color="#f5a623" />
            {shop.rating.toFixed(1)}
          </ShopRating>
        </ShopFooter>
      </>
    );
  };

  const renderImage = (shop: any) => {
    return (
        <ImageWithLoader
          alt={`icon ${shop.name}`}
          src="/images/default-store.png"
          wrapperStyle={{ width: '64px', height: '64px' }}
          imgStyle={{ borderRadius: '8px', objectFit: 'cover', userSelect: 'none' }}
          loaderStyle={{ width: '40px', height: '40px' }}
        />
      );
  };

  return (
    <>
      {!isMobile && <ShopCount close={!open}>{headerText}</ShopCount>}

      <ShopItems>
        {shops.map((shop, i) => (
          <ShopItem
            key={i}
            style={!open ? { opacity: 0.5 } : undefined}
            onClick={() => goToShop(shop.id)}
          >
            <ShopContent>
              {renderImage(shop)}

              <ShopInfo>
                <ShopName>{shop.name}</ShopName>
                <ShopMeta>{shop.category.name}</ShopMeta>

                {renderCouponBlock(shop)}
                {renderFavBlock(shop)}
              </ShopInfo>
            </ShopContent>

            {shop.offer && (
              <ShopOffer>
                <Tag>
                  <Icon icon="streamline-plump:announcement-megaphone" width="20" />
                  <p>{shop.offer}</p>
                </Tag>
              </ShopOffer>
            )}
          </ShopItem>
        ))}
      </ShopItems>
    </>
  );
}
