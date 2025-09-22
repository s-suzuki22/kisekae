import { useState } from 'react'

function App() {
  const [hair, setHair] = useState('hair1.png')
  const [dress, setDress] = useState('dress1.png')
  const [accessory, setAccessory] = useState('accessory1.png')

  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <h1>きせかえゲーム</h1>

      {/* キャラクターとボタンを横並び */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '2rem' }}>
        
        {/* キャラクター表示エリア */}
        <div style={{ position: 'relative', height: '500px', width: 'auto' }}>
          <img
            src="/images/base.png"
            alt="base"
            style={{ height: '500px', display: 'block' }}
          />
          <img
            src={`/images/${hair}`}
            alt=""
            style={{ position: 'absolute', top: 0, left: 0, height: '500px' }}
          />
          <img
            src={`/images/${dress}`}
            alt=""
            style={{ position: 'absolute', top: 0, left: 0, height: '500px' }}
          />
          <img
            src={`/images/${accessory}`}
            alt=""
            style={{ position: 'absolute', top: 0, left: 0, height: '500px' }}
          />
        </div>

        {/* ボタンエリア（縦並び） */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
          <div>
            <h2>髪型</h2>
            <button onClick={() => setHair('hair1.png')}>髪1</button>
            <button onClick={() => setHair('hair2.png')}>髪2</button>
          </div>

          <div>
            <h2>服</h2>
            <button onClick={() => setDress('dress1.png')}>服1</button>
            <button onClick={() => setDress('dress2.png')}>服2</button>
          </div>

          <div>
            <h2>アクセサリ</h2>
            <button onClick={() => setAccessory('accessory1.png')}>アクセ1</button>
            <button onClick={() => setAccessory('accessory2.png')}>アクセ2</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
