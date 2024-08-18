import '@pixi/spine-pixi'
import * as PIXI from 'pixi.js'
import { gsap } from 'gsap'
import { PixiPlugin } from 'gsap/PixiPlugin'
import { Spine } from '@pixi/spine-pixi'
import GUI from 'lil-gui'
import './reset.css'

const VITE_GITHUB_PAGES_PATH =
  import.meta.env.BASE_URL !== '/' ? `${import.meta.env.BASE_URL}` : ''

const app = new PIXI.Application()

// gsap plugin
gsap.registerPlugin(PixiPlugin)
PixiPlugin.registerPIXI(PIXI)

// lil-gui
const gui = new GUI()
const testFolder = gui.addFolder('test folder')
testFolder.add({ alpha: 1 }, 'alpha', 0, 1, 0.001)
testFolder
  .addColor({ color: 0xff5252 }, 'color')
  .onChange((updatedvalue: number) => {
    console.log('updatedvalue: ', updatedvalue)
  })

const init = async () => {
  await app.init({
    resizeTo: window,
    background: '#1099bb'
  })
  document.body.appendChild(app.canvas)

  // assets
  await PIXI.Assets.load([
    {
      alias: 'modelSkeleton',
      src: `${VITE_GITHUB_PAGES_PATH}/assets/spines/model.json`
    },
    {
      alias: 'modelAtlas',
      src: `${VITE_GITHUB_PAGES_PATH}/assets/spines/model.atlas`
    }
  ])

  // spine
  const spine = Spine.from({
    skeleton: 'modelSkeleton',
    atlas: 'modelAtlas'
  })
  spine.scale.set(0.25)
  spine.state.setAnimation(0, 'idle', true)

  // container
  const container = new PIXI.Container()
  container.pivot.set(0.5, 0.5)
  container.position.set(app.screen.width / 2, app.screen.height / 2)
  container.addChild(spine)
  app.stage.addChild(container)

  // gsap timeline
  const timeline = gsap.timeline({ defaults: { duration: 2 } })
  timeline
    .to(container, { pixi: { colorize: 'red', colorizeAmount: 1 } })
    .to(container, { pixi: { hue: 180 } })
    .to(container, { pixi: { scale: 1.75 } })
    .to(container, { pixi: { saturation: 0 } })
    .to(container, { pixi: { brightness: 2 } })
    .to(container, { pixi: { contrast: 1.5 } })
    .to(container, { pixi: { scale: 1 } })
}

init()
