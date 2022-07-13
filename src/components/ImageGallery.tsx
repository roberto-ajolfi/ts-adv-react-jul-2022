import React, { Component } from 'react'
import ImageGalleryData from '../models/ImageGalleryData'

export interface IImageGalleryProps {
    items: ImageGalleryData[];
    children: JSX.Element | JSX.Element[];
}

// CHILD COMPONENT del Compound Component
const Picture: React.FC<{ imageData?: ImageGalleryData }> = 
      (props: { imageData?: ImageGalleryData }) => {
    return (<div className='picture'>
      <img src={props.imageData?.src} alt={props.imageData?.altText} />
    </div>);
}
Picture.displayName = "Picture";

const PreviewList: React.FC<{ items?: ImageGalleryData[], current?: number, clickPreviewHandler?: any}> = 
    (props: { items?: ImageGalleryData[], current?: number, clickPreviewHandler?: any}) => {
  return (<div className='previewList'>
    {
      props.items?.map((item: ImageGalleryData, idx: number) => (
        <div className={`previewListItem ${ props.current === idx ? "isActive" : "" }`}
          onClick={props.clickPreviewHandler(idx)}
          key={item.altText}>
            <img src={item.src} alt={item.altText} />
        </div>
      ))
    }
  </div>);
}
PreviewList.displayName = "PreviewList";

const PreviewListStatus: React.FC<{ current?: number, total?: number }> = 
    (props: { current?: number, total?: number }) => {
  return(<div className='previewStatus'>
    { (props.current ?? 0 ) + 1 } / { props.total }
  </div>);
}
PreviewListStatus.displayName = "PreviewListStatus";

export default class ImageGallery extends Component<IImageGalleryProps> {
    static Picture = Picture;
    static PreviewList = PreviewList;
    static PreviewListStatus = PreviewListStatus;

    state = { current: 0 };

    clickPreviewHandler = (index: number) => () => {
      this.setState({ current: index });
    }

    render() {
      const { children, items } = this.props;
      const { current } = this.state;
      const { clickPreviewHandler } = this;

      const _children = React.Children.map(
        children,
        (child: any) => {
          let c;

          switch(child.type.displayName) {
            case "Picture":
              c = React.cloneElement(child, { imageData: items[current] });
              break;
            case "PreviewList":
              c = React.cloneElement(child, {
                items,
                current,
                clickPreviewHandler
              });
              break;
            case "PreviewListStatus":
              c = React.cloneElement(child, { 
                current,
                total: items.length
              });
              break;
            default:
              c = React.cloneElement(child);
          }

          return c;
        }
      );

      return (
        <div className='imageGallery'>{_children}</div>
      )
  }
}