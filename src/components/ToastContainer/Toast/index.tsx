import React, { useEffect } from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../hooks/toast';

import { Container } from './styles';

interface TostProps {
  message: ToastMessage;
  style: object;
}

const Toast: React.FC<TostProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setInterval(() => removeToast(message.id), [3000]);

    return () => {
      clearInterval(timer);
    };
  }, [removeToast, message]);

  return (
    <Container
      key={message.id}
      type={message.type}
      hasDescription={!!message.description}
      style={style}
    >
      <FiAlertCircle size={20} />
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>
      <button type="button" onClick={() => removeToast(message.id)}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
