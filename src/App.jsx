import { useState } from 'react'

function App() {
  const [hair, setHair] = useState('hair1.png')
  const [dress, setDress] = useState('dress1.png')
  const [accessory, setAccessory] = useState('accessory1.png')

  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <h1 style={{ fontSize: '2rem', color: 'hotpink' }}>🌸 きせかえゲーム 🌸</h1>

      {/* キャラクター表示エリア */}
       <div style={{ position: 'relative', width: '500px', margin: '0 auto' }}>
  <img src="/images/base.png" alt="base" style={{ width: '100%', display: 'block', zIndex: 1 }} />
  ...
</div>
        {/* 素体 */}
        <img
          src="/images/base.png"
          alt="base"
          style={{ width: '100%', display: 'block', zIndex: 1 }}
        />
        {/* 髪型 */}
        <img
          src={`/images/${hair}`}
          alt=""
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 2,
          }}
        />
        {/* 服 */}
        <img
          src={`/images/${dress}`}
          alt=""
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 3,
          }}
        />
        {/* アクセサリ */}
        <img
          src={`/images/${accessory}`}
          alt=""
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 4,
          }}
        />
      </div>

      {/* 髪型選択 */}
      <div style={{ marginTop: '1rem' }}>
        <h2>髪型</h2>
        <button onClick={() => setHair('hair1.png')}>髪1</button>
        <button onClick={() => setHair('hair2.png')}>髪2</button>
      </div>

      {/* 服選択 */}
      <div style={{ marginTop: '1rem' }}>
        <h2>服</h2>
        <button onClick={() => setDress('dress1.png')}>服1</button>
        <button onClick={() => setDress('dress2.png')}>服2</button>
      </div>

      {/* アクセサリ選択 */}
      <div style={{ marginTop: '1rem' }}>
        <h2>アクセサリ</h2>
        <button onClick={() => setAccessory('accessory1.png')}>アクセ1</button>
        <button onClick={() => setAccessory('accessory2.png')}>アクセ2</button>
      </div>
    </div>
  )
}

export default App

