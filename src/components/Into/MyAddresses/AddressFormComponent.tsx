'use client';

import React, { useEffect, useState } from 'react';
import { Title, Overlay, ModalBox, CloseXButton } from '@/components/shared/Modal/styles';
import { useAddressForm } from '@/controllers/AdressesController';
import { Form, Field, Button } from './styles';
import { Icon } from '@iconify/react';
import { useLocation } from '@/contexts/LocationContext';
import styles from '@/components/Home/LocationSelector/LocationSelector.module.css';
import ModalComponent from '@/components/shared/Modal/ModalComponent';
interface AddressFormComponentProps {
  isOpen: boolean;
  onClose: (data?: any) => void;
  initialData?: Partial<any>;
  setLoading: (value: boolean) => void
}

const AddressFormComponent = ({ setLoading, isOpen, onClose, initialData }: AddressFormComponentProps) => {
  const { estados, cidades, form, handleChange, resetForm } = useAddressForm(initialData);
  const { address, locationError, useMyLocation } = useLocation();
  const [confirmModal, setConfirmModal] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose(form)
    resetForm()
  };

  const autoLocation = () => {
    useMyLocation();
    setLoading(true);
    if (locationError) {
      alert(locationError);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setConfirmModal(true)
  }, [address]);

  if (!isOpen) return null

  return (
    <Overlay>
      <ModalBox style={{ height: '90%', overflow: 'auto hidden', padding: 0 }}>
        <Title>{initialData ? 'Editar' : 'Cadastrar '} endereço</Title>
        <CloseXButton>
          <Icon icon={'material-symbols:close'} color="#fff" width="24" onClick={() => { onClose(), resetForm(), setConfirmModal(false) }} />
        </CloseXButton>

        {form.estado.length === 0 && (
          <h3 className={styles.locationIcon} onClick={autoLocation}>
            <img src="/images/btn_my_location.png" alt="" />
            Usar minha localização
          </h3>
        )}

        <Form onSubmit={handleSubmit}>
          <Field>
            <label>Estado</label>
            <select value={form.estado} onChange={(e) => handleChange('estado', e.target.value)}>
              <option value="">Selecione o estado</option>
              {estados.map((estado) => (
                <option key={estado.id} value={estado.sigla}>
                  {estado.nome}
                </option>
              ))}
            </select>
          </Field>

          {form.estado && (
            <Field>
              <label>Cidade</label>
              <select value={form.cidade} onChange={(e) => handleChange('cidade', e.target.value)}>
                <option value="">Selecione a cidade</option>
                {cidades.map((cidade) => (
                  <option key={cidade.id} value={cidade.nome}>
                    {cidade.nome}
                  </option>
                ))}
              </select>
            </Field>
          )}

          {form.estado && form.cidade && (
            <>
              <Field>
                <label>Bairro</label>
                <input required value={form.bairro} onChange={(e) => handleChange('bairro', e.target.value)} />
              </Field>

              <Field>
                <label>Endereço</label>
                <input required placeholder="Insira o nome da rua/avenida..." value={form.endereco} onChange={(e) => handleChange('endereco', e.target.value)} />
              </Field>

              <Field>
                <label>Número</label>
                <input required value={form.numero} onChange={(e) => handleChange('numero', e.target.value)} />
              </Field>

              <Field>
                <label>Complemento</label>
                <input required placeholder="ex: casa/apartamento n°" value={form.complemento} onChange={(e) => handleChange('complemento', e.target.value)} />
              </Field>

              <Field>
                <label>Ponto de referência</label>
                <input required value={form.referencia} onChange={(e) => handleChange('referencia', e.target.value)} />
              </Field>

              <Field>
                <label>Apelido do endereço</label>
                <input required placeholder="ex: casa, trabalho..." value={form.apelido} onChange={(e) => handleChange('apelido', e.target.value)} />
              </Field>

              <Button type="submit">Salvar endereço</Button>
            </>
          )}
        </Form>
      </ModalBox >

      <ModalComponent
        isOpen={confirmModal}
        onConfirm={() => {
          setConfirmModal(false)
          handleChange(null, address)
        }}
        onClose={() => setConfirmModal(false)}
        onConfirmText={"Confirmar Localização"}
        title={'Você esta aqui?'}
        width={380}
      >
        <strong>{address?.endereco}, {address?.bairro}, {address?.cidade} - {address?.estado}</strong>
      </ModalComponent>
    </Overlay>
  );
};

export default AddressFormComponent;