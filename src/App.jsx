import { useState } from 'react'

function App() {
  const [hair, setHair] = useState('hair1.png')
  const [dress, setDress] = useState('Milky_way_dress.png')
  const [accessory, setAccessory] = useState('accessory1.png')
  const [bottom, setBottom] = useState('bottom1.png')   // ボトムス追加
  const [boots, setBoots] = useState('boots1.png')     // ブーツ追加

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
            src={`/images/${bottom}`}
            alt=""
            style={{ position: 'absolute', top: 0, left: 0, height: '500px' }}
          />
          <img
            src={`/images/${boots}`}
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
            <h2>服</h2>
            <button onClick={() => setDress('Milky_way_dress.png')}>ワンピース</button>
            <button onClick={() => setDress('dress2.png')}>長袖</button>
            <button onClick={() => setDress('dress2.png')}>半袖</button>
          </div>

          <div>
            <h2>ボトムス</h2>
            <button onClick={() => setBottom('celestial_bottoms.png')}>スカート</button>
            <button onClick={() => setBottom('bottom2.png')}>パンツ</button>
          </div>

          <div>
            <h2>靴</h2>
            <button onClick={() => setBoots('night_boots.png')}>ブーツ</button>
            <button onClick={() => setBoots('boots2.png')}>パンプス</button>
          </div>

          <div>
            <h2>ヘアーアクセサリ</h2>
            <button onClick={() => setAccessory('accessory1.png')}>アクセサリー</button>
            <button onClick={() => setAccessory('accessory2.png')}>帽子</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
