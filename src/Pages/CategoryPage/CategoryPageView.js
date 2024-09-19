import React from 'react'
import Modal from '../../components/Modal'
import useModal from '../../util/customHooks/useModal';

function CategoryPageView() {

  const [open,handleOpen,handleClose]=useModal()
  return (
    // <div className='w-[90%] mx-auto my-6 min-h-[70vh] bg-white shadow-lg'>
    
    // </div>
    // <Modal/>
    
      <div
          style={{
              textAlign: "center",
              display: "block",
              padding: 30,
              margin: "auto",
          }}
      >
          <h1 style={{ color: "green" }}>
              GeeksforGeeks
          </h1>
          <h4>Modal Component in ReactJS?</h4>
          <button type="button" onClick={handleOpen}>
              Click Me to Open Modal
          </button>
          <Modal isOpen={open} onClose={handleClose}>
              <>
                <h1>are you sure, You want to delete your account? </h1>
                 <button className='bg-black text-white px-3 py-2'>Cancel</button>
                 <button className='bg-black text-white px-3 py-2'>Proceed</button>
              </>
          </Modal>
      </div>
  );
  
}

export default CategoryPageView
