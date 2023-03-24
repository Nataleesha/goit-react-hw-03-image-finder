import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import Modal from "./Modal/Modal";
const URL = "https://pixabay.com/api/";
const API_KEY = "33519998-d8f719b1763760ac30c0941da";

class App extends Component {
  state = {
    query: "",
    results: [],
    page: 1,
    status: "idle",
    modalImage: {
      url: null,
      tags: null,
    },
  };

  submitHandle = (query) => {
    this.setState({ query, page: this.state.page + 1, status: "pending" });
    fetch(
      `${URL}?q=${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ results: data.hits, status: "idle" }))
      .catch((error) => console.log(error));
  };

  onLoadMoreHandle = () => {
    this.setState({ status: "pending" });
    fetch(
      `${URL}?q=${this.state.query}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.hits.length > 0) {
          this.setState({
            results: [...this.state.results, ...data.hits],
            page: this.state.page + 1,
            status: "idle",
          });
        } else {
          alert("No more results");
          return;
        }
      })
      .catch((error) => console.log(error));
  };

  openModal = ({ bigImg, alt }) => {
    this.setState({
      modalImage: {
        url: bigImg,
        tags: alt,
      },
    });
  };

  closeModal = () => {
    this.setState({
      modalImage: {
        url: null,
        tags: null,
      },
    });
  };

  render() {
    return (
      <div className="app">
        <Searchbar onSubmit={this.submitHandle} />
        {this.state.results.length > 0 && (
          <ImageGallery gallery={this.state.results} onClick={this.openModal} />
        )}
        {this.state.status === "pending" && <Loader />}
        {this.state.results.length > 0 && (
          <Button onLoadMore={this.onLoadMoreHandle} />
        )}
        {this.state.modalImage.url && (
          <Modal src={this.state.modalImage} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}

export default App;