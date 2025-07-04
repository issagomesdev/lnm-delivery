'use client'

import Header from "@/components/Into/Header";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from 'react';
import { Container, OrderCard, OrderInfo, StatusTag, ActionButton, Pagination } from "./styles";
import RatingComponent from "@/components/Into/MyOrders/RatingComponent";
import { Label } from "@/components/shared/Modal/styles";
import ModalComponent from "@/components/shared/Modal/ModalComponent";
import { useRouter } from 'next/navigation'
import OrderDetails from "@/components/Into/MyOrders/OrderDetails";

type Order = {
    id: string;
    name: string;
    date: string;
    status: 'pendent' | 'accepted' | 'dispatched' | 'delivered' | 'canceled';
    rating: boolean
};

const allOrders: Order[] = Array.from({ length: 30 }, (_, i) => {
    const statuses: Order['status'][] = ['pendent', 'accepted', 'dispatched', 'delivered', 'canceled'];
    return {
        id: (21777179 + i).toString(),
        name: `Loja Teste ${i + 1}`,
        date: `26/05/2025 ${String(16 + (i % 5)).padStart(2, '0')}:${String(10 + (i % 50)).padStart(2, '0')}`,
        status: statuses[i % statuses.length],
        rating: i % 2 === 0
    };
});

const statusLabels: Record<Order['status'], string> = {
    pendent: 'Pendente',
    accepted: 'Aceito',
    dispatched: 'Despachado',
    delivered: 'Entregue',
    canceled: 'Cancelado',
};

export default function MyOrders() {
    const [currentPage, setCurrentPage] = useState(1);
    const ordersPerPage = 5;
    const totalPages = Math.ceil(allOrders.length / ordersPerPage);
    const currentOrders = allOrders.slice((currentPage - 1) * ordersPerPage, currentPage * ordersPerPage);
    const [ratingIsOpen, setRatingIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [warning, setWarning] = useState({ title: '', text: '' });
    const [orderIsOpen, setOrderIsOpen] = useState(false);
    const [IDOrder, setIDOrder] = useState('');
    const router = useRouter()

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const openWarning = (title: string, text: string) => {
        setWarning({ title: title, text: text });
        setIsModalOpen(true);
    }

    const handleTrackOrder = (step: string, id: string, date: string) => {
        router.push(`/meus-pedidos/rastreio/${id}?step=${step}&date=${date}`)
    }

    useEffect(() => {
        if (orderIsOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [orderIsOpen]);

    return (
        <>
            <Header name={'Meus pedidos'} full={false} />
            {
                allOrders.length > 0 ? <Container>
                    {currentOrders.map((order) => (
                        <OrderCard key={order.id}>
                            <OrderInfo>
                                <StatusTag status={order.status}>{statusLabels[order.status]}</StatusTag>
                                <span>{order.date}</span>
                                <p>Pedido #{order.id}</p>
                                <p>{order.name}</p>
                                <strong style={{ cursor: 'pointer' }} onClick={() => { setIDOrder(order.id); setOrderIsOpen(true) }}>
                                    <Icon icon="mdi:eye" width="15" />
                                    Detalhes do pedido
                                </strong>
                            </OrderInfo>
                            {order.status === 'delivered' && order.rating ? (
                                <ActionButton color="orange" onClick={() => setRatingIsOpen(true)}><img src={'/images/my-orders/rate.png'} /> Avaliar pedido </ActionButton>
                            ) : order.status === 'delivered' && !order.rating ? (
                                <ActionButton color="green" onClick={() => openWarning('Pedido já avaliado', 'Caso queira alterar sua avaliação, favor enviar e-mail para "suporte@litoralnmesa.com.br" informando o código #21775087')}><img src={'/images/my-orders/rate.png'} /> Pedido avaliado</ActionButton>
                            ) : order.status !== 'canceled' ? (
                                <ActionButton onClick={() => handleTrackOrder(order.status, order.id, order.date)} color="blue"><img src={'/images/my-orders/acompanhar-pedido.png'} /> Acompanhar pedido</ActionButton>
                            ) : null}
                        </OrderCard>
                    ))}

                    <Pagination>
                        <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>◀◀</button>
                        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>◀</button>
                        <span>{currentPage}</span>
                        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>▶</button>
                        <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>▶▶</button>
                    </Pagination>
                </Container> : <h2 style={{ textAlign: 'center', marginTop: '1rem', color: 'grey' }}>Você ainda não possui histórico de pedidos.</h2>
            }

            <RatingComponent
                isOpen={ratingIsOpen}
                onClose={() => setRatingIsOpen(false)}
            />

            <ModalComponent
                isOpen={isModalOpen}
                onConfirm={() => setIsModalOpen(false)}
                onConfirmText={"Ok"}
                title={warning.title}
            >
                <Label>{warning.text}</Label>
            </ModalComponent>

            <OrderDetails
                isOpen={orderIsOpen}
                onClose={() => setOrderIsOpen(false)}
                id={IDOrder}
            />
        </>
    );
}
