import { useEffect, useState } from 'react';
import { getEstados, getCidades } from '@/services/ibgeService';

const defaultForm = {
  estado: '',
  cidade: '',
  bairro: '',
  endereco: '',
  numero: '',
  complemento: '',
  referencia: '',
  apelido: '',
};

export const useAddressForm = (initialData?: Partial<typeof defaultForm>) => {

  const [form, setForm] = useState({ ...defaultForm, ...initialData });
  const [estados, setEstados] = useState<any[]>([]);
  const [cidades, setCidades] = useState<any[]>([]);

  useEffect(() => {
    getEstados().then(setEstados);
  }, []);

  useEffect(() => {
    if (form.estado) {
      getCidades(form.estado).then(setCidades);
    }
  }, [form.estado]);

  useEffect(() => {
    if (initialData) {
      setForm({ ...defaultForm, ...initialData });
    }
  }, [initialData]);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));

    if (field === 'estado') {
      setForm((prev) => ({ ...prev, cidade: '', bairro: '' }));
      setCidades([]); 
    }

    if (field === 'cidade') {
      setForm((prev) => ({ ...prev, bairro: '' }));
    }
  };

  const resetForm = () => {
    setForm(defaultForm);
    setCidades([]);
  };

  return {
    estados,
    cidades,
    form,
    handleChange,
    resetForm,
  };
};

