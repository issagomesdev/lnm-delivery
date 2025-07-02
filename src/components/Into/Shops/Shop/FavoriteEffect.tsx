'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import styled from 'styled-components';

interface FavoriteEffectProps {
  visible: boolean;
  like: boolean;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FavoriteEffect = ({ visible, like }: FavoriteEffectProps) => {
  return (
    <AnimatePresence>
      {visible && (
        <Overlay>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.4, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Icon
              icon={
                like? 'iconoir:heart-solid'
                  : 'ic:round-heart-broken'
              }
              color="#e63946"
              width={90}
              height={90}
            />
          </motion.div>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default FavoriteEffect;
