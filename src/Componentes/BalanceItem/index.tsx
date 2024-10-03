import React, { useMemo } from 'react';

interface BalanceProps {
  data: any
}

import { Container, Label, Balance } from './styles';

export default function BalanceItem({ data }: BalanceProps) {

  const labelname = useMemo(() => {
    if (data.tag === 'receita') {
      return{
        label: 'Vendas Diárias',
        color: '00B94A'
      }
    }else if(data.tag === 'saldo'){
      return{
        label: 'Saldo Mensal',
        color: '0E10AF'
      }
    }else{
      return{
        label: 'Débitos Atuais',
        color: 'EF463A'
      }
    }
  }, [data])

  return (
    <Container bg={labelname.color}>
      <Label>{labelname.label}</Label>
      <Balance>R$ {data.saldo}</Balance>
    </Container>
  );
}