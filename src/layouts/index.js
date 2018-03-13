import React from 'react'
import * as PropTypes from "prop-types"
import Link from "gatsby-link"
import '../css/main.scss'
import '../css/variables.scss',
import '../css/base.scss',
import '../css/replica-regular.scss',
import '../css/replica-bold.scss',
import '../css/replica-mono.scss',
import '../css/typography.scss',
import '../css/navigation.scss',
import '../css/hero.scss',
import '../css/cards.scss',
import '../css/credits.scss',
import '../css/case.scss',
import '../css/media.scss',
import '../css/dark.scss',

import './index.scss'

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return (
      <div>
        {this.props.children()}
      </div>
    )
  }
}
