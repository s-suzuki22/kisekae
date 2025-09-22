import { useState } from 'react'

function App() {
  const [hair, setHair] = useState('hair1.png')
  const [dress, setDress] = useState('Milky_way_dress.png')
  const [bottom, setBottom] = useState('bottom1.png')
  const [boots, setBoots] = useState('boots1.png')
  const [accessory, setAccessory] = useState('accessory1.png')

  return (
    <div
      style={{
        width: '1000px',                   // 背景幅
        height: '1000px',                  // 背景高さ
        margin: '0 auto',                  // 画面中央に配置
        backgroundImage: 'url(/images/bg.png)', // 背景画像
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        padding: '1rem',
        boxSizing: 'border-box'
      }}
    >
      {/* タイトル */}
      <h1
        style={{
          color: '#ffffff',
          textShadow: '2px 2px 4px #000000',
          fontSize: '3rem',
          marginBottom: '2rem'
        }}
      >
        きせかえゲーム
      </h1>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '2rem' }}>
        
        {/* キャラクター表示 */}
        <div style={{ position: 'relative', width: '1000px', height: '1000px', margin: '0 auto' }}>
          <img src="/images/base.png" alt="base" style={{ width: '100%', height: '100%', display: 'block' }} />
          <img src={`/images/${hair}`} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
          <img src={`/images/${dress}`} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
          <img src={`/images/${bottom}`} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
          <img src={`/images/${boots}`} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
          <img src={`/images/${accessory}`} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
        </div>

        {/* ボタンエリア */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
          
          <div>
            <h2 style={{ color: '#fff' }}>服</h2>
            <button style={buttonStyle} onClick={() => setDress('Milky_way_dress.png')}>ワンピース</button>
            <button style={buttonStyle} onClick={() => setDress('dress2.png')}>長袖</button>
            <button style={buttonStyle} onClick={() => setDress('dress3.png')}>半袖</button>
          </div>

          <div>
            <h2 style={{ color: '#fff' }}>ボトムス</h2>
            <button style={buttonStyle} onClick={() => setBottom('bottom1.png')}>スカート</button>
            <button style={buttonStyle} onClick={() => setBottom('bottom2.png')}>パンツ</button>
          </div>

          <div>
            <h2 style={{ color: '#fff' }}>靴</h2>
            <button style={buttonStyle} onClick={() => setBoots('boots1.png')}>ブーツ</button>
            <button style={buttonStyle} onClick={() => setBoots('boots2.png')}>パンプス</button>
          </div>

          <div>
            <h2 style={{ color: '#fff' }}>ヘアーアクセサリ</h2>
            <button style={buttonStyle} onClick={() => setAccessory('accessory1.png')}>アクセサリー</button>
            <button style={buttonStyle} onClick={() => setAccessory('accessory2.png')}>帽子</button>
          </div>

        </div>
      </div>
    </div>
  )
}

// ボタン共通スタイル
const buttonStyle = {
  padding: '0.5rem 1rem',
  fontSize: '1rem',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: '#ff99cc',
  color: '#fff',
  boxShadow: '2px 2px 5px rgba(0,0,0,0.3)'
}

export default App
