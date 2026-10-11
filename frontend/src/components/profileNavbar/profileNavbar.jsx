import { useState } from 'react'
import './profileNavbar.css'

export default function ProfileNavbar({ 
  name, 
  username, 
  email, 
  vestibular, 
  initials = 'HQ',
  iconSeta 
}) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={`user-profile-wrapper ${isOpen ? 'open' : ''}`}>
      <button
        type="button"
        className="user-profile-btn"
        onClick={toggleMenu}
        aria-expanded={isOpen}
      >
        <div className="user-profile-main">
          <span className="user-avatar">{initials}</span>
          <div className="user-info">
            <small>BEM-VINDA AO JARDIM</small>
            <strong>{name}</strong>
          </div>
        </div>
        {iconSeta && (
          <img 
            src={iconSeta} 
            width="16" 
            height="16" 
            alt="" 
            className={`arrow-icon ${isOpen ? 'rotate' : ''}`} 
          />
        )}
      </button>

      {isOpen && (
        <div className="profile-dropdown-content">
          <div className="user-handle-row">
            <span className="user-handle">{username}</span>
          </div>

          <div className="profile-details">
            <div className="profile-detail-item">
              <span className="detail-label">E-MAIL:</span>
              <span className="detail-value">{email}</span>
            </div>

            <div className="profile-detail-item">
              <span className="detail-label">VESTIBULAR:</span>
              <span className="badge-vestibular">{vestibular}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}