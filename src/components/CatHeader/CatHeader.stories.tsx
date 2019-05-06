import * as React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'
import CatHeader from "./CatHeader"

// const withReadme = (require('storybook-readme/with-readme') as any).default
// const readme = require('./README.md')

const PreparedHeader = (
  <CatHeader
    title="A great long title with some amount of an accurate details"
  />
)

storiesOf('components|CatHeader', module)
  .addDecorator(withKnobs)
  // .addDecorator(withReadme(readme))
  .add('desktop', () => PreparedHeader)
  .addParameters({viewport: {defaultViewport: 'iphone6'}})
  .add('small 375x667', () => PreparedHeader)
  .addParameters({viewport: {defaultViewport: 'pixel'}})
  .add('small 540x960', () => PreparedHeader)
  .addParameters({viewport: {defaultViewport: 'Laptop'}})
  .add('large 1024x768', () => PreparedHeader)