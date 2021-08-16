import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [imageUrl, setImageUrl] = useState('');

  const handleOpenModal = useCallback(
    (url: string) => {
      onOpen();
      setImageUrl(url);
    },
    [onOpen]
  );

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {cards.map(card => (
          <Card data={card} viewImage={handleOpenModal} />
        ))}
      </SimpleGrid>

      {isOpen && (
        <ModalViewImage imgUrl={imageUrl} onClose={onClose} isOpen={isOpen} />
      )}
    </>
  );
}
