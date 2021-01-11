import React, { useState } from 'react'
import useWindowSize from './useWindowSize'

const App = () => {
  const [columns, setColumns] = useState('three')
  const { width } = useWindowSize()

  return (
    <>
      <div className="controls">
        <label>
          <input
            type="radio"
            checked={columns === 'three'}
            onChange={() => setColumns('three')}
          />
          Three columns
        </label>
        <label>
          <input
            type="radio"
            checked={columns === 'two'}
            onChange={() => setColumns('two')}
          />
          Two columns
        </label>
        <label>
          <input
            type="radio"
            checked={columns === 'one'}
            onChange={() => setColumns('one')}
          />
          One column
        </label>
      </div>
      <div className={`page-wrapper ${columns}`}>
        <div className="content-wrapper">
          <nav className="menu">
            <h2>Egestas vel puru</h2>
            <ul>
              <li>sollicitudin nunc</li>
              <li>Sit lectus nibh dictum suspendisse phasellus</li>
              <li>At leo</li>
              <li>Sit lectus nibh d</li>
              <li>suspendisse phasellus</li>
              <li>Sit lectus nibh dictum suspendisse phasellus</li>
              <li>Convallis dui cursus duis justo</li>
              <li>Amet et platea fringilla tempus cras</li>
              <li>Sit lectus nibh dictum suspendisse phasellus</li>
              <li>
                Eget sodales augue sit neque, pretium blandit. Egestas nunc amet
                non tortor
              </li>
              <li>sed pharetra, massa</li>
            </ul>
          </nav>
          <div className="content">
            <h1>
              {width > 960 ? 'Desktop' : width > 548 ? 'Tablet' : 'Mobile'}{' '}
              {width}px
            </h1>
            <p>
              Ultricies malesuada posuere consequat est, purus commodo
              fermentum. Platea quis velit, mauris pellentesque vulputate urna
              ut et accumsan. Sagittis mi ut molestie dolor, accumsan consequat.
              Ipsum sed purus massa arcu. Sit lectus nibh dictum suspendisse
              phasellus aliquam malesuada sit aliquet. Mauris sed sed dolor dui
              duis libero facilisi nisl sagittis. Mattis feugiat id elit
              adipiscing nullam et sit non diam. Nibh ultrices eu enim et.
              Mauris nam justo tempus cursus. Et nunc at sit ultrices sit eros
              varius eget. At leo, libero imperdiet id mattis faucibus. Elit
              massa maecenas eget augue.
            </p>
            <p>
              Adipiscing consequat hac commodo id. Lectus facilisis viverra
              dictum morbi quam sit sit. Risus, at fusce tristique et habitant
              vel libero facilisis. Consequat eget lectus nulla sed lectus nisi.
              Purus quis urna leo turpis tincidunt.
            </p>
            <p>
              Convallis dui cursus duis justo. Vulputate in enim urna consequat
              et. Arcu facilisi nibh at risus feugiat. Dictumst bibendum ut
              sagittis suspendisse. Amet et platea fringilla tempus cras. Eget
              sodales augue sit neque, pretium blandit. Egestas nunc amet non
              tortor vitae ultrices facilisi. Sed tellus tincidunt sed pharetra,
              massa. Suspendisse adipiscing et aliquam duis elit. Aliquam
              curabitur et eget neque nec. Cursus ornare felis, aenean blandit
              id sit diam. Amet, est vel, lectus libero amet consectetur eget
              gravida amet. Ut tincidunt auctor ac sed. Vitae, volutpat nulla
              maecenas eleifend purus odio neque sit. Etiam sed enim in diam
              habitasse pulvinar sagittis duis. Et neque in aliquet ultrices
              lorem pretium sed neque, tristique. Et cursus enim volutpat
              volutpat. Vitae arcu, nulla magna pellentesque nullam et facilisis
              vel. Morbi elementum velit malesuada rhoncus, placerat adipiscing
              sit lorem.
            </p>
          </div>
          <div className="sidebar">
            <h2>Lorem ipsum dolor sit amet</h2>
            <ul>
              <li>sollicitudin nunc</li>
              <li>urna ut et accumsan</li>
              <li>purus commod</li>
              <li>adipiscing</li>
              <li>ectus facilisis</li>
            </ul>
            <h2>Blandit id sit diam</h2>
            <ul>
              <li>quis urna leo turpis</li>
              <li>urna consequat</li>
              <li>get sodales augue sit neque</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
