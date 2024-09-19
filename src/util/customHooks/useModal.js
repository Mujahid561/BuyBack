import React, { useState } from 'react'

function useModal() {
    const [open, setOpen] = useState(false);

    const handleClose = (e) => {
        e.stopPropagation()
        setOpen(false);
     
    };
  
    const handleOpen = (e) => {
        e.stopPropagation()
        setOpen(true);
    };
  return [open,handleOpen,handleClose]
}

export default useModal
