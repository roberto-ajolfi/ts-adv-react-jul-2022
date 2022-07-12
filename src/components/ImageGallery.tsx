import React, { Component } from 'react'
import { JsxElement } from 'typescript';
import ImageGalleryData from '../models/ImageGalleryData'

export interface IImageGalleryProps {
    items: ImageGalleryData[];
    children: any;
}

// CHILD COMPONENT del Compound Component
const Picture: React.FC = () => {
    return null;
}

const PreviewList: React.FC = () => {
    return null;
}

const PreviewListStatus: React.FC = () => {
    return null;
}

export default class ImageGallery extends Component<IImageGalleryProps> {
    static Picture = Picture;
    static PreviewList = PreviewList;
    static PreviewListStatus = PreviewListStatus;

  render() {
    return (
      <div>ImageGallery</div>
    )
  }
}