'use client';

import { Icon } from '@iconify/react';
import { Title, Overlay, ModalBox, CloseXButton } from '@/components/shared/Modal/styles';
import { CommentBox, Content, RatingHeader, RatingRow, RatingsSummary, ReviewsContainer, Stars, Summary } from './styles';
import { reviewData } from '../data';

const average = {
  product: 0,
  packaging: 0,
  delivery: 0,
  costBenefit: 0,
};

reviewData.forEach((r) => {
  average.product += r.rate.product;
  average.packaging += r.rate.packaging;
  average.delivery += r.rate.delivery;
  average.costBenefit += r.rate.costBenefit;
});

const count = reviewData.length;
average.product /= count;
average.packaging /= count;
average.delivery /= count;
average.costBenefit /= count;

const totalAverage = (
  average.product +
  average.packaging +
  average.delivery +
  average.costBenefit
) / 4;

const renderStars = (value: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Icon
        key={i}
        icon={i <= Math.floor(value) ? 'mdi:star' : 'mdi:star-outline'}
        width="18"
        color="#FFD700"
      />
    );
  }
  return stars;
};

const Reviews = ({ isOpen, onClose, id }: { isOpen: boolean; onClose: () => void; id:number }) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalBox style={{ height: '95%', overflow: 'auto hidden', padding: 0 }}>
        <CloseXButton>
          <Icon icon="material-symbols:close" color="#fff" width="24" onClick={onClose} />
        </CloseXButton>

        <Title>AVALIAÇÕES</Title>

        <Content style={{ padding: 0 }}>
          <Summary>
            <p>Média dos últimos 90 dias</p>
            <h2>{totalAverage.toFixed(1)}</h2>
            <Stars>{renderStars(totalAverage)}</Stars>
            <strong>{count} avaliações • últimos 90 dias</strong>
            <p>91 avaliações no total</p>
          </Summary>

          <RatingsSummary>
            <RatingRow>
              <strong>Produto</strong>
              <span>
                <Icon icon={'mdi:star'} width="12" color="#FFD700" />
                {average.product.toFixed(1)}
              </span>
            </RatingRow>
            <RatingRow>
              <strong>Embalagem</strong>
              <span>
                <Icon icon={'mdi:star'} width="12" color="#FFD700" />
                {average.packaging.toFixed(1)}
              </span>
            </RatingRow>
            <RatingRow>
              <strong>Entrega</strong>
              <span>
                <Icon icon={'mdi:star'} width="12" color="#FFD700" />
                {average.delivery.toFixed(1)}
              </span>
            </RatingRow>
            <RatingRow>
              <strong>Custo benefício</strong>
              <span>
                <Icon icon={'mdi:star'} width="12" color="#FFD700" />
                {average.costBenefit.toFixed(1)}
              </span>
            </RatingRow>
          </RatingsSummary>

          <ReviewsContainer>
            {reviewData.map((r, i) => (
              <CommentBox key={i}>
                <strong>{r.name}</strong>
                <RatingHeader>
                  <Stars>
                    {renderStars(
                      (r.rate.product + r.rate.packaging + r.rate.delivery + r.rate.costBenefit) / 4
                    )}
                    {((r.rate.product + r.rate.packaging + r.rate.delivery + r.rate.costBenefit) / 4).toFixed(1)}
                  </Stars>

                  <span style={{ fontSize: '12px', color: '#888' }}>
                    {new Date(r.date).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                    })}
                  </span>
                </RatingHeader>
                {r.review && (
                  <p style={{ fontSize: '13px', marginTop: '4px' }}>{r.review}</p>
                )}
              </CommentBox>
            ))}
          </ReviewsContainer>

        </Content>
      </ModalBox>
    </Overlay>
  );
};

export default Reviews;

