import React from 'react';

function GameModal({ open, game, onClose, lang, darkMode }) {
  if (!open || !game) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        animation: 'fadeIn 0.3s ease'
      }}
    >
      <div
        className={darkMode ? "blue-grey darken-4" : "white"}
        style={{
          width: '90%',
          maxWidth: '700px',
          maxHeight: '85vh',
          overflowY: 'auto',
          borderRadius: '16px',
          backgroundColor: darkMode ? "rgba(16, 24, 38, 0.97)" : "white",
          boxShadow: darkMode 
            ? "0 12px 40px rgba(0, 140, 255, 0.35)" 
            : "0 12px 40px rgba(0, 0, 0, 0.3)",
          animation: 'slideUp 0.3s ease',
          position: 'relative'
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '30px',
            borderBottom: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #eee',
            position: 'relative'
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'transparent',
              border: 'none',
              fontSize: '2em',
              cursor: 'pointer',
              color: darkMode ? '#bbb' : '#999',
              transition: 'color 0.3s ease',
              padding: '0',
              lineHeight: '1'
            }}
            onMouseEnter={(e) => e.target.style.color = darkMode ? '#fff' : '#333'}
            onMouseLeave={(e) => e.target.style.color = darkMode ? '#bbb' : '#999'}
          >
            &times;
          </button>
          <h4
            style={{
              margin: 0,
              paddingRight: '40px',
              color: darkMode ? '#fff' : '#333'
            }}
          >
            {game.title}
          </h4>
        </div>

        {/* Body */}
        <div style={{ padding: '30px' }}>
          <img
            src={game.image}
            alt={game.title}
            style={{
              width: '100%',
              maxHeight: '350px',
              objectFit: 'cover',
              borderRadius: '12px',
              marginBottom: '20px',
              filter: darkMode ? 'brightness(0.9)' : 'none'
            }}
          />

          <div style={{ marginBottom: '20px' }}>
            <h5 style={{ 
              marginTop: 0, 
              marginBottom: '10px',
              color: darkMode ? '#64B5F6' : '#2196F3'
            }}>
              Description
            </h5>
            <p style={{ 
              lineHeight: '1.8', 
              color: darkMode ? '#ccc' : '#666',
              marginBottom: '20px'
            }}>
              {game.description[lang]}
            </p>
          </div>

          {game.details && game.details[lang] && (
            <div style={{ marginBottom: '20px' }}>
              <h5 style={{ 
                marginTop: 0, 
                marginBottom: '10px',
                color: darkMode ? '#64B5F6' : '#2196F3'
              }}>
                {lang === 'fr' ? 'Détails' : 'Details'}
              </h5>
              <p style={{ 
                lineHeight: '1.8', 
                color: darkMode ? '#ccc' : '#666'
              }}>
                {game.details[lang]}
              </p>
            </div>
          )}

          {game.technologies && (
            <div style={{ marginBottom: '20px' }}>
              <h5 style={{ 
                marginTop: 0, 
                marginBottom: '10px',
                color: darkMode ? '#64B5F6' : '#2196F3'
              }}>
                {lang === 'fr' ? 'Technologies' : 'Technologies'}
              </h5>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {game.technologies.map((tech, index) => (
                  <span
                    key={index}
                    style={{
                      padding: '6px 12px',
                      backgroundColor: darkMode ? 'rgba(100, 181, 246, 0.2)' : '#e3f2fd',
                      color: darkMode ? '#64B5F6' : '#1976d2',
                      borderRadius: '20px',
                      fontSize: '0.9em',
                      fontWeight: '500'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {game.features && (
            <div style={{ marginBottom: '20px' }}>
              <h5 style={{ 
                marginTop: 0, 
                marginBottom: '10px',
                color: darkMode ? '#64B5F6' : '#2196F3'
              }}>
                {lang === 'fr' ? 'Fonctionnalités' : 'Features'}
              </h5>
              <ul style={{ 
                paddingLeft: '20px',
                color: darkMode ? '#ccc' : '#666',
                lineHeight: '1.8'
              }}>
                {game.features[lang].map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div style={{ 
            display: 'flex', 
            gap: '10px', 
            marginTop: '30px',
            justifyContent: 'flex-end'
          }}>
            {game.demo && (
              <a
                href={game.demo}
                target="_blank"
                rel="noreferrer"
                className="btn waves-effect waves-light"
                style={{
                  backgroundColor: darkMode ? '#1976d2' : '#2196F3',
                  textDecoration: 'none'
                }}
              >
                {lang === 'fr' ? 'Jouer' : 'Play Game'}
              </a>
            )}
            {game.github && (
              <a
                href={game.github}
                target="_blank"
                rel="noreferrer"
                className="btn waves-effect waves-light"
                style={{
                  backgroundColor: darkMode ? '#424242' : '#757575',
                  textDecoration: 'none'
                }}
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default GameModal;