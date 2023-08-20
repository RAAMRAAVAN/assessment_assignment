import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

// DeletableChips component
export default function DeletableChips() {
  // Function to handle chip delete action
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  // Render a stack of deletable chips
  return (
    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
      {/* Deletable chip for "UI/UX and Design" */}
      <Chip label="UI/UX and Design" variant="outlined" onDelete={handleDelete} style={{ marginBottom: "10px" }} />
      
      {/* Deletable chip for "No of Question" */}
      <Chip label="No of Question" variant="outlined" onDelete={handleDelete} style={{ marginBottom: "10px" }} />
      
      {/* Deletable chip for "Web Development" */}
      <Chip label="Web Development" variant="outlined" onDelete={handleDelete} style={{ marginBottom: "10px" }} />
      
      {/* Deletable chip for "No of Question" */}
      <Chip label="No of Question" variant="outlined" onDelete={handleDelete} style={{ marginBottom: "10px" }} />
    </Stack>
  );
}
