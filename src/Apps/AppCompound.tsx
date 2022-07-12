import React from 'react'
import ImageGallery from '../components/ImageGallery'
import ImageGalleryData from '../models/ImageGalleryData'

export const AppCompound = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-6'>
                {/* ImageGallery con React API */}
                <ImageGallery items={[]}>
                    <ImageGallery.Picture />
                    <ImageGallery.PreviewList />
                    <ImageGallery.PreviewListStatus />
                </ImageGallery>
            </div>
            <div className='col-6'>
                {/* ImageGallery con Context API */}
            </div>
        </div>
    </div>
  )
}
