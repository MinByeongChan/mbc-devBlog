import React from 'react';
import { DialogTitle, IconButton, Modal } from '@mui/material';
import Markdown from '@/components/Markdown';
import { Close } from '@mui/icons-material';
import {
  DetailsArticleContainer,
  DetailsContent,
  DialogHeader,
} from '@/components/portfolio/Career/CareerDetailsModal/CareerDetailsModal.style';

interface CareerDetailsModalProps {
  isOpen: boolean;
  onClose?: () => void;
  content: string;
}

export const CareerDetailsModal = ({ isOpen, onClose, content }: CareerDetailsModalProps) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <DetailsArticleContainer>
        <DialogHeader>
          <DialogTitle>서비스 상세보기</DialogTitle>
          <IconButton sx={{ marginRight: '16px' }} onClick={onClose}>
            <Close onClick={onClose} />
          </IconButton>
        </DialogHeader>
        <DetailsContent dividers>
          <Markdown content={content} />
        </DetailsContent>
      </DetailsArticleContainer>
    </Modal>
  );
};
