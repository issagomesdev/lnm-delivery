'use client';
import { Icon } from '@iconify/react/dist/iconify.js';
import styles from './SearchSelector.module.css';
import { useState } from 'react';

interface SearchSelectorProps {
  values: string[];
  value: string;
  onChange?: (value: string) => void;
}

export function SearchSelector({ values, value, onChange }: SearchSelectorProps) {
  const [selected, setSelected] = useState<string>(value);
  const [search, setSearch] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (newValue: string) => {
    setSelected(newValue);
    setIsOpen(false);
    setSearch('');
    if (onChange) onChange(newValue);
  };

  return (
    <div className={styles.container}>
      <div onClick={() => setIsOpen(true)} className={styles.selector}>
        <span>{selected.length > 0 ? selected : 'Selecione seu bairro'}</span>
        <Icon icon="iconamoon:arrow-down-2-light" width="20" />
      </div>
      {isOpen && (
        <Modal
          values={values}
          search={search}
          setSearch={setSearch}
          setIsOpen={() => setIsOpen(false)}
          handleSelect={handleSelect}
        />
      )}
    </div>
  );
}

interface ModalProps {
  values: string[];
  search: string;
  setSearch: (v: string) => void;
  setIsOpen: () => void;
  handleSelect: (value: string) => void;
}

function Modal({ values, search, setSearch, setIsOpen, handleSelect }: ModalProps) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <input
            type="text"
            placeholder="Onde você está?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.searchInput}
          />
          <Icon icon="mdi:magnify" width="22" color="#666" />
        </div>

        <div className={styles.modalBody}>
          <ul className={styles.optionsList}>
            <li onClick={() => handleSelect('')} className={styles.optionItem}>
              Selecione seu bairro
            </li>
            {values
              .filter((value) =>
                value.toLowerCase().includes(search.toLowerCase())
              )
              .map((value, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(value)}
                  className={styles.optionItem}
                >
                  {value}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <span onClick={() => setIsOpen()} className={styles.closeButton}>
        &times;
      </span>
    </div>
  )
}
