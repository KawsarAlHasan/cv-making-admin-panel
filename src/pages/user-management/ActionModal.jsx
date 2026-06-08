import { useState } from 'react'
import { Switch, Button, Modal } from 'antd'
import { FiTrash2, FiX } from 'react-icons/fi'

export default function ActionModal({ open, onClose }) {
  const [disabled, setDisabled] = useState(true)

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      closeIcon={
        <div className="w-7 h-7 bg-gray-900 rounded-full flex items-center justify-center">
          <FiX className="text-white text-sm" />
        </div>
      }
      width={480}
      centered
      styles={{ content: { borderRadius: 16, padding: '28px 32px' } }}
    >
      <h2 className="text-center text-xl font-semibold mb-6" style={{ color: '#f26b4e' }}>
        Action
      </h2>

      <div className="flex items-center justify-between py-4 border-b border-gray-100">
        <span className="font-semibold text-gray-900 text-base">Disable User Access</span>
        <Switch
          checked={disabled}
          onChange={setDisabled}
          style={{ backgroundColor: disabled ? '#f26b4e' : '#d1d5db' }}
        />
      </div>

      <div className="flex items-center justify-between py-4">
        <span className="font-semibold text-gray-900 text-base">Delete User Account</span>
        <Button
          danger
          type="primary"
          icon={<FiTrash2 />}
          style={{
            backgroundColor: '#f26b4e',
            borderColor: '#f26b4e',
            borderRadius: 8,
            fontWeight: 600,
            height: 38,
            paddingInline: 20,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          Delete
        </Button>
      </div>
    </Modal>
  )
}
