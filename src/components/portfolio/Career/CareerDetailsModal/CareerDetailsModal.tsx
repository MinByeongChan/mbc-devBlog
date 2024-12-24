import React from 'react';
import { DialogContent, DialogTitle, IconButton, Modal, Paper } from '@mui/material';
import Markdown from '@/components/Markdown';
import styled from '@emotion/styled';
import { Close } from '@mui/icons-material';

const DetailsArticleContainer = styled(Paper)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '300',
  maxWidth: '700px',
  width: '100%',
  backgroundColor: 'white',
  maxHeight: '90vh',
});

const DetailsContent = styled(DialogContent)({
  width: '100%',
  height: '550px',
  overflowY: 'auto',
});

const DialogHeader = styled.header({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

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
