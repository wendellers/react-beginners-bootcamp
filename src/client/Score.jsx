// @flow

import React from 'react'

type Props = {
  flipScore: number
}

const Score = ({ flipScore }: Props) =>
  <div>
    <p><strong>Flip Score:</strong> {flipScore}</p>
  </div>

export default Score
