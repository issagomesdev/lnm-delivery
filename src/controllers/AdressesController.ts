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
  const [bairros, setBairros] = useState<any[]>([]);

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

  const handleChange = (field: string | null, value: string | any, limit?: number) => {
    if (field) {

      value = value.replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF])/g,
        ""
      );

      value = value.replace(/[^a-zA-Z0-9À-ÿ\s.,!?;:'"()-]/g, "");

      if (limit && value.length > limit) {
        value = value.slice(0, limit);
      }

      setForm((prev) => ({ ...prev, [field]: value }));

      if (field === 'estado') {
        setForm((prev) => ({ ...prev, cidade: '', bairro: '' }));
        setCidades([]);
      }

      if (field === 'cidade') {
        setForm((prev) => ({ ...prev, bairro: '' }));
      }

      return;
    }

    setForm((prev) => ({ ...prev, ...value }));
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

