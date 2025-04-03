import React from 'react';
import './OrderConfirmationModal.css';
import CheckmarkIcon from '../image/Checkbox.svg';
import { useEffect } from 'react';

const OrderConfirmationModal = ({ onClose }) => {
    useEffect(() => {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Скрыть через 3 секунды

      return () => clearTimeout(timer); // Очистка
    }, [onClose]);

  return (
    <div className="order-confirmation-overlay">
      <div className="order-confirmation-modal">
        <h2>Ваш заказ принят в работу!</h2>
        <div className="checkmark-container">
          <img src={CheckmarkIcon} alt="Галочка" />
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;