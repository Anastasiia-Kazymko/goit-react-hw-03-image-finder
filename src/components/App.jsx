import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { App } from 'components/App.styled';
import 'react-toastify/dist/ReactToastify.css';

export class ImageFinder extends React.Component {
  state = {
    imageSearch: '',
  };

  hadleFornSubmit = imageSearch => {
    this.setState({ imageSearch });
  };

  render() {
    return (
      <App>
        <Searchbar onSubmit={this.hadleFornSubmit} />
        <ImageGallery imageSearch={this.state.imageSearch} />
        <ToastContainer autoclose={3000} />
      </App>
    );
  }
}
