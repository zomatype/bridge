import React from 'react';
import InputField from '../Atoms/InputField';

const Modal = ({
  isOpen,
  title,
  data,
  onClose,
  onAddItem,
  onCancel,
  onConfirm,
  onChangeValue,
}) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          position: 'relative',
          backgroundColor: '#fff',
          width: '600px',
          padding: '40px',
          borderRadius: '4px',
        }}
      >
        {/* タイトル(左上に配置) */}
        <h2 style={{ position: 'absolute', top: '10px', left: '10px' }}>
          {title}
        </h2>

        {/* 閉じるボタン(右上に配置) */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'none',
            border: 'none',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          ✕
        </button>

        {/* 各フィールドの表示 */}
        <div style={{ marginTop: '50px' }}>
          {Object.entries(data).map(([key, value], index) => (
            <div key={index} style={{ marginBottom: '16px' }}>
              <InputField
                label={key}
                value={value}
                onChange={(e) => onChangeValue(key, e.target.value)}
              />
            </div>
          ))}
        </div>

        {/* 左下に「項目追加」ボタン */}
        <div style={{ position: 'absolute', left: '10px', bottom: '10px' }}>
          <button onClick={onAddItem}>項目追加</button>
        </div>

        {/* 右下に「キャンセル」ボタンと「確認」ボタン */}
        <div style={{ position: 'absolute', right: '10px', bottom: '10px' }}>
          <button onClick={onCancel} style={{ marginRight: '8px' }}>
            キャンセル
          </button>
          <button onClick={onConfirm}>確認</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
