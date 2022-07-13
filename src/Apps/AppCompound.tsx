import React from 'react'
import ImageGallery from '../components/ImageGallery'
import ImageGalleryCtx from '../components/ImageGalleryCtx';
import ImageGalleryData from '../models/ImageGalleryData'

export const AppCompound = () => {
    const images: ImageGalleryData[] = [
        {
            src: 'https://picsum.photos/id/1/200',
            altText: 'Immagine Uno'
        },
        {
            src: 'https://picsum.photos/id/10/200',
            altText: 'Seconda Immagine'
        },
        {
            src: 'https://picsum.photos/id/1016/200',
            altText: 'Terza ed Ultima'
        },
    ];
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <h2>ImageGallery con React API</h2>
                    <ImageGallery items={images}>
                        <ImageGallery.Picture />
                        <ImageGallery.PreviewList />
                        <ImageGallery.PreviewListStatus />
                    </ImageGallery>
                </div>
                <div className='col-6'>
                    <h2>ImageGallery con Context API</h2>
                    <ImageGalleryCtx items={images}>
                        <ImageGalleryCtx.PreviewListStatus />
                        <div style={{ border: "12px dotted green"}}>
                            <ImageGalleryCtx.Picture />
                        </div>
                        <ImageGalleryCtx.PreviewList />
                    </ImageGalleryCtx>
                </div>
            </div>
        </div>
    )
}
