import React, { Component } from 'react'
import ImageGalleryData from '../models/ImageGalleryData';
import { IImageGalleryProps } from './ImageGallery';

interface IImageGalleryContext {
    current: number;
    currentItem: ImageGalleryData;
    items: ImageGalleryData[];
    clickPreviewHandler: any;
    total: number;
}

const ImageGalleryContext = React.createContext({} as IImageGalleryContext);
const { Provider, Consumer } = ImageGalleryContext;

// CHILD COMPONENT del Compound Component
const Picture: React.FC = () => (
    <Consumer>
        {(ctx: IImageGalleryContext) => (
            <div className='picture'>
                <img src={ctx.currentItem.src} alt={ctx.currentItem.altText} />
            </div>
        )}
    </Consumer>
);
Picture.displayName = "Picture";

const PreviewList: React.FC = () => {
    const ctx = React.useContext(ImageGalleryContext);
    return (<div className='previewList'>
        {
        ctx.items.map((item: ImageGalleryData, idx: number) => (
            <div className={`previewListItem ${ ctx.current === idx ? "isActive" : "" }`}
            onClick={ctx.clickPreviewHandler(idx)}
            key={item.altText}>
                <img src={item.src} alt={item.altText} />
            </div>
        ))
        }
    </div>);
}
PreviewList.displayName = "PreviewList";

const PreviewListStatus: React.FC = () => {
    const ctx = React.useContext(ImageGalleryContext);
    return(<div className='previewStatus'>
        { (ctx.current ?? 0 ) + 1 } / { ctx.total }
    </div>);
}
PreviewListStatus.displayName = "PreviewListStatus";

export default class ImageGalleryCtx extends Component<IImageGalleryProps> {
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

        return (
            <Provider value={{
                current,
                currentItem: items[current],
                items,
                clickPreviewHandler,
                total: items.length
            } as IImageGalleryContext}>
                <div className='imageGallery'>{children}</div>
            </Provider>
            
        )
    }
}
