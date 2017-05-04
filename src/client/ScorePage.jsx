// @flow

import React from 'react'

type Props = {
  flipScore: number,
}

const ScorePage = ({ flipScore }: Props) =>
  <div className="container">
    <h2>Score page in da house!</h2>
    <p><strong>Flip:</strong> {flipScore}</p>
  </div>

export default ScorePage
