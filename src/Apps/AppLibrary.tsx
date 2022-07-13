import React from 'react'
import GoldMedal, { PrimoDegliUltimi, SilverMedal } from 'advanced-react-package';
import WoodMedal from 'advanced-react-package';

export const AppLibrary = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className="col-3">
                <GoldMedal name="Roberto Ajolfi" />
            </div>
            <div className="col-3">
                <SilverMedal name="Usain Bolt" />
            </div>
            <div className="col-3">
                <PrimoDegliUltimi name="Speedy Gonzales" />
            </div>
            <div className="col-3">
                <WoodMedal name="Bip Bip" />
            </div>
        </div>
    </div>
  )
}
