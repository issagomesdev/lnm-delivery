'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import favoriteStyles from './FavoriteEffect.module.css';

interface FavoriteEffectProps {
  visible: boolean;
  like: boolean;
}

const FavoriteEffect = ({ visible, like }: FavoriteEffectProps) => {
  return (
    <AnimatePresence>
      {visible && (
        <div className={favoriteStyles.overlay}>
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
        </div>
      )}
    </AnimatePresence>
  );
};

export default FavoriteEffect;
