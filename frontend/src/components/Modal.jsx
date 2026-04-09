import { X } from 'lucide-react'

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl animate-scaleIn">
        <div className="flex items-center justify-between p-6 border-b border-blue-100">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button onClick={onClose} className="hover:bg-gray-100 p-2 rounded-lg transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  )
}
