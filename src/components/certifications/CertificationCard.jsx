import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { VerifiedUser } from '@mui/icons-material';

const CertificationCard = ({ certification }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card
        sx={{
          height: '100%',
          background: 'rgba(17, 17, 17, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 255, 0, 0.2)',
          '&:hover': {
            boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)',
            border: '1px solid rgba(0, 255, 0, 0.5)',
          },
        }}
      >
        <CardContent>
          <Box display="flex" alignItems="center" mb={2}>
            <VerifiedUser sx={{ color: 'primary.main', mr: 1 }} />
            <Typography variant="h6" component="div" color="primary">
              {certification.title}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {certification.issuer}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {certification.date}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CertificationCard;
